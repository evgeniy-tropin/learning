const showButton = document.getElementById('show-button');
const showList = document.getElementById('filter-cocktails');

const cocktailProto = {
    getPrice: function () {
        return this.ingredients.reduce(function (sum, ingredient) {
            return sum+ingredient.price
        }, 0);
    }
}

function createCocktail(name, ingredients, isAlcohol, type) {
    let obj = Object.create(cocktailProto);
    obj.name = name;
    obj.ingredients = ingredients;
    obj.isAlcohol = isAlcohol;
    obj.type = type;
    return obj;
}

let margarita = createCocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long');
let oldFashioned = createCocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long');

const cocktailsListProto = {
    add: function (cocktail) {
        this.list.push(cocktail);
    },
    getAll: function () {
        return this.list
    }
}

function createCocktailsList() {
    return Object.create(cocktailsListProto, {
        list: {
            value: [],
            enumerable: true,
            writable: true,
            configurable: true
        }
    })
}

const mycocktailList = createCocktailsList();
mycocktailList.add(margarita);

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
        this.list = []
    }

    add (cocktail) {
        this.list.push(cocktail)
    }

    getAll () {
        return this.list;
    }
    render() {
    let listElement = document.createDocumentFragment();

    this.list.forEach(function, ){

    }
//        return this.list.map(function (item) {
//            return `<div>${item.name}</div>`;
//        }).join('')
    }
}

let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long'))