import{j as s}from"./framer-O_qyKole.js";import{t as g,aj as w,ak as D,ae as f,al as T,aa as F,n as p}from"./index-spHznbun.js";import{r as I}from"./react-Bjzu39jn.js";import{S as v}from"./SellerLayout-Cvg2z9rf.js";import{D as y}from"./ui--o9aqPNp.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./utils-m6CwOAsu.js";import"./recharts-Decb_PJ4.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";function C({operation:{createdAt:t,...e}}){const{mutateAsync:o}=g.shop.seller.report.useMutation(),{proccessDocument:n}=D(),c=()=>{const r=o({...e,cup:parseFloat(e.cup),createdAt:new Date(t)});n(r)};return s.jsx("button",{className:"text-4xl",onClick:c,children:s.jsx(w,{})})}const i=32,j=1,L=8,R=1,h=i-(j+R+L),d="",E="",b="\0";function u(t,e=i){const o=Math.floor((e-t.length)/2);return" ".repeat(o)+t}function A(t,e){const o=[];let n=0;for(;n<t.length;)o.push(t.substring(n,n+e)),n+=e;return o}function S(t,e,o=i){const n=o-(t.length+e.length);return t+" ".repeat(n>0?n:0)+e}function N(t,e,o){const n=A(e,h-2),c=o.toFixed(2),r=(o*t).toFixed(2);let a="";a+=t.toString().padStart(j," ")+" "+n[0].padEnd(h-2," ")+" "+c.padStart(L," ")+`
`;for(let l=1;l<n.length;l++)a+=" ".repeat(j+1)+n[l].padEnd(h-2," ")+`
`;return a+=S("",r)+`
`,a}function P(t){let e="";const o="*** TALLER ***",n="*** GARCIA ***",c="** MANZANILLO **";e+=d+"!"+E+o+`
`,e+=d+"!"+E+n+`
`,e+=c+d+"!"+b+`
`,e+="=".repeat(i)+`
`,t.client&&(e+=`Cliente: ${t.client}
`),t.address&&(e+=`Dirección: ${t.address}
`),t.contact&&(e+=`Contacto: ${t.contact}
`),(t.client||t.address||t.contact)&&(e+="-".repeat(i)+`
`);let r=0,a=0;return t.sales.forEach(l=>{const m=l.cost;r+=m,a+=m*l.qt,e+=N(l.qt,l.product??"",m*parseFloat(t.cup))+`
`}),e+="-".repeat(i)+`
`,e+=S("SUBTOTAL:","$"+(r*parseFloat(t.cup)).toFixed(2))+`
`,e+="=".repeat(i)+`
`+d+"!\x1BE"+S("TOTAL:","$"+(a*parseFloat(t.cup)).toFixed(2))+"\x1BE\0"+d+"!"+b+`
`+"=".repeat(i)+`
`,e+=u(new Date().toLocaleString())+`
`,e+=u("ID: "+f(t.id))+`
`,e+=u("¡Gracias por su compra!")+`
`,e+=u("Vuelva pronto")+`
`,e}function O({operation:t}){const e=()=>{const o=P(t),n=new File([o],`factura${f(t.id)}.txt`,{type:"text/plain",lastModified:new Date().getTime()});if(navigator.canShare&&navigator.canShare({files:[n]}))navigator.share({files:[n],title:`factura${f(t.id)}`,text:"Factura generada para el cliente."}).catch(c=>{console.error("Error al compartir",c)});else{const c=new Blob([n],{type:"text/plain"}),r=window.URL.createObjectURL(c),a=document.createElement("a");a.style.display="none",a.href=r,a.download="factura.txt",document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(r)}};return s.jsx("button",{className:"text-4xl",onClick:e,children:s.jsx(T,{})})}const x=t=>t.reduce((e,o)=>e+o.cost*o.qt,0);function V(){const{data:t}=g.shop.seller.operations.useQuery(),{box:e,cpus:o}=I.useMemo(()=>{const n=(t||[]).reduce((r,a)=>r+x(a.sales),0),c=(t||[]).reduce((r,a)=>r+parseFloat(a.cup)*x(a.sales),0);return{box:n,cpus:c}},[t]);return s.jsxs(v,{content:"Caja",children:[s.jsxs("div",{className:"bg-green-500 text-white p-5 rounded-lg flex gap-2 items-center justify-between text-[2rem]",children:[s.jsx(F,{}),s.jsx("p",{className:"font-semibold",children:p(e)}),s.jsx("p",{children:p(o,"cup")})]}),s.jsx("div",{className:"flex flex-col gap-4 text-[1.5rem] my-4",children:t==null?void 0:t.map(n=>s.jsxs("div",{children:[s.jsxs("div",{className:"w-full flex items-center justify-between",children:[s.jsxs("p",{children:[" Venta: ",f(n.id,new Date(n.createdAt))]}),s.jsx("p",{children:p(x(n.sales))}),s.jsx("p",{children:p(x(n.sales)*parseFloat(n.cup),"cup")}),s.jsx(C,{operation:n}),s.jsx(O,{operation:n})]}),s.jsx(y,{})]},n.id))})]})}export{V as default};
