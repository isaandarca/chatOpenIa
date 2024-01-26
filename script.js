// Reemplaza con tus propias credenciales de la API de OpenAI
const apiKey = "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";

async function getCompletion(prompt) {
  const response = await fetch(
    `
  https://api.openai.com/v1/chat/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        // prompt: "give a random example of programming language",
        messages: [{ role: "user", content: prompt }],
      }),
    }
  );

  const data = await response.json();
  // console.log(data)
  return data;
}

// getCompletion()

const prompt = document.querySelector("#user-input");
const button = document.querySelector("#send-button");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
  if (!prompt.value) return;
  const data = await getCompletion(prompt.value);
  console.log(data);
  output.innerHTML += `<p><strong>Usuario:</strong> ${prompt.value}</p>`;
  output.innerHTML += `<p><strong>IA:</strong> ${data.choices[0].message.content}</p>`;

  prompt.value = "";
});
