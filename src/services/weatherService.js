import axios from 'axios';

const API_KEY = 'ac5ebe69f5fb856320a49af177a61715';

export const fetchWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};
