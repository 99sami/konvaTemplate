// create the konca stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 500,
  height: 500,
});

const firstlayer = new Konva.Layer();
const circle = new Konva.Circle({
  x: 250,
  y: 250,
  radius: 50,
  fill: "red",
});
