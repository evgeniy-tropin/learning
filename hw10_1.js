class ingridientsList {
    constructor (){
        this.items = []
    }
    add (ingridient){
        this.items.push(ingridient)
    }
    getAll () {
        return this.items;
    }
    getByName (name){
        return this.items.find(function (item) {
            return item.name === name
        })
    }
}

let myIngredients = new ingridientsList();
myIngredients.add({name: 'tequila', price: 5});
myIngredients.add({name: 'vodka', price: 3});
console.log(myIngredients.getByName('tequila'));