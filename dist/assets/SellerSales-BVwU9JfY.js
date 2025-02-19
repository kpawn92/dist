import{j as a}from"./framer-O_qyKole.js";import{t as b,aj as L,ak as w,ae as E,al as D,aa as F,n as d}from"./index-BqOnyvY0.js";import{r as T}from"./react-Bjzu39jn.js";import{S as I}from"./SellerLayout-Dsriym6h.js";import{D as v}from"./ui--o9aqPNp.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./utils-m6CwOAsu.js";import"./recharts-Decb_PJ4.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";function y({operation:{createdAt:t,...e}}){const{mutateAsync:o}=b.shop.seller.report.useMutation(),{proccessDocument:n}=w(),r=()=>{const c=o({...e,cup:parseFloat(e.cup),createdAt:new Date(t)});n(c)};return a.jsx("button",{className:"text-4xl",onClick:r,children:a.jsx(L,{})})}const l=32,j=1,g=8,C=1,f=l-(j+C+g),i="",m="",h="\0";function p(t,e=l){const o=Math.floor((e-t.length)/2);return" ".repeat(o)+t}function R(t,e){const o=[];let n=0;for(;n<t.length;)o.push(t.substring(n,n+e)),n+=e;return o}function S(t,e,o=l){const n=o-(t.length+e.length);return t+" ".repeat(n>0?n:0)+e}function A(t,e,o){const n=R(e,f-2),r=o.toFixed(2),c=(o*t).toFixed(2);let s="";s+=t.toString().padStart(j," ")+" "+n[0].padEnd(f-2," ")+" "+r.padStart(g," ")+`
`;for(let x=1;x<n.length;x++)s+=" ".repeat(j+1)+n[x].padEnd(f-2," ")+`
`;return s+=S("",c)+`
`,s}function N(t){let e="";e+=i+"!"+m+p("***TALLER GARCIA***",l)+i+"!"+h+`
`,e+=i+"!"+m+p("**MANZANILLO**",l)+i+"!"+h+`
`,e+="-".repeat(l)+`
`,t.client&&(e+=`Cliente: ${t.client}
`),t.address&&(e+=`Dirección: ${t.address}
`),t.contact&&(e+=`Contacto: ${t.contact}
`),(t.client||t.address||t.contact)&&(e+="-".repeat(l)+`
`);let o=0,n=0;return t.sales.forEach(r=>{const c=r.cost;o+=c,n+=c*r.qt,e+=A(r.qt,r.product??"",c*parseFloat(t.cup))+`
`}),e+="-".repeat(l)+`
`,e+=S("SUBTOTAL:","$"+(o*parseFloat(t.cup)).toFixed(2))+`
`,e+=i+"!"+m+"\x1BE"+S("TOTAL:","$"+(n*parseFloat(t.cup)).toFixed(2))+"\x1BE\0"+i+"!"+h+`
`,e+="-".repeat(l)+`
`,e+=p(new Date().toLocaleString())+`
`,e+=p("ID: "+E(t.id))+`
`,e+=p("¡Gracias por su compra!")+`
`,e+=p("Vuelva pronto")+`
`,e}function P({operation:t}){const e=()=>{const o=N(t),n=new File([o],`factura${E(t.id)}.txt`,{type:"text/plain",lastModified:new Date().getTime()});if(navigator.canShare&&navigator.canShare({files:[n]}))navigator.share({files:[n],title:"Factura",text:"Factura generada para el cliente."}).catch(r=>{console.error("Error al compartir",r)});else{const r=new Blob([n],{type:"text/plain"}),c=window.URL.createObjectURL(r),s=document.createElement("a");s.style.display="none",s.href=c,s.download="factura.txt",document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(c)}};return a.jsx("button",{className:"text-4xl",onClick:e,children:a.jsx(D,{})})}const u=t=>t.reduce((e,o)=>e+o.cost*o.qt,0);function Q(){const{data:t}=b.shop.seller.operations.useQuery(),{box:e,cpus:o}=T.useMemo(()=>{const n=(t||[]).reduce((c,s)=>c+u(s.sales),0),r=(t||[]).reduce((c,s)=>c+parseFloat(s.cup)*u(s.sales),0);return{box:n,cpus:r}},[t]);return a.jsxs(I,{content:"Caja",children:[a.jsxs("div",{className:"bg-green-500 text-white p-5 rounded-lg flex gap-2 items-center justify-between text-[2rem]",children:[a.jsx(F,{}),a.jsx("p",{className:"font-semibold",children:d(e)}),a.jsx("p",{children:d(o,"cup")})]}),a.jsx("div",{className:"flex flex-col gap-4 text-[1.5rem] my-4",children:t==null?void 0:t.map(n=>a.jsxs("div",{children:[a.jsxs("div",{className:"w-full flex items-center justify-between",children:[a.jsxs("p",{children:[" Venta: ",E(n.id,new Date(n.createdAt))]}),a.jsx("p",{children:d(u(n.sales))}),a.jsx("p",{children:d(u(n.sales)*parseFloat(n.cup),"cup")}),a.jsx(y,{operation:n}),a.jsx(P,{operation:n})]}),a.jsx(v,{})]},n.id))})]})}export{Q as default};
