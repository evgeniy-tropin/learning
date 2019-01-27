const creator = document.getElementById("creator");
const checker = document.getElementById("checkExisting");
const remover = document.getElementById("remove");

let existingCocktals = [
    {
        name : 'Strange Thing',
        price : 12,
        isAlcohol : false,
        type : 'standart'
    },
    {
        name : "Something Interesting",
        price : 15,
        isAlcohol : true,
        type : 'standart'
    },
    {
        name : "Surprise",
        price : 20,
        isAlcohol : true,
        type : 'standart'
    },
    {
        name : "Inspiration",
        price : 18,
        isAlcohol : true,
        type : 'standart'
    },
    {
        name : 'Healthy Body',
        price : 12,
        isAlcohol : false,
        type : 'standart'
    }
];

const cocktailsManager = {
    create : function (name, price, isAlcohol, type) {
        let cocktailName = {
            name : name,
            price : price,
            isAlcohol : isAlcohol,
            type : type
        }

        existingCocktals.push(cocktailName);
    },

    check : function (name) {
        let list = document.getElementById('list');

        existingCocktals.forEach(function(el) {
            let cocktal = document.createElement('li');
            cocktal.innerHTML = el.name;
            list.appendChild(cocktal);
        });
    },

    remove : function (name) {
        console.log(existingCocktals.name);
        //existingCocktals.splice(cocktal);
    }
}

creator.onclick = function() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let radio = document.getElementsByName("alcohol");
    let isAlcohol;
    let type = document.getElementById("type").value;

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            isAlcohol = radio[i].value
        }
    }

    if (name !== '' || price !== '' || type !== ''){
        cocktailsManager.create(name, price, isAlcohol, type);
        document.getElementById('indicator').innerHTML = 'New cocktail was added!';
        document.getElementById('indicator').style.color = '#0f0';
    } else {
        document.getElementById('indicator').innerHTML = 'Fill all fields please!';
        document.getElementById('indicator').style.color = '#f00';
    }
};

checker.onclick = function() {
    cocktailsManager.check(name);
}

remover.onclick = function() {
    cocktailsManager.remove(name);
}