!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}),{once:!0}),e.addEventListener("click",(function(){clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.b738a2b8.js.map