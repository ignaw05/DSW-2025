const secreto = document.getElementById("secreto")
const imgSec = document.getElementById("imgSec")

secreto.addEventListener("click", () => {
    imgSec.innerHTML = `<h3>Soy colorado</h3>
    <img src="images-3.jpeg">`
})