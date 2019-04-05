var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var snake;
var cursors;

//  Direction consts
var UP = 0;
var DOWN = 1;
var left = 2;
var right = 3;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('food', 'assets/food.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('snake', 'assets/circle.png');
}

function create ()
{


var Apple = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,
        initialize:
        function AppleEat (scene, x, y)
        {
            Phaser.GameObjects.Image.call(this, scene)

            this.setTexture('food');
            this.setPosition(x * 16, y * 16);
            scene.children.add(this);

        }});



        this.load.image('sky', 'asset/sky.png');

    var Snake = new Phaser.Class({

        initialize:

        function Snake (scene, x, y)
        {
            this.headPosition = new Phaser.Geom.Point(x, y);

            this.body = scene.add.group();

            this.head = this.body.create(x * 16, y * 16, 'snake');




            this.heading = right;
            this.direction = right;
        },

        move: function ()
        {
            /**
            * Based on the heading property (which is the direction the pgroup pressed)
            * we update the headPosition value accordingly.
            *
            * The Math.wrap call allow the snake to wrap around the screen, so when
            * it goes off any of the sides it re-appears on the other.
            */
            switch (this.heading)
            {
                case left:
                    this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
                    break;

                case right:
                    this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
                    break;

                case UP:
                    this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
                    break;

                case DOWN:
                    this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
                    break;
            }

            this.direction = this.heading;

            //  Update the body segments
            Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1);





        }

    });

    snake = new Snake(this, 8, 8);
    apple = new Apple(this, 3, 4);

    //  Create our keyboard controls
    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
      if (cursors.left.isDown){
          if (snake.direction === UP || snake.direction === DOWN){
                snake.heading = left;}
    }else if (cursors.right.isDown){
            if (snake.direction === UP || snake.direction === DOWN){
                snake.heading = right;   }}
    else if (cursors.up.isDown)
    {
        if (snake.direction === left || snake.direction === right)

            {snake.heading = UP;}}
    else if (cursors.down.isDown){
 if (snake.direction === left || snake.direction === right){snake.heading = DOWN;}}

    snake.move();
}
