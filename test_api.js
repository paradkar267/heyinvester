import 'dotenv/config';
import handler from './api/chat.js';

async function test() {
  const req = {
    method: 'POST',
    body: {
      messages: [{ role: 'user', content: 'I want a residential plot near Amravati road.' }]
    }
  };

  const res = {
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    json: function(data) {
      console.log('Status:', this.statusCode);
      console.log('Response:', JSON.stringify(data, null, 2));
    }
  };

  await handler(req, res);
}

test();
