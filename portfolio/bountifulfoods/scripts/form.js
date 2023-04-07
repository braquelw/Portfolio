// Communicate with JSON file
const url = "json/fruitdata.json";
async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    displayFruits(data);
}
getFruitData();

// Communicate with JSON file (again)
async function getNutriInfo() {
    const response = await fetch(url);
    const data = await response.json();
    displayNutriInfo(data);
}

// Display Fruit Options to Page
function displayFruits(fruits) {
    const option1 = document.querySelector('select.option1');
    fruits.forEach((fruit) => {
        let choice = document.createElement('option');
            choice.textContent = `${fruit.name}`;
            choice.calories = fruit.nutritions.calories;
            choice.sugar = fruit.nutritions.sugar;
            choice.carbohydrates = fruit.nutritions.carbohydrates;
            choice.fat = fruit.nutritions.fat;
            choice.protein = fruit.nutritions.protein;
        option1.appendChild(choice);
    })
    const option2 = document.querySelector('select.option2');
    fruits.forEach((fruit) => {
        let choice = document.createElement('option');
            choice.textContent = `${fruit.name}`;
            choice.calories = fruit.nutritions.calories;
            choice.sugar = fruit.nutritions.sugar;
            choice.carbohydrates = fruit.nutritions.carbohydrates;
            choice.fat = fruit.nutritions.fat;
            choice.protein = fruit.nutritions.protein;
        option2.appendChild(choice);
    })
    const option3 = document.querySelector('select.option3');
    fruits.forEach((fruit) => {
        let choice = document.createElement('option');
            choice.textContent = `${fruit.name}`;
            choice.calories = fruit.nutritions.calories;
            choice.sugar = fruit.nutritions.sugar;
            choice.carbohydrates = fruit.nutritions.carbohydrates;
            choice.fat = fruit.nutritions.fat;
            choice.protein = fruit.nutritions.protein;
        option3.appendChild(choice);
    })
}

function displayNutriInfo(fruits) {
    // Calculate NutriFacts
    let fruit1 = document.getElementById('fruit1').value;
    let fruit2 = document.getElementById('fruit2').value;
    let fruit3 = document.getElementById('fruit3').value;
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i].name == fruit1) {
            carbs = fruits[i].nutritions.carbohydrates;
            carbohydrates += carbs;
            pro = fruits[i].nutritions.protein;
            protein += pro;
            f = fruits[i].nutritions.fat;
            fat += f;
            sug = fruits[i].nutritions.sugar;
            sugar += sug;
            cals = fruits[i].nutritions.calories;
            calories += cals
        }
        if (fruits[i].name == fruit2) {
            carbs = fruits[i].nutritions.carbohydrates;
            carbohydrates += carbs;
            pro = fruits[i].nutritions.protein;
            protein += pro;
            f = fruits[i].nutritions.fat;
            fat += f;
            sug = fruits[i].nutritions.sugar;
            sugar += sug;
            cals = fruits[i].nutritions.calories;
            calories += cals
        }
        if (fruits[i].name == fruit3) {
            carbs = fruits[i].nutritions.carbohydrates;
            carbohydrates += carbs;
            pro = fruits[i].nutritions.protein;
            protein += pro;
            f = fruits[i].nutritions.fat;
            fat += f;
            sug = fruits[i].nutritions.sugar;
            sugar += sug;
            cals = fruits[i].nutritions.calories;
            calories += cals
        }
    }
    nutriFacts = '<strong>Nutrition Facts</strong><br>Calories: ' + calories + '<br>Fat: ' + fat.toFixed(2) + 'g<br>Protein: ' + protein.toFixed(2) + 'g<br>Carbohydrates: ' + carbohydrates.toFixed(2) + 'g<br>Sugar: ' + sugar.toFixed(2) + 'g';
    displayDrinkCreation();
    countClicks();
}

// Display the Drink Selections and Nutrition Facts
function displayDrinkCreation() {
    let fruit1 = document.getElementById('fruit1').value;
    let fruit2 = document.getElementById('fruit2').value;
    let fruit3 = document.getElementById('fruit3').value;
    let drinkType = document.getElementsByName('radio');
    let typeOfDrink = '';
    // Get Todays Date
    let date = new Date();
    let currentDate = `${date.getMonth() + 1} | ${date.getDate()} | ${date.getFullYear()}`;
    // Get Selected Radio Button
    for(i = 0; i < drinkType.length; i++) {
        if(drinkType[i].checked) {
            typeOfDrink = drinkType[i].value;
        }
    }

    document.getElementById('formOutput1').innerHTML = currentDate + '<br><br><strong>Creator Information</strong><br>Name: ' + document.getElementById("name").value + '<br>Email: ' + document.getElementById("email").value + '<br>Phone: ' + document.getElementById("phone").value + '<br><br><strong>Drink Information</strong><br>Fruit(s):  ' + fruit1 + " " + fruit2 + " " + fruit3 + '<br>Drink Type: ' + typeOfDrink + '<br>Special Instructions: ' + document.getElementById("instructions").value + '<br><br>' + nutriFacts;
    document.getElementById('totalDrinks').innerHTML = 'Total Drinks Created: ';
}


// Store number of Drinks user submits
const drinksDisplay = document.querySelector("#numDrinks");

function countClicks() {
    let drinkCount = localStorage.getItem('click-counts');
    if(drinkCount!==null) {
        let newClick = parseInt(drinkCount) + 1;
        localStorage.setItem('click-counts', newClick);
    }
    else {
        localStorage.setItem('click-counts', "1");
    }
    document.getElementById('numDrinks').innerHTML = drinkCount;
}