import Article from "../models/Article.js";

export const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);

    res.status(201).json({
      success: true,
      article
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: articles.length,
      articles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate("author", "name email");

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found"
      });
    }

    article.views += 1;
    await article.save();

    res.json({
      success: true,
      article
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found"
      });
    }

    res.json({
      success: true,
      message: "Article deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
