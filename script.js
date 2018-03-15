// overall user interface varibles
var onePlayerBtn = document.querySelector('#onePlayer');
var twoPlayerBtn = document.querySelector('#twoPlayer');
var highScoreBtn = document.querySelector('#highScoreMode');
var survivalBtn = document.querySelector('#survivalMode');
var firstPlayerCanvas = document.querySelector('#myCanvas');
var secondPlayerCanvas = document.querySelector('#dualCanvas');
var twoPlayerCanvas = document.querySelector('#survivalCanvas');
var startBtn = document.querySelector('#btn');
var startSurvivalBtn = document.querySelector('#survivalBtn');
var backBtn = document.querySelector('#backBtn');
var controlBtnP1 = document.querySelector('#controlBtnP1');
var controlBtnP2 = document.querySelector('#controlBtnP2');
var onePlayerControl = document.querySelector('#onePlayerControl');
var twoPlayerControl = document.querySelector('#twoPlayerControl');

// one player game
function startOnePlayer() {
    onePlayerBtn.style.display = "none";
    twoPlayerBtn.style.display = "none";
    highScoreBtn.style.display = "none";
    survivalBtn.style.display = "none";
    firstPlayerCanvas.style.display = "inline-block";
    secondPlayerCanvas.style.display = "none";
    twoPlayerCanvas.style.display = "none";
    startBtn.style.display = "inline-block";
    startBtn.style.marginTop = "10px";
    startSurvivalBtn.style.display = "none";
    backBtn.style.display = "inline-block";
    backBtn.style.marginTop = "10px";
    controlBtnP1.style.display = "inline-block";
    controlBtnP2.style.display = "none";
}

// two players mode selection = "high score" || "survival"
function twoPlayerMode() {
    onePlayerBtn.style.display = "none";
    twoPlayerBtn.style.display = "none";
    highScoreBtn.style.display = "inline-block";
    survivalBtn.style.display = "inline-block";
    firstPlayerCanvas.style.display = "none";
    secondPlayerCanvas.style.display = "none";
    twoPlayerCanvas.style.display = "none";
    startBtn.style.display = "none";
    startSurvivalBtn.style.display = "none";
    backBtn.style.display = "block";
    backBtn.style.marginLeft = "auto";
    backBtn.style.marginRight = "auto";
    backBtn.style.marginTop = "10px";
    controlBtnP1.style.display = "none";
    controlBtnP2.style.display = "none";
}

// two players high score mode
function startTwoPlayerHighScore() {
    onePlayerBtn.style.display = "none";
    twoPlayerBtn.style.display = "none";
    highScoreBtn.style.display = "none";
    survivalBtn.style.display = "none";
    firstPlayerCanvas.style.display = "inline-block";
    secondPlayerCanvas.style.display = "inline-block";
    twoPlayerCanvas.style.display = "none";
    startBtn.style.display = "inline-block";
    startBtn.style.marginTop = "10px";
    startSurvivalBtn.style.display = "none";
    backBtn.style.display = "inline-block";
    backBtn.style.marginTop = "10px";
    controlBtnP1.style.display = "none";
    controlBtnP2.style.display = "inline-block";
}

// two players survival mode
function startTwoPlayerSurvival () {
    onePlayerBtn.style.display = "none";
    twoPlayerBtn.style.display = "none";
    highScoreBtn.style.display = "none";
    survivalBtn.style.display = "none";
    firstPlayerCanvas.style.display = "none";
    secondPlayerCanvas.style.display = "none";
    twoPlayerCanvas.style.display = "block";
    startBtn.style.display = "none";
    startSurvivalBtn.style.display = "inline-block";
    startSurvivalBtn.style.marginTop = "10px";
    backBtn.style.display = "inline-block";
    backBtn.style.marginTop = "10px";
    controlBtnP1.style.display = "none";
    controlBtnP2.style.display = "inline-block";
}

// return back to main menu
function mainMenu() {
    onePlayerBtn.style.display = "inline-block";
    twoPlayerBtn.style.display = "inline-block";
    highScoreBtn.style.display = "none";
    survivalBtn.style.display = "none";
    firstPlayerCanvas.style.display = "none";
    secondPlayerCanvas.style.display = "none";
    twoPlayerCanvas.style.display = "none";
    startBtn.style.display = "none";
    startSurvivalBtn.style.display = "none";
    backBtn.style.display = "none";
    controlBtnP1.style.display = "none";
    controlBtnP2.style.display = "none";
}

