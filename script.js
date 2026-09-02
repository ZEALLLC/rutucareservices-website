document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  var overlay = document.querySelector(".nav-overlay");

  function closeNav() {
    nav.classList.remove("open");
    overlay.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function toggleNav() {
    var isOpen = nav.classList.toggle("open");
    overlay.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
  if (toggle && nav && overlay) {
    toggle.addEventListener("click", toggleNav);
    overlay.addEventListener("click", closeNav);
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  // よくあるご質問／個人情報保護方針：常時展開し、クリックしても閉じないようにする
  document.querySelectorAll(".faq-static .faq-item").forEach(function (item) {
    item.setAttribute("open", "");
    var summary = item.querySelector(".faq-q");
    if (summary) {
      summary.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  });

  // お問合せフォーム（デモ用の簡易バリデーション＋送信メッセージ）
  var form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.querySelector("#formMessage");
      if (msg) {
        msg.textContent = "送信ありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。";
        msg.style.display = "block";
      }
      form.reset();
    });
  }
});
