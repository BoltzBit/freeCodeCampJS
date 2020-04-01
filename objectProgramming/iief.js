//funcao invocada imediatamente
(function(){
	console.log('Muito bom!');
})();

(function(){
	console.log('A cozy nest is ready');
})();

function Bird(name){this.name = name};

let duck = new Bird('Fala pato');

//um objeto com um funcao IIEF
let motionModule = (function(){
	return{
		glideMixin:function(obj){
			obj.glide = function(){
				console.log("I'm glide'");
			}
		},
		flyMixin:function(obj){
			obj.fly = function(){
				console.log("I'm flyng");
			};
		}
	};
})();

(function(){return {}})();//estrutura da iief

motionModule.glideMixin(duck);

duck.glide();

//transformar em iief

function Fun(){};

let fun = new Fun();

let funModule = (function(){
	return {
		isCuteMixin:function(obj){
			obj.isCute = function(){
				return true;
			}
		},
	
		singMixin:function(obj){
			obj.sing = function(){
				return true;
			};
		},
	}
})();

funModule.isCuteMixin(fun);

console.log(fun.isCute());
