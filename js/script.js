console.log('JS OK');

const groceryList = ["Pane", "Latte", "Uova", "Pollo", "Pomodori", "Pasta", "Frutta", "Formaggio", "Yogurt", "Cereali"];

console.log(groceryList);

let i = 0;

while (i < groceryList.length) {
    const listElement = groceryList[i];
    console.log("Elemento lista:", listElement);
    i++;
}