(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{520:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}},78:function(e,t,r){"use strict";var n=r(258),o=(r(259),r(260)),a=(r(261),function(e){var t={exports:{}};e(t,t.exports);var r=t.exports.__esModule&&t.exports.default||t.exports;return"function"==typeof r?r:function(){return n.createElement("div",{},"Code snippet should export a component!")}}(function(e,t){var n=r(520),o=r(10);t.__esModule=!0,t.default=function(){return m.default.createElement(u.FormProvider,null,m.default.createElement(u.default,{defaultValue:{aa:"123"},onSubmit:function(e){return alert(JSON.stringify(e))}},m.default.createElement(u.Field,{name:"aa",type:"string"}),m.default.createElement("button",{htmlType:"submit"},"内部提交")),m.default.createElement(u.FormConsumer,null,function(e){var t=e.submit;return m.default.createElement("button",{onClick:t},"外部提交")}))};var a=o(r(9)),m=n(r(0)),u=(o(r(2)),n(r(131)));(0,u.registerFormField)("string",(0,u.connect)()(function(e){return m.default.createElement("input",(0,a.default)({},e,{value:e.value||""}))}))})),m=function(){return n.createElement(n.Fragment,{},n.createElement("h1",{id:"formprovider",className:"react-demo-h1"},"FormProvider"),n.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),n.createElement("p",{className:"react-demo-p"},"用于表单的跨组件通讯提交重置状态同步等操作，它主要与FormConsumer一起使用"),n.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),n.createElement(o,{code:"import {FormProvider} from '@uform/react'\n",justCode:!0,lang:"javascript"}),n.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),n.createElement(o,{code:"import React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nimport SchemaForm, {\n  registerFormField,\n  Field,  \n  connect,\n  FormProvider,\n  FormConsumer\n} from '@uform/react'\n\nregisterFormField(\n  'string',\n  connect()(props => <input {...props} value={props.value || ''} />)\n)\n\nReactDOM.render(\n   <FormProvider>\n       <SchemaForm defaultValue={{aa:'123'}} onSubmit={values=>alert(JSON.stringify(values))}>\n         <Field name=\"aa\" type=\"string\"/>\n         <button htmlType=\"submit\">内部提交</button>\n       </SchemaForm>\n       <FormConsumer>\n         {({submit})=>(<button onClick={submit}>外部提交</button>)}\n       </FormConsumer>\n   </FormProvider>\n,document.getElementById)\n",justCode:!1,lang:"jsx"},n.createElement(a,{})))};m.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=m}}]);
//# sourceMappingURL=bundle.26.js.map