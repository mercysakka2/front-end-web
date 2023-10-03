// window Element
window.addEventListener('load', ()=>{
	resize();
	document.addEventListener('mousedown', startPainting);
	document.addEventListener('mouseup', stopPainting);
	document.addEventListener('mousemove', sketch);
	window.addEventListener('resize', resize);
});

// declare variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let coord = {x:0 , y:0};
let paint = false;

// resizes the canvas to the available size of the window.
function resize(){
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

//update the coordianates of the cursor
function getPosition(event) {
	coord.x = event.clientX - canvas.offsetLife;
	coord.y = event.clientY - canvas.offsetTop;
}

// start and stop drawing
function startPainting(event) {
	paint = true;
	getPosition(event);
}
function stopPainting() {
	paint = false;
}

function sketch (event) {
	if (!paint) return;
	ctx.beginPath();
	ctx.lineWidth = 5;
	// sets round shape.
	ctx.lineCap = 'round';
	ctx.strokeStyle = 'green';
	
	ctx.moveTo(coord.x, coord.y);
	
	getPosition(event);
	
	ctx.lineTo(coord.x , coord.y);
	
	ctx.stroke();
}