// ==UserScript==
// @name            Telegram sponsored posts remover
// @version         0.2
// @author          Lorenzo Scebba
// @description     A simple script to remove telegram sponsored posts automagically.
// @description:it  Uno script per rimuovere in automatico i post sponsorizzati di telegram.
// @include         https://web.telegram.org/z*
// @include         https://webk.telegram.org/*
// @grant           none
// @downloadURL     https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_telegram_web_sponsored.js
// @updateURL       https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_telegram_web_sponsored.js
// ==/UserScript==

(function () {
    'use strict';

    function log(text) {
        console.log(`[Telegram sponsored posts remover] ${text}`)
    }

    // Your code here...
    setInterval(() => {
        var xpath = `//span[text()="sponsored"]/../../../../..`;
        var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (matchingElement) {
            log("Removing sponsored post!")
            matchingElement.remove();
        }
    }, 1000)
})();