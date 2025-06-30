const text = "Jerealain";
const typeTarget = document.getElementById("typewriter");
let index = 0;
let isDeleting = false;

function typeWriter() {
  if (!isDeleting) {
    typeTarget.textContent += text.charAt(index);
    index++;
    if (index === text.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000); 
      return;
    }
  } else {
    typeTarget.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }
  setTimeout(typeWriter, isDeleting ? 100 : 200);
}

window.addEventListener("load", typeWriter);
