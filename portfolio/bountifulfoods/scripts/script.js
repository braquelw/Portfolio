// format copyright to current year
const copyright = document.querySelector('#copyright');
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;

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