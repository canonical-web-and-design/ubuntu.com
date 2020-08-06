!function(t){var e={};function a(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return t[n].call(u.exports,u,u.exports,a),u.l=!0,u.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)a.d(n,u,function(e){return t[e]}.bind(null,u));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=45)}({0:function(t,e,a){"use strict";function n(t,e,a){var n;return function(){var u=this,s=arguments,T=function(){n=null,a||t.apply(u,s)},D=a&&!n;clearTimeout(n),n=setTimeout(T,e),D&&t.apply(u,s)}}a.d(e,"a",(function(){return n}))},45:function(t,e,a){"use strict";function n(t,e,a,n){var u={top:0,right:40,bottom:20,left:150},s=d3.timeYear.offset(n[0].startDate,-1),T=d3.timeYear.offset(n[n.length-1].endDate,1),D=32*e.length,r=document.querySelector(t).clientWidth;r<=0&&(r=document.querySelector(t).closest('[class*="col-"]').clientWidth);var S=r-u.right-u.left,L=d3.scaleTime().domain([s,T]).range([0,S]).clamp(!0),w=d3.scaleBand().domain(e).rangeRound([0,D-u.top-u.bottom]).padding(.1),b=d3.axisBottom(L),U=d3.axisRight(w).tickPadding(-u.left).tickSize(0);!function(t){t.sort((function(t,e){return t.endDate-e.endDate})),t.sort((function(t,e){return t.startDate-e.startDate}))}(n);var d=d3.select(t).append("svg").attr("class","chart").attr("width",S+u.left+u.right).attr("height",D+u.top+u.bottom).append("g").attr("class","gantt-chart").attr("width",S+u.left+u.right).attr("height",D+u.top+u.bottom).attr("transform","translate("+u.left+", "+u.top+")");!function(t,e,a,n,u){t.selectAll(".chart").data(e,(function(t){return t.startDate+t.taskName+t.endDate})).enter().append("rect").attr("class",(function(t){return null==a[t.status]?"bar":a[t.status]})).attr("y",0).attr("transform",(function(t){return"translate("+n(t.startDate)+","+u(t.taskName)+")"})).attr("height",(function(){return u.bandwidth()})).attr("width",(function(t){return n(t.endDate)-n(t.startDate)}))}(d,n,a,L,w),function(t,e,a,n){t.append("g").attr("class","x axis").attr("transform","translate(0, "+(e-a.top-a.bottom)+")").transition().call(n)}(d,D,u,b),function(t,e){t.append("g").attr("class","y axis").transition().call(e)}(d,U),function(t,e){t.selectAll(".x.axis .tick line").attr("y1",-e)}(d,D),function(t){t.selectAll(".domain").remove()}(d),function(t,e){var a=Object.keys(e),n=d3.select(t).append("svg").attr("class","chart-key").attr("width","400").attr("height",24*a.length);a.forEach((function(t,a){var u=n.append("g").attr("class","chart-key__row").attr("transform","translate(0, "+21*a+")").attr("height",24);u.append("rect").attr("class",e[t]).attr("width",18).attr("height",14).attr("y",0),u.append("text").text(function(t){var e=t.toLowerCase().replace(/_/g," "),a=e.charAt(0).toUpperCase()+e.substr(1);return a=(a=(a=(a=(a=(a=(a=a.replace("Lts","Ubuntu LTS release Standard Support")).replace(" openstack "," OpenStack ")).replace("kub","Kub")).replace("Interim release","Interim release Standard Support")).replace("Esm","Extended Security Maintenance (ESM)")).replace("Cve","CVE/Critical fixes only")).replace("Early","Early preview")}(t)).attr("class","chart-key__label").attr("x",24).attr("y",13)}))}(t,a),setTimeout((function(){!function(t){t.selectAll(".tick text").select((function(){this.textContent.includes("LTS")&&this.classList.add("chart__label--bold")}))}(d)}),500)}a.r(e);var u=a(0),s=[{startDate:new Date("2019-10-01T00:00:00"),endDate:new Date("2020-07-06T00:00:00"),taskName:"Ubuntu 19.10",status:"INTERIM_RELEASE"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2022-10-01T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"HARDWARE_AND_MAINTENANCE_UPDATES"},{startDate:new Date("2022-10-01T00:00:00"),endDate:new Date("2025-04-02T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"MAINTENANCE_UPDATES"},{startDate:new Date("2025-04-02T00:00:00"),endDate:new Date("2030-04-02T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"ESM"},{startDate:new Date("2020-10-01T00:00:00"),endDate:new Date("2021-07-07T00:00:00"),taskName:"Ubuntu 20.10",status:"INTERIM_RELEASE"},{startDate:new Date("2021-10-01T00:00:00"),endDate:new Date("2022-07-07T00:00:00"),taskName:"Ubuntu 21.10",status:"INTERIM_RELEASE"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2022-01-05T00:00:00"),taskName:"Ubuntu 21.04",status:"INTERIM_RELEASE"},{startDate:new Date("2022-04-01T00:00:00"),endDate:new Date("2024-09-30T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"HARDWARE_AND_MAINTENANCE_UPDATES"},{startDate:new Date("2024-09-30T00:00:00"),endDate:new Date("2027-04-01T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"MAINTENANCE_UPDATES"},{startDate:new Date("2027-04-01T00:00:00"),endDate:new Date("2032-04-09T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"ESM"}],T=[{startDate:new Date("2014-04-01T00:00:00"),endDate:new Date("2016-09-30T00:00:00"),taskName:"Ubuntu 14.04 LTS",status:"HARDWARE_AND_MAINTENANCE_UPDATES"},{startDate:new Date("2016-09-30T00:00:00"),endDate:new Date("2019-04-02T00:00:00"),taskName:"Ubuntu 14.04 LTS",status:"MAINTENANCE_UPDATES"},{startDate:new Date("2019-04-02T00:00:00"),endDate:new Date("2022-04-02T00:00:00"),taskName:"Ubuntu 14.04 LTS",status:"ESM"},{startDate:new Date("2016-04-01T00:00:00"),endDate:new Date("2018-10-01T00:00:00"),taskName:"Ubuntu 16.04 LTS",status:"HARDWARE_AND_MAINTENANCE_UPDATES"},{startDate:new Date("2018-10-01T00:00:00"),endDate:new Date("2021-04-02T00:00:00"),taskName:"Ubuntu 16.04 LTS",status:"MAINTENANCE_UPDATES"},{startDate:new Date("2021-04-02T00:00:00"),endDate:new Date("2024-04-02T00:00:00"),taskName:"Ubuntu 16.04 LTS",status:"ESM"},{startDate:new Date("2018-04-01T00:00:00"),endDate:new Date("2020-09-30T00:00:00"),taskName:"Ubuntu 18.04 LTS",status:"HARDWARE_AND_MAINTENANCE_UPDATES"},{startDate:new Date("2020-09-30T00:00:00"),endDate:new Date("2023-04-02T00:00:00"),taskName:"Ubuntu 18.04 LTS",status:"MAINTENANCE_UPDATES"},{startDate:new Date("2023-04-02T00:00:00"),endDate:new Date("2028-04-01T00:00:00"),taskName:"Ubuntu 18.04 LTS",status:"ESM"},{startDate:new Date("2019-10-01T00:00:00"),endDate:new Date("2020-07-06T00:00:00"),taskName:"Ubuntu 19.10",status:"INTERIM_RELEASE"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2022-10-01T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"HARDWARE_AND_MAINTENANCE_UPDATES"},{startDate:new Date("2022-10-01T00:00:00"),endDate:new Date("2025-04-02T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"MAINTENANCE_UPDATES"},{startDate:new Date("2025-04-02T00:00:00"),endDate:new Date("2030-04-02T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"ESM"},{startDate:new Date("2020-10-01T00:00:00"),endDate:new Date("2021-07-07T00:00:00"),taskName:"Ubuntu 20.10",status:"INTERIM_RELEASE"},{startDate:new Date("2021-10-01T00:00:00"),endDate:new Date("2022-07-07T00:00:00"),taskName:"Ubuntu 21.10",status:"INTERIM_RELEASE"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2022-01-05T00:00:00"),taskName:"Ubuntu 21.04",status:"INTERIM_RELEASE"},{startDate:new Date("2022-04-01T00:00:00"),endDate:new Date("2024-09-30T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"HARDWARE_AND_MAINTENANCE_UPDATES"},{startDate:new Date("2024-09-30T00:00:00"),endDate:new Date("2027-04-01T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"MAINTENANCE_UPDATES"},{startDate:new Date("2027-04-01T00:00:00"),endDate:new Date("2032-04-09T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"ESM"}],D=[{startDate:new Date("2014-04-01T00:00:00"),endDate:new Date("2019-04-01T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"LTS"},{startDate:new Date("2019-04-01T00:00:00"),endDate:new Date("2022-04-01T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"ESM"},{startDate:new Date("2014-08-01T00:00:00"),endDate:new Date("2019-04-01T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"LTS"},{startDate:new Date("2019-04-01T00:00:00"),endDate:new Date("2022-04-01T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"ESM"},{startDate:new Date("2016-04-01T00:00:00"),endDate:new Date("2021-04-01T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"LTS"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2024-04-01T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"ESM"},{startDate:new Date("2016-08-01T00:00:00"),endDate:new Date("2019-04-01T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"LTS"},{startDate:new Date("2019-04-01T00:00:00"),endDate:new Date("2022-04-01T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"ESM"},{startDate:new Date("2016-08-01T00:00:00"),endDate:new Date("2021-04-01T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"LTS"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2024-04-01T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"ESM"},{startDate:new Date("2018-04-01T00:00:00"),endDate:new Date("2023-04-01T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"LTS"},{startDate:new Date("2023-04-01T00:00:00"),endDate:new Date("2028-04-01T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"ESM"},{startDate:new Date("2018-08-01T00:00:00"),endDate:new Date("2021-04-01T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"LTS"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2024-04-01T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"ESM"},{startDate:new Date("2018-07-01T00:00:00"),endDate:new Date("2023-04-01T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"LTS"},{startDate:new Date("2023-04-01T00:00:00"),endDate:new Date("2028-04-01T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"ESM"},{startDate:new Date("2019-02-01T00:00:00"),endDate:new Date("2019-08-01T00:00:00"),taskName:"Ubuntu 18.04.2 LTS (v4.18)",status:"LTS"},{startDate:new Date("2019-04-01T00:00:00"),endDate:new Date("2020-01-01T00:00:00"),taskName:"Ubuntu 19.04 (v5.0)",status:"INTERIM_RELEASE"},{startDate:new Date("2019-08-01T00:00:00"),endDate:new Date("2020-02-01T00:00:00"),taskName:"Ubuntu 18.04.3 LTS (v5.0)",status:"LTS"},{startDate:new Date("2019-10-01T00:00:00"),endDate:new Date("2020-07-01T00:00:00"),taskName:"Ubuntu 19.10 (v5.3)",status:"INTERIM_RELEASE"},{startDate:new Date("2020-02-01T00:00:00"),endDate:new Date("2020-08-01T00:00:00"),taskName:"Ubuntu 18.04.4 LTS",status:"LTS"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2025-04-01T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"LTS"},{startDate:new Date("2025-04-01T00:00:00"),endDate:new Date("2030-04-01T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"ESM"},{startDate:new Date("2020-08-01T00:00:00"),endDate:new Date("2023-04-01T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"LTS"},{startDate:new Date("2023-04-01T00:00:00"),endDate:new Date("2028-04-01T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"ESM"}],r=[{startDate:new Date("2022-08-11T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.5 LTS",status:"LTS"},{startDate:new Date("2025-04-22T00:00:00"),endDate:new Date("2030-04-21T00:00:00"),taskName:"Ubuntu 20.04.5 LTS",status:"ESM"},{startDate:new Date("2022-02-12T00:00:00"),endDate:new Date("2022-08-17T00:00:00"),taskName:"Ubuntu 20.04.4 LTS",status:"LTS"},{startDate:new Date("2021-08-16T00:00:00"),endDate:new Date("2022-02-18T00:00:00"),taskName:"Ubuntu 20.04.3 LTS",status:"LTS"},{startDate:new Date("2021-02-17T00:00:00"),endDate:new Date("2021-08-22T00:00:00"),taskName:"Ubuntu 20.04.2 LTS",status:"LTS"},{startDate:new Date("2020-07-22T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.1 LTS",status:"LTS"},{startDate:new Date("2025-04-22T00:00:00"),endDate:new Date("2030-04-21T00:00:00"),taskName:"Ubuntu 20.04.1 LTS",status:"ESM"},{startDate:new Date("2020-04-23T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.0 LTS",status:"LTS"},{startDate:new Date("2025-04-22T00:00:00"),endDate:new Date("2030-04-21T00:00:00"),taskName:"Ubuntu 20.04.0 LTS",status:"ESM"}],S=[{startDate:new Date("2020-08-01T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"LTS"},{startDate:new Date("2023-04-20T00:00:00"),endDate:new Date("2028-04-18T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"ESM"},{startDate:new Date("2020-02-06T00:00:00"),endDate:new Date("2020-08-10T00:00:00"),taskName:"Ubuntu 18.04.4 LTS (v5.3)",status:"LTS"},{startDate:new Date("2019-08-08T00:00:00"),endDate:new Date("2020-02-10T00:00:00"),taskName:"Ubuntu 18.04.3 LTS  (v5.0)",status:"LTS"},{startDate:new Date("2019-02-14T00:00:00"),endDate:new Date("2019-08-19T00:00:00"),taskName:"Ubuntu 18.04.2 LTS (v4.18)",status:"LTS"},{startDate:new Date("2018-07-26T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"LTS"},{startDate:new Date("2023-04-20T00:00:00"),endDate:new Date("2028-04-18T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"ESM"},{startDate:new Date("2018-04-26T00:00:00"),endDate:new Date("2023-04-25T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"LTS"},{startDate:new Date("2023-04-25T00:00:00"),endDate:new Date("2028-04-23T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"ESM"}],L=[{startDate:new Date("2018-08-21T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"LTS"},{startDate:new Date("2021-04-20T00:00:00"),endDate:new Date("2024-04-19T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"ESM"},{startDate:new Date("2018-02-01T00:00:00"),endDate:new Date("2018-07-31T00:00:00"),taskName:"Ubuntu 16.04.4 LTS (v4.13)",status:"LTS"},{startDate:new Date("2017-08-01T00:00:00"),endDate:new Date("2018-01-31T00:00:00"),taskName:"Ubuntu 16.04.3 LTS (v4.10)",status:"LTS"},{startDate:new Date("2017-02-01T00:00:00"),endDate:new Date("2017-07-31T00:00:00"),taskName:"Ubuntu 16.04.2 LTS (v4.8)",status:"LTS"},{startDate:new Date("2016-08-21T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"LTS"},{startDate:new Date("2021-04-20T00:00:00"),endDate:new Date("2024-04-19T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"ESM"},{startDate:new Date("2016-04-21T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"LTS"},{startDate:new Date("2021-04-20T00:00:00"),endDate:new Date("2024-04-19T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"ESM"}],w=[{startDate:new Date("2016-08-21T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"LTS"},{startDate:new Date("2019-04-20T00:00:00"),endDate:new Date("2022-04-19T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"ESM"},{startDate:new Date("2016-02-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.4 LTS (v4.2)",status:"LTS"},{startDate:new Date("2015-08-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.3 LTS (v3.19)",status:"LTS"},{startDate:new Date("2015-02-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.2 LTS (v3.16)",status:"LTS"},{startDate:new Date("2014-08-21T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"LTS"},{startDate:new Date("2019-04-20T00:00:00"),endDate:new Date("2022-04-19T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"ESM"},{startDate:new Date("2014-04-21T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"LTS"},{startDate:new Date("2019-04-20T00:00:00"),endDate:new Date("2022-04-19T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"ESM"}],b=[{startDate:new Date("2014-01-01T00:00:00"),endDate:new Date("2014-04-21T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"EARLY"},{startDate:new Date("2014-04-21T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"LTS"},{startDate:new Date("2014-05-01T00:00:00"),endDate:new Date("2014-08-21T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"EARLY"},{startDate:new Date("2014-08-21T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"LTS"},{startDate:new Date("2015-02-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.2 LTS (v3.16)",status:"LTS"},{startDate:new Date("2015-08-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.3 LTS (v3.19)",status:"LTS"},{startDate:new Date("2016-02-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.4 LTS (v4.2)",status:"LTS"},{startDate:new Date("2016-01-01T00:00:00"),endDate:new Date("2016-04-21T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"EARLY"},{startDate:new Date("2016-04-21T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"LTS"},{startDate:new Date("2016-05-01T00:00:00"),endDate:new Date("2016-08-21T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"EARLY"},{startDate:new Date("2016-08-21T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"LTS"},{startDate:new Date("2016-05-01T00:00:00"),endDate:new Date("2016-08-21T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"EARLY"},{startDate:new Date("2016-08-21T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"LTS"},{startDate:new Date("2017-02-01T00:00:00"),endDate:new Date("2017-07-31T00:00:00"),taskName:"Ubuntu 16.04.2 LTS (v4.8)",status:"LTS"},{startDate:new Date("2017-08-01T00:00:00"),endDate:new Date("2018-01-31T00:00:00"),taskName:"Ubuntu 16.04.3 LTS (v4.10)",status:"LTS"},{startDate:new Date("2018-02-01T00:00:00"),endDate:new Date("2018-07-31T00:00:00"),taskName:"Ubuntu 16.04.4 LTS (v4.13)",status:"LTS"},{startDate:new Date("2018-01-03T00:00:00"),endDate:new Date("2018-04-21T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"EARLY"},{startDate:new Date("2018-04-21T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"LTS"},{startDate:new Date("2018-04-04T00:00:00"),endDate:new Date("2018-07-01T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"EARLY"},{startDate:new Date("2018-07-01T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"LTS"},{startDate:new Date("2018-05-04T00:00:00"),endDate:new Date("2018-08-21T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"EARLY"},{startDate:new Date("2018-08-21T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"LTS"},{startDate:new Date("2019-02-01T00:00:00"),endDate:new Date("2019-08-06T00:00:00"),taskName:"Ubuntu 18.04.2 LTS (v4.18)",status:"LTS"},{startDate:new Date("2019-04-16T00:00:00"),endDate:new Date("2020-01-20T00:00:00"),taskName:"Ubuntu 19.04 (v5.0)",status:"INTERIM_RELEASE"},{startDate:new Date("2019-08-01T00:00:00"),endDate:new Date("2020-02-03T00:00:00"),taskName:"Ubuntu 18.04.3 LTS (v5.0)",status:"LTS"},{startDate:new Date("2019-10-15T00:00:00"),endDate:new Date("2020-07-20T00:00:00"),taskName:"Ubuntu 19.10 (v5.3)",status:"INTERIM_RELEASE"},{startDate:new Date("2020-02-01T00:00:00"),endDate:new Date("2020-07-31T00:00:00"),taskName:"Ubuntu 18.04.4 LTS (v5.3)",status:"LTS"},{startDate:new Date("2020-01-24T00:00:00"),endDate:new Date("2020-04-23T00:00:00"),taskName:"Ubuntu 20.04.0 LTS",status:"EARLY"},{startDate:new Date("2020-04-23T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.0 LTS",status:"LTS"},{startDate:new Date("2020-04-23T00:00:00"),endDate:new Date("2020-07-22T00:00:00"),taskName:"Ubuntu 20.04.1 LTS",status:"EARLY"},{startDate:new Date("2020-07-22T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.1 LTS",status:"LTS"},{startDate:new Date("2020-05-01T00:00:00"),endDate:new Date("2020-08-01T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"EARLY"},{startDate:new Date("2020-08-01T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"LTS"},{startDate:new Date("2021-02-17T00:00:00"),endDate:new Date("2021-08-22T00:00:00"),taskName:"Ubuntu 20.04.2 LTS",status:"LTS"},{startDate:new Date("2021-08-16T00:00:00"),endDate:new Date("2022-02-18T00:00:00"),taskName:"Ubuntu 20.04.3 LTS",status:"LTS"},{startDate:new Date("2022-02-12T00:00:00"),endDate:new Date("2022-08-17T00:00:00"),taskName:"Ubuntu 20.04.4 LTS",status:"LTS"},{startDate:new Date("2022-05-13T00:00:00"),endDate:new Date("2022-08-11T00:00:00"),taskName:"Ubuntu 20.04.5 LTS",status:"EARLY"},{startDate:new Date("2022-08-11T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.5 LTS",status:"LTS"}],U=[{startDate:new Date("2014-04-21T00:00:00"),endDate:new Date("2016-04-01T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"LTS"},{startDate:new Date("2016-04-01T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.0 LTS (v3.13)",status:"CVE"},{startDate:new Date("2014-08-21T00:00:00"),endDate:new Date("2016-04-01T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"LTS"},{startDate:new Date("2016-04-01T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.1 LTS (v3.13)",status:"CVE"},{startDate:new Date("2015-02-01T00:00:00"),endDate:new Date("2015-05-01T00:00:00"),taskName:"Ubuntu 14.04.2 LTS (v3.16)",status:"LTS"},{startDate:new Date("2015-05-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.2 LTS (v3.16)",status:"CVE"},{startDate:new Date("2015-08-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.3 LTS (v3.19)",status:"LTS"},{startDate:new Date("2016-02-01T00:00:00"),endDate:new Date("2016-07-31T00:00:00"),taskName:"Ubuntu 14.04.4 LTS (v4.2)",status:"LTS"},{startDate:new Date("2016-04-21T00:00:00"),endDate:new Date("2018-04-01T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"LTS"},{startDate:new Date("2018-04-01T00:00:00"),endDate:new Date("2023-03-31T00:00:00"),taskName:"Ubuntu 16.04.0 LTS (v4.4)",status:"CVE"},{startDate:new Date("2016-08-21T00:00:00"),endDate:new Date("2018-04-01T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"LTS"},{startDate:new Date("2018-04-01T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04.5 LTS (v3.13)",status:"CVE"},{startDate:new Date("2016-08-21T00:00:00"),endDate:new Date("2018-04-01T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"LTS"},{startDate:new Date("2018-04-01T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.1 LTS (v4.4)",status:"CVE"},{startDate:new Date("2017-02-01T00:00:00"),endDate:new Date("2017-07-31T00:00:00"),taskName:"Ubuntu 16.04.2 LTS (v4.8)",status:"LTS"},{startDate:new Date("2017-08-01T00:00:00"),endDate:new Date("2018-01-31T00:00:00"),taskName:"Ubuntu 16.04.3 LTS (v4.10)",status:"LTS"},{startDate:new Date("2018-02-01T00:00:00"),endDate:new Date("2018-07-31T00:00:00"),taskName:"Ubuntu 16.04.4 LTS (v4.13)",status:"LTS"},{startDate:new Date("2018-04-26T00:00:00"),endDate:new Date("2020-04-01T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"LTS"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2025-03-31T00:00:00"),taskName:"Ubuntu 18.04.0 LTS (v4.15)",status:"CVE"},{startDate:new Date("2018-07-26T00:00:00"),endDate:new Date("2020-04-01T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"LTS"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04.1 LTS (v4.15)",status:"CVE"},{startDate:new Date("2018-08-21T00:00:00"),endDate:new Date("2020-04-01T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"LTS"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04.5 LTS (v4.15)",status:"CVE"},{startDate:new Date("2019-02-14T00:00:00"),endDate:new Date("2019-07-31T00:00:00"),taskName:"Ubuntu 18.04.2 LTS (v4.18)",status:"LTS"},{startDate:new Date("2019-08-08T00:00:00"),endDate:new Date("2020-01-31T00:00:00"),taskName:"Ubuntu 18.04.3 LTS (v5.0)",status:"LTS"},{startDate:new Date("2020-02-06T00:00:00"),endDate:new Date("2020-07-31T00:00:00"),taskName:"Ubuntu 18.04.4 LTS (v5.3)",status:"LTS"},{startDate:new Date("2020-04-23T00:00:00"),endDate:new Date("2022-04-23T00:00:00"),taskName:"Ubuntu 20.04.0 LTS",status:"LTS"},{startDate:new Date("2022-04-23T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.0 LTS",status:"CVE"},{startDate:new Date("2020-07-22T00:00:00"),endDate:new Date("2022-04-13T00:00:00"),taskName:"Ubuntu 20.04.1 LTS",status:"LTS"},{startDate:new Date("2022-04-13T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.1 LTS",status:"CVE"},{startDate:new Date("2020-08-01T00:00:00"),endDate:new Date("2022-04-23T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"LTS"},{startDate:new Date("2022-04-23T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04.5 LTS",status:"CVE"},{startDate:new Date("2021-02-17T00:00:00"),endDate:new Date("2021-08-22T00:00:00"),taskName:"Ubuntu 20.04.2 LTS",status:"LTS"},{startDate:new Date("2021-08-16T00:00:00"),endDate:new Date("2022-02-18T00:00:00"),taskName:"Ubuntu 20.04.3 LTS",status:"LTS"},{startDate:new Date("2022-02-12T00:00:00"),endDate:new Date("2022-07-17T00:00:00"),taskName:"Ubuntu 20.04.4 LTS",status:"LTS"},{startDate:new Date("2022-08-11T00:00:00"),endDate:new Date("2024-08-10T00:00:00"),taskName:"Ubuntu 20.04.5 LTS",status:"LTS"},{startDate:new Date("2024-08-10T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04.5 LTS",status:"CVE"}],d=[{startDate:new Date("2014-04-21T00:00:00"),endDate:new Date("2019-04-20T00:00:00"),taskName:"Ubuntu 14.04 LTS (v3.13)",status:"LTS"},{startDate:new Date("2016-04-21T00:00:00"),endDate:new Date("2021-04-20T00:00:00"),taskName:"Ubuntu 16.04 LTS (v4.4)",status:"LTS"},{startDate:new Date("2018-04-21T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04 LTS (v4.15)",status:"LTS"},{startDate:new Date("2019-04-16T00:00:00"),endDate:new Date("2020-01-20T00:00:00"),taskName:"Ubuntu 19.04 (v5.0)",status:"INTERIM_RELEASE"},{startDate:new Date("2019-10-15T00:00:00"),endDate:new Date("2020-07-20T00:00:00"),taskName:"Ubuntu 19.10 (v5.3)",status:"INTERIM_RELEASE"},{startDate:new Date("2020-04-23T00:00:00"),endDate:new Date("2025-04-22T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"LTS"}],N=[{startDate:new Date("2022-04-01T00:00:00"),endDate:new Date("2027-04-01T00:00:00"),taskName:"OpenStack Y LTS",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2027-04-01T00:00:00"),endDate:new Date("2032-04-01T00:00:00"),taskName:"OpenStack Y LTS",status:"ESM"},{startDate:new Date("2022-04-01T00:00:00"),endDate:new Date("2027-04-01T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"LTS"},{startDate:new Date("2027-04-01T00:00:00"),endDate:new Date("2032-04-01T00:00:00"),taskName:"Ubuntu 22.04 LTS",status:"ESM"},{startDate:new Date("2022-04-01T00:00:00"),endDate:new Date("2025-04-01T00:00:00"),taskName:"OpenStack Y",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2021-10-01T00:00:00"),endDate:new Date("2023-04-01T00:00:00"),taskName:"OpenStack X",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2022-10-01T00:00:00"),taskName:"OpenStack W",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2022-10-01T00:00:00"),endDate:new Date("2024-04-01T00:00:00"),taskName:"OpenStack W",status:"EXTENDED_SUPPORT_FOR_CUSTOMERS"},{startDate:new Date("2020-10-01T00:00:00"),endDate:new Date("2022-04-01T00:00:00"),taskName:"OpenStack Victoria",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2020-05-15T00:00:00"),taskName:"OpenStack Ussuri LTS",status:"TECH_PREVIEW"},{startDate:new Date("2020-05-15T00:00:00"),endDate:new Date("2025-04-01T00:00:00"),taskName:"OpenStack Ussuri LTS",status:"LTS"},{startDate:new Date("2025-04-01T00:00:00"),endDate:new Date("2030-04-01T00:00:00"),taskName:"OpenStack Ussuri LTS",status:"ESM"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2025-04-01T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"LTS"},{startDate:new Date("2025-04-01T00:00:00"),endDate:new Date("2030-04-01T00:00:00"),taskName:"Ubuntu 20.04 LTS",status:"ESM"},{startDate:new Date("2020-04-01T00:00:00"),endDate:new Date("2020-05-15T00:00:00"),taskName:"OpenStack Ussuri",status:"TECH_PREVIEW"},{startDate:new Date("2020-05-15T00:00:00"),endDate:new Date("2023-04-01T00:00:00"),taskName:"OpenStack Ussuri",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2019-08-01T00:00:00"),endDate:new Date("2021-02-01T00:00:00"),taskName:"OpenStack Train",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2019-04-01T00:00:00"),endDate:new Date("2020-10-01T00:00:00"),taskName:"OpenStack Stein",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2020-10-01T00:00:00"),endDate:new Date("2022-04-01T00:00:00"),taskName:"OpenStack Stein",status:"EXTENDED_SUPPORT_FOR_CUSTOMERS"},{startDate:new Date("2018-08-30T00:00:00"),endDate:new Date("2020-02-21T00:00:00"),taskName:"OpenStack Rocky",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2018-04-20T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"OpenStack Queens LTS",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2023-04-20T00:00:00"),endDate:new Date("2028-04-01T00:00:00"),taskName:"OpenStack Queens LTS",status:"ESM"},{startDate:new Date("2018-04-20T00:00:00"),endDate:new Date("2023-04-20T00:00:00"),taskName:"Ubuntu 18.04 LTS",status:"LTS"},{startDate:new Date("2023-04-20T00:00:00"),endDate:new Date("2028-04-01T00:00:00"),taskName:"Ubuntu 18.04 LTS",status:"ESM"},{startDate:new Date("2018-02-01T00:00:00"),endDate:new Date("2021-04-01T00:00:00"),taskName:"OpenStack Queens",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2016-04-01T00:00:00"),endDate:new Date("2021-04-01T00:00:00"),taskName:"OpenStack Mitaka LTS",status:"MATCHING_OPENSTACK_RELEASE_SUPPORT"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2024-04-01T00:00:00"),taskName:"OpenStack Mitaka LTS",status:"ESM"},{startDate:new Date("2016-04-01T00:00:00"),endDate:new Date("2021-04-01T00:00:00"),taskName:"Ubuntu 16.04 LTS",status:"LTS"},{startDate:new Date("2021-04-01T00:00:00"),endDate:new Date("2024-04-01T00:00:00"),taskName:"Ubuntu 16.04 LTS",status:"ESM"}],E=[{startDate:new Date("2019-03-01T00:00:00"),endDate:new Date("2019-12-01T00:00:00"),taskName:"Kubernetes 1.14",status:"CHARMED_KUBERNETES_EXPIRED_SUPPORT"},{startDate:new Date("2019-06-14T00:00:00"),endDate:new Date("2020-03-02T00:00:00"),taskName:"Kubernetes 1.15",status:"CHARMED_KUBERNETES_SUPPORT"},{startDate:new Date("2019-10-22T00:00:00"),endDate:new Date("2020-07-22T00:00:00"),taskName:"Kubernetes 1.16",status:"CHARMED_KUBERNETES_SUPPORT"},{startDate:new Date("2020-01-07T00:00:00"),endDate:new Date("2020-10-07T00:00:00"),taskName:"Kubernetes 1.17",status:"CHARMED_KUBERNETES_SUPPORT"},{startDate:new Date("2020-03-24T00:00:00"),endDate:new Date("2020-12-23T00:00:00"),taskName:"Kubernetes 1.18",status:"CHARMED_KUBERNETES_SUPPORT"},{startDate:new Date("2020-06-16T00:00:00"),endDate:new Date("2021-04-16T00:00:00"),taskName:"Kubernetes 1.19",status:"CHARMED_KUBERNETES_SUPPORT"}],k={HARDWARE_AND_MAINTENANCE_UPDATES:"chart__bar--orange",MAINTENANCE_UPDATES:"chart__bar--orange-light",INTERIM_RELEASE:"chart__bar--grey",ESM:"chart__bar--aubergine"},m={LTS:"chart__bar--orange",INTERIM_RELEASE:"chart__bar--grey",ESM:"chart__bar--aubergine"},c={LTS:"chart__bar--orange",INTERIM_RELEASE:"chart__bar--grey"},o={LTS:"chart__bar--orange",CVE:"chart__bar--grey"},l={LTS:"chart__bar--orange",INTERIM_RELEASE:"chart__bar--grey",EARLY:"chart__bar--aubergine"},v={TECH_PREVIEW:"chart__bar--orange-light",LTS:"chart__bar--orange",MATCHING_OPENSTACK_RELEASE_SUPPORT:"chart__bar--grey",ESM:"chart__bar--aubergine",EXTENDED_SUPPORT_FOR_CUSTOMERS:"chart__bar--green"},_={CHARMED_KUBERNETES_SUPPORT:"chart__bar--orange",CHARMED_KUBERNETES_EXPIRED_SUPPORT:"chart__bar--grey"},i=["Ubuntu 22.04 LTS","Ubuntu 21.10","Ubuntu 21.04","Ubuntu 20.10","Ubuntu 20.04 LTS","Ubuntu 19.10"],A=["Ubuntu 22.04 LTS","Ubuntu 21.10","Ubuntu 21.04","Ubuntu 20.10","Ubuntu 20.04 LTS","Ubuntu 19.10","Ubuntu 18.04 LTS","Ubuntu 16.04 LTS","Ubuntu 14.04 LTS"],R=["Ubuntu 18.04.5 LTS","Ubuntu 20.04 LTS","Ubuntu 18.04.4 LTS","Ubuntu 19.10 (v5.3)","Ubuntu 18.04.3 LTS (v5.0)","Ubuntu 19.04 (v5.0)","Ubuntu 18.04.2 LTS (v4.18)","Ubuntu 18.04.1 LTS (v4.15)","Ubuntu 16.04.5 LTS (v4.15)","Ubuntu 18.04.0 LTS (v4.15)","Ubuntu 16.04.1 LTS (v4.4)","Ubuntu 14.04.5 LTS (v3.13)","Ubuntu 16.04.0 LTS (v4.4)","Ubuntu 14.04.1 LTS (v3.13)","Ubuntu 14.04.0 LTS (v3.13)"],M=["Ubuntu 20.04.0 LTS","Ubuntu 20.04.1 LTS","Ubuntu 20.04.2 LTS","Ubuntu 20.04.3 LTS","Ubuntu 20.04.4 LTS","Ubuntu 20.04.5 LTS"],p=["Ubuntu 18.04.0 LTS (v4.15)","Ubuntu 18.04.1 LTS (v4.15)","Ubuntu 18.04.2 LTS (v4.18)","Ubuntu 18.04.3 LTS  (v5.0)","Ubuntu 18.04.4 LTS (v5.3)","Ubuntu 18.04.5 LTS"],P=["Ubuntu 16.04.0 LTS (v4.4)","Ubuntu 16.04.1 LTS (v4.4)","Ubuntu 16.04.2 LTS (v4.8)","Ubuntu 16.04.3 LTS (v4.10)","Ubuntu 16.04.4 LTS (v4.13)","Ubuntu 16.04.5 LTS (v4.15)"],O=["Ubuntu 14.04.0 LTS (v3.13)","Ubuntu 14.04.1 LTS (v3.13)","Ubuntu 14.04.2 LTS (v3.16)","Ubuntu 14.04.3 LTS (v3.19)","Ubuntu 14.04.4 LTS (v4.2)","Ubuntu 14.04.5 LTS (v3.13)"],C=["Ubuntu 14.04.0 LTS (v3.13)","Ubuntu 14.04.1 LTS (v3.13)","Ubuntu 14.04.2 LTS (v3.16)","Ubuntu 14.04.3 LTS (v3.19)","Ubuntu 14.04.4 LTS (v4.2)","Ubuntu 16.04.0 LTS (v4.4)","Ubuntu 14.04.5 LTS (v3.13)","Ubuntu 16.04.1 LTS (v4.4)","Ubuntu 16.04.2 LTS (v4.8)","Ubuntu 16.04.3 LTS (v4.10)","Ubuntu 16.04.4 LTS (v4.13)","Ubuntu 18.04.0 LTS (v4.15)","Ubuntu 18.04.1 LTS (v4.15)","Ubuntu 16.04.5 LTS (v4.15)","Ubuntu 18.04.2 LTS (v4.18)","Ubuntu 19.04 (v5.0)","Ubuntu 18.04.3 LTS (v5.0)","Ubuntu 19.10 (v5.3)","Ubuntu 18.04.4 LTS (v5.3)","Ubuntu 20.04.0 LTS","Ubuntu 20.04.1 LTS","Ubuntu 18.04.5 LTS","Ubuntu 20.04.2 LTS","Ubuntu 20.04.3 LTS","Ubuntu 20.04.4 LTS","Ubuntu 20.04.5 LTS"],y=["Ubuntu 14.04.0 LTS (v3.13)","Ubuntu 14.04.1 LTS (v3.13)","Ubuntu 14.04.2 LTS (v3.16)","Ubuntu 14.04.3 LTS (v3.19)","Ubuntu 14.04.4 LTS (v4.2)","Ubuntu 16.04.0 LTS (v4.4)","Ubuntu 14.04.5 LTS (v3.13)","Ubuntu 16.04.1 LTS (v4.4)","Ubuntu 16.04.2 LTS (v4.8)","Ubuntu 16.04.3 LTS (v4.10)","Ubuntu 16.04.4 LTS (v4.13)","Ubuntu 18.04.0 LTS (v4.15)","Ubuntu 18.04.1 LTS (v4.15)","Ubuntu 16.04.5 LTS (v4.15)","Ubuntu 18.04.2 LTS (v4.18)","Ubuntu 18.04.3 LTS (v5.0)","Ubuntu 18.04.4 LTS (v5.3)","Ubuntu 20.04.0 LTS","Ubuntu 20.04.1 LTS","Ubuntu 18.04.5 LTS","Ubuntu 20.04.2 LTS","Ubuntu 20.04.3 LTS","Ubuntu 20.04.4 LTS","Ubuntu 20.04.5 LTS"],I=["OpenStack Y LTS","Ubuntu 22.04 LTS","OpenStack Y","OpenStack X","OpenStack W","OpenStack Victoria","OpenStack Ussuri LTS","Ubuntu 20.04 LTS","OpenStack Ussuri","OpenStack Train","OpenStack Stein","OpenStack Rocky","OpenStack Queens LTS","Ubuntu 18.04 LTS","OpenStack Queens","OpenStack Mitaka LTS","Ubuntu 16.04 LTS"],f=["Kubernetes 1.19","Kubernetes 1.18","Kubernetes 1.17","Kubernetes 1.16","Kubernetes 1.15","Kubernetes 1.14"],h=["Ubuntu 14.04 LTS (v3.13)","Ubuntu 16.04 LTS (v4.4)","Ubuntu 18.04 LTS (v4.15)","Ubuntu 19.04 (v5.0)","Ubuntu 19.10 (v5.3)","Ubuntu 20.04 LTS"];function g(){document.querySelector("#small-eol")&&n("#small-eol",i,k,s),document.querySelector("#server-desktop-eol")&&n("#server-desktop-eol",A,k,T),document.querySelector("#kernel-eol")&&n("#kernel-eol",R,m,D),document.querySelector("#kernel2004")&&n("#kernel2004",M,m,r),document.querySelector("#kernel1804")&&n("#kernel1804",p,m,S),document.querySelector("#kernel1604")&&n("#kernel1604",P,m,L),document.querySelector("#kernel1404")&&n("#kernel1404",O,m,w),document.querySelector("#kernellts")&&n("#kernellts",y,o,U),document.querySelector("#kernelall")&&n("#kernelall",C,l,b),document.querySelector("#openstack-eol")&&n("#openstack-eol",I,v,N),document.querySelector("#kubernetes-eol")&&n("#kubernetes-eol",f,_,E),document.querySelector("#kernel-schedule")&&n("#kernel-schedule",h,c,d)}function H(){document.querySelector("#small-eol")&&(document.querySelector("#small-eol").innerHTML=""),document.querySelector("#server-desktop-eol")&&(document.querySelector("#server-desktop-eol").innerHTML=""),document.querySelector("#kernel-eol")&&(document.querySelector("#kernel-eol").innerHTML=""),document.querySelector("#kernel2004")&&(document.querySelector("#kernel2004").innerHTML=""),document.querySelector("#kernel1804")&&(document.querySelector("#kernel1804").innerHTML=""),document.querySelector("#kernel1604")&&(document.querySelector("#kernel1604").innerHTML=""),document.querySelector("#kernel1404")&&(document.querySelector("#kernel1404").innerHTML=""),document.querySelector("#kernellts")&&(document.querySelector("#kernellts").innerHTML=""),document.querySelector("#kernelall")&&(document.querySelector("#kernelall").innerHTML=""),document.querySelector("#openstack-eol")&&(document.querySelector("#openstack-eol").innerHTML=""),document.querySelector("#kubernetes-eol")&&(document.querySelector("#kubernetes-eol").innerHTML=""),document.querySelector("#kernel-schedule")&&(document.querySelector("#kernel-schedule").innerHTML="")}window.innerWidth>=875&&(g(),setTimeout((function(){H(),g()}),0)),window.addEventListener("resize",Object(u.a)((function(){window.innerWidth>=875&&(H(),g())}),250))}});
//# sourceMappingURL=release-chart.js.map