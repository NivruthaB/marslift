"use strict";(self["webpackChunkspacify"]=self["webpackChunkspacify"]||[]).push([[944],{5944:function(e,n,a){a.r(n),a.d(n,{default:function(){return y}});var t=a(3396),l=a(7139);const i=e=>((0,t.dD)("data-v-581c246d"),e=e(),(0,t.Cn)(),e),r=i((()=>(0,t._)("div",{class:"next-launch-first-background"},null,-1))),c=i((()=>(0,t._)("div",{class:"next-launch-background animate__animated animate__slideInDown animate__delay-1s"},null,-1))),o={key:0},s={key:2,class:"container"},u=i((()=>(0,t._)("div",{class:"page-title"},"Latest Launch",-1))),d={class:"card-container change-color"},_=i((()=>(0,t._)("div",null,"Watch the video to know more about it.",-1))),h=["href"];function k(e,n,a,i,k,m){const v=(0,t.up)("Loading");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,c,i.error?((0,t.wg)(),(0,t.iD)("p",o,"Something went wrong...")):(0,t.kq)("",!0),i.loading?((0,t.wg)(),(0,t.j4)(v,{key:1})):((0,t.wg)(),(0,t.iD)("div",s,[u,(0,t._)("div",d,[(0,t._)("div",null,"Mission Name: "+(0,l.zw)(i.result.launchNext.mission_name),1),(0,t._)("div",null,"Rocket Name: "+(0,l.zw)(i.result.launchNext.rocket.rocket_name),1),(0,t._)("div",null,"Time: "+(0,l.zw)(m.format_date(i.result.launchNext.launch_date_local)),1),_,(0,t._)("a",{href:i.result.launchNext.links.video_link,target:"_blank"},"Click here",8,h)])]))],64)}var m=a(7417),v=a(13),g=a(6797),f=a.n(g);const w=m.ZP`
  query NextLaunch {
    launchNext {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;var p={name:"NextLaunch",components:{},setup(){const{result:e,error:n,loading:a}=(0,v.aM)(w);return{result:e,error:n,loading:a}},methods:{format_date(e){if(e)return f()(String(e)).format("YYYY-MM-DD HH:MM:sss")}}},x=a(89);const N=(0,x.Z)(p,[["render",k],["__scopeId","data-v-581c246d"]]);var y=N}}]);
//# sourceMappingURL=944.660381f6.js.map