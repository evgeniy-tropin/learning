const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const typesWrap = document.getElementById('types-wrap');
const checkboxType = document.getElementsByClassName('checkbox-type');
const isAlcoholWrap = document.getElementById('isAlcohol-wrap');
const checkboxIsAlcohol = document.getElementsByClassName('checkbox-alcohol');

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

    renderFiltered (name) {
        let list = this.list.filter(function (item) {
            return item.name.indexOf(name) === 0;
        })
        return this.render(list);
    }

    renderFilteredType (type) {
        let list = this.list.filter(function (item) {
            return item.type === type;
        });
        return this.render(list);
    }

    renderFilteredOnAlcohol (isAlcohol) {
        if (isAlcohol === 'true') {
            isAlcohol = true;
        } else {
            isAlcohol = false;
        }
        let list = this.list.filter(function (item) {
            return item.isAlcohol === isAlcohol;
        });
        return this.render(list);
    }

    render(list) {
        let cocktails = list || this.list
        let fragment = document.createDocumentFragment();

        cocktails.forEach(function (item) {
            let cocktailItem = document.createElement('div');
            cocktailItem.innerText = item.name;
            cocktailItem.className = 'cocktail';
            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }
}


let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long'))

const showList = function () {
    listElement.innerHTML = '';
    listElement.appendChild(list.render())
};
showButton.addEventListener('click', showList);

filterInput.addEventListener('input', function (event) {
    listElement.innerHTML = '';
    listElement.appendChild(list.renderFiltered(this.value))
});

typesWrap.addEventListener('change', function(){
    listElement.innerHTML = '';
    let types = [];
    for (let i = 0; i < checkboxType.length; i++){
        types.push(checkboxType[i]);
    }
    types.forEach(function(element) {
        if (element.checked){
            listElement.appendChild(list.renderFilteredType(element.value))
        }
    });
});

isAlcoholWrap.addEventListener('change', function(){
    listElement.innerHTML = '';
    let isAlcohol = [];
    for (let i = 0; i < checkboxIsAlcohol.length; i++){
        isAlcohol.push(checkboxIsAlcohol[i]);
    }
    isAlcohol.forEach(function(element) {
        if (element.checked){
            listElement.appendChild(list.renderFilteredOnAlcohol(element.value))
        }
    });
});