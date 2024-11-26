import axios from 'axios';

const API_KEY = '1319900191734add9fa06c66e9a3a384';

export const fetchNews = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  return response.data;
};
