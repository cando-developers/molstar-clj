"use strict";(self.webpackChunkmolstar_clj=self.webpackChunkmolstar_clj||[]).push([[772],{3772:(e,t,i)=>{i.r(t),i.d(t,{ViewerModel:()=>M,ViewerView:()=>x});var s=i(5580),o=i(4234),r=i(5072),l=i.n(r),n=i(7825),a=i.n(n),d=i(7659),_=i.n(d),h=i(5056),c=i.n(h),w=i(540),v=i.n(w),m=i(1113),u=i.n(m),p=i(4930),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=_().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=v(),l()(p.A,f),p.A&&p.A.locals&&p.A.locals;var b=i(30);i(530);class y{constructor(e,t,i){this._model_views=new Map,this._handler_context=i||this,this._create_view=e,this._remove_view=t||function(e){e.remove()}}async update(e){for(let[t,i]of this._model_views)e.includes(t)||(this._remove_view.call(this._handler_context,i),this._model_views.delete(t));let t=[];for(let i of e)if(!this._model_views.has(i)){let e=await this._create_view.call(this._handler_context,i);t.push(e),this._model_views.set(i,e)}return t}remove(){for(let e of this._model_views.values())this._remove_view.call(this._handler_context,e);this._model_views.clear()}dispose(){this._model_views.clear()}}const g=i(5580);class M extends s.DOMWidgetModel{defaults(){return{...super.defaults(),_model_name:"ViewerModel",_model_module:o.p,_model_module_version:o.e,_view_name:"ViewerView",_view_module:o.p,_view_module_version:o.e}}}M.serializers={components:{deserialize:g.unpack_models},...s.DOMWidgetModel.serializers};class x extends s.DOMWidgetView{constructor(){super(...arguments),this._focused=!1,this.isLeader=!1,this.in_components_changing=!1}initialize(e){super.initialize(e),this.componentViews=new y(this.create_molstar_child_view,this.remove_molstar_child_view,this)}async render(){super.render(),this.displayed.then((()=>{this.el.classList.add("molstar-stage"),this.el.classList.add("jupyter-widgets"),this.el.setAttribute("data-jp-suppress-context-menu",""),this.viewer_container=document.createElement("div"),this.el.appendChild(this.viewer_container),b.jM.create(this.viewer_container,{layoutIsExpanded:!0,layoutShowControls:!1,layoutShowRemoteState:!1,layoutShowSequence:!0,layoutShowLog:!1,layoutShowLeftPanel:!0,viewportShowExpand:!0,viewportShowSelectionMode:!1,viewportShowAnimation:!1,pdbProvider:"rcsb",emdbProvider:"rcsb"}).then((e=>{this.viewer_obj=e,e.loadPdb("7bv2"),e.loadEmdb("EMD-30210",{detail:6})}))}))}processLuminoMessage(e){super.processLuminoMessage(e)}create_molstar_child_view(e){return this.create_child_view(e,{viewer_obj:this.viewer_obj})}remove_molstar_child_view(e){e.remove()}}},4930:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(1601),o=i.n(s),r=i(6314),l=i.n(r)()(o());l.push([e.id,"/*.jupyter-widgets.molstar-viewer {\n  height: 480px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.jupyter-widgets.molstar-viewer > div {\n  position: absolute !important;\n  x: 0;\n  y: 0;\n}\n*/\n",""]);const n=l}}]);