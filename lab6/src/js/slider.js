function setUpSlider (el) {
    // General variables
    var sliderWrapper = el
    var sliderPlot = el.firstElementChild
    var m = []
    var rm = []

    // Split into 2 categories: image and non-image
    sliderPlot.childNodes.forEach (function (child) {
        if (child.nodeName == "IMG") {
            m.push(child.cloneNode())
        }
        else {
            rm.push(child)
        }
    })

    // Remove non-image elements
    rm.forEach (function (child) {
        child.remove()
    })

    // Duplicate image elements (not very optimized but it works)
    m.forEach (function (child) {
        sliderPlot.appendChild(child)
    })

    // Parameters
    var animationDuration = (Number(el.dataset["oneDuration"]) || 2000) * m.length
    var animationDirNormal = (el.dataset["direction"] || "").toLowerCase() != "reverse"

    console.log("anim. duration: " + animationDuration)

    var anim = undefined

    function setAnimation() {
        if (anim != undefined) {
            anim.cancel()
        }
        anim = sliderPlot.animate([
          // keyframes
          { transform: animationDirNormal ? 'translateX(0%)' : 'translateX(-50%)' },
          { transform: animationDirNormal ? 'translateX(-50%)' : 'translateX(0%)' }
        ], {
          // timing options
          duration: animationDuration,
          iterations: Infinity
        });
    }

    setAnimation()

    return {
        element: sliderWrapper,
        setOneDuration: function (val) {
            animationDuration = (Number(val) || 2000) * m.length
            setAnimation()
        },
        setDirection: function (val) {
            animationDirNormal = val.toLowerCase() != "reverse"
            setAnimation()
        },
        pause: function () {
            anim.pause()
        },
        resume: function () {
            anim.play()
        }
    }
}

export default {
    setUp: setUpSlider
}
