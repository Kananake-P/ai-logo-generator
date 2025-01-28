const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const AIDesignIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Based on Logo of type Modren Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with description: Indian Restaurant and referring to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "ideas": [\n    "Chef Elephant with spices",\n    "Smiling Tiger holding Naan",\n    "Friendly Maharaja with curry",\n      "Animated Saffron clad cook"\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const AILogoPropmt = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a text prompt to create Logo for Logo Title/Brand name : Indian Restaurant,with description: Indian retro, with Color combination of Earthy Browns, also include the undefined and include Modern Mascot Logos design idea and Referring to this Logo Prompt:A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.  Give me result in JSON portal with prompt field only\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "prompt": "Create a logo for an Indian Restaurant with a retro feel, using earthy brown color combinations. Design a modern mascot logo that incorporates a friendly, animated character with a playful expression. This character should be dressed in a classic uniform, incorporating a distinctive accessory that adds personality. The mascot should hold a signature item that represents Indian cuisine. Include small decorative touches or natural accents to enhance the overall look.  The background should feature a bold, circular design with subtle accents to highlight the character. The brand name \\"Indian Restaurant\\" should be displayed below the mascot in bold, stylized lettering with a slight curve and complementary decorative lines. The overall style should be fun, welcoming, and full of character, reflecting a retro yet modern Indian dining experience."\n}\n```\n',
        },
      ],
    },
  ],
});
// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
