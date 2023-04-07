// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const captionDesc = document.querySelector('.weath');
const humidity = document.querySelector('#humidity');
const date1 = document.querySelector('#date1');
const temp1 = document.querySelector('#temp1');
const dailyDescription1 = document.querySelector('#dailyDesc1');
const date2 = document.querySelector('#date2');
const temp2 = document.querySelector('#temp2');
const dailyDescription2 = document.querySelector('#dailyDesc2');
const date3 = document.querySelector('#date3');
const temp3 = document.querySelector('#temp3');
const dailyDescription3 = document.querySelector('#dailyDesc3');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=3320c0ad0e45b9bff0bc10ad6dbe4d96';
const newURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=3320c0ad0e45b9bff0bc10ad6dbe4d96';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
      const resp = await fetch(newURL);
      if (resp.ok) {
        const dailyData = await resp.json();
        displayRes(dailyData);
      } else {
          throw Error(await resp.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  function displayResults(weatherData) {
    // Current Temperature
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)}`;
    // Weather Description
    const desc = weatherData.weather[0].description;
    let newDesc = desc.split(' ').map(capitalize).join(' ');
    captionDesc.textContent = newDesc;
    // Humidity
    humidity.innerHTML = `${weatherData.main.humidity}`;
  }

  function capitalize(s) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
  }

  function displayRes(weatherData) {
    let array = weatherData.list;
    for (i in array) {
        date1.innerHTML = timeConverter(weatherData.list[8].dt);
        let daily1 = weatherData.list[8].main.temp.toFixed(0);
        temp1.innerHTML = daily1;
        let desc1 = weatherData.list[8].weather[0].main;
        let newDaily1 = desc1.split(' ').map(capitalize).join(' ');
        dailyDescription1.innerHTML = newDaily1;
        date2.innerHTML = timeConverter(weatherData.list[16].dt);
        let daily2 = weatherData.list[16].main.temp.toFixed(0);
        temp2.innerHTML = daily2;
        let desc2 = weatherData.list[16].weather[0].main;
        let newDaily2 = desc2.split(' ').map(capitalize).join(' ');
        dailyDescription2.innerHTML = newDaily2;
        date3.innerHTML = timeConverter(weatherData.list[24].dt);
        let daily3 = weatherData.list[24].main.temp.toFixed(0);
        temp3.innerHTML = daily3;
        let desc3 = weatherData.list[24].weather[0].main;
        let newDaily3 = desc3.split(' ').map(capitalize).join(' ');
        dailyDescription3.innerHTML = newDaily3;
    }
  }

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = month + ' ' + date;
    return time;
}
