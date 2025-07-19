const localModels = ['phi3:medium-128k', 'deepseek-r1:8b', 'qwen:1.8b'];
const groqModels = ['moonshotai/kimi-k2-instruct', 'gemma2-9b-it', 'llama-3.3-70b-versatile'];

async function fetchFromModel(model, prompt, useGroq) {
  if (useGroq) {
    try {
      const res = await fetch('http://localhost:3000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, prompt })
      });
      const data = await res.json();
      return data.response || 'No response';
    } catch (err) {
      return `Groq API Error: ${err.message}`;
    }
  } else {
    try {
      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, prompt, stream: false })
      });
      const data = await res.json();
      return data.response || 'No response';
    } catch (err) {
      return `Local LLM Error: ${err.message}`;
    }
  }
}

async function compare() {
  const template = document.getElementById('qaTemplate').value;
  const input = document.getElementById('prompt').value;
  const finalPrompt = template + input;
  const useGroq = document.getElementById('useGroq').checked;

  const models = useGroq ? groqModels : localModels;

  document.getElementById('outputA').innerText = 'Loading...';
  document.getElementById('outputB').innerText = 'Loading...';
  document.getElementById('outputC').innerText = 'Loading...';

  const [outA, outB, outC] = await Promise.all([
    fetchFromModel(models[0], finalPrompt, useGroq),
    fetchFromModel(models[1], finalPrompt, useGroq),
    fetchFromModel(models[2], finalPrompt, useGroq)
  ]);

  document.getElementById('outputA').innerText = outA;
  document.getElementById('outputB').innerText = outB;
  document.getElementById('outputC').innerText = outC;

  // update model headers dynamically
  document.querySelectorAll('.results h3')[0].innerText = models[0];
  document.querySelectorAll('.results h3')[1].innerText = models[1];
  document.querySelectorAll('.results h3')[2].innerText = models[2];
}