// to display & remove instructions to play game
function appearOnePlayerControl() {
    onePlayerControl.style.display = "block";
}
function removeOnePlayerControl() {
    onePlayerControl.style.display = "none";
}
function appearTwoPlayerControl() {
    twoPlayerControl.style.display = "block";
}
function removeTwoPlayerControl() {
    twoPlayerControl.style.display = "none";
}

// linking 1 Player button to startOnePlayer function
onePlayerBtn.addEventListener("click", startOnePlayer);

// linking 2 Player button to mode selection
twoPlayerBtn.addEventListener("click", twoPlayerMode);

// linking highScoreBtn to high score mode
highScoreBtn.addEventListener("click", startTwoPlayerHighScore);

// linking survivalBtn to survival mode
survivalBtn.addEventListener("click", startTwoPlayerSurvival);

// linking back button to home page
backBtn.addEventListener("click", mainMenu);

// button to display control keys for Player 1
controlBtnP1.addEventListener("mouseover", appearOnePlayerControl);
controlBtnP1.addEventListener("mouseout", removeOnePlayerControl);

// button to display control keys for Player 2
controlBtnP2.addEventListener("mouseover", appearTwoPlayerControl);
controlBtnP2.addEventListener("mouseout", removeTwoPlayerControl);

// linking to P1 myCanvas html
var mycanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext("2d");

// linking to P2 dualCanvas html
var dualCanvas = document.getElementById('dualCanvas');
var ctxB = dualCanvas.getContext("2d");

// linking to 2 players survivalCanvas html
var survivalCanvas = document.getElementById('survivalCanvas');
var ctxC = survivalCanvas.getContext("2d");

// components of the P1 snake game
var snakeSize = 10; 
var w = 350;
var h = 350;
var score = 0;
var snake;
var food;

// components of the P2 snake game
var snakeSizeB = 10; 
var wB = 350;
var hB = 350;
var scoreB = 0;
var snakeB;
var foodB;

// P1 game module
var drawModule = (function () { 
    var bodySnake = function(x, y) {
        // this is the single square of the snake
        ctx.fillStyle = 'yellow';
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
        // reset score
        score = 0;

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
      direction = "down";
      drawSnake();
      createFood();
      gameloop = setInterval(paint, 80);
  }

  // to expose the init function
  return {
      init: init
  };

  // end of P1 drawModule
}());

