(function(e){var t;define([],function(){return function(){Modernizr.addTest("pointerevents",function(){var e=document.createElement("x"),t=document.documentElement,n=window.getComputedStyle,r;return"pointerEvents"in e.style?(e.style.pointerEvents="auto",e.style.pointerEvents="x",t.appendChild(e),r=n&&n(e,"").pointerEvents==="auto",t.removeChild(e),!!r):!1})}.call(e),t})})(this)