import{ao as l,t as p}from"./index-CYTykYqe.js";import{r as n}from"./react-Bjzu39jn.js";import{j as o}from"./framer-O_qyKole.js";import{g as m,$ as f,h as u,e as x}from"./ui--o9aqPNp.js";const P=()=>{const[a,t]=n.useState(1),[r,s]=l(i=>[i.sizePage,i.orderBy]),{data:e,isLoading:c}=p.subscription.find.useQuery({currentPage:a,orderBy:s,sizePage:r});return{companies:(e==null?void 0:e.companies)||[],totalPages:e==null?void 0:e.totalPages,currentPage:a,setCurrentPage:t,isLoading:c}},$=({setAction:a})=>{const[t,r]=n.useState(void 0);return o.jsxs("section",{className:"flex gap-2 flex-col py-3 w-full",children:[o.jsx("h4",{className:"text-lg font-semibold",children:"Acciones"}),o.jsx(m,{minValue:f(u()),label:"Expira",size:"sm",onChange:s=>r(s==null?void 0:s.toString())}),o.jsx(x,{size:"sm",color:"secondary",onClick:()=>a(t),children:"Revalidar"})]})};export{$ as C,P as u};
