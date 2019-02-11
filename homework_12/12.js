const menuElement = document.getElementById('cocktail-list');
const orderElement = document.getElementById('order-list');
const totalPrice = document.getElementById('total-price');
let fragment = document.createDocumentFragment();

class Cocktail {
    constructor (name, ingredients, isAlcohol, type) {
        this.name = name;
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
    }
}

class CocktailsList {
    constructor () {
        this.menu = [];
    }

    add (cocktail) {
        this.menu.push(cocktail)
    }
}

let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'shot'))
list.add(new Cocktail('negroni', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long'))
list.add(new Cocktail('mojito', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], false, 'long'))

class Order {
    constructor () {
        this.order = [];
    }

    addToOrder (name, price, amount) {
        let order = {
            name : name,
            price : price,
            amount : amount
        };
        this.order.push(order);
    }

    checkItem (index) {
        const checkedItem = list.menu[index];
        let orderItem = this.order.find(function (el){
            return el.name === checkedItem.name
        });

        if (orderItem === undefined) {
            orderList.addToOrder(checkedItem.name, checkedItem.ingredients.reduce(function (sum, ingredients) {return sum+ingredients.price}, 0), 1);
        } else {
            orderItem.amount++;
        }

        showOrder.renderOrder(this.order);
    }
}

class OrderRenderer {
    renderMenu(arr) {
        let fragment = document.createDocumentFragment();
        arr.forEach(function (item, index) {
            let cocktailItem = document.createElement('li');
            let buyButton = document.createElement('button');
            cocktailItem.innerText = item.name;
            buyButton.innerText = "Buy now!";
            cocktailItem.className = 'cocktail';
            cocktailItem.setAttribute("data-index", index);
            buyButton.className = 'buy-button';
            cocktailItem.appendChild(buyButton);
            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }

    renderOrder(arr) {
        orderElement.innerHTML = '';
        totalPrice.innerHTML = '';

        let cocktailRow = document.createElement('tr');
        let cocktailName = document.createElement('td');
        cocktailName.innerText = "Name";
        let cocktailAmount = document.createElement('td');
        cocktailAmount.className = 'value text-center';
        cocktailAmount.innerText = "Amount";
        let cocktailPrice = document.createElement('td');
        cocktailPrice.className = 'value text-center';
        cocktailPrice.innerText = "Price";
        let cocktailTotalPrice = document.createElement('td');
        cocktailTotalPrice.className = 'value text-center';
        cocktailTotalPrice.innerText = "Total price";
        cocktailRow.appendChild(cocktailName);
        cocktailRow.appendChild(cocktailAmount);
        cocktailRow.appendChild(cocktailPrice);
        cocktailRow.appendChild(cocktailTotalPrice);

        fragment.appendChild(cocktailRow);

        arr.forEach(function (item) {
            cocktailRow = document.createElement('tr');
            cocktailName = document.createElement('td');
            cocktailName.innerText = item.name;
            cocktailAmount = document.createElement('td');
            cocktailAmount.className = 'value text-center';
            cocktailAmount.innerText = item.amount;
            cocktailPrice = document.createElement('td');
            cocktailPrice.className = 'value text-center';
            cocktailPrice.innerText = item.price;
            cocktailTotalPrice = document.createElement('td');
            cocktailTotalPrice.className = 'value text-center';
            cocktailTotalPrice.innerText = item.amount * item.price;
            cocktailRow.appendChild(cocktailName);
            cocktailRow.appendChild(cocktailAmount);
            cocktailRow.appendChild(cocktailPrice);
            cocktailRow.appendChild(cocktailTotalPrice);

            fragment.appendChild(cocktailRow);
        });

        orderElement.appendChild(fragment);
        totalPrice.append(arr.reduce(function (sum, item) {return sum+item.amount * item.price}, 0));
    }
}

let orderList = new Order();
let showOrder = new OrderRenderer();

menuElement.appendChild(showOrder.renderMenu(list.menu));


function filterHandler (e) {
    if (e.target.classList.contains("buy-button")){
        orderList.checkItem(parseInt(e.target.closest(".cocktail").dataset.index));
    }
}

menuElement.addEventListener('click', filterHandler);