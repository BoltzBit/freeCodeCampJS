//funcao invocada imediatamente
(function(){
	console.log('Muito bom!');
})();

(function(){
	console.log('A cozy nest is ready');
})();


let motionModule = (function(){
	return{
		glideMixin:function(obj){
			obj.glide = function(){
				console.log('I\'m glide');
			}
		},
		flyMixin:function(obj){
			obj.fly = function(){
				console.log('I\'m flying');
			};
		}
	};
}();