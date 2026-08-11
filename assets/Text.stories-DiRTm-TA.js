import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-B_LPFnTU.js";import{n as r,t as i}from"./Text-unmB-B6E.js";var a=e({AllColors:()=>w,AllHeadingVariants:()=>b,AllLabelVariants:()=>S,AllParagraphVariants:()=>x,Clamped:()=>m,CustomClassName:()=>g,CustomElement:()=>h,Heading:()=>l,Label:()=>d,Paragraph:()=>u,Primary:()=>c,Truncated:()=>p,Weighted:()=>f,__namedExportsOrder:()=>T,default:()=>s}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{r(),o=n(),s={title:`Components/Text`,component:i,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`h-xl`,`h-lg`,`h-md`,`h-std`,`h-sm`,`h-xs`,`p-lg`,`p-md`,`p-std`,`p-sm`,`p-xs`,`label-lg`,`label-md`,`label-std`,`label-sm`,`label-xs`,`label-xxs`]},weight:{control:`select`,options:[void 0,`normal`,`medium`,`semibold`,`bold`]},color:{control:`select`,options:[`default`,`secondary`,`tertiary`,`disabled`,`inverse`,`brand`,`info`,`success`,`warning`,`danger`]}},args:{children:`The quick brown fox jumps over the lazy dog`,variant:`p-std`,color:`default`,truncate:!1}},c={},l={args:{variant:`h-lg`,children:`Heading text`}},u={args:{variant:`p-md`,children:`Paragraph text`}},d={args:{variant:`label-md`,children:`Label text`}},f={args:{weight:`semibold`,children:`Semibold text`}},p={args:{truncate:!0,children:`This is a very long line of text that will be truncated with an ellipsis`},decorators:[e=>(0,o.jsx)(`div`,{className:`w-48`,children:(0,o.jsx)(e,{})})]},m={name:`Clamped to N lines`,args:{clamp:2,children:`This is a much longer paragraph of text that will be clamped to exactly two lines with an ellipsis, no matter how much content follows after the cutoff point in the source string.`},decorators:[e=>(0,o.jsx)(`div`,{className:`w-64`,children:(0,o.jsx)(e,{})})]},h={name:"Overriding the rendered element via `as`",args:{as:`label`,variant:`label-std`,children:`Rendered as a <label>`}},g={name:`Overriding classes via className`,args:{className:`italic underline`,children:`Custom styled text`}},_=[`h-xl`,`h-lg`,`h-md`,`h-std`,`h-sm`,`h-xs`],v=[`p-lg`,`p-md`,`p-std`,`p-sm`,`p-xs`],y=[`label-lg`,`label-md`,`label-std`,`label-sm`,`label-xs`,`label-xxs`],b={render:e=>(0,o.jsx)(`div`,{className:`flex flex-col gap-2`,children:_.map(t=>(0,o.jsx)(i,{...e,variant:t,children:t},t))})},x={render:e=>(0,o.jsx)(`div`,{className:`flex flex-col gap-2`,children:v.map(t=>(0,o.jsx)(i,{...e,variant:t,children:t},t))})},S={render:e=>(0,o.jsx)(`div`,{className:`flex flex-col gap-2`,children:y.map(t=>(0,o.jsx)(i,{...e,variant:t,children:t},t))})},C=[`default`,`secondary`,`tertiary`,`disabled`,`brand`,`info`,`success`,`warning`,`danger`],w={render:e=>(0,o.jsx)(`div`,{className:`flex flex-col gap-2`,children:C.map(t=>(0,o.jsx)(i,{...e,color:t,children:t},t))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'h-lg',
    children: 'Heading text'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'p-md',
    children: 'Paragraph text'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'label-md',
    children: 'Label text'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    weight: 'semibold',
    children: 'Semibold text'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: 'This is a very long line of text that will be truncated with an ellipsis'
  },
  decorators: [Story => <div className="w-48">
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Clamped to N lines',
  args: {
    clamp: 2,
    children: 'This is a much longer paragraph of text that will be clamped to exactly two lines with an ellipsis, no matter how much content follows after the cutoff point in the source string.'
  },
  decorators: [Story => <div className="w-64">
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Overriding the rendered element via \`as\`',
  args: {
    as: 'label',
    variant: 'label-std',
    children: 'Rendered as a <label>'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'italic underline',
    children: 'Custom styled text'
  }
}`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      {HEADING_VARIANTS.map(variant => <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      {PARAGRAPH_VARIANTS.map(variant => <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      {LABEL_VARIANTS.map(variant => <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>)}
    </div>
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      {COLORS.map(color => <Text key={color} {...args} color={color}>
          {color}
        </Text>)}
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Primary`,`Heading`,`Paragraph`,`Label`,`Weighted`,`Truncated`,`Clamped`,`CustomElement`,`CustomClassName`,`AllHeadingVariants`,`AllParagraphVariants`,`AllLabelVariants`,`AllColors`]}));E();export{w as AllColors,b as AllHeadingVariants,S as AllLabelVariants,x as AllParagraphVariants,m as Clamped,g as CustomClassName,h as CustomElement,l as Heading,d as Label,u as Paragraph,c as Primary,p as Truncated,f as Weighted,T as __namedExportsOrder,s as default,E as n,a as t};