(this["webpackJsonpunderdog-challenge"]=this["webpackJsonpunderdog-challenge"]||[]).push([[0],{75:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),s=n.n(r),o=(n(75),n(59)),i=n(14),u=n(11),l=n(123),j=n(41),p=n.n(j),b=n(51),d=function(e){return e.split("-").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")},f=function(){var e=Object(b.a)(p.a.mark((function e(t,n,a){var c,r,s,o,i,u,l,j;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,s=r.name,o=r.weight,i=r.stats,u=r.types,l=r.sprites,j=l.other["official-artwork"].front_default,i=i.map((function(e){var t=e.base_stat,n=e.stat;return{name:d(n.name),value:t}})),u=u.map((function(e){return e.type.name})),n({name:d(s),sprite:j,types:u,weight:o,stats:i}),a(!1),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a(!0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,n,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(p.a.mark((function e(t,n,a,c){var r,s,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?offset=".concat(t,"&limit=").concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,o=s.count,i=s.results,c(Math.ceil(o/n)),a(i),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,a,c){return e.apply(this,arguments)}}(),m=n(130),x=n(129),O=n(2);function g(e){var t=e.name,n=e.handleOpen;return Object(O.jsx)(x.a,{onClick:n,children:Object(O.jsx)(m.a,{sx:{p:3,backgroundColor:"black",color:"white"},children:d(t).toUpperCase()})})}var v=n(6),k=n(121),y=Object(k.a)({root:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:24}}),w=function(e){var t=e.children,n=e.className,a=y();return Object(O.jsx)("div",{className:Object(v.a)(a.root,n),children:t})},C=n(13),S=n(122),N=function(e){var t=e.name;return Object(O.jsx)("span",{style:{padding:12,borderRadius:24,backgroundColor:"orange"},children:t})},B=function(e){var t=e.types;return Object(O.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:t.map((function(e,t){return Object(O.jsx)(N,{name:e},t)}))})},I=n(128),W=Object(k.a)({content:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},img:{width:"40%"}}),E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},U=function(e){var t=e.id,n=e.open,c=e.handleClose,r=Object(a.useState)(null),s=Object(u.a)(r,2),o=s[0],i=s[1],l=Object(a.useState)(!1),j=Object(u.a)(l,2),p=j[0],b=j[1];Object(a.useEffect)((function(){f(t,i,b)}),[t]);var d=W();return Object(O.jsx)(S.a,{open:n,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:{backgroundColor:"rgba(0,0,0,0.85)"},children:Object(O.jsx)(m.a,{sx:E,children:!p&&o?Object(O.jsxs)("div",{className:d.content,children:[Object(O.jsx)(I.a,{variant:"h5",gutterBottom:!0,component:"div",children:o.name.toUpperCase()}),Object(O.jsx)("img",{src:o.sprite,className:d.img,alt:"sprite"}),Object(O.jsx)(B,{types:o.types}),[{name:"Weight",value:o.weight}].concat(Object(C.a)(o.stats)).map((function(e,t){var n=e.name,a=e.value;return Object(O.jsxs)(I.a,{variant:"h5",gutterBottom:!0,component:"div",children:[n,": ",a]},t)}))]}):Object(O.jsx)("div",{children:"Not available"})})})},D=n.p+"static/media/bg.6804a20b.jpg",F=Object(k.a)({root:{backgroundImage:"url(".concat(D,")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},list:{marginTop:100}}),J=function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),o=Object(u.a)(s,2),i=o[0],j=o[1],p=Object(a.useState)([]),b=Object(u.a)(p,2),d=b[0],f=b[1],m=Object(a.useState)(""),x=Object(u.a)(m,2),v=x[0],k=x[1],y=c.a.useState(!1),C=Object(u.a)(y,2),S=C[0],N=C[1],B=F();return Object(a.useEffect)((function(){h(25*(n-1),25,f,j)}),[n]),Object(O.jsxs)("div",{className:B.root,children:[i>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{className:B.list,children:d.map((function(e){var t=e.name;return Object(O.jsx)(g,{name:t,handleOpen:function(){return function(e){k(e),N(!0)}(t)}},t)}))}),Object(O.jsx)(l.a,{className:B.footer,sx:{p:2,m:3,bgcolor:"white"},variant:"outlined",count:i,showFirstButton:!0,showLastButton:!0,page:n,onChange:function(e,t){r(t)}})]}):Object(O.jsx)("div",{children:"There are no Pokemons"}),v&&Object(O.jsx)(U,{handleClose:function(){k(""),N(!1)},id:v,open:S})]})},R=n(126),T=n(131),_=n.p+"static/media/logo.9631a0e0.png";function z(){return Object(O.jsx)(R.a,{position:"fixed",style:{backgroundColor:"black"},sx:{p:2},children:Object(O.jsx)(T.a,{children:Object(O.jsx)("img",{src:_,style:{maxWidth:160,margin:"auto"},alt:"logo"})})})}var H=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(z,{}),Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{exact:!0,path:"/",render:function(e){return Object(O.jsx)(J,Object(o.a)({},e))}}),Object(O.jsx)(i.b,{render:function(){return Object(O.jsx)(i.a,{to:"/"})}})]})]})},L=n(49);s.a.render(Object(O.jsx)(L.a,{children:Object(O.jsx)(H,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.7961cb1c.chunk.js.map