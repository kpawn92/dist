import{j as e}from"./framer-O_qyKole.js";import{am as x,ay as h}from"./index-CYTykYqe.js";import{e as j}from"./utils-m6CwOAsu.js";import{t as _,p as y,j as C,k as I,l as D,s as g,m as w,n as S}from"./ui--o9aqPNp.js";const T=()=>{const{pathname:o}=j(),[l,n,r]=x(a=>[a.tempID,a.setTempID,a.setLocation]);return{tempID:l,selectID:a=>{n(a),r(o)},isScope:a=>{const[,,i]=o.split("/");return i===a}}};function H({columns:o,arialLabel:l,page:n,total:r=0,setPage:c,rows:d=[],renderCell:a,isLoading:i,selectAction:m,thisScope:s,topContent:p}){const{selectID:f,tempID:u}=T();return e.jsxs("section",{className:"relative",children:[e.jsx(h,{className:"absolute z-10 right-0 shadow-lg -top-5"}),e.jsxs(_,{topContent:p,showSelectionCheckboxes:!1,isHeaderSticky:!0,defaultSelectedKeys:!s&&u&&[u]||void 0,selectionMode:m||s?"single":"none",onSelectionChange:t=>{!s&&m&&f([...t][0]),s&&s([...t][0])},color:"primary","aria-label":l,bottomContent:e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(y,{isCompact:!0,showControls:!0,showShadow:!0,color:"primary",page:n,total:r,onChange:t=>c(t)})}),children:[e.jsx(C,{columns:o,children:t=>e.jsx(I,{children:t.label},t.key)}),e.jsx(D,{isLoading:i,loadingContent:e.jsx(g,{}),items:d,emptyContent:"Sin datos",children:t=>e.jsx(w,{children:b=>e.jsx(S,{children:a(t,b)})},t.id)})]})]})}export{H as T};
