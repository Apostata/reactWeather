/* jslint esversion:6 */

class Teste {

	constructor(){
		this.x = 1;
	}

	printIt(){
		console.log(this.x);
	}
}


class Teste2 extends Teste{
	constructor(){
		super();
		this.x = 10;
	}

	oples(){
		let simu = ()=>{ //se chamar this dentro da funcção simu sem passar como arrow function, irá acusar x of undefined, pois 'this' perde o escopdo quando executa a função simu
			/*jshint -W087 */
			debugger;
			this.printIt();
		};

		simu();
	}
}

var teste = new Teste();
var teste2 = new Teste2();
teste.printIt();
teste2.oples();
