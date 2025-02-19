import{j as e,k as d,i as m}from"./framer-O_qyKole.js";import{d as o}from"./ui--o9aqPNp.js";import{r as x}from"./react-Bjzu39jn.js";import{L as h,a as u,b as f,c as j,d as w,e as k,u as v}from"./index-5Z8Lvhuy.js";import{u as g}from"./privileges-MMlcBaa1.js";import{N,d as L,O}from"./utils-m6CwOAsu.js";import{c as y}from"./zustand-MWJfmZmr.js";import"./recharts-Decb_PJ4.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";const c=y()(s=>({isOpen:!0,setOpen:t=>s(()=>({isOpen:t}))})),r=({children:s,name:t,path:a,showLabel:n})=>{const i=c(l=>l.isOpen);return e.jsxs(N,{to:a,className:o("relative flex p-2 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-100 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"),children:[e.jsx("div",{className:"absolute",children:s}),e.jsx("p",{className:o("pl-10 text-inherit overflow-clip whitespace-nowrap tracking-wide",!n&&!i&&"opacity-0"),children:t})]})},C={close:{width:"5rem",transition:{type:"spring",damping:15,duration:.5}},open:{width:"16rem",transition:{type:"spring",damping:15,duration:.5}}},b={close:{rotate:360},open:{rotate:180}},S=()=>{const[s,t]=c(p=>[p.isOpen,p.setOpen]),a=d(),n=d(),i=()=>{t(!s)};x.useEffect(()=>{s?(a.start("open"),n.start("open")):(a.start("close"),n.start("close"))},[s]);const{isRoot:l}=g();return e.jsx(e.Fragment,{children:e.jsxs(m.nav,{variants:C,animate:a,initial:"close",className:o("fixed bg-blue-800 overflow-hidden flex flex-col z-50 gap-20 p-5 top-0 left-0 h-full shadow shadow-sky-600"),children:[e.jsxs("div",{className:"flex flex-row w-full justify-between place-items-center",children:[e.jsx("h2",{className:o("text-2xl font-extrabold text-neutral-200",!s&&"hidden"),children:"invetec"}),e.jsx("div",{}),e.jsx("button",{className:"p-1 rounded-full flex",onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"w-8 h-8 stroke-neutral-200 ",children:e.jsx(m.path,{variants:b,animate:n,strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",transition:{duration:.5,ease:"easeInOut"}})})})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{name:"Panel de control",path:"/dash",children:e.jsx(h,{className:"stroke-inherit stroke-[0.75] min-w-8 w-8 text-2xl"})}),l&&e.jsx(r,{name:"Company",path:"/dash/company",children:e.jsx(u,{className:"stroke-inherit stroke-[0.75] min-w-8 w-8 text-2xl"})}),e.jsx(r,{name:"Órdenes",path:"/dash/order",children:e.jsx(f,{className:"stroke-inherit stroke-[0.75] min-w-8 w-8 text-2xl"})}),e.jsx(r,{name:"Almacen",path:"/dash/deposit",children:e.jsx(j,{className:"stroke-inherit stroke-[0.75] min-w-8 w-8 text-2xl"})}),e.jsx(r,{name:"Tienda",path:"/dash/shop",children:e.jsx(w,{className:"stroke-inherit stroke-[0.75] min-w-8 w-8 text-2xl"})}),e.jsx(r,{name:"Cerrar",path:"/dash/close",children:e.jsx(k,{className:"stroke-inherit stroke-[0.75] min-w-8 w-8 text-2xl"})})]})]})})},M=({children:s})=>{const t=c(a=>a.isOpen);return e.jsxs("main",{className:"relative text-pretty w-full h-min-screen flex flex-row",children:[e.jsx(S,{}),e.jsx("section",{className:o("pl-[6rem] pr-[1rem] w-full font-onest antialiased",t&&"md:pl-[17rem]"),children:s})]})},G=()=>v(t=>t.accessToken)?e.jsx(M,{children:e.jsx(O,{})}):e.jsx(L,{to:"/",replace:!0});export{G as default};
