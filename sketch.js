
var head,body;

function setup(){
createCanvas(500,500);
head = ellipse(mouseX, mouseY + 50, 20);
body = rect(head.x, head.y - 50, 100,20);

}

function draw(){
background(230,230,230);

// the neck
line(head.x,head.y,body.x,body.y);

head.display();
body.display();
}