import{j as e,i as c}from"./framer-O_qyKole.js";import{B as s,y as m,z as x,A as d,D as u,E as p,G as h,H as b,k as j,l as i,J as f}from"./index-spHznbun.js";import{d as g}from"./ui--o9aqPNp.js";import{r as w}from"./react-Bjzu39jn.js";import{u as P}from"./privileges-IcyZ9Sum.js";import{a as l,O as v}from"./utils-m6CwOAsu.js";import"./tanstack-cynJ2YVG.js";import"./trpc-DBeWMeKD.js";import"./zustand-MWJfmZmr.js";import"./reactHookForm-6EQnDOt0.js";import"./validation-DXqQCM1T.js";import"./recharts-Decb_PJ4.js";const O=({close:t})=>{const[o,n]=w.useState(!1),r=l(),{isOperatorPlus:a}=P();return e.jsxs(c.div,{initial:{bottom:0},animate:{bottom:o?"-5rem":0},transition:{duration:.8,ease:"anticipate"},className:g("fixed bottom-0 left-1 right-1 rounded-md bg-blue-600 z-40"),children:[e.jsx("div",{className:"relative",children:e.jsx(s,{className:"absolute -top-3 bg-blue-600 text-white rounded-full",color:"primary",Icon:o?x:m,onPress:()=>n(!o)})}),e.jsxs("div",{className:"flex justify-center gap-5 py-2",children:[!a&&e.jsx(s,{color:"white",className:"text-5xl",Icon:d,onPress:()=>r("/colab")}),e.jsx(s,{color:"white",className:"text-5xl",Icon:u,onPress:()=>r("/colab/shop")}),!a&&e.jsx(s,{color:"white",className:"text-5xl",Icon:p,onPress:()=>r("/colab/shop-sales")}),e.jsx(s,{color:"white",className:"text-5xl",Icon:h,onPress:t})]})]})},N=()=>{const t=l();return e.jsx("header",{children:e.jsx(s,{Icon:b,color:"primary",onPress:()=>t("/colab/settings"),classNames:{button:"text-4xl fixed z-50 right-0 bg-white rounded-xl w-[60px] h-[40px] flex item-center justify-center",icon:"text-blue-800"}})})},H=()=>{j(i.OPERATOR,i.SUBOPERATOR);const{logout:t}=f();return e.jsxs("div",{className:"relative min-h-screen overflow-hidden",children:[e.jsx(N,{}),e.jsx(v,{}),e.jsx(O,{close:t})]})};export{H as default};
