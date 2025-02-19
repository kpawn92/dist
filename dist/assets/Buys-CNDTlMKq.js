import{j as e}from"./framer-O_qyKole.js";import{T as z}from"./TableContainer-CTLLX4CS.js";import{am as h,n as M,R as U,an as _,ao as q,t as p,N as Q,r as V,U as G,F as H,I as J,ap as K,aq as W,ar as X,as as Y,at as Z}from"./index-BqOnyvY0.js";import{r as i}from"./react-Bjzu39jn.js";import{d as w,J as C,g as $,f as ee}from"./ui--o9aqPNp.js";import{s as N}from"./utils-m6CwOAsu.js";import{z as S}from"./validation-DXqQCM1T.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./recharts-Decb_PJ4.js";const te=a=>{const r=h(s=>s.tempID),o=h(s=>s.location);return!!o&&o.split("/").includes(a)?r:void 0},se=[{key:"order",label:"PEDIDO ORIGEN"},{key:"type",label:"TIPO DE COMPRA"},{key:"deposit",label:"DESTINO"},{key:"dateIn",label:"FECHA DE COMPRA"},{key:"cost",label:"COSTO TOTAL"}],re=()=>i.useCallback((r,o)=>{const n=r[o],s=r.order.directCost+r.order.indirectCost;switch(o){case"order":return e.jsxs("div",{className:"text-blue-800",children:[e.jsx("p",{className:"font-extrabold",children:r.order.code}),e.jsx("p",{className:"capitalize font-semibold",children:r.order.description})]});case"type":return e.jsx("div",{className:"text-blue-500 font-semibold capitalize",children:_[r.order.type]});case"deposit":return e.jsx("div",{className:"text-blue-500 font-semibold",children:r.deposit.description});case"dateIn":return e.jsx("div",{className:"text-green-600 font-semibold",children:U(r.dateIn)});case"cost":return e.jsx("div",{className:"text-red-700 font-bold",children:M(s,r.order.currency)});default:return n}},[]),oe=()=>{const[a,r]=i.useState(1),o=q(l=>[l.orderBy,l.sizePage]),{data:n,isLoading:s}=p.warehouse.buy.find.useQuery({currentPage:a,...o});return{rows:(n==null?void 0:n.collect)||[],total:(n==null?void 0:n.totalPages)||0,currentPage:a,setCurrentPage:r,isLoading:s}},f=({value:a=0,currency:r="USD",color:o="default",content:n,variant:s="simple"})=>e.jsxs("div",{className:w("font-semibold",s==="simple"&&o==="danger"&&"text-red-500",s==="simple"&&o==="default"&&"text-default-800",s==="simple"&&o==="success"&&"text-green-500",s==="background"&&o==="danger"&&"bg-red-500 text-white rounded-md p-3",s==="background"&&o==="default"&&"bg-default-800 text-white rounded-md p-3",s==="background"&&o==="success"&&"bg-green-500 text-white rounded-md p-3"),children:[e.jsx("h4",{children:n}),e.jsx(N,{value:a,format:{style:"currency",maximumFractionDigits:2,currency:r},locales:"en-US",className:"text-3xl"})]}),P=S.object({sale:S.coerce.number()}),ne=({orderProductId:a,setSelected:r})=>{var g,b;const[o,n]=i.useState(),[s,l]=i.useState(0),d=p.useUtils(),{data:t,isLoading:u}=p.order.product.detail.useQuery(a),I=Q((g=t==null?void 0:t.product)==null?void 0:g.picture),{mutate:D,isPending:v}=p.warehouse.movements.entry.create.useMutation({onSuccess(){C.success("Lote almacenado satisfactoriamente"),r()},onSettled(){d.order.detail.invalidate(),d.warehouse.movements.entry.find.invalidate()}});i.useEffect(()=>{l(0)},[]);const{errors:E,handleSubmit:L,register:T,watch:k}=V(P),x=k("sale")||0,[F,R,O,m]=i.useMemo(()=>{const c=(t==null?void 0:t.cost)||0,y=(t==null?void 0:t.qt)||0,B=(s*y/c-1)/100,j=c/y||0;return s>0?[c,s,j,B]:[c,0,j,0]},[t,s]);i.useEffect(()=>{P.safeParse({sale:x}).success?l(x):C.warning("Error al entrar el margen de ganancia",{position:"top-right"})},[x]);const A=({sale:c})=>{D({orderProductId:a,cost:c,dateIn:o?new Date(o):new Date})};return e.jsxs("section",{className:"flex items-start gap-5",children:[u&&e.jsx(G,{}),e.jsxs(H,{isLoading:v,handleResolver:A,handleSubmit:L,titleButton:"Entrar lote",colorButton:"secondary",classNames:{form:"flex flex-row gap-2"},children:[e.jsx(J,{handleFormRegister:T("sale"),field:E.sale,autoComplete:"off",endContent:e.jsx(K,{className:"font-bold text-xl text-success-500"}),title:"Precio de venta",size:"sm"}),e.jsx($,{label:"Fecha de entrada",size:"sm",color:"primary",className:"w-[250px]",onChange:c=>n(c==null?void 0:c.toString())})]}),e.jsxs("article",{className:"flex gap-2 items-start",children:[e.jsx("div",{children:e.jsx(ee,{isBlurred:!0,width:210,className:"m-2",src:I.data||"",alt:(b=t==null?void 0:t.product)==null?void 0:b.description})}),e.jsxs("div",{className:"flex flex-col gap-2 mx-4",children:[e.jsx(f,{color:"danger",content:"Costo total",currency:t==null?void 0:t.currency,value:F},1),e.jsx(f,{color:"danger",content:"Costo directo",currency:t==null?void 0:t.currency,value:O},2)]}),e.jsx(f,{color:"success",content:"Costo venta",currency:t==null?void 0:t.currency,value:R},3),m!==0&&e.jsx(N,{className:w("px-2 flex items-center text-white"),value:m,format:{style:"percent",maximumFractionDigits:2},animate:{backgroundColor:m>0?"#34d399":"#ef4444"},style:{borderRadius:999},first:()=>m<0?e.jsx(W,{}):e.jsx(X,{})})]})]})},ye=()=>{const{currentPage:a,isLoading:r,rows:o,setCurrentPage:n,total:s}=oe(),l=re(),d=te("deposit"),[t,u]=i.useState();return e.jsxs("section",{children:[d&&e.jsx(Y,{itemSelected:t,tableProductExtended:t&&e.jsx(ne,{setSelected:()=>u(void 0),orderProductId:+t}),selectedProduct:t,id:+d,isRenderTableExpenses:!1,isRenderActions:!1,selectProduct:u}),e.jsx(z,{topContent:e.jsx(Z,{content:"Compras"}),arialLabel:"List buys registred",columns:se,page:a,renderCell:l,setPage:n,isLoading:r,rows:o,selectAction:!0,total:s})]})};export{ye as default};
