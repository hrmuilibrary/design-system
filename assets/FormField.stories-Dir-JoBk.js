import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DGIhpTmD.js";import{t as r}from"./Input-DljuGuqq.js";import{t as i}from"./Input-CS-6dZBc.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./FormField-Dhs4qs3o.js";var f=t((()=>{o()})),p=e({CustomFieldWithSetFieldValue:()=>y,Primary:()=>_,ValidationError:()=>v,__namedExportsOrder:()=>b,default:()=>g}),m,h,g,_,v,y,b,x=t((()=>{u(),s(),f(),i(),m=n(),h=a({firstName:c().required(`First name is required`),lastName:c().required(`Last name is required`)}),g={title:`Components/FormField`,component:d,parameters:{layout:`centered`}},_={render:()=>(0,m.jsx)(`div`,{className:`flex w-96 flex-col gap-4`,children:(0,m.jsxs)(l,{validationSchema:h,defaultValues:{firstName:``,lastName:``},onSubmit:()=>{},children:[(0,m.jsx)(d,{name:`firstName`,render:e=>(0,m.jsx)(r,{...e,label:`First name`})}),(0,m.jsx)(d,{name:`lastName`,render:e=>(0,m.jsx)(r,{...e,label:`Last name`})})]})})},v={name:`Submitted with an empty required field`,render:()=>(0,m.jsx)(`div`,{className:`flex w-96 flex-col gap-4`,children:(0,m.jsxs)(l,{validationSchema:h,defaultValues:{firstName:``,lastName:``},onSubmit:()=>{},buttons:[{children:`Submit`,type:`submit`,variant:`primary`}],mode:`onSubmit`,children:[(0,m.jsx)(d,{name:`firstName`,render:e=>(0,m.jsx)(r,{...e,label:`First name`})}),(0,m.jsx)(d,{name:`lastName`,render:e=>(0,m.jsx)(r,{...e,label:`Last name`})})]})})},y={name:`Custom field using setFieldValue`,render:()=>(0,m.jsx)(`div`,{className:`flex w-96 flex-col gap-4`,children:(0,m.jsx)(l,{validationSchema:h,defaultValues:{firstName:``,lastName:``},onSubmit:()=>{},children:(0,m.jsx)(d,{name:`firstName`,render:({value:e,setFieldValue:t,isValid:n,errorText:r})=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,m.jsx)(`input`,{className:`rounded-lg border border-border-default px-3 py-2`,value:e??``,onChange:e=>t(e.target.value)}),n&&(0,m.jsx)(`span`,{className:`text-p-sm text-green-700`,children:`Looks good`}),r&&(0,m.jsx)(`span`,{className:`text-p-sm text-red-700`,children:r})]})})})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Custom field using setFieldValue',
  render: () => <div className="flex w-96 flex-col gap-4">
      <FormContainer validationSchema={schema} defaultValues={{
      firstName: '',
      lastName: ''
    }} onSubmit={() => {}}>
        <FormField name="firstName" render={({
        value,
        setFieldValue,
        isValid,
        errorText
      }) => <div className="flex flex-col gap-1">
              <input className="rounded-lg border border-border-default px-3 py-2" value={value ?? ''} onChange={e => setFieldValue(e.target.value)} />
              {isValid && <span className="text-p-sm text-green-700">Looks good</span>}
              {errorText && <span className="text-p-sm text-red-700">{errorText}</span>}
            </div>} />
      </FormContainer>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Primary`,`ValidationError`,`CustomFieldWithSetFieldValue`]}));x();export{y as CustomFieldWithSetFieldValue,_ as Primary,v as ValidationError,b as __namedExportsOrder,g as default,x as n,p as t};