export default function StickyMenu(selector = ".appie-sticky") {
  document.addEventListener("scroll", () => {
    const element = document.querySelector(selector);
    const para = document.querySelectorAll(".appie-header-main-menu ul li a");
    const btn = document.querySelector(
      ".header-nav-box.header-nav-box-3 .toggle-btn"
    );
    if (element) {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        element.classList.add("sticky-color");
        btn.style.color = "#fff";
        para.forEach((item) => {
          item.classList.add("white");
        });
      } else {
        element.classList.remove("sticky-color");
        btn.style.color = "#52d652";

        para.forEach((item) => {
          item.classList.remove("white");
        });
      }
    }
  });
}
