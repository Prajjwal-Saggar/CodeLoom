const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

async function generateContent(content) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: `
 When a code snippet is provided, respond strictly in the following format:

## 📌 **Time Complexity**
**O(...)**

## 📦 **Space Complexity**
**O(...)**

## ⭐ **Review**
**X / 5**

## 📊 **Plagiarism**
**X%**

## ⏱️ **Execution Time**
**X sec**

## ❌ **Error**
**Mention exact line & issue if any**

🎯 Keep response minimal, clear, and formal.  
🚫 No extra explanations, just this structure with markdown formatting and emojis.
 `,
  });
  const result = await model.generateContent(content);
  return result.response.text();
}

module.exports = { generateContent };
