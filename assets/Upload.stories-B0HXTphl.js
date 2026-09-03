import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-p9i34dfU.js";import{n as a,r as o,t as s}from"./Upload-By4vN9NT.js";var c=e({ButtonTrigger:()=>C,CustomClassName:()=>_,Disabled:()=>g,EnforcedValidation:()=>S,IconTrigger:()=>w,Interactive:()=>v,ItemCompleted:()=>b,ItemError:()=>x,ItemList:()=>j,ItemProcessing:()=>y,ItemWithOpen:()=>A,ItemWithThumbnail:()=>D,Multiple:()=>h,Primary:()=>f,ViewMode:()=>k,WithAcceptAndMaxSize:()=>p,WithCustomHint:()=>m,WithError:()=>E,WithFileList:()=>O,WithLabelAndRequired:()=>T,__namedExportsOrder:()=>M,default:()=>d}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{l=n(r(),1),o(),u=i(),d={title:`Components/Upload`,component:s,parameters:{layout:`centered`},args:{disabled:!1},decorators:[e=>(0,u.jsx)(`div`,{className:`w-96`,children:(0,u.jsx)(e,{})})]},f={},p={name:`With accept & maxSizeMB`,args:{accept:`.png,.jpg`,maxSizeMB:10}},m={args:{hint:`SVG or PDF, up to 5 MB`}},h={args:{multiple:!0,hint:`Select as many files as you need`}},g={args:{disabled:!0}},_={name:`Overriding classes via className`,args:{className:`border-brand-500 bg-brand-20`}},v={render:e=>{function t(){let[t,n]=(0,l.useState)([]);return(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(s,{...e,onFiles:e=>n(e.map(e=>e.name))}),t.length>0&&(0,u.jsx)(`ul`,{className:`text-p-sm text-fg-secondary list-disc pl-5`,children:t.map(e=>(0,u.jsx)(`li`,{children:e},e))})]})}return(0,u.jsx)(t,{})}},y={name:`UploadItem — processing`,render:()=>(0,u.jsx)(a,{name:`quarterly-report.pdf`,meta:`2.4 MB`,status:`processing`,progress:62})},b={name:`UploadItem — completed`,render:()=>(0,u.jsx)(a,{name:`quarterly-report.pdf`,meta:`2.4 MB`,status:`completed`,onRemove:()=>{}})},x={name:`UploadItem — error`,render:()=>(0,u.jsx)(a,{name:`quarterly-report.pdf`,meta:`2.4 MB`,status:`error`,errorText:`Upload failed. Check your connection and try again.`,onRetry:()=>{},onRemove:()=>{}})},S={name:`Enforced validation`,render:e=>{function t(){let[t,n]=(0,l.useState)([]),[r,i]=(0,l.useState)([]);return(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(s,{...e,validateFiles:!0,accept:`image/png`,maxSizeMB:1,maxFiles:3,multiple:!0,currentFiles:t,onFiles:e=>{n(t=>[...t,...e]),i([])},onReject:i}),t.length>0&&(0,u.jsx)(`ul`,{className:`text-p-sm text-fg-secondary list-disc pl-5`,children:t.map((e,t)=>(0,u.jsx)(`li`,{children:e.name},`${e.name}-${t}`))}),r.map((e,t)=>(0,u.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-red-300 bg-bg-danger-lighter px-3 py-2 text-p-sm text-red-700`,children:[(0,u.jsxs)(`span`,{children:[e.file.name,` — `,e.reason]}),(0,u.jsx)(`button`,{type:`button`,onClick:()=>i(t=>t.filter(t=>t!==e)),className:`shrink-0 font-medium underline hover:no-underline`,children:`Dismiss`})]},`${e.file.name}-${t}`))]})}return(0,u.jsx)(t,{})}},C={name:`Button trigger`,args:{mode:`button`}},w={name:`Icon trigger`,args:{mode:`icon`}},T={name:`With label and required`,args:{label:`Attachment`,required:!0}},E={args:{label:`Attachment`,error:!0,errorText:`This file type is not supported.`}},D={name:`UploadItem — image thumbnail`,render:()=>(0,u.jsx)(a,{name:`hero-image.png`,meta:`4.8 MB`,status:`completed`,previewSrc:`https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=80&h=80&fit=crop`,onRemove:()=>{}})},O={name:`showFileList with removal`,render:e=>{function t(){let[t,n]=(0,l.useState)(()=>[new File([`x`],`brand-guidelines.pdf`,{type:`application/pdf`}),new File([`x`.repeat(2e6)],`hero-image.png`,{type:`image/png`})]);return(0,u.jsx)(s,{...e,showFileList:!0,currentFiles:t,onFiles:e=>n(t=>[...t,...e]),onRemoveFile:(e,t)=>n(e=>e.filter((e,n)=>n!==t))})}return(0,u.jsx)(t,{})}},k={name:`mode="view"`,args:{mode:`view`,showFileList:!0,label:`Attachments`,currentFiles:[new File([`x`],`brand-guidelines.pdf`,{type:`application/pdf`}),new File([`x`.repeat(5e5)],`dataset.csv`,{type:`text/csv`})]}},A={name:`UploadItem — onOpen`,render:()=>(0,u.jsx)(a,{name:`brand-guidelines.pdf`,meta:`1.1 MB`,status:`completed`,onOpen:()=>window.alert(`Opening brand-guidelines.pdf`)})},j={name:`Upload + UploadItem list`,render:e=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(s,{...e}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(a,{name:`brand-guidelines.pdf`,meta:`1.1 MB`,status:`completed`,onRemove:()=>{}}),(0,u.jsx)(a,{name:`hero-image.png`,meta:`4.8 MB`,status:`processing`,progress:35,onRemove:()=>{}}),(0,u.jsx)(a,{name:`dataset.csv`,meta:`18 MB`,status:`error`,errorText:`File exceeds the 10 MB limit.`,onRetry:()=>{},onRemove:()=>{}})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With accept & maxSizeMB',
  args: {
    accept: '.png,.jpg',
    maxSizeMB: 10
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'SVG or PDF, up to 5 MB'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    hint: 'Select as many files as you need'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'border-brand-500 bg-brand-20'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    function InteractiveDemo() {
      const [fileNames, setFileNames] = useState<string[]>([]);
      return <div className="flex flex-col gap-3">
          <Upload {...args} onFiles={files => setFileNames(files.map(file => file.name))} />
          {fileNames.length > 0 && <ul className="text-p-sm text-fg-secondary list-disc pl-5">
              {fileNames.map(name => <li key={name}>{name}</li>)}
            </ul>}
        </div>;
    }
    return <InteractiveDemo />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'UploadItem — processing',
  render: () => <UploadItem name="quarterly-report.pdf" meta="2.4 MB" status="processing" progress={62} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'UploadItem — completed',
  render: () => <UploadItem name="quarterly-report.pdf" meta="2.4 MB" status="completed" onRemove={() => {}} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'UploadItem — error',
  render: () => <UploadItem name="quarterly-report.pdf" meta="2.4 MB" status="error" errorText="Upload failed. Check your connection and try again." onRetry={() => {}} onRemove={() => {}} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Enforced validation',
  render: args => {
    function EnforcedValidationDemo() {
      const [files, setFiles] = useState<File[]>([]);
      const [rejections, setRejections] = useState<UploadRejection[]>([]);
      return <div className="flex flex-col gap-3">
          <Upload {...args} validateFiles accept="image/png" maxSizeMB={1} maxFiles={3} multiple currentFiles={files} onFiles={accepted => {
          setFiles(prev => [...prev, ...accepted]);
          setRejections([]);
        }} onReject={setRejections} />
          {files.length > 0 && <ul className="text-p-sm text-fg-secondary list-disc pl-5">
              {files.map((file, i) => <li key={\`\${file.name}-\${i}\`}>{file.name}</li>)}
            </ul>}
          {rejections.map((rejection, i) => <div key={\`\${rejection.file.name}-\${i}\`} className="flex items-center justify-between gap-3 rounded-lg border border-red-300 bg-bg-danger-lighter px-3 py-2 text-p-sm text-red-700">
              <span>
                {rejection.file.name} — {rejection.reason}
              </span>
              <button type="button" onClick={() => setRejections(prev => prev.filter(r => r !== rejection))} className="shrink-0 font-medium underline hover:no-underline">
                Dismiss
              </button>
            </div>)}
        </div>;
    }
    return <EnforcedValidationDemo />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Button trigger',
  args: {
    mode: 'button'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Icon trigger',
  args: {
    mode: 'icon'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With label and required',
  args: {
    label: 'Attachment',
    required: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attachment',
    error: true,
    errorText: 'This file type is not supported.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'UploadItem — image thumbnail',
  render: () => <UploadItem name="hero-image.png" meta="4.8 MB" status="completed" previewSrc="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=80&h=80&fit=crop" onRemove={() => {}} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'showFileList with removal',
  render: args => {
    function Controlled() {
      const [files, setFiles] = useState<File[]>(() => [new File(['x'], 'brand-guidelines.pdf', {
        type: 'application/pdf'
      }), new File(['x'.repeat(2_000_000)], 'hero-image.png', {
        type: 'image/png'
      })]);
      return <Upload {...args} showFileList currentFiles={files} onFiles={added => setFiles(prev => [...prev, ...added])} onRemoveFile={(_file, index) => setFiles(prev => prev.filter((_, i) => i !== index))} />;
    }
    return <Controlled />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'mode="view"',
  args: {
    mode: 'view',
    showFileList: true,
    label: 'Attachments',
    currentFiles: [new File(['x'], 'brand-guidelines.pdf', {
      type: 'application/pdf'
    }), new File(['x'.repeat(500_000)], 'dataset.csv', {
      type: 'text/csv'
    })]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'UploadItem — onOpen',
  render: () => <UploadItem name="brand-guidelines.pdf" meta="1.1 MB" status="completed" onOpen={() => window.alert('Opening brand-guidelines.pdf')} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Upload + UploadItem list',
  render: args => <div className="flex flex-col gap-3">
      <Upload {...args} />
      <div className="flex flex-col gap-2">
        <UploadItem name="brand-guidelines.pdf" meta="1.1 MB" status="completed" onRemove={() => {}} />
        <UploadItem name="hero-image.png" meta="4.8 MB" status="processing" progress={35} onRemove={() => {}} />
        <UploadItem name="dataset.csv" meta="18 MB" status="error" errorText="File exceeds the 10 MB limit." onRetry={() => {}} onRemove={() => {}} />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}},M=[`Primary`,`WithAcceptAndMaxSize`,`WithCustomHint`,`Multiple`,`Disabled`,`CustomClassName`,`Interactive`,`ItemProcessing`,`ItemCompleted`,`ItemError`,`EnforcedValidation`,`ButtonTrigger`,`IconTrigger`,`WithLabelAndRequired`,`WithError`,`ItemWithThumbnail`,`WithFileList`,`ViewMode`,`ItemWithOpen`,`ItemList`]}));N();export{C as ButtonTrigger,_ as CustomClassName,g as Disabled,S as EnforcedValidation,w as IconTrigger,v as Interactive,b as ItemCompleted,x as ItemError,j as ItemList,y as ItemProcessing,A as ItemWithOpen,D as ItemWithThumbnail,h as Multiple,f as Primary,k as ViewMode,p as WithAcceptAndMaxSize,m as WithCustomHint,E as WithError,O as WithFileList,T as WithLabelAndRequired,M as __namedExportsOrder,d as default,N as n,c as t};