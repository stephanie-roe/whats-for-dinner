// DATA
var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];

var mains = ["Spaghetti and meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean",
"Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants",
"Eclairs"];

// DOM
var side = document.querySelector(".side-button");
var main = document.querySelector(".main-button");
var dessert = document.querySelector(".dessert-button");
var entireMeal = document.querySelector(".entire-meal-button");
var letsCookButton = document.querySelector(".lets-cook-button");
var cookpotBox = document.querySelector(".cook-pot-box");
var newSide;
var newMain;
var newDessert;
var newMeal = {};

//EVENT LISTENERS
side.addEventListener("click", createNewSide);
main.addEventListener("click", createNewMain);
dessert.addEventListener("click", createNewDessert);
entireMeal.addEventListener("click", createNewMeal);
letsCookButton.addEventListener("click", displayDish);

// FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createNewSide() {
  newSide = sides[getRandomIndex(sides)];
};

function createNewMain() {
  newMain = mains[getRandomIndex(mains)];
};

function createNewDessert() {
  newDessert = desserts[getRandomIndex(desserts)];
};

function createNewMeal() {
  newMeal = {side: newSide = sides[getRandomIndex(sides)],
             main: newMain = mains[getRandomIndex(mains)],
             dessert: newDessert = desserts[getRandomIndex(desserts)]
 }
};

function displayDish() {
  if (newSide !== undefined && newMeal.side === undefined) {
  cookpotBox.innerHTML = `<div class="display-dish">
                          <p class="template-title">You should make:</p>
                          <h2 class="dish-display">${newSide}!</h2>
                          </div>`;
  } else if (newMain !== undefined && newMeal.main === undefined) {
    cookpotBox.innerHTML = `<div class="display-dish">
                            <p class="template-title">You should make:</p>
                            <h2 class="dish-display">${newMain}!</h2>
                            </div>`;
  } else if (newDessert !== undefined && newMeal.dessert === undefined) {
    cookpotBox.innerHTML = `<div class="display-dish">
                            <p class="template-title">You should make:</p>
                            <h2 class="dish-display">${newDessert}!</h2>
                            </div>`;
  } else if (newMeal !== undefined) {
    cookpotBox.innerHTML = `<div class="display-dish">
                            <p class="template-title">You should make:</p>
                            <h2 class="dish-display">${newMeal.main} with a side of ${newMeal.side} and ${newMeal.dessert} for dessert!</h2>
                            </div>`;
  }
};
