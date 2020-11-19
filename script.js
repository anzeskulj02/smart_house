var pointer;
var lokacija=[];
var isPressedw = false;
var isPresseda = false;
var isPresseds = false;
var isPressedd = false;

function startGame() {
    pointer = new component(3, 3, "black", 0, 0);
    myGameArea.start();
	document.addEventListener("keydown",move);
	document.addEventListener("keyup",kill);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 500;
		this.canvas.style.border="1px solid black"
		this.canvas.setAttribute("id","pointer");
        this.context = this.canvas.getContext("2d");
        document.body.getElementsByClassName("wrapper")[0].appendChild(this.canvas);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    pointer.newPos();    
    pointer.update();
}

function move(e){
	if (e.keyCode==32){
		lokacija.push(pointer.x);
		lokacija.push(pointer.y);
		if(lokacija.length==4){
			var c = document.getElementById("draw");
			let ctx2 = c.getContext("2d");
			ctx2.beginPath();
			ctx2.moveTo(lokacija[0], lokacija[1]);
			ctx2.lineTo(lokacija[2], lokacija[3]);
			ctx2.stroke(); 
		}
		else{
			lokacija=[];
			lokacija.push(pointer.x);
			lokacija.push(pointer.y);
		}
	}
	else{
		switch(e.keyCode){
		case 87:
				if (!isPressedw) {
					isPressed = true;
					pointer.speedY -= 3;
		}
				break;
		case 83: if (!isPresseda) {
					isPressed = true;
					pointer.speedY += 3;
		}
				break;
		case 65: if (!isPresseds) {
					isPressed = true;
					pointer.speedX -= 3;
		}
				break;
		case 68: if (!isPressedd) {
					isPressed = true;
					pointer.speedX += 3;
		}
				break;
		}
	}
}

function kill(e){
	switch(e.keyCode){
		case 87:
				isPressedw = false;
					pointer.speedY = 0;
				break;
		case 83: isPresseda = false;
					pointer.speedY = 0;
				break;
		case 65: isPresseds = false;
					pointer.speedX = 0;
				break;
		case 68: isPressedd = false;
					pointer.speedX = 0;
				break;
		}
}

function changeColor(){
	var c = document.getElementById("draw");
	let ctx2 = c.getContext("2d");
	var color = document.getElementById("mySelect").value;
  	ctx2.strokeStyle = color;
}
