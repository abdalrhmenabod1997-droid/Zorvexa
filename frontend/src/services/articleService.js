import axios from "axios";

const API = "http://localhost:5000/api/articles";

export const getArticles = async () => {
  const { data } = await axios.get(API);
  return data.articles;
};

export const getArticle = async (id) => {
  const { data } = await axios.get(`${API}/${id}`);
  return data.article;
};
