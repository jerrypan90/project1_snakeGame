// create play area
var mycanvas = document.getElementById('mycanvas');
var ctx = myCanvas.getContext("2d");

// components of the snake game
var snakeSize = 10; 
var w = 350;
var h = 350;
var score = 0;
var snake;
var snakeSize = 10;
var food;

// game module
var drawModule = (function () { 
    var bodySnake = function(x, y) {
        // this is the single square of the snake
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        // this is the border of the snake
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    var bait = function(x, y) {
        // this is the single square of the food
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
        // this is the border of the food
        ctx.strokeStyle = 'white';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    var scoreText = function() {
        // this is to keep track of the score aka food eaten
        var score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, 145, h-5);
    }

// create snake
var drawSnake = function() {
        // snake length will be 5 square long at the start
        var length = 4;
        snake = [];
        
        // for loop will push 5 square into the snake element
        // every element will have x = 0 and the y will take the value of the index.
        for (var i = length; i>=0; i--) {
            snake.push({x:i, y:0});
        }  
    }

// create food
var createFood = function() {
          food = {
            // food will be at random position
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        }
        
        // look at the position of the snake's body.
        for (var i=0; i>snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;
            
            // if food is in the position of the snake, food will randomise again
             if (food.x === snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    }

// check for collision with body
var checkCollision = function(x, y, array) {
        for(var i=0; i<array.length; i++) {
            if(array[i].x === x && array[i].y === y)
            return true;
        } 
        return false;
    }

var paint = function () {
    // the area within the canvas in which the snake will move
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0, 0, w, h);

    // the border of the play area
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, w, h);

    // start game button will be disable during game play
    btn.setAttribute('disabled', true);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

   	// using keyboard arrow keys to control the snake
    // pop out the last element of the array and shift it on the top as first element

    if (direction === 'right') {
        snakeX++;
    } else if (direction === 'left') {
        snakeX--;
    } else if (direction === 'up') {
        snakeY--;
    } else if (direction === 'down') {
        snakeY++;
    }

    // game over when snake collide the wall
    // game over when snake conllide it's own body (checkCollision function)

    if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || checkCollision(snakeX, snakeY, snake)) {
        // stop the game

        // start button enabled again
        btn.removeAttribute('disabled', true);

        // clean up the canvas
        ctx.clearRect(0, 0, w, h);
        gameloop = clearInterval(gameloop);
        return;
    }

    // snake eat food will grow in length
    if (snakeX == food.x && snakeY == food.y) {
        // add a new square at the end of the array instead of moving the tail to the front
        var tail = {
            x: snakeX,
            y: snakeY
        };
        // snake eat food will score point
        score++;

        // create new food.
        createFood();
    } else {

        // pop out the last cell
        var tail = snake.pop();
        tail.x = snakeX;
        tail.y = snakeY;
    }

    // pop out the tail and shift it to the front of the array
    snake.unshift(tail);

    // creat snake using bodySnake function
    for (var i = 0; i < snake.length; i++) {
        bodySnake(snake[i].x, snake[i].y);
    }

    // create food using bait function
    bait(food.x, food.y);

    // input scoreText using scoreText function
    scoreText();
}

var init = function () {
      direction = 'down';
      drawSnake();
      createFood();
      gameloop = setInterval(paint, 80);
  }

  // to expose the init function
  return {
      init: init
  };

  // end of drawModule  
}());

// function to run the snake game
function runGame (window, document, drawModule, undefined) {

	// eventListener to link "start game" button to init function
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (direction != 'left') {
                direction = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (direction != 'down') {
                direction = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (direction != 'up') {
                direction = 'down';
                console.log('down');
            }
            break;
        }
    }
}

runGame(window, document, drawModule);

