(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{267:function(e,r,t){var a={"./bash":174,"./bash.js":174,"./css":175,"./css.js":175,"./htmlbars":176,"./htmlbars.js":176,"./javascript":177,"./javascript.js":177,"./scss":178,"./scss.js":178,"./typescript":179,"./typescript.js":179};function s(e){var r=n(e);return t(r)}function n(e){if(!t.o(a,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=267},82:function(e,r,t){"use strict";var a=t(258),s=(t(259),t(260)),n=(t(261),function(){return a.createElement(a.Fragment,{},a.createElement("h1",{id:"registerformwrapper",className:"react-demo-h1"},"registerFormWrapper"),a.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),a.createElement("p",{className:"react-demo-p"},"注册一个表单包装组件，类似于HOC，先注册的组件层级深，后注册的组件层级浅"),a.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),a.createElement(s,{code:"type registerFormField(...wrappers : Wrapper)\n\ntype Wrapper(FormComponent : Function) : ReactComponent\n",justCode:!0,lang:"typescript"}),a.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),a.createElement(s,{code:"import {registerFormWrapper} from '@uform/react'\n",justCode:!0,lang:"javascript"}),a.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),a.createElement(s,{code:"import {registerFormWrapper} from '@uform/react'\n\nregisterFormWrapper((Form)=>{\n  return (props)=><div><Form {...props}/></div>\n})\n",justCode:!0,lang:"javascript"}))});n.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=n}}]);
//# sourceMappingURL=bundle.46.js.map