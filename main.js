window .onload = inicio;
function inicio () {
    let a = document.querySelector("cajaCubo")
    let b = document.querySelector("altoyancho")
    let c = document.querySelector("ejex")
    let d = document.querySelector("ejey")

    setInterval(function() {
        a.style.tranform = "rotatex(${c.value}deg)" + "rotatey(${d.value}deg"

        a.style.width = "${b.value} "+" px"
        a.style.heigth = "${b.value} "+" px"

        let cu = document.querySelectorAll("cubo")
        cu.forEach(function(e,i) {
            cu[i].style.width = "${b.value} "+"px"
            cu[i].style.height = "${b.value} "+"px"
        })
    },0)
}//llave final 