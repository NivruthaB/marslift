"use strict";(self["webpackChunkspacify"]=self["webpackChunkspacify"]||[]).push([[968],{8049:function(e,n,a){a.d(n,{Z:function(){return _}});var t=a(3396);const i=e=>((0,t.dD)("data-v-4fc3c45e"),e=e(),(0,t.Cn)(),e),r={id:"loading-wrapper"},s=i((()=>(0,t._)("div",{id:"loading-content"},null,-1))),c=[s];function l(e,n,a,i,s,l){return(0,t.wg)(),(0,t.iD)("div",r,c)}var o={name:"LoadingScreen"},d=a(89);const u=(0,d.Z)(o,[["render",l],["__scopeId","data-v-4fc3c45e"]]);var _=u},9968:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var t=a(3396),i=a(7139);const r=e=>((0,t.dD)("data-v-0395e4d5"),e=e(),(0,t.Cn)(),e),s=r((()=>(0,t._)("div",{class:"latest-launches-first-background"},null,-1))),c=r((()=>(0,t._)("div",{class:"latest-launches-background animate__animated animate__slideInDown animate__delay-1s"},null,-1))),l={key:0},o={key:2,class:"container"},d=r((()=>(0,t._)("div",{class:"page-title"},"Latest Launch",-1))),u={class:"card-container change-color"},_=r((()=>(0,t._)("div",null,"Watch the video to know more about it.",-1))),v=["href"];function k(e,n,a,r,k,m){const h=(0,t.up)("Loading");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s,c,r.error?((0,t.wg)(),(0,t.iD)("p",l,"Something went wrong...")):(0,t.kq)("",!0),r.loading?((0,t.wg)(),(0,t.j4)(h,{key:1})):((0,t.wg)(),(0,t.iD)("div",o,[d,(0,t._)("div",u,[(0,t._)("div",null,"Mission Name: "+(0,i.zw)(r.result.launchLatest.mission_name),1),(0,t._)("div",null,"Rocket Name: "+(0,i.zw)(r.result.launchLatest.rocket.rocket_name),1),(0,t._)("div",null,"Time: "+(0,i.zw)(m.format_date(r.result.launchLatest.launch_date_local)),1),_,(0,t._)("a",{href:r.result.launchLatest.links.video_link,target:"_blank"},"Click here",8,v)])]))],64)}var m=a(7417),h=a(13),g=a(6797),f=a.n(g),p=a(8049);const w=m.ZP`
  query LatestLaunch {
    launchLatest {
      details
      id
      is_tentative
      launch_date_local
      mission_id
      mission_name
      rocket {
        rocket {
          active
          company
        }
        rocket_name
      }
      links {
        article_link
        video_link
      }
    }
  }
`;var L={name:"LatestLaunch",components:{Loading:p.Z},setup(){const{result:e,error:n,loading:a}=(0,h.aM)(w);return{result:e,error:n,loading:a}},methods:{format_date(e){if(e)return f()(String(e)).format("YYYY-MM-DD HH:MM:sss")}}},D=a(89);const y=(0,D.Z)(L,[["render",k],["__scopeId","data-v-0395e4d5"]]);var b=y}}]);
//# sourceMappingURL=968.b7c25f83.js.map