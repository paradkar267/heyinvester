import { GoogleGenAI } from '@google/genai';
import properties from '../src/data/properties.js';

// Strip long descriptions to save tokens
const strippedProperties = properties.map(p => {
  const { description, additionalDetails, image, ...rest } = p;
  return rest;
});

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const systemInstruction = `You are an expert real estate AI assistant for Hey Investor Pvt. Ltd.
Your goal is to help users find the perfect property from our available inventory and answer questions about the company.

AVAILABLE PROPERTIES:
${JSON.stringify(strippedProperties, null, 2)}

INSTRUCTIONS:
1. Recommend ONLY properties from the provided list. Never invent or hallucinate properties.
2. Only recommend properties that match the user's criteria (e.g., residential vs commercial, location, etc.).
3. If the user's budget, preferred location, or property type is completely missing and you need more info to make a good recommendation, you can ask at most ONE clarifying question in your reply and set "needs_more_info" to true.
4. Keep your replies concise, friendly, and professional. Do not repeat the full property details in the text, as they will be displayed as cards below your message. Just mention the names and why they fit.
5. If the user greets you, greet them back and ask what they are looking for.

STRICT RULES:
1. You can ONLY answer questions related to this website — its products, services, pricing, policies, features, contact info, and general company information.
2. If a user asks anything unrelated to this website (general knowledge, other companies, personal advice, coding help, etc.), politely decline and redirect them back to website-related topics. Example: "I can only help with questions about Hey Investor Pvt. Ltd. Is there something about our properties or services I can help you with?"
3. Base your answers ONLY on the provided website content/knowledge base above. Do not use external knowledge or make assumptions.
4. If the answer isn't available in the provided website content, say: "I don't have that information right now, but you can contact our support team at info@heyinvestor.in or +91-9325650256 for further help."
5. Keep responses concise, friendly, and professional.

You MUST respond in strict JSON format matching exactly this structure:
{
  "reply": "Your conversational response to the user.",
  "recommended_slugs": ["kamla-greens", "saraswati-nagari-8"],
  "needs_more_info": false
}`;

    // Convert messages array into Gemini format
    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
      }
    });

    const assistantMessage = response.text;
    
    // Parse the JSON response
    let parsedData;
    try {
      parsedData = JSON.parse(assistantMessage);
    } catch (parseError) {
      console.error("Failed to parse Gemini JSON response:", parseError, assistantMessage);
      return res.status(500).json({ error: 'Failed to process AI response properly. Please try again.' });
    }

    return res.status(200).json(parsedData);
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({ error: 'Internal server error processing chat request.' });
  }
}
