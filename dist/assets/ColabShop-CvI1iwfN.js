import{j as e}from"./framer-O_qyKole.js";import{K as h,t as x,N as v,n as P,B as y,O as C,g as S,f as I,Q as M,V as _,W as q,R as E,P as F}from"./index-CYTykYqe.js";import{r as p}from"./react-Bjzu39jn.js";import{J as V,f as w,i as j,d as Q,I as B,K as D}from"./ui--o9aqPNp.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./utils-m6CwOAsu.js";import"./recharts-Decb_PJ4.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";const J=({shop:c})=>{var f;const{cup:a,currency:i}=h(),r=parseFloat(c.priceSale),[m,s]=p.useState(a?r*a:r),[t,n]=p.useState(0);p.useEffect(()=>{t>0?s(a?r*t*a:r*t):s(a?r*a:r)},[t]);const l=isNaN(t)||t<1||t===0||t>c.output.qt,d=x.useUtils(),{mutate:o,isPending:u}=x.shop.salesingle.useMutation({onSuccess(){V.success("Venta registrada satisfactoriamente",{position:"top-center"})},onSettled(){d.shop.existence.invalidate(),d.shop.find.invalidate()}}),g=()=>{o({qt:t,transferId:c.id,cup:a})},b=v((f=c.product)==null?void 0:f.picture);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(w,{width:180,src:b.data||""}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-blue-800 font-bold",children:e.jsxs("p",{className:"text-[3rem]",children:[c.output.qt," U"]})}),e.jsx("div",{className:"flex gap-1 text-red-800 font-bold",children:e.jsx("p",{className:"text-[1.5rem]",children:P(m,a&&i||c.output.entry.batch.order.currency)})})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{label:"Cantidad",type:"number",min:"1",step:"1",onValueChange:N=>n(Number(N)),defaultValue:"0"}),e.jsx(y,{isDisabled:u||l,className:Q("bg-blue-100 rounded-md shadow-md text-[3rem] text-blue-800",l&&"text-neutral-100 bg-red-200"),Icon:C,onPress:g})]})]})},k=()=>{const[c,a]=p.useState(""),i=S(c),{currentPage:r,setCurrentPage:m}=I(),{data:s}=x.shop.existence.useQuery({product:i}),{error:t,data:n}=x.shop.find.useQuery({currentPage:r,orderBy:"asc",sizePage:5,product:i});M(t);const{cup:l,currency:d}=h();return e.jsxs("section",{children:[e.jsx("div",{className:"fixed top-2 left-2 right-2 z-30",children:e.jsxs("div",{className:"flex flex-col gap-1 shadow-md",children:[e.jsx(_,{Icon:q,color:"success",content:"Existencia",value:l?l*((s==null?void 0:s.usd.total)||0):s==null?void 0:s.usd.total,currency:l&&d||(s==null?void 0:s.usd.currency)}),e.jsx(j,{label:"Filtrar por descripción",color:"success",radius:"none",onValueChange:a})]})}),e.jsxs("div",{className:"mt-[160px] mb-[25px]",children:[e.jsx(B,{className:"px-s",children:((n==null?void 0:n.products)??[]).filter(o=>o.output.qt>0).map(o=>{var u;return e.jsx(D,{classNames:{subtitle:"text-green-800",title:"text-neutral-600 font-semibold"},"aria-label":`Accordion ${Math.random()*1e3}`,subtitle:"Presione para expandir",title:e.jsxs("div",{className:"flex justify-between gap-2",children:[e.jsxs("div",{className:"flex gap-1",children:[e.jsxs("span",{className:"text-green-800",children:["(",o.output.qt,")"]}),e.jsx("span",{children:(u=o.product)==null?void 0:u.description})]}),e.jsx("span",{children:e.jsx("small",{children:E(o.createdAt)})})]}),children:e.jsx(J,{shop:o})},o.id)})}),e.jsx(F,{currentPage:r,setCurrentPage:m,totalPages:(n==null?void 0:n.totalPages)||1})]})]})};export{k as default};
