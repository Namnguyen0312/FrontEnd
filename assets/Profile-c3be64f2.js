import{_ as r,u as d,o as i,c as l,a as o,l as a,P as c,Q as p,p as m,k as _}from"./index-a1d859ff.js";const h={setup(){return{useAccount:d()}},data(){return{account:{}}},methods:{async updateUser(){try{this.account=await this.useAccount.Update(this.useAccount.account._id,this.account),await this.$router.push({name:"contactbook"})}catch(e){console.error(e)}}},mounted(){this.account=this.useAccount.account}},n=e=>(m("data-v-9b6e1c8a"),e=e(),_(),e),f=n(()=>o("span",{class:"h1"},"My Profile",-1)),A={class:"form-group"},v=n(()=>o("label",{for:"name"},"Name",-1)),b={class:"form-group"},w=n(()=>o("label",{for:"username"},"Username",-1)),y={class:"form-group"},U=n(()=>o("label",{for:"password"},"Password",-1)),g={class:"form-group"},x=n(()=>o("label",{for:"phone"},"Phone",-1)),P=n(()=>o("div",{class:"form-group"},[o("button",{class:"btn btn-primary"},"Save")],-1));function S(e,t,V,k,I,u){return i(),l("form",{onSubmit:t[4]||(t[4]=p((...s)=>u.updateUser&&u.updateUser(...s),["prevent"]))},[f,o("div",A,[v,a(o("input",{name:"name",type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>this.useAccount.account.name=s)},null,512),[[c,this.useAccount.account.name]])]),o("div",b,[w,a(o("input",{name:"username",type:"username",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>this.useAccount.account.username=s)},null,512),[[c,this.useAccount.account.username]])]),o("div",y,[U,a(o("input",{name:"password",type:"password",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>this.useAccount.account.password=s)},null,512),[[c,this.useAccount.account.password]])]),o("div",g,[x,a(o("input",{name:"phone",type:"tel",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>this.useAccount.account.phone=s)},null,512),[[c,this.useAccount.account.phone]])]),P],32)}const M=r(h,[["render",S],["__scopeId","data-v-9b6e1c8a"]]);export{M as default};
