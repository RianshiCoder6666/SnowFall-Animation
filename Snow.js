class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.image = loadImage("images/snowImage.png");
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
}

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*5, this.r*5);
        pop();
    }

};