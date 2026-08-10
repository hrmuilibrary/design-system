import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-04k_LSg4.js";import{t as r}from"./Input-CjiXAdZ1.js";import{t as i}from"./Input-BseQ1HPY.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./FormField-D24JxPrx.js";var f=t((()=>{o()})),p=e({Primary:()=>_,ValidationError:()=>v,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y,b=t((()=>{u(),s(),f(),i(),m=n(),h=a({firstName:c().required(`First name is required`),lastName:c().required(`Last name is required`)}),g={title:`Components/FormField`,component:d,parameters:{layout:`centered`}},_={render:()=>(0,m.jsx)(`div`,{className:`flex w-96 flex-col gap-4`,children:(0,m.jsxs)(l,{validationSchema:h,defaultValues:{firstName:``,lastName:``},onSubmit:()=>{},children:[(0,m.jsx)(d,{name:`firstName`,render:e=>(0,m.jsx)(r,{...e,label:`First name`})}),(0,m.jsx)(d,{name:`lastName`,render:e=>(0,m.jsx)(r,{...e,label:`Last name`})})]})})},v={name:`Submitted with an empty required field`,render:()=>(0,m.jsx)(`div`,{className:`flex w-96 flex-col gap-4`,children:(0,m.jsxs)(l,{validationSchema:h,defaultValues:{firstName:``,lastName:``},onSubmit:()=>{},buttons:[{children:`Submit`,type:`submit`,variant:`primary`}],mode:`onSubmit`,children:[(0,m.jsx)(d,{name:`firstName`,render:e=>(0,m.jsx)(r,{...e,label:`First name`})}),(0,m.jsx)(d,{name:`lastName`,render:e=>(0,m.jsx)(r,{...e,label:`Last name`})})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <FormContainer validationSchema={schema} defaultValues={{
      firstName: '',
      lastName: ''
    }} onSubmit={() => {}}>
        <FormField name="firstName" render={props => <Input {...props} label="First name" />} />
        <FormField name="lastName" render={props => <Input {...props} label="Last name" />} />
      </FormContainer>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Submitted with an empty required field',
  render: () => <div className="flex w-96 flex-col gap-4">
      <FormContainer validationSchema={schema} defaultValues={{
      firstName: '',
      lastName: ''
    }} onSubmit={() => {}} buttons={[{
      children: 'Submit',
      type: 'submit',
      variant: 'primary'
    }]} mode="onSubmit">
        <FormField name="firstName" render={props => <Input {...props} label="First name" />} />
        <FormField name="lastName" render={props => <Input {...props} label="Last name" />} />
      </FormContainer>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`ValidationError`]}));b();export{_ as Primary,v as ValidationError,y as __namedExportsOrder,g as default,b as n,p as t};