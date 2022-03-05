const API_KEY = `daf78c3fe6295298314df72486570258
`;
const searchTemparature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemparature(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemparature = (temparature) => {
  setInnerText("city", temparature.name);
  setInnerText("temparature", temparature.main.temp);
  setInnerText("country", temparature.sys.country);
  setInnerText("condition", temparature.weather[0].main);
  setInnerText("min-temp", temparature.main.temp_min);
  setInnerText("max-temp", temparature.main.temp_max);
  setInnerText("feel", temparature.main.feels_like);

  //   console.log(temparature);
  // set weather icon
  const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
