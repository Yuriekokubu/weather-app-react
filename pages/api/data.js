import { API_KEY } from '../../API';
export default async function handler(req, res) {
  const { input } = req.body;
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
