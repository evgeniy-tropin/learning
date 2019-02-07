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
        this.list = [];
        this.orderList = [];
        this.orderRenderedList = [];
    }

    add (cocktail) {
        this.list.push(cocktail)
    }

    renderMenu() {
        let fragment = document.createDocumentFragment();
        this.list.forEach(function (item, index) {
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

    renderOrder(index) {
        let k = 1;
        console.log(this.orderRenderedList);

        if (!this.orderRenderedList.length || this.orderRenderedList.indexOf(this.list[index].name) === -1){
            this.orderRenderedList.push({name : this.list[index].name, amount : 1, price : this.list[index].ingredients.reduce(function (sum, ingredients) {return sum+ingredients.price}, 0)});
            console.log(this.orderRenderedList);
        } else {
            for (let i = 0; i < this.orderRenderedList.length; i++){
                k += 1;
                this.orderRenderedList[i].amount = k;
            }
        }



        console.log(this.orderList.length)

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

        this.orderRenderedList.forEach(function (item) {
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


function filterHandler (e) {
    if (e.target.classList.contains("buy-button")){
        orderElement.innerHTML = '';
        orderElement.appendChild(list.renderOrder(parseInt(e.target.closest(".cocktail").dataset.index)));
    }
}

menuElement.addEventListener('click', filterHandler);