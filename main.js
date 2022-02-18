// DATA
var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];

var mains = ["Spaghetti and meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean",
"Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants",
"Eclairs"];

// DOM
// var side = document.querySelector(".side-button");
// var letsCookButton = document.querySelector(".lets-cook-button");
// side.innerText = side[getRandomIndex(side)];

//EVENT LISTENERS
letsCookButton.addEventListener("click", getRandomIndex)
// FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
