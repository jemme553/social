(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{4812:function(e,t,a){let r,s,l;var o=Object.create,i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,h=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,y=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of p(t))u.call(e,s)||s===a||i(e,s,{get:()=>t[s],enumerable:!(r=n(t,s))||r.enumerable});return e},c=(e,t,a)=>(y(e,"symbol"!=typeof t?t+"":t,a),a),m={};((e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})})(m,{default:()=>g}),e.exports=d(i({},"__esModule",{value:!0}),m);var P=(l=null!=(r=a(2265))?o(h(r)):{},d(!s&&r&&r.__esModule?l:i(l,"default",{value:r,enumerable:!0}),r)),f=a(2975),b=a(4170);class g extends P.Component{constructor(){super(...arguments),c(this,"callPlayer",f.callPlayer),c(this,"mute",()=>{this.setVolume(0)}),c(this,"unmute",()=>{null!==this.props.volume&&this.setVolume(this.props.volume)}),c(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:t,config:a,onError:r,onDuration:s}=this.props,l=e&&e.match(b.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,f.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then(e=>{this.container&&(e.api.addReadyListener((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},l),e.api.renderPlayer({uuid:l,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(l).then(e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)}))},r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){let{display:e}=this.props;return P.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},P.default.createElement("div",{ref:this.ref}))}}c(g,"displayName","Vidyard"),c(g,"canPlay",b.canPlay.vidyard)}}]);