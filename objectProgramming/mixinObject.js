let flyMixin = function(obj){
	obj.fly = function(){
		console.log('I\'m flying, woosh');
	}
}

let glideMixin = function(obj){
	obj.glide = function(){
		console.log('I\'m glide');
	}
}

let bird = {
	name:'pomba',
	numLegs:2
}

let plane = {
	model:'777',
	numPassagers:257
}

let boat = {
	name:'Warrior',
	type: 'race-boat'
}

flyMixin(bird);
flyMixin(plane);
glideMixin(bird);
glideMixin(boat);

bird.fly();
plane.fly();
boat.glide();
bird.glide();