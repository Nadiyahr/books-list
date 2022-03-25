(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{165:function(e,t,a){},167:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(57),c=a.n(n),o=a(62),i=(a(165),a(21)),s=a.n(i),u=a(77),l=a(7),b=a(18),j=(a(167),a(248)),h=a(250),d="http://localhost:3004/books",O=function(){return fetch(d).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},f=a(196),p=a(128),x=a(3),m=[{field:"id",headerName:"ID",width:90},{field:"title",headerName:"Title",width:150,editable:!1},{field:"author",headerName:"Author",width:150,editable:!1},{field:"ISBN",headerName:"ISBN",type:"number",width:160,editable:!1},{field:"category",headerName:"Category",description:"This column has a value getter and is not sortable.",sortable:!1,width:180,valueGetter:function(e){return e.row.category}}],y=function(e){var t=e.books,a=e.reload,n=Object(r.useState)([]),c=Object(l.a)(n,2),o=c[0],i=c[1],s=t;return Object(x.jsxs)("div",{style:{height:400,width:"100%"},children:[Object(x.jsx)("h1",{children:"Tabble of my books"}),Object(x.jsx)(f.a,{variant:"outlined",onClick:function(){var e;console.log(o),e=+o,fetch("".concat(d,"/").concat(e),{method:"DELETE"}),a()},children:"Remove a ithem"}),Object(x.jsx)(p.a,{rows:s,columns:m,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,onSelectionModelChange:function(e){i(e)},selectionModel:o})]})},g=a(1),v=a(41),S=a(17),w=a(197),k=a(113),N=function(e){var t=e.reload,a=Object(r.useState)(0),n=Object(l.a)(a,2),c=n[0],o=n[1],i=Object(r.useState)(""),j=Object(l.a)(i,2),h=j[0],f=j[1],p=Object(r.useState)(""),m=Object(l.a)(p,2),y=m[0],N=m[1],B=Object(r.useState)(""),I=Object(l.a)(B,2),T=I[0],C=I[1],E=Object(r.useState)(0),q=Object(l.a)(E,2),D=q[0],M=q[1],A=Object(r.useState)(0),P=Object(l.a)(A,2),F=P[0],G=P[1],J=Object(r.useState)({title:"",author:"",category:"",ISBN:"",year:""}),L=Object(l.a)(J,2),W=L[0],Y=L[1],z=Object(b.f)(),R=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,a=t.map((function(e){return e.id})),r=+Math.max.apply(Math,Object(S.a)(a))+1,o(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e,t){switch(e){case"title":case"author":case"category":0===t.length?Y((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e,"This field is required"))})):Y((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e,""))}));break;case"ISBN":13!==t.length?Y((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e,"ISBN must contain 13 numbers"))})):Y((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e,""))}));break;case"year":t&&4!==t.length&&+t>+(new Date).getFullYear()?Y((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e,"Enter valid year"))})):Y((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e,""))}))}console.log(W)},H=function(e){var t=e.target,a=t.name,r=t.value;switch(a){case"title":f(r),V(a,r);break;case"author":N(r),V(a,r);break;case"category":C(r),V(a,r);break;case"ISBN":M(+r),V(a,r);break;case"year":G(+r),V(a,r)}},K=function(){var e=Object(u.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),console.log(W),Object.values(W).every((function(e){return""===e}))?(r={id:c,title:h,author:y,category:T,ISBN:D,year:F},fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})),t(),z("/")):console.log(W);case 3:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){R()}),[]),Object(x.jsxs)(w.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){return K(e)},children:[Object(x.jsx)("h1",{children:"Add a Book"}),Object(x.jsxs)("div",{children:[Object(x.jsx)(k.a,{required:!0,id:"title",label:"Title",name:"title",value:h,onChange:H,error:""!==W.title,helperText:W.title}),Object(x.jsx)(k.a,{required:!0,id:"author",label:"Author",name:"author",value:y,onChange:H,error:""!==W.author,helperText:W.author}),Object(x.jsx)(k.a,{required:!0,id:"category",label:"Category",name:"category",value:T,onChange:H,error:""!==W.category,helperText:W.category}),Object(x.jsx)(k.a,{required:!0,id:"ISBN",label:"ISBN",type:"number",name:"ISBN",onChange:H,error:""!==W.ISBN,InputLabelProps:{shrink:!0},helperText:W.ISBN}),Object(x.jsx)(k.a,{id:"year",label:"Year",name:"year",onChange:H,error:""!==W.year,helperText:W.year})]}),Object(x.jsx)("button",{type:"submit",children:"Submite"})]})},B=a(252),I=a(251),T=function(){return Object(x.jsx)(B.a,{position:"static",children:Object(x.jsx)(h.a,{maxWidth:"xl",children:Object(x.jsx)(I.a,{disableGutters:!0,children:Object(x.jsxs)(w.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[Object(x.jsx)(f.a,{component:o.b,to:"/",sx:{my:2,color:"white",display:"block"},children:"Dashboard"}),Object(x.jsx)(f.a,{component:o.b,to:"/add",sx:{my:2,color:"white",display:"block"},children:"Add Book"})]})})})})},C=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];Object(r.useEffect)((function(){console.log(a),c()}),[]);var c=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(j.a,{}),Object(x.jsxs)(h.a,{maxWidth:"md",children:[Object(x.jsx)(T,{}),Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{path:"/",element:Object(x.jsx)(y,{books:a,reload:c})}),Object(x.jsx)(b.a,{path:"add",element:Object(x.jsx)(N,{reload:c})})]})]})]})};c.a.render(Object(x.jsx)(o.a,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.478a55a4.chunk.js.map