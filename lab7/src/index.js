// Javascript -------------------
import React from "react"
import ReactDOM from "react-dom"
import Slider from "./js/slider.js"

// document.sliders = []

var s = [
    "img/mini-1.jpg",
    "img/mini-2.jpg",
    "img/mini-3.jpg",
    "img/mini-4.jpg",
    "img/mini-5.jpg",
    "img/mini-6.jpg",
    "img/mini-7.jpg",
    "img/mini-8.jpg",
    "img/mini-9.jpg"
];

function main () {
    ReactDOM.render (
        <Slider sources={s} oneDuration={4000} />,
        document.getElementById("slider-1")
    )
    ReactDOM.render (
        <Slider sources={s} oneDuration={6000} direction="reverse" />,
        document.getElementById("slider-2")
    )
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") main()
    else window.onload = function () { main() }
}

// CSS --------------------------
import "./css/remove-scrollbar.css"
import "./css/style.css"
import "./css/small-screen.css"
import "./css/medium-screen.css"
import "./css/big-screen.css"
import "./css/huge-screen.css"
