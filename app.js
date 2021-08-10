var acc = document.getElementsByClassName("acc");

for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("open");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
