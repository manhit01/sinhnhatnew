$(document).ready(function () {
  $("#continue").on("click", function () {
    $(".tab2").show();
    $(".tab1").hide();
    // Xóa các confetti cũ nếu có
    $(".confetti").empty();

    // Tạo 50 mảnh confetti
    for (let i = 0; i < 500; i++) {
      const delay = Math.random() * 2; // Random delay for each confetti
      const leftPosition = Math.random() * 100; // Random horizontal position
      const fontSize = Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Random size between 20px and 40px

      // Tạo confetti
      const confettiPiece = $('<div class="confetti-piece">❤</div>');
      confettiPiece.css({
        left: `${leftPosition}%`,
        "font-size": `${fontSize}px`,
        "animation-delay": `${delay}s`,
      });

      // Thêm vào container confetti
      $(".confetti").append(confettiPiece);
    }
  });
});
const clickElements = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const text = document.querySelector(".text");
clickElements.addEventListener("click", () => {
  if (clickElements.className === "click") {
    clickElements.classList.add("active");
    giftBox.classList.add("active");
    shadow.classList.add("active");
    giftContainer.classList.add("active");
    text.classList.add("active");
    text.classList.remove("active2");
  } else {
    clickElements.classList.remove("active");
    giftBox.classList.remove("active");
    shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    text.classList.remove("active");
    text.classList.add("active2");
  }
});
