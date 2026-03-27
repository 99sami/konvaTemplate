// find our elements
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");

let stageContainerWidth = stageContainer.offsetWidth;
// console.log(stageContainerWidth);
// find our height
let stageContainerHeight = stageContainer.offsetHeight;
// console.log(stageContainerHeight)

// set default circle colour
let circleColour = "red";

// create the konca stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
});
// create our layer
const firstLayer = new Konva.Layer();

// add the layer to our stage
stage.add(firstLayer);

// add interaction to button
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: circleColour,
  });

  // add the circle to our first layer
  firstLayer.add(circle);
}

circleButton.addEventListener("click", drawNewCircle);

// drawing feature
// feature analysis
// what is the user goal? trying to draw a picture
// what is the represented model? cursor on the canvas : defined canvas : brush select :
//  colour? or would that be its own system?
// how does it behave ?
// first move our cursor onto canvas, press mouse button down, move mouse, release mouse button
// what is the implemented model? create a new line when mouse button down, add to that line when mouse moves
//  how does it interact with other features?
// colour, images for the brush , eraser tool, uploaded image

// keep track of when button is held
let isDrawing = false;
let lastLine;

// user presses mouse button
function drawMouseDown() {
  isDrawing = true;
  const pos = stage.getPointerPosition();
  lastLine = new Konva.Line({
    stroke: "red",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round",
    points: [pos.x, pos.y, pos.x, pos.y],
  });
  firstLayer.add(lastLine);
}
// add cuntion to mousedown event
stage.on("mousedown", drawMouseDown);

// user moves their mouse
function drawMouseMove() {
  // dont run if not drawing
  if (isDrawing === false) {
    return;
  }
  // if isDrawing is true
  const pos = stage.getPointerPosition();
  let newPoints = lastLine.points().concat([pos.x, pos.y]);
  lastLine.points(newPoints);
}
// add function to mouse move event
stage.on("mousemove", drawMouseMove);

// user releases mouse button
function drawMouseUp() {
  isDrawing = false;
}
// add function to mouseup event
// stage.on("mouseup", drawMouseUp);
window.addEventListener("mouseup", drawMouseUp);

// feature analysis
// feature : rezising
// what is the user goal: resize and change shape of particular image
//  what is the represented model ? image select,  dotted border/box appear around the image, four points on corner
// how does it behave?
// select image , dotted box appears, move cursor onto the lines to re shape size of image
// what is the implemented model?
//  create a new shape / size when mouse button down and moved , keep the shape / size after mouse button up ,
// add new shape to layer
// how does it interact with other features?
