// format copyright to current year
const copyright = document.querySelector('#copyright');
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;

// format current date
const datefieldUK = document.querySelector("aside");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `${fulldateUK}`;

// Toggle Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// format last modified date
const lastModified = document.querySelector('#lastModified');
let lastModif = new Date(document.lastModified);
let month = lastModif.getMonth()+1;
let day = lastModif.getDate();
let year = lastModif.getFullYear();
let hours = lastModif.getHours();
let mins = lastModif.getMinutes();
let secs = lastModif.getSeconds();
lastModified.textContent = `${month}/${day}/${year} ${hours}:${mins}:${secs}`

// banner to display on Mondays & Tuesdays
const banner = document.querySelector('#banner');
var currentDate = new Date()
var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
var dayofweek = weekday[currentDate.getDay()];
if (dayofweek == weekday[1] || dayofweek == weekday [2]) {
    banner.textContent = `🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`
}
else {
    banner.style.display = 'none';
}