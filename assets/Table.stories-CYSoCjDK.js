import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-SjvhwSre.js";import{Ht as a,fn as o,on as s,t as c}from"./lucide-react-DaByuVPb.js";import{n as l,t as u}from"./cn-BNhCYuha.js";function d({columns:e,rows:t,rowKey:n,empty:r=`No results`,density:i,striped:a,hoverable:o,sortKey:s,sortDir:c=null,onSortChange:l,onRowClick:u,className:d,dataTestId:f}){return(0,p.jsxs)(g,{density:i,striped:a,hoverable:o,className:d,dataTestId:f,children:[(0,p.jsx)(_,{children:(0,p.jsx)(y,{children:e.map(e=>(0,p.jsx)(b,{align:e.align,sortable:e.sortable,sortDir:s===e.key?c:null,onSortChange:t=>l?.(e.key,t),children:e.header},e.key))})}),(0,p.jsx)(v,{children:t.length===0?(0,p.jsx)(y,{children:(0,p.jsx)(x,{colSpan:e.length,className:`text-center text-fg-tertiary py-10`,align:`center`,children:r})}):t.map((t,r)=>(0,p.jsx)(y,{onClick:u?()=>u(t):void 0,className:u?`cursor-pointer`:void 0,children:e.map(e=>(0,p.jsx)(x,{align:e.align,children:e.render?e.render(t):e.accessor?e.accessor(t):null},e.key))},n(t,r)))})]})}var f,p,m,h,g,_,v,y,b,x,S=t((()=>{f=n(r(),1),c(),l(),p=i(),m={comfortable:`[&_td]:py-3 [&_th]:py-3`,compact:`[&_td]:py-2 [&_th]:py-2`},h={left:`text-left`,center:`text-center`,right:`text-right`},g=(0,f.forwardRef)(function({density:e=`comfortable`,striped:t=!1,hoverable:n=!0,stickyHeader:r=!1,wrapperClassName:i,className:a,children:o,dataTestId:s,...c},l){return(0,p.jsx)(`div`,{"data-test-id":s,className:u(`w-full overflow-x-auto rounded-lg border border-border-default bg-bg-default`,i),children:(0,p.jsx)(`table`,{ref:l,className:u(`w-full border-collapse text-p-std text-fg-default`,m[e],a),"data-striped":t||void 0,"data-hoverable":n||void 0,"data-sticky":r||void 0,...c,children:o})})}),_=(0,f.forwardRef)(function({className:e,children:t,dataTestId:n,...r},i){return(0,p.jsx)(`thead`,{ref:i,"data-test-id":n,className:u(`bg-bg-container text-p-sm font-semibold text-fg-secondary uppercase tracking-wider`,`[[data-sticky]_&]:sticky [[data-sticky]_&]:top-0 [[data-sticky]_&]:z-10`,e),...r,children:t})}),v=(0,f.forwardRef)(function({className:e,children:t,dataTestId:n,...r},i){return(0,p.jsx)(`tbody`,{ref:i,"data-test-id":n,className:u(`[&>tr]:border-t [&>tr]:border-border-default`,`[[data-striped]_&>tr:nth-child(even)]:bg-bg-container`,`[[data-hoverable]_&>tr:hover]:bg-bg-container`,e),...r,children:t})}),y=(0,f.forwardRef)(function({className:e,children:t,dataTestId:n,...r},i){return(0,p.jsx)(`tr`,{ref:i,"data-test-id":n,className:e,...r,children:t})}),b=(0,f.forwardRef)(function({sortable:e=!1,sortDir:t=null,onSortChange:n,align:r=`left`,className:i,children:c,dataTestId:l,...d},f){let m=(0,p.jsxs)(p.Fragment,{children:[c,e&&(0,p.jsx)(`span`,{className:`inline-flex ml-1 align-middle text-fg-tertiary`,children:t===`asc`?(0,p.jsx)(s,{className:`h-3.5 w-3.5`}):t===`desc`?(0,p.jsx)(o,{className:`h-3.5 w-3.5`}):(0,p.jsx)(a,{className:`h-3.5 w-3.5`})})]});return(0,p.jsx)(`th`,{ref:f,scope:`col`,"data-test-id":l,className:u(`px-4 whitespace-nowrap`,h[r],i),"aria-sort":t===`asc`?`ascending`:t===`desc`?`descending`:void 0,...d,children:e?(0,p.jsx)(`button`,{type:`button`,onClick:()=>{n?.(t===`asc`?`desc`:t===`desc`?null:`asc`)},className:`inline-flex items-center hover:text-fg-default focus-visible:outline-none`,children:m}):m})}),x=(0,f.forwardRef)(function({align:e=`left`,className:t,children:n,dataTestId:r,...i},a){return(0,p.jsx)(`td`,{ref:a,"data-test-id":r,className:u(`px-4`,h[e],t),...i,children:n})});try{d.displayName=`DataTable`,d.__docgenInfo={description:``,displayName:`DataTable`,filePath:`/home/runner/work/design-system/design-system/src/components/Table/Table.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`columns`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!0,tags:{},type:{name:`TableColumn<T>[]`}},rows:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`rows`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!0,tags:{},type:{name:`T[]`}},rowKey:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`rowKey`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!0,tags:{},type:{name:`(row: T, i: number) => string`}},empty:{defaultValue:{value:`No results`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`empty`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`ReactNode`}},density:{defaultValue:{value:`comfortable`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`density`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`enum`,raw:`TableDensity`,value:[{value:`"comfortable"`},{value:`"compact"`}]}},striped:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`striped`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`boolean`}},hoverable:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`hoverable`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`boolean`}},sortKey:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`sortKey`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`string`}},sortDir:{defaultValue:{value:`null`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`sortDir`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`SortDir`}},onSortChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`onSortChange`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`((key: string, dir: SortDir) => void)`}},onRowClick:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`onRowClick`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`((row: T) => void)`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`DataTableProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{g.displayName=`Table`,g.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/design-system/design-system/src/components/Table/Table.tsx`,methods:[],props:{density:{defaultValue:{value:`comfortable`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`}],description:``,name:`density`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`},required:!1,tags:{},type:{name:`enum`,raw:`TableDensity`,value:[{value:`"comfortable"`},{value:`"compact"`}]}},striped:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`}],description:``,name:`striped`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},hoverable:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`}],description:``,name:`hoverable`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},stickyHeader:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`}],description:``,name:`stickyHeader`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`},required:!1,tags:{},type:{name:`boolean`}},wrapperClassName:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`}],description:"Applied to the outer scroll container (border/background/rounding) —\n`className` is applied to the `<table>` element itself, matching where\n`ref` and the rest of `HTMLAttributes<HTMLTableElement>` land.",name:`wrapperClassName`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TableProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{_.displayName=`THead`,_.__docgenInfo={description:``,displayName:`THead`,filePath:`/home/runner/work/design-system/design-system/src/components/Table/Table.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{v.displayName=`TBody`,v.__docgenInfo={description:``,displayName:`TBody`,filePath:`/home/runner/work/design-system/design-system/src/components/Table/Table.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{y.displayName=`TR`,y.__docgenInfo={description:``,displayName:`TR`,filePath:`/home/runner/work/design-system/design-system/src/components/Table/Table.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{b.displayName=`TH`,b.__docgenInfo={description:``,displayName:`TH`,filePath:`/home/runner/work/design-system/design-system/src/components/Table/Table.tsx`,methods:[],props:{sortable:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`}],description:``,name:`sortable`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`},required:!1,tags:{},type:{name:`boolean`}},sortDir:{defaultValue:{value:`null`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`}],description:``,name:`sortDir`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`},required:!1,tags:{},type:{name:`SortDir`}},onSortChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`}],description:``,name:`onSortChange`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`},required:!1,tags:{},type:{name:`((dir: SortDir) => void)`}},align:{defaultValue:{value:`left`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`}],description:``,name:`align`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`THProps`},required:!1,tags:{},type:{name:`enum`,raw:`TableAlign`,value:[{value:`"right"`},{value:`"left"`},{value:`"center"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{x.displayName=`TD`,x.__docgenInfo={description:``,displayName:`TD`,filePath:`/home/runner/work/design-system/design-system/src/components/Table/Table.tsx`,methods:[],props:{align:{defaultValue:{value:`left`},declarations:[{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TDProps`}],description:``,name:`align`,parent:{fileName:`design-system/src/components/Table/Table.types.ts`,name:`TDProps`},required:!1,tags:{},type:{name:`enum`,raw:`TableAlign`,value:[{value:`"right"`},{value:`"left"`},{value:`"center"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),C=e({Compact:()=>j,CustomClassName:()=>z,DataTableBasic:()=>I,DataTableEmpty:()=>R,DataTableSortable:()=>L,NoHover:()=>M,Primary:()=>k,SortableColumns:()=>P,StickyHeader:()=>N,Striped:()=>A,__namedExportsOrder:()=>B,default:()=>O});function w(e){return(0,E.jsxs)(g,{...e,children:[(0,E.jsx)(_,{children:(0,E.jsxs)(y,{children:[(0,E.jsx)(b,{children:`Name`}),(0,E.jsx)(b,{children:`Role`}),(0,E.jsx)(b,{children:`Department`}),(0,E.jsx)(b,{align:`right`,children:`Status`})]})}),(0,E.jsx)(v,{children:D.map(e=>(0,E.jsxs)(y,{children:[(0,E.jsx)(x,{children:e.name}),(0,E.jsx)(x,{children:e.role}),(0,E.jsx)(x,{children:e.department}),(0,E.jsx)(x,{align:`right`,children:e.status})]},e.id))})]})}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V=t((()=>{T=n(r(),1),S(),E=i(),D=[{id:`1`,name:`Ana Petrosyan`,role:`Engineering Manager`,department:`Engineering`,status:`Active`},{id:`2`,name:`Davit Sargsyan`,role:`Product Designer`,department:`Design`,status:`Active`},{id:`3`,name:`Lilit Hovhannisyan`,role:`Recruiter`,department:`People`,status:`On leave`},{id:`4`,name:`Narek Grigoryan`,role:`Backend Engineer`,department:`Engineering`,status:`Active`},{id:`5`,name:`Mariam Avetisyan`,role:`Finance Analyst`,department:`Finance`,status:`Inactive`}],O={title:`Components/Table`,component:g,parameters:{layout:`padded`},argTypes:{density:{control:`select`,options:[`comfortable`,`compact`]}},args:{density:`comfortable`,striped:!1,hoverable:!0,stickyHeader:!1}},k={render:w},A={args:{striped:!0},render:w},j={args:{density:`compact`},render:w},M={name:`Hover disabled`,args:{hoverable:!1},render:w},N={args:{stickyHeader:!0},render:e=>(0,E.jsx)(`div`,{className:`h-48 overflow-y-auto`,children:(0,E.jsxs)(g,{...e,children:[(0,E.jsx)(_,{children:(0,E.jsxs)(y,{children:[(0,E.jsx)(b,{children:`Name`}),(0,E.jsx)(b,{children:`Role`}),(0,E.jsx)(b,{children:`Department`}),(0,E.jsx)(b,{align:`right`,children:`Status`})]})}),(0,E.jsx)(v,{children:[...D,...D].map((e,t)=>(0,E.jsxs)(y,{children:[(0,E.jsx)(x,{children:e.name}),(0,E.jsx)(x,{children:e.role}),(0,E.jsx)(x,{children:e.department}),(0,E.jsx)(x,{align:`right`,children:e.status})]},`${e.id}-${t}`))})]})})},P={render:e=>{function t(){let[t,n]=(0,T.useState)(`name`),[r,i]=(0,T.useState)(`asc`),a=[...D].sort((e,n)=>{if(!t||!r)return 0;let i=t,a=String(e[i]).localeCompare(String(n[i]));return r===`asc`?a:-a}),o=(e,t)=>{n(t?e:null),i(t)};return(0,E.jsxs)(g,{...e,children:[(0,E.jsx)(_,{children:(0,E.jsxs)(y,{children:[(0,E.jsx)(b,{sortable:!0,sortDir:t===`name`?r:null,onSortChange:e=>o(`name`,e),children:`Name`}),(0,E.jsx)(b,{sortable:!0,sortDir:t===`department`?r:null,onSortChange:e=>o(`department`,e),children:`Department`}),(0,E.jsx)(b,{align:`right`,children:`Status`})]})}),(0,E.jsx)(v,{children:a.map(e=>(0,E.jsxs)(y,{children:[(0,E.jsx)(x,{children:e.name}),(0,E.jsx)(x,{children:e.department}),(0,E.jsx)(x,{align:`right`,children:e.status})]},e.id))})]})}return(0,E.jsx)(t,{})}},F=[{key:`name`,header:`Name`,accessor:e=>e.name,sortable:!0},{key:`role`,header:`Role`,accessor:e=>e.role},{key:`department`,header:`Department`,accessor:e=>e.department,sortable:!0},{key:`status`,header:`Status`,accessor:e=>e.status,align:`right`}],I={name:`DataTable`,render:e=>(0,E.jsx)(d,{columns:F,rows:D,rowKey:e=>e.id,density:e.density,striped:e.striped,hoverable:e.hoverable})},L={name:`DataTable (sortable + row click)`,render:e=>{function t(){let[t,n]=(0,T.useState)(`name`),[r,i]=(0,T.useState)(`asc`),a=[...D].sort((e,n)=>{if(!r)return 0;let i=t,a=String(e[i]).localeCompare(String(n[i]));return r===`asc`?a:-a});return(0,E.jsx)(d,{columns:F,rows:a,rowKey:e=>e.id,density:e.density,striped:e.striped,hoverable:e.hoverable,sortKey:t,sortDir:r,onSortChange:(e,t)=>{n(e),i(t)},onRowClick:e=>console.log(`Clicked ${e.name}`)})}return(0,E.jsx)(t,{})}},R={name:`DataTable (empty state)`,render:e=>(0,E.jsx)(d,{columns:F,rows:[],rowKey:e=>e.id,density:e.density,striped:e.striped,hoverable:e.hoverable,empty:`No employees match these filters.`})},z={name:`Overriding classes via className / wrapperClassName`,render:e=>(0,E.jsxs)(g,{...e,wrapperClassName:`border-brand-500 bg-bg-container`,className:`[&_thead]:bg-brand-20`,children:[(0,E.jsx)(_,{children:(0,E.jsxs)(y,{children:[(0,E.jsx)(b,{children:`Name`}),(0,E.jsx)(b,{children:`Role`})]})}),(0,E.jsx)(v,{children:D.slice(0,3).map(e=>(0,E.jsxs)(y,{children:[(0,E.jsx)(x,{children:e.name}),(0,E.jsx)(x,{children:e.role})]},e.id))})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: renderBasicTable
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true
  },
  render: renderBasicTable
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'compact'
  },
  render: renderBasicTable
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Hover disabled',
  args: {
    hoverable: false
  },
  render: renderBasicTable
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    stickyHeader: true
  },
  render: args => <div className="h-48 overflow-y-auto">
      <Table {...args}>
        <THead>
          <TR>
            <TH>Name</TH>
            <TH>Role</TH>
            <TH>Department</TH>
            <TH align="right">Status</TH>
          </TR>
        </THead>
        <TBody>
          {[...people, ...people].map((person, i) => <TR key={\`\${person.id}-\${i}\`}>
              <TD>{person.name}</TD>
              <TD>{person.role}</TD>
              <TD>{person.department}</TD>
              <TD align="right">{person.status}</TD>
            </TR>)}
        </TBody>
      </Table>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    function SortableTable() {
      const [sortKey, setSortKey] = useState<string | null>('name');
      const [sortDir, setSortDir] = useState<SortDir>('asc');
      const sorted = [...people].sort((a, b) => {
        if (!sortKey || !sortDir) return 0;
        const key = sortKey as keyof Person;
        const cmp = String(a[key]).localeCompare(String(b[key]));
        return sortDir === 'asc' ? cmp : -cmp;
      });
      const onSortChange = (key: string, dir: SortDir) => {
        setSortKey(dir ? key : null);
        setSortDir(dir);
      };
      return <Table {...args}>
          <THead>
            <TR>
              <TH sortable sortDir={sortKey === 'name' ? sortDir : null} onSortChange={dir => onSortChange('name', dir)}>
                Name
              </TH>
              <TH sortable sortDir={sortKey === 'department' ? sortDir : null} onSortChange={dir => onSortChange('department', dir)}>
                Department
              </TH>
              <TH align="right">Status</TH>
            </TR>
          </THead>
          <TBody>
            {sorted.map(person => <TR key={person.id}>
                <TD>{person.name}</TD>
                <TD>{person.department}</TD>
                <TD align="right">{person.status}</TD>
              </TR>)}
          </TBody>
        </Table>;
    }
    return <SortableTable />;
  }
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'DataTable',
  render: args => <DataTable columns={columns} rows={people} rowKey={row => row.id} density={args.density} striped={args.striped} hoverable={args.hoverable} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'DataTable (sortable + row click)',
  render: args => {
    function SortableDataTable() {
      const [sortKey, setSortKey] = useState('name');
      const [sortDir, setSortDir] = useState<SortDir>('asc');
      const sorted = [...people].sort((a, b) => {
        if (!sortDir) return 0;
        const key = sortKey as keyof Person;
        const cmp = String(a[key]).localeCompare(String(b[key]));
        return sortDir === 'asc' ? cmp : -cmp;
      });
      return <DataTable columns={columns} rows={sorted} rowKey={row => row.id} density={args.density} striped={args.striped} hoverable={args.hoverable} sortKey={sortKey} sortDir={sortDir} onSortChange={(key, dir) => {
        setSortKey(key);
        setSortDir(dir);
      }} onRowClick={row => console.log(\`Clicked \${row.name}\`)} />;
    }
    return <SortableDataTable />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'DataTable (empty state)',
  render: args => <DataTable columns={columns} rows={[]} rowKey={row => row.id} density={args.density} striped={args.striped} hoverable={args.hoverable} empty="No employees match these filters." />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className / wrapperClassName',
  render: args => <Table {...args} wrapperClassName="border-brand-500 bg-bg-container" className="[&_thead]:bg-brand-20">
      <THead>
        <TR>
          <TH>Name</TH>
          <TH>Role</TH>
        </TR>
      </THead>
      <TBody>
        {people.slice(0, 3).map(person => <TR key={person.id}>
            <TD>{person.name}</TD>
            <TD>{person.role}</TD>
          </TR>)}
      </TBody>
    </Table>
}`,...z.parameters?.docs?.source}}},B=[`Primary`,`Striped`,`Compact`,`NoHover`,`StickyHeader`,`SortableColumns`,`DataTableBasic`,`DataTableSortable`,`DataTableEmpty`,`CustomClassName`]}));V();export{j as Compact,z as CustomClassName,I as DataTableBasic,R as DataTableEmpty,L as DataTableSortable,M as NoHover,k as Primary,P as SortableColumns,N as StickyHeader,A as Striped,B as __namedExportsOrder,O as default,V as n,C as t};