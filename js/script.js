window.onload = function () {
  document.getElementById("refresh").addEventListener("click", function () {
    location.reload(); // Refresh the page
    return false;
  });

  var start = document.getElementById("start");
  var welcome = document.getElementById("welcome");
  start.onclick = function () {
    welcome.style.display = "none";
    end.disabled = false;
  };

  var end = document.getElementById("finish");
  var selector = document.getElementById("selector");
  var pizza = document.getElementById("pizza");
  var complete = document.getElementById("completed");
  var again = document.getElementById("again");

  end.onclick = function () {
    selector.style.display = "none";
    pizza.className = "static";
    setTimeout(function () {
      pizza.className = "animate";
      complete.style.display = "block";
    }, 5000);
  };

  again.onclick = function () {
    location.reload();
    return false;
  };

  var topImgClass = document.getElementsByClassName("topping-image");
  var topClass = document.getElementsByClassName("topping"); // return an array-like object
  var indexCount = 1;
  for (let i = 0; i < topClass.length; i++) {
    topClass[i].addEventListener("click", function () {
      if (topClass[i].style.backgroundColor === "tan") {
        topClass[i].style.backgroundColor = "peachpuff";
        topImgClass[i].style.transform = "translate(0, -1000px)";
      } else {
        topClass[i].style.backgroundColor = "tan";
        indexCount++;
        topImgClass[i].style.zIndex = indexCount;
        topImgClass[i].style.transform = "translate(0, 0)";
      }
    });
  }
};
