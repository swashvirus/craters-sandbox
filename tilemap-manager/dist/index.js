(()=>{var t={440:t=>{self,t.exports=(()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{AssetsManager:()=>r,Canvas2DRenderer:()=>s,EntityComponentSystem:()=>n,FontManager:()=>v,Input:()=>E,RenderLoop:()=>p,SoundManager:()=>y,Sprite:()=>x,Tile:()=>f,TilemapManager:()=>M,WebGLRenderer:()=>m,default:()=>N});var n={};t.r(n),t.d(n,{Component:()=>_,ComponentManager:()=>T,Entity:()=>F,EntityManager:()=>P,Query:()=>S,QueryManager:()=>L,System:()=>b,SystemManager:()=>D,World:()=>U});var i=function(t,e,n,i){return new(n||(n=Promise))((function(r,s){function a(t){try{h(i.next(t))}catch(t){s(t)}}function o(t){try{h(i.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};class r{loadText(t){return i(this,void 0,void 0,(function*(){return fetch(t).then((function(t){return t.text()}))}))}loadJson(t){return i(this,void 0,void 0,(function*(){return fetch(t).then((function(t){return t.json()}))}))}loadImage(t){return i(this,void 0,void 0,(function*(){return new Promise((function(e,n){var i=new Image;i.onload=function(){e(i)},i.onerror=n,i.src=t}))}))}loadFont(t,e){return i(this,void 0,void 0,(function*(){return new FontFace(t,e).load()}))}loadBinary(t){return i(this,void 0,void 0,(function*(){return fetch(t).then((function(t){return t.blob()}))}))}}class s{constructor(t,e,n,i=window.devicePixelRatio){this.width=t,this.height=e,this.canvasElement=document.createElement("canvas",n),this.context=this.canvasElement.getContext("2d"),this.devicePixelRatio=i,this.canvasElement.style.width=t+"px",this.canvasElement.style.height=e+"px",this.canvasElement.width=Math.round(t*i),this.canvasElement.height=Math.round(e*i),this.context.setTransform(i,0,0,i,0,0)}createImage(t){return t}drawImage(t,e=0,n=0,i=t.width,r=t.height,s=0,a=0,o=t.width,h=t.height){this.context.drawImage(t,e,n,i,r,s,a,o,h)}clear(t,e=0,n=0,i=this.width,r=this.height){t?(this.context.save(),this.context.fillStyle=t,this.context.fillRect(e,n,i,r),this.context.restore()):this.context.clearRect(e,n,i,r)}resize(t=this.width,e=this.height,n=this.devicePixelRatio){this.width=t,this.height=e,this.devicePixelRatio=n,this.canvasElement.style.width=t+"px",this.canvasElement.style.height=e+"px",this.canvasElement.width=Math.round(t*n),this.canvasElement.height=Math.round(e*n),this.context.setTransform(n,0,0,n,0,0)}}var a="undefined"!=typeof Float32Array?Float32Array:Array;function o(){var t=new a(16);return a!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function h(t,e,n){var i,r,s,a,o,h,c,u,d,l,m,f,g=n[0],v=n[1],E=n[2];return e===t?(t[12]=e[0]*g+e[4]*v+e[8]*E+e[12],t[13]=e[1]*g+e[5]*v+e[9]*E+e[13],t[14]=e[2]*g+e[6]*v+e[10]*E+e[14],t[15]=e[3]*g+e[7]*v+e[11]*E+e[15]):(i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],h=e[5],c=e[6],u=e[7],d=e[8],l=e[9],m=e[10],f=e[11],t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=o,t[5]=h,t[6]=c,t[7]=u,t[8]=d,t[9]=l,t[10]=m,t[11]=f,t[12]=i*g+o*v+d*E+e[12],t[13]=r*g+h*v+l*E+e[13],t[14]=s*g+c*v+m*E+e[14],t[15]=a*g+u*v+f*E+e[15]),t}function c(t,e,n){var i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var u,d=function(t,e,n,i,r,s,a){var o=1/(e-n),h=1/(i-r),c=1/(s-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*o,t[13]=(r+i)*h,t[14]=(a+s)*c,t[15]=1,t};function l(t,e,n){var i=new a(3);return i[0]=t,i[1]=e,i[2]=n,i}u=new a(3),a!=Float32Array&&(u[0]=0,u[1]=0,u[2]=0);class m{constructor(t,e,n,i=window.devicePixelRatio){this.width=t,this.height=e,this.canvasElement=document.createElement("canvas");var r=this.canvasElement.getContext("webgl");this.gl=r,this.devicePixelRatio=i,this.canvasElement.style.width=t+"px",this.canvasElement.style.height=e+"px",this.canvasElement.width=Math.round(t*i),this.canvasElement.height=Math.round(e*i),r.viewport(0,0,Math.round(t*i),Math.round(e*i));var s=r.createShader(r.VERTEX_SHADER);r.shaderSource(s,"\n\tattribute vec4 a_position;\n\tuniform mat4 u_matrix;\n\tuniform mat4 u_textureMatrix;\n\tvarying vec2 v_texcoord;\n\tvoid main() {\n\t\tgl_Position = u_matrix * a_position;\n\t\tv_texcoord = (u_textureMatrix * a_position).xy;\n\t}\n"),r.compileShader(s);var a=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(a,"\n\tprecision mediump float;\n\tvarying vec2 v_texcoord;\n\tuniform sampler2D u_texture;\n\tvoid main() {\n\t\tgl_FragColor = texture2D(u_texture, v_texcoord);\n\t}\n"),r.compileShader(a);var o=r.createProgram();r.attachShader(o,s),r.attachShader(o,a),r.linkProgram(o),r.useProgram(o),this.positionLocation=r.getAttribLocation(o,"a_position"),this.matrixLocation=r.getUniformLocation(o,"u_matrix"),this.textureMatrixLocation=r.getUniformLocation(o,"u_textureMatrix"),this.textureLocation=r.getUniformLocation(o,"u_texture");var h=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,h),r.bufferData(r.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,1]),r.STATIC_DRAW);var c=r.createBuffer();r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,c);var u=new Uint8Array([2,3,0,0,1,2]);r.bufferData(r.ELEMENT_ARRAY_BUFFER,u,r.STATIC_DRAW),this.n=u.length,r.bindBuffer(r.ARRAY_BUFFER,h),r.enableVertexAttribArray(this.positionLocation),r.vertexAttribPointer(this.positionLocation,2,r.FLOAT,!1,0,0),this.matrix=d(new Float32Array(16),0,t,e,0,-1,1)}createImage(t){var e=this.gl,n=e.createTexture(),i=t.width,r=t.height;return e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),{width:i,height:r,texture:n}}drawImage(t,e=0,n=0,i=t.width,r=t.height,s=0,a=0,u=t.width,d=t.height){var m=this.gl,f=this.matrix,{matrixLocation:g,textureMatrixLocation:v,textureLocation:E}=this;m.bindTexture(m.TEXTURE_2D,t.texture),f=h(o(),f,l(s,a,0)),f=c(o(),f,l(u,d,1)),m.uniformMatrix4fv(g,!1,f);var p=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}(o(),l(1/t.width,1/t.height,1));p=h(o(),p,l(e,n,0)),p=c(o(),p,l(i,r,1)),m.uniformMatrix4fv(v,!1,p),m.uniform1i(E,0),m.drawElements(m.TRIANGLES,this.n,m.UNSIGNED_BYTE,0)}resize(t=this.width,e=this.height,n=this.devicePixelRatio){this.width=t,this.height=e;var i=this.gl;this.devicePixelRatio=n,this.canvasElement.style.width=t+"px",this.canvasElement.style.height=e+"px",this.canvasElement.width=Math.round(t*n),this.canvasElement.height=Math.round(e*n),i.viewport(0,0,Math.round(t*n),Math.round(e*n)),this.matrix=d(new Float32Array(16),0,t,e,0,-1,1)}clear(t=[.1,.1,.1,1],e=0,n=0,i=this.width,r=this.height){var s=this.gl;s.disable(s.DEPTH_TEST),s.enable(s.BLEND),s.blendFunc(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.clearColor(...t),s.clear(s.COLOR_BUFFER_BIT)}}class f{constructor(t,e,n,i,r,a,o=[[0,0],[e.width,0],[e.width,e.height],[0,e.height]],h=e.width,c=e.height,u="no-repeat",d="rgba(25.5, 114.75, 114.75, 0)",l="rgba(229.5, 25.5, 25.5, 0)",m=2){this.canvas2DRenderer=t,this.sImage=e,this.sWidth=n,this.sHeight=i,this.dWidth=r,this.dHeight=a,this.positions=o,this.width=h,this.height=c,this.repeat=u,this.fillStyle=d,this.strokeStyle=l,this.lineWidth=m;{const t=new s(e.width,e.height,null,1),n=t.context;n.moveTo(o[0][0],o[0][1]),o.forEach((function(t){n.lineTo(t[0],t[1])})),n.lineTo(o[0][0],o[0][1]),n.clip(),n.fillStyle=d,n.strokeStyle=l,n.lineWidth=m,n.fill(),n.stroke(),n.drawImage(e,0,0,e.width,e.height,0,0,e.width,e.height);const i=n.createPattern(t.canvasElement,u);t.resize(h,c,1),n.fillStyle=i,n.fillRect(0,0,h,c),this.sImage=this.canvas2DRenderer.createImage(t.canvasElement)}}draw(t,e,n,i,r=this.sWidth,s=this.sHeight,a=this.dWidth,o=this.dHeight){this.canvas2DRenderer.drawImage(this.sImage,t,e,r,s,n,i,a,o)}}class g{constructor(t,e){this.fontMap=t,this.fontAtlas=e}draw(t,e,n){var i=0;Array.from(t).forEach((t=>{var r=t.charCodeAt(0);if(this.fontMap.has(r)){var s=this.fontMap.get(r),{width:a,height:o}=s;this.fontAtlas.draw(s.x,s.y,e+i,n,a,o,a,o),i+=a}}))}}class v{constructor(t,e,n="#fafafa",i="#fafafa",r=!0,s=!1){this.canvas2DRenderer=t,this.fontName=e,this.fill=r,this.stroke=s,this.fillStyle=n,this.strokeStyle=i}load(t){var e=new s(0,0,void 0,1),n=e.context;n.font=this.fontName;var i=new Map,r=1.2*parseInt(n.font,10),a=Array.from(t).filter((function(t,e,n){return n.indexOf(t)==e})).map((function(t){return{letter:t,measurement:n.measureText(t)}})),o=a.map((function(t){return t.measurement.width})).reduce((function(t,e){return t+e}));e.resize(o,r),a.forEach((t=>{var e=t.letter,s=t.measurement;n.textBaseline="top",n.font=this.fontName,n.fillStyle=this.fillStyle;var a=o-=s.width;n.fillText(e,a,0),i.set(e.charCodeAt(0),{width:s.width,height:r,x:a,y:0})}));var h=new f(this.canvas2DRenderer,e.canvasElement,e.width,e.height,e.width,e.height);return new g(i,h)}}class E{constructor(){this.bindings=new Map,this.pressed=new Map,this.bindKeys()}bind(t,e){this.bindings.set(t,e),this.pressed.set(e,0)}bindKeys(){document.addEventListener("keyup",this.keyup.bind(this),!1),document.addEventListener("keydown",this.keydown.bind(this),!1)}unbindKeys(){document.removeEventListener("keyup",this.keyup.bind(this),!1),document.removeEventListener("keydown",this.keydown.bind(this),!1)}keyup(t){var e=t.key;if(this.bindings.has(e)){var n=this.bindings.get(e);this.pressed.has(n)&&this.pressed.set(n,0)}}keydown(t){var e=t.key;if(this.bindings.has(e)){var n=this.bindings.get(e);this.pressed.has(n)&&this.pressed.set(n,2)}}isPressed(t){if(this.pressed.has(t)){var e=this.pressed.get(t);if(e)return 2===e&&this.pressed.set(t,1),e}return 0}}E.KEY={BREAK:"3",BACKSPACE:"8",TAB:"9",CLEAR:"12",ENTER:"13",SHIFT:"16",CTRL:"17",ALT:"18",PAUSE:"19",CAPS_LOCK:"20",SPACEBAR:"32",PAGE_UP:"33",PAGE_DOWN:"34",LEFT_ARROW:"37",UP_ARROW:"38",RIGHT_ARROW:"39",DOWN_ARROW:"40",HELP:"47",ZERO:"48",ONE:"49",TWO:"50",THREE:"51",FOUR:"52",FIVE:"53",SIX:"54",SEVEN:"55",EIGHT:"56",NINE:"57",A:"65",B:"66",C:"67",D:"68",E:"69",F:"70",G:"71",H:"72",I:"73",J:"74",K:"75",L:"76",M:"77",N:"78",O:"79",P:"80",Q:"81",R:"82",S:"83",T:"84",U:"85",V:"86",W:"87",X:"88",Y:"89",Z:"90",NUMPAD_ZERO:"96",NUMPAD_ONE:"97",NUMPAD_TWO:"98",NUMPAD_THREE:"99",NUMPAD_FOUR:"100",NUMPAD_FIVE:"101",NUMPAD_SIX:"102",NUMPAD_SEVEN:"103",NUMPAD_EIGHT:"104",NUMPAD_NINE:"105",F1:"112",F2:"113",F3:"114",F4:"115",F5:"116",F6:"117",F7:"118",F8:"119",F9:"120",F10:"121",F11:"122",F12:"123",F13:"124",F14:"125",F15:"126",F16:"127",F17:"128",F18:"129",F19:"130",F20:"131",F21:"132",F22:"133",F23:"134",F24:"135",F25:"136",F26:"137",F27:"138",F28:"139",F29:"140",F30:"141",F31:"142",F32:"143",DECREASE_VOLUME:"174",INCREASE_VOLUME:"175",NEXT:"176",PREVIOUS:"177",STOP:"178",PLAY_PAUSE:"179"};class p{constructor(t,e=60){this.index=0,this.delta=0,this.elapsed=0,this.frameRate=e,this.frameRatio=1e3/e,this.current=0,this.previous=window.performance.now(),this.execute=t,this.start()}start(){const t=()=>{this.index=requestAnimationFrame(t),this.current=window.performance.now(),this.delta=this.current-this.previous,this.elapsed+=this.delta,this.current<this.previous+this.frameRatio||(this.previous=this.current,this.execute(this))};t()}stop(){cancelAnimationFrame(this.index)}}class w{constructor(t,e){const n=t.createBufferSource();n.buffer=e;const i=t.createGain();n.connect(i),i.connect(t.destination),this.source=n,this.gainNode=i}play(){this.source.start()}pause(){}resume(){}getVolume(){return this.gainNode.gain.value}setVolume(t){this.gainNode.gain.value=t}stop(){this.source.stop()}}class y{constructor(){this.audioContext=new AudioContext,this.unlockAudioContext()}unlockAudioContext(){if("suspended"!==this.audioContext.state)return;const t=()=>{document.removeEventListener("touchstart",t,!1),document.removeEventListener("mousedown",t,!1),document.removeEventListener("keydown",t,!1),this.audioContext.resume()};document.addEventListener("touchstart",t,!1),document.addEventListener("mousedown",t,!1),document.addEventListener("keydown",t,!1)}load(t){const e=new Request(t);return fetch(e).then((function(t){return t.arrayBuffer()})).then((t=>new Promise((e=>{this.audioContext.decodeAudioData(t,(t=>{e(new w(this.audioContext,t))}))}))))}}class x{constructor(t,e,n,i,r,s,a,o){this.frames=[],this.index=[],this.frames=[],this.index=[],this.renderer=t,this.image=e,this.sWidth=n,this.sHeight=i,this.frames=r,this.duration=s,this.dWidth=a,this.dHeight=o;const h=new f(t,e,n,i,a,o);this.grid=new Array(e.height/i).fill(0).map((function(){return new Array(e.width/n).fill(0).map((function(){return{tile:null,width:n,height:i,position:null,positions:null}}))})).map((function(t,e){return t.map((function(t,n){return t.position={x:n*t.width,y:e*t.height},t.positions=[{x:0,y:0},{x:t.width,y:0},{x:t.width,y:t.height},{x:0,y:t.height}],t.tile=h,t}))}))}draw(t,e,n,i){this.index=i||this.frames[Math.floor(n.elapsed/1e3/this.duration)%this.frames.length];const r=this.grid[this.index[0]][this.index[1]],{x:s,y:a}=r.position;r.tile.draw(s,a,t,e)}}var A=function(t,e,n,i){return new(n||(n=Promise))((function(r,s){function a(t){try{h(i.next(t))}catch(t){s(t)}}function o(t){try{h(i.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,o)}h((i=i.apply(t,e||[])).next())}))};class R{constructor(t){this.tilemap=t}draw(){this.tilemap.layers.forEach((t=>{t.data.forEach((t=>{var[e,n,i,r,s]=t,{sprite:a,tilewidth:o,tileheight:h}=this.tilemap.tilesets[s];a.draw(i*o,r*h,null,[n,e])}))}))}}class M{constructor(t){this.canvas2DRenderer=t}load(t){return A(this,void 0,void 0,(function*(){const e=new Request(t);return fetch(e).then((function(t){return t.json()})).then((t=>A(this,void 0,void 0,(function*(){return t.tilesets=yield Promise.all(t.tilesets.map((t=>A(this,void 0,void 0,(function*(){return new Promise(((e,n)=>{var i=new Image;i.onload=()=>{t.sprite=new x(this.canvas2DRenderer,i,t.tilewidth,t.tileheight,[],0,t.tilewidth,t.tileheight),e(t)},i.onerror=n,i.src=t.image}))}))))),new R(t)}))))}))}}class _{constructor(t){Array.from(Object.keys(this.constructor.schema)).forEach((e=>{t.hasOwnProperty(e)&&(this[e]=t[e])}))}}class T{constructor(){this.components=new Map}}class F{constructor(){this.componentManager=new T}}class P{constructor(){this.entities=new Set}}class S{constructor(){this.componentManager=new T,this.entityManager=new P}}class L{constructor(){this.queries=new Map}}class b{constructor(){this.queryManager=new L}execute(){}}b.queryManager=new L;class D{constructor(){this.systems=new Set}}class U{constructor(){this.systemManager=new D,this.entityManager=new P,this.componentManager=new T}registerEntity(t){this.systemManager.systems.forEach((e=>{Array.from(e.constructor.queryManager.queries.keys()).forEach((n=>{Array.from(e.queryManager.queries.get(n).componentManager.components.keys()).forEach((i=>{t.componentManager.components.has(i)&&!1===e.queryManager.queries.get(n).entityManager.entities.has(t)&&e.queryManager.queries.get(n).entityManager.entities.add(t)}))}))}))}unregisterEntity(t){this.systemManager.systems.forEach((e=>{Array.from(e.constructor.queryManager.queries.keys()).forEach((n=>{Array.from(e.queryManager.queries.get(n).componentManager.components.keys()).forEach((i=>{t.componentManager.components.has(i)&&!0===e.queryManager.queries.get(n).entityManager.entities.has(t)&&e.queryManager.queries.get(n).entityManager.entities.delete(t)}))}))}))}execute(){this.systemManager.systems.forEach((t=>{t.execute()}))}}const N={AssetsManager:r,Canvas2DRenderer:s,WebGLRenderer:m,FontManager:v,Tile:f,Input:E,RenderLoop:p,SoundManager:y,Sprite:x,TilemapManager:M,EntityComponentSystem:n};return e})()}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(440),e=n.n(t);!async function(){const t=new(e().WebGLRenderer)(800,668),n=new(e().TilemapManager)(t),i=await n.load("./assets/tilemap.json");new(e().RenderLoop)((function(e){t.clear(),i.draw()})),document.body.append(t.canvasElement)}()})()})();