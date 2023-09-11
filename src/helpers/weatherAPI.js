// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.vite_token;

export const searchCities = async (term) => {
  const API_URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    return window.alert(error.message);
  }
};

export const getWeatherByCity = async (cityURL) => {
  const WEATHER_URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

  const response = await fetch(WEATHER_URL);
  const data = await response.json();
  return {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
};
