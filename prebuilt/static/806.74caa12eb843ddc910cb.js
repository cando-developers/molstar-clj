"use strict";(self.webpackChunkmolstar_clj=self.webpackChunkmolstar_clj||[]).push([[806],{77806:(e,t,a)=>{a.r(t),a.d(t,{MODULE_NAME:()=>o.p,MODULE_VERSION:()=>o.e,MolViewer:()=>i.y,MolViewerFactory:()=>i.f,ViewerModel:()=>r.ViewerModel,ViewerView:()=>r.ViewerView});var o=a(94234),r=a(26404),i=a(59597)},59597:(e,t,a)=>{a.d(t,{f:()=>d,y:()=>n});var o=a(52607),r=a(39994),i=a(67262),s=a(35256);const l=a(383);class n extends s.Widget{constructor(e){super(),this.rendered=!1,this._ready=new i.PromiseDelegate,this.context=e,this.node.tabIndex=0,this.addClass("jp-MolViewer"),this.stage_obj=new l.Stage(this.node,{backgroundColor:"white"}),document.body.appendChild(this.stage_obj.tooltip),e.ready.then((()=>{this.isDisposed||this._render()}))}[o.Printing.symbol](){return()=>o.Printing.printWidget(this)}get ready(){return this._ready.promise}dispose(){super.dispose()}onUpdateRequest(e){!this.isDisposed&&this.context.isReady&&this._render()}onActivateRequest(e){this.node.focus()}onResize(e){this.stage_obj.setSize(Math.floor(e.width)+"px",Math.floor(e.height)+"px")}addElement(e){Object.assign(e.style,{position:"absolute",zIndex:10}),this.stage_obj.viewer.container.appendChild(e)}createElement(e,t,a){var o=document.createElement(e);return Object.assign(o,t),Object.assign(o.style,a),o}updateInfo(e,t){if(e.setSelection("/"+t),this.info.innerHTML='<dt style="font-weight: bold;">Title</dt><dd>'+e.structure.title+'</dd><dt style="font-weight: bold;">Index</dt><dd>'+t+"</dd>",e.structure.extraData.sdf&&e.structure.extraData.sdf[t]){var a=e.structure.extraData.sdf[t];for(const e in a)this.info.innerHTML+='<dt style="font-weight: bold;">'+e+"</dt><dd><div>"+a[e].join("</div><div>")+"</div></dd>"}}_render(){this.rendered||(this.rendered=!0,this.context.urlResolver.getDownloadUrl(this.context.path).then((e=>{this.stage_obj.loadFile(e).then((e=>{if(e.structure.modelStore.count>1){var t=this.createElement("input",{type:"range",value:0,min:0,max:e.structure.modelStore.count-1,step:1},{top:"12px",left:"12px"});this.info=this.createElement("dl",{},{top:"36px",left:"12px"}),t.oninput=t=>{this.updateInfo(e,t.target.value)},this.addElement(t),this.addElement(this.info),this.updateInfo(e,0)}this.context.path.match(/\.(mol2|sdf?)$/)?e.addRepresentation("ball+stick"):e.addRepresentation("ribbon",{colorScheme:"residueindex"}),e.autoView()}))})))}}class d extends r.ABCWidgetFactory{createNewWidget(e){const t=new n(e);return new r.DocumentWidget({content:t,context:e})}}},94234:(e,t,a)=>{a.d(t,{e:()=>r,p:()=>i});const o=a(8330),r=o.version,i=o.name},26404:(e,t,a)=>{a.r(t),a.d(t,{ViewerModel:()=>ue,ViewerView:()=>pe});var o=a(95580),r=a(94234),i=a(85072),s=a.n(i),l=a(97825),n=a.n(l),d=a(77659),u=a.n(d),p=a(55056),c=a.n(p),m=a(10540),h=a.n(m),w=a(41113),v=a.n(w),y=a(74930),f={};f.styleTagTransform=v(),f.setAttributes=c(),f.insert=u().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=h(),s()(y.A,f),y.A&&y.A.locals&&y.A.locals;var g=a(12216),b=a(75258),S=a(69887),A=a(60272),D=a(23520),_=a(44552),B=a(38685),x=a(47257),P=a(51187),V=a(45926),j=a(32174),M=a(12898),C=a(73446),E=a(92243),k=a(90869),T=a(71060),L=a(28923),I=a(83076),R=a(79956),U=a(16736),F=a(46124),G=a(57365),O=a(68496),W=a(29173),z=a(31117),q=a(72159),$=a(8319),N=a(79541),J=a(74207),Y=a(66914),K=a(17e3),X=a(80193),H=a(98884),Q=a(95423),Z=a(42033),ee=a(55178),te=a(78739),ae=(a(60552),a(99487));const oe=[["g3d",A.cb]],re={volseg:H.p.Behavior(L.$i),backgrounds:H.p.Behavior(b.y),"dnatco-ntcs":H.p.Behavior(S.Y),"pdbe-structure-quality-report":H.p.Behavior(C._A),"assembly-symmetry":H.p.Behavior(k.R),"rcsb-validation-report":H.p.Behavior(E._),"anvil-membrane-orientation":H.p.Behavior(g.wC),g3d:H.p.Behavior(A.kO),"model-export":H.p.Behavior(x.o),"geo-export":H.p.Behavior(D.N),"ma-quality-assessment":H.p.Behavior(_.i9),"zenodo-import":H.p.Behavior(U.t),"sb-ncbr-partial-charges":H.p.Behavior(T.xK),"wwpdb-chemical-component-dictionary":H.p.Behavior(I.s),mvs:H.p.Behavior(P.h),tunnels:H.p.Behavior(T.Wv)},ie={customFormats:oe,extensions:(0,ae.mX)(re),disabledExtensions:[],layoutIsExpanded:!0,layoutShowControls:!0,layoutShowRemoteState:!0,layoutControlsDisplay:"reactive",layoutShowSequence:!0,layoutShowLog:!0,layoutShowLeftPanel:!0,collapseLeftPanel:!1,collapseRightPanel:!1,disableAntialiasing:X.AB.General.DisableAntialiasing.defaultValue,pixelScale:X.AB.General.PixelScale.defaultValue,pickScale:X.AB.General.PickScale.defaultValue,transparency:X.AB.General.Transparency.defaultValue,preferWebgl1:X.AB.General.PreferWebGl1.defaultValue,allowMajorPerformanceCaveat:X.AB.General.AllowMajorPerformanceCaveat.defaultValue,powerPreference:X.AB.General.PowerPreference.defaultValue,viewportShowExpand:X.AB.Viewport.ShowExpand.defaultValue,viewportShowControls:X.AB.Viewport.ShowControls.defaultValue,viewportShowSettings:X.AB.Viewport.ShowSettings.defaultValue,viewportShowSelectionMode:X.AB.Viewport.ShowSelectionMode.defaultValue,viewportShowAnimation:X.AB.Viewport.ShowAnimation.defaultValue,viewportShowTrajectoryControls:X.AB.Viewport.ShowTrajectoryControls.defaultValue,pluginStateServer:X.AB.State.DefaultServer.defaultValue,volumeStreamingServer:X.AB.VolumeStreaming.DefaultServer.defaultValue,volumeStreamingDisabled:!X.AB.VolumeStreaming.Enabled.defaultValue,pdbProvider:X.AB.Download.DefaultPdbProvider.defaultValue,emdbProvider:X.AB.Download.DefaultEmdbProvider.defaultValue,saccharideCompIdMapType:"default",volumesAndSegmentationsDefaultServer:L.wh.DefaultServer.defaultValue,rcsbAssemblySymmetryDefaultServerType:k.n.DefaultServerType.defaultValue,rcsbAssemblySymmetryDefaultServerUrl:k.n.DefaultServerUrl.defaultValue,rcsbAssemblySymmetryApplyColors:k.n.ApplyColors.defaultValue};class se{constructor(e){this.plugin=e}static async create(e,t={}){var a,o;const r={};for(const e of Object.keys(t))void 0!==t[e]&&(r[e]=t[e]);const i={...ie,...r},s=(0,Y.w)(),l=new Set(null!==(a=i.disabledExtensions)&&void 0!==a?a:[]),n={actions:s.actions,behaviors:[...s.behaviors,...i.extensions.filter((e=>!l.has(e))).map((e=>re[e]))],animations:[...s.animations||[]],customParamEditors:s.customParamEditors,customFormats:null==i?void 0:i.customFormats,layout:{initial:{isExpanded:i.layoutIsExpanded,showControls:i.layoutShowControls,controlsDisplay:i.layoutControlsDisplay,regionState:{bottom:"full",left:i.collapseLeftPanel?"collapsed":"full",right:i.collapseRightPanel?"hidden":"full",top:"full"}}},components:{...s.components,controls:{...null===(o=s.components)||void 0===o?void 0:o.controls,top:i.layoutShowSequence?void 0:"none",bottom:i.layoutShowLog?void 0:"none",left:i.layoutShowLeftPanel?void 0:"none"},remoteState:i.layoutShowRemoteState?"default":"none"},config:[[X.AB.General.DisableAntialiasing,i.disableAntialiasing],[X.AB.General.PixelScale,i.pixelScale],[X.AB.General.PickScale,i.pickScale],[X.AB.General.Transparency,i.transparency],[X.AB.General.PreferWebGl1,i.preferWebgl1],[X.AB.General.AllowMajorPerformanceCaveat,i.allowMajorPerformanceCaveat],[X.AB.General.PowerPreference,i.powerPreference],[X.AB.Viewport.ShowExpand,i.viewportShowExpand],[X.AB.Viewport.ShowControls,i.viewportShowControls],[X.AB.Viewport.ShowSettings,i.viewportShowSettings],[X.AB.Viewport.ShowSelectionMode,i.viewportShowSelectionMode],[X.AB.Viewport.ShowAnimation,i.viewportShowAnimation],[X.AB.Viewport.ShowTrajectoryControls,i.viewportShowTrajectoryControls],[X.AB.State.DefaultServer,i.pluginStateServer],[X.AB.State.CurrentServer,i.pluginStateServer],[X.AB.VolumeStreaming.DefaultServer,i.volumeStreamingServer],[X.AB.VolumeStreaming.Enabled,!i.volumeStreamingDisabled],[X.AB.Download.DefaultPdbProvider,i.pdbProvider],[X.AB.Download.DefaultEmdbProvider,i.emdbProvider],[X.AB.Structure.DefaultRepresentationPreset,le.id],[X.AB.Structure.SaccharideCompIdMapType,i.saccharideCompIdMapType],[L.wh.DefaultServer,i.volumesAndSegmentationsDefaultServer],[k.n.DefaultServerType,i.rcsbAssemblySymmetryDefaultServerType],[k.n.DefaultServerUrl,i.rcsbAssemblySymmetryDefaultServerUrl],[k.n.ApplyColors,i.rcsbAssemblySymmetryApplyColors]]},d="string"==typeof e?document.getElementById(e):e;if(!d)throw new Error(`Could not get element with id '${e}'`);const u=await(0,N.y)({target:d,spec:n,render:J.$,onBeforeUIRender:e=>{e.builders.structure.representation.registerPreset(le)}});return new se(u)}setRemoteSnapshot(e){const t=`${this.plugin.config.get(X.AB.State.CurrentServer)}/get/${e}`;return K.a.State.Snapshots.Fetch(this.plugin,{url:t})}loadSnapshotFromUrl(e,t){return K.a.State.Snapshots.OpenUrl(this.plugin,{url:e,type:t})}loadStructureFromUrl(e,t="mmcif",a=!1,o){const r=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"url",params:{url:ee.V.Url(e),format:t,isBinary:a,label:null==o?void 0:o.label,options:{...r.source.params.options,representationParams:null==o?void 0:o.representationParams}}}}))}async loadAllModelsOrAssemblyFromUrl(e,t="mmcif",a=!1,o){const r=this.plugin,i=await r.builders.data.download({url:e,isBinary:a},{state:{isGhost:!0}}),s=await r.builders.structure.parseTrajectory(i,t);await this.plugin.builders.structure.hierarchy.applyPreset(s,"all-models",{useDefaultIfSingleModel:!0,representationPresetParams:null==o?void 0:o.representationParams})}async loadStructureFromData(e,t,a){const o=await this.plugin.builders.data.rawData({data:e,label:null==a?void 0:a.dataLabel}),r=await this.plugin.builders.structure.parseTrajectory(o,t);await this.plugin.builders.structure.hierarchy.applyPreset(r,"default")}loadPdb(e,t){const a=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin),o=this.plugin.config.get(X.AB.Download.DefaultPdbProvider);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"pdb",params:{provider:{id:e,server:{name:o,params:G.PdbDownloadProvider[o].defaultValue}},options:{...a.source.params.options,representationParams:null==t?void 0:t.representationParams}}}}))}loadPdbDev(e){const t=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"pdb-dev",params:{provider:{id:e,encoding:"bcif"},options:t.source.params.options}}}))}loadEmdb(e,t){var a;const o=this.plugin.config.get(X.AB.Download.DefaultEmdbProvider);return this.plugin.runTask(this.plugin.state.data.applyAction(O.DownloadDensity,{source:{name:"pdb-emd-ds",params:{provider:{id:e,server:o},detail:null!==(a=null==t?void 0:t.detail)&&void 0!==a?a:3}}}))}loadAlphaFoldDb(e){const t=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"alphafolddb",params:{id:e,options:{...t.source.params.options,representation:"preset-structure-representation-ma-quality-assessment-plddt"}}}}))}loadModelArchive(e){const t=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"modelarchive",params:{id:e,options:t.source.params.options}}}))}async loadVolumeFromUrl({url:e,format:t,isBinary:a},o,r){const i=this.plugin;if(!i.dataFormats.get(t))throw new Error(`Unknown density format: ${t}`);if(null==r?void 0:r.isLazy){const i=this.plugin.build();return i.toRoot().apply(q.f.Data.LazyVolume,{url:e,format:t,entryId:null==r?void 0:r.entryId,isBinary:a,isovalues:o.map((e=>({alpha:1,volumeIndex:0,...e})))}),i.commit()}return i.dataTransaction((async()=>{var s,l,n,d;const u=await i.builders.data.download({url:e,isBinary:a},{state:{isGhost:!0}}),p=await i.dataFormats.get(t).parse(i,u,{entryId:null==r?void 0:r.entryId}),c=p.volume||p.volumes[0];if(!(null==c?void 0:c.isOk))throw new Error("Failed to parse any volume.");const m=i.build();for(const e of o){const t=null!==(n=null===(s=p.volumes)||void 0===s?void 0:s[null!==(l=e.volumeIndex)&&void 0!==l?l:0])&&void 0!==n?n:p.volume,a=t.cell.obj.data;m.to(t).apply(q.f.Representation.VolumeRepresentation3D,(0,z.aK)(this.plugin,c.data,{type:"isosurface",typeParams:{alpha:null!==(d=e.alpha)&&void 0!==d?d:1,isoValue:F.f.adjustedIsoValue(a,e.value,e.type)},color:"uniform",colorParams:{value:e.color}}))}await m.commit()}))}loadFullResolutionEMDBMap(e,t){const a=this.plugin,o=parseInt(e.toUpperCase().replace("EMD-","")),r=`https://ftp.ebi.ac.uk/pub/databases/emdb/structures/EMD-${o}/map/emd_${o}.map.gz`;return a.dataTransaction((async()=>{var o,i,s;const l=await a.build().toRoot().apply(q.f.Data.Download,{url:r,isBinary:!0,label:e},{state:{isGhost:!0}}).apply(q.f.Data.DeflateData).commit(),n=await a.dataFormats.get("ccp4").parse(a,l,{entryId:e}),d=n.volume||n.volumes[0];if(!(null==d?void 0:d.isOk))throw new Error("Failed to parse any volume.");const u=null!==(i=null===(o=n.volumes)||void 0===o?void 0:o[0])&&void 0!==i?i:n.volume;await a.build().to(u).apply(q.f.Representation.VolumeRepresentation3D,(0,z.aK)(this.plugin,d.data,{type:"isosurface",typeParams:{alpha:1,isoValue:t.isoValue},color:"uniform",colorParams:{value:null!==(s=t.color)&&void 0!==s?s:(0,te.Q1)(3390259)}})).commit()}))}async loadTrajectory(e){var t,a;const o=this.plugin;let r;if("model-data"===e.model.kind||"model-url"===e.model.kind){const a="model-data"===e.model.kind?await o.builders.data.rawData({data:e.model.data,label:e.modelLabel}):await o.builders.data.download({url:e.model.url,isBinary:e.model.isBinary,label:e.modelLabel}),i=await o.builders.structure.parseTrajectory(a,null!==(t=e.model.format)&&void 0!==t?t:"mmcif");r=await o.builders.structure.createModel(i)}else{const t="topology-data"===e.model.kind?await o.builders.data.rawData({data:e.model.data,label:e.modelLabel}):await o.builders.data.download({url:e.model.url,isBinary:e.model.isBinary,label:e.modelLabel}),a=o.dataFormats.get(e.model.format);r=await a.parse(o,t)}const i="coordinates-data"===e.coordinates.kind?await o.builders.data.rawData({data:e.coordinates.data,label:e.coordinatesLabel}):await o.builders.data.download({url:e.coordinates.url,isBinary:e.coordinates.isBinary,label:e.coordinatesLabel}),s=o.dataFormats.get(e.coordinates.format),l=await s.parse(o,i),n=await o.build().toRoot().apply($.TrajectoryFromModelAndCoordinates,{modelRef:r.ref,coordinatesRef:l.ref},{dependsOn:[r.ref,l.ref]}).commit();return{model:r,coords:l,preset:await o.builders.structure.hierarchy.applyPreset(n,null!==(a=e.preset)&&void 0!==a?a:"default")}}async loadMvsFromUrl(e,t,a){if("mvsj"===t){const t=await this.plugin.runTask(this.plugin.fetch({url:e,type:"string"})),o=M.x.fromMVSJ(t);await(0,j.t)(this.plugin,o,{sanityChecks:!0,sourceUrl:e,...a})}else{if("mvsx"!==t)throw new Error(`Unknown MolViewSpec format: ${t}`);{const t=await this.plugin.runTask(this.plugin.fetch({url:e,type:"binary"}));await this.plugin.runTask(Z.YZ.create("Load MVSX file",(async e=>{const o=await(0,V.Th)(this.plugin,e,t);await(0,j.t)(this.plugin,o.mvsData,{sanityChecks:!0,sourceUrl:o.sourceUrl,...a})})))}}}async loadMvsData(e,t,a){if("string"==typeof e&&e.startsWith("base64")&&(e=Uint8Array.from(atob(e.substring(7)),(e=>e.charCodeAt(0)))),"mvsj"===t){"string"!=typeof e&&(e=(new TextDecoder).decode(e));const t=M.x.fromMVSJ(e);await(0,j.t)(this.plugin,t,{sanityChecks:!0,sourceUrl:void 0,...a})}else{if("mvsx"!==t)throw new Error(`Unknown MolViewSpec format: ${t}`);if("string"==typeof e)throw new Error("loadMvsData: if `format` is 'mvsx', then `data` must be a Uint8Array or a base64-encoded string prefixed with 'base64,'.");await this.plugin.runTask(Z.YZ.create("Load MVSX file",(async t=>{const o=await(0,V.Th)(this.plugin,t,e);await(0,j.t)(this.plugin,o.mvsData,{sanityChecks:!0,sourceUrl:o.sourceUrl,...a})})))}}handleResize(){this.plugin.layout.events.updated.next(void 0)}dispose(){this.plugin.dispose()}}const le=(0,W.n9)({id:"preset-structure-representation-viewer-auto",display:{name:"Automatic (w/ Annotation)",group:"Annotation",description:"Show standard automatic representation but colored by quality assessment (if available in the model)."},isApplicable:e=>!!e.data.models.some((e=>B.ue.isApplicable(e,"pLDDT")))||!!e.data.models.some((e=>B.ue.isApplicable(e,"qmean"))),params:()=>W.n9.CommonParams,async apply(e,t,a){var o;const r=Q.so.resolveAndCheck(a.state.data,e),i=null===(o=null==r?void 0:r.obj)||void 0===o?void 0:o.data;return r&&i?i.models.some((e=>B.ue.isApplicable(e,"pLDDT")))?await _.hx.apply(e,t,a):i.models.some((e=>B.ue.isApplicable(e,"qmean")))?await _.Pd.apply(e,t,a):i.models.some((e=>T.dI.isApplicable(e)))?await T.aF.apply(e,t,a):await W.Bj.auto.apply(e,t,a):{}}});R.Y,M.x,j.t,a(60530);class ne{constructor(e,t,a){this._model_views=new Map,this._handler_context=a||this,this._create_view=e,this._remove_view=t||function(e){e.remove()}}async update(e){for(let[t,a]of this._model_views)e.includes(t)||(this._remove_view.call(this._handler_context,a),this._model_views.delete(t));let t=[];for(let a of e)if(!this._model_views.has(a)){let e=await this._create_view.call(this._handler_context,a);t.push(e),this._model_views.set(a,e)}return t}remove(){for(let e of this._model_views.values())this._remove_view.call(this._handler_context,e);this._model_views.clear()}dispose(){this._model_views.clear()}}const de=a(95580);class ue extends o.DOMWidgetModel{defaults(){return{...super.defaults(),_model_name:"ViewerModel",_model_module:r.p,_model_module_version:r.e,_view_name:"ViewerView",_view_module:r.p,_view_module_version:r.e}}}ue.serializers={components:{deserialize:de.unpack_models},...o.DOMWidgetModel.serializers};class pe extends o.DOMWidgetView{constructor(){super(...arguments),this._focused=!1,this.isLeader=!1,this.in_components_changing=!1}initialize(e){super.initialize(e),this.componentViews=new ne(this.create_molstar_child_view,this.remove_molstar_child_view,this)}async render(){super.render(),this.displayed.then((()=>{this.el.classList.add("molstar-stage"),this.el.classList.add("jupyter-widgets"),this.el.setAttribute("data-jp-suppress-context-menu",""),this.viewer_container=document.createElement("div"),this.el.appendChild(this.viewer_container),se.create(this.viewer_container,{layoutIsExpanded:!0,layoutShowControls:!1,layoutShowRemoteState:!1,layoutShowSequence:!0,layoutShowLog:!1,layoutShowLeftPanel:!0,viewportShowExpand:!0,viewportShowSelectionMode:!1,viewportShowAnimation:!1,pdbProvider:"rcsb",emdbProvider:"rcsb"}).then((e=>{this.viewer_obj=e,e.loadPdb("7bv2"),e.loadEmdb("EMD-30210",{detail:6})}))}))}processLuminoMessage(e){super.processLuminoMessage(e)}create_molstar_child_view(e){return this.create_child_view(e,{viewer_obj:this.viewer_obj})}remove_molstar_child_view(e){e.remove()}}},74930:(e,t,a)=>{a.d(t,{A:()=>l});var o=a(31601),r=a.n(o),i=a(76314),s=a.n(i)()(r());s.push([e.id,"/*.jupyter-widgets.molstar-viewer {\n  height: 480px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.jupyter-widgets.molstar-viewer > div {\n  position: absolute !important;\n  x: 0;\n  y: 0;\n}\n*/\n",""]);const l=s},8330:e=>{e.exports=JSON.parse('{"name":"molstar-clj","version":"0.1.0","description":"A Mol* Widget for Common Lisp Jupyter","keywords":["molstar","jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["{dist}/**/*.{js,ts,map}","css/*.css","LICENSE.md"],"homepage":"https://github.com/cando-developers/molstar-clj","bugs":{"url":"https://github.com/cando-developers/molstar-clj/issues"},"license":"MIT","author":{"name":"Tarn W. Burton","email":"twburton@gmail.com"},"main":"dist/index.js","types":"./dist/index.d.ts","repository":{"type":"git","url":"https://github.com/cando-developers/molstar-clj"},"scripts":{"build":"tsc && jupyter-labextension build","lint":"eslint . --ext .ts --fix","lint-check":"eslint . --ext .ts","prepack":"yarn run build"},"dependencies":{"@jupyter-widgets/base":"^6.0.4","case":"^1.6.3","fp-ts":"^2.16.9","fs":"^0.0.1-security","molstar":"4.5.0","ngl":"2.3.1"},"devDependencies":{"@jupyterlab/application":"^4.0.1","@jupyterlab/builder":"^4.0.1","@types/node":"^20.2.5","@typescript-eslint/eslint-plugin":"^6.3.0","@typescript-eslint/parser":"^5.27.0","eslint":"^8.16.0","eslint-config-standard":"^17.0.0","eslint-plugin-import":"^2.22.0","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-promise":"^6.0.0","eslint-plugin-standard":"^5.0.0","lint-staged":"^13.0.3","typescript":"^5.1.3"},"jupyterlab":{"extension":"dist/plugin","outputDir":"prebuilt","sharedPackages":{"@jupyter-widgets/base":{"bundled":false,"singleton":true}}},"lint-staged":{"*.ts":["eslint . --ext .ts --fix"]},"prettier":{"singleQuote":true}}')}}]);