import{j as e}from"./framer-O_qyKole.js";import{K as C,t as d,N as w,n as S,B as R,O as _,Q as D,R as E,f as B,T as I,U as V}from"./index-5Z8Lvhuy.js";import{r as c}from"./react-Bjzu39jn.js";import{J as b,f as F,i as m,d as Q,I as L,K as M,p as O}from"./ui--o9aqPNp.js";import{u as T}from"./privileges-MMlcBaa1.js";import{a as q}from"./utils-m6CwOAsu.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";import"./recharts-Decb_PJ4.js";const z=({entry:s,stores:t})=>{var j;const{cup:a,currency:r}=C(),o=parseFloat(s.sellings[0].sale),[u,n]=c.useState(a?o*a:o),[i,p]=c.useState(0),[x,g]=c.useState(t[0].description);c.useEffect(()=>{i>0?n(a?o*i*a:o*i):n(a?o*a:o)},[i]);const h=d.useUtils(),{mutate:v,isPending:N}=d.warehouse.movements.output.withcolab.useMutation({onSuccess(){b.success("Rebaja registrada satisfactoriamente",{position:"top-center"})},onSettled(){h.warehouse.existence.invalidate(),h.warehouse.movements.entry.find.invalidate()}}),P=()=>{if(!x)return b.error("La tienda es requerida",{position:"top-left"});v({entryId:s.id,qt:i,shopDescription:x})},f=isNaN(i)||i<1||i===0||i>s.inventory,y=w((j=s.batch.price)==null?void 0:j.product.picture);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(F,{width:180,isZoomed:!0,src:y.data||""}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-blue-800 font-bold",children:e.jsxs("p",{className:"text-[3rem]",children:[s.inventory,"u"]})}),e.jsx("div",{className:"flex gap-1 text-red-800 font-bold",children:e.jsx("p",{className:"text-[1.5rem]",children:S(u,a&&r||s.batch.order.currency)})})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{label:"Cantidad",type:"number",onValueChange:l=>p(Number(l)),defaultValue:"0"}),e.jsx(m,{label:"Tienda destino",list:"stores",onValueChange:g,defaultValue:t==null?void 0:t[0].description}),e.jsx(R,{isDisabled:f||N,className:Q("bg-blue-100 rounded-md shadow-md text-[3rem] text-blue-800",f&&"text-neutral-100 bg-red-200"),Icon:_,onPress:P}),t&&e.jsx("datalist",{id:"stores",children:t.map(l=>e.jsx("option",{children:l.description},l.id))})]})]})},A=({entries:s=[]})=>{const{error:t,data:a}=d.warehouse.movements.shop.search.useQuery();return D(t),e.jsx(L,{className:"px-s",children:s.map(r=>{var o;return e.jsx(M,{classNames:{subtitle:"text-blue-800",title:"text-neutral-600 font-semibold"},"aria-label":`Accordion ${r.barcode}`,subtitle:"Presione para expandir",title:e.jsxs("div",{className:"flex justify-between gap-2",children:[e.jsxs("div",{className:"flex gap-1",children:[e.jsxs("span",{className:"text-blue-800",children:["(",r.inventory,")"]}),e.jsx("span",{children:(o=r.batch.price)==null?void 0:o.product.description})]}),e.jsx("span",{children:e.jsx("small",{children:E(r.dateIn)})})]}),children:e.jsx(z,{stores:a||[],entry:r})},r.id)})})},J=()=>{const{isOperatorPlus:s}=T(),t=q();return c.useEffect(()=>{s&&t("/colab/shop",{replace:!0})},[]),s},te=()=>{const s=J(),[t,a]=c.useState(""),{currentPage:r,orderBy:o,setCurrentPage:u}=B(),{data:n,isLoading:i}=d.warehouse.movements.entry.find.useQuery({orderBy:o,currentPage:r,sizePage:50,productDescription:t});return s?e.jsx(e.Fragment,{}):e.jsxs("section",{className:"relative flex flex-col gap-2 mt-4 mx-2",children:[e.jsxs("div",{className:"fixed z-40 top-2 left-2 right-2 shadow-lg",children:[e.jsx(I,{}),e.jsx(m,{onValueChange:a,label:"Buscar por descripción",color:"primary",radius:"sm",className:"pt-1"})]}),(n??[]).entries.length>50&&e.jsx(O,{isCompact:!0,showControls:!0,showShadow:!0,color:"primary",page:r,total:(n==null?void 0:n.totalPages)||0,onChange:u}),i&&e.jsx(V,{}),e.jsx("div",{className:"mt-[150px] mb-[25px]",children:e.jsx(A,{entries:n==null?void 0:n.entries.filter(p=>p.inventory>0)})})]})};export{te as default};
