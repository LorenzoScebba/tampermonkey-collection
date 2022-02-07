// ==UserScript==
// @name            Twitch points collector
// @version         1.1
// @author          Lorenzo Scebba
// @description     A simple script to collect channel points automatically.
// @description:it  A simple script to collect channel points automatically.
// @include         https://www.twitch.tv/*
// @icon            https://pbs.twimg.com/profile_images/1321508753901080580/VQEwhmaf_400x400.jpg
// @grant           none
// @downloadURL     https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/twitch_collector.js
// @updateURL       https://raw.githubusercontent.com/LorenzoScebba/tampermonkey-collection/master/tampermonkeys/twitch_collector.js
// ==/UserScript==

(function () {
    'use strict';

    function log(text) {
        console.log(`[Twitch points collector] ${text}`)
    }

    // Your code here...
    setInterval(() => { 
        var element = document.querySelector(".claimable-bonus__icon");
        
        if(element){
            log("Collecting points!")
            element.click();
        }
    }, 10000)
})();