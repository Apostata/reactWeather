/* jslint esversion:6 */

/* ------ With arrow function -------
Para usar arow function, se pergutar se você esta usando uma função anonima.
Arrow functions usa o bind da função pai, enquanto que a função normal tem seu próprio this
*/
var names = ['Rene', 'Erica', 'Helena'];


/*
names.forEach(function(name){
	console.log('forEach', name);
});
*/

/*
names.forEach((name)=>{ //for multiple lines
	console.log('arrowFunc', name);
});
*/

/*
names.forEach((name)=> console.log('arrowfuncOneLine', name));

var returnMe = (name)=> name + '!';
console.log(returnMe('Rene'));
*/

/*
var person = {
	name: 'Rene',
	greet:function(){
		console.log('-------------- Com função normal -------------');
		names.forEach(function(name){
			console.log(this.name, 'Say hi to', name);
		});
	}
};

person.greet();

var person2 = {
	name: 'Rene',
	greet:function(){
		console.log('-------------- Com arrow function -------------'); 
		names.forEach((name)=>{
			console.log(this.name, 'Say hi to', name);
		});
	}
};

person2.greet();
*/

function add(a, b){
	return a + b;
}

console.log(add(1, 4));
console.log(add(3, 7));

let addStatment = (a, b)=>{
	return a + b;
};

console.log(addStatment(2, 4));
console.log(addStatment(4, 7));

let addExpression = (a, b)=>  a + b;


console.log(addExpression(3, 4));
console.log(addExpression(5, 7));

