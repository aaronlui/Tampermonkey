// ==UserScript==
// @name         chiphell
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Aaron Lui
// @match        http*://www.chiphell.com/forum*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  GM_addStyle('div[id^="forum_rules_"] {display: none;}');
})();