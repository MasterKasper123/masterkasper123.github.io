console.log('Player...')
class Player {
    constructor(_width, _height, _strength, _x, _y){
        this.width = _width;
        this.height = _height;
        this.strength = _strength;
        this.x = _x
        this.y = _y
    }
    update(){
        console.log('Update');
    }
    draw(){
        ctx3.fillStyle = 'blue';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }
}

const player1 = new Player(100, 200, 10, 50, 275);