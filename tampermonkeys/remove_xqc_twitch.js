// ==UserScript==
// @name            XQC Remover
// @version         0.2
// @author          Lorenzo Scebba
// @description     A simple script to remove xqc cringe from twitch.
// @description:it  Uno script per rimuovere in automatico lo stream di xqc da twitch.
// @include         https://www.twitch.tv/*
// @grant           none
// @downloadURL     https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_xqc_twitch.js
// @updateURL       https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_xqc_twitch.js
// ==/UserScript==

(function () {
    'use strict'

    setInterval(() => {
        var xqcLink = document.querySelectorAll("[data-a-id='card-xqc']")

        if (xqcLink.length > 0) {
            xqcLink.forEach(link => {
                link.parentElement.parentElement.parentElement.parentElement.remove()
                console.log("XQC REMOVER has prevented you to see XQC Cards Cringe stuff")
            });
        }

        var xqcLink2 = document.querySelectorAll("a[href='/xqc']")

        if (xqcLink2.length > 0) {
            xqcLink2.forEach(link => {
                link.parentElement.parentElement.parentElement.remove()
            });
        }

    }, 1000);
})();