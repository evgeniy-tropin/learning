let obj = [
 	{
  	name : 'tomato',
  	price : 2
  },
  {
  	name : 'cheese',
  	price : 3
  },
  {
  	name : 'basil',
  	price : 4
  }
 ];

let ingridients = obj.reduce(function(accumulator, currentValue) {
	return accumulator + `${currentValue.name}: ${currentValue.price}, `;
}, "");


console.log(ingridients);
