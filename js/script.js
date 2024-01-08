console.log('JS OK');

/* Declaring grocery list array */
const groceryList = ["Pane", "Latte", "Uova", "Pollo", "Pomodori", "Pasta", "Frutta", "Formaggio", "Yogurt", "Cereali"];
/* Checking grocery array value */
console.log(groceryList);

/* Recovering DOM element */
const shoppingListElement = document.getElementById("shopping-list");

/* Declaring index variable for while loop */
let i = 0;

/* Creating unordered list element */
const unorderedList = document.createElement("ul");

/* Launching while loop for index less than array length */
while (i < groceryList.length) {
    const listElement = groceryList[i];
    console.log("Elemento lista:", listElement);

    /* Creating list item element */
    const listItem = document.createElement("li");
    listItem.textContent = listElement;

    /* Appending list item to unordered list */
    unorderedList.appendChild(listItem);

    /* Increasing index counter */
    i++;
}

/* Appending the unordered list to the shopping list element */
shoppingListElement.appendChild(unorderedList);


