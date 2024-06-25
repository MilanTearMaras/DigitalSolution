import{a as m,o as p,c as f,w as x,f as e,h as a,u as t,x as h,y as _,e as g}from"./entry.74a39a8b.js";import{s as w}from"./utils.a48ab410.js";import{c as y,a as v,F as c,E as n,b as k}from"./index.esm.6e3e1958.js";import{u as d}from"./auth.faad4368.js";import"./request.a9cd6104.js";const F={class:"flex flex-wrap -mx-3 mb-6"},$={class:"w-full px-3"},B=e("label",{for:"email",class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Email",-1),E={class:"flex flex-wrap -mx-3 mb-6"},T={class:"w-full px-3"},P=e("label",{for:"password",class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Heslo",-1),S=e("div",{class:"flex flex-wrap -mx-3 mb-6"},[e("div",{class:"w-full px-3"},[e("div",{class:"p-3 mt-2 text-center space-x-4 md:block"},[e("button",{class:"mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider rounded-md bg-purple-500 border border-purple-500 text-white hover:shadow-lg hover:bg-purple-600",type:"submit"}," Přihlásit se ")])])],-1),j=m({__name:"LoginForm",emits:["submit"],setup(u,{emit:o}){const r=o,i=y({email:v().required("Toto pole je povinné").email("Toto pole musí být email")});function l(s){r("submit",s)}return(s,b)=>(p(),f(t(k),{ref:"userForm",class:"w-full max-w-lg","validation-schema":t(i),onSubmit:l},{default:x(()=>[e("div",F,[e("div",$,[B,a(t(c),{id:"email",name:"email",type:"email",class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",placeholder:"frantanovak@email.cz"}),a(t(n),{name:"email",class:"text-red-500 text-xs italic"})])]),e("div",E,[e("div",T,[P,a(t(c),{id:"password",type:"password",name:"password",placeholder:"••••••••",class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}),a(t(n),{name:"plainPassword",class:"text-red-500 text-xs italic"})])]),S]),_:1},8,["validation-schema"]))}}),C={class:"h-screen flex justify-center items-center"},L={class:"inline-block bg-white p-10 rounded-lg text-center"},A=m({__name:"login",setup(u){w("Login");const o=h(),{authenticateUser:r}=d(),{authenticated:i}=_(d());async function l(s){await r(s),i&&o.push({path:"/salary"})}return(s,b)=>(p(),g("div",C,[e("div",L,[a(j,{onSubmit:l})])]))}});export{A as default};