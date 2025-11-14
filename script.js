"use strict";
(function () {

    window.addEventListener("load", init);

    function init() {
        const spot = id("spot");
        placeSpot();
        spot.addEventListener("click", placeSpot);

        function placeSpot() {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            let randomX = Math.floor(Math.random() * (viewportWidth - spot.offsetWidth));
            let randomY = Math.floor(Math.random() * (viewportHeight - spot.offsetHeight));
            spot.style.left = randomX + "px";
            spot.style.top = randomY + "px";
        }
    }

    function id(name) {
        return document.getElementById(name);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(query) {
        return document.querySelectorAll(query);
    }
})();