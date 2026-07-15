import { useState, useRef, useEffect } from 'react';
import { X, MessageSquare, Send, Bot, Sparkles, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import properties from '../data/properties';
import PropertyCard from './PropertyCard';

const defaultMessages = [
  { role: 'assistant', content: "Hello! I'm your Hey Investor AI assistant. What kind of property are you looking for today? (e.g., budget, location, residential or commercial)", type: 'text' }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('heyInvestorChatHistory');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultMessages;
      }
    }
    return defaultMessages;
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('heyInvestorChatHistory', JSON.stringify(messages));
  }, [messages]);

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear your chat history?')) {
      setMessages(defaultMessages);
      localStorage.removeItem('heyInvestorChatHistory');
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim(), type: 'text' };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Send only text messages to the API (filter out our custom UI messages)
      const apiMessages = newMessages
        .filter(m => m.type !== 'property_card' && m.type !== 'typing')
        .map(m => ({ role: m.role, content: String(m.content) }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('DEV_SERVER_ERROR');
        }
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Add assistant text reply
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply, type: 'text' }]);
      }

      // Add property cards if recommended
      if (data.recommended_slugs && data.recommended_slugs.length > 0) {
        const recommendedProperties = data.recommended_slugs
          .map(slug => properties.find(p => p.slug === slug))
          .filter(Boolean); // Remove undefined if slug doesn't match
          
        if (recommendedProperties.length > 0) {
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: recommendedProperties, type: 'property_card' }
          ]);
        }
      }

    } catch (error) {
      console.error("Chat error:", error);
      if (error.message === 'DEV_SERVER_ERROR') {
        toast.error('API Error: Please stop this server and run "npx vercel dev" to test the AI!', { duration: 6000 });
      } else {
        toast.error('Failed to get a response. Please make sure your API key is added to .env!', { duration: 6000 });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        className={`chat-widget-toggle ${!isOpen ? 'pulse-anim' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>

      {/* Chat Panel */}
      <div className={`chat-widget-panel ${isOpen ? 'is-open' : ''}`}>
        <div className="chat-widget-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="chat-header-avatar">
              <Bot size={20} color="var(--green-950)" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--white)', fontWeight: '600' }}>Property AI</h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>Online • Replies instantly</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button onClick={clearHistory} title="Clear Chat History" style={{ background: 'transparent', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 0.2s' }} className="chat-close-btn">
              <Trash2 size={18} />
            </button>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 0.2s' }} className="chat-close-btn">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="chat-widget-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message-wrapper ${msg.role}`}>
              {msg.type === 'text' && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', maxWidth: '85%' }}>
                  {msg.role === 'assistant' && (
                    <div className="chat-bot-avatar">
                      <Bot size={16} />
                    </div>
                  )}
                  <div className={`chat-message ${msg.role}`} dangerouslySetInnerHTML={{ 
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br/>')
                  }} />
                </div>
              )}
              {msg.type === 'property_card' && (
                <div className="chat-property-cards">
                  {msg.content.map((prop, i) => (
                    <div key={i} className="chat-property-card-wrapper">
                      <PropertyCard property={prop} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="chat-message-wrapper assistant">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', maxWidth: '85%' }}>
                <div className="chat-bot-avatar">
                  <Bot size={16} />
                </div>
                <div className="chat-message assistant typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-quick-options" style={{ padding: '0 var(--space-4)', paddingBottom: 'var(--space-2)' }}>
          <button onClick={() => sendMessage("Looking for residential properties")} className="quick-option-btn">🏡 Residential</button>
          <button onClick={() => sendMessage("Looking for commercial properties")} className="quick-option-btn">🏢 Commercial</button>
          <button onClick={() => sendMessage("I want to book a site visit")} className="quick-option-btn">📅 Book Site Visit</button>
          <button onClick={() => sendMessage("Where is your office located?")} className="quick-option-btn">📍 Office Location</button>
          <button onClick={() => sendMessage("Can I talk to a real agent?")} className="quick-option-btn">📞 Talk to Agent</button>
        </div>

        <form onSubmit={handleSubmit} className="chat-widget-input-area">
          <div className="chat-input-wrapper">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="form-input"
              disabled={isLoading}
            />
            <button type="submit" className="btn btn--primary" disabled={isLoading || !input.trim()}>
              <Send size={18} style={{ marginLeft: '-2px' }} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