// P2 game module
var drawModuleB = (function () { 
    var bodySnakeB = function(x, y) {
        // this is the single square of the snake
        ctxB.fillStyle = 'green';
        ctxB.fillRect(x*snakeSizeB, y*snakeSizeB, snakeSizeB, snakeSizeB);
        // this is the border of the snake
        ctxB.strokeStyle = 'darkblue';
        ctxB.strokeRect(x*snakeSizeB, y*snakeSizeB, snakeSizeB, snakeSizeB);
    }

    var baitB = function(x, y) {
        // this is the single square of the food
        ctxB.fillStyle = 'salmon';
        ctxB.fillRect(x*snakeSizeB+1, y*snakeSizeB+1, snakeSizeB-2, snakeSizeB-2);
        // this is the border of the food
        ctxB.strokeStyle = 'white';
        ctxB.strokeRect(x*snakeSizeB, y*snakeSizeB, snakeSizeB, snakeSizeB);
    }

    var scoreTextB = function() {
        // this is to keep track of the score aka food eaten
        var score_text = "Score: " + scoreB;
        ctxB.fillStyle = 'blue';
        ctxB.fillText(score_text, 145, hB-5);
    }

// create snake
var drawSnakeB = function() {
        // snake length will be 5 square long at the start
        var length = 4;
        snakeB = [];
        
        // for loop will push 5 square into the snake element
        // every element will have x = 0 and the y will take the value of the index.
        for (var i = length; i>=0; i--) {
            snakeB.push({x:i, y:0});
        }  
    }

// create food
var createFoodB = function() {
          foodB = {
            // food will be at random position
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        }
        
        // look at the position of the snake's body.
        for (var i=0; i>snakeB.length; i++) {
            var snakeXB = snakeB[i].x;
            var snakeYB = snakeB[i].y;
            
            // if food is in the position of the snake, food will randomise again
             if (foodB.x === snakeXB || foodB.y === snakeYB || foodB.y === snakeYB && foodB.x===snakeXB) {
                foodB.x = Math.floor((Math.random() * 30) + 1);
                foodB.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    }

// check for collision with body
var checkCollisionB = function(x, y, array) {
        for(var i=0; i<array.length; i++) {
            if(array[i].x === x && array[i].y === y)
            return true;
        }
        return false;
    }

var paintB = function () {
    // the area within the canvas in which the snake will move
    ctxB.fillStyle = 'lightgrey';
    ctxB.fillRect(0, 0, wB, hB);

    // the border of the play area
    ctxB.strokeStyle = 'black';
    ctxB.strokeRect(0, 0, wB, hB);

    // start game button will be disable during game play
    btn.setAttribute('disabled', true);

    var snakeXB = snakeB[0].x;
    var snakeYB = snakeB[0].y;

    // using keyboard arrow keys to control the snake
    // pop out the last element of the array and shift it on the top as first element

    if (movement === 'right') {
        snakeXB++;
    } else if (movement === 'left') {
        snakeXB--;
    } else if (movement === 'up') {
        snakeYB--;
    } else if (movement === 'down') {
        snakeYB++;
    }

    // game over when snake collide the wall
    // game over when snake conllide it's own body (checkCollision function)

    if (snakeXB == -1 || snakeXB == wB / snakeSizeB || snakeYB == -1 || snakeYB == hB / snakeSizeB || checkCollisionB(snakeXB, snakeYB, snakeB)) {
        // stop the game

        // start button enabled again
        btn.removeAttribute('disabled', true);
        // reset score
        scoreB = 0;

        // clean up the canvas
        ctxB.clearRect(0, 0, wB, hB);
        gameloopB = clearInterval(gameloopB);
        return;
    }

    // snake eat food will grow in length
    if (snakeXB == foodB.x && snakeYB == foodB.y) {
        // add a new square at the end of the array instead of moving the tail to the front
        var tailB = {
            x: snakeXB,
            y: snakeYB
        };
        // snake eat food will score point
        scoreB++;

        // create new food.
        createFoodB();
    } else {

        // pop out the last cell
        var tailB = snakeB.pop();
        tailB.x = snakeXB;
        tailB.y = snakeYB;
    }

    // pop out the tail and shift it to the front of the array
    snakeB.unshift(tailB);

    // creat snake using bodySnake function
    for (var i = 0; i < snakeB.length; i++) {
        bodySnakeB(snakeB[i].x, snakeB[i].y);
    }

    // create food using bait function
    baitB(foodB.x, foodB.y);

    // input scoreText using scoreText function
    scoreTextB();
}

var initB = function () {
    movement = "down";
    drawSnakeB();
    createFoodB();
    gameloopB = setInterval(paintB, 80);
  }

  // to expose the init function
  return {
      initB: initB
  };

  // end of P2 drawModule  
}());

// 2 players survival game module
var drawModuleC = (function () { 
    var bodySnake = function(x, y) {
        // this is the single square of the snake
        ctxC.fillStyle = 'yellow';
        ctxC.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        // this is the border of the snake
        ctxC.strokeStyle = 'darkgreen';
        ctxC.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    var bodySnakeB = function(x, y) {
        // this is the single square of the snake
        ctxC.fillStyle = 'green';
        ctxC.fillRect(x*snakeSizeB, y*snakeSizeB, snakeSizeB, snakeSizeB);
        // this is the border of the snake
        ctxC.strokeStyle = 'darkblue';
        ctxC.strokeRect(x*snakeSizeB, y*snakeSizeB, snakeSizeB, snakeSizeB);
    }

    var bait = function(x, y) {
        // this is the single square of the food
        ctxC.fillStyle = 'red';
        ctxC.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
        // this is the border of the food
        ctxC.strokeStyle = 'white';
        ctxC.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    var scoreText = function() {
        // this is to keep track of the score aka food eaten
        var score_text = "Player Left: " + score;
        ctxC.fillStyle = 'blue';
        ctxC.fillText(score_text, 73, h-5);
    }

    var scoreTextB = function() {
        // this is to keep track of the score aka food eaten
        var score_textB = "Player Right: " + scoreB;
        ctxC.fillStyle = 'blue';
        ctxC.fillText(score_textB, 213, h-5);
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

var drawSnakeB = function() {
        // snake length will be 5 square long at the start
        var length = 4;
        snakeB = [];
        
        // for loop will push 5 square into the snake element
        // every element will have x = 0 and the y will take the value of the index.
        for (var i = length; i>=0; i--) {
            snakeB.push({x:i+30, y:0});
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
    ctxC.fillStyle = 'lightgrey';
    ctxC.fillRect(0, 0, w, h);

    // the border of the play area
    ctxC.strokeStyle = 'black';
    ctxC.strokeRect(0, 0, w, h);

    // start game button will be disable during game play
    survivalBtn.setAttribute('disabled', true);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    var snakeBX = snakeB[0].x;
    var snakeBY = snakeB[0].y;

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

    if (movement === 'right') {
        snakeBX++;
    } else if (movement === 'left') {
        snakeBX--;
    } else if (movement === 'up') {
        snakeBY--;
    } else if (movement === 'down') {
        snakeBY++;
    }

    // game over when snake collide the wall
    // game over when snake conllide it's own body (checkCollision function)

    if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || checkCollision(snakeX, snakeY, snake) || checkCollision(snakeX, snakeY, snakeB)) {
        // stop the game

        // start button enabled again
        survivalBtn.removeAttribute('disabled', true);
        // reset score
        score = 0;
        scoreB = 0;
        console.log("Player 2 Win!")

        // clean up the canvas
        ctx.clearRect(0, 0, w, h);
        gameloop = clearInterval(gameloop);
        return;

    } else if (snakeBX == -1 || snakeBX == w / snakeSizeB || snakeBY == -1 || snakeBY == h / snakeSizeB || checkCollision(snakeBX, snakeBY, snakeB) || checkCollision(snakeBX, snakeBY, snake)) {
        // stop the game

        // start button enabled again
        survivalBtn.removeAttribute('disabled', true);
        // reset score
        score = 0;
        scoreB = 0;
        console.log("Player 1 Win!")

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

    // worm eat food will grow in length
    if (snakeBX == food.x && snakeBY == food.y) {
        // add a new square at the end of the array instead of moving the tail to the front
        var tailB = {
            x: snakeBX,
            y: snakeBY
        };
        // worm eat food will score point
        scoreB++;

        // create new food.
        createFood();
    } else {

        // pop out the last cell
        var tailB = snakeB.pop();
        tailB.x = snakeBX;
        tailB.y = snakeBY;
    }

    // pop out the tail and shift it to the front of the array
    snakeB.unshift(tailB);

    // create snake using bodySnake function
    for (var i = 0; i < snake.length; i++) {
        bodySnake(snake[i].x, snake[i].y);
    }

    // create worm using bodySnakeB function
    for (var i=0; i<snakeB.length; i++) {
        bodySnakeB(snakeB[i].x, snakeB[i].y);
    }

    // create food using bait function
    bait(food.x, food.y);

    // input score for P1 using scoreText function
    scoreText();

    // input score for P2 using scoreText function
    scoreTextB();
}

var initC = function () {
      direction = "down";
      movement = "down";
      drawSnake();
      drawSnakeB();
      createFood();
      gameloop = setInterval(paint, 80);
  }

  // to expose the init function
  return {
      initC: initC
  };

  // end of 2 players survival drawModule  
}());

// function to run the snake game
function runGame (drawModule, drawModuleB, drawModuleC) {

    // eventListener to link "start game" button to init function
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
        drawModuleB.initB();
    });

    var survivalBtn = document.getElementById('survivalBtn');
    survivalBtn.addEventListener("click", function () {
        drawModuleC.initC();
    });

    document.onkeydown = function (event) {

        /* keyCode = window.event.keyCode;*/
        // to identity the playing keys
        playKey = event.keyCode;

        switch (playKey) {

        // player 1 - left control
        case 65:
            if (direction != 'right') {
                direction = 'left';
                console.log('P1 left');
            }
            break;

        // player 1 - right control
        case 68:
            if (direction != 'left') {
                direction = 'right';
                console.log('P1 right');
            }
            break;

        // player 1 - up control
        case 87:
            if (direction != 'down') {
                direction = 'up';
                console.log('P1 up');
            }
            break;

        // player 1 - down control
        case 83:
            if (direction != 'up') {
                direction = 'down';
                console.log('P1 down');
            }
            break;

        // player 2 - left control
        case 74:
            if (movement != 'right') {
                movement = 'left';
                console.log('P2 left');
            }
            break;

        // player 2 - right control
        case 76:
            if (movement != 'left') {
                movement = 'right';
                console.log('P2 right');
            }
            break;

        // player 2 - up control
        case 73:
            if (movement != 'down') {
                movement = 'up';
                console.log('P2 up');
            }
            break;

        // player 2 - down control
        case 75:
            if (movement != 'up') {
                movement = 'down';
                console.log('P2 down');
            }
            break;
        }
    }
}

// calling the runGame function
runGame(drawModule, drawModuleB, drawModuleC);
