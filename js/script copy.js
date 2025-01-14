window.onload = function () {
  var start = document.getElementById("start");
  var welcome = document.getElementById("welcome");
  start.onclick = function () {
    welcome.style.display = "none";
  };

  var end = document.getElementById("finish");
  var selector = document.getElementById("selector");
  var pizza = document.getElementById("pizza");

  end.onclick = function () {
    selector.style.display = "none";
    pizza.className = "static";
    setTimeout(function () {
      pizza.className = "animate";
    }, 3000);
  };

  var ipepperoni = document.getElementById("pepperoni");
  var imushroom = document.getElementById("mushroom");
  var iolive = document.getElementById("olive");
  var ibasil = document.getElementById("basil");
  var icheese = document.getElementById("cheese");
  var ipepper = document.getElementById("pepper");

  var bpepperoni = document.getElementById("sel-pepperoni");
  var bmushroom = document.getElementById("sel-mushroom");
  var bolive = document.getElementById("sel-olive");
  var bbasil = document.getElementById("sel-basil");
  var bcheese = document.getElementById("sel-cheese");
  var bpepper = document.getElementById("sel-pepper");

  // bpepperoni.addEventListener("click", function () {
  //   if (bpepperoni.style.backgroundColor === "peachpuff") {
  //     bpepperoni.style.backgroundColor = "Tan";
  //     ipepperoni.style.transform = "translate(0, 0)";
  //   } else {
  //     bpepperoni.style.backgroundColor = "peachpuff";
  //     ipepperoni.style.transform = "translate(0, -1000px)";
  //   }
  // });

  // bmushroom.addEventListener("click", function () {
  //   bmushroom.style.backgroundColor = "Tan";
  //   imushroom.style.transform = "translate(0, 0)";
  // });

  // bolive.addEventListener("click", function () {
  //   bolive.style.backgroundColor = "Tan";
  //   iolive.style.transform = "translate(0, 0)";
  // });

  // bcheese.addEventListener("click", function () {
  //   bcheese.style.backgroundColor = "Tan";
  //   icheese.style.transform = "translate(0, 0)";
  // });

  // bpepper.addEventListener("click", function () {
  //   bpepper.style.backgroundColor = "Tan";
  //   ipepper.style.transform = "translate(0, 0)";
  // });

  // bbasil.addEventListener("click", function () {
  //   bbasil.style.backgroundColor = "Tan";
  //   ibasil.style.transform = "translate(0, 0)";
  // });

  var topClass = document.getElementsByClassName("topping"); // return an array-like object
  for (let i = 0; i < topClass.length; i++) {
    topClass[i].addEventListener("click", function () {
      if (topClass[i].style.backgroundColor === "peachpuff") {
        topClass[i].style.backgroundColor = "Tan";
        ipepperoni.style.transform = "translate(0, 0)";
      } else {
        topClass[i].style.backgroundColor = "peachpuff";
        ipepperoni.style.transform = "translate(0, -1000px)";
      }
    });
  }
};
