(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="173",pr={ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ch=0,tc=1,Fh=2,Wl=1,Rh=2,Zn=3,_i=0,Qt=1,Kn=2,mi=0,mr=1,nc=2,ic=3,rc=4,Ph=5,Li=100,Nh=101,Lh=102,Ih=103,Uh=104,Bh=200,Oh=201,zh=202,Hh=203,xo=204,yo=205,Vh=206,Gh=207,kh=208,Wh=209,Xh=210,qh=211,Yh=212,$h=213,Zh=214,Mo=0,Do=1,So=2,Er=3,Ao=4,wo=5,bo=6,To=7,Xl=0,Kh=1,jh=2,gi=0,Jh=1,Qh=2,ed=3,td=4,nd=5,id=6,rd=7,ql=300,xr=301,yr=302,Co=303,Fo=304,ma=306,Ro=1e3,Bi=1001,Po=1002,Tn=1003,sd=1004,ms=1005,Ln=1006,Ua=1007,Oi=1008,ti=1009,Yl=1010,$l=1011,qr=1012,yu=1013,Hi=1014,jn=1015,Qr=1016,Mu=1017,Du=1018,Mr=1020,Zl=35902,Kl=1021,jl=1022,bn=1023,Jl=1024,Ql=1025,gr=1026,Dr=1027,ef=1028,Su=1029,tf=1030,Au=1031,wu=1033,Gs=33776,ks=33777,Ws=33778,Xs=33779,No=35840,Lo=35841,Io=35842,Uo=35843,Bo=36196,Oo=37492,zo=37496,Ho=37808,Vo=37809,Go=37810,ko=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,$o=37816,Zo=37817,Ko=37818,jo=37819,Jo=37820,Qo=37821,qs=36492,eu=36494,tu=36495,nf=36283,nu=36284,iu=36285,ru=36286,ad=3200,od=3201,ud=0,cd=1,di="",gn="srgb",Sr="srgb-linear",js="linear",lt="srgb",Yi=7680,sc=519,ld=512,fd=513,hd=514,rf=515,dd=516,pd=517,md=518,gd=519,ac=35044,oc="300 es",Jn=2e3,Js=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,su=180/Math.PI;function es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function _d(n,e){return(n%e+e)%e}function Ba(n,e,t){return(1-t)*n+t*e}function Or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vd={DEG2RAD:Ys};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,a,o,u,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,c)}set(e,t,i,r,s,a,o,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=s,l[5]=u,l[6]=i,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],u=i[6],c=i[1],l=i[4],f=i[7],d=i[2],m=i[5],_=i[8],h=r[0],g=r[3],p=r[6],A=r[1],v=r[4],E=r[7],y=r[2],x=r[5],w=r[8];return s[0]=a*h+o*A+u*y,s[3]=a*g+o*v+u*x,s[6]=a*p+o*E+u*w,s[1]=c*h+l*A+f*y,s[4]=c*g+l*v+f*x,s[7]=c*p+l*E+f*w,s[2]=d*h+m*A+_*y,s[5]=d*g+m*v+_*x,s[8]=d*p+m*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-i*s*l+i*o*u+r*s*c-r*a*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],l=e[8],f=l*a-o*c,d=o*u-l*s,m=c*s-a*u,_=t*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=f*h,e[1]=(r*c-l*i)*h,e[2]=(o*i-r*a)*h,e[3]=d*h,e[4]=(l*t-r*u)*h,e[5]=(r*s-o*t)*h,e[6]=m*h,e[7]=(i*u-c*t)*h,e[8]=(a*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const u=Math.cos(s),c=Math.sin(s);return this.set(i*u,i*c,-i*(u*a+c*o)+a+e,-r*c,r*u,-r*(-c*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new $e;function sf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ed(){const n=Qs("canvas");return n.style.display="block",n}const uc={};function fr(n){n in uc||(uc[n]=!0,console.warn(n))}function xd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function yd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Md(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const cc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){const n={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?js:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sr]:{primaries:e,whitePoint:i,transfer:js,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}const rt=Dd();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class Sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=Qs("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$i}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ei(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class af{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(za(r[a].image)):s.push(za(r[a]))}else s=za(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class en extends ki{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=Bi,r=Bi,s=Ln,a=Oi,o=bn,u=ti,c=en.DEFAULT_ANISOTROPY,l=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=es(),this.name="",this.source=new af(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=u,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=ql;en.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const u=e.elements,c=u[0],l=u[4],f=u[8],d=u[1],m=u[5],_=u[9],h=u[2],g=u[6],p=u[10];if(Math.abs(l-d)<.01&&Math.abs(f-h)<.01&&Math.abs(_-g)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+h)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,y=(p+1)/2,x=(l+d)/4,w=(f+h)/4,T=(_+g)/4;return v>E&&v>y?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=x/i,s=w/i):E>y?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=x/r,s=T/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=w/s,r=T/s),this.set(i,r,s,t),this}let A=Math.sqrt((g-_)*(g-_)+(f-h)*(f-h)+(d-l)*(d-l));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(f-h)/A,this.z=(d-l)/A,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new af(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends bd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class of extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let u=i[r+0],c=i[r+1],l=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],h=s[a+3];if(o===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=h;return}if(f!==h||u!==d||c!==m||l!==_){let g=1-o;const p=u*d+c*m+l*_+f*h,A=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const y=Math.sqrt(v),x=Math.atan2(y,p*A);g=Math.sin(g*x)/y,o=Math.sin(o*x)/y}const E=o*A;if(u=u*g+d*E,c=c*g+m*E,l=l*g+_*E,f=f*g+h*E,g===1-o){const y=1/Math.sqrt(u*u+c*c+l*l+f*f);u*=y,c*=y,l*=y,f*=y}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],u=i[r+1],c=i[r+2],l=i[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+l*f+u*m-c*d,e[t+1]=u*_+l*d+c*f-o*m,e[t+2]=c*_+l*m+o*d-u*f,e[t+3]=l*_-o*f-u*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,u=Math.sin,c=o(i/2),l=o(r/2),f=o(s/2),d=u(i/2),m=u(r/2),_=u(s/2);switch(a){case"XYZ":this._x=d*l*f+c*m*_,this._y=c*m*f-d*l*_,this._z=c*l*_+d*m*f,this._w=c*l*f-d*m*_;break;case"YXZ":this._x=d*l*f+c*m*_,this._y=c*m*f-d*l*_,this._z=c*l*_-d*m*f,this._w=c*l*f+d*m*_;break;case"ZXY":this._x=d*l*f-c*m*_,this._y=c*m*f+d*l*_,this._z=c*l*_+d*m*f,this._w=c*l*f-d*m*_;break;case"ZYX":this._x=d*l*f-c*m*_,this._y=c*m*f+d*l*_,this._z=c*l*_-d*m*f,this._w=c*l*f+d*m*_;break;case"YZX":this._x=d*l*f+c*m*_,this._y=c*m*f+d*l*_,this._z=c*l*_-d*m*f,this._w=c*l*f-d*m*_;break;case"XZY":this._x=d*l*f-c*m*_,this._y=c*m*f-d*l*_,this._z=c*l*_+d*m*f,this._w=c*l*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],u=t[9],c=t[2],l=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(l-u)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(l-u)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(u+l)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(u+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,u=t._y,c=t._z,l=t._w;return this._x=i*l+a*o+r*c-s*u,this._y=r*l+a*u+s*o-i*c,this._z=s*l+a*c+i*u-r*o,this._w=a*l-i*o-r*u-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const u=1-o*o;if(u<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(u),l=Math.atan2(c,o),f=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,u=e.w,c=2*(a*r-o*i),l=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+u*c+a*f-o*l,this.y=i+u*l+o*c-s*f,this.z=r+u*f+s*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*a-i*u,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new Z,fc=new Gi;class ts{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),_s.subVectors(this.max,zr),Zi.subVectors(e.a,zr),Ki.subVectors(e.b,zr),ji.subVectors(e.c,zr),ri.subVectors(Ki,Zi),si.subVectors(ji,Ki),Ai.subVectors(Zi,ji);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ai.z,Ai.y,ri.z,0,-ri.x,si.z,0,-si.x,Ai.z,0,-Ai.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ai.y,Ai.x,0];return!Va(t,Zi,Ki,ji,_s)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Zi,Ki,ji,_s))?!1:(vs.crossVectors(ri,si),t=[vs.x,vs.y,vs.z],Va(t,Zi,Ki,ji,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Mn=new Z,gs=new ts,Zi=new Z,Ki=new Z,ji=new Z,ri=new Z,si=new Z,Ai=new Z,zr=new Z,_s=new Z,vs=new Z,wi=new Z;function Va(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wi.fromArray(n,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),u=e.dot(wi),c=t.dot(wi),l=i.dot(wi);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>o)return!1}return!0}const Cd=new ts,Hr=new Z,Ga=new Z;class ga{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Ga)),this.expandByPoint(Hr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new Z,ka=new Z,Es=new Z,ai=new Z,Wa=new Z,xs=new Z,Xa=new Z;class bu{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ka.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ka);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Es),o=ai.dot(this.direction),u=-ai.dot(Es),c=ai.lengthSq(),l=Math.abs(1-a*a);let f,d,m,_;if(l>0)if(f=a*u-o,d=a*o-u,_=s*l,f>=0)if(d>=-_)if(d<=_){const h=1/l;f*=h,d*=h,m=f*(f+a*d+2*o)+d*(a*f+d+2*u)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*u)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*u)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-u),s),m=-f*f+d*(d+2*u)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-u),s),m=d*(d+2*u)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-u),s),m=-f*f+d*(d+2*u)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ka).addScaledVector(Es,d),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,u=i+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,u;const c=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(s=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(s=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,u=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,u=(e.min.z-d.z)*f),i>u||o>r)||((o>i||i!==i)&&(i=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,s){Wa.subVectors(t,e),xs.subVectors(i,e),Xa.crossVectors(Wa,xs);let a=this.direction.dot(Xa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const u=o*this.direction.dot(xs.crossVectors(ai,xs));if(u<0)return null;const c=o*this.direction.dot(Wa.cross(ai));if(c<0||u+c>a)return null;const l=-o*ai.dot(Xa);return l<0?null:this.at(l/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,s,a,o,u,c,l,f,d,m,_,h,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,u,c,l,f,d,m,_,h,g)}set(e,t,i,r,s,a,o,u,c,l,f,d,m,_,h,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=u,p[2]=c,p[6]=l,p[10]=f,p[14]=d,p[3]=m,p[7]=_,p[11]=h,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),u=Math.cos(r),c=Math.sin(r),l=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*l,m=a*f,_=o*l,h=o*f;t[0]=u*l,t[4]=-u*f,t[8]=c,t[1]=m+_*c,t[5]=d-h*c,t[9]=-o*u,t[2]=h-d*c,t[6]=_+m*c,t[10]=a*u}else if(e.order==="YXZ"){const d=u*l,m=u*f,_=c*l,h=c*f;t[0]=d+h*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*l,t[9]=-o,t[2]=m*o-_,t[6]=h+d*o,t[10]=a*u}else if(e.order==="ZXY"){const d=u*l,m=u*f,_=c*l,h=c*f;t[0]=d-h*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*l,t[9]=h-d*o,t[2]=-a*c,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const d=a*l,m=a*f,_=o*l,h=o*f;t[0]=u*l,t[4]=_*c-m,t[8]=d*c+h,t[1]=u*f,t[5]=h*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const d=a*u,m=a*c,_=o*u,h=o*c;t[0]=u*l,t[4]=h-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=m*f+_,t[10]=d-h*f}else if(e.order==="XZY"){const d=a*u,m=a*c,_=o*u,h=o*c;t[0]=u*l,t[4]=-f,t[8]=c*l,t[1]=d*f+h,t[5]=a*l,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*l,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Rd)}lookAt(e,t,i){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),oi.crossVectors(i,an),oi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),oi.crossVectors(i,an)),oi.normalize(),ys.crossVectors(an,oi),r[0]=oi.x,r[4]=ys.x,r[8]=an.x,r[1]=oi.y,r[5]=ys.y,r[9]=an.y,r[2]=oi.z,r[6]=ys.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],u=i[8],c=i[12],l=i[1],f=i[5],d=i[9],m=i[13],_=i[2],h=i[6],g=i[10],p=i[14],A=i[3],v=i[7],E=i[11],y=i[15],x=r[0],w=r[4],T=r[8],D=r[12],M=r[1],F=r[5],B=r[9],O=r[13],V=r[2],X=r[6],U=r[10],j=r[14],G=r[3],ne=r[7],se=r[11],he=r[15];return s[0]=a*x+o*M+u*V+c*G,s[4]=a*w+o*F+u*X+c*ne,s[8]=a*T+o*B+u*U+c*se,s[12]=a*D+o*O+u*j+c*he,s[1]=l*x+f*M+d*V+m*G,s[5]=l*w+f*F+d*X+m*ne,s[9]=l*T+f*B+d*U+m*se,s[13]=l*D+f*O+d*j+m*he,s[2]=_*x+h*M+g*V+p*G,s[6]=_*w+h*F+g*X+p*ne,s[10]=_*T+h*B+g*U+p*se,s[14]=_*D+h*O+g*j+p*he,s[3]=A*x+v*M+E*V+y*G,s[7]=A*w+v*F+E*X+y*ne,s[11]=A*T+v*B+E*U+y*se,s[15]=A*D+v*O+E*j+y*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],u=e[9],c=e[13],l=e[2],f=e[6],d=e[10],m=e[14],_=e[3],h=e[7],g=e[11],p=e[15];return _*(+s*u*f-r*c*f-s*o*d+i*c*d+r*o*m-i*u*m)+h*(+t*u*m-t*c*d+s*a*d-r*a*m+r*c*l-s*u*l)+g*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*l-i*c*l)+p*(-r*o*l-t*u*f+t*o*d+r*a*f-i*a*d+i*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],l=e[8],f=e[9],d=e[10],m=e[11],_=e[12],h=e[13],g=e[14],p=e[15],A=f*g*c-h*d*c+h*u*m-o*g*m-f*u*p+o*d*p,v=_*d*c-l*g*c-_*u*m+a*g*m+l*u*p-a*d*p,E=l*h*c-_*f*c+_*o*m-a*h*m-l*o*p+a*f*p,y=_*f*u-l*h*u-_*o*d+a*h*d+l*o*g-a*f*g,x=t*A+i*v+r*E+s*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=A*w,e[1]=(h*d*s-f*g*s-h*r*m+i*g*m+f*r*p-i*d*p)*w,e[2]=(o*g*s-h*u*s+h*r*c-i*g*c-o*r*p+i*u*p)*w,e[3]=(f*u*s-o*d*s-f*r*c+i*d*c+o*r*m-i*u*m)*w,e[4]=v*w,e[5]=(l*g*s-_*d*s+_*r*m-t*g*m-l*r*p+t*d*p)*w,e[6]=(_*u*s-a*g*s-_*r*c+t*g*c+a*r*p-t*u*p)*w,e[7]=(a*d*s-l*u*s+l*r*c-t*d*c-a*r*m+t*u*m)*w,e[8]=E*w,e[9]=(_*f*s-l*h*s-_*i*m+t*h*m+l*i*p-t*f*p)*w,e[10]=(a*h*s-_*o*s+_*i*c-t*h*c-a*i*p+t*o*p)*w,e[11]=(l*o*s-a*f*s-l*i*c+t*f*c+a*i*m-t*o*m)*w,e[12]=y*w,e[13]=(l*h*r-_*f*r+_*i*d-t*h*d-l*i*g+t*f*g)*w,e[14]=(_*o*r-a*h*r-_*i*u+t*h*u+a*i*g-t*o*g)*w,e[15]=(a*f*r-l*o*r+l*i*u-t*f*u-a*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,u=e.z,c=s*a,l=s*o;return this.set(c*a+i,c*o-r*u,c*u+r*o,0,c*o+r*u,l*o+i,l*u-r*a,0,c*u-r*o,l*u+r*a,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,u=t._w,c=s+s,l=a+a,f=o+o,d=s*c,m=s*l,_=s*f,h=a*l,g=a*f,p=o*f,A=u*c,v=u*l,E=u*f,y=i.x,x=i.y,w=i.z;return r[0]=(1-(h+p))*y,r[1]=(m+E)*y,r[2]=(_-v)*y,r[3]=0,r[4]=(m-E)*x,r[5]=(1-(d+p))*x,r[6]=(g+A)*x,r[7]=0,r[8]=(_+v)*w,r[9]=(g-A)*w,r[10]=(1-(d+h))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,l=1/a,f=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=l,Dn.elements[5]*=l,Dn.elements[6]*=l,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,t.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Jn){const u=this.elements,c=2*s/(t-e),l=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,_;if(o===Jn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Js)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=l,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Jn){const u=this.elements,c=1/(t-e),l=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*l;let _,h;if(o===Jn)_=(a+s)*f,h=-2*f;else if(o===Js)_=s*f,h=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-d,u[1]=0,u[5]=2*l,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=h,u[14]=-_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new Z,Dn=new Tt,Fd=new Z(0,0,0),Rd=new Z(1,1,1),oi=new Z,ys=new Z,an=new Z,hc=new Tt,dc=new Gi;class ni{constructor(e=0,t=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],u=r[1],c=r[5],l=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pd=0;const pc=new Z,Qi=new Gi,Xn=new Tt,Ms=new Z,Vr=new Z,Nd=new Z,Ld=new Gi,mc=new Z(1,0,0),gc=new Z(0,1,0),_c=new Z(0,0,1),vc={type:"added"},Id={type:"removed"},er={type:"childadded",child:null},qa={type:"childremoved",child:null};class tn extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Z,t=new ni,i=new Gi,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new $e}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Vr,Ms,this.up):Xn.lookAt(Ms,Vr,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vc),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Id),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vc),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const f=u[c];s(e.shapes,f)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,c=this.material.length;u<c;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),c=a(e.textures),l=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const u=[];for(const c in o){const l=o[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new Z,qn=new Z,Ya=new Z,Yn=new Z,tr=new Z,nr=new Z,Ec=new Z,$a=new Z,Za=new Z,Ka=new Z,ja=new wt,Ja=new wt,Qa=new wt;class wn{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),qn.subVectors(i,t),Ya.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(qn),u=Sn.dot(Ya),c=qn.dot(qn),l=qn.dot(Ya),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*u-o*l)*d,_=(a*l-o*u)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,u){return this.getBarycoord(e,t,i,r,Yn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Yn.x),u.addScaledVector(a,Yn.y),u.addScaledVector(o,Yn.z),u)}static getInterpolatedAttribute(e,t,i,r,s,a){return ja.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),ja.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,i),Qa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ja,s.x),a.addScaledVector(Ja,s.y),a.addScaledVector(Qa,s.z),a}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),qn.subVectors(e,t),Sn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),nr.subVectors(s,i),$a.subVectors(e,i);const u=tr.dot($a),c=nr.dot($a);if(u<=0&&c<=0)return t.copy(i);Za.subVectors(e,r);const l=tr.dot(Za),f=nr.dot(Za);if(l>=0&&f<=l)return t.copy(r);const d=u*f-l*c;if(d<=0&&u>=0&&l<=0)return a=u/(u-l),t.copy(i).addScaledVector(tr,a);Ka.subVectors(e,s);const m=tr.dot(Ka),_=nr.dot(Ka);if(_>=0&&m<=_)return t.copy(s);const h=m*c-u*_;if(h<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(nr,o);const g=l*_-m*f;if(g<=0&&f-l>=0&&m-_>=0)return Ec.subVectors(s,r),o=(f-l)/(f-l+(m-_)),t.copy(r).addScaledVector(Ec,o);const p=1/(g+h+d);return a=h*p,o=d*p,t.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=_d(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=eo(a,s,e+1/3),this.g=eo(a,s,e),this.b=eo(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const i=cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return rt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Je(Wt.r*255,0,255))*65536+Math.round(Je(Wt.g*255,0,255))*256+Math.round(Je(Wt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let u,c;const l=(o+a)/2;if(o===a)u=0,c=0;else{const f=a-o;switch(c=l<=.5?f/(a+o):f/(2-a-o),a){case i:u=(r-s)/f+(r<s?6:0);break;case r:u=(s-i)/f+2;break;case s:u=(i-r)/f+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=gn){rt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Ds);const i=Ba(ui.h,Ds.h,t),r=Ba(ui.s,Ds.s,t),s=Ba(ui.l,Ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new st;st.NAMES=cf;let Ud=0;class ns extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=es(),this.name="",this.type="Material",this.blending=mr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xo&&(i.blendSrc=this.blendSrc),this.blendDst!==yo&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const u=s[o];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tu extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new Z,Ss=new je;let Bd=0;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),e}}class lf extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ff extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Cn extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Od=0;const hn=new Tt,to=new tn,ir=new Z,on=new ts,Gr=new ts,Bt=new Z;class zn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sf(e)?ff:lf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Cn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(on.min,Gr.min),on.expandByPoint(Bt),Bt.addVectors(on.max,Gr.max),on.expandByPoint(Bt)):(on.expandByPoint(Gr.min),on.expandByPoint(Gr.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],u=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Bt.fromBufferAttribute(o,c),u&&(ir.fromBufferAttribute(e,c),Bt.add(ir)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],u=[];for(let T=0;T<i.count;T++)o[T]=new Z,u[T]=new Z;const c=new Z,l=new Z,f=new Z,d=new je,m=new je,_=new je,h=new Z,g=new Z;function p(T,D,M){c.fromBufferAttribute(i,T),l.fromBufferAttribute(i,D),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,D),_.fromBufferAttribute(s,M),l.sub(c),f.sub(c),m.sub(d),_.sub(d);const F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(h.copy(l).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(F),g.copy(f).multiplyScalar(m.x).addScaledVector(l,-_.x).multiplyScalar(F),o[T].add(h),o[D].add(h),o[M].add(h),u[T].add(g),u[D].add(g),u[M].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,D=A.length;T<D;++T){const M=A[T],F=M.start,B=M.count;for(let O=F,V=F+B;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new Z,E=new Z,y=new Z,x=new Z;function w(T){y.fromBufferAttribute(r,T),x.copy(y);const D=o[T];v.copy(D),v.sub(y.multiplyScalar(y.dot(D))).normalize(),E.crossVectors(x,D);const F=E.dot(u[T])<0?-1:1;a.setXYZW(T,v.x,v.y,v.z,F)}for(let T=0,D=A.length;T<D;++T){const M=A[T],F=M.start,B=M.count;for(let O=F,V=F+B;O<V;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,u=new Z,c=new Z,l=new Z,f=new Z;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),h=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,h),a.fromBufferAttribute(t,g),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),o.fromBufferAttribute(i,_),u.fromBufferAttribute(i,h),c.fromBufferAttribute(i,g),o.add(l),u.add(l),c.add(l),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(h,u.x,u.y,u.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,u){const c=o.array,l=o.itemSize,f=o.normalized,d=new c.constructor(u.length*l);let m=0,_=0;for(let h=0,g=u.length;h<g;h++){o.isInterleavedBufferAttribute?m=u[h]*o.data.stride+o.offset:m=u[h]*l;for(let p=0;p<l;p++)d[_++]=c[m++]}return new vn(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const o in r){const u=r[o],c=e(u,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const u=[],c=s[o];for(let l=0,f=c.length;l<f;l++){const d=c[l],m=e(d,i);u.push(m)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];l.push(m.toJSON(e.data))}l.length>0&&(r[u]=l,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const s=e.morphAttributes;for(const c in s){const l=[],f=s[c];for(let d=0,m=f.length;d<m;d++)l.push(f[d].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,l=a.length;c<l;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new Tt,bi=new bu,As=new ga,yc=new Z,ws=new Z,bs=new Z,Ts=new Z,no=new Z,Cs=new Z,Mc=new Z,Fs=new Z;class In extends tn{constructor(e=new zn,t=new Tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cs.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const l=o[u],f=s[u];l!==0&&(no.fromBufferAttribute(f,e),a?Cs.addScaledVector(no,l):Cs.addScaledVector(no.sub(t),l))}t.add(Cs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),bi.copy(e.ray).recast(e.near),!(As.containsPoint(bi.origin)===!1&&(bi.intersectSphere(As,yc)===null||bi.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(xc.copy(s).invert(),bi.copy(e.ray).applyMatrix4(xc),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,u=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,h=d.length;_<h;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=A,y=v;E<y;E+=3){const x=o.getX(E),w=o.getX(E+1),T=o.getX(E+2);r=Rs(this,p,e,i,c,l,f,x,w,T),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),h=Math.min(o.count,m.start+m.count);for(let g=_,p=h;g<p;g+=3){const A=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);r=Rs(this,a,e,i,c,l,f,A,v,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let _=0,h=d.length;_<h;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),v=Math.min(u.count,Math.min(g.start+g.count,m.start+m.count));for(let E=A,y=v;E<y;E+=3){const x=E,w=E+1,T=E+2;r=Rs(this,p,e,i,c,l,f,x,w,T),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),h=Math.min(u.count,m.start+m.count);for(let g=_,p=h;g<p;g+=3){const A=g,v=g+1,E=g+2;r=Rs(this,a,e,i,c,l,f,A,v,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function zd(n,e,t,i,r,s,a,o){let u;if(e.side===Qt?u=i.intersectTriangle(a,s,r,!0,o):u=i.intersectTriangle(r,s,a,e.side===_i,o),u===null)return null;Fs.copy(o),Fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:n}}function Rs(n,e,t,i,r,s,a,o,u,c){n.getVertexPosition(o,ws),n.getVertexPosition(u,bs),n.getVertexPosition(c,Ts);const l=zd(n,e,t,i,ws,bs,Ts,Mc);if(l){const f=new Z;wn.getBarycoord(Mc,ws,bs,Ts,f),r&&(l.uv=wn.getInterpolatedAttribute(r,o,u,c,f,new je)),s&&(l.uv1=wn.getInterpolatedAttribute(s,o,u,c,f,new je)),a&&(l.normal=wn.getInterpolatedAttribute(a,o,u,c,f,new Z),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:u,c,normal:new Z,materialIndex:0};wn.getNormal(ws,bs,Ts,d.normal),l.face=d,l.barycoord=f}return l}class Fr extends zn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],c=[],l=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(l,3)),this.setAttribute("uv",new Cn(f,2));function _(h,g,p,A,v,E,y,x,w,T,D){const M=E/w,F=y/T,B=E/2,O=y/2,V=x/2,X=w+1,U=T+1;let j=0,G=0;const ne=new Z;for(let se=0;se<U;se++){const he=se*F-O;for(let Se=0;Se<X;Se++){const Le=Se*M-B;ne[h]=Le*A,ne[g]=he*v,ne[p]=V,c.push(ne.x,ne.y,ne.z),ne[h]=0,ne[g]=0,ne[p]=x>0?1:-1,l.push(ne.x,ne.y,ne.z),f.push(Se/w),f.push(1-se/T),j+=1}}for(let se=0;se<T;se++)for(let he=0;he<w;he++){const Se=d+he+X*se,Le=d+he+X*(se+1),ee=d+(he+1)+X*(se+1),ue=d+(he+1)+X*se;u.push(Se,Le,ue),u.push(Le,ee,ue),G+=6}o.addGroup(m,G,D),m+=G,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function Hd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Vd={clone:Ar,merge:$t};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class df extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new Z,Dc=new je,Sc=new je;class _n extends df{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=su*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return su*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Sc),t.subVectors(Sc,Dc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*i/c,r*=a.width/u,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class Wd extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new _n(rr,sr,e,t);s.layers=this.layers,this.add(s);const a=new _n(rr,sr,e,t);a.layers=this.layers,this.add(a);const o=new _n(rr,sr,e,t);o.layers=this.layers,this.add(o);const u=new _n(rr,sr,e,t);u.layers=this.layers,this.add(u);const c=new _n(rr,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,u]=t;for(const c of t)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,u,c,l]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,u),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=h,e.setRenderTarget(i,5,r),e.render(t,l),e.setRenderTarget(f,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class pf extends en{constructor(e,t,i,r,s,a,o,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,r,s,a,o,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xd extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fr(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:mi});s.uniforms.tEquirect.value=t;const a=new In(r,s),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Ln),new Wd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Wr extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qd={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const h of e.hand.values()){const g=t.getJointPose(h,i),p=this._getHandJoint(c,h);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const l=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=l.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qd)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Yd extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ro=new Z,$d=new Z,Zd=new $e;class fi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ro.subVectors(i,t).cross($d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zd.getNormalMatrix(e),r=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ga,Ps=new Z;class mf{constructor(e=new fi,t=new fi,i=new fi,r=new fi,s=new fi,a=new fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],u=r[3],c=r[4],l=r[5],f=r[6],d=r[7],m=r[8],_=r[9],h=r[10],g=r[11],p=r[12],A=r[13],v=r[14],E=r[15];if(i[0].setComponents(u-s,d-c,g-m,E-p).normalize(),i[1].setComponents(u+s,d+c,g+m,E+p).normalize(),i[2].setComponents(u+a,d+l,g+_,E+A).normalize(),i[3].setComponents(u-a,d-l,g-_,E-A).normalize(),i[4].setComponents(u-o,d-f,g-h,E-v).normalize(),t===Jn)i[5].setComponents(u+o,d+f,g+h,E+v).normalize();else if(t===Js)i[5].setComponents(o,f,h,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cu extends ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new Z,ta=new Z,Ac=new Tt,kr=new bu,Ns=new ga,so=new Z,wc=new Z;class Kd extends tn{constructor(e=new zn,t=new Cu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ea.fromBufferAttribute(t,r-1),ta.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Ac.copy(r).invert(),kr.copy(e.ray).applyMatrix4(Ac);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,c=this.isLineSegments?2:1,l=i.index,d=i.attributes.position;if(l!==null){const m=Math.max(0,a.start),_=Math.min(l.count,a.start+a.count);for(let h=m,g=_-1;h<g;h+=c){const p=l.getX(h),A=l.getX(h+1),v=Ls(this,e,kr,u,p,A,h);v&&t.push(v)}if(this.isLineLoop){const h=l.getX(_-1),g=l.getX(m),p=Ls(this,e,kr,u,h,g,_-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let h=m,g=_-1;h<g;h+=c){const p=Ls(this,e,kr,u,h,h+1,h);p&&t.push(p)}if(this.isLineLoop){const h=Ls(this,e,kr,u,_-1,m,_-1);h&&t.push(h)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ls(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ea.fromBufferAttribute(o,r),ta.fromBufferAttribute(o,s),t.distanceSqToSegment(ea,ta,so,wc)>i)return;so.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(so);if(!(c<e.near||c>e.far))return{distance:c,point:wc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const bc=new Z,Tc=new Z;class gf extends Kd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)bc.fromBufferAttribute(t,r),Tc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+bc.distanceTo(Tc);e.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _f extends en{constructor(e,t,i,r,s,a,o,u,c,l=gr){if(l!==gr&&l!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===gr&&(i=Hi),i===void 0&&l===Dr&&(i=Mr),super(null,r,s,a,o,u,l,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tn,this.minFilter=u!==void 0?u:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _a extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),u=Math.floor(r),c=o+1,l=u+1,f=e/o,d=t/u,m=[],_=[],h=[],g=[];for(let p=0;p<l;p++){const A=p*d-a;for(let v=0;v<c;v++){const E=v*f-s;_.push(E,-A,0),h.push(0,0,1),g.push(v/o),g.push(1-p/u)}}for(let p=0;p<u;p++)for(let A=0;A<o;A++){const v=A+c*p,E=A+c*(p+1),y=A+1+c*(p+1),x=A+1+c*p;m.push(v,E,x),m.push(E,y,x)}this.setIndex(m),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(h,3)),this.setAttribute("uv",new Cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}class jd extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jd extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qd extends df{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=l*this.view.offsetY,u=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ep extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Cc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tp extends gf{constructor(e=10,t=10,i=4473924,r=8947848){i=new st(i),r=new st(r);const s=t/2,a=e/t,o=e/2,u=[],c=[];for(let d=0,m=0,_=-o;d<=t;d++,_+=a){u.push(-o,0,_,o,0,_),u.push(_,0,-o,_,0,o);const h=d===s?i:r;h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3}const l=new zn;l.setAttribute("position",new Cn(u,3)),l.setAttribute("color",new Cn(c,3));const f=new Cu({vertexColors:!0,toneMapped:!1});super(l,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class np extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Fc(n,e,t,i){const r=ip(i);switch(t){case Kl:return n*e;case Jl:return n*e;case Ql:return n*e*2;case ef:return n*e/r.components*r.byteLength;case Su:return n*e/r.components*r.byteLength;case tf:return n*e*2/r.components*r.byteLength;case Au:return n*e*2/r.components*r.byteLength;case jl:return n*e*3/r.components*r.byteLength;case bn:return n*e*4/r.components*r.byteLength;case wu:return n*e*4/r.components*r.byteLength;case Gs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Uo:return Math.max(n,16)*Math.max(e,8)/4;case No:case Io:return Math.max(n,8)*Math.max(e,8)/2;case Bo:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $o:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qs:case eu:case tu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nf:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case iu:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ip(n){switch(n){case ti:case Yl:return{byteLength:1,components:1};case qr:case $l:case Qr:return{byteLength:2,components:1};case Mu:case Du:return{byteLength:2,components:4};case Hi:case yu:case jn:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rp(n){const e=new WeakMap;function t(o,u){const c=o.array,l=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,c,l),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,u,c){const l=u.array,f=u.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,l);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],h=f[m];h.start<=_.start+_.count+1?_.count=Math.max(_.count,h.start+h.count-_.start):(++d,f[d]=h)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const h=f[m];n.bufferSubData(c,h.start*l.BYTES_PER_ELEMENT,l,h.start,h.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(n.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,u));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,u),c.version=o.version}}return{get:r,remove:s,update:a}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:sp,alphahash_pars_fragment:ap,alphamap_fragment:op,alphamap_pars_fragment:up,alphatest_fragment:cp,alphatest_pars_fragment:lp,aomap_fragment:fp,aomap_pars_fragment:hp,batching_pars_vertex:dp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:xp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Dp,color_fragment:Sp,color_pars_fragment:Ap,color_pars_vertex:wp,color_vertex:bp,common:Tp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Rp,displacementmap_vertex:Pp,emissivemap_fragment:Np,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Up,envmap_fragment:Bp,envmap_common_pars_fragment:Op,envmap_pars_fragment:zp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:kp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Zp,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:rm,lights_fragment_maps:sm,lights_fragment_end:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:lm,map_fragment:fm,map_pars_fragment:hm,map_particle_fragment:dm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:Em,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Dm,normal_pars_fragment:Sm,normal_pars_vertex:Am,normal_vertex:wm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Rm,opaque_fragment:Pm,packing:Nm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Um,dithering_pars_fragment:Bm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:km,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:$m,specularmap_pars_fragment:Zm,tonemapping_fragment:Km,tonemapping_pars_fragment:jm,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:r0,background_frag:s0,backgroundCube_vert:a0,backgroundCube_frag:o0,cube_vert:u0,cube_frag:c0,depth_vert:l0,depth_frag:f0,distanceRGBA_vert:h0,distanceRGBA_frag:d0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:v0,meshbasic_frag:E0,meshlambert_vert:x0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:D0,meshnormal_vert:S0,meshnormal_frag:A0,meshphong_vert:w0,meshphong_frag:b0,meshphysical_vert:T0,meshphysical_frag:C0,meshtoon_vert:F0,meshtoon_frag:R0,points_vert:P0,points_frag:N0,shadow_vert:L0,shadow_frag:I0,sprite_vert:U0,sprite_frag:B0},Ee={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Pn={basic:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([Ee.points,Ee.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([Ee.common,Ee.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([Ee.sprite,Ee.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:$t([Ee.common,Ee.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:$t([Ee.lights,Ee.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Pn.physical={uniforms:$t([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Is={r:0,b:0,g:0},Ci=new ni,O0=new Tt;function z0(n,e,t,i,r,s,a){const o=new st(0);let u=s===!0?0:1,c,l,f=null,d=0,m=null;function _(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?t:e).get(E)),E}function h(v){let E=!1;const y=_(v);y===null?p(o,u):y&&y.isColor&&(p(y,1),E=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,E){const y=_(E);y&&(y.isCubeTexture||y.mapping===ma)?(l===void 0&&(l=new In(new Fr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ar(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Ci.copy(E.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Ci)),l.material.toneMapped=rt.getTransfer(y.colorSpace)!==lt,(f!==y||d!==y.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new In(new _a(2,2),new vi({name:"BackgroundMaterial",uniforms:Ar(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,m=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,E){v.getRGB(Is,hf(n)),i.buffers.color.setClear(Is.r,Is.g,Is.b,E,a)}function A(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),u=E,p(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(v){u=v,p(o,u)},render:h,addToRenderList:g,dispose:A}}function H0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,F,B,O,V){let X=!1;const U=f(O,B,F);s!==U&&(s=U,c(s.object)),X=m(M,O,B,V),X&&_(M,O,B,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(M,F,B,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function u(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function l(M){return n.deleteVertexArray(M)}function f(M,F,B){const O=B.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let X=V[F.id];X===void 0&&(X={},V[F.id]=X);let U=X[O];return U===void 0&&(U=d(u()),X[O]=U),U}function d(M){const F=[],B=[],O=[];for(let V=0;V<t;V++)F[V]=0,B[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,F,B,O){const V=s.attributes,X=F.attributes;let U=0;const j=B.getAttributes();for(const G in j)if(j[G].location>=0){const se=V[G];let he=X[G];if(he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;U++}return s.attributesNum!==U||s.index!==O}function _(M,F,B,O){const V={},X=F.attributes;let U=0;const j=B.getAttributes();for(const G in j)if(j[G].location>=0){let se=X[G];se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const he={};he.attribute=se,se&&se.data&&(he.data=se.data),V[G]=he,U++}s.attributes=V,s.attributesNum=U,s.index=O}function h(){const M=s.newAttributes;for(let F=0,B=M.length;F<B;F++)M[F]=0}function g(M){p(M,0)}function p(M,F){const B=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;B[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),V[M]!==F&&(n.vertexAttribDivisor(M,F),V[M]=F)}function A(){const M=s.newAttributes,F=s.enabledAttributes;for(let B=0,O=F.length;B<O;B++)F[B]!==M[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function v(M,F,B,O,V,X,U){U===!0?n.vertexAttribIPointer(M,F,B,V,X):n.vertexAttribPointer(M,F,B,O,V,X)}function E(M,F,B,O){h();const V=O.attributes,X=B.getAttributes(),U=F.defaultAttributeValues;for(const j in X){const G=X[j];if(G.location>=0){let ne=V[j];if(ne===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const se=ne.normalized,he=ne.itemSize,Se=e.get(ne);if(Se===void 0)continue;const Le=Se.buffer,ee=Se.type,ue=Se.bytesPerElement,de=ee===n.INT||ee===n.UNSIGNED_INT||ne.gpuType===yu;if(ne.isInterleavedBufferAttribute){const ce=ne.data,we=ce.stride,Ce=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)p(G.location+ve,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<G.locationSize;ve++)g(G.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let ve=0;ve<G.locationSize;ve++)v(G.location+ve,he/G.locationSize,ee,se,we*ue,(Ce+he/G.locationSize*ve)*ue,de)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce,ne.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<G.locationSize;ce++)g(G.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let ce=0;ce<G.locationSize;ce++)v(G.location+ce,he/G.locationSize,ee,se,he*ue,he/G.locationSize*ce*ue,de)}}else if(U!==void 0){const se=U[j];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(G.location,se);break;case 3:n.vertexAttrib3fv(G.location,se);break;case 4:n.vertexAttrib4fv(G.location,se);break;default:n.vertexAttrib1fv(G.location,se)}}}}A()}function y(){T();for(const M in i){const F=i[M];for(const B in F){const O=F[B];for(const V in O)l(O[V].object),delete O[V];delete F[B]}delete i[M]}}function x(M){if(i[M.id]===void 0)return;const F=i[M.id];for(const B in F){const O=F[B];for(const V in O)l(O[V].object),delete O[V];delete F[B]}delete i[M.id]}function w(M){for(const F in i){const B=i[F];if(B[M.id]===void 0)continue;const O=B[M.id];for(const V in O)l(O[V].object),delete O[V];delete B[M.id]}}function T(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:h,enableAttribute:g,disableUnusedAttributes:A}}function V0(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let m=0;for(let _=0;_<f;_++)m+=l[_];t.update(m,i,1)}function u(c,l,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],l[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,l,0,d,0,f);let _=0;for(let h=0;h<f;h++)_+=l[h]*d[h];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function G0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===Qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ti&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==jn&&!T)}function u(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=u(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=_>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:h,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:y,maxSamples:x}}function k0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new fi,o=new $e,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=l(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,h=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?l(null):c();else{const A=s?0:i,v=A*4;let E=p.clippingState||null;u.value=E,E=l(_,d,v,m);for(let y=0;y!==v;++y)E[y]=t[y];p.clippingState=E,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=A}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(f,d,m,_){const h=f!==null?f.length:0;let g=null;if(h!==0){if(g=u.value,_!==!0||g===null){const p=m+h*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,E=m;v!==h;++v,E+=4)a.copy(f[v]).applyMatrix4(A,o),a.normal.toArray(g,E),g[E+3]=a.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,g}}function W0(n){let e=new WeakMap;function t(a,o){return o===Co?a.mapping=xr:o===Fo&&(a.mapping=yr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Co||o===Fo)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const c=new Xd(u.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const dr=4,Rc=[.125,.215,.35,.446,.526,.582],Ii=20,ao=new Qd,Pc=new st;let oo=null,uo=0,co=0,lo=!1;const Pi=(1+Math.sqrt(5))/2,ar=1/Pi,Nc=[new Z(-Pi,ar,0),new Z(Pi,ar,0),new Z(-ar,0,Pi),new Z(ar,0,Pi),new Z(0,Pi,-ar),new Z(0,Pi,ar),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){oo=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,uo,co),this._renderer.xr.enabled=lo,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Qr,format:bn,colorSpace:Sr,depthBuffer:!1},r=Ic(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(s)),this._blurMaterial=q0(s,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,i,r){const o=new _n(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(Pc),l.toneMapping=gi,l.autoClear=!1;const m=new Tu({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new In(new Fr,m);let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(Pc),h=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,u[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,u[p]),o.lookAt(0,c[p],0)):(o.up.set(0,u[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Us(r,A*v,p>2?v:0,v,v),l.setRenderTarget(r),h&&l.render(_,o),l.render(e,o)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=d,l.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;Us(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(a,ao)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nc[(r-s-1)%Nc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const u=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new In(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ii-1),h=s/_,g=isFinite(s)?1+Math.floor(l*h):Ii;g>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ii}`);const p=[];let A=0;for(let w=0;w<Ii;++w){const T=w/h,D=Math.exp(-T*T/2);p.push(D),w===0?A+=D:w<g&&(A+=2*D)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const E=this._sizeLods[r],y=3*E*(r>v-dr?r-v+dr:0),x=4*(this._cubeSize-E);Us(t,y,x,3*E,2*E),u.setRenderTarget(t),u.render(f,ao)}}function X0(n){const e=[],t=[],i=[];let r=n;const s=n-dr+1+Rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let u=1/o;a>n-dr?u=Rc[a-n+dr-1]:a===0&&(u=0),i.push(u);const c=1/(o-2),l=-c,f=1+c,d=[l,l,f,l,f,f,l,l,f,f,l,f],m=6,_=6,h=3,g=2,p=1,A=new Float32Array(h*_*m),v=new Float32Array(g*_*m),E=new Float32Array(p*_*m);for(let x=0;x<m;x++){const w=x%3*2/3-1,T=x>2?0:-1,D=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];A.set(D,h*_*x),v.set(d,g*_*x);const M=[x,x,x,x,x,x];E.set(M,p*_*x)}const y=new zn;y.setAttribute("position",new vn(A,h)),y.setAttribute("uv",new vn(v,g)),y.setAttribute("faceIndex",new vn(E,p)),e.push(y),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ic(n,e,t){const i=new Vi(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function q0(n,e,t){const i=new Float32Array(Ii),r=new Z(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Uc(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Bc(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const u=o.mapping,c=u===Co||u===Fo,l=u===xr||u===yr;if(c||l){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Lc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||l&&m&&r(m)?(t===null&&(t=new Lc(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let u=0;const c=6;for(let l=0;l<c;l++)o[l]!==void 0&&u++;return u===c}function s(o){const u=o.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Z0(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function u(f){const d=f.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,_=f.attributes.position;let h=0;if(m!==null){const A=m.array;h=m.version;for(let v=0,E=A.length;v<E;v+=3){const y=A[v+0],x=A[v+1],w=A[v+2];d.push(y,x,x,w,w,y)}}else if(_!==void 0){const A=_.array;h=_.version;for(let v=0,E=A.length/3-1;v<E;v+=3){const y=v+0,x=v+1,w=v+2;d.push(y,x,x,w,w,y)}}else return;const g=new(sf(d)?ff:lf)(d,1);g.version=h;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function l(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:u,getWireframeAttribute:l}}function K0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function u(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,d*a,_),t.update(m,i,_))}function l(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,i,1)}function f(d,m,_,h){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,m[p],h[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,h,0,_);let p=0;for(let A=0;A<_;A++)p+=m[A]*h[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function j0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function J0(n,e,t){const i=new WeakMap,r=new wt;function s(a,o,u){const c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=l!==void 0?l.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,h=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),h===!0&&(E=2),g===!0&&(E=3);let y=o.attributes.position.count*E,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*x*4*f),T=new of(w,y,x,f);T.type=jn,T.needsUpdate=!0;const D=E*4;for(let F=0;F<f;F++){const B=p[F],O=A[F],V=v[F],X=y*x*4*F;for(let U=0;U<B.count;U++){const j=U*D;_===!0&&(r.fromBufferAttribute(B,U),w[X+j+0]=r.x,w[X+j+1]=r.y,w[X+j+2]=r.z,w[X+j+3]=0),h===!0&&(r.fromBufferAttribute(O,U),w[X+j+4]=r.x,w[X+j+5]=r.y,w[X+j+6]=r.z,w[X+j+7]=0),g===!0&&(r.fromBufferAttribute(V,U),w[X+j+8]=r.x,w[X+j+9]=r.y,w[X+j+10]=r.z,w[X+j+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new je(y,x)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const h=o.morphTargetsRelative?1:1-_;u.getUniforms().setValue(n,"morphTargetBaseInfluence",h),u.getUniforms().setValue(n,"morphTargetInfluences",c)}u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Q0(n,e,t,i){let r=new WeakMap;function s(u){const c=i.render.frame,l=u.geometry,f=e.get(u,l);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const d=u.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(u){const c=u.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ef=new en,Oc=new _f(1,1),xf=new of,yf=new Td,Mf=new pf,zc=[],Hc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),kc=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zc[r];if(s===void 0&&(s=new Float32Array(r),zc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function va(n,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;kc.set(i),n.uniformMatrix2fv(this.addr,!1,kc),It(t,i)}}function sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),It(t,i)}}function ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),It(t,i)}}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Oc.compareFunction=rf,s=Oc):s=Ef,t.setTexture2D(e||s,r)}function gg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yf,r)}function _g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mf,r)}function vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xf,r)}function Eg(n){switch(n){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return ug;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return fg;case 36294:return hg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function xg(n,e){n.uniform1fv(this.addr,e)}function yg(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Mg(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Sg(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ag(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wg(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bg(n,e){n.uniform1iv(this.addr,e)}function Tg(n,e){n.uniform2iv(this.addr,e)}function Cg(n,e){n.uniform3iv(this.addr,e)}function Fg(n,e){n.uniform4iv(this.addr,e)}function Rg(n,e){n.uniform1uiv(this.addr,e)}function Pg(n,e){n.uniform2uiv(this.addr,e)}function Ng(n,e){n.uniform3uiv(this.addr,e)}function Lg(n,e){n.uniform4uiv(this.addr,e)}function Ig(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ef,s[a])}function Ug(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yf,s[a])}function Bg(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mf,s[a])}function Og(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xf,s[a])}function zg(n){switch(n){case 5126:return xg;case 35664:return yg;case 35665:return Mg;case 35666:return Dg;case 35674:return Sg;case 35675:return Ag;case 35676:return wg;case 5124:case 35670:return bg;case 35667:case 35671:return Tg;case 35668:case 35672:return Cg;case 35669:case 35673:return Fg;case 5125:return Rg;case 36294:return Pg;case 36295:return Ng;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Og}}class Hg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}}class Vg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zg(t.type)}}class Gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Wc(n,e){n.seq.push(e),n.map[e.id]=e}function kg(n,e,t){const i=n.name,r=i.length;for(fo.lastIndex=0;;){const s=fo.exec(i),a=fo.lastIndex;let o=s[1];const u=s[2]==="]",c=s[3];if(u&&(o=o|0),c===void 0||c==="["&&a+2===r){Wc(t,c===void 0?new Hg(o,n,e):new Vg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Gg(o),Wc(t,f)),t=f}}}class $s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);kg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],u=i[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Xc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Wg=37297;let Xg=0;function qg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const qc=new $e;function Yg(n){rt._getMatrix(qc,rt.workingColorSpace,n);const e=`mat3( ${qc.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case js:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+qg(n.getShaderSource(e),a)}else return r}function $g(n,e){const t=Yg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zg(n,e){let t;switch(e){case Jh:t="Linear";break;case Qh:t="Reinhard";break;case ed:t="Cineon";break;case td:t="ACESFilmic";break;case id:t="AgX";break;case rd:t="Neutral";break;case nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new Z;function Kg(){rt.getLuminanceCoefficients(Bs);const n=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Jg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xr(n){return n!==""}function $c(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(e_,n_)}const t_=new Map;function n_(n,e){let t=Ze[e];if(t===void 0){const i=t_.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(n){return n.replace(i_,r_)}function r_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function u_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case jh:e="ENVMAP_BLENDING_ADD";break}return e}function c_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function l_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=s_(t),c=a_(t),l=o_(t),f=u_(t),d=c_(t),m=jg(t),_=Jg(s),h=r.createProgram();let g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(g=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==gi?Zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),Kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=au(a),a=$c(a,t),a=Zc(a,t),o=au(o),o=$c(o,t),o=Zc(o,t),a=Kc(a),o=Kc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=A+g+a,E=A+p+o,y=Xc(r,r.VERTEX_SHADER,v),x=Xc(r,r.FRAGMENT_SHADER,E);r.attachShader(h,y),r.attachShader(h,x),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function w(F){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(h).trim(),O=r.getShaderInfoLog(y).trim(),V=r.getShaderInfoLog(x).trim();let X=!0,U=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,h,y,x);else{const j=Yc(r,y,"vertex"),G=Yc(r,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+j+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||V==="")&&(U=!1);U&&(F.diagnostics={runnable:X,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:V,prefix:p}})}r.deleteShader(y),r.deleteShader(x),T=new $s(r,h),D=Qg(r,h)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let D;this.getAttributes=function(){return D===void 0&&w(this),D};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(h,Wg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=y,this.fragmentShader=x,this}let f_=0;class h_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new d_(e),t.set(e,i)),i}}class d_{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}}function p_(n,e,t,i,r,s,a){const o=new uf,u=new h_,c=new Set,l=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(D){return c.add(D),D===0?"uv":`uv${D}`}function g(D,M,F,B,O){const V=B.fog,X=O.geometry,U=D.isMeshStandardMaterial?B.environment:null,j=(D.isMeshStandardMaterial?t:e).get(D.envMap||U),G=j&&j.mapping===ma?j.image.height:null,ne=_[D.type];D.precision!==null&&(m=r.getMaxPrecision(D.precision),m!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",m,"instead."));const se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=se!==void 0?se.length:0;let Se=0;X.morphAttributes.position!==void 0&&(Se=1),X.morphAttributes.normal!==void 0&&(Se=2),X.morphAttributes.color!==void 0&&(Se=3);let Le,ee,ue,de;if(ne){const at=Pn[ne];Le=at.vertexShader,ee=at.fragmentShader}else Le=D.vertexShader,ee=D.fragmentShader,u.update(D),ue=u.getVertexShaderID(D),de=u.getFragmentShaderID(D);const ce=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,Qe=!!D.map,Ye=!!D.matcap,be=!!j,I=!!D.aoMap,mt=!!D.lightMap,Ge=!!D.bumpMap,ke=!!D.normalMap,Te=!!D.displacementMap,nt=!!D.emissiveMap,Fe=!!D.metalnessMap,P=!!D.roughnessMap,b=D.anisotropy>0,S=D.clearcoat>0,R=D.dispersion>0,N=D.iridescence>0,L=D.sheen>0,$=D.transmission>0,W=b&&!!D.anisotropyMap,Q=S&&!!D.clearcoatMap,re=S&&!!D.clearcoatNormalMap,Y=S&&!!D.clearcoatRoughnessMap,K=N&&!!D.iridescenceMap,me=N&&!!D.iridescenceThicknessMap,xe=L&&!!D.sheenColorMap,fe=L&&!!D.sheenRoughnessMap,ze=!!D.specularMap,Re=!!D.specularColorMap,Ke=!!D.specularIntensityMap,z=$&&!!D.transmissionMap,pe=$&&!!D.thicknessMap,te=!!D.gradientMap,ae=!!D.alphaMap,Me=D.alphaTest>0,ye=!!D.alphaHash,Xe=!!D.extensions;let _t=gi;D.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Ut={shaderID:ne,shaderType:D.type,shaderName:D.name,vertexShader:Le,fragmentShader:ee,defines:D.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:m,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Sr,alphaToCoverage:!!D.alphaToCoverage,map:Qe,matcap:Ye,envMap:be,envMapMode:be&&j.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:mt,bumpMap:Ge,normalMap:ke,displacementMap:d&&Te,emissiveMap:nt,normalMapObjectSpace:ke&&D.normalMapType===cd,normalMapTangentSpace:ke&&D.normalMapType===ud,metalnessMap:Fe,roughnessMap:P,anisotropy:b,anisotropyMap:W,clearcoat:S,clearcoatMap:Q,clearcoatNormalMap:re,clearcoatRoughnessMap:Y,dispersion:R,iridescence:N,iridescenceMap:K,iridescenceThicknessMap:me,sheen:L,sheenColorMap:xe,sheenRoughnessMap:fe,specularMap:ze,specularColorMap:Re,specularIntensityMap:Ke,transmission:$,transmissionMap:z,thicknessMap:pe,gradientMap:te,opaque:D.transparent===!1&&D.blending===mr&&D.alphaToCoverage===!1,alphaMap:ae,alphaTest:Me,alphaHash:ye,combine:D.combine,mapUv:Qe&&h(D.map.channel),aoMapUv:I&&h(D.aoMap.channel),lightMapUv:mt&&h(D.lightMap.channel),bumpMapUv:Ge&&h(D.bumpMap.channel),normalMapUv:ke&&h(D.normalMap.channel),displacementMapUv:Te&&h(D.displacementMap.channel),emissiveMapUv:nt&&h(D.emissiveMap.channel),metalnessMapUv:Fe&&h(D.metalnessMap.channel),roughnessMapUv:P&&h(D.roughnessMap.channel),anisotropyMapUv:W&&h(D.anisotropyMap.channel),clearcoatMapUv:Q&&h(D.clearcoatMap.channel),clearcoatNormalMapUv:re&&h(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&h(D.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&h(D.iridescenceMap.channel),iridescenceThicknessMapUv:me&&h(D.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(D.sheenColorMap.channel),sheenRoughnessMapUv:fe&&h(D.sheenRoughnessMap.channel),specularMapUv:ze&&h(D.specularMap.channel),specularColorMapUv:Re&&h(D.specularColorMap.channel),specularIntensityMapUv:Ke&&h(D.specularIntensityMap.channel),transmissionMapUv:z&&h(D.transmissionMap.channel),thicknessMapUv:pe&&h(D.thicknessMap.channel),alphaMapUv:ae&&h(D.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ke||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Qe||ae),fog:!!V,useFog:D.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:D.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:Qe&&D.map.isVideoTexture===!0&&rt.getTransfer(D.map.colorSpace)===lt,decodeVideoTextureEmissive:nt&&D.emissiveMap.isVideoTexture===!0&&rt.getTransfer(D.emissiveMap.colorSpace)===lt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Kn,flipSided:D.side===Qt,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xe&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&D.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(D){const M=[];if(D.shaderID?M.push(D.shaderID):(M.push(D.customVertexShaderID),M.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)M.push(F),M.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(A(M,D),v(M,D),M.push(n.outputColorSpace)),M.push(D.customProgramCacheKey),M.join()}function A(D,M){D.push(M.precision),D.push(M.outputColorSpace),D.push(M.envMapMode),D.push(M.envMapCubeUVHeight),D.push(M.mapUv),D.push(M.alphaMapUv),D.push(M.lightMapUv),D.push(M.aoMapUv),D.push(M.bumpMapUv),D.push(M.normalMapUv),D.push(M.displacementMapUv),D.push(M.emissiveMapUv),D.push(M.metalnessMapUv),D.push(M.roughnessMapUv),D.push(M.anisotropyMapUv),D.push(M.clearcoatMapUv),D.push(M.clearcoatNormalMapUv),D.push(M.clearcoatRoughnessMapUv),D.push(M.iridescenceMapUv),D.push(M.iridescenceThicknessMapUv),D.push(M.sheenColorMapUv),D.push(M.sheenRoughnessMapUv),D.push(M.specularMapUv),D.push(M.specularColorMapUv),D.push(M.specularIntensityMapUv),D.push(M.transmissionMapUv),D.push(M.thicknessMapUv),D.push(M.combine),D.push(M.fogExp2),D.push(M.sizeAttenuation),D.push(M.morphTargetsCount),D.push(M.morphAttributeCount),D.push(M.numDirLights),D.push(M.numPointLights),D.push(M.numSpotLights),D.push(M.numSpotLightMaps),D.push(M.numHemiLights),D.push(M.numRectAreaLights),D.push(M.numDirLightShadows),D.push(M.numPointLightShadows),D.push(M.numSpotLightShadows),D.push(M.numSpotLightShadowsWithMaps),D.push(M.numLightProbes),D.push(M.shadowMapType),D.push(M.toneMapping),D.push(M.numClippingPlanes),D.push(M.numClipIntersection),D.push(M.depthPacking)}function v(D,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),D.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),D.push(o.mask)}function E(D){const M=_[D.type];let F;if(M){const B=Pn[M];F=Vd.clone(B.uniforms)}else F=D.uniforms;return F}function y(D,M){let F;for(let B=0,O=l.length;B<O;B++){const V=l[B];if(V.cacheKey===M){F=V,++F.usedTimes;break}}return F===void 0&&(F=new l_(n,M,D,s),l.push(F)),F}function x(D){if(--D.usedTimes===0){const M=l.indexOf(D);l[M]=l[l.length-1],l.pop(),D.destroy()}}function w(D){u.remove(D)}function T(){u.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:x,releaseShaderCache:w,programs:l,dispose:T}}function m_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,u){n.get(a)[o]=u}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function g_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,_,h,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:h,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=h,p.group=g),e++,p}function o(f,d,m,_,h,g){const p=a(f,d,m,_,h,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function u(f,d,m,_,h,g){const p=a(f,d,m,_,h,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||g_),i.length>1&&i.sort(d||Jc),r.length>1&&r.sort(d||Jc)}function l(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:u,finish:l,sort:c}}function __(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Qc,n.set(i,[a])):r>=s.length?(a=new Qc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function v_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new st};break;case"SpotLight":t={position:new Z,direction:new Z,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function E_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let x_=0;function y_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function M_(n){const e=new v_,t=E_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new Tt,a=new Tt;function o(c){let l=0,f=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,_=0,h=0,g=0,p=0,A=0,v=0,E=0,y=0,x=0,w=0;c.sort(y_);for(let D=0,M=c.length;D<M;D++){const F=c[D],B=F.color,O=F.intensity,V=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)l+=B.r*O,f+=B.g*O,d+=B.b*O;else if(F.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(F.sh.coefficients[U],O);w++}else if(F.isDirectionalLight){const U=e.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,G=t.get(F);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=F.shadow.matrix,A++}i.directional[m]=U,m++}else if(F.isSpotLight){const U=e.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(B).multiplyScalar(O),U.distance=V,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,i.spot[h]=U;const j=F.shadow;if(F.map&&(i.spotLightMap[y]=F.map,y++,j.updateMatrices(F),F.castShadow&&x++),i.spotLightMatrix[h]=j.matrix,F.castShadow){const G=t.get(F);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[h]=G,i.spotShadowMap[h]=X,E++}h++}else if(F.isRectAreaLight){const U=e.get(F);U.color.copy(B).multiplyScalar(O),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=U,g++}else if(F.isPointLight){const U=e.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){const j=F.shadow,G=t.get(F);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=F.shadow.matrix,v++}i.point[_]=U,_++}else if(F.isHemisphereLight){const U=e.get(F);U.skyColor.copy(F.color).multiplyScalar(O),U.groundColor.copy(F.groundColor).multiplyScalar(O),i.hemi[p]=U,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=f,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==m||T.pointLength!==_||T.spotLength!==h||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==A||T.numPointShadows!==v||T.numSpotShadows!==E||T.numSpotMaps!==y||T.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=h,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+y-x,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=w,T.directionalLength=m,T.pointLength=_,T.spotLength=h,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=A,T.numPointShadows=v,T.numSpotShadows=E,T.numSpotMaps=y,T.numLightProbes=w,i.version=x_++)}function u(c,l){let f=0,d=0,m=0,_=0,h=0;const g=l.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const v=c[p];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(v.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const E=i.hemi[h];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),h++}}}return{setup:o,setupView:u,state:i}}function el(n){const e=new M_(n),t=[],i=[];function r(l){c.camera=l,t.length=0,i.length=0}function s(l){t.push(l)}function a(l){i.push(l)}function o(){e.setup(t)}function u(l){e.setupView(t,l)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:u,pushLight:s,pushShadow:a}}function D_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new el(n),e.set(r,[o])):s>=a.length?(o=new el(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w_(n,e,t){let i=new mf;const r=new je,s=new je,a=new wt,o=new jd({depthPacking:od}),u=new Jd,c={},l=t.maxTextureSize,f={[_i]:Qt,[Qt]:_i,[Kn]:Kn},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:S_,fragmentShader:A_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new zn;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new In(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(x,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;const D=n.getRenderTarget(),M=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(mi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==Zn&&this.type===Zn,V=p===Zn&&this.type!==Zn;for(let X=0,U=x.length;X<U;X++){const j=x[X],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ne=G.getFrameExtents();if(r.multiply(ne),s.copy(G.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/ne.x),r.x=s.x*ne.x,G.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/ne.y),r.y=s.y*ne.y,G.mapSize.y=s.y)),G.map===null||O===!0||V===!0){const he=this.type!==Zn?{minFilter:Tn,magFilter:Tn}:{};G.map!==null&&G.map.dispose(),G.map=new Vi(r.x,r.y,he),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const se=G.getViewportCount();for(let he=0;he<se;he++){const Se=G.getViewport(he);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(a),G.updateMatrices(j,he),i=G.getFrustum(),E(w,T,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Zn&&A(G,T),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(D,M,F)};function A(x,w){const T=e.update(h);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Vi(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,T,d,h,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,T,m,h,null)}function v(x,w,T,D){let M=null;const F=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)M=F;else if(M=T.isPointLight===!0?u:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=M.uuid,O=w.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let X=V[O];X===void 0&&(X=M.clone(),V[O]=X,w.addEventListener("dispose",y)),M=X}if(M.visible=w.visible,M.wireframe=w.wireframe,D===Zn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=T}return M}function E(x,w,T,D,M){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Zn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const O=e.update(x),V=x.material;if(Array.isArray(V)){const X=O.groups;for(let U=0,j=X.length;U<j;U++){const G=X[U],ne=V[G.materialIndex];if(ne&&ne.visible){const se=v(x,ne,D,M);x.onBeforeShadow(n,x,w,T,O,se,G),n.renderBufferDirect(T,null,O,se,x,G),x.onAfterShadow(n,x,w,T,O,se,G)}}}else if(V.visible){const X=v(x,V,D,M);x.onBeforeShadow(n,x,w,T,O,X,null),n.renderBufferDirect(T,null,O,X,x,null),x.onAfterShadow(n,x,w,T,O,X,null)}}const B=x.children;for(let O=0,V=B.length;O<V;O++)E(B[O],w,T,D,M)}function y(x){x.target.removeEventListener("dispose",y);for(const T in c){const D=c[T],M=x.target.uuid;M in D&&(D[M].dispose(),delete D[M])}}}const b_={[Mo]:Do,[So]:bo,[Ao]:To,[Er]:wo,[Do]:Mo,[bo]:So,[To]:Ao,[wo]:Er};function T_(n,e){function t(){let z=!1;const pe=new wt;let te=null;const ae=new wt(0,0,0,0);return{setMask:function(Me){te!==Me&&!z&&(n.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){z=Me},setClear:function(Me,ye,Xe,_t,Ut){Ut===!0&&(Me*=_t,ye*=_t,Xe*=_t),pe.set(Me,ye,Xe,_t),ae.equals(pe)===!1&&(n.clearColor(Me,ye,Xe,_t),ae.copy(pe))},reset:function(){z=!1,te=null,ae.set(-1,0,0,0)}}}function i(){let z=!1,pe=!1,te=null,ae=null,Me=null;return{setReversed:function(ye){if(pe!==ye){const Xe=e.get("EXT_clip_control");pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const _t=Me;Me=null,this.setClear(_t)}pe=ye},getReversed:function(){return pe},setTest:function(ye){ye?ce(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ye){te!==ye&&!z&&(n.depthMask(ye),te=ye)},setFunc:function(ye){if(pe&&(ye=b_[ye]),ae!==ye){switch(ye){case Mo:n.depthFunc(n.NEVER);break;case Do:n.depthFunc(n.ALWAYS);break;case So:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case Ao:n.depthFunc(n.EQUAL);break;case wo:n.depthFunc(n.GEQUAL);break;case bo:n.depthFunc(n.GREATER);break;case To:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=ye}},setLocked:function(ye){z=ye},setClear:function(ye){Me!==ye&&(pe&&(ye=1-ye),n.clearDepth(ye),Me=ye)},reset:function(){z=!1,te=null,ae=null,Me=null,pe=!1}}}function r(){let z=!1,pe=null,te=null,ae=null,Me=null,ye=null,Xe=null,_t=null,Ut=null;return{setTest:function(at){z||(at?ce(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(at){pe!==at&&!z&&(n.stencilMask(at),pe=at)},setFunc:function(at,rn,xn){(te!==at||ae!==rn||Me!==xn)&&(n.stencilFunc(at,rn,xn),te=at,ae=rn,Me=xn)},setOp:function(at,rn,xn){(ye!==at||Xe!==rn||_t!==xn)&&(n.stencilOp(at,rn,xn),ye=at,Xe=rn,_t=xn)},setLocked:function(at){z=at},setClear:function(at){Ut!==at&&(n.clearStencil(at),Ut=at)},reset:function(){z=!1,pe=null,te=null,ae=null,Me=null,ye=null,Xe=null,_t=null,Ut=null}}}const s=new t,a=new i,o=new r,u=new WeakMap,c=new WeakMap;let l={},f={},d=new WeakMap,m=[],_=null,h=!1,g=null,p=null,A=null,v=null,E=null,y=null,x=null,w=new st(0,0,0),T=0,D=!1,M=null,F=null,B=null,O=null,V=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,j=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=j>=2);let ne=null,se={};const he=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Le=new wt().fromArray(he),ee=new wt().fromArray(Se);function ue(z,pe,te,ae){const Me=new Uint8Array(4),ye=n.createTexture();n.bindTexture(z,ye),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<te;Xe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(pe+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ye}const de={};de[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(Er),Ge(!1),ke(tc),ce(n.CULL_FACE),I(mi);function ce(z){l[z]!==!0&&(n.enable(z),l[z]=!0)}function we(z){l[z]!==!1&&(n.disable(z),l[z]=!1)}function Ce(z,pe){return f[z]!==pe?(n.bindFramebuffer(z,pe),f[z]=pe,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ve(z,pe){let te=m,ae=!1;if(z){te=d.get(pe),te===void 0&&(te=[],d.set(pe,te));const Me=z.textures;if(te.length!==Me.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Xe=Me.length;ye<Xe;ye++)te[ye]=n.COLOR_ATTACHMENT0+ye;te.length=Me.length,ae=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ae=!0);ae&&n.drawBuffers(te)}function Qe(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const Ye={[Li]:n.FUNC_ADD,[Nh]:n.FUNC_SUBTRACT,[Lh]:n.FUNC_REVERSE_SUBTRACT};Ye[Ih]=n.MIN,Ye[Uh]=n.MAX;const be={[Bh]:n.ZERO,[Oh]:n.ONE,[zh]:n.SRC_COLOR,[xo]:n.SRC_ALPHA,[Xh]:n.SRC_ALPHA_SATURATE,[kh]:n.DST_COLOR,[Vh]:n.DST_ALPHA,[Hh]:n.ONE_MINUS_SRC_COLOR,[yo]:n.ONE_MINUS_SRC_ALPHA,[Wh]:n.ONE_MINUS_DST_COLOR,[Gh]:n.ONE_MINUS_DST_ALPHA,[qh]:n.CONSTANT_COLOR,[Yh]:n.ONE_MINUS_CONSTANT_COLOR,[$h]:n.CONSTANT_ALPHA,[Zh]:n.ONE_MINUS_CONSTANT_ALPHA};function I(z,pe,te,ae,Me,ye,Xe,_t,Ut,at){if(z===mi){h===!0&&(we(n.BLEND),h=!1);return}if(h===!1&&(ce(n.BLEND),h=!0),z!==Ph){if(z!==g||at!==D){if((p!==Li||E!==Li)&&(n.blendEquation(n.FUNC_ADD),p=Li,E=Li),at)switch(z){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFunc(n.ONE,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,v=null,y=null,x=null,w.set(0,0,0),T=0,g=z,D=at}return}Me=Me||pe,ye=ye||te,Xe=Xe||ae,(pe!==p||Me!==E)&&(n.blendEquationSeparate(Ye[pe],Ye[Me]),p=pe,E=Me),(te!==A||ae!==v||ye!==y||Xe!==x)&&(n.blendFuncSeparate(be[te],be[ae],be[ye],be[Xe]),A=te,v=ae,y=ye,x=Xe),(_t.equals(w)===!1||Ut!==T)&&(n.blendColor(_t.r,_t.g,_t.b,Ut),w.copy(_t),T=Ut),g=z,D=!1}function mt(z,pe){z.side===Kn?we(n.CULL_FACE):ce(n.CULL_FACE);let te=z.side===Qt;pe&&(te=!te),Ge(te),z.blending===mr&&z.transparent===!1?I(mi):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const ae=z.stencilWrite;o.setTest(ae),ae&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),nt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function ke(z){z!==Ch?(ce(n.CULL_FACE),z!==F&&(z===tc?n.cullFace(n.BACK):z===Fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),F=z}function Te(z){z!==B&&(U&&n.lineWidth(z),B=z)}function nt(z,pe,te){z?(ce(n.POLYGON_OFFSET_FILL),(O!==pe||V!==te)&&(n.polygonOffset(pe,te),O=pe,V=te)):we(n.POLYGON_OFFSET_FILL)}function Fe(z){z?ce(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function P(z){z===void 0&&(z=n.TEXTURE0+X-1),ne!==z&&(n.activeTexture(z),ne=z)}function b(z,pe,te){te===void 0&&(ne===null?te=n.TEXTURE0+X-1:te=ne);let ae=se[te];ae===void 0&&(ae={type:void 0,texture:void 0},se[te]=ae),(ae.type!==z||ae.texture!==pe)&&(ne!==te&&(n.activeTexture(te),ne=te),n.bindTexture(z,pe||de[z]),ae.type=z,ae.texture=pe)}function S(){const z=se[ne];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(z){Le.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Le.copy(z))}function fe(z){ee.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ee.copy(z))}function ze(z,pe){let te=c.get(pe);te===void 0&&(te=new WeakMap,c.set(pe,te));let ae=te.get(z);ae===void 0&&(ae=n.getUniformBlockIndex(pe,z.name),te.set(z,ae))}function Re(z,pe){const ae=c.get(pe).get(z);u.get(pe)!==ae&&(n.uniformBlockBinding(pe,ae,z.__bindingPointIndex),u.set(pe,ae))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},ne=null,se={},f={},d=new WeakMap,m=[],_=null,h=!1,g=null,p=null,A=null,v=null,E=null,y=null,x=null,w=new st(0,0,0),T=0,D=!1,M=null,F=null,B=null,O=null,V=null,Le.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:we,bindFramebuffer:Ce,drawBuffers:ve,useProgram:Qe,setBlending:I,setMaterial:mt,setFlipSided:Ge,setCullFace:ke,setLineWidth:Te,setPolygonOffset:nt,setScissorTest:Fe,activeTexture:P,bindTexture:b,unbindTexture:S,compressedTexImage2D:R,compressedTexImage3D:N,texImage2D:K,texImage3D:me,updateUBOMapping:ze,uniformBlockBinding:Re,texStorage2D:re,texStorage3D:Y,texSubImage2D:L,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:xe,viewport:fe,reset:Ke}}function C_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,l=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return m?new OffscreenCanvas(P,b):Qs("canvas")}function h(P,b,S){let R=1;const N=Fe(P);if((N.width>S||N.height>S)&&(R=S/Math.max(N.width,N.height)),R<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const L=Math.floor(R*N.width),$=Math.floor(R*N.height);f===void 0&&(f=_(L,$));const W=b?_(L,$):f;return W.width=L,W.height=$,W.getContext("2d").drawImage(P,0,0,L,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+L+"x"+$+")."),W}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,b,S,R,N=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let L=b;if(b===n.RED&&(S===n.FLOAT&&(L=n.R32F),S===n.HALF_FLOAT&&(L=n.R16F),S===n.UNSIGNED_BYTE&&(L=n.R8)),b===n.RED_INTEGER&&(S===n.UNSIGNED_BYTE&&(L=n.R8UI),S===n.UNSIGNED_SHORT&&(L=n.R16UI),S===n.UNSIGNED_INT&&(L=n.R32UI),S===n.BYTE&&(L=n.R8I),S===n.SHORT&&(L=n.R16I),S===n.INT&&(L=n.R32I)),b===n.RG&&(S===n.FLOAT&&(L=n.RG32F),S===n.HALF_FLOAT&&(L=n.RG16F),S===n.UNSIGNED_BYTE&&(L=n.RG8)),b===n.RG_INTEGER&&(S===n.UNSIGNED_BYTE&&(L=n.RG8UI),S===n.UNSIGNED_SHORT&&(L=n.RG16UI),S===n.UNSIGNED_INT&&(L=n.RG32UI),S===n.BYTE&&(L=n.RG8I),S===n.SHORT&&(L=n.RG16I),S===n.INT&&(L=n.RG32I)),b===n.RGB_INTEGER&&(S===n.UNSIGNED_BYTE&&(L=n.RGB8UI),S===n.UNSIGNED_SHORT&&(L=n.RGB16UI),S===n.UNSIGNED_INT&&(L=n.RGB32UI),S===n.BYTE&&(L=n.RGB8I),S===n.SHORT&&(L=n.RGB16I),S===n.INT&&(L=n.RGB32I)),b===n.RGBA_INTEGER&&(S===n.UNSIGNED_BYTE&&(L=n.RGBA8UI),S===n.UNSIGNED_SHORT&&(L=n.RGBA16UI),S===n.UNSIGNED_INT&&(L=n.RGBA32UI),S===n.BYTE&&(L=n.RGBA8I),S===n.SHORT&&(L=n.RGBA16I),S===n.INT&&(L=n.RGBA32I)),b===n.RGB&&S===n.UNSIGNED_INT_5_9_9_9_REV&&(L=n.RGB9_E5),b===n.RGBA){const $=N?js:rt.getTransfer(R);S===n.FLOAT&&(L=n.RGBA32F),S===n.HALF_FLOAT&&(L=n.RGBA16F),S===n.UNSIGNED_BYTE&&(L=$===lt?n.SRGB8_ALPHA8:n.RGBA8),S===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),S===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return(L===n.R16F||L===n.R32F||L===n.RG16F||L===n.RG32F||L===n.RGBA16F||L===n.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function E(P,b){let S;return P?b===null||b===Hi||b===Mr?S=n.DEPTH24_STENCIL8:b===jn?S=n.DEPTH32F_STENCIL8:b===qr&&(S=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===Mr?S=n.DEPTH_COMPONENT24:b===jn?S=n.DEPTH_COMPONENT32F:b===qr&&(S=n.DEPTH_COMPONENT16),S}function y(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function x(P){const b=P.target;b.removeEventListener("dispose",x),T(b),b.isVideoTexture&&l.delete(b)}function w(P){const b=P.target;b.removeEventListener("dispose",w),M(b)}function T(P){const b=i.get(P);if(b.__webglInit===void 0)return;const S=P.source,R=d.get(S);if(R){const N=R[b.__cacheKey];N.usedTimes--,N.usedTimes===0&&D(P),Object.keys(R).length===0&&d.delete(S)}i.remove(P)}function D(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const S=P.source,R=d.get(S);delete R[b.__cacheKey],a.memory.textures--}function M(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(b.__webglFramebuffer[R]))for(let N=0;N<b.__webglFramebuffer[R].length;N++)n.deleteFramebuffer(b.__webglFramebuffer[R][N]);else n.deleteFramebuffer(b.__webglFramebuffer[R]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[R])}else{if(Array.isArray(b.__webglFramebuffer))for(let R=0;R<b.__webglFramebuffer.length;R++)n.deleteFramebuffer(b.__webglFramebuffer[R]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let R=0;R<b.__webglColorRenderbuffer.length;R++)b.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[R]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const S=P.textures;for(let R=0,N=S.length;R<N;R++){const L=i.get(S[R]);L.__webglTexture&&(n.deleteTexture(L.__webglTexture),a.memory.textures--),i.remove(S[R])}i.remove(P)}let F=0;function B(){F=0}function O(){const P=F;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),F+=1,P}function V(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function X(P,b){const S=i.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.version>0&&S.__version!==P.version){const R=P.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(S,P,b);return}}t.bindTexture(n.TEXTURE_2D,S.__webglTexture,n.TEXTURE0+b)}function U(P,b){const S=i.get(P);if(P.version>0&&S.__version!==P.version){ee(S,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,S.__webglTexture,n.TEXTURE0+b)}function j(P,b){const S=i.get(P);if(P.version>0&&S.__version!==P.version){ee(S,P,b);return}t.bindTexture(n.TEXTURE_3D,S.__webglTexture,n.TEXTURE0+b)}function G(P,b){const S=i.get(P);if(P.version>0&&S.__version!==P.version){ue(S,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+b)}const ne={[Ro]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[Po]:n.MIRRORED_REPEAT},se={[Tn]:n.NEAREST,[sd]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},he={[ld]:n.NEVER,[gd]:n.ALWAYS,[fd]:n.LESS,[rf]:n.LEQUAL,[hd]:n.EQUAL,[md]:n.GEQUAL,[dd]:n.GREATER,[pd]:n.NOTEQUAL};function Se(P,b){if(b.type===jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===Ua||b.magFilter===ms||b.magFilter===Oi||b.minFilter===Ln||b.minFilter===Ua||b.minFilter===ms||b.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ne[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ne[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ne[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,se[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tn||b.minFilter!==ms&&b.minFilter!==Oi||b.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const S=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Le(P,b){let S=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",x));const R=b.source;let N=d.get(R);N===void 0&&(N={},d.set(R,N));const L=V(b);if(L!==P.__cacheKey){N[L]===void 0&&(N[L]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,S=!0),N[L].usedTimes++;const $=N[P.__cacheKey];$!==void 0&&(N[P.__cacheKey].usedTimes--,$.usedTimes===0&&D(b)),P.__cacheKey=L,P.__webglTexture=N[L].texture}return S}function ee(P,b,S){let R=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(R=n.TEXTURE_3D);const N=Le(P,b),L=b.source;t.bindTexture(R,P.__webglTexture,n.TEXTURE0+S);const $=i.get(L);if(L.version!==$.__version||N===!0){t.activeTexture(n.TEXTURE0+S);const W=rt.getPrimaries(rt.workingColorSpace),Q=b.colorSpace===di?null:rt.getPrimaries(b.colorSpace),re=b.colorSpace===di||W===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Y=h(b.image,!1,r.maxTextureSize);Y=nt(b,Y);const K=s.convert(b.format,b.colorSpace),me=s.convert(b.type);let xe=v(b.internalFormat,K,me,b.colorSpace,b.isVideoTexture);Se(R,b);let fe;const ze=b.mipmaps,Re=b.isVideoTexture!==!0,Ke=$.__version===void 0||N===!0,z=L.dataReady,pe=y(b,Y);if(b.isDepthTexture)xe=E(b.format===Dr,b.type),Ke&&(Re?t.texStorage2D(n.TEXTURE_2D,1,xe,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,xe,Y.width,Y.height,0,K,me,null));else if(b.isDataTexture)if(ze.length>0){Re&&Ke&&t.texStorage2D(n.TEXTURE_2D,pe,xe,ze[0].width,ze[0].height);for(let te=0,ae=ze.length;te<ae;te++)fe=ze[te],Re?z&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,K,me,fe.data):t.texImage2D(n.TEXTURE_2D,te,xe,fe.width,fe.height,0,K,me,fe.data);b.generateMipmaps=!1}else Re?(Ke&&t.texStorage2D(n.TEXTURE_2D,pe,xe,Y.width,Y.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,K,me,Y.data)):t.texImage2D(n.TEXTURE_2D,0,xe,Y.width,Y.height,0,K,me,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Re&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,ze[0].width,ze[0].height,Y.depth);for(let te=0,ae=ze.length;te<ae;te++)if(fe=ze[te],b.format!==bn)if(K!==null)if(Re){if(z)if(b.layerUpdates.size>0){const Me=Fc(fe.width,fe.height,b.format,b.type);for(const ye of b.layerUpdates){const Xe=fe.data.subarray(ye*Me/fe.data.BYTES_PER_ELEMENT,(ye+1)*Me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ye,fe.width,fe.height,1,K,Xe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,Y.depth,K,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,xe,fe.width,fe.height,Y.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,Y.depth,K,me,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,xe,fe.width,fe.height,Y.depth,0,K,me,fe.data)}else{Re&&Ke&&t.texStorage2D(n.TEXTURE_2D,pe,xe,ze[0].width,ze[0].height);for(let te=0,ae=ze.length;te<ae;te++)fe=ze[te],b.format!==bn?K!==null?Re?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,K,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?z&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe.width,fe.height,K,me,fe.data):t.texImage2D(n.TEXTURE_2D,te,xe,fe.width,fe.height,0,K,me,fe.data)}else if(b.isDataArrayTexture)if(Re){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,Y.width,Y.height,Y.depth),z)if(b.layerUpdates.size>0){const te=Fc(Y.width,Y.height,b.format,b.type);for(const ae of b.layerUpdates){const Me=Y.data.subarray(ae*te/Y.data.BYTES_PER_ELEMENT,(ae+1)*te/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,Y.width,Y.height,1,K,me,Me)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,K,me,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Y.width,Y.height,Y.depth,0,K,me,Y.data);else if(b.isData3DTexture)Re?(Ke&&t.texStorage3D(n.TEXTURE_3D,pe,xe,Y.width,Y.height,Y.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,K,me,Y.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Y.width,Y.height,Y.depth,0,K,me,Y.data);else if(b.isFramebufferTexture){if(Ke)if(Re)t.texStorage2D(n.TEXTURE_2D,pe,xe,Y.width,Y.height);else{let te=Y.width,ae=Y.height;for(let Me=0;Me<pe;Me++)t.texImage2D(n.TEXTURE_2D,Me,xe,te,ae,0,K,me,null),te>>=1,ae>>=1}}else if(ze.length>0){if(Re&&Ke){const te=Fe(ze[0]);t.texStorage2D(n.TEXTURE_2D,pe,xe,te.width,te.height)}for(let te=0,ae=ze.length;te<ae;te++)fe=ze[te],Re?z&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,K,me,fe):t.texImage2D(n.TEXTURE_2D,te,xe,K,me,fe);b.generateMipmaps=!1}else if(Re){if(Ke){const te=Fe(Y);t.texStorage2D(n.TEXTURE_2D,pe,xe,te.width,te.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K,me,Y)}else t.texImage2D(n.TEXTURE_2D,0,xe,K,me,Y);g(b)&&p(R),$.__version=L.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ue(P,b,S){if(b.image.length!==6)return;const R=Le(P,b),N=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+S);const L=i.get(N);if(N.version!==L.__version||R===!0){t.activeTexture(n.TEXTURE0+S);const $=rt.getPrimaries(rt.workingColorSpace),W=b.colorSpace===di?null:rt.getPrimaries(b.colorSpace),Q=b.colorSpace===di||$===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const re=b.isCompressedTexture||b.image[0].isCompressedTexture,Y=b.image[0]&&b.image[0].isDataTexture,K=[];for(let ae=0;ae<6;ae++)!re&&!Y?K[ae]=h(b.image[ae],!0,r.maxCubemapSize):K[ae]=Y?b.image[ae].image:b.image[ae],K[ae]=nt(b,K[ae]);const me=K[0],xe=s.convert(b.format,b.colorSpace),fe=s.convert(b.type),ze=v(b.internalFormat,xe,fe,b.colorSpace),Re=b.isVideoTexture!==!0,Ke=L.__version===void 0||R===!0,z=N.dataReady;let pe=y(b,me);Se(n.TEXTURE_CUBE_MAP,b);let te;if(re){Re&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ze,me.width,me.height);for(let ae=0;ae<6;ae++){te=K[ae].mipmaps;for(let Me=0;Me<te.length;Me++){const ye=te[Me];b.format!==bn?xe!==null?Re?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,ze,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,xe,fe,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,ze,ye.width,ye.height,0,xe,fe,ye.data)}}}else{if(te=b.mipmaps,Re&&Ke){te.length>0&&pe++;const ae=Fe(K[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Y){Re?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,K[ae].width,K[ae].height,xe,fe,K[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,K[ae].width,K[ae].height,0,xe,fe,K[ae].data);for(let Me=0;Me<te.length;Me++){const Xe=te[Me].image[ae].image;Re?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,Xe.width,Xe.height,xe,fe,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,ze,Xe.width,Xe.height,0,xe,fe,Xe.data)}}else{Re?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe,fe,K[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,xe,fe,K[ae]);for(let Me=0;Me<te.length;Me++){const ye=te[Me];Re?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,xe,fe,ye.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,ze,xe,fe,ye.image[ae])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),L.__version=N.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function de(P,b,S,R,N,L){const $=s.convert(S.format,S.colorSpace),W=s.convert(S.type),Q=v(S.internalFormat,$,W,S.colorSpace),re=i.get(b),Y=i.get(S);if(Y.__renderTarget=b,!re.__hasExternalTextures){const K=Math.max(1,b.width>>L),me=Math.max(1,b.height>>L);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,L,Q,K,me,b.depth,0,$,W,null):t.texImage2D(N,L,Q,K,me,0,$,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,N,Y.__webglTexture,0,Ge(b)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,N,Y.__webglTexture,L),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(P,b,S){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const R=b.depthTexture,N=R&&R.isDepthTexture?R.type:null,L=E(b.stencilBuffer,N),$=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=Ge(b);ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,L,b.width,b.height):S?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,L,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,L,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,P)}else{const R=b.textures;for(let N=0;N<R.length;N++){const L=R[N],$=s.convert(L.format,L.colorSpace),W=s.convert(L.type),Q=v(L.internalFormat,$,W,L.colorSpace),re=Ge(b);S&&ke(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Q,b.width,b.height):ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const R=i.get(b.depthTexture);R.__renderTarget=b,(!R.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const N=R.__webglTexture,L=Ge(b);if(b.depthTexture.format===gr)ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,L):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(b.depthTexture.format===Dr)ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,L):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const b=i.get(P),S=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const R=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),R){const N=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,R.removeEventListener("dispose",N)};R.addEventListener("dispose",N),b.__depthDisposeCallback=N}b.__boundDepthTexture=R}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");we(b.__webglFramebuffer,P)}else if(S){b.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[R]),b.__webglDepthbuffer[R]===void 0)b.__webglDepthbuffer[R]=n.createRenderbuffer(),ce(b.__webglDepthbuffer[R],P,!1);else{const N=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer[R];n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,L)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ce(b.__webglDepthbuffer,P,!1);else{const R=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,R,n.RENDERBUFFER,N)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(P,b,S){const R=i.get(P);b!==void 0&&de(R.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),S!==void 0&&Ce(P)}function Qe(P){const b=P.texture,S=i.get(P),R=i.get(b);P.addEventListener("dispose",w);const N=P.textures,L=P.isWebGLCubeRenderTarget===!0,$=N.length>1;if($||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=b.version,a.memory.textures++),L){S.__webglFramebuffer=[];for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0){S.__webglFramebuffer[W]=[];for(let Q=0;Q<b.mipmaps.length;Q++)S.__webglFramebuffer[W][Q]=n.createFramebuffer()}else S.__webglFramebuffer[W]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){S.__webglFramebuffer=[];for(let W=0;W<b.mipmaps.length;W++)S.__webglFramebuffer[W]=n.createFramebuffer()}else S.__webglFramebuffer=n.createFramebuffer();if($)for(let W=0,Q=N.length;W<Q;W++){const re=i.get(N[W]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ke(P)===!1){S.__webglMultisampledFramebuffer=n.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let W=0;W<N.length;W++){const Q=N[W];S.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,S.__webglColorRenderbuffer[W]);const re=s.convert(Q.format,Q.colorSpace),Y=s.convert(Q.type),K=v(Q.internalFormat,re,Y,Q.colorSpace,P.isXRRenderTarget===!0),me=Ge(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,K,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,S.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(S.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(S.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),Se(n.TEXTURE_CUBE_MAP,b);for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)de(S.__webglFramebuffer[W][Q],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,Q);else de(S.__webglFramebuffer[W],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let W=0,Q=N.length;W<Q;W++){const re=N[W],Y=i.get(re);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture),Se(n.TEXTURE_2D,re),de(S.__webglFramebuffer,P,re,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,0),g(re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(W=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,R.__webglTexture),Se(W,b),b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)de(S.__webglFramebuffer[Q],P,b,n.COLOR_ATTACHMENT0,W,Q);else de(S.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,W,0);g(b)&&p(W),t.unbindTexture()}P.depthBuffer&&Ce(P)}function Ye(P){const b=P.textures;for(let S=0,R=b.length;S<R;S++){const N=b[S];if(g(N)){const L=A(P),$=i.get(N).__webglTexture;t.bindTexture(L,$),p(L),t.unbindTexture()}}}const be=[],I=[];function mt(P){if(P.samples>0){if(ke(P)===!1){const b=P.textures,S=P.width,R=P.height;let N=n.COLOR_BUFFER_BIT;const L=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(P),W=b.length>1;if(W)for(let Q=0;Q<b.length;Q++)t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let Q=0;Q<b.length;Q++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[Q]);const re=i.get(b[Q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,S,R,0,0,S,R,N,n.NEAREST),u===!0&&(be.length=0,I.length=0,be.push(n.COLOR_ATTACHMENT0+Q),P.depthBuffer&&P.resolveDepthBuffer===!1&&(be.push(L),I.push(L),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let Q=0;Q<b.length;Q++){t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,$.__webglColorRenderbuffer[Q]);const re=i.get(b[Q]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&u){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ge(P){return Math.min(r.maxSamples,P.samples)}function ke(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(P){const b=a.render.frame;l.get(P)!==b&&(l.set(P,b),P.update())}function nt(P,b){const S=P.colorSpace,R=P.format,N=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||S!==Sr&&S!==di&&(rt.getTransfer(S)===lt?(R!==bn||N!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",S)),b}function Fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=U,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=ve,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ke}function F_(n,e){function t(i,r=di){let s;const a=rt.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===Mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Du)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yl)return n.BYTE;if(i===$l)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===yu)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===Kl)return n.ALPHA;if(i===jl)return n.RGB;if(i===bn)return n.RGBA;if(i===Jl)return n.LUMINANCE;if(i===Ql)return n.LUMINANCE_ALPHA;if(i===gr)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===ef)return n.RED;if(i===Su)return n.RED_INTEGER;if(i===tf)return n.RG;if(i===Au)return n.RG_INTEGER;if(i===wu)return n.RGBA_INTEGER;if(i===Gs||i===ks||i===Ws||i===Xs)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===No||i===Lo||i===Io||i===Uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===No)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bo||i===Oo||i===zo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bo||i===Oo)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ho||i===Vo||i===Go||i===ko||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Zo||i===Ko||i===jo||i===Jo||i===Qo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ho)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Go)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ko)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$o)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ko)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qs||i===eu||i===tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qs)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nf||i===nu||i===iu||i===ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vi({vertexShader:R_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new _a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L_ extends ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",u=1,c=null,l=null,f=null,d=null,m=null,_=null;const h=new N_,g=t.getContextAttributes();let p=null,A=null;const v=[],E=[],y=new je;let x=null;const w=new _n;w.viewport=new wt;const T=new _n;T.viewport=new wt;const D=[w,T],M=new ep;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=v[ee];return ue===void 0&&(ue=new io,v[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=v[ee];return ue===void 0&&(ue=new io,v[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=v[ee];return ue===void 0&&(ue=new io,v[ee]=ue),ue.getHandSpace()};function O(ee){const ue=E.indexOf(ee.inputSource);if(ue===-1)return;const de=v[ue];de!==void 0&&(de.update(ee.inputSource,ee.frame,c||a),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",X);for(let ee=0;ee<v.length;ee++){const ue=E[ee];ue!==null&&(E[ee]=null,v[ee].disconnect(ue))}F=null,B=null,h.reset(),e.setRenderTarget(p),m=null,d=null,f=null,r=null,A=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ce=null,we=null;g.depth&&(we=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?Dr:gr,ce=g.stencil?Mr:Hi);const Ce={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Vi(d.textureWidth,d.textureHeight,{format:bn,type:ti,depthTexture:new _f(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Vi(m.framebufferWidth,m.framebufferHeight,{format:bn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}A.isXRRenderTarget=!0,this.setFoveation(u),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function X(ee){for(let ue=0;ue<ee.removed.length;ue++){const de=ee.removed[ue],ce=E.indexOf(de);ce>=0&&(E[ce]=null,v[ce].disconnect(de))}for(let ue=0;ue<ee.added.length;ue++){const de=ee.added[ue];let ce=E.indexOf(de);if(ce===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=E.length){E.push(de),ce=Ce;break}else if(E[Ce]===null){E[Ce]=de,ce=Ce;break}if(ce===-1)break}const we=v[ce];we&&we.connect(de)}}const U=new Z,j=new Z;function G(ee,ue,de){U.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const ce=U.distanceTo(j),we=ue.projectionMatrix.elements,Ce=de.projectionMatrix.elements,ve=we[14]/(we[10]-1),Qe=we[14]/(we[10]+1),Ye=(we[9]+1)/we[5],be=(we[9]-1)/we[5],I=(we[8]-1)/we[0],mt=(Ce[8]+1)/Ce[0],Ge=ve*I,ke=ve*mt,Te=ce/(-I+mt),nt=Te*-I;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(nt),ee.translateZ(Te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Fe=ve+Te,P=Qe+Te,b=Ge-nt,S=ke+(ce-nt),R=Ye*Qe/P*Fe,N=be*Qe/P*Fe;ee.projectionMatrix.makePerspective(b,S,R,N,Fe,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ne(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ue=ee.near,de=ee.far;h.texture!==null&&(h.depthNear>0&&(ue=h.depthNear),h.depthFar>0&&(de=h.depthFar)),M.near=T.near=w.near=ue,M.far=T.far=w.far=de,(F!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,B=M.far),w.layers.mask=ee.layers.mask|2,T.layers.mask=ee.layers.mask|4,M.layers.mask=w.layers.mask|T.layers.mask;const ce=ee.parent,we=M.cameras;ne(M,ce);for(let Ce=0;Ce<we.length;Ce++)ne(we[Ce],ce);we.length===2?G(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),se(ee,M,ce)};function se(ee,ue,de){de===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(de.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=su*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return u},this.setFoveation=function(ee){u=ee,d!==null&&(d.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(M)};let he=null;function Se(ee,ue){if(l=ue.getViewerPose(c||a),_=ue,l!==null){const de=l.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let ce=!1;de.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let ve=0;ve<de.length;ve++){const Qe=de[ve];let Ye=null;if(m!==null)Ye=m.getViewport(Qe);else{const I=f.getViewSubImage(d,Qe);Ye=I.viewport,ve===0&&(e.setRenderTargetTextures(A,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(A))}let be=D[ve];be===void 0&&(be=new _n,be.layers.enable(ve),be.viewport=new wt,D[ve]=be),be.matrix.fromArray(Qe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Qe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ve===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(be)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ve=f.getDepthInformation(de[0]);ve&&ve.isValid&&ve.texture&&h.init(e,ve,r.renderState)}}for(let de=0;de<v.length;de++){const ce=E[de],we=v[de];ce!==null&&we!==void 0&&we.update(ce,ue,c||a)}he&&he(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Le=new vf;Le.setAnimationLoop(Se),this.setAnimationLoop=function(ee){he=ee},this.dispose=function(){}}}const Fi=new ni,I_=new Tt;function U_(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,hf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),l(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),h(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?u(g,p,A,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p),v=A.envMap,E=A.envMapRotation;v&&(g.envMap.value=v,Fi.copy(E),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(Fi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function u(g,p,A,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function h(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(A,v){const E=v.program;i.uniformBlockBinding(A,E)}function c(A,v){let E=r[A.id];E===void 0&&(_(A),E=l(A),r[A.id]=E,A.addEventListener("dispose",g));const y=v.program;i.updateUBOMapping(A,y);const x=e.render.frame;s[A.id]!==x&&(d(A),s[A.id]=x)}function l(A){const v=f();A.__bindingPointIndex=v;const E=n.createBuffer(),y=A.__size,x=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const v=r[A.id],E=A.uniforms,y=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let x=0,w=E.length;x<w;x++){const T=Array.isArray(E[x])?E[x]:[E[x]];for(let D=0,M=T.length;D<M;D++){const F=T[D];if(m(F,x,D,y)===!0){const B=F.__offset,O=Array.isArray(F.value)?F.value:[F.value];let V=0;for(let X=0;X<O.length;X++){const U=O[X],j=h(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,B+V,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):(U.toArray(F.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,v,E,y){const x=A.value,w=v+"_"+E;if(y[w]===void 0)return typeof x=="number"||typeof x=="boolean"?y[w]=x:y[w]=x.clone(),!0;{const T=y[w];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return y[w]=x,!0}else if(T.equals(x)===!1)return T.copy(x),!0}return!1}function _(A){const v=A.uniforms;let E=0;const y=16;for(let w=0,T=v.length;w<T;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,F=D.length;M<F;M++){const B=D[M],O=Array.isArray(B.value)?B.value:[B.value];for(let V=0,X=O.length;V<X;V++){const U=O[V],j=h(U),G=E%y,ne=G%j.boundary,se=G+ne;E+=ne,se!==0&&y-se<j.storage&&(E+=y-se),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=j.storage}}}const x=E%y;return x>0&&(E+=y-x),A.__size=E,A.__cache={},this}function h(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function g(A){const v=A.target;v.removeEventListener("dispose",g);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:u,update:c,dispose:p}}class O_{constructor(e={}){const{canvas:t=Ed(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),h=new Int32Array(4);let g=null,p=null;const A=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=gi,this.toneMappingExposure=1;const E=this;let y=!1,x=0,w=0,T=null,D=-1,M=null;const F=new wt,B=new wt;let O=null;const V=new st(0);let X=0,U=t.width,j=t.height,G=1,ne=null,se=null;const he=new wt(0,0,U,j),Se=new wt(0,0,U,j);let Le=!1;const ee=new mf;let ue=!1,de=!1;this.transmissionResolutionScale=1;const ce=new Tt,we=new Tt,Ce=new Z,ve=new wt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function be(){return T===null?G:1}let I=i;function mt(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),I===null){const k="webgl2";if(I=mt(k,C),I===null)throw mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ge,ke,Te,nt,Fe,P,b,S,R,N,L,$,W,Q,re,Y,K,me,xe,fe,ze,Re,Ke,z;function pe(){Ge=new $0(I),Ge.init(),Re=new F_(I,Ge),ke=new G0(I,Ge,e,Re),Te=new T_(I,Ge),ke.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),nt=new j0(I),Fe=new m_,P=new C_(I,Ge,Te,Fe,ke,Re,nt),b=new W0(E),S=new Y0(E),R=new rp(I),Ke=new H0(I,R),N=new Z0(I,R,nt,Ke),L=new Q0(I,N,R,nt),xe=new J0(I,ke,P),Y=new k0(Fe),$=new p_(E,b,S,Ge,ke,Ke,Y),W=new U_(E,Fe),Q=new __,re=new D_(Ge),me=new z0(E,b,S,Te,L,m,u),K=new w_(E,L,ke),z=new B_(I,nt,ke,Te),fe=new V0(I,Ge,nt),ze=new K0(I,Ge,nt),nt.programs=$.programs,E.capabilities=ke,E.extensions=Ge,E.properties=Fe,E.renderLists=Q,E.shadowMap=K,E.state=Te,E.info=nt}pe();const te=new L_(E,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Ge.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ge.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(U,j,!1))},this.getSize=function(C){return C.set(U,j)},this.setSize=function(C,k,J=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,j=k,t.width=Math.floor(C*G),t.height=Math.floor(k*G),J===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(U*G,j*G).floor()},this.setDrawingBufferSize=function(C,k,J){U=C,j=k,G=J,t.width=Math.floor(C*J),t.height=Math.floor(k*J),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,k,J,q){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,k,J,q),Te.viewport(F.copy(he).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(Se)},this.setScissor=function(C,k,J,q){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,k,J,q),Te.scissor(B.copy(Se).multiplyScalar(G).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){Te.setScissorTest(Le=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(C=!0,k=!0,J=!0){let q=0;if(C){let H=!1;if(T!==null){const le=T.texture.format;H=le===wu||le===Au||le===Su}if(H){const le=T.texture.type,ge=le===ti||le===Hi||le===qr||le===Mr||le===Mu||le===Du,De=me.getClearColor(),Ae=me.getClearAlpha(),Ve=De.r,We=De.g,Ue=De.b;ge?(_[0]=Ve,_[1]=We,_[2]=Ue,_[3]=Ae,I.clearBufferuiv(I.COLOR,0,_)):(h[0]=Ve,h[1]=We,h[2]=Ue,h[3]=Ae,I.clearBufferiv(I.COLOR,0,h))}else q|=I.COLOR_BUFFER_BIT}k&&(q|=I.DEPTH_BUFFER_BIT),J&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),me.dispose(),Q.dispose(),re.dispose(),Fe.dispose(),b.dispose(),S.dispose(),L.dispose(),Ke.dispose(),z.dispose(),$.dispose(),te.dispose(),te.removeEventListener("sessionstart",us),te.removeEventListener("sessionend",cs),Gn.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=nt.autoReset,k=K.enabled,J=K.autoUpdate,q=K.needsUpdate,H=K.type;pe(),nt.autoReset=C,K.enabled=k,K.autoUpdate=J,K.needsUpdate=q,K.type=H}function ye(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Xe(C){const k=C.target;k.removeEventListener("dispose",Xe),_t(k)}function _t(C){Ut(C),Fe.remove(C)}function Ut(C){const k=Fe.get(C).programs;k!==void 0&&(k.forEach(function(J){$.releaseProgram(J)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,J,q,H,le){k===null&&(k=Qe);const ge=H.isMesh&&H.matrixWorld.determinant()<0,De=Ca(C,k,J,q,H);Te.setMaterial(q,ge);let Ae=J.index,Ve=1;if(q.wireframe===!0){if(Ae=N.getWireframeAttribute(J),Ae===void 0)return;Ve=2}const We=J.drawRange,Ue=J.attributes.position;let et=We.start*Ve,ot=(We.start+We.count)*Ve;le!==null&&(et=Math.max(et,le.start*Ve),ot=Math.min(ot,(le.start+le.count)*Ve)),Ae!==null?(et=Math.max(et,0),ot=Math.min(ot,Ae.count)):Ue!=null&&(et=Math.max(et,0),ot=Math.min(ot,Ue.count));const Ct=ot-et;if(Ct<0||Ct===1/0)return;Ke.setup(H,q,De,J,Ae);let xt,it=fe;if(Ae!==null&&(xt=R.get(Ae),it=ze,it.setIndex(xt)),H.isMesh)q.wireframe===!0?(Te.setLineWidth(q.wireframeLinewidth*be()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(H.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),Te.setLineWidth(Be*be()),H.isLineSegments?it.setMode(I.LINES):H.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else H.isPoints?it.setMode(I.POINTS):H.isSprite&&it.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)it.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,Ht=H._multiDrawCounts,ut=H._multiDrawCount,yn=Ae?R.get(Ae).bytesPerElement:1,qi=Fe.get(q).currentProgram.getUniforms();for(let sn=0;sn<ut;sn++)qi.setValue(I,"_gl_DrawID",sn),it.render(Be[sn]/yn,Ht[sn])}else if(H.isInstancedMesh)it.renderInstances(et,Ct,H.count);else if(J.isInstancedBufferGeometry){const Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ht=Math.min(J.instanceCount,Be);it.renderInstances(et,Ct,Ht)}else it.render(et,Ct)};function at(C,k,J){C.transparent===!0&&C.side===Kn&&C.forceSinglePass===!1?(C.side=Qt,C.needsUpdate=!0,Xi(C,k,J),C.side=_i,C.needsUpdate=!0,Xi(C,k,J),C.side=Kn):Xi(C,k,J)}this.compile=function(C,k,J=null){J===null&&(J=C),p=re.get(J),p.init(k),v.push(p),J.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),C!==J&&C.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const De=le[ge];at(De,J,H),q.add(De)}else at(le,J,H),q.add(le)}),v.pop(),p=null,q},this.compileAsync=function(C,k,J=null){const q=this.compile(C,k,J);return new Promise(H=>{function le(){if(q.forEach(function(ge){Fe.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){H(C);return}setTimeout(le,10)}Ge.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let rn=null;function xn(C){rn&&rn(C)}function us(){Gn.stop()}function cs(){Gn.start()}const Gn=new vf;Gn.setAnimationLoop(xn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(C){rn=C,te.setAnimationLoop(C),C===null?Gn.stop():Gn.start()},te.addEventListener("sessionstart",us),te.addEventListener("sessionend",cs),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,k,T),p=re.get(C,v.length),p.init(k),v.push(p),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(we),de=this.localClippingEnabled,ue=Y.init(this.clippingPlanes,de),g=Q.get(C,A.length),g.init(),A.push(g),te.enabled===!0&&te.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&Ur(le,k,-1/0,E.sortObjects)}Ur(C,k,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(ne,se),Ye=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ye&&me.addToRenderList(g,C),this.info.render.frame++,ue===!0&&Y.beginShadows();const J=p.state.shadowsArray;K.render(J,C,k),ue===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,H=g.transmissive;if(p.setupLights(),k.isArrayCamera){const le=k.cameras;if(H.length>0)for(let ge=0,De=le.length;ge<De;ge++){const Ae=le[ge];fs(q,H,C,Ae)}Ye&&me.render(C);for(let ge=0,De=le.length;ge<De;ge++){const Ae=le[ge];ls(g,C,Ae,Ae.viewport)}}else H.length>0&&fs(q,H,C,k),Ye&&me.render(C),ls(g,C,k);T!==null&&w===0&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(E,C,k),Ke.resetDefaultState(),D=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],ue===!0&&Y.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function Ur(C,k,J,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){q&&ve.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const ge=L.update(C),De=C.material;De.visible&&g.push(C,ge,De,J,ve.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const ge=L.update(C),De=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ve.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ve.copy(ge.boundingSphere.center)),ve.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(De)){const Ae=ge.groups;for(let Ve=0,We=Ae.length;Ve<We;Ve++){const Ue=Ae[Ve],et=De[Ue.materialIndex];et&&et.visible&&g.push(C,ge,et,J,ve.z,Ue)}}else De.visible&&g.push(C,ge,De,J,ve.z,null)}}const le=C.children;for(let ge=0,De=le.length;ge<De;ge++)Ur(le[ge],k,J,q)}function ls(C,k,J,q){const H=C.opaque,le=C.transmissive,ge=C.transparent;p.setupLightsView(J),ue===!0&&Y.setGlobalState(E.clippingPlanes,J),q&&Te.viewport(F.copy(q)),H.length>0&&Wi(H,k,J),le.length>0&&Wi(le,k,J),ge.length>0&&Wi(ge,k,J),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function fs(C,k,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Vi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Qr:ti,minFilter:Oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const le=p.state.transmissionRenderTarget[q.id],ge=q.viewport||F;le.setSize(ge.z*E.transmissionResolutionScale,ge.w*E.transmissionResolutionScale);const De=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(V),X=E.getClearAlpha(),X<1&&E.setClearColor(16777215,.5),E.clear(),Ye&&me.render(J);const Ae=E.toneMapping;E.toneMapping=gi;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ue===!0&&Y.setGlobalState(E.clippingPlanes,q),Wi(C,J,q),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ue=0,et=k.length;Ue<et;Ue++){const ot=k[Ue],Ct=ot.object,xt=ot.geometry,it=ot.material,Be=ot.group;if(it.side===Kn&&Ct.layers.test(q.layers)){const Ht=it.side;it.side=Qt,it.needsUpdate=!0,hs(Ct,J,q,xt,it,Be),it.side=Ht,it.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}E.setRenderTarget(De),E.setClearColor(V,X),Ve!==void 0&&(q.viewport=Ve),E.toneMapping=Ae}function Wi(C,k,J){const q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,le=C.length;H<le;H++){const ge=C[H],De=ge.object,Ae=ge.geometry,Ve=q===null?ge.material:q,We=ge.group;De.layers.test(J.layers)&&hs(De,k,J,Ae,Ve,We)}}function hs(C,k,J,q,H,le){C.onBeforeRender(E,k,J,q,H,le),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(E,k,J,q,C,le),H.transparent===!0&&H.side===Kn&&H.forceSinglePass===!1?(H.side=Qt,H.needsUpdate=!0,E.renderBufferDirect(J,k,q,H,C,le),H.side=_i,H.needsUpdate=!0,E.renderBufferDirect(J,k,q,H,C,le),H.side=Kn):E.renderBufferDirect(J,k,q,H,C,le),C.onAfterRender(E,k,J,q,H,le)}function Xi(C,k,J){k.isScene!==!0&&(k=Qe);const q=Fe.get(C),H=p.state.lights,le=p.state.shadowsArray,ge=H.state.version,De=$.getParameters(C,H.state,le,k,J),Ae=$.getProgramCacheKey(De);let Ve=q.programs;q.environment=C.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(C.isMeshStandardMaterial?S:b).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",Xe),Ve=new Map,q.programs=Ve);let We=Ve.get(Ae);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===ge)return ps(C,De),We}else De.uniforms=$.getUniforms(C),C.onBeforeCompile(De,E),We=$.acquireProgram(De,Ae),Ve.set(Ae,We),q.uniforms=De.uniforms;const Ue=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=Y.uniform),ps(C,De),q.needsLights=Ra(C),q.lightsStateVersion=ge,q.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function ds(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=$s.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function ps(C,k){const J=Fe.get(C);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Ca(C,k,J,q,H){k.isScene!==!0&&(k=Qe),P.resetTextureUnits();const le=k.fog,ge=q.isMeshStandardMaterial?k.environment:null,De=T===null?E.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Sr,Ae=(q.isMeshStandardMaterial?S:b).get(q.envMap||ge),Ve=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!J.morphAttributes.position,et=!!J.morphAttributes.normal,ot=!!J.morphAttributes.color;let Ct=gi;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ct=E.toneMapping);const xt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,it=xt!==void 0?xt.length:0,Be=Fe.get(q),Ht=p.state.lights;if(ue===!0&&(de===!0||C!==M)){const Yt=C===M&&q.id===D;Y.setState(q,C,Yt)}let ut=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ht.state.version||Be.outputColorSpace!==De||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==Ae||q.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Y.numPlanes||Be.numIntersection!==Y.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==We||Be.morphTargets!==Ue||Be.morphNormals!==et||Be.morphColors!==ot||Be.toneMapping!==Ct||Be.morphTargetsCount!==it)&&(ut=!0):(ut=!0,Be.__version=q.version);let yn=Be.currentProgram;ut===!0&&(yn=Xi(q,k,H));let qi=!1,sn=!1,Br=!1;const vt=yn.getUniforms(),ln=Be.uniforms;if(Te.useProgram(yn.program)&&(qi=!0,sn=!0,Br=!0),q.id!==D&&(D=q.id,sn=!0),qi||M!==C){Te.buffers.depth.getReversed()?(ce.copy(C.projectionMatrix),yd(ce),Md(ce),vt.setValue(I,"projectionMatrix",ce)):vt.setValue(I,"projectionMatrix",C.projectionMatrix),vt.setValue(I,"viewMatrix",C.matrixWorldInverse);const Zt=vt.map.cameraPosition;Zt!==void 0&&Zt.setValue(I,Ce.setFromMatrixPosition(C.matrixWorld)),ke.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,sn=!0,Br=!0)}if(H.isSkinnedMesh){vt.setOptional(I,H,"bindMatrix"),vt.setOptional(I,H,"bindMatrixInverse");const Yt=H.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),vt.setValue(I,"boneTexture",Yt.boneTexture,P))}H.isBatchedMesh&&(vt.setOptional(I,H,"batchingTexture"),vt.setValue(I,"batchingTexture",H._matricesTexture,P),vt.setOptional(I,H,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",H._indirectTexture,P),vt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",H._colorsTexture,P));const fn=J.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&xe.update(H,J,yn),(sn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,vt.setValue(I,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ln.envMap.value=Ae,ln.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(ln.envMapIntensity.value=k.environmentIntensity),sn&&(vt.setValue(I,"toneMappingExposure",E.toneMappingExposure),Be.needsLights&&Fa(ln,Br),le&&q.fog===!0&&W.refreshFogUniforms(ln,le),W.refreshMaterialUniforms(ln,q,G,j,p.state.transmissionRenderTarget[C.id]),$s.upload(I,ds(Be),ln,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($s.upload(I,ds(Be),ln,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(I,"center",H.center),vt.setValue(I,"modelViewMatrix",H.modelViewMatrix),vt.setValue(I,"normalMatrix",H.normalMatrix),vt.setValue(I,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Yt=q.uniformsGroups;for(let Zt=0,Ia=Yt.length;Zt<Ia;Zt++){const Si=Yt[Zt];z.update(Si,yn),z.bind(Si,yn)}}return yn}function Fa(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Ra(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,k,J){Fe.get(C.texture).__webglTexture=k,Fe.get(C.depthTexture).__webglTexture=J;const q=Fe.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=J===void 0,q.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const J=Fe.get(C);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};const Pa=I.createFramebuffer();this.setRenderTarget=function(C,k=0,J=0){T=C,x=k,w=J;let q=!0,H=null,le=!1,ge=!1;if(C){const Ae=Fe.get(C);if(Ae.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ae.__hasExternalTextures)P.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ue=C.depthTexture;if(Ae.__boundDepthTexture!==Ue){if(Ue!==null&&Fe.has(Ue)&&(C.width!==Ue.image.width||C.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ge=!0);const We=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[k])?H=We[k][J]:H=We[k],le=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?H=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?H=We[J]:H=We,F.copy(C.viewport),B.copy(C.scissor),O=C.scissorTest}else F.copy(he).multiplyScalar(G).floor(),B.copy(Se).multiplyScalar(G).floor(),O=Le;if(J!==0&&(H=Pa),Te.bindFramebuffer(I.FRAMEBUFFER,H)&&q&&Te.drawBuffers(C,H),Te.viewport(F),Te.scissor(B),Te.setScissorTest(O),le){const Ae=Fe.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,J)}else if(ge){const Ae=Fe.get(C.texture),Ve=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,J,Ve)}else if(C!==null&&J!==0){const Ae=Fe.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,J)}D=-1},this.readRenderTargetPixels=function(C,k,J,q,H,le,ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(De=De[ge]),De){Te.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ae=C.texture,Ve=Ae.format,We=Ae.type;if(!ke.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&J>=0&&J<=C.height-H&&I.readPixels(k,J,q,H,Re.convert(Ve),Re.convert(We),le)}finally{const Ae=T!==null?Fe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(C,k,J,q,H,le,ge){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(De=De[ge]),De){const Ae=C.texture,Ve=Ae.format,We=Ae.type;if(!ke.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-q&&J>=0&&J<=C.height-H){Te.bindFramebuffer(I.FRAMEBUFFER,De);const Ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(k,J,q,H,Re.convert(Ve),Re.convert(We),0);const et=T!==null?Fe.get(T).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,et);const ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await xd(I,ot,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(Ue),I.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,J=0){C.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-J),H=Math.floor(C.image.width*q),le=Math.floor(C.image.height*q),ge=k!==null?k.x:0,De=k!==null?k.y:0;P.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,ge,De,H,le),Te.unbindTexture()};const Na=I.createFramebuffer(),La=I.createFramebuffer();this.copyTextureToTexture=function(C,k,J=null,q=null,H=0,le=null){C.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],k=arguments[2],le=arguments[3]||0,J=null),le===null&&(H!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let ge,De,Ae,Ve,We,Ue,et,ot,Ct;const xt=C.isCompressedTexture?C.mipmaps[le]:C.image;if(J!==null)ge=J.max.x-J.min.x,De=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,We=J.min.y,Ue=J.isBox3?J.min.z:0;else{const fn=Math.pow(2,-H);ge=Math.floor(xt.width*fn),De=Math.floor(xt.height*fn),C.isDataArrayTexture?Ae=xt.depth:C.isData3DTexture?Ae=Math.floor(xt.depth*fn):Ae=1,Ve=0,We=0,Ue=0}q!==null?(et=q.x,ot=q.y,Ct=q.z):(et=0,ot=0,Ct=0);const it=Re.convert(k.format),Be=Re.convert(k.type);let Ht;k.isData3DTexture?(P.setTexture3D(k,0),Ht=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Ht=I.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Ht=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const ut=I.getParameter(I.UNPACK_ROW_LENGTH),yn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qi=I.getParameter(I.UNPACK_SKIP_PIXELS),sn=I.getParameter(I.UNPACK_SKIP_ROWS),Br=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue);const vt=C.isDataArrayTexture||C.isData3DTexture,ln=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const fn=Fe.get(C),Yt=Fe.get(k),Zt=Fe.get(fn.__renderTarget),Ia=Fe.get(Yt.__renderTarget);Te.bindFramebuffer(I.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ia.__webglFramebuffer);for(let Si=0;Si<Ae;Si++)vt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,H,Ue+Si),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.get(k).__webglTexture,le,Ct+Si)),I.blitFramebuffer(Ve,We,ge,De,et,ot,ge,De,I.DEPTH_BUFFER_BIT,I.NEAREST);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||Fe.has(C)){const fn=Fe.get(C),Yt=Fe.get(k);Te.bindFramebuffer(I.READ_FRAMEBUFFER,Na),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,La);for(let Zt=0;Zt<Ae;Zt++)vt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,H,Ue+Zt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,H),ln?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,le,Ct+Zt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,le),H!==0?I.blitFramebuffer(Ve,We,ge,De,et,ot,ge,De,I.COLOR_BUFFER_BIT,I.NEAREST):ln?I.copyTexSubImage3D(Ht,le,et,ot,Ct+Zt,Ve,We,ge,De):I.copyTexSubImage2D(Ht,le,et,ot,Ve,We,ge,De);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ln?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Ht,le,et,ot,Ct,ge,De,Ae,it,Be,xt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Ht,le,et,ot,Ct,ge,De,Ae,it,xt.data):I.texSubImage3D(Ht,le,et,ot,Ct,ge,De,Ae,it,Be,xt):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,et,ot,ge,De,it,Be,xt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,et,ot,xt.width,xt.height,it,xt.data):I.texSubImage2D(I.TEXTURE_2D,le,et,ot,ge,De,it,Be,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Br),le===0&&k.generateMipmaps&&I.generateMipmap(Ht),Te.unbindTexture()},this.copyTextureToTexture3D=function(C,k,J=null,q=null,H=0){return C.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,q=arguments[1]||null,C=arguments[2],k=arguments[3],H=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,J,q,H)},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Te.unbindTexture()},this.resetState=function(){x=0,w=0,T=null,Te.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const tl={type:"change"},Ru={type:"start"},Df={type:"end"},Os=new bu,nl=new fi,z_=Math.cos(70*vd.DEG2RAD),Pt=new Z,jt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ho=1e-6;class H_ extends np{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Gi,this._lastTargetPosition=new Z,this._quat=new Gi().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cc,this._sphericalDelta=new Cc,this._scale=1,this._panOffset=new Z,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new Z,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G_.bind(this),this._onPointerDown=V_.bind(this),this._onPointerUp=k_.bind(this),this._onContextMenu=K_.bind(this),this._onMouseWheel=q_.bind(this),this._onKeyDown=Y_.bind(this),this._onTouchStart=$_.bind(this),this._onTouchMove=Z_.bind(this),this._onMouseDown=W_.bind(this),this._onMouseMove=X_.bind(this),this._interceptControlDown=j_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tl),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=jt:i>Math.PI&&(i-=jt),r<-Math.PI?r+=jt:r>Math.PI&&(r-=jt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pt.length();a=this._clampDistance(o*this._scale);const u=o-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Os.origin.copy(this.object.position),Os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Os.direction))<z_?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Os.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ho||this._lastTargetPosition.distanceToSquared(this.target)>ho?(this.dispatchEvent(tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jt/60*this.autoRotateSpeed*e:jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pt.copy(r).sub(this.target);let s=Pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function V_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function G_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function k_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Df),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function W_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ru)}function X_(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function q_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(Ru),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Df))}function Y_(n){this.enabled!==!1&&this._handleKeyDown(n)}function $_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ru)}function Z_(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function K_(n){this.enabled!==!1&&n.preventDefault()}function j_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function na(){return na=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},na.apply(null,arguments)}var Sf={relTol:1e-12,absTol:1e-15,matrix:"Matrix",number:"number",numberFallback:"number",precision:64,predictable:!1,randomSeed:null};function Q_(n,e){if(ia(n,e))return n[e];throw typeof n[e]=="function"&&tv(n,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function ev(n,e,t){if(ia(n,e))return n[e]=t,t;throw new Error('No access to property "'+e+'"')}function ia(n,e){return!nv(n)&&!Array.isArray(n)?!1:$r(iv,e)?!0:!(e in Object.prototype||e in Function.prototype)}function tv(n,e){return n==null||typeof n[e]!="function"||$r(n,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(n)?!1:$r(rv,e)?!0:!(e in Object.prototype||e in Function.prototype)}function nv(n){return typeof n=="object"&&n&&n.constructor===Object}var iv={length:!0,name:!0},rv={toString:!0,valueOf:!0,toLocaleString:!0};class sv{constructor(e){this.wrappedObject=e,this[Symbol.iterator]=this.entries}keys(){return Object.keys(this.wrappedObject).filter(e=>this.has(e)).values()}get(e){return Q_(this.wrappedObject,e)}set(e,t){return ev(this.wrappedObject,e,t),this}has(e){return ia(this.wrappedObject,e)&&e in this.wrappedObject}entries(){return av(this.keys(),e=>[e,this.get(e)])}forEach(e){for(var t of this.keys())e(this.get(t),t,this)}delete(e){ia(this.wrappedObject,e)&&delete this.wrappedObject[e]}clear(){for(var e of this.keys())this.delete(e)}get size(){return Object.keys(this.wrappedObject).length}}function av(n,e){return{next:()=>{var t=n.next();return t.done?t:{value:e(t.value),done:!1}}}}function pt(n){return typeof n=="number"}function St(n){return!n||typeof n!="object"||typeof n.constructor!="function"?!1:n.isBigNumber===!0&&typeof n.constructor.prototype=="object"&&n.constructor.prototype.isBigNumber===!0||typeof n.constructor.isDecimal=="function"&&n.constructor.isDecimal(n)===!0}function ov(n){return typeof n=="bigint"}function Af(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isComplex===!0||!1}function wf(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isFraction===!0||!1}function bf(n){return n&&n.constructor.prototype.isUnit===!0||!1}function Nn(n){return typeof n=="string"}var Rt=Array.isArray;function Dt(n){return n&&n.constructor.prototype.isMatrix===!0||!1}function Yr(n){return Array.isArray(n)||Dt(n)}function uv(n){return n&&n.isDenseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function cv(n){return n&&n.isSparseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function lv(n){return n&&n.constructor.prototype.isRange===!0||!1}function Pu(n){return n&&n.constructor.prototype.isIndex===!0||!1}function fv(n){return typeof n=="boolean"}function hv(n){return n&&n.constructor.prototype.isResultSet===!0||!1}function dv(n){return n&&n.constructor.prototype.isHelp===!0||!1}function pv(n){return typeof n=="function"}function mv(n){return n instanceof Date}function gv(n){return n instanceof RegExp}function Nu(n){return!!(n&&typeof n=="object"&&n.constructor===Object&&!Af(n)&&!wf(n))}function _v(n){return n?n instanceof Map||n instanceof sv||typeof n.set=="function"&&typeof n.get=="function"&&typeof n.keys=="function"&&typeof n.has=="function":!1}function vv(n){return n===null}function Ev(n){return n===void 0}function xv(n){return n&&n.isAccessorNode===!0&&n.constructor.prototype.isNode===!0||!1}function yv(n){return n&&n.isArrayNode===!0&&n.constructor.prototype.isNode===!0||!1}function Mv(n){return n&&n.isAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function Dv(n){return n&&n.isBlockNode===!0&&n.constructor.prototype.isNode===!0||!1}function Sv(n){return n&&n.isConditionalNode===!0&&n.constructor.prototype.isNode===!0||!1}function Av(n){return n&&n.isConstantNode===!0&&n.constructor.prototype.isNode===!0||!1}function wv(n){return n&&n.isFunctionAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function bv(n){return n&&n.isFunctionNode===!0&&n.constructor.prototype.isNode===!0||!1}function Tv(n){return n&&n.isIndexNode===!0&&n.constructor.prototype.isNode===!0||!1}function Cv(n){return n&&n.isNode===!0&&n.constructor.prototype.isNode===!0||!1}function Fv(n){return n&&n.isObjectNode===!0&&n.constructor.prototype.isNode===!0||!1}function Rv(n){return n&&n.isOperatorNode===!0&&n.constructor.prototype.isNode===!0||!1}function Pv(n){return n&&n.isParenthesisNode===!0&&n.constructor.prototype.isNode===!0||!1}function Nv(n){return n&&n.isRangeNode===!0&&n.constructor.prototype.isNode===!0||!1}function Lv(n){return n&&n.isRelationalNode===!0&&n.constructor.prototype.isNode===!0||!1}function Iv(n){return n&&n.isSymbolNode===!0&&n.constructor.prototype.isNode===!0||!1}function Uv(n){return n&&n.constructor.prototype.isChain===!0||!1}function Bn(n){var e=typeof n;return e==="object"?n===null?"null":St(n)?"BigNumber":n.constructor&&n.constructor.name?n.constructor.name:"Object":e}function gt(n){var e=typeof n;if(e==="number"||e==="bigint"||e==="string"||e==="boolean"||n===null||n===void 0)return n;if(typeof n.clone=="function")return n.clone();if(Array.isArray(n))return n.map(function(t){return gt(t)});if(n instanceof Date)return new Date(n.valueOf());if(St(n))return n;if(Nu(n))return Bv(n,gt);if(e==="function")return n;throw new TypeError("Cannot clone: unknown type of value (value: ".concat(n,")"))}function Bv(n,e){var t={};for(var i in n)$r(n,i)&&(t[i]=e(n[i]));return t}function Tf(n,e){for(var t in e)$r(e,t)&&(n[t]=e[t]);return n}function Ei(n,e){var t,i,r;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(i=0,r=n.length;i<r;i++)if(!Ei(n[i],e[i]))return!1;return!0}else{if(typeof n=="function")return n===e;if(n instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in n)if(!(t in e)||!Ei(n[t],e[t]))return!1;for(t in e)if(!(t in n))return!1;return!0}else return n===e}}function $r(n,e){return n&&Object.hasOwnProperty.call(n,e)}function Ov(n,e){for(var t={},i=0;i<e.length;i++){var r=e[i],s=n[r];s!==void 0&&(t[r]=s)}return t}var zv=["Matrix","Array"],Hv=["number","BigNumber","Fraction"],Hn=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(Sf)};na(Hn,Sf,{MATRIX_OPTIONS:zv,NUMBER_OPTIONS:Hv});function il(){return!0}function dn(){return!1}function or(){}const rl="Argument is not a typed-function.";function Cf(){function n(S){return typeof S=="object"&&S!==null&&S.constructor===Object}const e=[{name:"number",test:function(S){return typeof S=="number"}},{name:"string",test:function(S){return typeof S=="string"}},{name:"boolean",test:function(S){return typeof S=="boolean"}},{name:"Function",test:function(S){return typeof S=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(S){return S instanceof Date}},{name:"RegExp",test:function(S){return S instanceof RegExp}},{name:"Object",test:n},{name:"null",test:function(S){return S===null}},{name:"undefined",test:function(S){return S===void 0}}],t={name:"any",test:il,isAny:!0};let i,r,s=0,a={createCount:0};function o(S){const R=i.get(S);if(R)return R;let N='Unknown type "'+S+'"';const L=S.toLowerCase();let $;for($ of r)if($.toLowerCase()===L){N+='. Did you mean "'+$+'" ?';break}throw new TypeError(N)}function u(S){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any";const N=R?o(R).index:r.length,L=[];for(let W=0;W<S.length;++W){if(!S[W]||typeof S[W].name!="string"||typeof S[W].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");const Q=S[W].name;if(i.has(Q))throw new TypeError('Duplicate type name "'+Q+'"');L.push(Q),i.set(Q,{name:Q,test:S[W].test,isAny:S[W].isAny,index:N+W,conversionsTo:[]})}const $=r.slice(N);r=r.slice(0,N).concat(L).concat($);for(let W=N+L.length;W<r.length;++W)i.get(r[W]).index=W}function c(){i=new Map,r=[],s=0,u([t],!1)}c(),u(e);function l(){let S;for(S of r)i.get(S).conversionsTo=[];s=0}function f(S){const R=r.filter(N=>{const L=i.get(N);return!L.isAny&&L.test(S)});return R.length?R:["any"]}function d(S){return S&&typeof S=="function"&&"_typedFunctionData"in S}function m(S,R,N){if(!d(S))throw new TypeError(rl);const L=N&&N.exact,$=Array.isArray(R)?R.join(","):R,W=E($),Q=g(W);if(!L||Q in S.signatures){const me=S._typedFunctionData.signatureMap.get(Q);if(me)return me}const re=W.length;let Y;if(L){Y=[];let me;for(me in S.signatures)Y.push(S._typedFunctionData.signatureMap.get(me))}else Y=S._typedFunctionData.signatures;for(let me=0;me<re;++me){const xe=W[me],fe=[];let ze;for(ze of Y){const Re=T(ze.params,me);if(!(!Re||xe.restParam&&!Re.restParam)){if(!Re.hasAny){const Ke=v(Re);if(xe.types.some(z=>!Ke.has(z.name)))continue}fe.push(ze)}}if(Y=fe,Y.length===0)break}let K;for(K of Y)if(K.params.length<=re)return K;throw new TypeError("Signature not found (signature: "+(S.name||"unnamed")+"("+g(W,", ")+"))")}function _(S,R,N){return m(S,R,N).implementation}function h(S,R){const N=o(R);if(N.test(S))return S;const L=N.conversionsTo;if(L.length===0)throw new Error("There are no conversions to "+R+" defined.");for(let $=0;$<L.length;$++)if(o(L[$].from).test(S))return L[$].convert(S);throw new Error("Cannot convert "+S+" to "+R)}function g(S){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return S.map(N=>N.name).join(R)}function p(S){const R=S.indexOf("...")===0,L=(R?S.length>3?S.slice(3):"any":S).split("|").map(re=>o(re.trim()));let $=!1,W=R?"...":"";return{types:L.map(function(re){return $=re.isAny||$,W+=re.name+"|",{name:re.name,typeIndex:re.index,test:re.test,isAny:re.isAny,conversion:null,conversionIndex:-1}}),name:W.slice(0,-1),hasAny:$,hasConversion:!1,restParam:R}}function A(S){const R=S.types.map(Q=>Q.name),N=j(R);let L=S.hasAny,$=S.name;const W=N.map(function(Q){const re=o(Q.from);return L=re.isAny||L,$+="|"+Q.from,{name:Q.from,typeIndex:re.index,test:re.test,isAny:re.isAny,conversion:Q,conversionIndex:Q.index}});return{types:S.types.concat(W),name:$,hasAny:L,hasConversion:W.length>0,restParam:S.restParam}}function v(S){return S.typeSet||(S.typeSet=new Set,S.types.forEach(R=>S.typeSet.add(R.name))),S.typeSet}function E(S){const R=[];if(typeof S!="string")throw new TypeError("Signatures must be strings");const N=S.trim();if(N==="")return R;const L=N.split(",");for(let $=0;$<L.length;++$){const W=p(L[$].trim());if(W.restParam&&$!==L.length-1)throw new SyntaxError('Unexpected rest parameter "'+L[$]+'": only allowed for the last parameter');if(W.types.length===0)return null;R.push(W)}return R}function y(S){const R=Ce(S);return R?R.restParam:!1}function x(S){if(!S||S.types.length===0)return il;if(S.types.length===1)return o(S.types[0].name).test;if(S.types.length===2){const R=o(S.types[0].name).test,N=o(S.types[1].name).test;return function($){return R($)||N($)}}else{const R=S.types.map(function(N){return o(N.name).test});return function(L){for(let $=0;$<R.length;$++)if(R[$](L))return!0;return!1}}}function w(S){let R,N,L;if(y(S)){R=we(S).map(x);const $=R.length,W=x(Ce(S)),Q=function(re){for(let Y=$;Y<re.length;Y++)if(!W(re[Y]))return!1;return!0};return function(Y){for(let K=0;K<R.length;K++)if(!R[K](Y[K]))return!1;return Q(Y)&&Y.length>=$+1}}else return S.length===0?function(W){return W.length===0}:S.length===1?(N=x(S[0]),function(W){return N(W[0])&&W.length===1}):S.length===2?(N=x(S[0]),L=x(S[1]),function(W){return N(W[0])&&L(W[1])&&W.length===2}):(R=S.map(x),function(W){for(let Q=0;Q<R.length;Q++)if(!R[Q](W[Q]))return!1;return W.length===R.length})}function T(S,R){return R<S.length?S[R]:y(S)?Ce(S):null}function D(S,R){const N=T(S,R);return N?v(N):new Set}function M(S){return S.conversion===null||S.conversion===void 0}function F(S,R){const N=new Set;return S.forEach(L=>{const $=D(L.params,R);let W;for(W of $)N.add(W)}),N.has("any")?["any"]:Array.from(N)}function B(S,R,N){let L,$;const W=S||"unnamed";let Q=N,re;for(re=0;re<R.length;re++){const xe=[];if(Q.forEach(fe=>{const ze=T(fe.params,re),Re=x(ze);(re<fe.params.length||y(fe.params))&&Re(R[re])&&xe.push(fe)}),xe.length===0){if($=F(Q,re),$.length>0){const fe=f(R[re]);return L=new TypeError("Unexpected type of argument in function "+W+" (expected: "+$.join(" or ")+", actual: "+fe.join(" | ")+", index: "+re+")"),L.data={category:"wrongType",fn:W,index:re,actual:fe,expected:$},L}}else Q=xe}const Y=Q.map(function(xe){return y(xe.params)?1/0:xe.params.length});if(R.length<Math.min.apply(null,Y))return $=F(Q,re),L=new TypeError("Too few arguments in function "+W+" (expected: "+$.join(" or ")+", index: "+R.length+")"),L.data={category:"tooFewArgs",fn:W,index:R.length,expected:$},L;const K=Math.max.apply(null,Y);if(R.length>K)return L=new TypeError("Too many arguments in function "+W+" (expected: "+K+", actual: "+R.length+")"),L.data={category:"tooManyArgs",fn:W,index:R.length,expectedLength:K},L;const me=[];for(let xe=0;xe<R.length;++xe)me.push(f(R[xe]).join("|"));return L=new TypeError('Arguments of type "'+me.join(", ")+'" do not match any of the defined signatures of function '+W+"."),L.data={category:"mismatch",actual:me},L}function O(S){let R=r.length+1;for(let N=0;N<S.types.length;N++)M(S.types[N])&&(R=Math.min(R,S.types[N].typeIndex));return R}function V(S){let R=s+1;for(let N=0;N<S.types.length;N++)M(S.types[N])||(R=Math.min(R,S.types[N].conversionIndex));return R}function X(S,R){if(S.hasAny){if(!R.hasAny)return 1}else if(R.hasAny)return-1;if(S.restParam){if(!R.restParam)return 1}else if(R.restParam)return-1;if(S.hasConversion){if(!R.hasConversion)return 1}else if(R.hasConversion)return-1;const N=O(S)-O(R);if(N<0)return-1;if(N>0)return 1;const L=V(S)-V(R);return L<0?-1:L>0?1:0}function U(S,R){const N=S.params,L=R.params,$=Ce(N),W=Ce(L),Q=y(N),re=y(L);if(Q&&$.hasAny){if(!re||!W.hasAny)return 1}else if(re&&W.hasAny)return-1;let Y=0,K=0,me;for(me of N)me.hasAny&&++Y,me.hasConversion&&++K;let xe=0,fe=0;for(me of L)me.hasAny&&++xe,me.hasConversion&&++fe;if(Y!==xe)return Y-xe;if(Q&&$.hasConversion){if(!re||!W.hasConversion)return 1}else if(re&&W.hasConversion)return-1;if(K!==fe)return K-fe;if(Q){if(!re)return 1}else if(re)return-1;const ze=(N.length-L.length)*(Q?-1:1);if(ze!==0)return ze;const Re=[];let Ke=0;for(let pe=0;pe<N.length;++pe){const te=X(N[pe],L[pe]);Re.push(te),Ke+=te}if(Ke!==0)return Ke;let z;for(z of Re)if(z!==0)return z;return 0}function j(S){if(S.length===0)return[];const R=S.map(o);S.length>1&&R.sort(($,W)=>$.index-W.index);let N=R[0].conversionsTo;if(S.length===1)return N;N=N.concat([]);const L=new Set(S);for(let $=1;$<R.length;++$){let W;for(W of R[$].conversionsTo)L.has(W.from)||(N.push(W),L.add(W.from))}return N}function G(S,R){let N=R;if(S.some($=>$.hasConversion)){const $=y(S),W=S.map(ne);N=function(){const re=[],Y=$?arguments.length-1:arguments.length;for(let K=0;K<Y;K++)re[K]=W[K](arguments[K]);return $&&(re[Y]=arguments[Y].map(W[Y])),R.apply(this,re)}}let L=N;if(y(S)){const $=S.length-1;L=function(){return N.apply(this,ve(arguments,0,$).concat([ve(arguments,$)]))}}return L}function ne(S){let R,N,L,$;const W=[],Q=[];switch(S.types.forEach(function(re){re.conversion&&(W.push(o(re.conversion.from).test),Q.push(re.conversion.convert))}),Q.length){case 0:return function(Y){return Y};case 1:return R=W[0],L=Q[0],function(Y){return R(Y)?L(Y):Y};case 2:return R=W[0],N=W[1],L=Q[0],$=Q[1],function(Y){return R(Y)?L(Y):N(Y)?$(Y):Y};default:return function(Y){for(let K=0;K<Q.length;K++)if(W[K](Y))return Q[K](Y);return Y}}}function se(S){function R(N,L,$){if(L<N.length){const W=N[L];let Q=[];if(W.restParam){const re=W.types.filter(M);re.length<W.types.length&&Q.push({types:re,name:"..."+re.map(Y=>Y.name).join("|"),hasAny:re.some(Y=>Y.isAny),hasConversion:!1,restParam:!0}),Q.push(W)}else Q=W.types.map(function(re){return{types:[re],name:re.name,hasAny:re.isAny,hasConversion:re.conversion,restParam:!1}});return Ye(Q,function(re){return R(N,L+1,$.concat([re]))})}else return[$]}return R(S,0,[])}function he(S,R){const N=Math.max(S.length,R.length);for(let re=0;re<N;re++){const Y=D(S,re),K=D(R,re);let me=!1,xe;for(xe of K)if(Y.has(xe)){me=!0;break}if(!me)return!1}const L=S.length,$=R.length,W=y(S),Q=y(R);return W?Q?L===$:$>=L:Q?L>=$:L===$}function Se(S){return S.map(R=>ke(R)?mt(R.referToSelf.callback):Ge(R)?I(R.referTo.references,R.referTo.callback):R)}function Le(S,R,N){const L=[];let $;for($ of S){let W=N[$];if(typeof W!="number")throw new TypeError('No definition for referenced signature "'+$+'"');if(W=R[W],typeof W!="function")return!1;L.push(W)}return L}function ee(S,R,N){const L=Se(S),$=new Array(L.length).fill(!1);let W=!0;for(;W;){W=!1;let Q=!0;for(let re=0;re<L.length;++re){if($[re])continue;const Y=L[re];if(ke(Y))L[re]=Y.referToSelf.callback(N),L[re].referToSelf=Y.referToSelf,$[re]=!0,Q=!1;else if(Ge(Y)){const K=Le(Y.referTo.references,L,R);K?(L[re]=Y.referTo.callback.apply(this,K),L[re].referTo=Y.referTo,$[re]=!0,Q=!1):W=!0}}if(Q&&W)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return L}function ue(S){const R=/\bthis(\(|\.signatures\b)/;Object.keys(S).forEach(N=>{const L=S[N];if(R.test(L.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function de(S,R){if(a.createCount++,Object.keys(R).length===0)throw new SyntaxError("No signatures provided");a.warnAgainstDeprecatedThis&&ue(R);const N=[],L=[],$={},W=[];let Q;for(Q in R){if(!Object.prototype.hasOwnProperty.call(R,Q))continue;const q=E(Q);if(!q)continue;N.forEach(function(De){if(he(De,q))throw new TypeError('Conflicting signatures "'+g(De)+'" and "'+g(q)+'".')}),N.push(q);const H=L.length;L.push(R[Q]);const le=q.map(A);let ge;for(ge of se(le)){const De=g(ge);W.push({params:ge,name:De,fn:H}),ge.every(Ae=>!Ae.hasConversion)&&($[De]=H)}}W.sort(U);const re=ee(L,$,J);let Y;for(Y in $)Object.prototype.hasOwnProperty.call($,Y)&&($[Y]=re[$[Y]]);const K=[],me=new Map;for(Y of W)me.has(Y.name)||(Y.fn=re[Y.fn],K.push(Y),me.set(Y.name,Y));const xe=K[0]&&K[0].params.length<=2&&!y(K[0].params),fe=K[1]&&K[1].params.length<=2&&!y(K[1].params),ze=K[2]&&K[2].params.length<=2&&!y(K[2].params),Re=K[3]&&K[3].params.length<=2&&!y(K[3].params),Ke=K[4]&&K[4].params.length<=2&&!y(K[4].params),z=K[5]&&K[5].params.length<=2&&!y(K[5].params),pe=xe&&fe&&ze&&Re&&Ke&&z;for(let q=0;q<K.length;++q)K[q].test=w(K[q].params);const te=xe?x(K[0].params[0]):dn,ae=fe?x(K[1].params[0]):dn,Me=ze?x(K[2].params[0]):dn,ye=Re?x(K[3].params[0]):dn,Xe=Ke?x(K[4].params[0]):dn,_t=z?x(K[5].params[0]):dn,Ut=xe?x(K[0].params[1]):dn,at=fe?x(K[1].params[1]):dn,rn=ze?x(K[2].params[1]):dn,xn=Re?x(K[3].params[1]):dn,us=Ke?x(K[4].params[1]):dn,cs=z?x(K[5].params[1]):dn;for(let q=0;q<K.length;++q)K[q].implementation=G(K[q].params,K[q].fn);const Gn=xe?K[0].implementation:or,Ur=fe?K[1].implementation:or,ls=ze?K[2].implementation:or,fs=Re?K[3].implementation:or,Wi=Ke?K[4].implementation:or,hs=z?K[5].implementation:or,Xi=xe?K[0].params.length:-1,ds=fe?K[1].params.length:-1,ps=ze?K[2].params.length:-1,Ca=Re?K[3].params.length:-1,Fa=Ke?K[4].params.length:-1,Ra=z?K[5].params.length:-1,Pa=pe?6:0,Na=K.length,La=K.map(q=>q.test),C=K.map(q=>q.implementation),k=function(){for(let H=Pa;H<Na;H++)if(La[H](arguments))return C[H].apply(this,arguments);return a.onMismatch(S,arguments,K)};function J(q,H){return arguments.length===Xi&&te(q)&&Ut(H)?Gn.apply(this,arguments):arguments.length===ds&&ae(q)&&at(H)?Ur.apply(this,arguments):arguments.length===ps&&Me(q)&&rn(H)?ls.apply(this,arguments):arguments.length===Ca&&ye(q)&&xn(H)?fs.apply(this,arguments):arguments.length===Fa&&Xe(q)&&us(H)?Wi.apply(this,arguments):arguments.length===Ra&&_t(q)&&cs(H)?hs.apply(this,arguments):k.apply(this,arguments)}try{Object.defineProperty(J,"name",{value:S})}catch{}return J.signatures=$,J._typedFunctionData={signatures:K,signatureMap:me},J}function ce(S,R,N){throw B(S,R,N)}function we(S){return ve(S,0,S.length-1)}function Ce(S){return S[S.length-1]}function ve(S,R,N){return Array.prototype.slice.call(S,R,N)}function Qe(S,R){for(let N=0;N<S.length;N++)if(R(S[N]))return S[N]}function Ye(S,R){return Array.prototype.concat.apply([],S.map(R))}function be(){const S=we(arguments).map(N=>g(E(N))),R=Ce(arguments);if(typeof R!="function")throw new TypeError("Callback function expected as last argument");return I(S,R)}function I(S,R){return{referTo:{references:S,callback:R}}}function mt(S){if(typeof S!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:S}}}function Ge(S){return S&&typeof S.referTo=="object"&&Array.isArray(S.referTo.references)&&typeof S.referTo.callback=="function"}function ke(S){return S&&typeof S.referToSelf=="object"&&typeof S.referToSelf.callback=="function"}function Te(S,R){if(!S)return R;if(R&&R!==S){const N=new Error("Function names do not match (expected: "+S+", actual: "+R+")");throw N.data={actual:R,expected:S},N}return S}function nt(S){let R;for(const N in S)Object.prototype.hasOwnProperty.call(S,N)&&(d(S[N])||typeof S[N].signature=="string")&&(R=Te(R,S[N].name));return R}function Fe(S,R){let N;for(N in R)if(Object.prototype.hasOwnProperty.call(R,N)){if(N in S&&R[N]!==S[N]){const L=new Error('Signature "'+N+'" is defined twice');throw L.data={signature:N,sourceFunction:R[N],destFunction:S[N]},L}S[N]=R[N]}}const P=a;a=function(S){const R=typeof S=="string",N=R?1:0;let L=R?S:"";const $={};for(let W=N;W<arguments.length;++W){const Q=arguments[W];let re={},Y;if(typeof Q=="function"?(Y=Q.name,typeof Q.signature=="string"?re[Q.signature]=Q:d(Q)&&(re=Q.signatures)):n(Q)&&(re=Q,R||(Y=nt(Q))),Object.keys(re).length===0){const K=new TypeError("Argument to 'typed' at index "+W+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw K.data={index:W,argument:Q},K}R||(L=Te(L,Y)),Fe($,re)}return de(L||"",$)},a.create=Cf,a.createCount=P.createCount,a.onMismatch=ce,a.throwMismatchError=ce,a.createError=B,a.clear=c,a.clearConversions=l,a.addTypes=u,a._findType=o,a.referTo=be,a.referToSelf=mt,a.convert=h,a.findSignature=m,a.find=_,a.isTypedFunction=d,a.warnAgainstDeprecatedThis=!0,a.addType=function(S,R){let N="any";R!==!1&&i.has("Object")&&(N="Object"),a.addTypes([S],N)};function b(S){if(!S||typeof S.from!="string"||typeof S.to!="string"||typeof S.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(S.to===S.from)throw new SyntaxError('Illegal to define conversion from "'+S.from+'" to itself.')}return a.addConversion=function(S){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{override:!1};b(S);const N=o(S.to),L=N.conversionsTo.find($=>$.from===S.from);if(L)if(R&&R.override)a.removeConversion({from:L.from,to:S.to,convert:L.convert});else throw new Error('There is already a conversion from "'+S.from+'" to "'+N.name+'"');N.conversionsTo.push({from:S.from,convert:S.convert,index:s++})},a.addConversions=function(S,R){S.forEach(N=>a.addConversion(N,R))},a.removeConversion=function(S){b(S);const R=o(S.to),N=Qe(R.conversionsTo,$=>$.from===S.from);if(!N)throw new Error("Attempt to remove nonexistent conversion from "+S.from+" to "+S.to);if(N.convert!==S.convert)throw new Error("Conversion to remove does not match existing conversion");const L=R.conversionsTo.indexOf(N);R.conversionsTo.splice(L,1)},a.resolve=function(S,R){if(!d(S))throw new TypeError(rl);const N=S._typedFunctionData.signatures;for(let L=0;L<N.length;++L)if(N[L].test(R))return N[L];return null},a}const ra=Cf();function Ie(n,e,t,i){function r(s){var a=Ov(s,e.map(kv));return Vv(n,e,s),t(a)}return r.isFactory=!0,r.fn=n,r.dependencies=e.slice().sort(),i&&(r.meta=i),r}function Vv(n,e,t){var i=e.filter(s=>!Gv(s)).every(s=>t[s]!==void 0);if(!i){var r=e.filter(s=>t[s]===void 0);throw new Error('Cannot create function "'.concat(n,'", ')+"some dependencies are missing: ".concat(r.map(s=>'"'.concat(s,'"')).join(", "),"."))}}function Gv(n){return n&&n[0]==="?"}function kv(n){return n&&n[0]==="?"?n.slice(1):n}function At(n){return typeof n=="boolean"?!0:isFinite(n)?n===Math.round(n):!1}function Ff(n,e){if(e.number==="bigint")try{BigInt(n)}catch{return e.numberFallback}return e.number}function po(n,e,t){var i={2:"0b",8:"0o",16:"0x"},r=i[e],s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!At(t))throw new Error("size must be an integer");if(n>2**(t-1)-1||n<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!At(n))throw new Error("Value must be an integer");n<0&&(n=n+2**t),s="i".concat(t)}var a="";return n<0&&(n=-n,a="-"),"".concat(a).concat(r).concat(n.toString(e)).concat(s)}function ou(n,e){if(typeof e=="function")return e(n);if(n===1/0)return"Infinity";if(n===-1/0)return"-Infinity";if(isNaN(n))return"NaN";var{notation:t,precision:i,wordSize:r}=Rf(e);switch(t){case"fixed":return Xv(n,i);case"exponential":return Pf(n,i);case"engineering":return Wv(n,i);case"bin":return po(n,2,r);case"oct":return po(n,8,r);case"hex":return po(n,16,r);case"auto":return qv(n,i,e).replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],a=arguments[4];return s!=="."?s+a:a});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function Rf(n){var e="auto",t,i;if(n!==void 0)if(pt(n))t=n;else if(St(n))t=n.toNumber();else if(Nu(n))n.precision!==void 0&&(t=sl(n.precision,()=>{throw new Error('Option "precision" must be a number or BigNumber')})),n.wordSize!==void 0&&(i=sl(n.wordSize,()=>{throw new Error('Option "wordSize" must be a number or BigNumber')})),n.notation&&(e=n.notation);else throw new Error("Unsupported type of options, number, BigNumber, or object expected");return{notation:e,precision:t,wordSize:i}}function Ea(n){var e=String(n).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+n);var t=e[1],i=e[2],r=parseFloat(e[4]||"0"),s=i.indexOf(".");r+=s!==-1?s-1:i.length-1;var a=i.replace(".","").replace(/^0*/,function(o){return r-=o.length,""}).replace(/0*$/,"").split("").map(function(o){return parseInt(o)});return a.length===0&&(a.push(0),r++),{sign:t,coefficients:a,exponent:r}}function Wv(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Ea(n),i=xa(t,e),r=i.exponent,s=i.coefficients,a=r%3===0?r:r<0?r-3-r%3:r-r%3;if(pt(e))for(;e>s.length||r-a+1>s.length;)s.push(0);else for(var o=Math.abs(r-a)-(s.length-1),u=0;u<o;u++)s.push(0);for(var c=Math.abs(r-a),l=1;c>0;)l++,c--;var f=s.slice(l).join(""),d=pt(e)&&f.length||f.match(/[1-9]/)?"."+f:"",m=s.slice(0,l).join("")+d+"e"+(r>=0?"+":"")+a.toString();return i.sign+m}function Xv(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Ea(n),i=typeof e=="number"?xa(t,t.exponent+1+e):t,r=i.coefficients,s=i.exponent+1,a=s+(e||0);return r.length<a&&(r=r.concat(vr(a-r.length))),s<0&&(r=vr(-s+1).concat(r),s=1),s<r.length&&r.splice(s,0,s===0?"0.":"."),i.sign+r.join("")}function Pf(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Ea(n),i=e?xa(t,e):t,r=i.coefficients,s=i.exponent;r.length<e&&(r=r.concat(vr(e-r.length)));var a=r.shift();return i.sign+a+(r.length>0?"."+r.join(""):"")+"e"+(s>=0?"+":"")+s}function qv(n,e,t){if(isNaN(n)||!isFinite(n))return String(n);var i=al(t==null?void 0:t.lowerExp,-3),r=al(t==null?void 0:t.upperExp,5),s=Ea(n),a=e?xa(s,e):s;if(a.exponent<i||a.exponent>=r)return Pf(n,e);var o=a.coefficients,u=a.exponent;o.length<e&&(o=o.concat(vr(e-o.length))),o=o.concat(vr(u-o.length+1+(o.length<e?e-o.length:0))),o=vr(-u).concat(o);var c=u>0?u:0;return c<o.length-1&&o.splice(c+1,0,"."),a.sign+o.join("")}function xa(n,e){for(var t={sign:n.sign,coefficients:n.coefficients,exponent:n.exponent},i=t.coefficients;e<=0;)i.unshift(0),t.exponent++,e++;if(i.length>e){var r=i.splice(e,i.length-e);if(r[0]>=5){var s=e-1;for(i[s]++;i[s]===10;)i.pop(),s===0&&(i.unshift(0),t.exponent++,s++),s--,i[s]++}}return t}function vr(n){for(var e=[],t=0;t<n;t++)e.push(0);return e}function Yv(n){return n.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}function wr(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-8,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(t<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return isNaN(n)||isNaN(e)?!1:!isFinite(n)||!isFinite(e)?n===e:n===e?!0:Math.abs(n-e)<=Math.max(t*Math.max(Math.abs(n),Math.abs(e)),i)}function sl(n,e){if(pt(n))return n;if(St(n))return n.toNumber();e()}function al(n,e){return pt(n)?n:St(n)?n.toNumber():e}var Nf=function(){return Nf=ra.create,ra},$v=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],Zv=Ie("typed",$v,function(e){var{BigNumber:t,Complex:i,DenseMatrix:r,Fraction:s}=e,a=Nf();return a.clear(),a.addTypes([{name:"number",test:pt},{name:"Complex",test:Af},{name:"BigNumber",test:St},{name:"bigint",test:ov},{name:"Fraction",test:wf},{name:"Unit",test:bf},{name:"identifier",test:o=>Nn&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(o)},{name:"string",test:Nn},{name:"Chain",test:Uv},{name:"Array",test:Rt},{name:"Matrix",test:Dt},{name:"DenseMatrix",test:uv},{name:"SparseMatrix",test:cv},{name:"Range",test:lv},{name:"Index",test:Pu},{name:"boolean",test:fv},{name:"ResultSet",test:hv},{name:"Help",test:dv},{name:"function",test:pv},{name:"Date",test:mv},{name:"RegExp",test:gv},{name:"null",test:vv},{name:"undefined",test:Ev},{name:"AccessorNode",test:xv},{name:"ArrayNode",test:yv},{name:"AssignmentNode",test:Mv},{name:"BlockNode",test:Dv},{name:"ConditionalNode",test:Sv},{name:"ConstantNode",test:Av},{name:"FunctionNode",test:bv},{name:"FunctionAssignmentNode",test:wv},{name:"IndexNode",test:Tv},{name:"Node",test:Cv},{name:"ObjectNode",test:Fv},{name:"OperatorNode",test:Rv},{name:"ParenthesisNode",test:Pv},{name:"RangeNode",test:Nv},{name:"RelationalNode",test:Lv},{name:"SymbolNode",test:Iv},{name:"Map",test:_v},{name:"Object",test:Nu}]),a.addConversions([{from:"number",to:"BigNumber",convert:function(u){if(t||zs(u),Yv(u)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+u+"). Use function bignumber(x) to convert to BigNumber.");return new t(u)}},{from:"number",to:"Complex",convert:function(u){return i||Hs(u),new i(u,0)}},{from:"BigNumber",to:"Complex",convert:function(u){return i||Hs(u),new i(u.toNumber(),0)}},{from:"bigint",to:"number",convert:function(u){if(u>Number.MAX_SAFE_INTEGER)throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: "+u+")");return Number(u)}},{from:"bigint",to:"BigNumber",convert:function(u){return t||zs(u),new t(u.toString())}},{from:"bigint",to:"Fraction",convert:function(u){return s||Vs(u),new s(u)}},{from:"Fraction",to:"BigNumber",convert:function(u){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(u){return i||Hs(u),new i(u.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(u){s||Vs(u);var c=new s(u);if(c.valueOf()!==u)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+u+"). Use function fraction(x) to convert to Fraction.");return c}},{from:"string",to:"number",convert:function(u){var c=Number(u);if(isNaN(c))throw new Error('Cannot convert "'+u+'" to a number');return c}},{from:"string",to:"BigNumber",convert:function(u){t||zs(u);try{return new t(u)}catch{throw new Error('Cannot convert "'+u+'" to BigNumber')}}},{from:"string",to:"bigint",convert:function(u){try{return BigInt(u)}catch{throw new Error('Cannot convert "'+u+'" to BigInt')}}},{from:"string",to:"Fraction",convert:function(u){s||Vs(u);try{return new s(u)}catch{throw new Error('Cannot convert "'+u+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(u){i||Hs(u);try{return new i(u)}catch{throw new Error('Cannot convert "'+u+'" to Complex')}}},{from:"boolean",to:"number",convert:function(u){return+u}},{from:"boolean",to:"BigNumber",convert:function(u){return t||zs(u),new t(+u)}},{from:"boolean",to:"bigint",convert:function(u){return BigInt(+u)}},{from:"boolean",to:"Fraction",convert:function(u){return s||Vs(u),new s(+u)}},{from:"boolean",to:"string",convert:function(u){return String(u)}},{from:"Array",to:"Matrix",convert:function(u){return r||Kv(),new r(u)}},{from:"Matrix",to:"Array",convert:function(u){return u.valueOf()}}]),a.onMismatch=(o,u,c)=>{var l=a.createError(o,u,c);if(["wrongType","mismatch"].includes(l.data.category)&&u.length===1&&Yr(u[0])&&c.some(d=>!d.params.includes(","))){var f=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw f.data=l.data,f}throw l},a.onMismatch=(o,u,c)=>{var l=a.createError(o,u,c);if(["wrongType","mismatch"].includes(l.data.category)&&u.length===1&&Yr(u[0])&&c.some(d=>!d.params.includes(","))){var f=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw f.data=l.data,f}throw l},a});function zs(n){throw new Error("Cannot convert value ".concat(n," into a BigNumber: no class 'BigNumber' provided"))}function Hs(n){throw new Error("Cannot convert value ".concat(n," into a Complex number: no class 'Complex' provided"))}function Kv(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Vs(n){throw new Error("Cannot convert value ".concat(n," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.5.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var uu=9e15,yi=1e9,cu="0123456789abcdef",sa="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",aa="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",lu={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-9e15,maxE:uu,crypto:!1},Lf,Qn,He=!0,ya="[DecimalError] ",xi=ya+"Invalid argument: ",If=ya+"Precision limit exceeded",Uf=ya+"crypto unavailable",Bf="[object Decimal]",qt=Math.floor,Nt=Math.pow,jv=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Jv=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Qv=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Of=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Fn=1e7,Oe=7,eE=9007199254740991,tE=sa.length-1,fu=aa.length-1,oe={toStringTag:Bf};oe.absoluteValue=oe.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),Ne(n)};oe.ceil=function(){return Ne(new this.constructor(this),this.e+1,2)};oe.clampedTo=oe.clamp=function(n,e){var t,i=this,r=i.constructor;if(n=new r(n),e=new r(e),!n.s||!e.s)return new r(NaN);if(n.gt(e))throw Error(xi+e);return t=i.cmp(n),t<0?n:i.cmp(e)>0?e:new r(i)};oe.comparedTo=oe.cmp=function(n){var e,t,i,r,s=this,a=s.d,o=(n=new s.constructor(n)).d,u=s.s,c=n.s;if(!a||!o)return!u||!c?NaN:u!==c?u:a===o?0:!a^u<0?1:-1;if(!a[0]||!o[0])return a[0]?u:o[0]?-c:0;if(u!==c)return u;if(s.e!==n.e)return s.e>n.e^u<0?1:-1;for(i=a.length,r=o.length,e=0,t=i<r?i:r;e<t;++e)if(a[e]!==o[e])return a[e]>o[e]^u<0?1:-1;return i===r?0:i>r^u<0?1:-1};oe.cosine=oe.cos=function(){var n,e,t=this,i=t.constructor;return t.d?t.d[0]?(n=i.precision,e=i.rounding,i.precision=n+Math.max(t.e,t.sd())+Oe,i.rounding=1,t=nE(i,kf(i,t)),i.precision=n,i.rounding=e,Ne(Qn==2||Qn==3?t.neg():t,n,e,!0)):new i(1):new i(NaN)};oe.cubeRoot=oe.cbrt=function(){var n,e,t,i,r,s,a,o,u,c,l=this,f=l.constructor;if(!l.isFinite()||l.isZero())return new f(l);for(He=!1,s=l.s*Nt(l.s*l,1/3),!s||Math.abs(s)==1/0?(t=Vt(l.d),n=l.e,(s=(n-t.length+1)%3)&&(t+=s==1||s==-2?"0":"00"),s=Nt(t,1/3),n=qt((n+1)/3)-(n%3==(n<0?-1:2)),s==1/0?t="5e"+n:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+n),i=new f(t),i.s=l.s):i=new f(s.toString()),a=(n=f.precision)+3;;)if(o=i,u=o.times(o).times(o),c=u.plus(l),i=ht(c.plus(l).times(o),c.plus(u),a+2,1),Vt(o.d).slice(0,a)===(t=Vt(i.d)).slice(0,a))if(t=t.slice(a-3,a+1),t=="9999"||!r&&t=="4999"){if(!r&&(Ne(o,n+1,0),o.times(o).times(o).eq(l))){i=o;break}a+=4,r=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(Ne(i,n+1,1),e=!i.times(i).times(i).eq(l));break}return He=!0,Ne(i,n,f.rounding,e)};oe.decimalPlaces=oe.dp=function(){var n,e=this.d,t=NaN;if(e){if(n=e.length-1,t=(n-qt(this.e/Oe))*Oe,n=e[n],n)for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t};oe.dividedBy=oe.div=function(n){return ht(this,new this.constructor(n))};oe.dividedToIntegerBy=oe.divToInt=function(n){var e=this,t=e.constructor;return Ne(ht(e,new t(n),0,1,1),t.precision,t.rounding)};oe.equals=oe.eq=function(n){return this.cmp(n)===0};oe.floor=function(){return Ne(new this.constructor(this),this.e+1,3)};oe.greaterThan=oe.gt=function(n){return this.cmp(n)>0};oe.greaterThanOrEqualTo=oe.gte=function(n){var e=this.cmp(n);return e==1||e===0};oe.hyperbolicCosine=oe.cosh=function(){var n,e,t,i,r,s=this,a=s.constructor,o=new a(1);if(!s.isFinite())return new a(s.s?1/0:NaN);if(s.isZero())return o;t=a.precision,i=a.rounding,a.precision=t+Math.max(s.e,s.sd())+4,a.rounding=1,r=s.d.length,r<32?(n=Math.ceil(r/3),e=(1/Da(4,n)).toString()):(n=16,e="2.3283064365386962890625e-10"),s=br(a,1,s.times(e),new a(1),!0);for(var u,c=n,l=new a(8);c--;)u=s.times(s),s=o.minus(u.times(l.minus(u.times(l))));return Ne(s,a.precision=t,a.rounding=i,!0)};oe.hyperbolicSine=oe.sinh=function(){var n,e,t,i,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,i=r.d.length,i<3)r=br(s,2,r,r,!0);else{n=1.4*Math.sqrt(i),n=n>16?16:n|0,r=r.times(1/Da(5,n)),r=br(s,2,r,r,!0);for(var a,o=new s(5),u=new s(16),c=new s(20);n--;)a=r.times(r),r=r.times(o.plus(a.times(u.times(a).plus(c))))}return s.precision=e,s.rounding=t,Ne(r,e,t,!0)};oe.hyperbolicTangent=oe.tanh=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+7,i.rounding=1,ht(t.sinh(),t.cosh(),i.precision=n,i.rounding=e)):new i(t.s)};oe.inverseCosine=oe.acos=function(){var n=this,e=n.constructor,t=n.abs().cmp(1),i=e.precision,r=e.rounding;return t!==-1?t===0?n.isNeg()?Un(e,i,r):new e(0):new e(NaN):n.isZero()?Un(e,i+4,r).times(.5):(e.precision=i+6,e.rounding=1,n=new e(1).minus(n).div(n.plus(1)).sqrt().atan(),e.precision=i,e.rounding=r,n.times(2))};oe.inverseHyperbolicCosine=oe.acosh=function(){var n,e,t=this,i=t.constructor;return t.lte(1)?new i(t.eq(1)?0:NaN):t.isFinite()?(n=i.precision,e=i.rounding,i.precision=n+Math.max(Math.abs(t.e),t.sd())+4,i.rounding=1,He=!1,t=t.times(t).minus(1).sqrt().plus(t),He=!0,i.precision=n,i.rounding=e,t.ln()):new i(t)};oe.inverseHyperbolicSine=oe.asinh=function(){var n,e,t=this,i=t.constructor;return!t.isFinite()||t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,i.rounding=1,He=!1,t=t.times(t).plus(1).sqrt().plus(t),He=!0,i.precision=n,i.rounding=e,t.ln())};oe.inverseHyperbolicTangent=oe.atanh=function(){var n,e,t,i,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,i=r.sd(),Math.max(i,n)<2*-r.e-1?Ne(new s(r),n,e,!0):(s.precision=t=i-r.e,r=ht(r.plus(1),new s(1).minus(r),t+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)};oe.inverseSine=oe.asin=function(){var n,e,t,i,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),t=s.precision,i=s.rounding,e!==-1?e===0?(n=Un(s,t+4,i).times(.5),n.s=r.s,n):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=i,r.times(2)))};oe.inverseTangent=oe.atan=function(){var n,e,t,i,r,s,a,o,u,c=this,l=c.constructor,f=l.precision,d=l.rounding;if(c.isFinite()){if(c.isZero())return new l(c);if(c.abs().eq(1)&&f+4<=fu)return a=Un(l,f+4,d).times(.25),a.s=c.s,a}else{if(!c.s)return new l(NaN);if(f+4<=fu)return a=Un(l,f+4,d).times(.5),a.s=c.s,a}for(l.precision=o=f+10,l.rounding=1,t=Math.min(28,o/Oe+2|0),n=t;n;--n)c=c.div(c.times(c).plus(1).sqrt().plus(1));for(He=!1,e=Math.ceil(o/Oe),i=1,u=c.times(c),a=new l(c),r=c;n!==-1;)if(r=r.times(u),s=a.minus(r.div(i+=2)),r=r.times(u),a=s.plus(r.div(i+=2)),a.d[e]!==void 0)for(n=e;a.d[n]===s.d[n]&&n--;);return t&&(a=a.times(2<<t-1)),He=!0,Ne(a,l.precision=f,l.rounding=d,!0)};oe.isFinite=function(){return!!this.d};oe.isInteger=oe.isInt=function(){return!!this.d&&qt(this.e/Oe)>this.d.length-2};oe.isNaN=function(){return!this.s};oe.isNegative=oe.isNeg=function(){return this.s<0};oe.isPositive=oe.isPos=function(){return this.s>0};oe.isZero=function(){return!!this.d&&this.d[0]===0};oe.lessThan=oe.lt=function(n){return this.cmp(n)<0};oe.lessThanOrEqualTo=oe.lte=function(n){return this.cmp(n)<1};oe.logarithm=oe.log=function(n){var e,t,i,r,s,a,o,u,c=this,l=c.constructor,f=l.precision,d=l.rounding,m=5;if(n==null)n=new l(10),e=!0;else{if(n=new l(n),t=n.d,n.s<0||!t||!t[0]||n.eq(1))return new l(NaN);e=n.eq(10)}if(t=c.d,c.s<0||!t||!t[0]||c.eq(1))return new l(t&&!t[0]?-1/0:c.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(r=t[0];r%10===0;)r/=10;s=r!==1}if(He=!1,o=f+m,a=pi(c,o),i=e?oa(l,o+10):pi(n,o),u=ht(a,i,o,1),Zr(u.d,r=f,d))do if(o+=10,a=pi(c,o),i=e?oa(l,o+10):pi(n,o),u=ht(a,i,o,1),!s){+Vt(u.d).slice(r+1,r+15)+1==1e14&&(u=Ne(u,f+1,0));break}while(Zr(u.d,r+=10,d));return He=!0,Ne(u,f,d)};oe.minus=oe.sub=function(n){var e,t,i,r,s,a,o,u,c,l,f,d,m=this,_=m.constructor;if(n=new _(n),!m.d||!n.d)return!m.s||!n.s?n=new _(NaN):m.d?n.s=-n.s:n=new _(n.d||m.s!==n.s?m:NaN),n;if(m.s!=n.s)return n.s=-n.s,m.plus(n);if(c=m.d,d=n.d,o=_.precision,u=_.rounding,!c[0]||!d[0]){if(d[0])n.s=-n.s;else if(c[0])n=new _(m);else return new _(u===3?-0:0);return He?Ne(n,o,u):n}if(t=qt(n.e/Oe),l=qt(m.e/Oe),c=c.slice(),s=l-t,s){for(f=s<0,f?(e=c,s=-s,a=d.length):(e=d,t=l,a=c.length),i=Math.max(Math.ceil(o/Oe),a)+2,s>i&&(s=i,e.length=1),e.reverse(),i=s;i--;)e.push(0);e.reverse()}else{for(i=c.length,a=d.length,f=i<a,f&&(a=i),i=0;i<a;i++)if(c[i]!=d[i]){f=c[i]<d[i];break}s=0}for(f&&(e=c,c=d,d=e,n.s=-n.s),a=c.length,i=d.length-a;i>0;--i)c[a++]=0;for(i=d.length;i>s;){if(c[--i]<d[i]){for(r=i;r&&c[--r]===0;)c[r]=Fn-1;--c[r],c[i]+=Fn}c[i]-=d[i]}for(;c[--a]===0;)c.pop();for(;c[0]===0;c.shift())--t;return c[0]?(n.d=c,n.e=Ma(c,t),He?Ne(n,o,u):n):new _(u===3?-0:0)};oe.modulo=oe.mod=function(n){var e,t=this,i=t.constructor;return n=new i(n),!t.d||!n.s||n.d&&!n.d[0]?new i(NaN):!n.d||t.d&&!t.d[0]?Ne(new i(t),i.precision,i.rounding):(He=!1,i.modulo==9?(e=ht(t,n.abs(),0,3,1),e.s*=n.s):e=ht(t,n,0,i.modulo,1),e=e.times(n),He=!0,t.minus(e))};oe.naturalExponential=oe.exp=function(){return hu(this)};oe.naturalLogarithm=oe.ln=function(){return pi(this)};oe.negated=oe.neg=function(){var n=new this.constructor(this);return n.s=-n.s,Ne(n)};oe.plus=oe.add=function(n){var e,t,i,r,s,a,o,u,c,l,f=this,d=f.constructor;if(n=new d(n),!f.d||!n.d)return!f.s||!n.s?n=new d(NaN):f.d||(n=new d(n.d||f.s===n.s?f:NaN)),n;if(f.s!=n.s)return n.s=-n.s,f.minus(n);if(c=f.d,l=n.d,o=d.precision,u=d.rounding,!c[0]||!l[0])return l[0]||(n=new d(f)),He?Ne(n,o,u):n;if(s=qt(f.e/Oe),i=qt(n.e/Oe),c=c.slice(),r=s-i,r){for(r<0?(t=c,r=-r,a=l.length):(t=l,i=s,a=c.length),s=Math.ceil(o/Oe),a=s>a?s+1:a+1,r>a&&(r=a,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for(a=c.length,r=l.length,a-r<0&&(r=a,t=l,l=c,c=t),e=0;r;)e=(c[--r]=c[r]+l[r]+e)/Fn|0,c[r]%=Fn;for(e&&(c.unshift(e),++i),a=c.length;c[--a]==0;)c.pop();return n.d=c,n.e=Ma(c,i),He?Ne(n,o,u):n};oe.precision=oe.sd=function(n){var e,t=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(xi+n);return t.d?(e=zf(t.d),n&&t.e+1>e&&(e=t.e+1)):e=NaN,e};oe.round=function(){var n=this,e=n.constructor;return Ne(new e(n),n.e+1,e.rounding)};oe.sine=oe.sin=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+Math.max(t.e,t.sd())+Oe,i.rounding=1,t=rE(i,kf(i,t)),i.precision=n,i.rounding=e,Ne(Qn>2?t.neg():t,n,e,!0)):new i(NaN)};oe.squareRoot=oe.sqrt=function(){var n,e,t,i,r,s,a=this,o=a.d,u=a.e,c=a.s,l=a.constructor;if(c!==1||!o||!o[0])return new l(!c||c<0&&(!o||o[0])?NaN:o?a:1/0);for(He=!1,c=Math.sqrt(+a),c==0||c==1/0?(e=Vt(o),(e.length+u)%2==0&&(e+="0"),c=Math.sqrt(e),u=qt((u+1)/2)-(u<0||u%2),c==1/0?e="5e"+u:(e=c.toExponential(),e=e.slice(0,e.indexOf("e")+1)+u),i=new l(e)):i=new l(c.toString()),t=(u=l.precision)+3;;)if(s=i,i=s.plus(ht(a,s,t+2,1)).times(.5),Vt(s.d).slice(0,t)===(e=Vt(i.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!r&&e=="4999"){if(!r&&(Ne(s,u+1,0),s.times(s).eq(a))){i=s;break}t+=4,r=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(Ne(i,u+1,1),n=!i.times(i).eq(a));break}return He=!0,Ne(i,u,l.rounding,n)};oe.tangent=oe.tan=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+10,i.rounding=1,t=t.sin(),t.s=1,t=ht(t,new i(1).minus(t.times(t)).sqrt(),n+10,0),i.precision=n,i.rounding=e,Ne(Qn==2||Qn==4?t.neg():t,n,e,!0)):new i(NaN)};oe.times=oe.mul=function(n){var e,t,i,r,s,a,o,u,c,l=this,f=l.constructor,d=l.d,m=(n=new f(n)).d;if(n.s*=l.s,!d||!d[0]||!m||!m[0])return new f(!n.s||d&&!d[0]&&!m||m&&!m[0]&&!d?NaN:!d||!m?n.s/0:n.s*0);for(t=qt(l.e/Oe)+qt(n.e/Oe),u=d.length,c=m.length,u<c&&(s=d,d=m,m=s,a=u,u=c,c=a),s=[],a=u+c,i=a;i--;)s.push(0);for(i=c;--i>=0;){for(e=0,r=u+i;r>i;)o=s[r]+m[i]*d[r-i-1]+e,s[r--]=o%Fn|0,e=o/Fn|0;s[r]=(s[r]+e)%Fn|0}for(;!s[--a];)s.pop();return e?++t:s.shift(),n.d=s,n.e=Ma(s,t),He?Ne(n,f.precision,f.rounding):n};oe.toBinary=function(n,e){return Lu(this,2,n,e)};oe.toDecimalPlaces=oe.toDP=function(n,e){var t=this,i=t.constructor;return t=new i(t),n===void 0?t:(nn(n,0,yi),e===void 0?e=i.rounding:nn(e,0,8),Ne(t,n+t.e+1,e))};oe.toExponential=function(n,e){var t,i=this,r=i.constructor;return n===void 0?t=On(i,!0):(nn(n,0,yi),e===void 0?e=r.rounding:nn(e,0,8),i=Ne(new r(i),n+1,e),t=On(i,!0,n+1)),i.isNeg()&&!i.isZero()?"-"+t:t};oe.toFixed=function(n,e){var t,i,r=this,s=r.constructor;return n===void 0?t=On(r):(nn(n,0,yi),e===void 0?e=s.rounding:nn(e,0,8),i=Ne(new s(r),n+r.e+1,e),t=On(i,!1,n+i.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t};oe.toFraction=function(n){var e,t,i,r,s,a,o,u,c,l,f,d,m=this,_=m.d,h=m.constructor;if(!_)return new h(m);if(c=t=new h(1),i=u=new h(0),e=new h(i),s=e.e=zf(_)-m.e-1,a=s%Oe,e.d[0]=Nt(10,a<0?Oe+a:a),n==null)n=s>0?e:c;else{if(o=new h(n),!o.isInt()||o.lt(c))throw Error(xi+o);n=o.gt(e)?s>0?e:c:o}for(He=!1,o=new h(Vt(_)),l=h.precision,h.precision=s=_.length*Oe*2;f=ht(o,e,0,1,1),r=t.plus(f.times(i)),r.cmp(n)!=1;)t=i,i=r,r=c,c=u.plus(f.times(r)),u=r,r=e,e=o.minus(f.times(r)),o=r;return r=ht(n.minus(t),i,0,1,1),u=u.plus(r.times(c)),t=t.plus(r.times(i)),u.s=c.s=m.s,d=ht(c,i,s,1).minus(m).abs().cmp(ht(u,t,s,1).minus(m).abs())<1?[c,i]:[u,t],h.precision=l,He=!0,d};oe.toHexadecimal=oe.toHex=function(n,e){return Lu(this,16,n,e)};oe.toNearest=function(n,e){var t=this,i=t.constructor;if(t=new i(t),n==null){if(!t.d)return t;n=new i(1),e=i.rounding}else{if(n=new i(n),e===void 0?e=i.rounding:nn(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(He=!1,t=ht(t,n,0,e,1).times(n),He=!0,Ne(t)):(n.s=t.s,t=n),t};oe.toNumber=function(){return+this};oe.toOctal=function(n,e){return Lu(this,8,n,e)};oe.toPower=oe.pow=function(n){var e,t,i,r,s,a,o=this,u=o.constructor,c=+(n=new u(n));if(!o.d||!n.d||!o.d[0]||!n.d[0])return new u(Nt(+o,c));if(o=new u(o),o.eq(1))return o;if(i=u.precision,s=u.rounding,n.eq(1))return Ne(o,i,s);if(e=qt(n.e/Oe),e>=n.d.length-1&&(t=c<0?-c:c)<=eE)return r=Hf(u,o,t,i),n.s<0?new u(1).div(r):Ne(r,i,s);if(a=o.s,a<0){if(e<n.d.length-1)return new u(NaN);if(n.d[e]&1||(a=1),o.e==0&&o.d[0]==1&&o.d.length==1)return o.s=a,o}return t=Nt(+o,c),e=t==0||!isFinite(t)?qt(c*(Math.log("0."+Vt(o.d))/Math.LN10+o.e+1)):new u(t+"").e,e>u.maxE+1||e<u.minE-1?new u(e>0?a/0:0):(He=!1,u.rounding=o.s=1,t=Math.min(12,(e+"").length),r=hu(n.times(pi(o,i+t)),i),r.d&&(r=Ne(r,i+5,1),Zr(r.d,i,s)&&(e=i+10,r=Ne(hu(n.times(pi(o,e+t)),e),e+5,1),+Vt(r.d).slice(i+1,i+15)+1==1e14&&(r=Ne(r,i+1,0)))),r.s=a,He=!0,u.rounding=s,Ne(r,i,s))};oe.toPrecision=function(n,e){var t,i=this,r=i.constructor;return n===void 0?t=On(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(nn(n,1,yi),e===void 0?e=r.rounding:nn(e,0,8),i=Ne(new r(i),n,e),t=On(i,n<=i.e||i.e<=r.toExpNeg,n)),i.isNeg()&&!i.isZero()?"-"+t:t};oe.toSignificantDigits=oe.toSD=function(n,e){var t=this,i=t.constructor;return n===void 0?(n=i.precision,e=i.rounding):(nn(n,1,yi),e===void 0?e=i.rounding:nn(e,0,8)),Ne(new i(t),n,e)};oe.toString=function(){var n=this,e=n.constructor,t=On(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+t:t};oe.truncated=oe.trunc=function(){return Ne(new this.constructor(this),this.e+1,1)};oe.valueOf=oe.toJSON=function(){var n=this,e=n.constructor,t=On(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+t:t};function Vt(n){var e,t,i,r=n.length-1,s="",a=n[0];if(r>0){for(s+=a,e=1;e<r;e++)i=n[e]+"",t=Oe-i.length,t&&(s+=hi(t)),s+=i;a=n[e],i=a+"",t=Oe-i.length,t&&(s+=hi(t))}else if(a===0)return"0";for(;a%10===0;)a/=10;return s+a}function nn(n,e,t){if(n!==~~n||n<e||n>t)throw Error(xi+n)}function Zr(n,e,t,i){var r,s,a,o;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=Oe,r=0):(r=Math.ceil((e+1)/Oe),e%=Oe),s=Nt(10,Oe-e),o=n[r]%s|0,i==null?e<3?(e==0?o=o/100|0:e==1&&(o=o/10|0),a=t<4&&o==99999||t>3&&o==49999||o==5e4||o==0):a=(t<4&&o+1==s||t>3&&o+1==s/2)&&(n[r+1]/s/100|0)==Nt(10,e-2)-1||(o==s/2||o==0)&&(n[r+1]/s/100|0)==0:e<4?(e==0?o=o/1e3|0:e==1?o=o/100|0:e==2&&(o=o/10|0),a=(i||t<4)&&o==9999||!i&&t>3&&o==4999):a=((i||t<4)&&o+1==s||!i&&t>3&&o+1==s/2)&&(n[r+1]/s/1e3|0)==Nt(10,e-3)-1,a}function Zs(n,e,t){for(var i,r=[0],s,a=0,o=n.length;a<o;){for(s=r.length;s--;)r[s]*=e;for(r[0]+=cu.indexOf(n.charAt(a++)),i=0;i<r.length;i++)r[i]>t-1&&(r[i+1]===void 0&&(r[i+1]=0),r[i+1]+=r[i]/t|0,r[i]%=t)}return r.reverse()}function nE(n,e){var t,i,r;if(e.isZero())return e;i=e.d.length,i<32?(t=Math.ceil(i/3),r=(1/Da(4,t)).toString()):(t=16,r="2.3283064365386962890625e-10"),n.precision+=t,e=br(n,1,e.times(r),new n(1));for(var s=t;s--;){var a=e.times(e);e=a.times(a).minus(a).times(8).plus(1)}return n.precision-=t,e}var ht=function(){function n(i,r,s){var a,o=0,u=i.length;for(i=i.slice();u--;)a=i[u]*r+o,i[u]=a%s|0,o=a/s|0;return o&&i.unshift(o),i}function e(i,r,s,a){var o,u;if(s!=a)u=s>a?1:-1;else for(o=u=0;o<s;o++)if(i[o]!=r[o]){u=i[o]>r[o]?1:-1;break}return u}function t(i,r,s,a){for(var o=0;s--;)i[s]-=o,o=i[s]<r[s]?1:0,i[s]=o*a+i[s]-r[s];for(;!i[0]&&i.length>1;)i.shift()}return function(i,r,s,a,o,u){var c,l,f,d,m,_,h,g,p,A,v,E,y,x,w,T,D,M,F,B,O=i.constructor,V=i.s==r.s?1:-1,X=i.d,U=r.d;if(!X||!X[0]||!U||!U[0])return new O(!i.s||!r.s||(X?U&&X[0]==U[0]:!U)?NaN:X&&X[0]==0||!U?V*0:V/0);for(u?(m=1,l=i.e-r.e):(u=Fn,m=Oe,l=qt(i.e/m)-qt(r.e/m)),F=U.length,D=X.length,p=new O(V),A=p.d=[],f=0;U[f]==(X[f]||0);f++);if(U[f]>(X[f]||0)&&l--,s==null?(x=s=O.precision,a=O.rounding):o?x=s+(i.e-r.e)+1:x=s,x<0)A.push(1),_=!0;else{if(x=x/m+2|0,f=0,F==1){for(d=0,U=U[0],x++;(f<D||d)&&x--;f++)w=d*u+(X[f]||0),A[f]=w/U|0,d=w%U|0;_=d||f<D}else{for(d=u/(U[0]+1)|0,d>1&&(U=n(U,d,u),X=n(X,d,u),F=U.length,D=X.length),T=F,v=X.slice(0,F),E=v.length;E<F;)v[E++]=0;B=U.slice(),B.unshift(0),M=U[0],U[1]>=u/2&&++M;do d=0,c=e(U,v,F,E),c<0?(y=v[0],F!=E&&(y=y*u+(v[1]||0)),d=y/M|0,d>1?(d>=u&&(d=u-1),h=n(U,d,u),g=h.length,E=v.length,c=e(h,v,g,E),c==1&&(d--,t(h,F<g?B:U,g,u))):(d==0&&(c=d=1),h=U.slice()),g=h.length,g<E&&h.unshift(0),t(v,h,E,u),c==-1&&(E=v.length,c=e(U,v,F,E),c<1&&(d++,t(v,F<E?B:U,E,u))),E=v.length):c===0&&(d++,v=[0]),A[f++]=d,c&&v[0]?v[E++]=X[T]||0:(v=[X[T]],E=1);while((T++<D||v[0]!==void 0)&&x--);_=v[0]!==void 0}A[0]||A.shift()}if(m==1)p.e=l,Lf=_;else{for(f=1,d=A[0];d>=10;d/=10)f++;p.e=f+l*m-1,Ne(p,o?s+p.e+1:s,a,_)}return p}}();function Ne(n,e,t,i){var r,s,a,o,u,c,l,f,d,m=n.constructor;e:if(e!=null){if(f=n.d,!f)return n;for(r=1,o=f[0];o>=10;o/=10)r++;if(s=e-r,s<0)s+=Oe,a=e,l=f[d=0],u=l/Nt(10,r-a-1)%10|0;else if(d=Math.ceil((s+1)/Oe),o=f.length,d>=o)if(i){for(;o++<=d;)f.push(0);l=u=0,r=1,s%=Oe,a=s-Oe+1}else break e;else{for(l=o=f[d],r=1;o>=10;o/=10)r++;s%=Oe,a=s-Oe+r,u=a<0?0:l/Nt(10,r-a-1)%10|0}if(i=i||e<0||f[d+1]!==void 0||(a<0?l:l%Nt(10,r-a-1)),c=t<4?(u||i)&&(t==0||t==(n.s<0?3:2)):u>5||u==5&&(t==4||i||t==6&&(s>0?a>0?l/Nt(10,r-a):0:f[d-1])%10&1||t==(n.s<0?8:7)),e<1||!f[0])return f.length=0,c?(e-=n.e+1,f[0]=Nt(10,(Oe-e%Oe)%Oe),n.e=-e||0):f[0]=n.e=0,n;if(s==0?(f.length=d,o=1,d--):(f.length=d+1,o=Nt(10,Oe-s),f[d]=a>0?(l/Nt(10,r-a)%Nt(10,a)|0)*o:0),c)for(;;)if(d==0){for(s=1,a=f[0];a>=10;a/=10)s++;for(a=f[0]+=o,o=1;a>=10;a/=10)o++;s!=o&&(n.e++,f[0]==Fn&&(f[0]=1));break}else{if(f[d]+=o,f[d]!=Fn)break;f[d--]=0,o=1}for(s=f.length;f[--s]===0;)f.pop()}return He&&(n.e>m.maxE?(n.d=null,n.e=NaN):n.e<m.minE&&(n.e=0,n.d=[0])),n}function On(n,e,t){if(!n.isFinite())return Gf(n);var i,r=n.e,s=Vt(n.d),a=s.length;return e?(t&&(i=t-a)>0?s=s.charAt(0)+"."+s.slice(1)+hi(i):a>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+hi(-r-1)+s,t&&(i=t-a)>0&&(s+=hi(i))):r>=a?(s+=hi(r+1-a),t&&(i=t-r-1)>0&&(s=s+"."+hi(i))):((i=r+1)<a&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-a)>0&&(r+1===a&&(s+="."),s+=hi(i))),s}function Ma(n,e){var t=n[0];for(e*=Oe;t>=10;t/=10)e++;return e}function oa(n,e,t){if(e>tE)throw He=!0,t&&(n.precision=t),Error(If);return Ne(new n(sa),e,1,!0)}function Un(n,e,t){if(e>fu)throw Error(If);return Ne(new n(aa),e,t,!0)}function zf(n){var e=n.length-1,t=e*Oe+1;if(e=n[e],e){for(;e%10==0;e/=10)t--;for(e=n[0];e>=10;e/=10)t++}return t}function hi(n){for(var e="";n--;)e+="0";return e}function Hf(n,e,t,i){var r,s=new n(1),a=Math.ceil(i/Oe+4);for(He=!1;;){if(t%2&&(s=s.times(e),ul(s.d,a)&&(r=!0)),t=qt(t/2),t===0){t=s.d.length-1,r&&s.d[t]===0&&++s.d[t];break}e=e.times(e),ul(e.d,a)}return He=!0,s}function ol(n){return n.d[n.d.length-1]&1}function Vf(n,e,t){for(var i,r,s=new n(e[0]),a=0;++a<e.length;){if(r=new n(e[a]),!r.s){s=r;break}i=s.cmp(r),(i===t||i===0&&s.s===t)&&(s=r)}return s}function hu(n,e){var t,i,r,s,a,o,u,c=0,l=0,f=0,d=n.constructor,m=d.rounding,_=d.precision;if(!n.d||!n.d[0]||n.e>17)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(e==null?(He=!1,u=_):u=e,o=new d(.03125);n.e>-2;)n=n.times(o),f+=5;for(i=Math.log(Nt(2,f))/Math.LN10*2+5|0,u+=i,t=s=a=new d(1),d.precision=u;;){if(s=Ne(s.times(n),u,1),t=t.times(++l),o=a.plus(ht(s,t,u,1)),Vt(o.d).slice(0,u)===Vt(a.d).slice(0,u)){for(r=f;r--;)a=Ne(a.times(a),u,1);if(e==null)if(c<3&&Zr(a.d,u-i,m,c))d.precision=u+=10,t=s=o=new d(1),l=0,c++;else return Ne(a,d.precision=_,m,He=!0);else return d.precision=_,a}a=o}}function pi(n,e){var t,i,r,s,a,o,u,c,l,f,d,m=1,_=10,h=n,g=h.d,p=h.constructor,A=p.rounding,v=p.precision;if(h.s<0||!g||!g[0]||!h.e&&g[0]==1&&g.length==1)return new p(g&&!g[0]?-1/0:h.s!=1?NaN:g?0:h);if(e==null?(He=!1,l=v):l=e,p.precision=l+=_,t=Vt(g),i=t.charAt(0),Math.abs(s=h.e)<15e14){for(;i<7&&i!=1||i==1&&t.charAt(1)>3;)h=h.times(n),t=Vt(h.d),i=t.charAt(0),m++;s=h.e,i>1?(h=new p("0."+t),s++):h=new p(i+"."+t.slice(1))}else return c=oa(p,l+2,v).times(s+""),h=pi(new p(i+"."+t.slice(1)),l-_).plus(c),p.precision=v,e==null?Ne(h,v,A,He=!0):h;for(f=h,u=a=h=ht(h.minus(1),h.plus(1),l,1),d=Ne(h.times(h),l,1),r=3;;){if(a=Ne(a.times(d),l,1),c=u.plus(ht(a,new p(r),l,1)),Vt(c.d).slice(0,l)===Vt(u.d).slice(0,l))if(u=u.times(2),s!==0&&(u=u.plus(oa(p,l+2,v).times(s+""))),u=ht(u,new p(m),l,1),e==null)if(Zr(u.d,l-_,A,o))p.precision=l+=_,c=a=h=ht(f.minus(1),f.plus(1),l,1),d=Ne(h.times(h),l,1),r=o=1;else return Ne(u,p.precision=v,A,He=!0);else return p.precision=v,u;u=c,r+=2}}function Gf(n){return String(n.s*n.s/0)}function Ks(n,e){var t,i,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(t<0&&(t=i),t+=+e.slice(i+1),e=e.substring(0,i)):t<0&&(t=e.length),i=0;e.charCodeAt(i)===48;i++);for(r=e.length;e.charCodeAt(r-1)===48;--r);if(e=e.slice(i,r),e){if(r-=i,n.e=t=t-i-1,n.d=[],i=(t+1)%Oe,t<0&&(i+=Oe),i<r){for(i&&n.d.push(+e.slice(0,i)),r-=Oe;i<r;)n.d.push(+e.slice(i,i+=Oe));e=e.slice(i),i=Oe-e.length}else i-=r;for(;i--;)e+="0";n.d.push(+e),He&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function iE(n,e){var t,i,r,s,a,o,u,c,l;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Of.test(e))return Ks(n,e)}else if(e==="Infinity"||e==="NaN")return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(Jv.test(e))t=16,e=e.toLowerCase();else if(jv.test(e))t=2;else if(Qv.test(e))t=8;else throw Error(xi+e);for(s=e.search(/p/i),s>0?(u=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),a=s>=0,i=n.constructor,a&&(e=e.replace(".",""),o=e.length,s=o-s,r=Hf(i,new i(t),s,s*2)),c=Zs(e,t,Fn),l=c.length-1,s=l;c[s]===0;--s)c.pop();return s<0?new i(n.s*0):(n.e=Ma(c,l),n.d=c,He=!1,a&&(n=ht(n,r,o*4)),u&&(n=n.times(Math.abs(u)<54?Nt(2,u):Tr.pow(2,u))),He=!0,n)}function rE(n,e){var t,i=e.d.length;if(i<3)return e.isZero()?e:br(n,2,e,e);t=1.4*Math.sqrt(i),t=t>16?16:t|0,e=e.times(1/Da(5,t)),e=br(n,2,e,e);for(var r,s=new n(5),a=new n(16),o=new n(20);t--;)r=e.times(e),e=e.times(s.plus(r.times(a.times(r).minus(o))));return e}function br(n,e,t,i,r){var s,a,o,u,c=n.precision,l=Math.ceil(c/Oe);for(He=!1,u=t.times(t),o=new n(i);;){if(a=ht(o.times(u),new n(e++*e++),c,1),o=r?i.plus(a):i.minus(a),i=ht(a.times(u),new n(e++*e++),c,1),a=o.plus(i),a.d[l]!==void 0){for(s=l;a.d[s]===o.d[s]&&s--;);if(s==-1)break}s=o,o=i,i=a,a=s}return He=!0,a.d.length=l+1,a}function Da(n,e){for(var t=n;--e;)t*=n;return t}function kf(n,e){var t,i=e.s<0,r=Un(n,n.precision,1),s=r.times(.5);if(e=e.abs(),e.lte(s))return Qn=i?4:1,e;if(t=e.divToInt(r),t.isZero())Qn=i?3:2;else{if(e=e.minus(t.times(r)),e.lte(s))return Qn=ol(t)?i?2:3:i?4:1,e;Qn=ol(t)?i?1:4:i?3:2}return e.minus(r).abs()}function Lu(n,e,t,i){var r,s,a,o,u,c,l,f,d,m=n.constructor,_=t!==void 0;if(_?(nn(t,1,yi),i===void 0?i=m.rounding:nn(i,0,8)):(t=m.precision,i=m.rounding),!n.isFinite())l=Gf(n);else{for(l=On(n),a=l.indexOf("."),_?(r=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):r=e,a>=0&&(l=l.replace(".",""),d=new m(1),d.e=l.length-a,d.d=Zs(On(d),10,r),d.e=d.d.length),f=Zs(l,10,r),s=u=f.length;f[--u]==0;)f.pop();if(!f[0])l=_?"0p+0":"0";else{if(a<0?s--:(n=new m(n),n.d=f,n.e=s,n=ht(n,d,t,i,0,r),f=n.d,s=n.e,c=Lf),a=f[t],o=r/2,c=c||f[t+1]!==void 0,c=i<4?(a!==void 0||c)&&(i===0||i===(n.s<0?3:2)):a>o||a===o&&(i===4||c||i===6&&f[t-1]&1||i===(n.s<0?8:7)),f.length=t,c)for(;++f[--t]>r-1;)f[t]=0,t||(++s,f.unshift(1));for(u=f.length;!f[u-1];--u);for(a=0,l="";a<u;a++)l+=cu.charAt(f[a]);if(_){if(u>1)if(e==16||e==8){for(a=e==16?4:3,--u;u%a;u++)l+="0";for(f=Zs(l,r,e),u=f.length;!f[u-1];--u);for(a=1,l="1.";a<u;a++)l+=cu.charAt(f[a])}else l=l.charAt(0)+"."+l.slice(1);l=l+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)l="0"+l;l="0."+l}else if(++s>u)for(s-=u;s--;)l+="0";else s<u&&(l=l.slice(0,s)+"."+l.slice(s))}l=(e==16?"0x":e==2?"0b":e==8?"0o":"")+l}return n.s<0?"-"+l:l}function ul(n,e){if(n.length>e)return n.length=e,!0}function sE(n){return new this(n).abs()}function aE(n){return new this(n).acos()}function oE(n){return new this(n).acosh()}function uE(n,e){return new this(n).plus(e)}function cE(n){return new this(n).asin()}function lE(n){return new this(n).asinh()}function fE(n){return new this(n).atan()}function hE(n){return new this(n).atanh()}function dE(n,e){n=new this(n),e=new this(e);var t,i=this.precision,r=this.rounding,s=i+4;return!n.s||!e.s?t=new this(NaN):!n.d&&!e.d?(t=Un(this,s,1).times(e.s>0?.25:.75),t.s=n.s):!e.d||n.isZero()?(t=e.s<0?Un(this,i,r):new this(0),t.s=n.s):!n.d||e.isZero()?(t=Un(this,s,1).times(.5),t.s=n.s):e.s<0?(this.precision=s,this.rounding=1,t=this.atan(ht(n,e,s,1)),e=Un(this,s,1),this.precision=i,this.rounding=r,t=n.s<0?t.minus(e):t.plus(e)):t=this.atan(ht(n,e,s,1)),t}function pE(n){return new this(n).cbrt()}function mE(n){return Ne(n=new this(n),n.e+1,2)}function gE(n,e,t){return new this(n).clamp(e,t)}function _E(n){if(!n||typeof n!="object")throw Error(ya+"Object expected");var e,t,i,r=n.defaults===!0,s=["precision",1,yi,"rounding",0,8,"toExpNeg",-9e15,0,"toExpPos",0,uu,"maxE",0,uu,"minE",-9e15,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],r&&(this[t]=lu[t]),(i=n[t])!==void 0)if(qt(i)===i&&i>=s[e+1]&&i<=s[e+2])this[t]=i;else throw Error(xi+t+": "+i);if(t="crypto",r&&(this[t]=lu[t]),(i=n[t])!==void 0)if(i===!0||i===!1||i===0||i===1)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Uf);else this[t]=!1;else throw Error(xi+t+": "+i);return this}function vE(n){return new this(n).cos()}function EE(n){return new this(n).cosh()}function Wf(n){var e,t,i;function r(s){var a,o,u,c=this;if(!(c instanceof r))return new r(s);if(c.constructor=r,cl(s)){c.s=s.s,He?!s.d||s.e>r.maxE?(c.e=NaN,c.d=null):s.e<r.minE?(c.e=0,c.d=[0]):(c.e=s.e,c.d=s.d.slice()):(c.e=s.e,c.d=s.d?s.d.slice():s.d);return}if(u=typeof s,u==="number"){if(s===0){c.s=1/s<0?-1:1,c.e=0,c.d=[0];return}if(s<0?(s=-s,c.s=-1):c.s=1,s===~~s&&s<1e7){for(a=0,o=s;o>=10;o/=10)a++;He?a>r.maxE?(c.e=NaN,c.d=null):a<r.minE?(c.e=0,c.d=[0]):(c.e=a,c.d=[s]):(c.e=a,c.d=[s]);return}if(s*0!==0){s||(c.s=NaN),c.e=NaN,c.d=null;return}return Ks(c,s.toString())}if(u==="string")return(o=s.charCodeAt(0))===45?(s=s.slice(1),c.s=-1):(o===43&&(s=s.slice(1)),c.s=1),Of.test(s)?Ks(c,s):iE(c,s);if(u==="bigint")return s<0?(s=-s,c.s=-1):c.s=1,Ks(c,s.toString());throw Error(xi+s)}if(r.prototype=oe,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=_E,r.clone=Wf,r.isDecimal=cl,r.abs=sE,r.acos=aE,r.acosh=oE,r.add=uE,r.asin=cE,r.asinh=lE,r.atan=fE,r.atanh=hE,r.atan2=dE,r.cbrt=pE,r.ceil=mE,r.clamp=gE,r.cos=vE,r.cosh=EE,r.div=xE,r.exp=yE,r.floor=ME,r.hypot=DE,r.ln=SE,r.log=AE,r.log10=bE,r.log2=wE,r.max=TE,r.min=CE,r.mod=FE,r.mul=RE,r.pow=PE,r.random=NE,r.round=LE,r.sign=IE,r.sin=UE,r.sinh=BE,r.sqrt=OE,r.sub=zE,r.sum=HE,r.tan=VE,r.tanh=GE,r.trunc=kE,n===void 0&&(n={}),n&&n.defaults!==!0)for(i=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<i.length;)n.hasOwnProperty(t=i[e++])||(n[t]=this[t]);return r.config(n),r}function xE(n,e){return new this(n).div(e)}function yE(n){return new this(n).exp()}function ME(n){return Ne(n=new this(n),n.e+1,3)}function DE(){var n,e,t=new this(0);for(He=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return He=!0,new this(1/0);t=e}return He=!0,t.sqrt()}function cl(n){return n instanceof Tr||n&&n.toStringTag===Bf||!1}function SE(n){return new this(n).ln()}function AE(n,e){return new this(n).log(e)}function wE(n){return new this(n).log(2)}function bE(n){return new this(n).log(10)}function TE(){return Vf(this,arguments,-1)}function CE(){return Vf(this,arguments,1)}function FE(n,e){return new this(n).mod(e)}function RE(n,e){return new this(n).mul(e)}function PE(n,e){return new this(n).pow(e)}function NE(n){var e,t,i,r,s=0,a=new this(1),o=[];if(n===void 0?n=this.precision:nn(n,1,yi),i=Math.ceil(n/Oe),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(i));s<i;)r=e[s],r>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:o[s++]=r%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(i*=4);s<i;)r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((e[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(e,s):(o.push(r%1e7),s+=4);s=i/4}else throw Error(Uf);else for(;s<i;)o[s++]=Math.random()*1e7|0;for(i=o[--s],n%=Oe,i&&n&&(r=Nt(10,Oe-n),o[s]=(i/r|0)*r);o[s]===0;s--)o.pop();if(s<0)t=0,o=[0];else{for(t=-1;o[0]===0;t-=Oe)o.shift();for(i=1,r=o[0];r>=10;r/=10)i++;i<Oe&&(t-=Oe-i)}return a.e=t,a.d=o,a}function LE(n){return Ne(n=new this(n),n.e+1,this.rounding)}function IE(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function UE(n){return new this(n).sin()}function BE(n){return new this(n).sinh()}function OE(n){return new this(n).sqrt()}function zE(n,e){return new this(n).sub(e)}function HE(){var n=0,e=arguments,t=new this(e[n]);for(He=!1;t.s&&++n<e.length;)t=t.plus(e[n]);return He=!0,Ne(t,this.precision,this.rounding)}function VE(n){return new this(n).tan()}function GE(n){return new this(n).tanh()}function kE(n){return Ne(n=new this(n),n.e+1,1)}oe[Symbol.for("nodejs.util.inspect.custom")]=oe.toString;oe[Symbol.toStringTag]="Decimal";var Tr=oe.constructor=Wf(lu);sa=new Tr(sa);aa=new Tr(aa);var WE="BigNumber",XE=["?on","config"],qE=Ie(WE,XE,n=>{var{on:e,config:t}=n,i=Tr.clone({precision:t.precision,modulo:Tr.EUCLID});return i.prototype=Object.create(i.prototype),i.prototype.type="BigNumber",i.prototype.isBigNumber=!0,i.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},i.fromJSON=function(r){return new i(r.value)},e&&e("config",function(r,s){r.precision!==s.precision&&i.config({precision:r.precision})}),i},{isClass:!0});const Xt=Math.cosh||function(n){return Math.abs(n)<1e-9?1-n:(Math.exp(n)+Math.exp(-n))*.5},pn=Math.sinh||function(n){return Math.abs(n)<1e-9?n:(Math.exp(n)-Math.exp(-n))*.5},YE=function(n){const e=Math.PI/4;if(-e>n||n>e)return Math.cos(n)-1;const t=n*n;return t*(t*(t*(t*(t*(t*(t*(t/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},mo=function(n,e){return n=Math.abs(n),e=Math.abs(e),n<e&&([n,e]=[e,n]),n<1e8?Math.sqrt(n*n+e*e):(e/=n,n*Math.sqrt(1+e*e))},ur=function(){throw SyntaxError("Invalid Param")};function go(n,e){const t=Math.abs(n),i=Math.abs(e);return n===0?Math.log(i):e===0?Math.log(t):t<3e3&&i<3e3?Math.log(n*n+e*e)*.5:(n=n*.5,e=e*.5,.5*Math.log(n*n+e*e)+Math.LN2)}const $E={re:0,im:0},Ni=function(n,e){const t=$E;if(n==null)t.re=t.im=0;else if(e!==void 0)t.re=n,t.im=e;else switch(typeof n){case"object":if("im"in n&&"re"in n)t.re=n.re,t.im=n.im;else if("abs"in n&&"arg"in n){if(!isFinite(n.abs)&&isFinite(n.arg))return ie.INFINITY;t.re=n.abs*Math.cos(n.arg),t.im=n.abs*Math.sin(n.arg)}else if("r"in n&&"phi"in n){if(!isFinite(n.r)&&isFinite(n.phi))return ie.INFINITY;t.re=n.r*Math.cos(n.phi),t.im=n.r*Math.sin(n.phi)}else n.length===2?(t.re=n[0],t.im=n[1]):ur();break;case"string":t.im=t.re=0;const i=n.replace(/_/g,"").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);let r=1,s=0;i===null&&ur();for(let a=0;a<i.length;a++){const o=i[a];o===" "||o==="	"||o===`
`||(o==="+"?r++:o==="-"?s++:o==="i"||o==="I"?(r+s===0&&ur(),i[a+1]!==" "&&!isNaN(i[a+1])?(t.im+=parseFloat((s%2?"-":"")+i[a+1]),a++):t.im+=parseFloat((s%2?"-":"")+"1"),r=s=0):((r+s===0||isNaN(o))&&ur(),i[a+1]==="i"||i[a+1]==="I"?(t.im+=parseFloat((s%2?"-":"")+o),a++):t.re+=parseFloat((s%2?"-":"")+o),r=s=0))}r+s>0&&ur();break;case"number":t.im=0,t.re=n;break;default:ur()}return isNaN(t.re)||isNaN(t.im),t};function ie(n,e){if(!(this instanceof ie))return new ie(n,e);const t=Ni(n,e);this.re=t.re,this.im=t.im}ie.prototype={re:0,im:0,sign:function(){const n=mo(this.re,this.im);return new ie(this.re/n,this.im/n)},add:function(n,e){const t=Ni(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im));return i||r?i&&r?ie.NAN:ie.INFINITY:new ie(this.re+t.re,this.im+t.im)},sub:function(n,e){const t=Ni(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im));return i||r?i&&r?ie.NAN:ie.INFINITY:new ie(this.re-t.re,this.im-t.im)},mul:function(n,e){const t=Ni(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im)),s=this.re===0&&this.im===0,a=t.re===0&&t.im===0;return i&&a||r&&s?ie.NAN:i||r?ie.INFINITY:t.im===0&&this.im===0?new ie(this.re*t.re,0):new ie(this.re*t.re-this.im*t.im,this.re*t.im+this.im*t.re)},div:function(n,e){const t=Ni(n,e),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im)),s=this.re===0&&this.im===0,a=t.re===0&&t.im===0;if(s&&a||i&&r)return ie.NAN;if(a||i)return ie.INFINITY;if(s||r)return ie.ZERO;if(t.im===0)return new ie(this.re/t.re,this.im/t.re);if(Math.abs(t.re)<Math.abs(t.im)){const o=t.re/t.im,u=t.re*o+t.im;return new ie((this.re*o+this.im)/u,(this.im*o-this.re)/u)}else{const o=t.im/t.re,u=t.im*o+t.re;return new ie((this.re+this.im*o)/u,(this.im-this.re*o)/u)}},pow:function(n,e){const t=Ni(n,e),i=this.re===0&&this.im===0;if(t.re===0&&t.im===0)return ie.ONE;if(t.im===0){if(this.im===0&&this.re>0)return new ie(Math.pow(this.re,t.re),0);if(this.re===0)switch((t.re%4+4)%4){case 0:return new ie(Math.pow(this.im,t.re),0);case 1:return new ie(0,Math.pow(this.im,t.re));case 2:return new ie(-Math.pow(this.im,t.re),0);case 3:return new ie(0,-Math.pow(this.im,t.re))}}if(i&&t.re>0)return ie.ZERO;const s=Math.atan2(this.im,this.re),a=go(this.re,this.im);let o=Math.exp(t.re*a-t.im*s),u=t.im*a+t.re*s;return new ie(o*Math.cos(u),o*Math.sin(u))},sqrt:function(){const n=this.re,e=this.im;if(e===0)return n>=0?new ie(Math.sqrt(n),0):new ie(0,Math.sqrt(-n));const t=mo(n,e);let i=Math.sqrt(.5*(t+Math.abs(n))),r=Math.abs(e)/(2*i);return n>=0?new ie(i,e<0?-r:r):new ie(r,e<0?-i:i)},exp:function(){const n=Math.exp(this.re);return this.im===0?new ie(n,0):new ie(n*Math.cos(this.im),n*Math.sin(this.im))},expm1:function(){const n=this.re,e=this.im;return new ie(Math.expm1(n)*Math.cos(e)+YE(e),Math.exp(n)*Math.sin(e))},log:function(){const n=this.re,e=this.im;return e===0&&n>0?new ie(Math.log(n),0):new ie(go(n,e),Math.atan2(e,n))},abs:function(){return mo(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){const n=this.re,e=this.im;return new ie(Math.sin(n)*Xt(e),Math.cos(n)*pn(e))},cos:function(){const n=this.re,e=this.im;return new ie(Math.cos(n)*Xt(e),-Math.sin(n)*pn(e))},tan:function(){const n=2*this.re,e=2*this.im,t=Math.cos(n)+Xt(e);return new ie(Math.sin(n)/t,pn(e)/t)},cot:function(){const n=2*this.re,e=2*this.im,t=Math.cos(n)-Xt(e);return new ie(-Math.sin(n)/t,pn(e)/t)},sec:function(){const n=this.re,e=this.im,t=.5*Xt(2*e)+.5*Math.cos(2*n);return new ie(Math.cos(n)*Xt(e)/t,Math.sin(n)*pn(e)/t)},csc:function(){const n=this.re,e=this.im,t=.5*Xt(2*e)-.5*Math.cos(2*n);return new ie(Math.sin(n)*Xt(e)/t,-Math.cos(n)*pn(e)/t)},asin:function(){const n=this.re,e=this.im,t=new ie(e*e-n*n+1,-2*n*e).sqrt(),i=new ie(t.re-e,t.im+n).log();return new ie(i.im,-i.re)},acos:function(){const n=this.re,e=this.im,t=new ie(e*e-n*n+1,-2*n*e).sqrt(),i=new ie(t.re-e,t.im+n).log();return new ie(Math.PI/2-i.im,i.re)},atan:function(){const n=this.re,e=this.im;if(n===0){if(e===1)return new ie(0,1/0);if(e===-1)return new ie(0,-1/0)}const t=n*n+(1-e)*(1-e),i=new ie((1-e*e-n*n)/t,-2*n/t).log();return new ie(-.5*i.im,.5*i.re)},acot:function(){const n=this.re,e=this.im;if(e===0)return new ie(Math.atan2(1,n),0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).atan():new ie(n!==0?n/0:0,e!==0?-e/0:0).atan()},asec:function(){const n=this.re,e=this.im;if(n===0&&e===0)return new ie(0,1/0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).acos():new ie(n!==0?n/0:0,e!==0?-e/0:0).acos()},acsc:function(){const n=this.re,e=this.im;if(n===0&&e===0)return new ie(Math.PI/2,1/0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).asin():new ie(n!==0?n/0:0,e!==0?-e/0:0).asin()},sinh:function(){const n=this.re,e=this.im;return new ie(pn(n)*Math.cos(e),Xt(n)*Math.sin(e))},cosh:function(){const n=this.re,e=this.im;return new ie(Xt(n)*Math.cos(e),pn(n)*Math.sin(e))},tanh:function(){const n=2*this.re,e=2*this.im,t=Xt(n)+Math.cos(e);return new ie(pn(n)/t,Math.sin(e)/t)},coth:function(){const n=2*this.re,e=2*this.im,t=Xt(n)-Math.cos(e);return new ie(pn(n)/t,-Math.sin(e)/t)},csch:function(){const n=this.re,e=this.im,t=Math.cos(2*e)-Xt(2*n);return new ie(-2*pn(n)*Math.cos(e)/t,2*Xt(n)*Math.sin(e)/t)},sech:function(){const n=this.re,e=this.im,t=Math.cos(2*e)+Xt(2*n);return new ie(2*Xt(n)*Math.cos(e)/t,-2*pn(n)*Math.sin(e)/t)},asinh:function(){let n=this.im;this.im=-this.re,this.re=n;const e=this.asin();return this.re=-this.im,this.im=n,n=e.re,e.re=-e.im,e.im=n,e},acosh:function(){const n=this.acos();if(n.im<=0){const e=n.re;n.re=-n.im,n.im=e}else{const e=n.im;n.im=-n.re,n.re=e}return n},atanh:function(){const n=this.re,e=this.im,t=n>1&&e===0,i=1-n,r=1+n,s=i*i+e*e,a=s!==0?new ie((r*i-e*e)/s,(e*i+r*e)/s):new ie(n!==-1?n/0:0,e!==0?e/0:0),o=a.re;return a.re=go(a.re,a.im)/2,a.im=Math.atan2(a.im,o)/2,t&&(a.im=-a.im),a},acoth:function(){const n=this.re,e=this.im;if(n===0&&e===0)return new ie(0,Math.PI/2);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).atanh():new ie(n!==0?n/0:0,e!==0?-e/0:0).atanh()},acsch:function(){const n=this.re,e=this.im;if(e===0)return new ie(n!==0?Math.log(n+Math.sqrt(n*n+1)):1/0,0);const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).asinh():new ie(n!==0?n/0:0,e!==0?-e/0:0).asinh()},asech:function(){const n=this.re,e=this.im;if(this.isZero())return ie.INFINITY;const t=n*n+e*e;return t!==0?new ie(n/t,-e/t).acosh():new ie(n!==0?n/0:0,e!==0?-e/0:0).acosh()},inverse:function(){if(this.isZero())return ie.INFINITY;if(this.isInfinite())return ie.ZERO;const n=this.re,e=this.im,t=n*n+e*e;return new ie(n/t,-e/t)},conjugate:function(){return new ie(this.re,-this.im)},neg:function(){return new ie(-this.re,-this.im)},ceil:function(n){return n=Math.pow(10,n||0),new ie(Math.ceil(this.re*n)/n,Math.ceil(this.im*n)/n)},floor:function(n){return n=Math.pow(10,n||0),new ie(Math.floor(this.re*n)/n,Math.floor(this.im*n)/n)},round:function(n){return n=Math.pow(10,n||0),new ie(Math.round(this.re*n)/n,Math.round(this.im*n)/n)},equals:function(n,e){const t=Ni(n,e);return Math.abs(t.re-this.re)<=ie.EPSILON&&Math.abs(t.im-this.im)<=ie.EPSILON},clone:function(){return new ie(this.re,this.im)},toString:function(){let n=this.re,e=this.im,t="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(n)<ie.EPSILON&&(n=0),Math.abs(e)<ie.EPSILON&&(e=0),e===0?t+n:(n!==0?(t+=n,t+=" ",e<0?(e=-e,t+="-"):t+="+",t+=" "):e<0&&(e=-e,t+="-"),e!==1&&(t+=e),t+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!this.isFinite()}};ie.ZERO=new ie(0,0);ie.ONE=new ie(1,0);ie.I=new ie(0,1);ie.PI=new ie(Math.PI,0);ie.E=new ie(Math.E,0);ie.INFINITY=new ie(1/0,1/0);ie.NAN=new ie(NaN,NaN);ie.EPSILON=1e-15;var ZE="Complex",KE=[],jE=Ie(ZE,KE,()=>(Object.defineProperty(ie,"name",{value:"Complex"}),ie.prototype.constructor=ie,ie.prototype.type="Complex",ie.prototype.isComplex=!0,ie.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},ie.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},ie.prototype.format=function(n){var e="",t=this.im,i=this.re,r=ou(this.re,n),s=ou(this.im,n),a=pt(n)?n:n?n.precision:null;if(a!==null){var o=Math.pow(10,-a);Math.abs(i/t)<o&&(i=0),Math.abs(t/i)<o&&(t=0)}return t===0?e=r:i===0?t===1?e="i":t===-1?e="-i":e=s+"i":t<0?t===-1?e=r+" - i":e=r+" - "+s.substring(1)+"i":t===1?e=r+" + i":e=r+" + "+s+"i",e},ie.fromPolar=function(n){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return ie(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],i=arguments[1];if(pt(t)){if(bf(i)&&i.hasBase("ANGLE")&&(i=i.toNumber("rad")),pt(i))return new ie({r:t,phi:i});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},ie.prototype.valueOf=ie.prototype.toString,ie.fromJSON=function(n){return new ie(n)},ie.compare=function(n,e){return n.re>e.re?1:n.re<e.re?-1:n.im>e.im?1:n.im<e.im?-1:0},ie),{isClass:!0});typeof BigInt>"u"&&(BigInt=function(n){if(isNaN(n))throw new Error("");return n});const Pe=BigInt(0),qe=BigInt(1),Kr=BigInt(2),du=BigInt(5),Jt=BigInt(10),JE=2e3,_e={s:qe,n:Pe,d:qe};function $n(n,e){try{n=BigInt(n)}catch{throw li()}return n*e}function An(n){return typeof n=="bigint"?n:Math.floor(n)}function Et(n,e){if(e===Pe)throw Iu();const t=Object.create(mn.prototype);t.s=n<Pe?-qe:qe,n=n<Pe?-n:n;const i=Ui(n,e);return t.n=n/i,t.d=e/i,t}function cr(n){const e={};let t=n,i=Kr,r=du-qe;for(;r<=t;){for(;t%i===Pe;)t/=i,e[i]=(e[i]||Pe)+qe;r+=qe+Kr*i++}return t!==n?t>1&&(e[t]=(e[t]||Pe)+qe):e[n]=(e[n]||Pe)+qe,e}const zt=function(n,e){let t=Pe,i=qe,r=qe;if(n!=null)if(e!==void 0){if(typeof n=="bigint")t=n;else{if(isNaN(n))throw li();if(n%1!==0)throw ll();t=BigInt(n)}if(typeof e=="bigint")i=e;else{if(isNaN(e))throw li();if(e%1!==0)throw ll();i=BigInt(e)}r=t*i}else if(typeof n=="object"){if("d"in n&&"n"in n)t=BigInt(n.n),i=BigInt(n.d),"s"in n&&(t*=BigInt(n.s));else if(0 in n)t=BigInt(n[0]),1 in n&&(i=BigInt(n[1]));else if(typeof n=="bigint")t=n;else throw li();r=t*i}else if(typeof n=="number"){if(isNaN(n))throw li();if(n<0&&(r=-qe,n=-n),n%1===0)t=BigInt(n);else if(n>0){let s=1,a=0,o=1,u=1,c=1,l=1e7;for(n>=1&&(s=10**Math.floor(1+Math.log10(n)),n/=s);o<=l&&c<=l;){let f=(a+u)/(o+c);if(n===f){o+c<=l?(t=a+u,i=o+c):c>o?(t=u,i=c):(t=a,i=o);break}else n>f?(a+=u,o+=c):(u+=a,c+=o),o>l?(t=u,i=c):(t=a,i=o)}t=BigInt(t)*BigInt(s),i=BigInt(i)}}else if(typeof n=="string"){let s=0,a=Pe,o=Pe,u=Pe,c=qe,l=qe,f=n.replace(/_/g,"").match(/\d+|./g);if(f===null)throw li();if(f[s]==="-"?(r=-qe,s++):f[s]==="+"&&s++,f.length===s+1?o=$n(f[s++],r):f[s+1]==="."||f[s]==="."?(f[s]!=="."&&(a=$n(f[s++],r)),s++,(s+1===f.length||f[s+1]==="("&&f[s+3]===")"||f[s+1]==="'"&&f[s+3]==="'")&&(o=$n(f[s],r),c=Jt**BigInt(f[s].length),s++),(f[s]==="("&&f[s+2]===")"||f[s]==="'"&&f[s+2]==="'")&&(u=$n(f[s+1],r),l=Jt**BigInt(f[s+1].length)-qe,s+=3)):f[s+1]==="/"||f[s+1]===":"?(o=$n(f[s],r),c=$n(f[s+2],qe),s+=3):f[s+3]==="/"&&f[s+1]===" "&&(a=$n(f[s],r),o=$n(f[s+2],r),c=$n(f[s+4],qe),s+=5),f.length<=s)i=c*l,r=t=u+i*a+l*o;else throw li()}else if(typeof n=="bigint")t=n,r=n,i=qe;else throw li();if(i===Pe)throw Iu();_e.s=r<Pe?-qe:qe,_e.n=t<Pe?-t:t,_e.d=i<Pe?-i:i};function QE(n,e,t){let i=qe;for(;e>Pe;n=n*n%t,e>>=qe)e&qe&&(i=i*n%t);return i}function ex(n,e){for(;e%Kr===Pe;e/=Kr);for(;e%du===Pe;e/=du);if(e===qe)return Pe;let t=Jt%e,i=1;for(;t!==qe;i++)if(t=t*Jt%e,i>JE)return Pe;return BigInt(i)}function tx(n,e,t){let i=qe,r=QE(Jt,t,e);for(let s=0;s<300;s++){if(i===r)return BigInt(s);i=i*Jt%e,r=r*Jt%e}return 0}function Ui(n,e){if(!n)return e;if(!e)return n;for(;;){if(n%=e,!n)return e;if(e%=n,!e)return n}}function mn(n,e){if(zt(n,e),this instanceof mn)n=Ui(_e.d,_e.n),this.s=_e.s,this.n=_e.n/n,this.d=_e.d/n;else return Et(_e.s*_e.n,_e.d)}var Iu=function(){return new Error("Division by Zero")},li=function(){return new Error("Invalid argument")},ll=function(){return new Error("Parameters must be integer")};mn.prototype={s:qe,n:Pe,d:qe,abs:function(){return Et(this.n,this.d)},neg:function(){return Et(-this.s*this.n,this.d)},add:function(n,e){return zt(n,e),Et(this.s*this.n*_e.d+_e.s*this.d*_e.n,this.d*_e.d)},sub:function(n,e){return zt(n,e),Et(this.s*this.n*_e.d-_e.s*this.d*_e.n,this.d*_e.d)},mul:function(n,e){return zt(n,e),Et(this.s*_e.s*this.n*_e.n,this.d*_e.d)},div:function(n,e){return zt(n,e),Et(this.s*_e.s*this.n*_e.d,this.d*_e.n)},clone:function(){return Et(this.s*this.n,this.d)},mod:function(n,e){if(n===void 0)return Et(this.s*this.n%this.d,qe);if(zt(n,e),Pe===_e.n*this.d)throw Iu();return Et(this.s*(_e.d*this.n)%(_e.n*this.d),_e.d*this.d)},gcd:function(n,e){return zt(n,e),Et(Ui(_e.n,this.n)*Ui(_e.d,this.d),_e.d*this.d)},lcm:function(n,e){return zt(n,e),_e.n===Pe&&this.n===Pe?Et(Pe,qe):Et(_e.n*this.n,Ui(_e.n,this.n)*Ui(_e.d,this.d))},inverse:function(){return Et(this.s*this.d,this.n)},pow:function(n,e){if(zt(n,e),_e.d===qe)return _e.s<Pe?Et((this.s*this.d)**_e.n,this.n**_e.n):Et((this.s*this.n)**_e.n,this.d**_e.n);if(this.s<Pe)return null;let t=cr(this.n),i=cr(this.d),r=qe,s=qe;for(let a in t)if(a!=="1"){if(a==="0"){r=Pe;break}if(t[a]*=_e.n,t[a]%_e.d===Pe)t[a]/=_e.d;else return null;r*=BigInt(a)**t[a]}for(let a in i)if(a!=="1"){if(i[a]*=_e.n,i[a]%_e.d===Pe)i[a]/=_e.d;else return null;s*=BigInt(a)**i[a]}return _e.s<Pe?Et(s,r):Et(r,s)},log:function(n,e){if(zt(n,e),this.s<=Pe||_e.s<=Pe)return null;const t={},i=cr(_e.n),r=cr(_e.d),s=cr(this.n),a=cr(this.d);for(const c in r)i[c]=(i[c]||Pe)-r[c];for(const c in a)s[c]=(s[c]||Pe)-a[c];for(const c in i)c!=="1"&&(t[c]=!0);for(const c in s)c!=="1"&&(t[c]=!0);let o=null,u=null;for(const c in t){const l=i[c]||Pe,f=s[c]||Pe;if(l===Pe){if(f!==Pe)return null;continue}let d=f,m=l;const _=Ui(d,m);if(d/=_,m/=_,o===null&&u===null)o=d,u=m;else if(d*u!==o*m)return null}return o!==null&&u!==null?Et(o,u):null},equals:function(n,e){return zt(n,e),this.s*this.n*_e.d===_e.s*_e.n*this.d},lt:function(n,e){return zt(n,e),this.s*this.n*_e.d<_e.s*_e.n*this.d},lte:function(n,e){return zt(n,e),this.s*this.n*_e.d<=_e.s*_e.n*this.d},gt:function(n,e){return zt(n,e),this.s*this.n*_e.d>_e.s*_e.n*this.d},gte:function(n,e){return zt(n,e),this.s*this.n*_e.d>=_e.s*_e.n*this.d},compare:function(n,e){zt(n,e);let t=this.s*this.n*_e.d-_e.s*_e.n*this.d;return(Pe<t)-(t<Pe)},ceil:function(n){return n=Jt**BigInt(n||0),Et(An(this.s*n*this.n/this.d)+(n*this.n%this.d>Pe&&this.s>=Pe?qe:Pe),n)},floor:function(n){return n=Jt**BigInt(n||0),Et(An(this.s*n*this.n/this.d)-(n*this.n%this.d>Pe&&this.s<Pe?qe:Pe),n)},round:function(n){return n=Jt**BigInt(n||0),Et(An(this.s*n*this.n/this.d)+this.s*((this.s>=Pe?qe:Pe)+Kr*(n*this.n%this.d)>this.d?qe:Pe),n)},roundTo:function(n,e){zt(n,e);const t=this.n*_e.d,i=this.d*_e.n,r=t%i;let s=An(t/i);return r+r>=i&&s++,Et(this.s*s*_e.n,_e.d)},divisible:function(n,e){return zt(n,e),!(!(_e.n*this.d)||this.n*_e.d%(_e.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(n){let e=this.n,t=this.d;n=n||15;let i=ex(e,t),r=tx(e,t,i),s=this.s<Pe?"-":"";if(s+=An(e/t),e%=t,e*=Jt,e&&(s+="."),i){for(let a=r;a--;)s+=An(e/t),e%=t,e*=Jt;s+="(";for(let a=i;a--;)s+=An(e/t),e%=t,e*=Jt;s+=")"}else for(let a=n;e&&a--;)s+=An(e/t),e%=t,e*=Jt;return s},toFraction:function(n){let e=this.n,t=this.d,i=this.s<Pe?"-":"";if(t===qe)i+=e;else{let r=An(e/t);n&&r>Pe&&(i+=r,i+=" ",e%=t),i+=e,i+="/",i+=t}return i},toLatex:function(n){let e=this.n,t=this.d,i=this.s<Pe?"-":"";if(t===qe)i+=e;else{let r=An(e/t);n&&r>Pe&&(i+=r,e%=t),i+="\\frac{",i+=e,i+="}{",i+=t,i+="}"}return i},toContinued:function(){let n=this.n,e=this.d,t=[];do{t.push(An(n/e));let i=n%e;n=e,e=i}while(n!==qe);return t},simplify:function(n){const e=BigInt(1/(n||.001)|0),t=this.abs(),i=t.toContinued();for(let r=1;r<i.length;r++){let s=Et(i[r-1],qe);for(let o=r-2;o>=0;o--)s=s.inverse().add(i[o]);let a=s.sub(t);if(a.n*e<a.d)return s.mul(this.s)}return this}};var nx="Fraction",ix=[],rx=Ie(nx,ix,()=>(Object.defineProperty(mn,"name",{value:"Fraction"}),mn.prototype.constructor=mn,mn.prototype.type="Fraction",mn.prototype.isFraction=!0,mn.prototype.toJSON=function(){return{mathjs:"Fraction",n:String(this.s*this.n),d:String(this.d)}},mn.fromJSON=function(n){return new mn(n)},mn),{isClass:!0}),sx="Matrix",ax=[],ox=Ie(sx,ax,()=>{function n(){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator")}return n.prototype.type="Matrix",n.prototype.isMatrix=!0,n.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},n.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},n.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},n.prototype.subset=function(e,t,i){throw new Error("Cannot invoke subset on a Matrix interface")},n.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},n.prototype.set=function(e,t,i){throw new Error("Cannot invoke set on a Matrix interface")},n.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},n.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},n.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},n.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},n.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},n.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},n.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},n.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},n.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},n.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},n.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},n},{isClass:!0});function _o(n,e,t){var i=n.constructor,r=new i(2),s="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!At(t))throw new Error("size must be an integer");if(n.greaterThan(r.pow(t-1).sub(1))||n.lessThan(r.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!n.isInteger())throw new Error("Value must be an integer");n.lessThan(0)&&(n=n.add(r.pow(t))),s="i".concat(t)}switch(e){case 2:return"".concat(n.toBinary()).concat(s);case 8:return"".concat(n.toOctal()).concat(s);case 16:return"".concat(n.toHexadecimal()).concat(s);default:throw new Error("Base ".concat(e," not supported "))}}function ux(n,e){if(typeof e=="function")return e(n);if(!n.isFinite())return n.isNaN()?"NaN":n.gt(0)?"Infinity":"-Infinity";var{notation:t,precision:i,wordSize:r}=Rf(e);switch(t){case"fixed":return lx(n,i);case"exponential":return fl(n,i);case"engineering":return cx(n,i);case"bin":return _o(n,2,r);case"oct":return _o(n,8,r);case"hex":return _o(n,16,r);case"auto":{var s=hl(e==null?void 0:e.lowerExp,-3),a=hl(e==null?void 0:e.upperExp,5);if(n.isZero())return"0";var o,u=n.toSignificantDigits(i),c=u.e;return c>=s&&c<a?o=u.toFixed():o=fl(n,i),o.replace(/((\.\d*?)(0+))($|e)/,function(){var l=arguments[2],f=arguments[4];return l!=="."?l+f:f})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function cx(n,e){var t=n.e,i=t%3===0?t:t<0?t-3-t%3:t-t%3,r=n.mul(Math.pow(10,-i)),s=r.toPrecision(e);if(s.includes("e")){var a=n.constructor;s=new a(s).toFixed()}return s+"e"+(t>=0?"+":"")+i.toString()}function fl(n,e){return e!==void 0?n.toExponential(e-1):n.toExponential()}function lx(n,e){return n.toFixed(e)}function hl(n,e){return pt(n)?n:St(n)?n.toNumber():e}function Mt(n,e){var t=fx(n,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function fx(n,e){if(typeof n=="number")return ou(n,e);if(St(n))return ux(n,e);if(hx(n))return!e||e.fraction!=="decimal"?"".concat(n.s*n.n,"/").concat(n.d):n.toString();if(Array.isArray(n))return Xf(n,e);if(Nn(n))return dl(n);if(typeof n=="function")return n.syntax?String(n.syntax):"function";if(n&&typeof n=="object"){if(typeof n.format=="function")return n.format(e);if(n&&n.toString(e)!=={}.toString())return n.toString(e);var t=Object.keys(n).map(i=>dl(i)+": "+Mt(n[i],e));return"{"+t.join(", ")+"}"}return String(n)}function dl(n){for(var e=String(n),t="",i=0;i<e.length;){var r=e.charAt(i);t+=r in pl?pl[r]:r,i++}return'"'+t+'"'}var pl={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};function Xf(n,e){if(Array.isArray(n)){for(var t="[",i=n.length,r=0;r<i;r++)r!==0&&(t+=", "),t+=Xf(n[r],e);return t+="]",t}else return Mt(n,e)}function hx(n){return n&&typeof n=="object"&&typeof n.s=="bigint"&&typeof n.n=="bigint"&&typeof n.d=="bigint"||!1}function ct(n,e,t){if(!(this instanceof ct))throw new SyntaxError("Constructor must be called with the new operator");this.actual=n,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(n)?"["+n.join(", ")+"]":n)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}ct.prototype=new RangeError;ct.prototype.constructor=RangeError;ct.prototype.name="DimensionError";ct.prototype.isDimensionError=!0;function Mi(n,e,t){if(!(this instanceof Mi))throw new SyntaxError("Constructor must be called with the new operator");this.index=n,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}Mi.prototype=new RangeError;Mi.prototype.constructor=RangeError;Mi.prototype.name="IndexError";Mi.prototype.isIndexError=!0;function Gt(n){for(var e=[];Array.isArray(n);)e.push(n.length),n=n[0];return e}function qf(n,e,t){var i,r=n.length;if(r!==e[t])throw new ct(r,e[t]);if(t<e.length-1){var s=t+1;for(i=0;i<r;i++){var a=n[i];if(!Array.isArray(a))throw new ct(e.length-1,e.length,"<");qf(n[i],e,s)}}else for(i=0;i<r;i++)if(Array.isArray(n[i]))throw new ct(e.length+1,e.length,">")}function ml(n,e){var t=e.length===0;if(t){if(Array.isArray(n))throw new ct(n.length,0)}else qf(n,e,0)}function yt(n,e){if(n!==void 0){if(!pt(n)||!At(n))throw new TypeError("Index must be an integer (value: "+n+")");if(n<0||typeof e=="number"&&n>=e)throw new Mi(n,e)}}function ua(n,e,t){if(!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(r){if(!pt(r)||!At(r)||r<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Mt(e)+")")}),(pt(n)||St(n))&&(n=[n]);var i=t!==void 0?t:0;return pu(n,e,0,i),n}function pu(n,e,t,i){var r,s,a=n.length,o=e[t],u=Math.min(a,o);if(n.length=o,t<e.length-1){var c=t+1;for(r=0;r<u;r++)s=n[r],Array.isArray(s)||(s=[s],n[r]=s),pu(s,e,c,i);for(r=u;r<o;r++)s=[],n[r]=s,pu(s,e,c,i)}else{for(r=0;r<u;r++)for(;Array.isArray(n[r]);)n[r]=n[r][0];for(r=u;r<o;r++)n[r]=i}}function Uu(n,e){var t=mu(n),i=t.length;if(!Array.isArray(n)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new ct(0,i,"!=");e=Bu(e,i);var r=Yf(e);if(i!==r)throw new ct(r,i,"!=");try{return dx(t,e)}catch(s){throw s instanceof ct?new ct(r,i,"!="):s}}function Bu(n,e){var t=Yf(n),i=n.slice(),r=-1,s=n.indexOf(r),a=n.indexOf(r,s+1)>=0;if(a)throw new Error("More than one wildcard in sizes");var o=s>=0,u=e%t===0;if(o)if(u)i[s]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return i}function Yf(n){return n.reduce((e,t)=>e*t,1)}function dx(n,e){for(var t=n,i,r=e.length-1;r>0;r--){var s=e[r];i=[];for(var a=t.length/s,o=0;o<a;o++)i.push(t.slice(o*s,(o+1)*s));t=i}return t}function $f(n,e,t,i){var r=i||Gt(n);if(t)for(var s=0;s<t;s++)n=[n],r.unshift(1);for(n=Zf(n,e,0);r.length<e;)r.push(1);return n}function Zf(n,e,t){var i,r;if(Array.isArray(n)){var s=t+1;for(i=0,r=n.length;i<r;i++)n[i]=Zf(n[i],e,s)}else for(var a=t;a<e;a++)n=[n];return n}function mu(n){if(!Array.isArray(n))return n;var e=[];return n.forEach(function t(i){Array.isArray(i)?i.forEach(t):e.push(i)}),e}function Ou(n,e){for(var t,i=0,r=0;r<n.length;r++){var s=n[r],a=Array.isArray(s);if(r===0&&a&&(i=s.length),a&&s.length!==i)return;var o=a?Ou(s,e):e(s);if(t===void 0)t=o;else if(t!==o)return"mixed"}return t}function Kf(n,e,t,i){if(i<t){if(n.length!==e.length)throw new ct(n.length,e.length);for(var r=[],s=0;s<n.length;s++)r[s]=Kf(n[s],e[s],t,i+1);return r}else return n.concat(e)}function jf(){var n=Array.prototype.slice.call(arguments,0,-1),e=Array.prototype.slice.call(arguments,-1);if(n.length===1)return n[0];if(n.length>1)return n.slice(1).reduce(function(t,i){return Kf(t,i,e,0)},n[0]);throw new Error("Wrong number of arguments in function concat")}function zu(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var i=e.map(d=>d.length),r=Math.max(...i),s=new Array(r).fill(null),a=0;a<e.length;a++)for(var o=e[a],u=i[a],c=0;c<u;c++){var l=r-u+c;o[c]>s[l]&&(s[l]=o[c])}for(var f=0;f<e.length;f++)Jf(e[f],s);return s}function Jf(n,e){for(var t=e.length,i=n.length,r=0;r<i;r++){var s=t-i+r;if(n[r]<e[s]&&n[r]>1||n[r]>e[s])throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(n,") not possible to broadcast dimension ").concat(i," with size ").concat(n[r]," to size ").concat(e[s]))}}function zi(n,e){var t=Gt(n);if(Ei(t,e))return n;Jf(t,e);var i=zu(t,e),r=i.length,s=[...Array(r-t.length).fill(1),...t],a=mx(n);t.length<r&&(a=Uu(a,s),t=Gt(a));for(var o=0;o<r;o++)t[o]<i[o]&&(a=px(a,i[o],o),t=Gt(a));return a}function px(n,e,t){return jf(...Array(e).fill(n),t)}function Hu(n,e){if(!Array.isArray(n))throw new Error("Array expected");var t=Gt(n);if(e.length!==t.length)throw new ct(e.length,t.length);for(var i=0;i<e.length;i++)yt(e[i],t[i]);return e.reduce((r,s)=>r[s],n)}function Qf(n,e,t,i){return Array.isArray(n)?n.map(function(r,s){return Qf(r,e.concat(s),t,i)}):i(n,e,t)}function mx(n){return na([],n)}function jr(n,e,t){if(ra.isTypedFunction(n)){var i=(e.isMatrix?e.size():Gt(e)).map(()=>0),r=e.isMatrix?e.get(i):Hu(e,i),s=Object.keys(n.signatures).length===1,a=gx(n,r,i,e),o=s?Object.values(n.signatures)[0]:n;return a>=1&&a<=3?function(){for(var u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];return gl(o,c.slice(0,a),t,n.name)}:function(){for(var u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];return gl(o,c,t,n.name)}}return n}function gx(n,e,t,i){for(var r=[e,t,i],s=3;s>0;s--){var a=r.slice(0,s);if(ra.resolve(n,a)!==null)return s}}function gl(n,e,t,i){try{return n(...e)}catch(r){_x(r,e,t,i)}}function _x(n,e,t,i){var r;if(n instanceof TypeError&&((r=n.data)===null||r===void 0?void 0:r.category)==="wrongType"){var s=[];throw s.push("value: ".concat(Bn(e[0]))),e.length>=2&&s.push("index: ".concat(Bn(e[1]))),e.length>=3&&s.push("array: ".concat(Bn(e[2]))),new TypeError("Function ".concat(t," cannot apply callback arguments ")+"".concat(i,"(").concat(s.join(", "),") at index ").concat(JSON.stringify(e[1])))}else throw new TypeError("Function ".concat(t," cannot apply callback arguments ")+"to function ".concat(i,": ").concat(n.message))}var vx="DenseMatrix",Ex=["Matrix"],xx=Ie(vx,Ex,n=>{var{Matrix:e}=n;function t(l,f){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(f&&!Nn(f))throw new Error("Invalid datatype: "+f);if(Dt(l))l.type==="DenseMatrix"?(this._data=gt(l._data),this._size=gt(l._size),this._datatype=f||l._datatype):(this._data=l.toArray(),this._size=l.size(),this._datatype=f||l._datatype);else if(l&&Rt(l.data)&&Rt(l.size))this._data=l.data,this._size=l.size,ml(this._data,this._size),this._datatype=f||l.datatype;else if(Rt(l))this._data=c(l),this._size=Gt(this._data),ml(this._data,this._size),this._datatype=f;else{if(l)throw new TypeError("Unsupported type of data ("+Bn(l)+")");this._data=[],this._size=[0],this._datatype=f}}t.prototype=new e,t.prototype.createDenseMatrix=function(l,f){return new t(l,f)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return Ou(this._data,Bn)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(l,f){return new t(l,f)},t.prototype.subset=function(l,f,d){switch(arguments.length){case 1:return i(this,l);case 2:case 3:return s(this,l,f,d);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(l){return Hu(this._data,l)},t.prototype.set=function(l,f,d){if(!Rt(l))throw new TypeError("Array expected");if(l.length<this._size.length)throw new ct(l.length,this._size.length,"<");var m,_,h,g=l.map(function(A){return A+1});u(this,g,d);var p=this._data;for(m=0,_=l.length-1;m<_;m++)h=l[m],yt(h,p.length),p=p[h];return h=l[l.length-1],yt(h,p.length),p[h]=f,this};function i(l,f){if(!Pu(f))throw new TypeError("Invalid index");var d=f.isScalar();if(d)return l.get(f.min());var m=f.size();if(m.length!==l._size.length)throw new ct(m.length,l._size.length);for(var _=f.min(),h=f.max(),g=0,p=l._size.length;g<p;g++)yt(_[g],l._size[g]),yt(h[g],l._size[g]);return new t(r(l._data,f,m.length,0),l._datatype)}function r(l,f,d,m){var _=m===d-1,h=f.dimension(m);return _?h.map(function(g){return yt(g,l.length),l[g]}).valueOf():h.map(function(g){yt(g,l.length);var p=l[g];return r(p,f,d,m+1)}).valueOf()}function s(l,f,d,m){if(!f||f.isIndex!==!0)throw new TypeError("Invalid index");var _=f.size(),h=f.isScalar(),g;if(Dt(d)?(g=d.size(),d=d.valueOf()):g=Gt(d),h){if(g.length!==0)throw new TypeError("Scalar expected");l.set(f.min(),d,m)}else{if(!Ei(g,_))try{g.length===0?d=zi([d],_):d=zi(d,_),g=Gt(d)}catch{}if(_.length<l._size.length)throw new ct(_.length,l._size.length,"<");if(g.length<_.length){for(var p=0,A=0;_[p]===1&&g[p]===1;)p++;for(;_[p]===1;)A++,p++;d=$f(d,_.length,A,g)}if(!Ei(_,g))throw new ct(_,g,">");var v=f.max().map(function(x){return x+1});u(l,v,m);var E=_.length,y=0;a(l._data,f,d,E,y)}return l}function a(l,f,d,m,_){var h=_===m-1,g=f.dimension(_);h?g.forEach(function(p,A){yt(p),l[p]=d[A[0]]}):g.forEach(function(p,A){yt(p),a(l[p],f,d[A[0]],m,_+1)})}t.prototype.resize=function(l,f,d){if(!Yr(l))throw new TypeError("Array or Matrix expected");var m=l.valueOf().map(h=>Array.isArray(h)&&h.length===1?h[0]:h),_=d?this.clone():this;return o(_,m,f)};function o(l,f,d){if(f.length===0){for(var m=l._data;Rt(m);)m=m[0];return m}return l._size=f.slice(0),l._data=ua(l._data,l._size,d),l}t.prototype.reshape=function(l,f){var d=f?this.clone():this;d._data=Uu(d._data,l);var m=d._size.reduce((_,h)=>_*h);return d._size=Bu(l,m),d};function u(l,f,d){for(var m=l._size.slice(0),_=!1;m.length<f.length;)m.push(0),_=!0;for(var h=0,g=f.length;h<g;h++)f[h]>m[h]&&(m[h]=f[h],_=!0);_&&o(l,m,d)}t.prototype.clone=function(){var l=new t({data:gt(this._data),size:gt(this._size),datatype:this._datatype});return l},t.prototype.size=function(){return this._size.slice(0)},t.prototype._forEach=function(l){var f=this,d=f.size();if(d.length===1){for(var m=0;m<d[0];m++)l(f._data,m,[m]);return}var _=Array(d.length).fill(0),h=Array(d.length-1),g=h.length-1;h[0]=f._data[0];for(var p=0;p<g;p++)h[p+1]=h[p][0];for(_[g]=-1;;){var A=void 0;for(A=g;A>=0;A--){if(_[A]++,_[A]===d[A]){_[A]=0;continue}h[A]=A===0?f._data[_[A]]:h[A-1][_[A]];for(var v=A;v<g;v++)h[v+1]=h[v][0];for(var E=0;E<d[h.length];E++)_[h.length]=E,l(h[g],E,_.slice(0));break}if(A===-1)break}},t.prototype.map=function(l){var f=this,d=new t(f),m=jr(l,f._data,"map");return d._forEach(function(_,h,g){_[h]=m(_[h],g,f)}),d},t.prototype.forEach=function(l){var f=this,d=jr(l,f._data,"map");f._forEach(function(m,_,h){d(m[_],h,f)})},t.prototype[Symbol.iterator]=function*(){var l=function*(d,m){if(Rt(d))for(var _=0;_<d.length;_++)yield*l(d[_],m.concat(_));else yield{value:d,index:m}};yield*l(this._data,[])},t.prototype.rows=function(){var l=[],f=this.size();if(f.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var d=this._data;for(var m of d)l.push(new t([m],this._datatype));return l},t.prototype.columns=function(){var l=this,f=[],d=this.size();if(d.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var m=this._data,_=function(p){var A=m.map(v=>[v[p]]);f.push(new t(A,l._datatype))},h=0;h<d[1];h++)_(h);return f},t.prototype.toArray=function(){return gt(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(l){return Mt(this._data,l)},t.prototype.toString=function(){return Mt(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(l){if(l){if(St(l)&&(l=l.toNumber()),!pt(l)||!At(l))throw new TypeError("The parameter k must be an integer number")}else l=0;for(var f=l>0?l:0,d=l<0?-l:0,m=this._size[0],_=this._size[1],h=Math.min(m-d,_-f),g=[],p=0;p<h;p++)g[p]=this._data[p+d][p+f];return new t({data:g,size:[h],datatype:this._datatype})},t.diagonal=function(l,f,d,m){if(!Rt(l))throw new TypeError("Array expected, size parameter");if(l.length!==2)throw new Error("Only two dimensions matrix are supported");if(l=l.map(function(w){if(St(w)&&(w=w.toNumber()),!pt(w)||!At(w)||w<1)throw new Error("Size values must be positive integers");return w}),d){if(St(d)&&(d=d.toNumber()),!pt(d)||!At(d))throw new TypeError("The parameter k must be an integer number")}else d=0;var _=d>0?d:0,h=d<0?-d:0,g=l[0],p=l[1],A=Math.min(g-h,p-_),v;if(Rt(f)){if(f.length!==A)throw new Error("Invalid value array length");v=function(T){return f[T]}}else if(Dt(f)){var E=f.size();if(E.length!==1||E[0]!==A)throw new Error("Invalid matrix length");v=function(T){return f.get([T])}}else v=function(){return f};m||(m=St(v(0))?v(0).mul(0):0);var y=[];if(l.length>0){y=ua(y,l,m);for(var x=0;x<A;x++)y[x+h][x+_]=v(x)}return new t({data:y,size:[g,p]})},t.fromJSON=function(l){return new t(l)},t.prototype.swapRows=function(l,f){if(!pt(l)||!At(l)||!pt(f)||!At(f))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return yt(l,this._size[0]),yt(f,this._size[0]),t._swapRows(l,f,this._data),this},t._swapRows=function(l,f,d){var m=d[l];d[l]=d[f],d[f]=m};function c(l){return Dt(l)?c(l.valueOf()):Rt(l)?l.map(c):l}return t},{isClass:!0});function yx(n){var e=n.length,t=n[0].length,i,r,s=[];for(r=0;r<t;r++){var a=[];for(i=0;i<e;i++)a.push(n[i][r]);s.push(a)}return s}function eh(n){for(var e=0;e<n.length;e++)if(Yr(n[e]))return!0;return!1}function Vu(n,e){Dt(n)&&(n=n.valueOf());for(var t=0,i=n.length;t<i;t++){var r=n[t];Array.isArray(r)?Vu(r,e):e(r)}}function ii(n,e,t){return n&&typeof n.map=="function"?n.map(function(i){return ii(i,e)}):e(n)}function th(n,e,t){var i=Array.isArray(n)?Gt(n):n.size();if(e<0||e>=i.length)throw new Mi(e,i.length);return Dt(n)?n.create(ca(n.valueOf(),e,t),n.datatype()):ca(n,e,t)}function ca(n,e,t){var i,r,s,a;if(e<=0)if(Array.isArray(n[0])){for(a=yx(n),r=[],i=0;i<a.length;i++)r[i]=ca(a[i],e-1,t);return r}else{for(s=n[0],i=1;i<n.length;i++)s=t(s,n[i]);return s}else{for(r=[],i=0;i<n.length;i++)r[i]=ca(n[i],e-1,t);return r}}var _l="isInteger",Mx=["typed"],Dx=Ie(_l,Mx,n=>{var{typed:e}=n;return e(_l,{number:At,BigNumber:function(i){return i.isInt()},bigint:function(i){return!0},Fraction:function(i){return i.d===1n},"Array | Matrix":e.referToSelf(t=>i=>ii(i,t))})}),nh="number",Gu="number, number";function ih(n){return Math.abs(n)}ih.signature=nh;function rh(n,e){return n+e}rh.signature=Gu;function sh(n,e){return n-e}sh.signature=Gu;function ah(n,e){return n*e}ah.signature=Gu;function oh(n){return-n}oh.signature=nh;function ku(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-9,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(t<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return n.isNaN()||e.isNaN()?!1:!n.isFinite()||!e.isFinite()?n.eq(e):n.eq(e)?!0:n.minus(e).abs().lte(n.constructor.max(n.constructor.max(n.abs(),e.abs()).mul(t),i))}var vl="isZero",Sx=["typed","equalScalar"],Ax=Ie(vl,Sx,n=>{var{typed:e,equalScalar:t}=n;return e(vl,{"number | BigNumber | Complex | Fraction":i=>t(i,0),bigint:i=>i===0n,Unit:e.referToSelf(i=>r=>e.find(i,r.valueType())(r.value)),"Array | Matrix":e.referToSelf(i=>r=>ii(r,i))})});function wx(n,e,t,i){return wr(n.re,e.re,t,i)&&wr(n.im,e.im,t,i)}var Wu=Ie("compareUnits",["typed"],n=>{var{typed:e}=n;return{"Unit, Unit":e.referToSelf(t=>(i,r)=>{if(!i.equalBase(r))throw new Error("Cannot compare units with different base");return e.find(t,[i.valueType(),r.valueType()])(i.value,r.value)})}}),la="equalScalar",bx=["typed","config"],Tx=Ie(la,bx,n=>{var{typed:e,config:t}=n,i=Wu({typed:e});return e(la,{"boolean, boolean":function(s,a){return s===a},"number, number":function(s,a){return wr(s,a,t.relTol,t.absTol)},"BigNumber, BigNumber":function(s,a){return s.eq(a)||ku(s,a,t.relTol,t.absTol)},"bigint, bigint":function(s,a){return s===a},"Fraction, Fraction":function(s,a){return s.equals(a)},"Complex, Complex":function(s,a){return wx(s,a,t.relTol,t.absTol)}},i)});Ie(la,["typed","config"],n=>{var{typed:e,config:t}=n;return e(la,{"number, number":function(r,s){return wr(r,s,t.relTol,t.absTol)}})});var Cx="SparseMatrix",Fx=["typed","equalScalar","Matrix"],Rx=Ie(Cx,Fx,n=>{var{typed:e,equalScalar:t,Matrix:i}=n;function r(h,g){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");if(g&&!Nn(g))throw new Error("Invalid datatype: "+g);if(Dt(h))s(this,h,g);else if(h&&Rt(h.index)&&Rt(h.ptr)&&Rt(h.size))this._values=h.values,this._index=h.index,this._ptr=h.ptr,this._size=h.size,this._datatype=g||h.datatype;else if(Rt(h))a(this,h,g);else{if(h)throw new TypeError("Unsupported type of data ("+Bn(h)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=g}}function s(h,g,p){g.type==="SparseMatrix"?(h._values=g._values?gt(g._values):void 0,h._index=gt(g._index),h._ptr=gt(g._ptr),h._size=gt(g._size),h._datatype=p||g._datatype):a(h,g.valueOf(),p||g._datatype)}function a(h,g,p){h._values=[],h._index=[],h._ptr=[],h._datatype=p;var A=g.length,v=0,E=t,y=0;if(Nn(p)&&(E=e.find(t,[p,p])||t,y=e.convert(0,p)),A>0){var x=0;do{h._ptr.push(h._index.length);for(var w=0;w<A;w++){var T=g[w];if(Rt(T)){if(x===0&&v<T.length&&(v=T.length),x<T.length){var D=T[x];E(D,y)||(h._values.push(D),h._index.push(w))}}else x===0&&v<1&&(v=1),E(T,y)||(h._values.push(T),h._index.push(w))}x++}while(x<v)}h._ptr.push(h._index.length),h._size=[A,v]}r.prototype=new i,r.prototype.createSparseMatrix=function(h,g){return new r(h,g)},Object.defineProperty(r,"name",{value:"SparseMatrix"}),r.prototype.constructor=r,r.prototype.type="SparseMatrix",r.prototype.isSparseMatrix=!0,r.prototype.getDataType=function(){return Ou(this._values,Bn)},r.prototype.storage=function(){return"sparse"},r.prototype.datatype=function(){return this._datatype},r.prototype.create=function(h,g){return new r(h,g)},r.prototype.density=function(){var h=this._size[0],g=this._size[1];return h!==0&&g!==0?this._index.length/(h*g):0},r.prototype.subset=function(h,g,p){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return o(this,h);case 2:case 3:return u(this,h,g,p);default:throw new SyntaxError("Wrong number of arguments")}};function o(h,g){if(!Pu(g))throw new TypeError("Invalid index");var p=g.isScalar();if(p)return h.get(g.min());var A=g.size();if(A.length!==h._size.length)throw new ct(A.length,h._size.length);var v,E,y,x,w=g.min(),T=g.max();for(v=0,E=h._size.length;v<E;v++)yt(w[v],h._size[v]),yt(T[v],h._size[v]);var D=h._values,M=h._index,F=h._ptr,B=g.dimension(0),O=g.dimension(1),V=[],X=[];B.forEach(function(ne,se){X[ne]=se[0],V[ne]=!0});var U=D?[]:void 0,j=[],G=[];return O.forEach(function(ne){for(G.push(j.length),y=F[ne],x=F[ne+1];y<x;y++)v=M[y],V[v]===!0&&(j.push(X[v]),U&&U.push(D[y]))}),G.push(j.length),new r({values:U,index:j,ptr:G,size:A,datatype:h._datatype})}function u(h,g,p,A){if(!g||g.isIndex!==!0)throw new TypeError("Invalid index");var v=g.size(),E=g.isScalar(),y;if(Dt(p)?(y=p.size(),p=p.toArray()):y=Gt(p),E){if(y.length!==0)throw new TypeError("Scalar expected");h.set(g.min(),p,A)}else{if(v.length!==1&&v.length!==2)throw new ct(v.length,h._size.length,"<");if(y.length<v.length){for(var x=0,w=0;v[x]===1&&y[x]===1;)x++;for(;v[x]===1;)w++,x++;p=$f(p,v.length,w,y)}if(!Ei(v,y))throw new ct(v,y,">");if(v.length===1){var T=g.dimension(0);T.forEach(function(F,B){yt(F),h.set([F,0],p[B[0]],A)})}else{var D=g.dimension(0),M=g.dimension(1);D.forEach(function(F,B){yt(F),M.forEach(function(O,V){yt(O),h.set([F,O],p[B[0]][V[0]],A)})})}}return h}r.prototype.get=function(h){if(!Rt(h))throw new TypeError("Array expected");if(h.length!==this._size.length)throw new ct(h.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var g=h[0],p=h[1];yt(g,this._size[0]),yt(p,this._size[1]);var A=c(g,this._ptr[p],this._ptr[p+1],this._index);return A<this._ptr[p+1]&&this._index[A]===g?this._values[A]:0},r.prototype.set=function(h,g,p){if(!Rt(h))throw new TypeError("Array expected");if(h.length!==this._size.length)throw new ct(h.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var A=h[0],v=h[1],E=this._size[0],y=this._size[1],x=t,w=0;Nn(this._datatype)&&(x=e.find(t,[this._datatype,this._datatype])||t,w=e.convert(0,this._datatype)),(A>E-1||v>y-1)&&(d(this,Math.max(A+1,E),Math.max(v+1,y),p),E=this._size[0],y=this._size[1]),yt(A,E),yt(v,y);var T=c(A,this._ptr[v],this._ptr[v+1],this._index);return T<this._ptr[v+1]&&this._index[T]===A?x(g,w)?l(T,v,this._values,this._index,this._ptr):this._values[T]=g:x(g,w)||f(T,A,v,g,this._values,this._index,this._ptr),this};function c(h,g,p,A){if(p-g===0)return p;for(var v=g;v<p;v++)if(A[v]===h)return v;return g}function l(h,g,p,A,v){p.splice(h,1),A.splice(h,1);for(var E=g+1;E<v.length;E++)v[E]--}function f(h,g,p,A,v,E,y){v.splice(h,0,A),E.splice(h,0,g);for(var x=p+1;x<y.length;x++)y[x]++}r.prototype.resize=function(h,g,p){if(!Yr(h))throw new TypeError("Array or Matrix expected");var A=h.valueOf().map(E=>Array.isArray(E)&&E.length===1?E[0]:E);if(A.length!==2)throw new Error("Only two dimensions matrix are supported");A.forEach(function(E){if(!pt(E)||!At(E)||E<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Mt(A)+")")});var v=p?this.clone():this;return d(v,A[0],A[1],g)};function d(h,g,p,A){var v=A||0,E=t,y=0;Nn(h._datatype)&&(E=e.find(t,[h._datatype,h._datatype])||t,y=e.convert(0,h._datatype),v=e.convert(v,h._datatype));var x=!E(v,y),w=h._size[0],T=h._size[1],D,M,F;if(p>T){for(M=T;M<p;M++)if(h._ptr[M]=h._values.length,x)for(D=0;D<w;D++)h._values.push(v),h._index.push(D);h._ptr[p]=h._values.length}else p<T&&(h._ptr.splice(p+1,T-p),h._values.splice(h._ptr[p],h._values.length),h._index.splice(h._ptr[p],h._index.length));if(T=p,g>w){if(x){var B=0;for(M=0;M<T;M++){h._ptr[M]=h._ptr[M]+B,F=h._ptr[M+1]+B;var O=0;for(D=w;D<g;D++,O++)h._values.splice(F+O,0,v),h._index.splice(F+O,0,D),B++}h._ptr[T]=h._values.length}}else if(g<w){var V=0;for(M=0;M<T;M++){h._ptr[M]=h._ptr[M]-V;var X=h._ptr[M],U=h._ptr[M+1]-V;for(F=X;F<U;F++)D=h._index[F],D>g-1&&(h._values.splice(F,1),h._index.splice(F,1),V++)}h._ptr[M]=h._values.length}return h._size[0]=g,h._size[1]=p,h}r.prototype.reshape=function(h,g){if(!Rt(h))throw new TypeError("Array expected");if(h.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");h.forEach(function(ne){if(!pt(ne)||!At(ne)||ne<=-2||ne===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+Mt(h)+")")});var p=this._size[0]*this._size[1];h=Bu(h,p);var A=h[0]*h[1];if(p!==A)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var v=g?this.clone():this;if(this._size[0]===h[0]&&this._size[1]===h[1])return v;for(var E=[],y=0;y<v._ptr.length;y++)for(var x=0;x<v._ptr[y+1]-v._ptr[y];x++)E.push(y);for(var w=v._values.slice(),T=v._index.slice(),D=0;D<v._index.length;D++){var M=T[D],F=E[D],B=M*v._size[1]+F;E[D]=B%h[1],T[D]=Math.floor(B/h[1])}v._values.length=0,v._index.length=0,v._ptr.length=h[1]+1,v._size=h.slice();for(var O=0;O<v._ptr.length;O++)v._ptr[O]=0;for(var V=0;V<w.length;V++){var X=T[V],U=E[V],j=w[V],G=c(X,v._ptr[U],v._ptr[U+1],v._index);f(G,X,U,j,v._values,v._index,v._ptr)}return v},r.prototype.clone=function(){var h=new r({values:this._values?gt(this._values):void 0,index:gt(this._index),ptr:gt(this._ptr),size:gt(this._size),datatype:this._datatype});return h},r.prototype.size=function(){return this._size.slice(0)},r.prototype.map=function(h,g){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var p=this,A=this._size[0],v=this._size[1],E=jr(h,p,"map"),y=function(w,T,D){return E(w,[T,D],p)};return m(this,0,A-1,0,v-1,y,g)};function m(h,g,p,A,v,E,y){var x=[],w=[],T=[],D=t,M=0;Nn(h._datatype)&&(D=e.find(t,[h._datatype,h._datatype])||t,M=e.convert(0,h._datatype));for(var F=function(Le,ee,ue){var de=E(Le,ee,ue);D(de,M)||(x.push(de),w.push(ee))},B=A;B<=v;B++){T.push(x.length);var O=h._ptr[B],V=h._ptr[B+1];if(y)for(var X=O;X<V;X++){var U=h._index[X];U>=g&&U<=p&&F(h._values[X],U-g,B-A)}else{for(var j={},G=O;G<V;G++){var ne=h._index[G];j[ne]=h._values[G]}for(var se=g;se<=p;se++){var he=se in j?j[se]:0;F(he,se-g,B-A)}}}return T.push(x.length),new r({values:x,index:w,ptr:T,size:[p-g+1,v-A+1]})}r.prototype.forEach=function(h,g){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var p=this,A=this._size[0],v=this._size[1],E=jr(h,p,"forEach"),y=0;y<v;y++){var x=this._ptr[y],w=this._ptr[y+1];if(g)for(var T=x;T<w;T++){var D=this._index[T];E(this._values[T],[D,y],p)}else{for(var M={},F=x;F<w;F++){var B=this._index[F];M[B]=this._values[F]}for(var O=0;O<A;O++){var V=O in M?M[O]:0;E(V,[O,y],p)}}}},r.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var h=this._size[1],g=0;g<h;g++)for(var p=this._ptr[g],A=this._ptr[g+1],v=p;v<A;v++){var E=this._index[v];yield{value:this._values[v],index:[E,g]}}},r.prototype.toArray=function(){return _(this._values,this._index,this._ptr,this._size,!0)},r.prototype.valueOf=function(){return _(this._values,this._index,this._ptr,this._size,!1)};function _(h,g,p,A,v){var E=A[0],y=A[1],x=[],w,T;for(w=0;w<E;w++)for(x[w]=[],T=0;T<y;T++)x[w][T]=0;for(T=0;T<y;T++)for(var D=p[T],M=p[T+1],F=D;F<M;F++)w=g[F],x[w][T]=h?v?gt(h[F]):h[F]:1;return x}return r.prototype.format=function(h){for(var g=this._size[0],p=this._size[1],A=this.density(),v="Sparse Matrix ["+Mt(g,h)+" x "+Mt(p,h)+"] density: "+Mt(A,h)+`
`,E=0;E<p;E++)for(var y=this._ptr[E],x=this._ptr[E+1],w=y;w<x;w++){var T=this._index[w];v+=`
    (`+Mt(T,h)+", "+Mt(E,h)+") ==> "+(this._values?Mt(this._values[w],h):"X")}return v},r.prototype.toString=function(){return Mt(this.toArray())},r.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},r.prototype.diagonal=function(h){if(h){if(St(h)&&(h=h.toNumber()),!pt(h)||!At(h))throw new TypeError("The parameter k must be an integer number")}else h=0;var g=h>0?h:0,p=h<0?-h:0,A=this._size[0],v=this._size[1],E=Math.min(A-p,v-g),y=[],x=[],w=[];w[0]=0;for(var T=g;T<v&&y.length<E;T++)for(var D=this._ptr[T],M=this._ptr[T+1],F=D;F<M;F++){var B=this._index[F];if(B===T-g+p){y.push(this._values[F]),x[y.length-1]=B-p;break}}return w.push(y.length),new r({values:y,index:x,ptr:w,size:[E,1]})},r.fromJSON=function(h){return new r(h)},r.diagonal=function(h,g,p,A,v){if(!Rt(h))throw new TypeError("Array expected, size parameter");if(h.length!==2)throw new Error("Only two dimensions matrix are supported");if(h=h.map(function(ne){if(St(ne)&&(ne=ne.toNumber()),!pt(ne)||!At(ne)||ne<1)throw new Error("Size values must be positive integers");return ne}),p){if(St(p)&&(p=p.toNumber()),!pt(p)||!At(p))throw new TypeError("The parameter k must be an integer number")}else p=0;var E=t,y=0;Nn(v)&&(E=e.find(t,[v,v])||t,y=e.convert(0,v));var x=p>0?p:0,w=p<0?-p:0,T=h[0],D=h[1],M=Math.min(T-w,D-x),F;if(Rt(g)){if(g.length!==M)throw new Error("Invalid value array length");F=function(se){return g[se]}}else if(Dt(g)){var B=g.size();if(B.length!==1||B[0]!==M)throw new Error("Invalid matrix length");F=function(se){return g.get([se])}}else F=function(){return g};for(var O=[],V=[],X=[],U=0;U<D;U++){X.push(O.length);var j=U-x;if(j>=0&&j<M){var G=F(j);E(G,y)||(V.push(j+w),O.push(G))}}return X.push(O.length),new r({values:O,index:V,ptr:X,size:[T,D]})},r.prototype.swapRows=function(h,g){if(!pt(h)||!At(h)||!pt(g)||!At(g))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return yt(h,this._size[0]),yt(g,this._size[0]),r._swapRows(h,g,this._size[1],this._values,this._index,this._ptr),this},r._forEachRow=function(h,g,p,A,v){for(var E=A[h],y=A[h+1],x=E;x<y;x++)v(p[x],g[x])},r._swapRows=function(h,g,p,A,v,E){for(var y=0;y<p;y++){var x=E[y],w=E[y+1],T=c(h,x,w,v),D=c(g,x,w,v);if(T<w&&D<w&&v[T]===h&&v[D]===g){if(A){var M=A[T];A[T]=A[D],A[D]=M}continue}if(T<w&&v[T]===h&&(D>=w||v[D]!==g)){var F=A?A[T]:void 0;v.splice(D,0,g),A&&A.splice(D,0,F),v.splice(D<=T?T+1:T,1),A&&A.splice(D<=T?T+1:T,1);continue}if(D<w&&v[D]===g&&(T>=w||v[T]!==h)){var B=A?A[D]:void 0;v.splice(T,0,h),A&&A.splice(T,0,B),v.splice(T<=D?D+1:D,1),A&&A.splice(T<=D?D+1:D,1)}}},r},{isClass:!0}),Px="number",Nx=["typed"];function Lx(n){var e=n.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);if(e){var t={"0b":2,"0o":8,"0x":16}[e[1]],i=e[2],r=e[3];return{input:n,radix:t,integerPart:i,fractionalPart:r}}else return null}function Ix(n){for(var e=parseInt(n.integerPart,n.radix),t=0,i=0;i<n.fractionalPart.length;i++){var r=parseInt(n.fractionalPart[i],n.radix);t+=r/Math.pow(n.radix,i+1)}var s=e+t;if(isNaN(s))throw new SyntaxError('String "'+n.input+'" is not a valid number');return s}var Ux=Ie(Px,Nx,n=>{var{typed:e}=n,t=e("number",{"":function(){return 0},number:function(r){return r},string:function(r){if(r==="NaN")return NaN;var s=Lx(r);if(s)return Ix(s);var a=0,o=r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);o&&(a=Number(o[2]),r=o[1]);var u=Number(r);if(isNaN(u))throw new SyntaxError('String "'+r+'" is not a valid number');if(o){if(u>2**a-1)throw new SyntaxError('String "'.concat(r,'" is out of range'));u>=2**(a-1)&&(u=u-2**a)}return u},BigNumber:function(r){return r.toNumber()},bigint:function(r){return Number(r)},Fraction:function(r){return r.valueOf()},Unit:e.referToSelf(i=>r=>{var s=r.clone();return s.value=i(r.value),s}),null:function(r){return 0},"Unit, string | Unit":function(r,s){return r.toNumber(s)},"Array | Matrix":e.referToSelf(i=>r=>ii(r,i))});return t.fromJSON=function(i){return parseFloat(i.value)},t}),Bx="bignumber",Ox=["typed","BigNumber"],zx=Ie(Bx,Ox,n=>{var{typed:e,BigNumber:t}=n;return e("bignumber",{"":function(){return new t(0)},number:function(r){return new t(r+"")},string:function(r){var s=r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);if(s){var a=s[2],o=t(s[1]),u=new t(2).pow(Number(a));if(o.gt(u.sub(1)))throw new SyntaxError('String "'.concat(r,'" is out of range'));var c=new t(2).pow(Number(a)-1);return o.gte(c)?o.sub(u):o}return new t(r)},BigNumber:function(r){return r},bigint:function(r){return new t(r.toString())},Unit:e.referToSelf(i=>r=>{var s=r.clone();return s.value=i(r.value),s}),Fraction:function(r){return new t(String(r.n)).div(String(r.d)).times(String(r.s))},null:function(r){return new t(0)},"Array | Matrix":e.referToSelf(i=>r=>ii(r,i))})}),Hx="fraction",Vx=["typed","Fraction"],Gx=Ie(Hx,Vx,n=>{var{typed:e,Fraction:t}=n;return e("fraction",{number:function(r){if(!isFinite(r)||isNaN(r))throw new Error(r+" cannot be represented as a fraction");return new t(r)},string:function(r){return new t(r)},"number, number":function(r,s){return new t(r,s)},"bigint, bigint":function(r,s){return new t(r,s)},null:function(r){return new t(0)},BigNumber:function(r){return new t(r.toString())},bigint:function(r){return new t(r.toString())},Fraction:function(r){return r},Unit:e.referToSelf(i=>r=>{var s=r.clone();return s.value=i(r.value),s}),Object:function(r){return new t(r)},"Array | Matrix":e.referToSelf(i=>r=>ii(r,i))})}),El="matrix",kx=["typed","Matrix","DenseMatrix","SparseMatrix"],Wx=Ie(El,kx,n=>{var{typed:e,Matrix:t,DenseMatrix:i,SparseMatrix:r}=n;return e(El,{"":function(){return s([])},string:function(o){return s([],o)},"string, string":function(o,u){return s([],o,u)},Array:function(o){return s(o)},Matrix:function(o){return s(o,o.storage())},"Array | Matrix, string":s,"Array | Matrix, string, string":s});function s(a,o,u){if(o==="dense"||o==="default"||o===void 0)return new i(a,u);if(o==="sparse")return new r(a,u);throw new TypeError("Unknown matrix type "+JSON.stringify(o)+".")}}),xl="unaryMinus",Xx=["typed"],qx=Ie(xl,Xx,n=>{var{typed:e}=n;return e(xl,{number:oh,"Complex | BigNumber | Fraction":t=>t.neg(),bigint:t=>-t,Unit:e.referToSelf(t=>i=>{var r=i.clone();return r.value=e.find(t,r.valueType())(i.value),r}),"Array | Matrix":e.referToSelf(t=>i=>ii(i,t))})}),yl="abs",Yx=["typed"],$x=Ie(yl,Yx,n=>{var{typed:e}=n;return e(yl,{number:ih,"Complex | BigNumber | Fraction | Unit":t=>t.abs(),bigint:t=>t<0n?-t:t,"Array | Matrix":e.referToSelf(t=>i=>ii(i,t))})}),Ml="addScalar",Zx=["typed"],Kx=Ie(Ml,Zx,n=>{var{typed:e}=n;return e(Ml,{"number, number":rh,"Complex, Complex":function(i,r){return i.add(r)},"BigNumber, BigNumber":function(i,r){return i.plus(r)},"bigint, bigint":function(i,r){return i+r},"Fraction, Fraction":function(i,r){return i.add(r)},"Unit, Unit":e.referToSelf(t=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var s=i.clone();return s.value=e.find(t,[s.valueType(),r.valueType()])(s.value,r.value),s.fixPrefix=!1,s})})}),Dl="subtractScalar",jx=["typed"],Jx=Ie(Dl,jx,n=>{var{typed:e}=n;return e(Dl,{"number, number":sh,"Complex, Complex":function(i,r){return i.sub(r)},"BigNumber, BigNumber":function(i,r){return i.minus(r)},"bigint, bigint":function(i,r){return i-r},"Fraction, Fraction":function(i,r){return i.sub(r)},"Unit, Unit":e.referToSelf(t=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var s=i.clone();return s.value=e.find(t,[s.valueType(),r.valueType()])(s.value,r.value),s.fixPrefix=!1,s})})}),Qx="matAlgo11xS0s",ey=["typed","equalScalar"],uh=Ie(Qx,ey,n=>{var{typed:e,equalScalar:t}=n;return function(r,s,a,o){var u=r._values,c=r._index,l=r._ptr,f=r._size,d=r._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=f[0],_=f[1],h,g=t,p=0,A=a;typeof d=="string"&&(h=d,g=e.find(t,[h,h]),p=e.convert(0,h),s=e.convert(s,h),A=e.find(a,[h,h]));for(var v=[],E=[],y=[],x=0;x<_;x++){y[x]=E.length;for(var w=l[x],T=l[x+1],D=w;D<T;D++){var M=c[D],F=o?A(s,u[D]):A(u[D],s);g(F,p)||(E.push(M),v.push(F))}}return y[_]=E.length,r.createSparseMatrix({values:v,index:E,ptr:y,size:[m,_],datatype:h})}}),ty="matAlgo12xSfs",ny=["typed","DenseMatrix"],ch=Ie(ty,ny,n=>{var{typed:e,DenseMatrix:t}=n;return function(r,s,a,o){var u=r._values,c=r._index,l=r._ptr,f=r._size,d=r._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=f[0],_=f[1],h,g=a;typeof d=="string"&&(h=d,s=e.convert(s,h),g=e.find(a,[h,h]));for(var p=[],A=[],v=[],E=0;E<_;E++){for(var y=E+1,x=l[E],w=l[E+1],T=x;T<w;T++){var D=c[T];A[D]=u[T],v[D]=y}for(var M=0;M<m;M++)E===0&&(p[M]=[]),v[M]===y?p[M][E]=o?g(s,A[M]):g(A[M],s):p[M][E]=o?g(s,0):g(0,s)}return new t({data:p,size:[m,_],datatype:h})}}),iy="matAlgo14xDs",ry=["typed"],Xu=Ie(iy,ry,n=>{var{typed:e}=n;return function(r,s,a,o){var u=r._data,c=r._size,l=r._datatype,f,d=a;typeof l=="string"&&(f=l,s=e.convert(s,f),d=e.find(a,[f,f]));var m=c.length>0?t(d,0,c,c[0],u,s,o):[];return r.createDenseMatrix({data:m,size:gt(c),datatype:f})};function t(i,r,s,a,o,u,c){var l=[];if(r===s.length-1)for(var f=0;f<a;f++)l[f]=c?i(u,o[f]):i(o[f],u);else for(var d=0;d<a;d++)l[d]=t(i,r+1,s,s[r+1],o[d],u,c);return l}}),sy="matAlgo03xDSf",ay=["typed"],lh=Ie(sy,ay,n=>{var{typed:e}=n;return function(i,r,s,a){var o=i._data,u=i._size,c=i._datatype||i.getDataType(),l=r._values,f=r._index,d=r._ptr,m=r._size,_=r._datatype||r._data===void 0?r._datatype:r.getDataType();if(u.length!==m.length)throw new ct(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!l)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var h=u[0],g=u[1],p,A=0,v=s;typeof c=="string"&&c===_&&c!=="mixed"&&(p=c,A=e.convert(0,p),v=e.find(s,[p,p]));for(var E=[],y=0;y<h;y++)E[y]=[];for(var x=[],w=[],T=0;T<g;T++){for(var D=T+1,M=d[T],F=d[T+1],B=M;B<F;B++){var O=f[B];x[O]=a?v(l[B],o[O][T]):v(o[O][T],l[B]),w[O]=D}for(var V=0;V<h;V++)w[V]===D?E[V][T]=x[V]:E[V][T]=a?v(A,o[V][T]):v(o[V][T],A)}return i.createDenseMatrix({data:E,size:[h,g],datatype:c===i._datatype&&_===r._datatype?p:void 0})}}),oy="matAlgo13xDD",uy=["typed"],cy=Ie(oy,uy,n=>{var{typed:e}=n;return function(r,s,a){var o=r._data,u=r._size,c=r._datatype,l=s._data,f=s._size,d=s._datatype,m=[];if(u.length!==f.length)throw new ct(u.length,f.length);for(var _=0;_<u.length;_++){if(u[_]!==f[_])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+f+")");m[_]=u[_]}var h,g=a;typeof c=="string"&&c===d&&(h=c,g=e.find(a,[h,h]));var p=m.length>0?t(g,0,m,m[0],o,l):[];return r.createDenseMatrix({data:p,size:m,datatype:h})};function t(i,r,s,a,o,u){var c=[];if(r===s.length-1)for(var l=0;l<a;l++)c[l]=i(o[l],u[l]);else for(var f=0;f<a;f++)c[f]=t(i,r+1,s,s[r+1],o[f],u[f]);return c}});function Ot(n,e){if(Ei(n.size(),e.size()))return[n,e];var t=zu(n.size(),e.size());return[n,e].map(i=>ly(i,t))}function ly(n,e){return Ei(n.size(),e)?n:n.create(zi(n.valueOf(),e),n.datatype())}var fy="matrixAlgorithmSuite",hy=["typed","matrix"],qu=Ie(fy,hy,n=>{var{typed:e,matrix:t}=n,i=cy({typed:e}),r=Xu({typed:e});return function(a){var o=a.elop,u=a.SD||a.DS,c;o?(c={"DenseMatrix, DenseMatrix":(m,_)=>i(...Ot(m,_),o),"Array, Array":(m,_)=>i(...Ot(t(m),t(_)),o).valueOf(),"Array, DenseMatrix":(m,_)=>i(...Ot(t(m),_),o),"DenseMatrix, Array":(m,_)=>i(...Ot(m,t(_)),o)},a.SS&&(c["SparseMatrix, SparseMatrix"]=(m,_)=>a.SS(...Ot(m,_),o,!1)),a.DS&&(c["DenseMatrix, SparseMatrix"]=(m,_)=>a.DS(...Ot(m,_),o,!1),c["Array, SparseMatrix"]=(m,_)=>a.DS(...Ot(t(m),_),o,!1)),u&&(c["SparseMatrix, DenseMatrix"]=(m,_)=>u(...Ot(_,m),o,!0),c["SparseMatrix, Array"]=(m,_)=>u(...Ot(t(_),m),o,!0))):(c={"DenseMatrix, DenseMatrix":e.referToSelf(m=>(_,h)=>i(...Ot(_,h),m)),"Array, Array":e.referToSelf(m=>(_,h)=>i(...Ot(t(_),t(h)),m).valueOf()),"Array, DenseMatrix":e.referToSelf(m=>(_,h)=>i(...Ot(t(_),h),m)),"DenseMatrix, Array":e.referToSelf(m=>(_,h)=>i(...Ot(_,t(h)),m))},a.SS&&(c["SparseMatrix, SparseMatrix"]=e.referToSelf(m=>(_,h)=>a.SS(...Ot(_,h),m,!1))),a.DS&&(c["DenseMatrix, SparseMatrix"]=e.referToSelf(m=>(_,h)=>a.DS(...Ot(_,h),m,!1)),c["Array, SparseMatrix"]=e.referToSelf(m=>(_,h)=>a.DS(...Ot(t(_),h),m,!1))),u&&(c["SparseMatrix, DenseMatrix"]=e.referToSelf(m=>(_,h)=>u(...Ot(h,_),m,!0)),c["SparseMatrix, Array"]=e.referToSelf(m=>(_,h)=>u(...Ot(t(h),_),m,!0))));var l=a.scalar||"any",f=a.Ds||a.Ss;f&&(o?(c["DenseMatrix,"+l]=(m,_)=>r(m,_,o,!1),c[l+", DenseMatrix"]=(m,_)=>r(_,m,o,!0),c["Array,"+l]=(m,_)=>r(t(m),_,o,!1).valueOf(),c[l+", Array"]=(m,_)=>r(t(_),m,o,!0).valueOf()):(c["DenseMatrix,"+l]=e.referToSelf(m=>(_,h)=>r(_,h,m,!1)),c[l+", DenseMatrix"]=e.referToSelf(m=>(_,h)=>r(h,_,m,!0)),c["Array,"+l]=e.referToSelf(m=>(_,h)=>r(t(_),h,m,!1).valueOf()),c[l+", Array"]=e.referToSelf(m=>(_,h)=>r(t(h),_,m,!0).valueOf())));var d=a.sS!==void 0?a.sS:a.Ss;return o?(a.Ss&&(c["SparseMatrix,"+l]=(m,_)=>a.Ss(m,_,o,!1)),d&&(c[l+", SparseMatrix"]=(m,_)=>d(_,m,o,!0))):(a.Ss&&(c["SparseMatrix,"+l]=e.referToSelf(m=>(_,h)=>a.Ss(_,h,m,!1))),d&&(c[l+", SparseMatrix"]=e.referToSelf(m=>(_,h)=>d(h,_,m,!0)))),o&&o.signatures&&Tf(c,o.signatures),c}}),dy="matAlgo01xDSid",py=["typed"],my=Ie(dy,py,n=>{var{typed:e}=n;return function(i,r,s,a){var o=i._data,u=i._size,c=i._datatype||i.getDataType(),l=r._values,f=r._index,d=r._ptr,m=r._size,_=r._datatype||r._data===void 0?r._datatype:r.getDataType();if(u.length!==m.length)throw new ct(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!l)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var h=u[0],g=u[1],p=typeof c=="string"&&c!=="mixed"&&c===_?c:void 0,A=p?e.find(s,[p,p]):s,v,E,y=[];for(v=0;v<h;v++)y[v]=[];var x=[],w=[];for(E=0;E<g;E++){for(var T=E+1,D=d[E],M=d[E+1],F=D;F<M;F++)v=f[F],x[v]=a?A(l[F],o[v][E]):A(o[v][E],l[F]),w[v]=T;for(v=0;v<h;v++)w[v]===T?y[v][E]=x[v]:y[v][E]=o[v][E]}return i.createDenseMatrix({data:y,size:[h,g],datatype:c===i._datatype&&_===r._datatype?p:void 0})}}),gy="matAlgo04xSidSid",_y=["typed","equalScalar"],vy=Ie(gy,_y,n=>{var{typed:e,equalScalar:t}=n;return function(r,s,a){var o=r._values,u=r._index,c=r._ptr,l=r._size,f=r._datatype||r._data===void 0?r._datatype:r.getDataType(),d=s._values,m=s._index,_=s._ptr,h=s._size,g=s._datatype||s._data===void 0?s._datatype:s.getDataType();if(l.length!==h.length)throw new ct(l.length,h.length);if(l[0]!==h[0]||l[1]!==h[1])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+h+")");var p=l[0],A=l[1],v,E=t,y=0,x=a;typeof f=="string"&&f===g&&f!=="mixed"&&(v=f,E=e.find(t,[v,v]),y=e.convert(0,v),x=e.find(a,[v,v]));var w=o&&d?[]:void 0,T=[],D=[],M=o&&d?[]:void 0,F=o&&d?[]:void 0,B=[],O=[],V,X,U,j,G;for(X=0;X<A;X++){D[X]=T.length;var ne=X+1;for(j=c[X],G=c[X+1],U=j;U<G;U++)V=u[U],T.push(V),B[V]=ne,M&&(M[V]=o[U]);for(j=_[X],G=_[X+1],U=j;U<G;U++)if(V=m[U],B[V]===ne){if(M){var se=x(M[V],d[U]);E(se,y)?B[V]=null:M[V]=se}}else T.push(V),O[V]=ne,F&&(F[V]=d[U]);if(M&&F)for(U=D[X];U<T.length;)V=T[U],B[V]===ne?(w[U]=M[V],U++):O[V]===ne?(w[U]=F[V],U++):T.splice(U,1)}return D[A]=T.length,r.createSparseMatrix({values:w,index:T,ptr:D,size:[p,A],datatype:f===r._datatype&&g===s._datatype?v:void 0})}}),Ey="matAlgo10xSids",xy=["typed","DenseMatrix"],yy=Ie(Ey,xy,n=>{var{typed:e,DenseMatrix:t}=n;return function(r,s,a,o){var u=r._values,c=r._index,l=r._ptr,f=r._size,d=r._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=f[0],_=f[1],h,g=a;typeof d=="string"&&(h=d,s=e.convert(s,h),g=e.find(a,[h,h]));for(var p=[],A=[],v=[],E=0;E<_;E++){for(var y=E+1,x=l[E],w=l[E+1],T=x;T<w;T++){var D=c[T];A[D]=u[T],v[D]=y}for(var M=0;M<m;M++)E===0&&(p[M]=[]),v[M]===y?p[M][E]=o?g(s,A[M]):g(A[M],s):p[M][E]=s}return new t({data:p,size:[m,_],datatype:h})}}),My="multiplyScalar",Dy=["typed"],Sy=Ie(My,Dy,n=>{var{typed:e}=n;return e("multiplyScalar",{"number, number":ah,"Complex, Complex":function(i,r){return i.mul(r)},"BigNumber, BigNumber":function(i,r){return i.times(r)},"bigint, bigint":function(i,r){return i*r},"Fraction, Fraction":function(i,r){return i.mul(r)},"number | Fraction | BigNumber | Complex, Unit":(t,i)=>i.multiply(t),"Unit, number | Fraction | BigNumber | Complex | Unit":(t,i)=>t.multiply(i)})}),Sl="multiply",Ay=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],wy=Ie(Sl,Ay,n=>{var{typed:e,matrix:t,addScalar:i,multiplyScalar:r,equalScalar:s,dot:a}=n,o=uh({typed:e,equalScalar:s}),u=Xu({typed:e});function c(y,x){switch(y.length){case 1:switch(x.length){case 1:if(y[0]!==x[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(y[0]!==x[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+y[0]+") must match Matrix rows ("+x[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+x.length+" dimensions)")}break;case 2:switch(x.length){case 1:if(y[1]!==x[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+y[1]+") must match Vector length ("+x[0]+")");break;case 2:if(y[1]!==x[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+y[1]+") must match Matrix B rows ("+x[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+x.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+y.length+" dimensions)")}}function l(y,x,w){if(w===0)throw new Error("Cannot multiply two empty vectors");return a(y,x)}function f(y,x){if(x.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return d(y,x)}function d(y,x){var w=y._data,T=y._size,D=y._datatype||y.getDataType(),M=x._data,F=x._size,B=x._datatype||x.getDataType(),O=T[0],V=F[1],X,U=i,j=r;D&&B&&D===B&&typeof D=="string"&&D!=="mixed"&&(X=D,U=e.find(i,[X,X]),j=e.find(r,[X,X]));for(var G=[],ne=0;ne<V;ne++){for(var se=j(w[0],M[0][ne]),he=1;he<O;he++)se=U(se,j(w[he],M[he][ne]));G[ne]=se}return y.createDenseMatrix({data:G,size:[V],datatype:D===y._datatype&&B===x._datatype?X:void 0})}var m=e("_multiplyMatrixVector",{"DenseMatrix, any":h,"SparseMatrix, any":A}),_=e("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":g,"DenseMatrix, SparseMatrix":p,"SparseMatrix, DenseMatrix":v,"SparseMatrix, SparseMatrix":E});function h(y,x){var w=y._data,T=y._size,D=y._datatype||y.getDataType(),M=x._data,F=x._datatype||x.getDataType(),B=T[0],O=T[1],V,X=i,U=r;D&&F&&D===F&&typeof D=="string"&&D!=="mixed"&&(V=D,X=e.find(i,[V,V]),U=e.find(r,[V,V]));for(var j=[],G=0;G<B;G++){for(var ne=w[G],se=U(ne[0],M[0]),he=1;he<O;he++)se=X(se,U(ne[he],M[he]));j[G]=se}return y.createDenseMatrix({data:j,size:[B],datatype:D===y._datatype&&F===x._datatype?V:void 0})}function g(y,x){var w=y._data,T=y._size,D=y._datatype||y.getDataType(),M=x._data,F=x._size,B=x._datatype||x.getDataType(),O=T[0],V=T[1],X=F[1],U,j=i,G=r;D&&B&&D===B&&typeof D=="string"&&D!=="mixed"&&D!=="mixed"&&(U=D,j=e.find(i,[U,U]),G=e.find(r,[U,U]));for(var ne=[],se=0;se<O;se++){var he=w[se];ne[se]=[];for(var Se=0;Se<X;Se++){for(var Le=G(he[0],M[0][Se]),ee=1;ee<V;ee++)Le=j(Le,G(he[ee],M[ee][Se]));ne[se][Se]=Le}}return y.createDenseMatrix({data:ne,size:[O,X],datatype:D===y._datatype&&B===x._datatype?U:void 0})}function p(y,x){var w=y._data,T=y._size,D=y._datatype||y.getDataType(),M=x._values,F=x._index,B=x._ptr,O=x._size,V=x._datatype||x._data===void 0?x._datatype:x.getDataType();if(!M)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var X=T[0],U=O[1],j,G=i,ne=r,se=s,he=0;D&&V&&D===V&&typeof D=="string"&&D!=="mixed"&&(j=D,G=e.find(i,[j,j]),ne=e.find(r,[j,j]),se=e.find(s,[j,j]),he=e.convert(0,j));for(var Se=[],Le=[],ee=[],ue=x.createSparseMatrix({values:Se,index:Le,ptr:ee,size:[X,U],datatype:D===y._datatype&&V===x._datatype?j:void 0}),de=0;de<U;de++){ee[de]=Le.length;var ce=B[de],we=B[de+1];if(we>ce)for(var Ce=0,ve=0;ve<X;ve++){for(var Qe=ve+1,Ye=void 0,be=ce;be<we;be++){var I=F[be];Ce!==Qe?(Ye=ne(w[ve][I],M[be]),Ce=Qe):Ye=G(Ye,ne(w[ve][I],M[be]))}Ce===Qe&&!se(Ye,he)&&(Le.push(ve),Se.push(Ye))}}return ee[U]=Le.length,ue}function A(y,x){var w=y._values,T=y._index,D=y._ptr,M=y._datatype||y._data===void 0?y._datatype:y.getDataType();if(!w)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var F=x._data,B=x._datatype||x.getDataType(),O=y._size[0],V=x._size[0],X=[],U=[],j=[],G,ne=i,se=r,he=s,Se=0;M&&B&&M===B&&typeof M=="string"&&M!=="mixed"&&(G=M,ne=e.find(i,[G,G]),se=e.find(r,[G,G]),he=e.find(s,[G,G]),Se=e.convert(0,G));var Le=[],ee=[];j[0]=0;for(var ue=0;ue<V;ue++){var de=F[ue];if(!he(de,Se))for(var ce=D[ue],we=D[ue+1],Ce=ce;Ce<we;Ce++){var ve=T[Ce];ee[ve]?Le[ve]=ne(Le[ve],se(de,w[Ce])):(ee[ve]=!0,U.push(ve),Le[ve]=se(de,w[Ce]))}}for(var Qe=U.length,Ye=0;Ye<Qe;Ye++){var be=U[Ye];X[Ye]=Le[be]}return j[1]=U.length,y.createSparseMatrix({values:X,index:U,ptr:j,size:[O,1],datatype:M===y._datatype&&B===x._datatype?G:void 0})}function v(y,x){var w=y._values,T=y._index,D=y._ptr,M=y._datatype||y._data===void 0?y._datatype:y.getDataType();if(!w)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var F=x._data,B=x._datatype||x.getDataType(),O=y._size[0],V=x._size[0],X=x._size[1],U,j=i,G=r,ne=s,se=0;M&&B&&M===B&&typeof M=="string"&&M!=="mixed"&&(U=M,j=e.find(i,[U,U]),G=e.find(r,[U,U]),ne=e.find(s,[U,U]),se=e.convert(0,U));for(var he=[],Se=[],Le=[],ee=y.createSparseMatrix({values:he,index:Se,ptr:Le,size:[O,X],datatype:M===y._datatype&&B===x._datatype?U:void 0}),ue=[],de=[],ce=0;ce<X;ce++){Le[ce]=Se.length;for(var we=ce+1,Ce=0;Ce<V;Ce++){var ve=F[Ce][ce];if(!ne(ve,se))for(var Qe=D[Ce],Ye=D[Ce+1],be=Qe;be<Ye;be++){var I=T[be];de[I]!==we?(de[I]=we,Se.push(I),ue[I]=G(ve,w[be])):ue[I]=j(ue[I],G(ve,w[be]))}}for(var mt=Le[ce],Ge=Se.length,ke=mt;ke<Ge;ke++){var Te=Se[ke];he[ke]=ue[Te]}}return Le[X]=Se.length,ee}function E(y,x){var w=y._values,T=y._index,D=y._ptr,M=y._datatype||y._data===void 0?y._datatype:y.getDataType(),F=x._values,B=x._index,O=x._ptr,V=x._datatype||x._data===void 0?x._datatype:x.getDataType(),X=y._size[0],U=x._size[1],j=w&&F,G,ne=i,se=r;M&&V&&M===V&&typeof M=="string"&&M!=="mixed"&&(G=M,ne=e.find(i,[G,G]),se=e.find(r,[G,G]));for(var he=j?[]:void 0,Se=[],Le=[],ee=y.createSparseMatrix({values:he,index:Se,ptr:Le,size:[X,U],datatype:M===y._datatype&&V===x._datatype?G:void 0}),ue=j?[]:void 0,de=[],ce,we,Ce,ve,Qe,Ye,be,I,mt=0;mt<U;mt++){Le[mt]=Se.length;var Ge=mt+1;for(Qe=O[mt],Ye=O[mt+1],ve=Qe;ve<Ye;ve++)if(I=B[ve],j)for(we=D[I],Ce=D[I+1],ce=we;ce<Ce;ce++)be=T[ce],de[be]!==Ge?(de[be]=Ge,Se.push(be),ue[be]=se(F[ve],w[ce])):ue[be]=ne(ue[be],se(F[ve],w[ce]));else for(we=D[I],Ce=D[I+1],ce=we;ce<Ce;ce++)be=T[ce],de[be]!==Ge&&(de[be]=Ge,Se.push(be));if(j)for(var ke=Le[mt],Te=Se.length,nt=ke;nt<Te;nt++){var Fe=Se[nt];he[nt]=ue[Fe]}}return Le[U]=Se.length,ee}return e(Sl,r,{"Array, Array":e.referTo("Matrix, Matrix",y=>(x,w)=>{c(Gt(x),Gt(w));var T=y(t(x),t(w));return Dt(T)?T.valueOf():T}),"Matrix, Matrix":function(x,w){var T=x.size(),D=w.size();return c(T,D),T.length===1?D.length===1?l(x,w,T[0]):f(x,w):D.length===1?m(x,w):_(x,w)},"Matrix, Array":e.referTo("Matrix,Matrix",y=>(x,w)=>y(x,t(w))),"Array, Matrix":e.referToSelf(y=>(x,w)=>y(t(x,w.storage()),w)),"SparseMatrix, any":function(x,w){return o(x,w,r,!1)},"DenseMatrix, any":function(x,w){return u(x,w,r,!1)},"any, SparseMatrix":function(x,w){return o(w,x,r,!0)},"any, DenseMatrix":function(x,w){return u(w,x,r,!0)},"Array, any":function(x,w){return u(t(x),w,r,!1).valueOf()},"any, Array":function(x,w){return u(t(w),x,r,!0).valueOf()},"any, any":r,"any, any, ...any":e.referToSelf(y=>(x,w,T)=>{for(var D=y(x,w),M=0;M<T.length;M++)D=y(D,T[M]);return D})})}),by="matAlgo07xSSf",Ty=["typed","SparseMatrix"],fh=Ie(by,Ty,n=>{var{typed:e,SparseMatrix:t}=n;return function(s,a,o){var u=s._size,c=s._datatype||s._data===void 0?s._datatype:s.getDataType(),l=a._size,f=a._datatype||a._data===void 0?a._datatype:a.getDataType();if(u.length!==l.length)throw new ct(u.length,l.length);if(u[0]!==l[0]||u[1]!==l[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+l+")");var d=u[0],m=u[1],_,h=0,g=o;typeof c=="string"&&c===f&&c!=="mixed"&&(_=c,h=e.convert(0,_),g=e.find(o,[_,_]));for(var p=[],A=[],v=new Array(m+1).fill(0),E=[],y=[],x=[],w=[],T=0;T<m;T++){var D=T+1,M=0;i(s,T,x,E,D),i(a,T,w,y,D);for(var F=0;F<d;F++){var B=x[F]===D?E[F]:h,O=w[F]===D?y[F]:h,V=g(B,O);V!==0&&V!==!1&&(A.push(F),p.push(V),M++)}v[T+1]=v[T]+M}return new t({values:p,index:A,ptr:v,size:[d,m],datatype:c===s._datatype&&f===a._datatype?_:void 0})};function i(r,s,a,o,u){for(var c=r._values,l=r._index,f=r._ptr,d=f[s],m=f[s+1];d<m;d++){var _=l[d];a[_]=u,o[_]=c[d]}}}),Al="conj",Cy=["typed"],Fy=Ie(Al,Cy,n=>{var{typed:e}=n;return e(Al,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.conjugate(),"Array | Matrix":e.referToSelf(t=>i=>ii(i,t))})}),wl="concat",Ry=["typed","matrix","isInteger"],Py=Ie(wl,Ry,n=>{var{typed:e,matrix:t,isInteger:i}=n;return e(wl,{"...Array | Matrix | number | BigNumber":function(s){var a,o=s.length,u=-1,c,l=!1,f=[];for(a=0;a<o;a++){var d=s[a];if(Dt(d)&&(l=!0),pt(d)||St(d)){if(a!==o-1)throw new Error("Dimension must be specified as last argument");if(c=u,u=d.valueOf(),!i(u))throw new TypeError("Integer number expected for dimension");if(u<0||a>0&&u>c)throw new Mi(u,c+1)}else{var m=gt(d).valueOf(),_=Gt(m);if(f[a]=m,c=u,u=_.length-1,a>0&&u!==c)throw new ct(c+1,u+1)}}if(f.length===0)throw new SyntaxError("At least one matrix expected");for(var h=f.shift();f.length;)h=jf(h,f.shift(),u);return l?t(h):h},"...string":function(s){return s.join("")}})}),bl="flatten",Ny=["typed"],Ly=Ie(bl,Ny,n=>{var{typed:e}=n;return e(bl,{Array:function(i){return mu(i)},Matrix:function(i){return i.create(mu(i.toArray()),i.datatype())}})}),Tl="identity",Iy=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],Uy=Ie(Tl,Iy,n=>{var{typed:e,config:t,matrix:i,BigNumber:r,DenseMatrix:s,SparseMatrix:a}=n;return e(Tl,{"":function(){return t.matrix==="Matrix"?i([]):[]},string:function(l){return i(l)},"number | BigNumber":function(l){return u(l,l,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(l,f){return u(l,l,f)},"number | BigNumber, number | BigNumber":function(l,f){return u(l,f,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(l,f,d){return u(l,f,d)},Array:function(l){return o(l)},"Array, string":function(l,f){return o(l,f)},Matrix:function(l){return o(l.valueOf(),l.storage())},"Matrix, string":function(l,f){return o(l.valueOf(),f)}});function o(c,l){switch(c.length){case 0:return l?i(l):[];case 1:return u(c[0],c[0],l);case 2:return u(c[0],c[1],l);default:throw new Error("Vector containing two values expected")}}function u(c,l,f){var d=St(c)||St(l)?r:null;if(St(c)&&(c=c.toNumber()),St(l)&&(l=l.toNumber()),!At(c)||c<1)throw new Error("Parameters in function identity must be positive integers");if(!At(l)||l<1)throw new Error("Parameters in function identity must be positive integers");var m=d?new r(1):1,_=d?new d(0):0,h=[c,l];if(f){if(f==="sparse")return a.diagonal(h,m,0,_);if(f==="dense")return s.diagonal(h,m,0,_);throw new TypeError('Unknown matrix type "'.concat(f,'"'))}for(var g=ua([],h,_),p=c<l?c:l,A=0;A<p;A++)g[A][A]=m;return g}}),vo="map",By=["typed"],Oy=Ie(vo,By,n=>{var{typed:e}=n;return e(vo,{"Array, function":i,"Matrix, function":function(s,a){return s.map(a)},"Array|Matrix, Array|Matrix, ...Array|Matrix|function":(r,s,a)=>t([r,s,...a.slice(0,a.length-1)],a[a.length-1])});function t(r,s){if(typeof s!="function")throw new Error("Last argument must be a callback function");var a=r[0].isMatrix,o=zu(...r.map(E=>E.isMatrix?E.size():Gt(E))),u=a?(E,y)=>E.get(y):Hu,c=a?r.map(E=>E.isMatrix?E.create(zi(E.toArray(),o),E.datatype()):r[0].create(zi(E.valueOf(),o))):r.map(E=>E.isMatrix?zi(E.toArray(),o):zi(E,o)),l;if(e.isTypedFunction(s)){var f=o.map(()=>0),d=c.map(E=>u(E,f)),m=v(s,d,f,c);l=p(m)}else{var _=r.length,h=A(s,_);l=p(h)}var g=(E,y)=>l([E,...c.slice(1).map(x=>u(x,y))],y);if(a)return c[0].map(g);return i(c[0],g);function p(E){switch(E){case 0:return y=>s(...y);case 1:return(y,x)=>s(...y,x);case 2:return(y,x)=>s(...y,x,...c)}}function A(E,y){return E.length>y+1?2:E.length===y+1?1:0}function v(E,y,x,w){return e.resolve(E,[...y,x,...w])!==null?2:e.resolve(E,[...y,x])!==null?1:(e.resolve(E,y)!==null,0)}}function i(r,s){return Qf(r,[],r,jr(s,r,vo))}});function zy(){throw new Error('No "bignumber" implementation available')}function Hy(){throw new Error('No "fraction" implementation available')}function Vy(){throw new Error('No "matrix" implementation available')}var Cl="reshape",Gy=["typed","isInteger","matrix"],ky=Ie(Cl,Gy,n=>{var{typed:e,isInteger:t}=n;return e(Cl,{"Matrix, Array":function(r,s){return r.reshape(s,!0)},"Array, Array":function(r,s){return s.forEach(function(a){if(!t(a))throw new TypeError("Invalid size for dimension: "+a)}),Uu(r,s)}})}),Fl="size",Wy=["typed","config","?matrix"],Xy=Ie(Fl,Wy,n=>{var{typed:e,config:t,matrix:i}=n;return e(Fl,{Matrix:function(s){return s.create(s.size(),"number")},Array:Gt,string:function(s){return t.matrix==="Array"?[s.length]:i([s.length],"dense","number")},"number | Complex | BigNumber | Unit | boolean | null":function(s){return t.matrix==="Array"?[]:i?i([],"dense","number"):Vy()}})}),Rl="transpose",qy=["typed","matrix"],Yy=Ie(Rl,qy,n=>{var{typed:e,matrix:t}=n;return e(Rl,{Array:a=>i(t(a)).valueOf(),Matrix:i,any:gt});function i(a){var o=a.size(),u;switch(o.length){case 1:u=a.clone();break;case 2:{var c=o[0],l=o[1];if(l===0)throw new RangeError("Cannot transpose a 2D matrix with no columns (size: "+Mt(o)+")");switch(a.storage()){case"dense":u=r(a,c,l);break;case"sparse":u=s(a,c,l);break}}break;default:throw new RangeError("Matrix must be a vector or two dimensional (size: "+Mt(o)+")")}return u}function r(a,o,u){for(var c=a._data,l=[],f,d=0;d<u;d++){f=l[d]=[];for(var m=0;m<o;m++)f[m]=gt(c[m][d])}return a.createDenseMatrix({data:l,size:[u,o],datatype:a._datatype})}function s(a,o,u){for(var c=a._values,l=a._index,f=a._ptr,d=c?[]:void 0,m=[],_=[],h=[],g=0;g<o;g++)h[g]=0;var p,A,v;for(p=0,A=l.length;p<A;p++)h[l[p]]++;for(var E=0,y=0;y<o;y++)_.push(E),E+=h[y],h[y]=_[y];for(_.push(E),v=0;v<u;v++)for(var x=f[v],w=f[v+1],T=x;T<w;T++){var D=h[l[T]]++;m[D]=v,c&&(d[D]=gt(c[T]))}return a.createSparseMatrix({values:d,index:m,ptr:_,size:[u,o],datatype:a._datatype})}}),Pl="zeros",$y=["typed","config","matrix","BigNumber"],Zy=Ie(Pl,$y,n=>{var{typed:e,config:t,matrix:i,BigNumber:r}=n;return e(Pl,{"":function(){return t.matrix==="Array"?s([]):s([],"default")},"...number | BigNumber | string":function(c){var l=c[c.length-1];if(typeof l=="string"){var f=c.pop();return s(c,f)}else return t.matrix==="Array"?s(c):s(c,"default")},Array:s,Matrix:function(c){var l=c.storage();return s(c.valueOf(),l)},"Array | Matrix, string":function(c,l){return s(c.valueOf(),l)}});function s(u,c){var l=a(u),f=l?new r(0):0;if(o(u),c){var d=i(c);return u.length>0?d.resize(u,f):d}else{var m=[];return u.length>0?ua(m,u,f):m}}function a(u){var c=!1;return u.forEach(function(l,f,d){St(l)&&(c=!0,d[f]=l.toNumber())}),c}function o(u){u.forEach(function(c){if(typeof c!="number"||!At(c)||c<0)throw new Error("Parameters in function zeros must be positive integers")})}});function fa(n,e,t){var i;return String(n).includes("Unexpected type")?(i=arguments.length>2?" (type: "+Bn(t)+", value: "+JSON.stringify(t)+")":" (type: "+n.data.actual+")",new TypeError("Cannot calculate "+e+", unexpected type of argument"+i)):String(n).includes("complex numbers")?(i=arguments.length>2?" (type: "+Bn(t)+", value: "+JSON.stringify(t)+")":"",new TypeError("Cannot calculate "+e+", no ordering relation is defined for complex numbers"+i)):n}var Ky="numeric",jy=["number","?bignumber","?fraction"],Jy=Ie(Ky,jy,n=>{var{number:e,bignumber:t,fraction:i}=n,r={string:!0,number:!0,BigNumber:!0,Fraction:!0},s={number:a=>e(a),BigNumber:t?a=>t(a):zy,bigint:a=>BigInt(a),Fraction:i?a=>i(a):Hy};return function(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"number",c=arguments.length>2?arguments[2]:void 0;if(c!==void 0)throw new SyntaxError("numeric() takes one or two arguments");var l=Bn(o);if(!(l in r))throw new TypeError("Cannot convert "+o+' of type "'+l+'"; valid input types are '+Object.keys(r).join(", "));if(!(u in s))throw new TypeError("Cannot convert "+o+' to type "'+u+'"; valid output types are '+Object.keys(s).join(", "));return u===l?o:s[u](o)}}),Nl="divideScalar",Qy=["typed","numeric"],eM=Ie(Nl,Qy,n=>{var{typed:e,numeric:t}=n;return e(Nl,{"number, number":function(r,s){return r/s},"Complex, Complex":function(r,s){return r.div(s)},"BigNumber, BigNumber":function(r,s){return r.div(s)},"bigint, bigint":function(r,s){return r/s},"Fraction, Fraction":function(r,s){return r.div(s)},"Unit, number | Complex | Fraction | BigNumber | Unit":(i,r)=>i.divide(r),"number | Fraction | Complex | BigNumber, Unit":(i,r)=>r.divideInto(i)})}),ha="smaller",tM=["typed","config","bignumber","matrix","DenseMatrix","concat","SparseMatrix"],nM=Ie(ha,tM,n=>{var{typed:e,config:t,bignumber:i,matrix:r,DenseMatrix:s,concat:a,SparseMatrix:o}=n,u=lh({typed:e}),c=fh({typed:e,SparseMatrix:o}),l=ch({typed:e,DenseMatrix:s}),f=qu({typed:e,matrix:r,concat:a}),d=Wu({typed:e});function m(_,h){return _.lt(h)&&!ku(_,h,t.relTol,t.absTol)}return e(ha,iM({typed:e,config:t}),{"boolean, boolean":(_,h)=>_<h,"BigNumber, BigNumber":m,"bigint, bigint":(_,h)=>_<h,"Fraction, Fraction":(_,h)=>_.compare(h)===-1,"Fraction, BigNumber":function(h,g){return m(i(h),g)},"BigNumber, Fraction":function(h,g){return m(h,i(g))},"Complex, Complex":function(h,g){throw new TypeError("No ordering relation is defined for complex numbers")}},d,f({SS:c,DS:u,Ss:l}))}),iM=Ie(ha,["typed","config"],n=>{var{typed:e,config:t}=n;return e(ha,{"number, number":function(r,s){return r<s&&!wr(r,s,t.relTol,t.absTol)}})}),da="larger",rM=["typed","config","bignumber","matrix","DenseMatrix","concat","SparseMatrix"],sM=Ie(da,rM,n=>{var{typed:e,config:t,bignumber:i,matrix:r,DenseMatrix:s,concat:a,SparseMatrix:o}=n,u=lh({typed:e}),c=fh({typed:e,SparseMatrix:o}),l=ch({typed:e,DenseMatrix:s}),f=qu({typed:e,matrix:r,concat:a}),d=Wu({typed:e});function m(_,h){return _.gt(h)&&!ku(_,h,t.relTol,t.absTol)}return e(da,aM({typed:e,config:t}),{"boolean, boolean":(_,h)=>_>h,"BigNumber, BigNumber":m,"bigint, bigint":(_,h)=>_>h,"Fraction, Fraction":(_,h)=>_.compare(h)===1,"Fraction, BigNumber":function(h,g){return m(i(h),g)},"BigNumber, Fraction":function(h,g){return m(h,i(g))},"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},d,f({SS:c,DS:u,Ss:l}))}),aM=Ie(da,["typed","config"],n=>{var{typed:e,config:t}=n;return e(da,{"number, number":function(r,s){return r>s&&!wr(r,s,t.relTol,t.absTol)}})}),Ll="max",oM=["typed","config","numeric","larger"],uM=Ie(Ll,oM,n=>{var{typed:e,config:t,numeric:i,larger:r}=n;return e(Ll,{"Array | Matrix":a,"Array | Matrix, number | BigNumber":function(u,c){return th(u,c.valueOf(),s)},"...":function(u){if(eh(u))throw new TypeError("Scalar values expected in function max");return a(u)}});function s(o,u){try{return r(o,u)?o:u}catch(c){throw fa(c,"max",u)}}function a(o){var u;if(Vu(o,function(c){try{typeof c=="number"&&isNaN(c)?u=NaN:(u===void 0||r(c,u))&&(u=c)}catch(l){throw fa(l,"max",c)}}),u===void 0)throw new Error("Cannot calculate max of an empty array");return typeof u=="string"&&(u=i(u,Ff(u,t))),u}}),Il="min",cM=["typed","config","numeric","smaller"],lM=Ie(Il,cM,n=>{var{typed:e,config:t,numeric:i,smaller:r}=n;return e(Il,{"Array | Matrix":a,"Array | Matrix, number | BigNumber":function(u,c){return th(u,c.valueOf(),s)},"...":function(u){if(eh(u))throw new TypeError("Scalar values expected in function min");return a(u)}});function s(o,u){try{return r(o,u)?o:u}catch(c){throw fa(c,"min",u)}}function a(o){var u;if(Vu(o,function(c){try{typeof c=="number"&&isNaN(c)?u=NaN:(u===void 0||r(c,u))&&(u=c)}catch(l){throw fa(l,"min",c)}}),u===void 0)throw new Error("Cannot calculate min of an empty array");return typeof u=="string"&&(u=i(u,Ff(u,t))),u}}),Ul="add",fM=["typed","matrix","addScalar","equalScalar","DenseMatrix","SparseMatrix","concat"],hM=Ie(Ul,fM,n=>{var{typed:e,matrix:t,addScalar:i,equalScalar:r,DenseMatrix:s,SparseMatrix:a,concat:o}=n,u=my({typed:e}),c=vy({typed:e,equalScalar:r}),l=yy({typed:e,DenseMatrix:s}),f=qu({typed:e,matrix:t,concat:o});return e(Ul,{"any, any":i,"any, any, ...any":e.referToSelf(d=>(m,_,h)=>{for(var g=d(m,_),p=0;p<h.length;p++)g=d(g,h[p]);return g})},f({elop:i,DS:u,SS:c,Ss:l}))}),Bl="dot",dM=["typed","addScalar","multiplyScalar","conj","size"],pM=Ie(Bl,dM,n=>{var{typed:e,addScalar:t,multiplyScalar:i,conj:r,size:s}=n;return e(Bl,{"Array | DenseMatrix, Array | DenseMatrix":o,"SparseMatrix, SparseMatrix":u});function a(l,f){var d=c(l),m=c(f),_,h;if(d.length===1)_=d[0];else if(d.length===2&&d[1]===1)_=d[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+d.join(", ")+")");if(m.length===1)h=m[0];else if(m.length===2&&m[1]===1)h=m[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+m.join(", ")+")");if(_!==h)throw new RangeError("Vectors must have equal length ("+_+" != "+h+")");if(_===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return _}function o(l,f){var d=a(l,f),m=Dt(l)?l._data:l,_=Dt(l)?l._datatype||l.getDataType():void 0,h=Dt(f)?f._data:f,g=Dt(f)?f._datatype||f.getDataType():void 0,p=c(l).length===2,A=c(f).length===2,v=t,E=i;if(_&&g&&_===g&&typeof _=="string"&&_!=="mixed"){var y=_;v=e.find(t,[y,y]),E=e.find(i,[y,y])}if(!p&&!A){for(var x=E(r(m[0]),h[0]),w=1;w<d;w++)x=v(x,E(r(m[w]),h[w]));return x}if(!p&&A){for(var T=E(r(m[0]),h[0][0]),D=1;D<d;D++)T=v(T,E(r(m[D]),h[D][0]));return T}if(p&&!A){for(var M=E(r(m[0][0]),h[0]),F=1;F<d;F++)M=v(M,E(r(m[F][0]),h[F]));return M}if(p&&A){for(var B=E(r(m[0][0]),h[0][0]),O=1;O<d;O++)B=v(B,E(r(m[O][0]),h[O][0]));return B}}function u(l,f){a(l,f);for(var d=l._index,m=l._values,_=f._index,h=f._values,g=0,p=t,A=i,v=0,E=0;v<d.length&&E<_.length;){var y=d[v],x=_[E];if(y<x){v++;continue}if(y>x){E++;continue}y===x&&(g=p(g,A(m[v],h[E])),v++,E++)}return g}function c(l){return Dt(l)?l.size():s(l)}}),Ol="det",mM=["typed","matrix","subtractScalar","multiply","divideScalar","isZero","unaryMinus"],gM=Ie(Ol,mM,n=>{var{typed:e,matrix:t,subtractScalar:i,multiply:r,divideScalar:s,isZero:a,unaryMinus:o}=n;return e(Ol,{any:function(l){return gt(l)},"Array | Matrix":function(l){var f;switch(Dt(l)?f=l.size():Array.isArray(l)?(l=t(l),f=l.size()):f=[],f.length){case 0:return gt(l);case 1:if(f[0]===1)return gt(l.valueOf()[0]);if(f[0]===0)return 1;throw new RangeError("Matrix must be square (size: "+Mt(f)+")");case 2:{var d=f[0],m=f[1];if(d===m)return u(l.clone().valueOf(),d);if(m===0)return 1;throw new RangeError("Matrix must be square (size: "+Mt(f)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+Mt(f)+")")}}});function u(c,l,f){if(l===1)return gt(c[0][0]);if(l===2)return i(r(c[0][0],c[1][1]),r(c[1][0],c[0][1]));for(var d=!1,m=new Array(l).fill(0).map((w,T)=>T),_=0;_<l;_++){var h=m[_];if(a(c[h][_])){var g=void 0;for(g=_+1;g<l;g++)if(!a(c[m[g]][_])){h=m[g],m[g]=m[_],m[_]=h,d=!d;break}if(g===l)return c[h][_]}for(var p=c[h][_],A=_===0?1:c[m[_-1]][_-1],v=_+1;v<l;v++)for(var E=m[v],y=_+1;y<l;y++)c[E][y]=s(i(r(c[E][y],p),r(c[E][_],c[h][y])),A)}var x=c[m[l-1]][l-1];return d?o(x):x}}),zl="inv",_M=["typed","matrix","divideScalar","addScalar","multiply","unaryMinus","det","identity","abs"],vM=Ie(zl,_M,n=>{var{typed:e,matrix:t,divideScalar:i,addScalar:r,multiply:s,unaryMinus:a,det:o,identity:u,abs:c}=n;return e(zl,{"Array | Matrix":function(d){var m=Dt(d)?d.size():Gt(d);switch(m.length){case 1:if(m[0]===1)return Dt(d)?t([i(1,d.valueOf()[0])]):[i(1,d[0])];throw new RangeError("Matrix must be square (size: "+Mt(m)+")");case 2:{var _=m[0],h=m[1];if(_===h)return Dt(d)?t(l(d.valueOf(),_,h),d.storage()):l(d,_,h);throw new RangeError("Matrix must be square (size: "+Mt(m)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+Mt(m)+")")}},any:function(d){return i(1,d)}});function l(f,d,m){var _,h,g,p,A;if(d===1){if(p=f[0][0],p===0)throw Error("Cannot calculate inverse, determinant is zero");return[[i(1,p)]]}else if(d===2){var v=o(f);if(v===0)throw Error("Cannot calculate inverse, determinant is zero");return[[i(f[1][1],v),i(a(f[0][1]),v)],[i(a(f[1][0]),v),i(f[0][0],v)]]}else{var E=f.concat();for(_=0;_<d;_++)E[_]=E[_].concat();for(var y=u(d).valueOf(),x=0;x<m;x++){var w=c(E[x][x]),T=x;for(_=x+1;_<d;)c(E[_][x])>w&&(w=c(E[_][x]),T=_),_++;if(w===0)throw Error("Cannot calculate inverse, determinant is zero");_=T,_!==x&&(A=E[x],E[x]=E[_],E[_]=A,A=y[x],y[x]=y[_],y[_]=A);var D=E[x],M=y[x];for(_=0;_<d;_++){var F=E[_],B=y[_];if(_!==x){if(F[x]!==0){for(g=i(a(F[x]),D[x]),h=x;h<m;h++)F[h]=r(F[h],s(g,D[h]));for(h=0;h<m;h++)B[h]=r(B[h],s(g,M[h]))}}else{for(g=D[x],h=x;h<m;h++)F[h]=i(F[h],g);for(h=0;h<m;h++)B[h]=i(B[h],g)}}}return y}}}),EM="divide",xM=["typed","matrix","multiply","equalScalar","divideScalar","inv"],yM=Ie(EM,xM,n=>{var{typed:e,matrix:t,multiply:i,equalScalar:r,divideScalar:s,inv:a}=n,o=uh({typed:e,equalScalar:r}),u=Xu({typed:e});return e("divide",Tf({"Array | Matrix, Array | Matrix":function(l,f){return i(l,a(f))},"DenseMatrix, any":function(l,f){return u(l,f,s,!1)},"SparseMatrix, any":function(l,f){return o(l,f,s,!1)},"Array, any":function(l,f){return u(t(l),f,s,!1).valueOf()},"any, Array | Matrix":function(l,f){return i(l,a(f))}},s.signatures))}),Sa=qE({config:Hn}),MM=jE({}),hh=rx({}),Yu=ox({}),Pr=xx({Matrix:Yu}),tt=Zv({BigNumber:Sa,Complex:MM,DenseMatrix:Pr,Fraction:hh}),DM=$x({typed:tt}),Aa=Kx({typed:tt}),SM=Fy({typed:tt}),is=Tx({config:Hn,typed:tt}),$u=Ly({typed:tt}),dh=Dx({typed:tt}),AM=Ax({equalScalar:is,typed:tt}),Jr=Oy({typed:tt}),ph=Sy({typed:tt}),wM=Ux({typed:tt}),rs=Rx({Matrix:Yu,equalScalar:is,typed:tt}),bM=Jx({typed:tt}),Zu=zx({BigNumber:Sa,typed:tt}),cn=Wx({DenseMatrix:Pr,Matrix:Yu,SparseMatrix:rs,typed:tt}),TM=ky({isInteger:dh,matrix:cn,typed:tt}),CM=Yy({matrix:cn,typed:tt}),gu=Zy({BigNumber:Sa,config:Hn,matrix:cn,typed:tt}),Ku=Py({isInteger:dh,matrix:cn,typed:tt}),FM=Gx({Fraction:hh,typed:tt}),RM=Uy({BigNumber:Sa,DenseMatrix:Pr,SparseMatrix:rs,config:Hn,matrix:cn,typed:tt}),ju=Jy({bignumber:Zu,fraction:FM,number:wM}),PM=Xy({matrix:cn,config:Hn,typed:tt}),NM=nM({DenseMatrix:Pr,SparseMatrix:rs,bignumber:Zu,concat:Ku,config:Hn,matrix:cn,typed:tt}),mh=qx({typed:tt}),_u=hM({DenseMatrix:Pr,SparseMatrix:rs,addScalar:Aa,concat:Ku,equalScalar:is,matrix:cn,typed:tt}),Ju=eM({numeric:ju,typed:tt}),LM=sM({DenseMatrix:Pr,SparseMatrix:rs,bignumber:Zu,concat:Ku,config:Hn,matrix:cn,typed:tt}),gh=uM({config:Hn,larger:LM,numeric:ju,typed:tt}),_h=lM({config:Hn,numeric:ju,smaller:NM,typed:tt}),IM=pM({addScalar:Aa,conj:SM,multiplyScalar:ph,size:PM,typed:tt}),wa=wy({addScalar:Aa,dot:IM,equalScalar:is,matrix:cn,multiplyScalar:ph,typed:tt}),UM=gM({divideScalar:Ju,isZero:AM,matrix:cn,multiply:wa,subtractScalar:bM,typed:tt,unaryMinus:mh}),BM=vM({abs:DM,addScalar:Aa,det:UM,divideScalar:Ju,identity:RM,matrix:cn,multiply:wa,typed:tt,unaryMinus:mh}),OM=yM({divideScalar:Ju,equalScalar:is,inv:BM,matrix:cn,multiply:wa,typed:tt});function zM(n){const e=n.getContext("2d",{willReadFrequently:!0}),t=n.width,i=n.height,r=e.getImageData(0,0,t,i).data;let s=t,a=0,o=i,u=0;for(let g=0;g<i;g++)for(let p=0;p<t;p++){let A=(g*t+p)*4,v=r[A],E=r[A+1],y=r[A+2],x=r[A+3];(v!==255||E!==255||y!==255||x!==255)&&(s=Math.min(s,p),a=Math.max(a,p),o=Math.min(o,g),u=Math.max(u,g))}if(a<s||u<o)return null;let c=(s+a)/2,l=(o+u)/2,f=Math.max(a-s,u-o),d=Math.max(0,Math.round(c-f/2)),m=Math.max(0,Math.round(l-f/2)),_=Math.min(t,d+f),h=Math.min(i,m+f);return[d,m,_,h]}function HM(n,e,t){const i=zM(n);if(!i)return Array.from({length:28},()=>Array(28).fill(255));const[r,s,a,o]=i,u=a-r,c=o-s;e.width=u,e.height=c,e.getContext("2d").drawImage(n,r,s,u,c,0,0,u,c);const f=t.getContext("2d",{willReadFrequently:!0});f.drawImage(e,0,0,u,c,0,0,28,28);const d=f.getImageData(0,0,28,28).data,m=[];for(let _=0;_<28;_++){const h=[];for(let g=0;g<28;g++){const p=(_*28+g)*4,A=d[p];h.push(A)}m.push(h)}return m}function vh(n,e){const t=n.children.length,i=e.children.length,s=i*t*2,a=new Float32Array(s*3),o=new Float32Array(s*3).fill(1);let u=0;for(let f=0;f<t;f++){const d=new Z;for(let m=0;m<i;m++){const _=new Z;e.children[m].getWorldPosition(_),n.children[f].getWorldPosition(d),[d,_].forEach(h=>{a[u*3]=h.x,a[u*3+1]=h.y,a[u*3+2]=h.z,u++})}}const c=new zn;c.setAttribute("position",new vn(a,3)),c.setAttribute("color",new vn(o,3));const l=new Cu({vertexColors:!0,linewidth:1,transparent:!0,opacity:.2});return new gf(c,l)}function Eo(n){return Jr(n,e=>Math.max(0,e))}function VM(n){const e=$u(n),t=_h(e),i=gh(e);return i===t?Jr(n,()=>.5):Jr(n,function(r){return(r-t)/(i-t)})}function Hl(n,e){if(n&&n.geometry){const t=VM(e),i=n.geometry.getAttribute("color");let r=0;for(let s=0;s<t.length;s++){const a=t[s];for(let o=0;o<a.length;o++){const u=a[o];for(let c=0;c<6;c++)i.array[r++]=u}}i.needsUpdate=!0}}function GM(n){return n.map(e=>e.map(t=>t/255))}function kM(n,e=.5,t=.5){return n.map(i=>i.map(r=>(r-e)/t))}function WM(n){n=kM(GM(n));const e=n.length,t=n[0].length;let i=new Array(e*t);for(let r=0;r<t;r++)for(let s=0;s<e;s++){const a=n[r][s],o=r*28+s;i[o]=a}return i}function Ri(n,e,t=[1,1,1]){const i=e.length,r=e[0].length;for(let s=0;s<i;s++)for(let a=0;a<r;a++){const o=s*r+a,u=n.children[o],c=e[s][a];u.material.color.setRGB(c*t[0],c*t[1],c*t[2])}}function Vl(n,e,t){return _u(wa([n],CM(e)),t)[0]}function Gl(n,e,t=null,i=0){Array.isArray(e)||(e=[e,e]),t===null?t=e:Array.isArray(t)||(t=[t,t]),Array.isArray(i)||(i=[i,i]);const[r,s]=[n.length,n[0].length],[a,o]=e,[u,c]=t,[l,f]=i,d=Math.floor((r+2*l-a)/u+1),m=Math.floor((s+2*f-o)/c+1),_=Array(d).fill(0).map(()=>Array(m).fill(0));for(let h=0;h<d;h++)for(let g=0;g<m;g++){let p=-1/0;for(let A=0;A<a;A++)for(let v=0;v<o;v++){const E=h*u+A-l,y=g*c+v-f;if(E>=0&&E<r&&y>=0&&y<s){const x=n[E][y];x>p&&(p=x)}}_[h][g]=p}return _}const XM=document.createElement("canvas"),Qu=document.createElement("canvas");Qu.width=28;Qu.height=28;const bt=document.createElement("canvas");bt.width=256;bt.height=256;bt.style.border="1px solid black";bt.style.position="absolute";bt.style.left="10px";bt.style.top="10px";document.body.appendChild(bt);const un=bt.getContext("2d",{willReadFrequently:!0});un.fillStyle="white";un.fillRect(0,0,bt.width,bt.height);const Nr=document.createElement("button");Nr.innerText="Clear Canvas";Nr.style.position="absolute";Nr.style.left="10px";Nr.style.top="276px";document.body.appendChild(Nr);Nr.addEventListener("click",()=>{un.clearRect(0,0,bt.width,bt.height),un.fillStyle="white",un.fillRect(0,0,bt.width,bt.height),os()});const Di=document.createElement("div");Di.innerText="Guess:";Di.style.position="absolute";Di.style.color="white";Di.style.background="black";Di.style.left="280px";Di.style.top="15px";document.body.appendChild(Di);let Eh=[],xh=[],yh=[],Mh=[],vu=[],Dh=[],Eu=[],Sh=[],ba=!1;bt.addEventListener("mousedown",n=>{ba=!0;const e=bt.getBoundingClientRect();un.beginPath(),un.moveTo(n.clientX-e.left,n.clientY-e.top)});bt.addEventListener("mousemove",n=>{if(!ba)return;const e=bt.getBoundingClientRect();un.lineTo(n.clientX-e.left,n.clientY-e.top),un.strokeStyle="black",un.lineWidth=16,un.lineCap="round",un.lineJoin="round",un.stroke(),os()});bt.addEventListener("mouseup",()=>{ba=!1,os()});bt.addEventListener("mouseleave",()=>{ba=!1,os()});const En=new Yd;En.background=new st(3158064);const Cr=new _n(45,window.innerWidth/window.innerHeight,.1,1e3);Cr.position.set(100,30,50);Cr.lookAt(new Z(0,0,-20));const ss=new O_({antialias:!0});ss.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(ss.domElement);const as=new H_(Cr,ss.domElement);as.enableDamping=!0;as.dampingFactor=.1;as.enableZoom=!0;as.enablePan=!0;function dt(n,e,t,i,r,s=1,a=1.2){const o=new Wr,u=-((e-1)*a)/2,c=-((n-1)*a)/2;for(let l=0;l<n;l++)for(let f=0;f<e;f++){const d=new Fr(s,s,s),m=new Tu({color:16777215}),_=new In(d,m);_.position.x=t+u+f*a,_.position.y=i-(c+l*a),_.position.z=r,l==0&&f==0&&console.log(_.position.x,_.position.y),l==27&&f==27&&console.log(_.position.x,_.position.y),_.material.color.setRGB(1,1,1),o.add(_)}return o}const ec=new tp(200,50);ec.position.y=-20;ec.position.z=-40;En.add(ec);const Ah=dt(28,28,0,0,0);En.add(Ah);const Lr=[];Lr.push(dt(28,28,-20,10,-20,.5,.6));Lr.push(dt(28,28,-20,-10,-20,.5,.6));Lr.push(dt(28,28,20,10,-20,.5,.6));Lr.push(dt(28,28,20,-10,-20,.5,.6));Lr.forEach(n=>En.add(n));const Ir=[];Ir.push(dt(14,14,-20,8,-40,.5,.6));Ir.push(dt(14,14,-20,-8,-40,.5,.6));Ir.push(dt(14,14,20,8,-40,.5,.6));Ir.push(dt(14,14,20,-8,-40,.5,.6));Ir.forEach(n=>En.add(n));const Vn=[];Vn.push(dt(14,14,-30,8,-60,.5,.6));Vn.push(dt(14,14,-30,-8,-60,.5,.6));Vn.push(dt(14,14,-10,8,-60,.5,.6));Vn.push(dt(14,14,-10,-8,-60,.5,.6));Vn.push(dt(14,14,10,8,-60,.5,.6));Vn.push(dt(14,14,10,-8,-60,.5,.6));Vn.push(dt(14,14,30,8,-60,.5,.6));Vn.push(dt(14,14,30,-8,-60,.5,.6));Vn.forEach(n=>En.add(n));const Rn=[];Rn.push(dt(7,7,-15,5,-80,.5,.6));Rn.push(dt(7,7,-15,-5,-80,.5,.6));Rn.push(dt(7,7,-5,5,-80,.5,.6));Rn.push(dt(7,7,-5,-5,-80,.5,.6));Rn.push(dt(7,7,5,5,-80,.5,.6));Rn.push(dt(7,7,5,-5,-80,.5,.6));Rn.push(dt(7,7,15,5,-80,.5,.6));Rn.push(dt(7,7,15,-5,-80,.5,.6));Rn.forEach(n=>En.add(n));const Ta=dt(20,1,0,0,-100);En.add(Ta);const pa=dt(10,1,0,0,-120);En.add(pa);const wh=[];Rn.forEach((n,e)=>{const t=vh(n,Ta);En.add(t),wh.push(t)});const bh=vh(Ta,pa);En.add(bh);function os(){let n=HM(bt,XM,Qu),e=WM(n);Ri(Ah,OM(n,255));const t=kl([TM(e,[28,28])],Eh,xh,1,1,3),i=Eo(t);Lr.forEach((_,h)=>{Ri(_,lr(i[h]),[1,0,0])});const r=i.map(_=>Gl(_,2));Ir.forEach((_,h)=>{Ri(_,lr(r[h]),[0,1,0])});const s=kl(r,yh,Mh,1,1,3),a=Eo(s);Vn.forEach((_,h)=>{Ri(_,lr(a[h]),[1,0,0])});const o=a.map(_=>Gl(_,2));Rn.forEach((_,h)=>{Ri(_,lr(o[h]),[0,1,0])});const u=$u(o),c=Eo(Vl(u,vu,Dh));Ri(Ta,lr(c.map(_=>[_])));const l=Vl(c,Eu,Sh);Ri(pa,lr(l.map(_=>[_])));let f=Math.max(...l),d=l.indexOf(f);Di.innerText="Guess: "+d,pa.children[d].material.color.setRGB(1,1,0)}function qM(n,e){const t=n.length,i=n[0].length,r=gu(t+2*e,i+2*e).toArray();for(let s=0;s<t;s++)for(let a=0;a<i;a++)r[s+e][a+e]=n[s][a];return r}function kl(n,e,t,i,r,s){const a=Math.floor((n[0].length+2*r-s)/i)+1,o=Math.floor((n[0][0].length+2*r-s)/i)+1,u=[];for(let c in e){let l=gu(a,o).toArray();const f=t[c];for(let d in e[c]){const m=qM(n[d],r),_=e[c][d],h=gu(a,o).toArray();for(let g=0;g<m.length-(s-1);g++)for(let p=0;p<m[g].length-(s-1);p++)h[g][p]=YM(m,g,p,s,_);l=_u(l,h)}u.push(_u(l,f))}return u}function lr(n,e=0,t=1){const i=$u(n),r=_h(i),s=gh(i);return r===s?Jr(n,()=>e):Jr(n,a=>e+(a-r)*(t-e)/(s-r))}function YM(n,e,t,i,r){let s=0;for(let a=0;a<i;a++)for(let o=0;o<i;o++)s+=n[e+a][t+o]*r[a][o];return s}function Th(){requestAnimationFrame(Th),as.update(),ss.render(En,Cr)}Th();window.addEventListener("resize",()=>{Cr.aspect=window.innerWidth/window.innerHeight,Cr.updateProjectionMatrix(),ss.setSize(window.innerWidth,window.innerHeight)});fetch("simple_cnn_model.json").then(n=>n.json()).then(n=>{const e=n.state_dict;Eh=e["conv1.weight"],xh=e["conv1.bias"],yh=e["conv2.weight"],Mh=e["conv2.bias"],vu=e["fc1.weight"],Dh=e["fc1.bias"],Eu=e["fc2.weight"],Sh=e["fc2.bias"],wh.forEach((t,i)=>{Hl(t,vu)}),Hl(bh,Eu),os()});
