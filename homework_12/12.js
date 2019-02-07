// const showButton = document.getElementById('show-button');
// const filterInput = document.getElementById('filter-coctails');
// const isAlcoholFilter = document.querySelector('#is-alcohol');
// const isLongFilter = document.querySelector('#is-long');
const menuElement = document.getElementById('cocktail-list');
const orderElement = document.getElementById('order-list');

class Cocktail {
    constructor (name, ingredients, isAlcohol, type) {
        this.name = name; // instance property
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
    }
    getPrice() { // methods of prototype
        return this.ingredients.reduce(function (sum, ingredient) {
            return sum+ingredient.price
        }, 0)
    }
}

class CocktailsList {
    constructor () {
        this.list = []; // model
    }

    add (cocktail) {
        this.list.push(cocktail)
    }

    renderMenu() {
        let fragment = document.createDocumentFragment();
        this.list.forEach(function (item) {
            let cocktailItem = document.createElement('li');
            let buyButton = document.createElement('button');
            cocktailItem.innerText = item.name;
            buyButton.innerText = "Buy now!";
            cocktailItem.className = 'cocktail';
            buyButton.className = 'buy-button';
            cocktailItem.appendChild(buyButton);
            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }
}


let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'shot'))
list.add(new Cocktail('negroni', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long'))
list.add(new Cocktail('mojito', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], false, 'long'))

menuElement.appendChild(list.renderMenu());

class OrderList {
    constructor(){
        this.orderList = [];
    }

    addToOrder(){}

    getPrice(index) {
        //return this;
        console.log(this);
        console.log(list);
        this.ingredients.reduce(function (sum, ingredient) {
            return sum+ingredient.price
        }, 0)
    }

    renderOrder() {
        // this.applyFilters(); // change this.list
        let fragment = document.createDocumentFragment();

        this.orderList.forEach(function (item) {
            let cocktailItem = document.createElement('li');
            let buyButton = document.createElement('button');
            cocktailItem.innerText = item.name;
            buyButton.innerText = "Buy now!";
            cocktailItem.className = 'cocktail';
            buyButton.className = 'buy-button';
            fragment.appendChild(buyButton);
            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }
}

let orderList = new OrderList();

function filterHandler (e) {
    console.log(e.target)
    if (e.target.classList.contains("buy-button")){
        let parentEl = e.target.closest(".cocktail-list");
        //console.log(parentEl.indexOf());
        orderList.getPrice(1);
    }
    orderElement.innerHTML = '';
    orderElement.appendChild(orderList.renderOrder())
}

menuElement.addEventListener('click', filterHandler);