// Click do botão
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar  a umagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem o light, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
