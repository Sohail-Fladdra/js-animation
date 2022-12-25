let box = document.getElementById("box");
let slide1 = document.getElementById("slide-1");
var height = document.body.clientHeight;
var width = document.body.clientWidth;

let moveBox = (event) => {
  let x, y;
  x = event.clientX;
  y = event.clientY;
  // console.log(x,y);
  // console.log(x/width, y/height);

  box.style.left = x + "px";
  box.style.top = y + "px";

  box.style.objectPosition =
    (x / width) * 100 + "% " + (y / height) * 100 + "%";
  //   box.style.objectPosition =  -x + 'px ' + -y + 'px';
  box.animate({
    duration: "3s",
  });
};
slide1.addEventListener("mousemove", moveBox);

// // ///////
zoomSlide = (e) => {
  // console.log('scrolling');
  let pos = slide1.getClientRects()["0"];
  let height = pos.height;
  let top = -pos.top;
  let startFrom = 0.3;
  let val = (top / height - startFrom) * 100;
  if (val >= 0) {
    console.log(val);
    slide1.style.backgroundSize = `${val + 250}%`;
  }
};
window.addEventListener("scroll", zoomSlide);
