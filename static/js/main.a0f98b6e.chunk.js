(this["webpackJsonpunderdog-challenge"]=this["webpackJsonpunderdog-challenge"]||[]).push([[0],{34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(27),a=n.n(r),s=(n(34),n(22)),u=n(5),o=n(6),i=n(55),j=n(16),b=n.n(j),p=n(23),O=function(){var e=Object(p.a)(b.a.mark((function e(t,n,c){var r,a,s,u,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,s=a.name,u=a.weight,o=a.stats,i=a.types,n({name:s,weight:u,stats:o,types:i}),c(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),c(!0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,c){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(b.a.mark((function e(t,n,c,r){var a,s,u,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?offset=".concat(t,"&limit=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,u=s.count,o=s.results,r(Math.ceil(u/n)),c(o),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,c,r){return e.apply(this,arguments)}}(),l=n(2),f=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(o.a)(a,2),u=s[0],j=s[1],b=Object(c.useState)(null),p=Object(o.a)(b,2),O=p[0],f=p[1];return Object(c.useEffect)((function(){h(25*(n-1),25,f,j)}),[n]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Pokemons"}),u>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("pre",{children:JSON.stringify(O,null,2)}),Object(l.jsx)(i.a,{count:u,showFirstButton:!0,showLastButton:!0,page:n,onChange:function(e,t){r(t)}})]}):Object(l.jsx)("div",{children:"There are no Pokemons"})]})},d=function(e){var t=e.match.params.id,n=Object(c.useState)(null),r=Object(o.a)(n,2),a=r[0],s=r[1],u=Object(c.useState)(!1),i=Object(o.a)(u,2),j=i[0],b=i[1];return Object(c.useEffect)((function(){O(t,s,b)}),[t]),Object(l.jsx)("div",{children:j?Object(l.jsx)("div",{children:"Error"}):Object(l.jsx)("pre",{children:JSON.stringify(a,null,2)})})};var x=function(){return Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{exact:!0,path:"/",render:function(e){return Object(l.jsx)(f,Object(s.a)({},e))}}),Object(l.jsx)(u.b,{exact:!0,path:"/:id",render:function(e){return Object(l.jsx)(d,Object(s.a)({},e))}}),Object(l.jsx)(u.b,{render:function(){return Object(l.jsx)(u.a,{to:"/"})}})]})},v=n(21);a.a.render(Object(l.jsx)(v.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a0f98b6e.chunk.js.map