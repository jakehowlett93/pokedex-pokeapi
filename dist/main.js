!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=async e=>{const t=await fetch(e);return await t.json()};var a=async e=>{e.preventDefault();const t={url:"https://pokeapi.co/api/v2/",type:"pokemon",name:""};t.name=document.getElementsByClassName("searchBar")[0].value;let{url:n,type:a,name:o}=t,s=`${n}${a}/${o}`,i=`${n}${a}-species/${o}`;const l=await r(s),c=await r(i);document.getElementsByClassName("sprite")[0].src=l.sprites.front_default;const u=l.name.charAt(0).toUpperCase()+l.name.slice(1);document.getElementById("pokeName").innerHTML=u;const m="#"+l.order;document.getElementById("pokeNumber").innerHTML=m;let d,p="";l.types.forEach(e=>{p+=e.type.name,p+=" / "}),p=p.substring(0,p.length-2),document.getElementById("pokeType").innerHTML=p,d=c.flavor_text_entries.find(e=>"en"===e.language.name),document.getElementsByClassName("description")[0].innerHTML=d.flavor_text,l.abilities.forEach(e=>{const t=e.ability.name;let n=document.getElementsByClassName("abilities")[0];const r=document.createElement("li"),a=document.createTextNode(t);r.appendChild(a),n.appendChild(r)}),document.getElementsByClassName("hideElement")[0].classList.remove("hideElement")};(async()=>{try{document.getElementsByClassName("searchForm")[0].addEventListener("submit",a)}catch(e){}})()}]);