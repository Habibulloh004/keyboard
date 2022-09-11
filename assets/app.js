let key = document.querySelectorAll(".key");
let body = document.querySelector("body");
let nightMode = document.querySelector(".nightMode");
let toggleCircle = document.querySelector(".toggleCircle");
let colorsInput = document.querySelector(".colorsInput");
let keyboardLights = document.querySelector(".keyboardLights");
let text = document.querySelector(".text");
let shiftLeft = document.querySelector(".key_LeftShift");
let shiftRight = document.querySelector(".key_RightShift");
let changeColor = document.querySelector(".changeLightColor");
let capslock = document.querySelector(".key_CapsLock");
let spaceKey = document.querySelector(".key_Space");
let keyboardWrapper = document.querySelector(".keyboardWrapper");

for (let i = 0; i < key.length; i++) {
  key[i].setAttribute("keyName", key[i].innerText);
  key[i].setAttribute("lowerCaseName", key[i].innerText.toLowerCase());
}

window.addEventListener("keydown", function (e) {
  for (let i = 0; i < key.length; i++) {
    if (
      e.key == key[i].getAttribute("keyName") ||
      e.key == key[i].getAttribute("lowerCaseName")
    ) {
      key[i].classList.add("active");
    }

    if (e.code == "Space") {
      spaceKey.classList.add("active");
    }

    if (e.code == "ShiftLeft") {
      shiftLeft.classList.remove("active");
    }

    if (e.code == "ShiftRight") {
      shiftRight.classList.remove("active");
    }

    if (e.code == "CapsLock") {
      capslock.classList.toggle("active");
    }
  }
});

window.addEventListener("keyup", function (e) {
  for (let i = 0; i < key.length; i++) {
    if (
      e.key == key[i].getAttribute("keyName") ||
      e.key == key[i].getAttribute("lowerCaseName")
    ) {
      key[i].classList.remove("active");
      key[i].classList.add("remove");
    }

    if (e.code == "Space") {
      spaceKey.classList.remove("active");
      spaceKey.classList.add("remove");
    }

    if (e.code == "ShiftLeft") {
      shiftLeft.classList.remove("active");
      shiftLeft.classList.add("remove");
    }

    if (e.code == "ShiftRight") {
      shiftRight.classList.remove("active");
      shiftRight.classList.add("remove");
    }

    setTimeout(() => {
      key[i].classList.remove("remove");
    }, 200);
  }
});

nightMode.addEventListener("click", function () {
  toggleCircle.classList.toggle("active");
  body.classList.toggle("active");
  nightMode.classList.toggle("active");
  keyboardWrapper.classList.toggle("active");
  text.classList.toggle("active");
  changeColor.classList.toggle("active");
  for (let i = 0; i < key.length; i++) {
    key[i].classList.toggle("key_night");
  }
});

colorsInput.addEventListener("input", function () {
  for (let i = 0; i < key.length; i++) {
    key[i].style.color = colorsInput.value;
  }
  keyboardLights.style.background = colorsInput.value;
});
