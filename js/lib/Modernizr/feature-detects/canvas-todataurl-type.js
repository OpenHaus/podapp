(function(e){var t;define([],function(){return function(){(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=document.createElement("canvas"),n=t.getContext("2d");e.onload=function(){n.drawImage(e,0,0),Modernizr.addTest("todataurljpeg",function(){return t.toDataURL("image/jpeg").indexOf("data:image/jpeg")===0}),Modernizr.addTest("todataurlwebp",function(){return t.toDataURL("image/webp").indexOf("data:image/webp")===0})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="})()}.call(e),t})})(this)