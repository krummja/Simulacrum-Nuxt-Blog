(window.webpackJsonp=window.webpackJsonp||[]).push([[26,14,15],{235:function(t,e){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var r=new Uint8Array(16);t.exports=function(){return o(r),r}}else{var n=new Array(16);t.exports=function(){for(var t,i=0;i<16;i++)0==(3&i)&&(t=4294967296*Math.random()),n[i]=t>>>((3&i)<<3)&255;return n}}},236:function(t,e){for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,r=o;return[r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]]].join("")}},237:function(t,e,o){var content=o(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("352958d8",content,!0,{sourceMap:!1})},241:function(t,e,o){"use strict";o.r(e);var r=o(247),n=o.n(r),c={props:{tagName:{type:String,default:""}},data:function(){return{uid:n()(),tagActive:!1}},methods:{toggleActiveState:function(){var t=document.getElementById(this.uid);!1===this.tagActive?(this.tagActive=!0,this.$store.commit("tags/add",this),this.refresh(),t.style.backgroundColor="rgba(115, 90, 140, 0.3)",t.style.color="rgba(115, 90, 140, 1)"):!0===this.tagActive&&(this.tagActive=!1,this.$store.commit("tags/remove",this),this.refresh(),t.style.backgroundColor="inherit",t.style.color="rgba(144, 144, 144, 1)")},refresh:function(){this.$nuxt.refresh()}}},d=(o(250),o(51)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tag-body flex flex-col",attrs:{id:t.uid},on:{click:function(e){return t.toggleActiveState()}}},[t._v("\n  "+t._s(t.tagName)+"\n")])}),[],!1,null,"1f5972b1",null);e.default=component.exports},244:function(t,e,o){var content=o(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("da9473b6",content,!0,{sourceMap:!1})},247:function(t,e,o){var r=o(248),n=o(249),c=n;c.v1=r,c.v4=n,t.exports=c},248:function(t,e,o){var r,n,c=o(235),d=o(236),l=0,f=0;t.exports=function(t,e,o){var i=e&&o||0,b=e||[],v=(t=t||{}).node||r,x=void 0!==t.clockseq?t.clockseq:n;if(null==v||null==x){var m=c();null==v&&(v=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==x&&(x=n=16383&(m[6]<<8|m[7]))}var h=void 0!==t.msecs?t.msecs:(new Date).getTime(),y=void 0!==t.nsecs?t.nsecs:f+1,dt=h-l+(y-f)/1e4;if(dt<0&&void 0===t.clockseq&&(x=x+1&16383),(dt<0||h>l)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=h,f=y,n=x;var w=(1e4*(268435455&(h+=122192928e5))+y)%4294967296;b[i++]=w>>>24&255,b[i++]=w>>>16&255,b[i++]=w>>>8&255,b[i++]=255&w;var k=h/4294967296*1e4&268435455;b[i++]=k>>>8&255,b[i++]=255&k,b[i++]=k>>>24&15|16,b[i++]=k>>>16&255,b[i++]=x>>>8|128,b[i++]=255&x;for(var j=0;j<6;++j)b[i+j]=v[j];return e||d(b)}},249:function(t,e,o){var r=o(235),n=o(236);t.exports=function(t,e,o){var i=e&&o||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var c=(t=t||{}).random||(t.rng||r)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,e)for(var d=0;d<16;++d)e[i+d]=c[d];return e||n(c)}},250:function(t,e,o){"use strict";o(237)},251:function(t,e,o){var r=o(30)(!1);r.push([t.i,'.page-enter-active[data-v-1f5972b1],.page-leave-active[data-v-1f5972b1]{transition:opacity .2s}.page-enter[data-v-1f5972b1],.page-leave-to[data-v-1f5972b1]{opacity:0}.todo[data-v-1f5972b1]{margin-right:10px;font-size:14pt;padding:.2rem;border-radius:3px;border:1px solid rgba(52,61,68,.1);background-color:rgba(200,90,0,.2);color:#c85a00}.orgtag[data-v-1f5972b1],.todo[data-v-1f5972b1]{font-weight:700;box-shadow:0 1px 2px rgba(52,61,68,.1)}.orgtag[data-v-1f5972b1]{float:right;padding:0 .3rem;margin:0 3px;border-radius:10px;border:1px solid rgba(52,61,68,.1);background-color:rgba(115,90,140,.4)}.orgtag[data-v-1f5972b1],.tag-body[data-v-1f5972b1]{font-size:12pt;text-transform:uppercase}.tag-body[data-v-1f5972b1]{margin:4px;padding:4px 6px;height:34px;border:1px solid rgba(52,61,68,.05);border-radius:6px;box-shadow:0 1px 2px rgba(52,61,68,.1);justify-content:center;text-align:center;font-family:"Raleway",sans-serif;color:#909090;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s ease-in-out 0s}.tag-body[data-v-1f5972b1]:hover{color:#735a8c;background-color:rgba(115,90,140,.3)}',""]),t.exports=r},254:function(t,e,o){"use strict";o.r(e);var r={components:{Tag:o(241).default},props:{tags:{type:Array,default:[]}}},n=(o(259),o(51)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tag-block flex flex-row flex-wrap"},t._l(t.tags,(function(t){return o("div",{key:t.slug},[o("Tag",{attrs:{"tag-name":t.title}})],1)})),0)}),[],!1,null,"75684080",null);e.default=component.exports;installComponents(component,{Tag:o(241).default})},259:function(t,e,o){"use strict";o(244)},260:function(t,e,o){var r=o(30)(!1);r.push([t.i,".page-enter-active[data-v-75684080],.page-leave-active[data-v-75684080]{transition:opacity .2s}.page-enter[data-v-75684080],.page-leave-to[data-v-75684080]{opacity:0}.todo[data-v-75684080]{margin-right:10px;font-size:14pt;padding:.2rem;border-radius:3px;border:1px solid rgba(52,61,68,.1);background-color:rgba(200,90,0,.2);color:#c85a00}.orgtag[data-v-75684080],.todo[data-v-75684080]{font-weight:700;box-shadow:0 1px 2px rgba(52,61,68,.1)}.orgtag[data-v-75684080]{float:right;font-size:12pt;text-transform:uppercase;padding:0 .3rem;margin:0 3px;border-radius:10px;border:1px solid rgba(52,61,68,.1);background-color:rgba(115,90,140,.4)}.tag-block[data-v-75684080]{grid-column-start:2;grid-column-end:8;height:auto}",""]),t.exports=r},295:function(t,e,o){var content=o(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("0123c88c",content,!0,{sourceMap:!1})},340:function(t,e,o){"use strict";o(295)},341:function(t,e,o){var r=o(30)(!1);r.push([t.i,'.page-enter-active[data-v-43623012],.page-leave-active[data-v-43623012]{transition:opacity .2s}.page-enter[data-v-43623012],.page-leave-to[data-v-43623012]{opacity:0}.todo[data-v-43623012]{margin-right:10px;font-size:14pt;padding:.2rem;border-radius:3px;border:1px solid rgba(52,61,68,.1);background-color:rgba(200,90,0,.2);color:#c85a00}.orgtag[data-v-43623012],.todo[data-v-43623012]{font-weight:700;box-shadow:0 1px 2px rgba(52,61,68,.1)}.orgtag[data-v-43623012]{float:right;font-size:12pt;text-transform:uppercase;padding:0 .3rem;margin:0 3px;border-radius:10px;border:1px solid rgba(52,61,68,.1);background-color:rgba(115,90,140,.4)}h1[data-v-43623012]{margin-top:40px;font-family:"Raleway",sans-serif;font-size:36pt;font-weight:700}h1[data-v-43623012],h4[data-v-43623012]{text-align:left}h4[data-v-43623012]{font-size:16pt}.description[data-v-43623012]{font-family:"Raleway",sans-serif;font-size:12pt;text-align:justify;margin-bottom:10px}.description[data-v-43623012],.notebook[data-v-43623012]{grid-column-start:2;grid-column-end:8}.notebook[data-v-43623012]{display:flex;flex-direction:column;justify-content:left;margin-top:2em}.notebook .note-project-wrapper[data-v-43623012]{display:flex;flex-direction:row}.notebook .note-project-wrapper .note-page[data-v-43623012]{display:flex;flex-direction:row;flex-grow:3;font-family:"Raleway",sans-serif;clear:both;padding:.5em 1em;border:1px solid rgba(52,61,68,.05);border-radius:6px;transition:all .4s ease-in-out 0s;box-shadow:0 1px 2px rgba(52,61,68,.1);justify-content:space-between}.notebook .note-project-wrapper .note-page h4[data-v-43623012]{flex-grow:1}.notebook .note-project-wrapper .note-page .metadata[data-v-43623012]{flex-shrink:1;position:relative;margin-top:5px;padding-top:5px;text-align:left;justify-content:space-between}.notebook .note-project-wrapper .note-page .metadata .date[data-v-43623012]{font-size:10pt;color:#909090}.notebook .note-project-wrapper .note-page .metadata .project[data-v-43623012]{font-size:11pt;font-weight:700;color:#735a8c}.notebook .note-project-wrapper .note-page[data-v-43623012]:hover{transform:scale(1.05) rotate(-1deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-font-smoothing:subpixel-antialiased;border-radius:0 0 6px 6px;box-shadow:0 10px 30px -10px rgba(0,0,0,.15)}',""]),t.exports=r},376:function(t,e,o){"use strict";o.r(e);o(32);var r=o(2),n={components:{TagBlock:o(254).default},layout:"default",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,c,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,r=t.params,n=t.store,e.next=3,o("tags",r.slug).only(["title"]).sortBy("createdAt").fetch();case 3:if(c=e.sent,!(n.state.tags.activeTags.length>0)){e.next=11;break}return e.next=7,o("notebook",r.slug).where({tags:{$contains:n.state.tags.activeTags}}).only(["title","createdAt","project","repo","slug"]).sortBy("createdAt").fetch();case 7:return d=e.sent,e.abrupt("return",{notebook:d,tags:c});case 11:return e.next=13,o("notebook",r.slug).only(["title","createdAt","project","repo","slug"]).sortBy("createdAt").fetch();case 13:return l=e.sent,e.abrupt("return",{notebook:l,tags:c});case 15:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric"})}}},c=(o(340),o(51)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout-grid"},[o("h1",{staticClass:"col-start-2 col-end-8"},[t._v("Jonathan's Notebook")]),t._v(" "),o("span",{staticClass:"description"},[t._v("\n    An assortment of notes in various states of refinement.\n  ")]),t._v(" "),o("TagBlock",{attrs:{tags:t.tags}}),t._v(" "),o("div",{staticClass:"notebook"},[o("ul",{staticClass:"note-list"},t._l(t.notebook,(function(e){return o("li",{key:e.slug,staticClass:"note-project-wrapper"},[o("NuxtLink",{staticClass:"note-page",attrs:{to:{name:"notebook-slug",params:{slug:e.slug}}}},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"metadata flex flex-row"},[o("span",{staticClass:"date"},[t._v(t._s(t.formatDate(e.createdAt)))]),t._v(" "),o("span",{staticClass:"project"},[t._v(t._s(e.project))])])])],1)})),0)])],1)}),[],!1,null,"43623012",null);e.default=component.exports;installComponents(component,{TagBlock:o(254).default})}}]);