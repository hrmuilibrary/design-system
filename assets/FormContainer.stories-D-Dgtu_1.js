import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-CwcXNU-m.js";import{t as r}from"./Input-BhixdqM3.js";import{t as i}from"./Input-DEo2tE1b.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./FormField-DVoJ2Rmw.js";var f=t((()=>{s()})),p=e({SignIn:()=>_,__namedExportsOrder:()=>v,default:()=>g}),m,h,g,_,v,y=t((()=>{u(),o(),f(),i(),m=n(),h=a({email:c().email(`Enter a valid email address`).required(`Email is required`),password:c().min(8,`Must be at least 8 characters`).required(`Password is required`)}),g={title:`Components/FormContainer`,component:l,parameters:{layout:`centered`}},_={render:()=>(0,m.jsx)(`div`,{className:`w-80`,children:(0,m.jsxs)(l,{validationSchema:h,defaultValues:{email:``,password:``},onSubmit:e=>alert(JSON.stringify(e)),buttons:[{children:`Sign in`,type:`submit`,variant:`primary`,fullWidth:!0}],children:[(0,m.jsx)(d,{name:`email`,render:e=>(0,m.jsx)(r,{...e,label:`Email`,type:`email`,placeholder:`you@example.com`})}),(0,m.jsx)(d,{name:`password`,render:e=>(0,m.jsx)(r,{...e,label:`Password`,type:`password`})})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <FormContainer validationSchema={signInSchema} defaultValues={{
      email: '',
      password: ''
    }} onSubmit={data => alert(JSON.stringify(data))} buttons={[{
      children: 'Sign in',
      type: 'submit',
      variant: 'primary',
      fullWidth: true
    }]}>
        <FormField name="email" render={props => <Input {...props} label="Email" type="email" placeholder="you@example.com" />} />
        <FormField name="password" render={props => <Input {...props} label="Password" type="password" />} />
      </FormContainer>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`SignIn`]}));y();export{_ as SignIn,v as __namedExportsOrder,g as default,y as n,p as t};