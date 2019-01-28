const creator = document.getElementById('creator');
const checker = document.getElementById('checkExisting');
const remover = document.getElementById('remove');
const price = document.getElementById('getPrice');
const alcohol = document.getElementById('alcohol');
const indicator = document.getElementById('indicator');
const list = document.getElementById('list');

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
	
	getPrice : function (name){
		priceArr = [];
		let price = existingCocktals.reduce(function(acc, val, idx) {
			priceArr.push(val.name +": " + val.price);
			if (existingCocktals.length === priceArr.length){
				return priceArr;
			}
		}, "");
		priceArr.forEach(function(el) {
			let cocktal = document.createElement('li');
			cocktal.innerHTML = el;
			list.appendChild(cocktal);
		});
	},

	check : function (name) {
		existingCocktals.forEach(function(el) {
			let cocktal = document.createElement('li');
			cocktal.innerHTML = el.name;
			list.appendChild(cocktal);
		});
	},
	
	alcohol : function (checkAlcohol) {
		if (checkAlcohol == true) {
			indicator.innerHTML = "The following cocktails contain alcohol!";
			indicator.style.color = '#f00';
		} else {
			indicator.innerHTML = "The following cocktails don't contain alcohol!";
			indicator.style.color = '#0f0';
		}
		
		existingCocktals.forEach(function(el) {
			if (el.isAlcohol === checkAlcohol) {
				let cocktal = document.createElement('li');
				cocktal.innerHTML = el.name;
				list.appendChild(cocktal);
			}
		});
	},

	remove : function (name) {
		for (i = 0; i < existingCocktals.length; i++){
			if (existingCocktals[i].name === name) {
				existingCocktals.splice(i,1);
				indicator.innerHTML = "Specified cocktail was successfully removed!";
				indicator.style.color = '#0f0';
				break;
			} else {
				indicator.innerHTML = "Such cocktail doesn't exist! Please check list of existing cocktails and type one of them";
				indicator.style.color = '#f00';
			}
		}
		existingCocktals.forEach(function(el) {
			let cocktal = document.createElement('li');
			cocktal.innerHTML = el.name;
			list.appendChild(cocktal);
		});
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
	
	if (isAlcohol == 'true') {
		isAlcohol = true;
	} else {
		isAlcohol = false;
	}
	
	if (name !== '' || price !== '' || type !== ''){
		cocktailsManager.create(name, price, isAlcohol, type);
		indicator.innerHTML = "New cocktail was added!";
		indicator.style.color = '#0f0';
	} else {
		indicator.innerHTML = "Specify all cocktail options please!";
		indicator.style.color = '#f00';
	}
};

checker.onclick = function() {
	indicator.innerHTML = '';
	list.innerHTML = '';
	cocktailsManager.check(name);
}

remover.onclick = function() {
	indicator.innerHTML = '';
	list.innerHTML = '';
	let name = document.getElementById("name").value;
	if (name !== ''){
		cocktailsManager.remove(name);
	} else {
		indicator.innerHTML = "Type name of cocktail which you want to remove please!";
		indicator.style.color = '#f00';
	}
}

price.onclick = function() {
	list.innerHTML = '';
	let name = document.getElementById("name").value;
	cocktailsManager.getPrice(name);
}

alcohol.onclick = function() {
	list.innerHTML = '';
	let radio = document.getElementsByName("alcohol");
	let checkAlcohol;
	for (let i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			checkAlcohol = radio[i].value
		}
	}
	
	if (checkAlcohol == 'true') {
		checkAlcohol = true;
	} else {
		checkAlcohol = false;
	}
	
	cocktailsManager.alcohol(checkAlcohol);
}