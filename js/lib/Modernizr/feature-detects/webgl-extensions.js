(function(e){var t;define([],function(){return function(){(function(){if(!Modernizr.webgl)return;var e,t,n;try{e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(r){return}t===undefined?Modernizr.webgl=new Boolean(!1):Modernizr.webgl=new Boolean(!0);for(var i=-1,s=n.length;++i<s;)Modernizr.webgl[n[i]]=!0;window.TEST&&TEST.audvid&&TEST.audvid.push("webgl"),e=undefined})()}.call(e),t})})(this)