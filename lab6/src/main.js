// Javascript -------------------
import Slider from "./js/slider.js"

document.sliders = []

function main () {
    document.querySelectorAll(".slider").forEach(function(el){ 
        document.sliders.push(Slider.setUp(el))
    })
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") main()
    else window.onload = function () { main() }
}

// CSS --------------------------
import "./css/remove-scrollbar.css"
import "./css/style.css"
import "./css/slider.css"
import "./css/small-screen.css"
import "./css/medium-screen.css"
import "./css/big-screen.css"
import "./css/huge-screen.css"
