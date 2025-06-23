let intervalTime = 10; // Starting speed
let interval; // Store interval reference for later clearing

window.onload = startBouncingAnimation();
function startBouncingAnimation() {
  const output = document.getElementById("output");
  const circle = document.getElementById("circle");

  const maxX = output.clientWidth - circle.offsetWidth;
  const maxY = output.clientHeight - circle.offsetHeight;

  let posX = Math.floor(Math.random() * maxX);
  let posY = Math.floor(Math.random() * maxY);
  let dx = 2;
  let dy = 2;

  interval = setInterval(() => {
    posX += dx;
    posY += dy;

    // Bounce on left/right
    if (posX >= maxX || posX <= 0) dx = -dx;
    // Bounce on top/bottom
    if (posY >= maxY || posY <= 0) dy = -dy;

    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
  }, intervalTime); // dynamic speed
}

// document.getElementById("start").addEventListener("click", () => {
//   // Increase speed: decrease interval time (faster)
//   intervalTime = 5; // Speed up the animation
//   clearInterval(interval); // Clear the previous interval if there's any
//   startBouncingAnimation(); // Restart the animation with new speed
// });
