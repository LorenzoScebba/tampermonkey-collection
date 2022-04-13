// ==UserScript==
// @name            Reddit promoted posts remover
// @version         0.2
// @author          Lorenzo Scebba
// @description     A simple script to remove reddit promoted posts automagically.
// @description:it  Uno script per rimuovere in automatico i post sponsorizzati di reddit.
// @include         https://www.reddit.com/r/*
// @grant           none
// @downloadURL     https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_reddit_web_promoted.js
// @updateURL       https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/remove_reddit_web_promoted.js
// ==/UserScript==

(function () {
    'use strict';

    function log(text) {
        console.log(`[Reddit promoted posts remover] ${text}`)
    }

    setInterval(() => {
        var xpath = `//span[text()="promoted"]/../../../../../../../..`;
        var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (matchingElement) {
            log("Removing promoted post!")
            matchingElement.remove();
        }
    }, 1000)
})();