const hearts = document.querySelectorAll(".favorite-icon");

hearts.forEach(function(btn) {
  btn.addEventListener("click", function() {

    btn.classList.toggle("filled");

    if (btn.classList.contains("filled")) {
      btn.innerHTML = "&#10084;";
    } else {
      btn.innerHTML = "&#9825;";
    }

  });
});