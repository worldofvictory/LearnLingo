"use strict";(self.webpackChunklearnlingo=self.webpackChunklearnlingo||[]).push([[297],{2297:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,i,a,l,o,u,s=r(5861),c=r(9439),h=r(4687),f=r.n(h),g=r(347),d=r(1292),p=r(5032),x=r(2685),v=r(8871),Z=r(2791),m=r(168),b=r(2683),j=b.ZP.button(t||(t=(0,m.Z)(["\n  cursor: pointer;\n  border-radius: 12px;\n  background: #f4c550;\n  text-align: center;\n  display: block;\n  margin: 64px auto 0;\n  padding: 16px;\n  width: 183px;\n  border: none;\n  color: #121417;\n  font-family: 'Roboto', sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.55;\n"]))),k=r(3433),y=r(1413),C=r(9434),w=r(6934),O=r(3985),M=r(3299),P=r(9891),I=r(9934),z=r(1319),F=b.ZP.div(i||(i=(0,m.Z)(["\n  padding-bottom: 32px;\n  position: relative;\n  //margin-left: 60px;\n"]))),S=b.ZP.p(a||(a=(0,m.Z)(["\n  color: #8a8a89;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.28;\n  margin-bottom: 8px;\n"]))),_=b.ZP.em(l||(l=(0,m.Z)(["\n  font-style: normal;\n"]))),E=b.ZP.button(o||(o=(0,m.Z)(["\n  cursor: pointer;\n  border: none;\n  color: #000;\n  background-color: transparent;\n  transition: color var(--transition);\n\n  position: absolute;\n  bottom: 20px;\n  transform: translate(0, -15px);\n\n  &:hover,\n  :focus {\n    color: var(--active-color);\n  }\n\n  & svg {\n    width: 26px;\n    height: 26px;\n  }\n"]))),R=b.ZP.p(u||(u=(0,m.Z)(["\n  margin-bottom: 32px;\n  color: #ca0000ba;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),T=r(7689),U=r(184),K=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],W=["15","20","25","30","35"],A=["French","German","Mandarin Chinese","English","Spanish","Italian","Korean","Vietnamese"],B=(0,w.ZP)(O.Z)((function(){return{fontFamily:'"Roboto", sans-serif',borderRadius:"14px",backgroundColor:"#fff","& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}}})),H=function(){var n=(0,C.I0)(),e=(0,C.v9)((function(n){return n.filter.filterTeachers})),r=(0,T.TH)().pathname,t=(0,x.iH)(p.F,"teachers"),i=(0,Z.useState)({language:"",levels:"",price:""}),a=(0,c.Z)(i,2),l=a[0],o=a[1],u=(0,Z.useState)({language:[],levels:[]}),s=(0,c.Z)(u,2),h=s[0],f=s[1],d=(0,Z.useState)(!1),v=(0,c.Z)(d,2),m=v[0],b=v[1],j=(0,Z.useCallback)((function(e){var r=e.target.value;o((function(n){return(0,y.Z)((0,y.Z)({},n),{},{language:r})})),b(!0);var i=(0,x.IO)(t,(0,x.g2)("languages"));l.language!==r&&o((function(n){return(0,y.Z)((0,y.Z)({},n),{},{price:"",levels:""})})),(0,x.jM)(i,(function(e){var t=e.val(),i=Object.keys(t).filter((function(n){return t[n].languages.includes(r)})).map((function(n){return(0,y.Z)({},t[n])}));return f((function(n){return(0,y.Z)((0,y.Z)({},n),{},{language:i})})),n((0,z.UT)(r)),n((0,z.KJ)(i))}))}),[t,n,l.language]),w=(0,Z.useCallback)((function(e){var r=e.target.value;o((function(n){return(0,y.Z)((0,y.Z)({},n),{},{levels:r})})),b(!0),""!==l.price&&o((function(n){return(0,y.Z)((0,y.Z)({},n),{},{price:""})}));var t=h.language.filter((function(n){return n.levels.includes(r)}));return f((function(n){return(0,y.Z)((0,y.Z)({},n),{},{levels:t})})),n((0,z.KJ)(t))}),[l.price,h,n]),O=(0,Z.useCallback)((function(e){var r=e.target.value;o((function(n){return(0,y.Z)((0,y.Z)({},n),{},{price:r})})),b(!0);var t=(0!==h.levels.length?h.levels:h.language).filter((function(n){return n.price_per_hour>=Number(r)})),i=(0,k.Z)(t).sort((function(n,e){return n.price_per_hour-e.price_per_hour}));return n((0,z.KJ)(i))}),[h,n]);(0,Z.useEffect)((function(){"/teacher"!==r&&n((0,z.kh)())}),[n,r]);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(F,{children:[(0,U.jsxs)(M.Z,{sx:{marginRight:"20px",minWidth:221},size:"small",children:[(0,U.jsx)(S,{children:"Languages"}),(0,U.jsx)(B,{value:l.language,onChange:j,children:A.map((function(n,e){return(0,U.jsx)(P.Z,{value:n,children:(0,U.jsx)(_,{children:n})},e)}))})]}),(0,U.jsxs)(M.Z,{sx:{marginRight:"20px",minWidth:198},size:"small",children:[(0,U.jsx)(S,{children:"Level of knowledge"}),(0,U.jsx)(B,{value:l.levels,onChange:w,disabled:""===l.language,children:K.map((function(n,e){return(0,U.jsx)(P.Z,{value:n,children:(0,U.jsx)(_,{children:n})},e)}))})]}),(0,U.jsxs)(M.Z,{sx:{minWidth:124},size:"small",children:[(0,U.jsx)(S,{children:"Price"}),(0,U.jsx)(B,{value:l.price,onChange:O,disabled:""===l.language,children:W.map((function(n,e){return(0,U.jsx)(P.Z,{value:n,children:(0,U.jsx)(_,{children:n})},e)}))})]}),""!==Object.values(l).join("")&&(0,U.jsx)(E,{type:"button",onClick:function(){return o({language:"",levels:"",price:""}),b(!1),n((0,z.kh)())},children:(0,U.jsx)(I.bqj,{})})]}),0===e.length&&m&&(0,U.jsx)(R,{children:"Oops... Unfortunately, we didn't find anything matching your request. \u0421hoose from our list \ud83d\ude0a"}),(0,U.jsx)(g.M,{item:e})]})},J="teachers",q=function(){var n=(0,Z.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],i=(0,C.v9)((function(n){return n.filter.filterTeachers})),a=(0,Z.useState)(4),l=(0,c.Z)(a,2),o=l[0],u=l[1],h=(0,x.iH)(p.F);(0,Z.useEffect)((function(){function n(){return(n=(0,s.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.U2)((0,x.iU)(h,J));case 3:(e=n.sent).exists()?t(e.val()):console.log("No data available for teachers"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching teachers:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[h]);var m=r.slice(0,o);return(0,U.jsx)(d.$0,{children:(0,U.jsxs)(v.W,{children:[(0,U.jsx)(H,{}),0===i.length&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(g.M,{item:m,allTeacher:r}),o<=r.length&&(0,U.jsx)(j,{type:"button",onClick:function(){o>=r.length||u((function(n){return n+4}))},children:"More"})]})]})})}}}]);
//# sourceMappingURL=297.46807791.chunk.js.map