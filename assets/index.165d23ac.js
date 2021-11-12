import{_ as x}from"./WalletAddress.5041787c.js";import{_ as w,a as y}from"./index.c43c1e88.js";import{f,o,c as n,m as c,F as u,g as k,a,k as d,i as g,h as b}from"./vendor.309dbb5d.js";import"./debounce.dc046047.js";const v={data(){return{wallets:[],open_wallet:null,show_key:!1,show_send:!1,show_receive:!1}},methods:{export_wallets(){this.download("viscoin.net.json",JSON.stringify(this.wallets,null,4))},download(e,s){const t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(s)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},generate_wallet(){const e=keygen(),s=addressFromPublicKey(publicKeyFromPrivateKey(e)),t=Address.convertToChecksumAddress(s),r=base58.encode(e),l=base58.encode(t);this.wallets.find(i=>i.key===r)||this.wallets.push({key:r,address:l})},open(e){this.open_wallet?.key===e.key?this.open_wallet=null:this.open_wallet=e,this.show_key=!1},del(e){this.wallets=this.wallets.filter(s=>s.key!==e.key),this.open_wallet=null}},mounted(){document.title="Viscoin.net - Wallet",localStorage.keys&&(this.wallets=JSON.parse(localStorage.keys).map(e=>{const s=base58.decode(e),t=addressFromPublicKey(publicKeyFromPrivateKey(s)),r=Address.convertToChecksumAddress(t),l=base58.encode(r);return{key:e,address:l}}))},watch:{wallets:{handler(e){localStorage.keys=JSON.stringify(e.map(s=>s=s.key))},deep:!0}}},C={key:0,class:"prose prose-discord dark:prose-light lg:prose-lg px-6 mx-auto pb-8 w-full"},A=a("div",{class:"max-w-3xl sm:mx-auto px-8 sm:px-16 flex flex-col gap-2 md:px-12"},[a("h2",null," Viscoin wallet "),a("p",null," This is a browser based Viscoin wallet which means your private keys are stored in localStorage in your browser. A hacker could steal your private keys if they get access to your computer since localStorage is not encrypted. "),a("p",null," The best way to store your private keys is by using the official built in Viscoin wallet found in Viscoin source code since it has a built in encryption feature. "),a("h3",null,"Get started"),a("p",null," Create a new wallet by clicking Generate. You can also choose import an existing wallet by clicking Import. ")],-1),S=[A],j={key:1,class:"xl:grid xl:-grid-cols-3 xl:gap-x-12 xl:max-w-7xl max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 py-10 md:px-12"},V={style:{"user-select":"none"},class:"mb-20"},F={key:0,class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex gap-10 pt-10 md:px-12 justify-center"},K={key:1,class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex gap-10 py-5 md:px-12 justify-center"};function N(e,s,t,r,l,i){const m=x,p=y,h=f("router-link");return o(),n(u,null,[!l.wallets.length&&!e.show_import?(o(),n("div",C,S)):c("",!0),l.wallets.length&&!e.show_import?(o(),n("div",j,[(o(!0),n(u,null,k(l.wallets,_=>(o(),b(m,{title:"address (public)",class:"max-w-screen-sm",address:_.address},null,8,["address"]))),256))])):c("",!0),a("div",V,[e.show_import?c("",!0):(o(),n("div",F,[d(h,{to:"/wallet/import"},{default:g(()=>[d(p,{text:"Import"})]),_:1}),d(p,{onClick:i.generate_wallet,text:"Generate"},null,8,["onClick"])])),!e.show_import&&l.wallets.length?(o(),n("div",K,[d(p,{onClick:i.export_wallets,text:"Save Wallet .json"},null,8,["onClick"])])):c("",!0)])],64)}var G=w(v,[["render",N]]);export{G as default};