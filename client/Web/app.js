let roles = ["Web designer", "Musician", "Critical Thinker"];
let index = 0;

function changeHTML() {
  document.getElementsByTagName("h1")[0].innerHTML = "I am Subhajit Baidya";

  let item = document
    .getElementById("output")
    .getElementsByTagName("p")[0]
    .getElementsByTagName("span")[0];

  item.innerHTML = roles[index];
  index = (index + 1) % roles.length;

  let newElement = document.createElement("p");
  document.getElementsByTagName("button")[0].onclick = () => {
    newElement.textContent = "Learn and grow";
  };
  item.appendChild(newElement);
}

setInterval(changeHTML, 3000);
