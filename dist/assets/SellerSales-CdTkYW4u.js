import{j as s}from"./framer-O_qyKole.js";import{t as E,aj as T,ak as g,ae as D,al as L,aa as F,n as u}from"./index-CzuXR2Po.js";import{r as b}from"./react-Bjzu39jn.js";import{S as A}from"./SellerLayout-Cy7qolBY.js";import{D as C}from"./ui--o9aqPNp.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./utils-m6CwOAsu.js";import"./recharts-Decb_PJ4.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";function N({operation:{createdAt:t,...e}}){const{mutateAsync:o}=E.shop.seller.report.useMutation(),{proccessDocument:n}=g(),r=()=>{const a=o({...e,cup:parseFloat(e.cup),createdAt:new Date(t)});n(a)};return s.jsx("button",{className:"text-4xl",onClick:r,children:s.jsx(T,{})})}const l=32,j=1,I=8,P=1,m=l-(j+P+I),i="",f="",h="\0";function p(t,e=l){const o=Math.floor((e-t.length)/2);return" ".repeat(o)+t}function v(t,e){const o=[];let n=0;for(;n<t.length;)o.push(t.substring(n,n+e)),n+=e;return o}function S(t,e,o=l){const n=o-(t.length+e.length);return t+" ".repeat(n>0?n:0)+e}function w(t,e,o){const n=v(e,m-2),r=o.toFixed(2),a=(o*t).toFixed(2);let c="";c+=t.toString().padStart(j," ")+" "+n[0].padEnd(m-2," ")+" "+r.padStart(I," ")+`
`;for(let x=1;x<n.length;x++)c+=" ".repeat(j+1)+n[x].padEnd(m-2," ")+`
`;return c+=S("",a)+`
`,c}function R(t){let e="";e+=i+"!"+f+p("***TALLER GARCIA***",l)+i+"!"+h+`
`,e+=i+"!"+f+p("**MANZANILLO**",l)+i+"!"+h+`
`,e+="-".repeat(l)+`
`,t.client&&(e+=`Cliente: ${t.client}
`),t.address&&(e+=`Dirección: ${t.address}
`),t.contact&&(e+=`Contacto: ${t.contact}
`),(t.client||t.address||t.contact)&&(e+="-".repeat(l)+`
`);let o=0,n=0;return t.sales.forEach(r=>{const a=r.cost;o+=a,n+=a*r.qt,e+=w(r.qt,r.product??"",a*parseFloat(t.cup))+`
`}),e+="-".repeat(l)+`
`,e+=S("SUBTOTAL:","$"+(o*parseFloat(t.cup)).toFixed(2))+`
`,e+=i+"!"+f+"\x1BE"+S("TOTAL:","$"+(n*parseFloat(t.cup)).toFixed(2))+"\x1BE\0"+i+"!"+h+`
`,e+="-".repeat(l)+`
`,e+=p(new Date().toLocaleString())+`
`,e+=p("ID: "+D(t.id))+`
`,e+=p("¡Gracias por su compra!")+`
`,e+=p("Vuelva pronto")+`
`,e}function _({operation:t}){const e=()=>{const o=R(t);console.log(o)};return s.jsx("button",{className:"text-4xl",onClick:e,children:s.jsx(L,{})})}const d=t=>t.reduce((e,o)=>e+o.cost*o.qt,0);function U(){const{data:t}=E.shop.seller.operations.useQuery(),{box:e,cpus:o}=b.useMemo(()=>{const n=(t||[]).reduce((a,c)=>a+d(c.sales),0),r=(t||[]).reduce((a,c)=>a+parseFloat(c.cup)*d(c.sales),0);return{box:n,cpus:r}},[t]);return s.jsxs(A,{content:"Caja",children:[s.jsxs("div",{className:"bg-green-500 text-white p-5 rounded-lg flex gap-2 items-center justify-between text-[2rem]",children:[s.jsx(F,{}),s.jsx("p",{className:"font-semibold",children:u(e)}),s.jsx("p",{children:u(o,"cup")})]}),s.jsx("div",{className:"flex flex-col gap-4 text-[1.5rem] my-4",children:t==null?void 0:t.map(n=>s.jsxs("div",{children:[s.jsxs("div",{className:"w-full flex items-center justify-between",children:[s.jsxs("p",{children:[" Venta: ",D(n.id,new Date(n.createdAt))]}),s.jsx("p",{children:u(d(n.sales))}),s.jsx("p",{children:u(d(n.sales)*parseFloat(n.cup),"cup")}),s.jsx(N,{operation:n}),s.jsx(_,{operation:n})]}),s.jsx(C,{})]},n.id))})]})}export{U as default};
