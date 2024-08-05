"use strict";(self.webpackChunkmolstar_clj=self.webpackChunkmolstar_clj||[]).push([[903,305],{26404:(e,a,t)=>{t.r(a),t.d(a,{ViewerModel:()=>ue,ViewerView:()=>pe});var o=t(95580),r=t(94234),l=t(85072),i=t.n(l),s=t(97825),n=t.n(s),d=t(77659),u=t.n(d),p=t(55056),c=t.n(p),m=t(10540),h=t.n(m),w=t(41113),v=t.n(w),y=t(74930),f={};f.styleTagTransform=v(),f.setAttributes=c(),f.insert=u().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=h(),i()(y.A,f),y.A&&y.A.locals&&y.A.locals;var S=t(12216),b=t(75258),g=t(69887),A=t(60272),D=t(23520),_=t(44552),B=t(38685),P=t(47257),V=t(51187),x=t(45926),C=t(32174),M=t(12898),k=t(73446),T=t(92243),j=t(90869),E=t(71060),L=t(28923),U=t(83076),F=t(79956),I=t(16736),R=t(46124),G=t(57365),z=t(68496),O=t(29173),$=t(31117),q=t(72159),W=t(8319),Y=t(79541),K=t(74207),X=t(66914),J=t(17e3),Z=t(80193),N=t(98884),Q=t(95423),H=t(42033),ee=t(55178),ae=t(78739),te=(t(60552),t(99487));const oe=[["g3d",A.cb]],re={volseg:N.p.Behavior(L.$i),backgrounds:N.p.Behavior(b.y),"dnatco-ntcs":N.p.Behavior(g.Y),"pdbe-structure-quality-report":N.p.Behavior(k._A),"assembly-symmetry":N.p.Behavior(j.R),"rcsb-validation-report":N.p.Behavior(T._),"anvil-membrane-orientation":N.p.Behavior(S.wC),g3d:N.p.Behavior(A.kO),"model-export":N.p.Behavior(P.o),"geo-export":N.p.Behavior(D.N),"ma-quality-assessment":N.p.Behavior(_.i9),"zenodo-import":N.p.Behavior(I.t),"sb-ncbr-partial-charges":N.p.Behavior(E.xK),"wwpdb-chemical-component-dictionary":N.p.Behavior(U.s),mvs:N.p.Behavior(V.h),tunnels:N.p.Behavior(E.Wv)},le={customFormats:oe,extensions:(0,te.mX)(re),disabledExtensions:[],layoutIsExpanded:!0,layoutShowControls:!0,layoutShowRemoteState:!0,layoutControlsDisplay:"reactive",layoutShowSequence:!0,layoutShowLog:!0,layoutShowLeftPanel:!0,collapseLeftPanel:!1,collapseRightPanel:!1,disableAntialiasing:Z.AB.General.DisableAntialiasing.defaultValue,pixelScale:Z.AB.General.PixelScale.defaultValue,pickScale:Z.AB.General.PickScale.defaultValue,transparency:Z.AB.General.Transparency.defaultValue,preferWebgl1:Z.AB.General.PreferWebGl1.defaultValue,allowMajorPerformanceCaveat:Z.AB.General.AllowMajorPerformanceCaveat.defaultValue,powerPreference:Z.AB.General.PowerPreference.defaultValue,viewportShowExpand:Z.AB.Viewport.ShowExpand.defaultValue,viewportShowControls:Z.AB.Viewport.ShowControls.defaultValue,viewportShowSettings:Z.AB.Viewport.ShowSettings.defaultValue,viewportShowSelectionMode:Z.AB.Viewport.ShowSelectionMode.defaultValue,viewportShowAnimation:Z.AB.Viewport.ShowAnimation.defaultValue,viewportShowTrajectoryControls:Z.AB.Viewport.ShowTrajectoryControls.defaultValue,pluginStateServer:Z.AB.State.DefaultServer.defaultValue,volumeStreamingServer:Z.AB.VolumeStreaming.DefaultServer.defaultValue,volumeStreamingDisabled:!Z.AB.VolumeStreaming.Enabled.defaultValue,pdbProvider:Z.AB.Download.DefaultPdbProvider.defaultValue,emdbProvider:Z.AB.Download.DefaultEmdbProvider.defaultValue,saccharideCompIdMapType:"default",volumesAndSegmentationsDefaultServer:L.wh.DefaultServer.defaultValue,rcsbAssemblySymmetryDefaultServerType:j.n.DefaultServerType.defaultValue,rcsbAssemblySymmetryDefaultServerUrl:j.n.DefaultServerUrl.defaultValue,rcsbAssemblySymmetryApplyColors:j.n.ApplyColors.defaultValue};class ie{constructor(e){this.plugin=e}static async create(e,a={}){var t,o;const r={};for(const e of Object.keys(a))void 0!==a[e]&&(r[e]=a[e]);const l={...le,...r},i=(0,X.w)(),s=new Set(null!==(t=l.disabledExtensions)&&void 0!==t?t:[]),n={actions:i.actions,behaviors:[...i.behaviors,...l.extensions.filter((e=>!s.has(e))).map((e=>re[e]))],animations:[...i.animations||[]],customParamEditors:i.customParamEditors,customFormats:null==l?void 0:l.customFormats,layout:{initial:{isExpanded:l.layoutIsExpanded,showControls:l.layoutShowControls,controlsDisplay:l.layoutControlsDisplay,regionState:{bottom:"full",left:l.collapseLeftPanel?"collapsed":"full",right:l.collapseRightPanel?"hidden":"full",top:"full"}}},components:{...i.components,controls:{...null===(o=i.components)||void 0===o?void 0:o.controls,top:l.layoutShowSequence?void 0:"none",bottom:l.layoutShowLog?void 0:"none",left:l.layoutShowLeftPanel?void 0:"none"},remoteState:l.layoutShowRemoteState?"default":"none"},config:[[Z.AB.General.DisableAntialiasing,l.disableAntialiasing],[Z.AB.General.PixelScale,l.pixelScale],[Z.AB.General.PickScale,l.pickScale],[Z.AB.General.Transparency,l.transparency],[Z.AB.General.PreferWebGl1,l.preferWebgl1],[Z.AB.General.AllowMajorPerformanceCaveat,l.allowMajorPerformanceCaveat],[Z.AB.General.PowerPreference,l.powerPreference],[Z.AB.Viewport.ShowExpand,l.viewportShowExpand],[Z.AB.Viewport.ShowControls,l.viewportShowControls],[Z.AB.Viewport.ShowSettings,l.viewportShowSettings],[Z.AB.Viewport.ShowSelectionMode,l.viewportShowSelectionMode],[Z.AB.Viewport.ShowAnimation,l.viewportShowAnimation],[Z.AB.Viewport.ShowTrajectoryControls,l.viewportShowTrajectoryControls],[Z.AB.State.DefaultServer,l.pluginStateServer],[Z.AB.State.CurrentServer,l.pluginStateServer],[Z.AB.VolumeStreaming.DefaultServer,l.volumeStreamingServer],[Z.AB.VolumeStreaming.Enabled,!l.volumeStreamingDisabled],[Z.AB.Download.DefaultPdbProvider,l.pdbProvider],[Z.AB.Download.DefaultEmdbProvider,l.emdbProvider],[Z.AB.Structure.DefaultRepresentationPreset,se.id],[Z.AB.Structure.SaccharideCompIdMapType,l.saccharideCompIdMapType],[L.wh.DefaultServer,l.volumesAndSegmentationsDefaultServer],[j.n.DefaultServerType,l.rcsbAssemblySymmetryDefaultServerType],[j.n.DefaultServerUrl,l.rcsbAssemblySymmetryDefaultServerUrl],[j.n.ApplyColors,l.rcsbAssemblySymmetryApplyColors]]},d="string"==typeof e?document.getElementById(e):e;if(!d)throw new Error(`Could not get element with id '${e}'`);const u=await(0,Y.y)({target:d,spec:n,render:K.$,onBeforeUIRender:e=>{e.builders.structure.representation.registerPreset(se)}});return new ie(u)}setRemoteSnapshot(e){const a=`${this.plugin.config.get(Z.AB.State.CurrentServer)}/get/${e}`;return J.a.State.Snapshots.Fetch(this.plugin,{url:a})}loadSnapshotFromUrl(e,a){return J.a.State.Snapshots.OpenUrl(this.plugin,{url:e,type:a})}loadStructureFromUrl(e,a="mmcif",t=!1,o){const r=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"url",params:{url:ee.V.Url(e),format:a,isBinary:t,label:null==o?void 0:o.label,options:{...r.source.params.options,representationParams:null==o?void 0:o.representationParams}}}}))}async loadAllModelsOrAssemblyFromUrl(e,a="mmcif",t=!1,o){const r=this.plugin,l=await r.builders.data.download({url:e,isBinary:t},{state:{isGhost:!0}}),i=await r.builders.structure.parseTrajectory(l,a);await this.plugin.builders.structure.hierarchy.applyPreset(i,"all-models",{useDefaultIfSingleModel:!0,representationPresetParams:null==o?void 0:o.representationParams})}async loadStructureFromData(e,a,t){const o=await this.plugin.builders.data.rawData({data:e,label:null==t?void 0:t.dataLabel}),r=await this.plugin.builders.structure.parseTrajectory(o,a);await this.plugin.builders.structure.hierarchy.applyPreset(r,"default")}loadPdb(e,a){const t=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin),o=this.plugin.config.get(Z.AB.Download.DefaultPdbProvider);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"pdb",params:{provider:{id:e,server:{name:o,params:G.PdbDownloadProvider[o].defaultValue}},options:{...t.source.params.options,representationParams:null==a?void 0:a.representationParams}}}}))}loadPdbDev(e){const a=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"pdb-dev",params:{provider:{id:e,encoding:"bcif"},options:a.source.params.options}}}))}loadEmdb(e,a){var t;const o=this.plugin.config.get(Z.AB.Download.DefaultEmdbProvider);return this.plugin.runTask(this.plugin.state.data.applyAction(z.DownloadDensity,{source:{name:"pdb-emd-ds",params:{provider:{id:e,server:o},detail:null!==(t=null==a?void 0:a.detail)&&void 0!==t?t:3}}}))}loadAlphaFoldDb(e){const a=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"alphafolddb",params:{id:e,options:{...a.source.params.options,representation:"preset-structure-representation-ma-quality-assessment-plddt"}}}}))}loadModelArchive(e){const a=G.DownloadStructure.createDefaultParams(this.plugin.state.data.root.obj,this.plugin);return this.plugin.runTask(this.plugin.state.data.applyAction(G.DownloadStructure,{source:{name:"modelarchive",params:{id:e,options:a.source.params.options}}}))}async loadVolumeFromUrl({url:e,format:a,isBinary:t},o,r){const l=this.plugin;if(!l.dataFormats.get(a))throw new Error(`Unknown density format: ${a}`);if(null==r?void 0:r.isLazy){const l=this.plugin.build();return l.toRoot().apply(q.f.Data.LazyVolume,{url:e,format:a,entryId:null==r?void 0:r.entryId,isBinary:t,isovalues:o.map((e=>({alpha:1,volumeIndex:0,...e})))}),l.commit()}return l.dataTransaction((async()=>{var i,s,n,d;const u=await l.builders.data.download({url:e,isBinary:t},{state:{isGhost:!0}}),p=await l.dataFormats.get(a).parse(l,u,{entryId:null==r?void 0:r.entryId}),c=p.volume||p.volumes[0];if(!(null==c?void 0:c.isOk))throw new Error("Failed to parse any volume.");const m=l.build();for(const e of o){const a=null!==(n=null===(i=p.volumes)||void 0===i?void 0:i[null!==(s=e.volumeIndex)&&void 0!==s?s:0])&&void 0!==n?n:p.volume,t=a.cell.obj.data;m.to(a).apply(q.f.Representation.VolumeRepresentation3D,(0,$.aK)(this.plugin,c.data,{type:"isosurface",typeParams:{alpha:null!==(d=e.alpha)&&void 0!==d?d:1,isoValue:R.f.adjustedIsoValue(t,e.value,e.type)},color:"uniform",colorParams:{value:e.color}}))}await m.commit()}))}loadFullResolutionEMDBMap(e,a){const t=this.plugin,o=parseInt(e.toUpperCase().replace("EMD-","")),r=`https://ftp.ebi.ac.uk/pub/databases/emdb/structures/EMD-${o}/map/emd_${o}.map.gz`;return t.dataTransaction((async()=>{var o,l,i;const s=await t.build().toRoot().apply(q.f.Data.Download,{url:r,isBinary:!0,label:e},{state:{isGhost:!0}}).apply(q.f.Data.DeflateData).commit(),n=await t.dataFormats.get("ccp4").parse(t,s,{entryId:e}),d=n.volume||n.volumes[0];if(!(null==d?void 0:d.isOk))throw new Error("Failed to parse any volume.");const u=null!==(l=null===(o=n.volumes)||void 0===o?void 0:o[0])&&void 0!==l?l:n.volume;await t.build().to(u).apply(q.f.Representation.VolumeRepresentation3D,(0,$.aK)(this.plugin,d.data,{type:"isosurface",typeParams:{alpha:1,isoValue:a.isoValue},color:"uniform",colorParams:{value:null!==(i=a.color)&&void 0!==i?i:(0,ae.Q1)(3390259)}})).commit()}))}async loadTrajectory(e){var a,t;const o=this.plugin;let r;if("model-data"===e.model.kind||"model-url"===e.model.kind){const t="model-data"===e.model.kind?await o.builders.data.rawData({data:e.model.data,label:e.modelLabel}):await o.builders.data.download({url:e.model.url,isBinary:e.model.isBinary,label:e.modelLabel}),l=await o.builders.structure.parseTrajectory(t,null!==(a=e.model.format)&&void 0!==a?a:"mmcif");r=await o.builders.structure.createModel(l)}else{const a="topology-data"===e.model.kind?await o.builders.data.rawData({data:e.model.data,label:e.modelLabel}):await o.builders.data.download({url:e.model.url,isBinary:e.model.isBinary,label:e.modelLabel}),t=o.dataFormats.get(e.model.format);r=await t.parse(o,a)}const l="coordinates-data"===e.coordinates.kind?await o.builders.data.rawData({data:e.coordinates.data,label:e.coordinatesLabel}):await o.builders.data.download({url:e.coordinates.url,isBinary:e.coordinates.isBinary,label:e.coordinatesLabel}),i=o.dataFormats.get(e.coordinates.format),s=await i.parse(o,l),n=await o.build().toRoot().apply(W.TrajectoryFromModelAndCoordinates,{modelRef:r.ref,coordinatesRef:s.ref},{dependsOn:[r.ref,s.ref]}).commit();return{model:r,coords:s,preset:await o.builders.structure.hierarchy.applyPreset(n,null!==(t=e.preset)&&void 0!==t?t:"default")}}async loadMvsFromUrl(e,a,t){if("mvsj"===a){const a=await this.plugin.runTask(this.plugin.fetch({url:e,type:"string"})),o=M.x.fromMVSJ(a);await(0,C.t)(this.plugin,o,{sanityChecks:!0,sourceUrl:e,...t})}else{if("mvsx"!==a)throw new Error(`Unknown MolViewSpec format: ${a}`);{const a=await this.plugin.runTask(this.plugin.fetch({url:e,type:"binary"}));await this.plugin.runTask(H.YZ.create("Load MVSX file",(async e=>{const o=await(0,x.Th)(this.plugin,e,a);await(0,C.t)(this.plugin,o.mvsData,{sanityChecks:!0,sourceUrl:o.sourceUrl,...t})})))}}}async loadMvsData(e,a,t){if("string"==typeof e&&e.startsWith("base64")&&(e=Uint8Array.from(atob(e.substring(7)),(e=>e.charCodeAt(0)))),"mvsj"===a){"string"!=typeof e&&(e=(new TextDecoder).decode(e));const a=M.x.fromMVSJ(e);await(0,C.t)(this.plugin,a,{sanityChecks:!0,sourceUrl:void 0,...t})}else{if("mvsx"!==a)throw new Error(`Unknown MolViewSpec format: ${a}`);if("string"==typeof e)throw new Error("loadMvsData: if `format` is 'mvsx', then `data` must be a Uint8Array or a base64-encoded string prefixed with 'base64,'.");await this.plugin.runTask(H.YZ.create("Load MVSX file",(async a=>{const o=await(0,x.Th)(this.plugin,a,e);await(0,C.t)(this.plugin,o.mvsData,{sanityChecks:!0,sourceUrl:o.sourceUrl,...t})})))}}handleResize(){this.plugin.layout.events.updated.next(void 0)}dispose(){this.plugin.dispose()}}const se=(0,O.n9)({id:"preset-structure-representation-viewer-auto",display:{name:"Automatic (w/ Annotation)",group:"Annotation",description:"Show standard automatic representation but colored by quality assessment (if available in the model)."},isApplicable:e=>!!e.data.models.some((e=>B.ue.isApplicable(e,"pLDDT")))||!!e.data.models.some((e=>B.ue.isApplicable(e,"qmean"))),params:()=>O.n9.CommonParams,async apply(e,a,t){var o;const r=Q.so.resolveAndCheck(t.state.data,e),l=null===(o=null==r?void 0:r.obj)||void 0===o?void 0:o.data;return r&&l?l.models.some((e=>B.ue.isApplicable(e,"pLDDT")))?await _.hx.apply(e,a,t):l.models.some((e=>B.ue.isApplicable(e,"qmean")))?await _.Pd.apply(e,a,t):l.models.some((e=>E.dI.isApplicable(e)))?await E.aF.apply(e,a,t):await O.Bj.auto.apply(e,a,t):{}}});F.Y,M.x,C.t,t(60530);class ne{constructor(e,a,t){this._model_views=new Map,this._handler_context=t||this,this._create_view=e,this._remove_view=a||function(e){e.remove()}}async update(e){for(let[a,t]of this._model_views)e.includes(a)||(this._remove_view.call(this._handler_context,t),this._model_views.delete(a));let a=[];for(let t of e)if(!this._model_views.has(t)){let e=await this._create_view.call(this._handler_context,t);a.push(e),this._model_views.set(t,e)}return a}remove(){for(let e of this._model_views.values())this._remove_view.call(this._handler_context,e);this._model_views.clear()}dispose(){this._model_views.clear()}}const de=t(95580);class ue extends o.DOMWidgetModel{defaults(){return{...super.defaults(),_model_name:"ViewerModel",_model_module:r.p,_model_module_version:r.e,_view_name:"ViewerView",_view_module:r.p,_view_module_version:r.e}}}ue.serializers={components:{deserialize:de.unpack_models},...o.DOMWidgetModel.serializers};class pe extends o.DOMWidgetView{constructor(){super(...arguments),this._focused=!1,this.isLeader=!1,this.in_components_changing=!1}initialize(e){super.initialize(e),this.componentViews=new ne(this.create_molstar_child_view,this.remove_molstar_child_view,this)}async render(){super.render(),this.displayed.then((()=>{this.el.classList.add("molstar-stage"),this.el.classList.add("jupyter-widgets"),this.el.setAttribute("data-jp-suppress-context-menu",""),this.viewer_container=document.createElement("div"),this.el.appendChild(this.viewer_container),ie.create(this.viewer_container,{layoutIsExpanded:!0,layoutShowControls:!1,layoutShowRemoteState:!1,layoutShowSequence:!0,layoutShowLog:!1,layoutShowLeftPanel:!0,viewportShowExpand:!0,viewportShowSelectionMode:!1,viewportShowAnimation:!1,pdbProvider:"rcsb",emdbProvider:"rcsb"}).then((e=>{this.viewer_obj=e,e.loadPdb("7bv2"),e.loadEmdb("EMD-30210",{detail:6})}))}))}processLuminoMessage(e){super.processLuminoMessage(e)}create_molstar_child_view(e){return this.create_child_view(e,{viewer_obj:this.viewer_obj})}remove_molstar_child_view(e){e.remove()}}},74930:(e,a,t)=>{t.d(a,{A:()=>s});var o=t(31601),r=t.n(o),l=t(76314),i=t.n(l)()(r());i.push([e.id,"/*.jupyter-widgets.molstar-viewer {\n  height: 480px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n\n.jupyter-widgets.molstar-viewer > div {\n  position: absolute !important;\n  x: 0;\n  y: 0;\n}\n*/\n",""]);const s=i}}]);