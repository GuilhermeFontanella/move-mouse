const { mouse, Point } = require("@nut-tree-fork/nut-js");

setInterval(async () => {
  const pos = await mouse.getPosition();
  await mouse.move([new Point(pos.x + 10, pos.y)]);
  await mouse.move([new Point(pos.x, pos.y)]);
  console.log("Mouse movido!");
}, 180000); // a cada 3 minutos
