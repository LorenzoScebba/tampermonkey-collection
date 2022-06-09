// ==UserScript==
// @name            XQC Remover
// @version         0.1
// @author          Lorenzo Scebba
// @description     A simple script to remove xqc cringe from twitch.
// @description:it  Uno script per rimuovere in automatico lo stream di xqc da twitch.
// @include         https://www.twitch.tv/*
// @grant           none
// @downloadURL     https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_xqc_twitch.js
// @updateURL       https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_xqc_twitch.js
// ==/UserScript==

(function() {
    'use strict'

    function deleteParentCard(link) {
       link.parentElement.parentElement.parentElement.parentElement.remove()
       console.log("XQC REMOVER has prevented you to see XQC Cringe stuff")
    }

    setInterval(() => {
        var xqcLink = document.querySelectorAll("[data-a-id='card-xqc']")

        if(xqcLink.length > 0){
            xqcLink.forEach(link => {
                deleteParentCard(link)
            });
        }

    }, 1000);

    // Your code here...
})();