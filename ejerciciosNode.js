const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: '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', // Esto es el valor por defecto y se puede omitir
});

async function main() {
  const stream = await openai.beta.chat.completions.stream({
    model: 'gpt-3.5-turbo-0613',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  });

  stream.on('content', (content) => {
    console.log(content.choices[0].message.content);
  });
}

main(); // Llamada a la función main para ejecutarla



