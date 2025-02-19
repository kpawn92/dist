import{j as s}from"./framer-O_qyKole.js";import{t as E,aj as b,ak as L,ae as f,al as w,aa as D,n as d}from"./index-CYTykYqe.js";import{r as T}from"./react-Bjzu39jn.js";import{S as F}from"./SellerLayout-BOgGckpe.js";import{D as I}from"./ui--o9aqPNp.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./utils-m6CwOAsu.js";import"./recharts-Decb_PJ4.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";function v({operation:{createdAt:t,...e}}){const{mutateAsync:o}=E.shop.seller.report.useMutation(),{proccessDocument:n}=L(),c=()=>{const r=o({...e,cup:parseFloat(e.cup),createdAt:new Date(t)});n(r)};return s.jsx("button",{className:"text-4xl",onClick:c,children:s.jsx(b,{})})}const l=32,h=1,g=8,y=1,m=l-(h+y+g),p="",C="",S="\0";function u(t,e=l){const o=Math.floor((e-t.length)/2);return" ".repeat(o)+t}function R(t,e){const o=[];let n=0;for(;n<t.length;)o.push(t.substring(n,n+e)),n+=e;return o}function j(t,e,o=l){const n=o-(t.length+e.length);return t+" ".repeat(n>0?n:0)+e}function A(t,e,o){const n=R(e,m-2),c=o.toFixed(2),r=(o*t).toFixed(2);let a="";a+=t.toString().padStart(h," ")+" "+n[0].padEnd(m-2," ")+" "+c.padStart(g," ")+`
`;for(let i=1;i<n.length;i++)a+=" ".repeat(h+1)+n[i].padEnd(m-2," ")+`
`;return a+=j("",r)+`
`,a}function N(t){let e="";const o="TALLER GARCIA",n="MANZANILLO";e+=p+"!"+C+o.padStart((l+o.length)/2," ").padEnd(l," ")+`
`,e+=n.padStart((l+n.length)/2," ").padEnd(l," ")+p+"!"+S+`
`,e+="=".repeat(l)+`
`,t.client&&(e+=`Cliente: ${t.client}
`),t.address&&(e+=`Dirección: ${t.address}
`),t.contact&&(e+=`Contacto: ${t.contact}
`),(t.client||t.address||t.contact)&&(e+="-".repeat(l)+`
`);let c=0,r=0;return t.sales.forEach(a=>{const i=a.cost;c+=i,r+=i*a.qt,e+=A(a.qt,a.product??"",i*parseFloat(t.cup))+`
`}),e+="-".repeat(l)+`
`,e+=j("SUBTOTAL:","$"+(c*parseFloat(t.cup)).toFixed(2))+`
`,e+="=".repeat(l)+`
`+p+"!\x1BE"+j("TOTAL:","$"+(r*parseFloat(t.cup)).toFixed(2))+"\x1BE\0"+p+"!"+S+`
`+"=".repeat(l)+`
`,e+=u(new Date().toLocaleString())+`
`,e+=u("ID: "+f(t.id))+`
`,e+=u("¡Gracias por su compra!")+`
`,e+=u("Vuelva pronto")+`
`,e}function P({operation:t}){const e=()=>{const o=N(t),n=new File([o],`factura${f(t.id)}.txt`,{type:"text/plain",lastModified:new Date().getTime()});if(navigator.canShare&&navigator.canShare({files:[n]}))navigator.share({files:[n],title:`factura${f(t.id)}`,text:"Factura generada para el cliente."}).catch(c=>{console.error("Error al compartir",c)});else{const c=new Blob([n],{type:"text/plain"}),r=window.URL.createObjectURL(c),a=document.createElement("a");a.style.display="none",a.href=r,a.download="factura.txt",document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(r)}};return s.jsx("button",{className:"text-4xl",onClick:e,children:s.jsx(w,{})})}const x=t=>t.reduce((e,o)=>e+o.cost*o.qt,0);function Q(){const{data:t}=E.shop.seller.operations.useQuery(),{box:e,cpus:o}=T.useMemo(()=>{const n=(t||[]).reduce((r,a)=>r+x(a.sales),0),c=(t||[]).reduce((r,a)=>r+parseFloat(a.cup)*x(a.sales),0);return{box:n,cpus:c}},[t]);return s.jsxs(F,{content:"Caja",children:[s.jsxs("div",{className:"bg-green-500 text-white p-5 rounded-lg flex gap-2 items-center justify-between text-[2rem]",children:[s.jsx(D,{}),s.jsx("p",{className:"font-semibold",children:d(e)}),s.jsx("p",{children:d(o,"cup")})]}),s.jsx("div",{className:"flex flex-col gap-4 text-[1.5rem] my-4",children:t==null?void 0:t.map(n=>s.jsxs("div",{children:[s.jsxs("div",{className:"w-full flex items-center justify-between",children:[s.jsxs("p",{children:[" Venta: ",f(n.id,new Date(n.createdAt))]}),s.jsx("p",{children:d(x(n.sales))}),s.jsx("p",{children:d(x(n.sales)*parseFloat(n.cup),"cup")}),s.jsx(v,{operation:n}),s.jsx(P,{operation:n})]}),s.jsx(I,{})]},n.id))})]})}export{Q as default};
