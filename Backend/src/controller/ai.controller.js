const { generateContent } = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    if (!req.body || !req.body.prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required in request body",
      });
    }

    const { prompt } = req.body || req.body.prompt;
    const response = await generateContent(prompt);
   
    res.send(response)
  } catch (error) {
    console.error("Error in getReview:", error);
    res.status(500).json({
      success: false,
      error: "Failed to generate review",
    });
  }
};
