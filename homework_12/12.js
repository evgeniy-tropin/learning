const menuElement = document.getElementById('cocktail-list');
const orderElement = document.getElementById('order-list');
const totalPrice = document.getElementById('total-price');
let fragment = document.createDocumentFragment();

class Cocktail {
    constructor (name, ingredients, isAlcohol, type) {
        this.name = name; // instance property
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
    }
}

class CocktailsList {
    constructor () {
        this.menu = [];
        this.orderList = [];
        //this.orderRenderedList = [];
    }

    add (cocktail) {
        this.menu.push(cocktail)
    }

    renderMenu() {
        let fragment = document.createDocumentFragment();
        this.menu.forEach(function (item, index) {
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
}

let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'shot'))
list.add(new Cocktail('negroni', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long'))
list.add(new Cocktail('mojito', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], false, 'long'))

class Order {
    constructor (name, price, amount) {
        this.name = name; // instance property
        this.price = price;
        this.amount = amount;
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
    renderOrder(index) {
        // this.order.find(function (e, i, arr){
        //     if (this.order[i].indexOf(list.list[index].name) === -1){
        //         console.log(555);
        //     }
        //     console.log(777)
        // });

        // this.order.find(function isInOrder (el, index, array)){
        //
        // }
        // for (let i = 0; i < list.menu.length; i++){
        //     if (this.order.length === 0 || (this.order.length > 0 && this.order.indexOf(list.menu[index].name) === -1)){
        //         orderList.addToOrder({
        //             name : list.menu[index].name,
        //             price : list.menu[index].ingredients.reduce(function (sum, ingredients) {return sum+ingredients.price}, 0),
        //             amount : 1
        //         });
        //     }
        //     console.log(this.order[i].name);
        // }
        //console.log((this.order[index].indexOf(list.menu[index].name)) === -1);
        //console.log(list.menu[index].name);
        if (this.order.length === 0){
            orderList.addToOrder(list.menu[index].name, list.menu[index].ingredients.reduce(function (sum, ingredients) {return sum+ingredients.price}, 0), 1);
        } else {
            this.order.some(function (el, ind, arr){
                if (el.name === list.menu[index].name){
                    let amount = el.amount;
                    amount++;
                    el.amount = amount;
                } else {
                    orderList.addToOrder(list.menu[index].name, list.menu[index].ingredients.reduce(function (sum, ingredients) {return sum+ingredients.price}, 0), 1);
                }
            });
        }


        // if (!this.order.length || (this.order.length && this.order[0].name.indexOf(list.list[index].name) === -1)) {
        //     orderList.addToOrder({
        //         name : list.list[index].name,
        //         price : list.list[index].ingredients.reduce(function (sum, ingredients) {return sum+ingredients.price}, 0),
        //         amount : 1
        //     });
        //     console.log(typeof this.order[0].name);
        //     console.log(typeof list.list[index].name);
        // } else {
        //     this.order.find(function (el, ind, arr) {
        //         console.log(222)
        //         console.log(this.order[ind].name);
        //         console.log(list.list[index].name);
        //         if (this.order[ind].name === list.list[index].name){
        //             orderList.addToOrder(list.list[index].name);
        //             console.log(444);
        //         }
        //         console.log(list.list[ind].name);
        //         console.log(this.order[ind].name);
        //
        //     });
        // }


        //console.log(this.order);

        // if (!this.orderRenderedList.length || this.orderRenderedList.indexOf(this.list[index].name) === -1){
        //     this.orderRenderedList.push({name : this.list[index].name, amount : 1, price : this.list[index].ingredients.reduce(function (sum, ingredients) {return sum+ingredients.price}, 0)});
        //     console.log(this.orderRenderedList);
        // } else {
        //     for (let i = 0; i < this.orderRenderedList.length; i++){
        //         k += 1;
        //         this.orderRenderedList[i].amount = k;
        //     }
        // }


        //console.log(this.orderList.length);

        let cocktailRow = document.createElement('tr');
        let cocktailName = document.createElement('td');
        cocktailName.innerText = "Name";
        let cocktailAmount = document.createElement('td');
        cocktailAmount.innerText = "Amount";
        let cocktailPrice = document.createElement('td');
        cocktailPrice.innerText = "Price";
        let cocktailTotalPrice = document.createElement('td');
        cocktailTotalPrice.innerText = "Total price";
        cocktailRow.appendChild(cocktailName);
        cocktailRow.appendChild(cocktailAmount);
        cocktailRow.appendChild(cocktailPrice);
        cocktailRow.appendChild(cocktailTotalPrice);

        fragment.appendChild(cocktailRow);

        this.order.forEach(function (item) {
            cocktailRow = document.createElement('tr');
            cocktailName = document.createElement('td');
            cocktailName.innerText = item.name;
            cocktailAmount = document.createElement('td');
            cocktailAmount.innerText = item.amount;
            cocktailPrice = document.createElement('td');
            cocktailPrice.innerText = item.price;
            cocktailTotalPrice = document.createElement('td');
            cocktailTotalPrice.innerText = item.amount * item.price;
            cocktailRow.appendChild(cocktailName);
            cocktailRow.appendChild(cocktailAmount);
            cocktailRow.appendChild(cocktailPrice);
            cocktailRow.appendChild(cocktailTotalPrice);

            fragment.appendChild(cocktailRow);
        });
        return fragment;
    }
}

let orderList = new Order();

menuElement.appendChild(list.renderMenu());


function filterHandler (e) {
    if (e.target.classList.contains("buy-button")){
        orderElement.innerHTML = '';
        orderElement.appendChild(orderList.renderOrder(parseInt(e.target.closest(".cocktail").dataset.index)));
    }
}

// console.log(typeof list);
// console.log(list.list[0].name);

menuElement.addEventListener('click', filterHandler);