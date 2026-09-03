import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-NGpJ9wog.js";import{t as a}from"./Button-CvEHF8XG.js";import{t as o}from"./Button-BaKrzifV.js";import{t as s}from"./Input-Bid9it4p.js";import{t as c}from"./Input-vPdGdwUk.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./FormField-Cyk_IOMJ.js";var g=t((()=>{d()})),_=e({RevalidateOnLocaleChange:()=>T,SignIn:()=>w,__namedExportsOrder:()=>E,default:()=>C}),v,y,b,x,S,C,w,T,E,D=t((()=>{v=n(r(),1),m(),u(),g(),c(),o(),y=i(),b=l({email:f().email(`Enter a valid email address`).required(`Email is required`),password:f().min(8,`Must be at least 8 characters`).required(`Password is required`)}),x=l({email:f().email(`Enter a valid email`).required(`Email is required`)}),S=l({email:f().email(`Introduce un correo válido`).required(`El correo es obligatorio`)}),C={title:`Components/FormContainer`,component:p,parameters:{layout:`centered`}},w={render:()=>(0,y.jsx)(`div`,{className:`w-80`,children:(0,y.jsxs)(p,{validationSchema:b,defaultValues:{email:``,password:``},onSubmit:e=>alert(JSON.stringify(e)),buttons:[{children:`Sign in`,type:`submit`,variant:`primary`,fullWidth:!0}],children:[(0,y.jsx)(h,{name:`email`,render:e=>(0,y.jsx)(s,{...e,label:`Email`,type:`email`,placeholder:`you@example.com`})}),(0,y.jsx)(h,{name:`password`,render:e=>(0,y.jsx)(s,{...e,label:`Password`,type:`password`})})]})})},T={name:`Revalidate on locale change`,render:()=>{function e(){let[e,t]=(0,v.useState)(`en`);return(0,y.jsxs)(`div`,{className:`flex w-80 flex-col gap-3`,children:[(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,y.jsx)(a,{size:`sm`,variant:e===`en`?`primary`:`secondary`,onClick:()=>t(`en`),children:`EN`}),(0,y.jsx)(a,{size:`sm`,variant:e===`es`?`primary`:`secondary`,onClick:()=>t(`es`),children:`ES`})]}),(0,y.jsx)(p,{validationSchema:e===`en`?x:S,defaultValues:{email:``},revalidateKey:e,onSubmit:()=>{},buttons:[{children:`Submit`,type:`submit`,variant:`primary`}],children:(0,y.jsx)(h,{name:`email`,render:e=>(0,y.jsx)(s,{...e,label:`Email`})})})]})}return(0,y.jsx)(e,{})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Revalidate on locale change',
  render: () => {
    function LocaleDemo() {
      const [locale, setLocale] = useState<'en' | 'es'>('en');
      return <div className="flex w-80 flex-col gap-3">
          <div className="flex gap-2">
            <Button size="sm" variant={locale === 'en' ? 'primary' : 'secondary'} onClick={() => setLocale('en')}>
              EN
            </Button>
            <Button size="sm" variant={locale === 'es' ? 'primary' : 'secondary'} onClick={() => setLocale('es')}>
              ES
            </Button>
          </div>
          <FormContainer validationSchema={locale === 'en' ? emailSchemaEn : emailSchemaEs} defaultValues={{
          email: ''
        }} revalidateKey={locale} onSubmit={() => {}} buttons={[{
          children: 'Submit',
          type: 'submit',
          variant: 'primary'
        }]}>
            <FormField name="email" render={props => <Input {...props} label="Email" />} />
          </FormContainer>
        </div>;
    }
    return <LocaleDemo />;
  }
}`,...T.parameters?.docs?.source}}},E=[`SignIn`,`RevalidateOnLocaleChange`]}));D();export{T as RevalidateOnLocaleChange,w as SignIn,E as __namedExportsOrder,C as default,D as n,_ as t};