!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}({30:function(e,t){var n={kubernetes_custom:95e3,kubernetes_existing:0,kubernetes_reference:45e3,openstack_custom:15e4,openstack_existing:0,openstack_reference:75e3},r=300,o=4275,u=3250,c=6465,a={none:0,essential:225,standard:750,advanced:1500},i={standard:{tier_one:{base:0,multiplier:16.67},tier_two:{base:2500,multiplier:12.5},tier_three:{base:19375,multiplier:6.67},tier_four:{base:29375,multiplier:3.33},tier_five:{base:69375,multiplier:1.67},tier_six:{base:94375,multiplier:0}},advanced:{tier_one:{base:0,multiplier:33.33},tier_two:{base:5e3,multiplier:25},tier_three:{base:38750,multiplier:13.33},tier_four:{base:58750,multiplier:6.67},tier_five:{base:138750,multiplier:3.33},tier_six:{base:188750,multiplier:0}}};function l(){var e,t,n;d(),e=document.querySelectorAll(".js-tco-calculator__range"),t=document.querySelectorAll(".js-tco-calculator__checkbox"),n=document.querySelectorAll(".js-tco-calculator__radio"),e.forEach((function(e){var t=e.querySelector("input[type='number']"),n=e.querySelector("input[type='range']");t.addEventListener("input",(function(e){n.value=e.target.value,d()})),n.addEventListener("input",(function(e){t.value=e.target.value,d()}))})),t.forEach((function(e){e.addEventListener("input",(function(){d()}))})),n.forEach((function(e){e.addEventListener("input",(function(){d()}))}))}function d(){var e=parseInt(document.querySelector("#data-volume__input").value),t=document.querySelector("[name='deployment-type']:checked").value,l=parseInt(document.querySelector("#hosts__input").value)-3,d=document.querySelector("#ct-k8s"),s=n["kubernetes_".concat(t)],f=document.querySelector("#ct-openstack"),m=n["openstack_".concat(t)],p=document.querySelector("[name='self-managed']:checked").value,_=a[p]*(l+3),y=3*r,b=a.advanced*(l+3),v=0,S=0,k=0,h=0,q=0;e/l>48&&"none"!==p&&"essential"!==p&&(h+=function(e,t){var n="tier_",r=0;t<=150?n+="one":t>150&&t<=1500?(n+="two",r=150):t>1500&&t<=3e3?(n+="three",r=1500):t>3e3&&t<=15e3?(n+="four",r=3e3):t>15e3&&t<=3e4?(n+="five",r=15e3):t>3e4&&(n+="six",r=3e4);var o=i[e][n],u=t-r;return o.base+u*o.multiplier}(p,e)),f.checked&&d.checked?(S+=s+m,v+=l*c):f.checked?(S+=m,v+=l*o):d.checked&&(S+=s,v+=l*u),(f.checked||d.checked)&&(q+=v+b+h+y,k+=_+h),function(e,t,n){var r=document.querySelector("#intial-rollout--managed"),o=document.querySelector("#intial-rollout--self"),u=document.querySelector("#yearly-cost--managed"),c=document.querySelector("#yearly-cost--self"),a="$".concat(new Intl.NumberFormat("en-US").format(e)),i="$".concat(new Intl.NumberFormat("en-US").format(t)),l="$".concat(new Intl.NumberFormat("en-US").format(n));r.innerHTML=a,o.innerHTML=a,u.innerHTML=i,c.innerHTML=l}(S,q,k)}window.addEventListener("DOMContentLoaded",(function(){document.querySelector(".js-tco-calculator")&&l()}))}});
//# sourceMappingURL=tco-calculator.js.map