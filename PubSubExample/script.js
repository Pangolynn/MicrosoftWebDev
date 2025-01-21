// composition based gameobject
const gameObject = {
	x: 0,
	y: 0,
	type: ''
};

const movable = {
	moveTo(x,y) {
		this.x = x;
		this.y = y;
	}
};

// the constant movableObject is composed of gameObject and movable
const movableObject = {...gameObject, ...movable};

// create a func to create a new Hero who inherits movableObject 
function createHero(x, y) {
	return {
		...movableObject,
		x,
		y,
		type: 'Hero'
	}
}

// a static object that inherits only the gameObject properties
function createStatic(x,y,type) {
	return {
		...gameObject,
		x,
		y,
		type
	}
}

// create a hero and move it
// create a static tree
const tree = createStatic(0,0,'Tree');


//setup EventEmitter class containing listeners
// the central hub for managing connections between pubs/subs
class EventEmitter {
	constructor() {
		this.listeners = {};
	};
	// when a msg is received let the listener handle the payload
	// the subscriber
	on(message, listener) {
		if (!this.listeners[message]) {
			this.listeners[message] = [];
		}
		this.listeners[message].push(listener);
	};
	//when a msg is sent send it to a listener w/ some payload
	// the publisher
	emit(message, payload = null) {
		if(this.listeners[message]) {
			this.listeners[message].forEach(l => l(message, payload))
		}
	}
}

//setup message structure
const Messages = {
    HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke eventEmitter you setup above
const eventEmitter = new EventEmitter();
//setup hero
const hero = createHero(0,0);

// let eventEmitter know to watch for messages pertaining to hero movement
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
    hero.moveTo(5,0);
	console.log(hero);
});
//setup the window to listen for the keyup event for left arrow
window.addEventListener('keyup', (evt) => {
    if (evt.key === 'ArrowLeft') {
        eventEmitter.emit(Messages.HERO_MOVE_LEFT)
    }
});



console.log(hero);


