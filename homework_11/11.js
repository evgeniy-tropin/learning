const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');
const chooseTypeShot = document.getElementById('shot');
const chooseTypeLong = document.getElementById('long');
const chooseAlcoholFalse = document.getElementById('alcohol-false');
const chooseAlcoholTrue = document.getElementById('alcohol-true');

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
        listElement.innerHTML = '';
        let list = this.list.filter(function (item) {
            return item.type === type;
        });
        return this.render(list);
    }

    renderFilteredOnAlcohol (isAlcohol) {
        listElement.innerHTML = '';
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

chooseTypeShot.addEventListener('change', function (event) {
    listElement.innerHTML = '';
    if (event.target.checked){
        listElement.appendChild(list.renderFilteredType(this.value))
    }
});

chooseTypeLong.addEventListener('change', function (event) {
    listElement.innerHTML = '';
    if (event.target.checked){
        listElement.appendChild(list.renderFilteredType(this.value))
    }
});

chooseAlcoholFalse.addEventListener('change', function (event) {
    console.log(77);
    listElement.innerHTML = '';
    if (event.target.checked){
        listElement.appendChild(list.renderFilteredType(this.value))
    }
});

chooseAlcoholTrue.addEventListener('change', function (event) {
    console.log(77);
    listElement.innerHTML = '';
    if (event.target.checked){
        listElement.appendChild(list.renderFilteredOnAlcohol(this.value))
    }
});