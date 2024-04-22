class GlobalListener {
}

abstract class Unit {
    
    Start() {
        console.log('Unit started');
    }

    Update() {
        console.log('Unit updated');
    }
}

class Player extends Unit {
    speed: number = 10;
    
    goTowards(direction: Direction) {
        

    }
}

type Direction = 'up' | 'down' | 'left' | 'right';

class Enemy extends Unit {
    speed: number = 5;
    
    goTowards(direction: Direction) {

    }
}