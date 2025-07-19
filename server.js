// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://127.0.0.1:5500', // your frontend origin
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.post('/api/generate', async (req, res) => {
  const { prompt, model } = req.body;

  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    })
  });

  const data = await groqRes.json();
  res.json({ response: data.choices?.[0]?.message?.content || 'No response' });
});

app.listen(3000, () => console.log('✅ Groq API proxy running at http://localhost:3000'));
