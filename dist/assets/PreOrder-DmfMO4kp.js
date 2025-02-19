import{j as e}from"./framer-O_qyKole.js";import{r as f}from"./react-Bjzu39jn.js";import{m as N,o as P,B as y,p as v,n as j,C as A,q as S,r as _,s as F,v as O,F as q,I as b,t as E,w as R,x as T}from"./index-CzuXR2Po.js";import{A as D,B as I,t as k,j as z,k as i,l as w,m as L,n as u,e as g,J as m,i as M,D as B}from"./ui--o9aqPNp.js";import{c as U}from"./zustand-MWJfmZmr.js";import{z as h}from"./validation-DXqQCM1T.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./utils-m6CwOAsu.js";import"./recharts-Decb_PJ4.js";import"./reactHookForm-6EQnDOt0.js";const d=U()(o=>({products:[],to:[],reset:()=>o(()=>({products:[],to:[],supplier:void 0})),setContact:s=>o(()=>({supplier:s})),setTo:s=>o(r=>({to:[...r.to,s]})),removeTo:s=>o(r=>({to:r.to.filter(c=>c!==s)})),setProduct:s=>o(r=>({products:[...r.products,s]})),deleteProduct:s=>o(r=>({products:r.products.filter(c=>c.createdAt!==s)}))})),V=({setSelectProduct:o,contact:s="SUPPLIER"})=>{const{contacts:r,isLoading:c}=N(s);return e.jsx("fieldset",{className:"flex gap-2",children:e.jsx(D,{color:"primary",size:"sm",isLoading:c,label:`Seleccione el ${s==="SUPPLIER"?"proveedor":"cliente"}`,children:r.map(a=>e.jsx(I,{textValue:a.description,onClick:()=>o(a),children:a.description},a.id))})})},G=()=>{const o=d(t=>t.to),s=d(t=>t.removeTo),r=d(t=>t.products.sort((n,l)=>l.createdAt-n.createdAt)),c=d(t=>t.deleteProduct),a=d(t=>t.supplier);return e.jsxs("section",{className:"bg-neutral-50 flex flex-col gap-2",children:[a&&e.jsxs("div",{className:"flex flex-col gap-1 text-sm",children:[e.jsx("h4",{className:"text-xl",children:"Proveedor: "}),e.jsx("p",{children:a.address}),e.jsx("p",{children:a.email}),e.jsx("p",{children:a.contact})]}),o.length>0&&e.jsx("h4",{className:"text-xl",children:"Agregados"}),o.map(t=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(P,{className:"text-lg text-primary-500"}),e.jsx("span",{className:"text-lg text-primary-600",children:t}),e.jsx(y,{color:"danger",Icon:v,onPress:()=>s(t)})]},t+Math.random())),r.length>0&&e.jsx(e.Fragment,{children:e.jsxs(k,{topContent:e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-3xl text-neutral-800 font-bold",children:"Productos"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h4",{className:"text-red-800 font-bold text-xl",children:"Costo total"}),e.jsx("p",{className:"text-lg text-red-600 font-semibold",children:j(r.reduce((t,n)=>t+n.cost*n.quantity,0))})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h4",{className:"text-blue-800 font-bold text-xl",children:"Cantidad total"}),e.jsx("p",{className:"text-lg text-blue-600 font-semibold",children:r.reduce((t,n)=>t+n.quantity,0)})]})]})]}),"aria-label":"List product by pre-order",children:[e.jsxs(z,{children:[e.jsx(i,{children:"PRODUCTO"}),e.jsx(i,{children:"CANTIDAD"}),e.jsx(i,{children:"COSTO"}),e.jsx(i,{children:"C.TOTAL"}),e.jsx(i,{children:"ACCIONES"})]}),e.jsx(w,{children:r.sort((t,n)=>n.createdAt-t.createdAt).map(t=>e.jsxs(L,{children:[e.jsxs(u,{className:"text-neutral-800 font-semibold",children:["description=",t.description,e.jsx(A,{picture:t.picture})]}),e.jsxs(u,{className:"font-semibold text-blue-600",children:[t.quantity," U"]}),e.jsx(u,{className:"font-semibold text-red-500",children:j(t.cost)}),e.jsx(u,{className:"font-semibold text-red-500",children:j(t.cost*t.quantity)}),e.jsx(u,{className:"flex gap-2",children:e.jsx(g,{color:"danger",size:"sm",onPress:()=>c(t.createdAt),startContent:e.jsx(S,{className:"text-2xl"})})})]},t.createdAt))})]})})]})},J=h.object({quantity:h.coerce.number().int().min(1),cost:h.coerce.number().min(.01)}),K=()=>{const[o,s]=f.useState(),[r,c]=f.useState(!1),{errors:a,handleSubmit:t,register:n,reset:l}=_(J),x=d(p=>p.setProduct),C=p=>{if(!o)return m.warning("El producto es requerido");x({...o,...p,createdAt:Date.now()}),l()};return e.jsxs("section",{className:"flex flex-col gap-4",children:[r&&e.jsx(F,{}),e.jsx(O,{onlyAction:!0,setSelectProduct:s,onClick:()=>c(!r)}),e.jsxs(q,{handleResolver:C,handleSubmit:t,titleButton:"Agregar producto",colorButton:"secondary",children:[e.jsx(b,{handleFormRegister:n("quantity"),field:a.quantity,size:"sm",type:"number",title:"Entre la cantidad"}),e.jsx(b,{defaultValue:"0",size:"sm",title:"Entre el costo",handleFormRegister:n("cost"),field:a.cost})]})]})},Q=({className:o})=>{const{mutate:s,isPending:r}=E.order.preorder.useMutation({onSuccess(){m.success("Pedido enviado, en unos minutos sera notificado en el correo de la empresa")}}),c=d(l=>l.products),a=d(l=>l.to),t=d(l=>{var x;return(x=l.supplier)==null?void 0:x.id}),n=()=>{if(!t)return m.error("Debe seleccionar un proveedor");s({products:c.map(l=>({description:l.description,picture:l.picture??"",quantity:l.quantity,cost:l.cost})),supplierId:t,to:a})};return e.jsx(g,{startContent:e.jsx(R,{className:"text-2xl"}),onClick:n,isDisabled:r,color:"success",type:"button",className:o})},ae=()=>{const o=d(t=>t.setTo),[s,r]=f.useState(void 0),c=()=>{if(!s)return m.warning("El e-mail es incorrecto");o(s)},a=d(t=>t.setContact);return e.jsxs("section",{className:"flex flex-col gap-2",children:[e.jsxs("h3",{className:"text-[2rem] font-semibold my-3 flex items-center gap-2",children:["Generador de pedido",e.jsx(Q,{})]}),e.jsx(V,{setSelectProduct:a}),e.jsx(M,{size:"sm",startContent:e.jsx(P,{}),label:"Agregar destinatario",color:"primary",onValueChange:r,endContent:e.jsx(g,{startContent:e.jsx(T,{className:"text-2xl text-white"}),color:"primary",size:"sm",onClick:c})}),e.jsx(B,{className:"bg-neutral-200 my-5"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(K,{}),e.jsx(G,{})]})]})};export{ae as default};
