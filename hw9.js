class CocktailManager {
    constructor (name, ingredients, isAlcohol, type) {
        this.name = name;
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
    }
    getPrice(){
        return this.ingredients.reduce(function (counter, ingredient) {
            return counter + ingredient.price
        }, 0)
    }
}

let margarita = new CocktailManager("margarita",[{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long');
console.log(margarita.getPrice());

class Cocktails {
    constructor (){
        this.list = [];
    }
    add (name, ingredients, isAlcohol, type){
        let cocktail = {
            name: name,
            ingredients: ingredients,
            isAlcohol: isAlcohol,
            type: type
        };
        this.list.push(cocktail);
    }
    remove (name){
        this.list = this.list.filter(function (item) {
            return item.name !== name
        })
    }
    showAll (){
        return this.list;
    }
    showAlcohol (isAlcohol){
        return this.list.filter(function (item) {
            return item.isAlcohol === isAlcohol
        })
    }
}

let cocktails = new Cocktails();
cocktails.add('margarita',[{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long');
cocktails.add('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long');
cocktails.remove("margarita");
console.log(cocktails.showAll());
console.log(cocktails.showAlcohol(false));  // if this parameter is true you will get alcohol cocktails