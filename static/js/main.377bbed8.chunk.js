(this["webpackJsonpunderdog-challenge"]=this["webpackJsonpunderdog-challenge"]||[]).push([[0],{84:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(29),s=n.n(r),o=(n(84),n(67)),i=n(14),l=n(8),u=n(141),j=n(43),b=n.n(j),p=n(55),d=function(e){return e.split("-").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")},m=function(){var e=Object(p.a)(b.a.mark((function e(t,n,a){var c,r,s,o,i,l,u,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,s=r.name,o=r.weight,i=r.stats,l=r.types,u=r.sprites,j=u.other["official-artwork"].front_default,i=i.map((function(e){var t=e.base_stat,n=e.stat;return{name:d(n.name),value:t}})),l=l.map((function(e){return e.type.name})),n({name:d(s),sprite:j,types:l,weight:o,stats:i}),a(!1),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a(!0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,n,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(b.a.mark((function e(t,n,a,c){var r,s,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?offset=".concat(t,"&limit=").concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,o=s.count,i=s.results,c(Math.ceil(o/n)),a(i),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,a,c){return e.apply(this,arguments)}}(),O=n(146),f=n(144),x=n(2);function g(e){var t=e.name,n=e.handleOpen;return Object(x.jsx)(f.a,{onClick:n,children:Object(x.jsx)(O.a,{sx:{p:3,backgroundColor:"black",color:"white"},children:d(t).toUpperCase()})})}var v=n(7),k=n(139),w=Object(k.a)({root:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:24}}),y=function(e){var t=e.children,n=e.className,a=w();return Object(x.jsx)("div",{className:Object(v.a)(a.root,n),children:t})},C=n(13),S=n(5),N=n(140),I=function(e){var t=e.name;return Object(x.jsx)("span",{style:{padding:12,borderRadius:24,backgroundColor:"orange"},children:t})},W=function(e){var t=e.types;return Object(x.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12},children:t.map((function(e,t){return Object(x.jsx)(I,{name:e},t)}))})},B=n(145),E=n(9),U=n(69),z=n.n(U),D=Object(k.a)({content:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},img:{width:"40%"}}),H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:3},J=Object(E.a)(O.a)((function(e){var t,n=e.theme;return t={},Object(S.a)(t,n.breakpoints.down("sm"),{width:"100%"}),Object(S.a)(t,n.breakpoints.down("md"),{overflowY:"scroll",height:"100%",maxHeight:600}),t})),R=function(e){var t=e.id,n=e.open,c=e.handleClose,r=Object(a.useState)(null),s=Object(l.a)(r,2),o=s[0],i=s[1],u=Object(a.useState)(!1),j=Object(l.a)(u,2),b=j[0],p=j[1];Object(a.useEffect)((function(){m(t,i,p)}),[t]);var d=D();return Object(x.jsx)(N.a,{open:n,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:{backgroundColor:"rgba(0,0,0,0.85)"},children:Object(x.jsxs)(J,{sx:H,children:[Object(x.jsx)(z.a,{onClick:c,sx:{cursor:"pointer",m:2}}),!b&&o?Object(x.jsxs)("div",{className:d.content,children:[Object(x.jsx)(B.a,{variant:"h5",gutterBottom:!0,component:"div",children:o.name.toUpperCase()}),Object(x.jsx)("img",{src:o.sprite,className:d.img,alt:"sprite"}),Object(x.jsx)(W,{types:o.types}),[{name:"Weight",value:o.weight}].concat(Object(C.a)(o.stats)).map((function(e,t){var n=e.name,a=e.value;return Object(x.jsxs)(B.a,{variant:"h5",gutterBottom:!0,component:"div",children:[n,": ",a]},t)}))]}):Object(x.jsx)("div",{children:"Not available"})]})})},T=n(38),_=n(138),F=n.p+"static/media/bg.6804a20b.jpg",M=Object(k.a)({root:{backgroundImage:"url(".concat(F,")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},list:{marginTop:100}}),P=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),o=Object(l.a)(s,2),i=o[0],j=o[1],b=Object(a.useState)([]),p=Object(l.a)(b,2),d=p[0],m=p[1],O=Object(a.useState)(""),f=Object(l.a)(O,2),v=f[0],k=f[1],w=c.a.useState(!1),C=Object(l.a)(w,2),S=C[0],N=C[1],I=Object(T.a)(),W=Object(_.a)(I.breakpoints.down("sm")),B=M();return Object(a.useEffect)((function(){h(25*(n-1),25,m,j)}),[n]),Object(x.jsxs)("div",{className:B.root,children:[i>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{className:B.list,children:d.map((function(e){var t=e.name;return Object(x.jsx)(g,{name:t,handleOpen:function(){return function(e){k(e),N(!0)}(t)}},t)}))}),Object(x.jsx)(u.a,{sx:{p:1,m:3,bgcolor:"white"},variant:"outlined",count:i,page:n,onChange:function(e,t){r(t)},size:W?"small":"medium"})]}):Object(x.jsx)("div",{children:"There are no Pokemons"}),v&&Object(x.jsx)(R,{handleClose:function(){k(""),N(!1)},id:v,open:S})]})},Y=n(143),q=n(147),A=n.p+"static/media/logo.9631a0e0.png";function G(){return Object(x.jsx)(Y.a,{position:"fixed",style:{backgroundColor:"black"},sx:{p:2},children:Object(x.jsx)(q.a,{children:Object(x.jsx)("img",{src:A,style:{maxWidth:160,margin:"auto"},alt:"logo"})})})}var K=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(G,{}),Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/",render:function(e){return Object(x.jsx)(P,Object(o.a)({},e))}}),Object(x.jsx)(i.b,{render:function(){return Object(x.jsx)(i.a,{to:"/"})}})]})]})},L=n(53);s.a.render(Object(x.jsx)(L.a,{children:Object(x.jsx)(K,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.377bbed8.chunk.js.map