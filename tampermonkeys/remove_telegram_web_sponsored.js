// ==UserScript==
// @name            Twitch points collector
// @version         1.0
// @author          Lorenzo Scebba
// @description     A simple script to collect channel points automatically.
// @description:it  A simple script to collect channel points automatically.
// @include         https://www.twitch.tv/*
// @icon            https://pbs.twimg.com/profile_images/1321508753901080580/VQEwhmaf_400x400.jpg
// @grant           none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    setInterval(() => {
        var xpath = `//span[text()="sponsored"]/../../../../..`;
        var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        matchingElement.remove();
    }, 10000)
})();