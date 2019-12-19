// The starting position of the line
var position = new Point(100, 100);
var myCircle = new Path.Circle(new Point(0, 0), 1000);
myCircle.fillColor = 'black';
// The amount we will move when one of the keys is pressed:
var step = 2;

var path = new Path();
path.strokeColor = 'white';
path.add(position);

function onKeyDown(event) {
	if(event.key == 'a') {
		position.x -= step;
	}

	if(event.key == 'd') {
		position.x += step;
	}

	if(event.key == 'w') {
		position.y -= step;
	}

	if(event.key == 's') {
		position.y += step;
	}
	if(event.key == 's' && event.key == 'd') {
	position.y += step;
	position.x += step;
	}
	if(event.key == 's' && event.key == 'a') {
	position.y += step;
	position.x -= step;
	}
	if(event.key == 'w' && event.key == 'a') {
	position.y -= step;
	position.x -= step;
	}
	if(event.key == 'w' && event.key == 'd') {
	position.y -= step;
	position.x += step;
	}
	
	path.add(position);
	
	
}
