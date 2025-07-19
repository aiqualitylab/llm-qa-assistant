# LLM QA Assistant – Compare & Validate QA Tasks with Local LLMs

Compare outputs from 3 locally hosted LLMs using [Ollama](https://ollama.com).  
This tool helps QA professionals validate AI outputs for test automation, bug triage, and more.

---

## 🚀 Features

- Compare 3 open-source LLMs at once
- Fully offline with Ollama
- Fast, lightweight, and private
- Simple, responsive UI with QA-focused tools

---

## 🧱 Requirements

- [Ollama](https://ollama.com/)
- [VS Code](https://code.visualstudio.com/) + Live Server

---

## 🎯 QA-Specific Tasks Supported

- Generate test cases from requirements
- Convert scenarios to Gherkin
- Summarize test failures or logs
- Generate assertion code from plain language
- Compare coverage across models
- Explain automation errors (stack traces, type errors)

---

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/llm-qa-assistant.git
cd llm-qa-assistant

ollama pull phi3:medium-128k
ollama pull deepseek-r1:8b
ollama pull qwen:1.8b

ollama serve
```

Open `index.html` using Live Server in VS Code.  
Type a QA prompt and click "Compare Models".

---

## 📷 Screenshot

Example: Comparing test case generation for a login form.

![QA LLM Comparator UI](image.png)

---

## 📃 License

MIT — free for personal or commercial use.

---

## 🙌 Contribute

Pull requests are welcome!  
Open issues to suggest improvements or request more QA prompt templates.
