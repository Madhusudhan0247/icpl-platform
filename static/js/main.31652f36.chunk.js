(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.4d761b59.png"},function(e,t,n){e.exports=n.p+"static/media/monkey-video.aa35f738.mp4"},function(e,t,n){e.exports=n.p+"static/media/monkey.c876728e.png"},function(e,t,n){e.exports=n(19)},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),l=n.n(r),i=(n(18),n(4)),c=n(1),s=n(7),m=n.n(s);const p={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 20px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},d={display:"flex",alignItems:"center"},f={width:"40px",height:"40px",marginRight:"10px"},g={fontSize:"24px",fontWeight:"bold",margin:0},u={display:"flex",gap:"20px"},x={textDecoration:"none",color:"#333",fontSize:"16px",fontWeight:"500"};var y=()=>o.a.createElement("nav",{style:p},o.a.createElement("div",{style:d},o.a.createElement("img",{src:m.a,alt:"Logo",style:f}),o.a.createElement("h1",{style:g},"ICPL")),o.a.createElement("div",{style:u},o.a.createElement("a",{href:"#freehit",style:x},"What is FreeHit?"),o.a.createElement("a",{href:"#community",style:x},"Community"),o.a.createElement("a",{href:"#faq",style:x},"FAQ"),o.a.createElement(i.b,{to:"/news",style:x},"News")," "));const h={backgroundColor:"#000",color:"#fff",textAlign:"center",padding:"30px 0",fontSize:"14px",position:"relative",bottom:0,width:"100%",height:"40px"};var E=()=>o.a.createElement("footer",{style:h},"\xa9 ICPL 2024");const b="https://via.placeholder.com/300x150?text=No+Image",C={container:{backgroundColor:"#171C2C",color:"#f0f0f0",padding:"20px",minHeight:"100vh",fontFamily:"Arial, sans-serif"},title:{textAlign:"left",fontSize:"2.5rem",marginBottom:"20px",color:"#fff"},cardContainer:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",padding:"10px",overflowY:"auto",maxHeight:"80vh"},card:{backgroundColor:"#1f1f1f",color:"#f0f0f0",textDecoration:"none",borderRadius:"8px",overflow:"hidden",transition:"transform 0.3s ease-in-out",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",transform:"scale(1)",cursor:"pointer"},cardContent:{padding:"10px"},image:{width:"100%",height:"150px",objectFit:"cover"},cardTitle:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px",lineHeight:"24px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},cardDate:{fontSize:"0.8rem",color:"#aaaaaa",marginBottom:"10px",textAlign:"left",fontWeight:"normal"},cardDescription:{fontSize:"14px",lineHeight:"1.4",fontWeight:"normal",textAlign:"left",color:"#C5C6CA",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},loading:{textAlign:"center",fontSize:"1.5rem",marginTop:"20px",color:"#fff"},hover:{transform:"scale(1.05)"}};var v=()=>{const[e,t]=Object(a.useState)([]),[n,r]=Object(a.useState)(!0);return Object(a.useEffect)(()=>{(async()=>{try{const n=await fetch("http://localhost:8000/api/news"),a=await n.text(),o=(new DOMParser).parseFromString(a,"application/xml"),l=e=>{const t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},i=Array.from(o.getElementsByTagName("item")).map(e=>{var t,n,a,o,r;return{title:(null===(t=e.getElementsByTagName("title")[0])||void 0===t?void 0:t.textContent)||"No Title",link:(null===(n=e.getElementsByTagName("link")[0])||void 0===n?void 0:n.textContent)||"#",description:l((null===(a=e.getElementsByTagName("description")[0])||void 0===a?void 0:a.textContent)||"No Description"),pubDate:(null===(o=e.getElementsByTagName("pubDate")[0])||void 0===o?void 0:o.textContent)||"No Date",image:(null===(r=e.getElementsByTagName("enclosure")[0])||void 0===r?void 0:r.getAttribute("url"))||b}});t(i),r(!1)}catch(e){console.error("Error fetching news:",e),r(!1)}})()},[]),n?o.a.createElement("div",{style:C.loading},"Loading news..."):o.a.createElement("div",{style:C.container},o.a.createElement("h1",{style:C.title},"Latest Crypto News"),o.a.createElement("div",{style:C.cardContainer},e.map((e,t)=>o.a.createElement("a",{key:t,href:e.link,target:"_blank",rel:"noopener noreferrer",style:C.card},o.a.createElement("img",{src:e.image,alt:e.title,style:C.image,onError:e=>e.target.src=b}),o.a.createElement("div",{style:C.cardContent},o.a.createElement("h3",{style:C.cardTitle},e.title),o.a.createElement("p",{style:C.cardDate},new Date(e.pubDate).toDateString()),o.a.createElement("p",{style:C.cardDescription},e.description))))))},k=n(3),w=n(8),T=n.n(w);const S={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"40px",backgroundColor:"#171C2C",color:"#fff"},A={flex:1,display:"flex",justifyContent:"center",alignItems:"center"},F={borderRadius:"50%",overflow:"hidden",width:"500px",height:"500px"},H={width:"100%",height:"100%",objectFit:"cover"},B={flex:1,paddingLeft:"20px",textAlign:"left"},D={fontSize:"24px",fontWeight:"bold",marginBottom:"36px",textAlign:"left"},W={color:"#DA625C"},z={marginBottom:"24px",fontSize:"18px",textAlign:"left"},j={display:"flex",gap:"20px",marginTop:"20px"},I={padding:"15px 30px",fontSize:"16px",backgroundColor:"#DA625C",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"normal",transition:"background-color 0.3s ease"},N=Object(k.a)(Object(k.a)({},I),{},{backgroundColor:"#D0362E"}),O=Object(k.a)(Object(k.a)({},I),{},{backgroundColor:"#333745"}),L={marginTop:"20px",fontSize:"16px",opacity:"0.8",textAlign:"left"};var R=()=>o.a.createElement("div",{style:S},o.a.createElement("div",{style:A},o.a.createElement("div",{style:F},o.a.createElement("video",{src:T.a,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:H}))),o.a.createElement("div",{style:B},o.a.createElement("h2",{style:D},"Token: FreeHit Coin (FHT) - ",o.a.createElement("span",{style:W},"Coming soon...")),o.a.createElement("p",{style:z},"Current Price: $0.0000"),o.a.createElement("p",{style:z},"Market Cap: $000,000"),o.a.createElement("p",{style:z},"Total Transactions: 00,000"),o.a.createElement("p",{style:z},"Circulating Supply: 000,000,000 FHT"),o.a.createElement("div",{style:j},o.a.createElement("button",{style:N},"Buy FreeHit - FHT"),o.a.createElement("button",{style:O},"View on Blockchain")),o.a.createElement("p",{style:L},"Rewards Distributed: 0,000,000 FHT.")));var M=()=>o.a.createElement("div",{style:{padding:"40px",textAlign:"center",color:"#000"}},o.a.createElement("h2",null,"NFT Collection"),o.a.createElement("p",null,"This section will showcase NFT collections in the future."));var P=()=>o.a.createElement("div",{style:{padding:"40px",textAlign:"center",color:"#000"}},o.a.createElement("h2",null,"Merchandise"),o.a.createElement("p",null,"This section will showcase games and tasks in the future."));var q=()=>o.a.createElement("div",{style:{padding:"40px",textAlign:"center",color:"#000"}},o.a.createElement("h2",null,"Playground"),o.a.createElement("p",null,"This section will showcase games and tasks in the future.")),J=n(9),Y=n.n(J);const G={display:"flex",justifyContent:"space-between",alignItems:"left",padding:"80px",backgroundColor:"#D0362E",color:"#ffffff"},$={flex:1,paddingRight:"30px",textAlign:"left"},_={fontSize:"40px",fontWeight:"bold",lineHeight:"1.2",textTransform:"uppercase",marginBottom:"50px",fontFamily:'"Porter Sans Block", sans-serif',color:"#ffffff",textAlign:"left"},K={fontSize:"18px",lineHeight:"1.5",marginBottom:"40px",textAlign:"left"},Q={display:"flex",gap:"30px",marginBottom:"40px",alignItems:"center"},U={padding:"16px 20px",border:"none",backgroundColor:"#DA625C",color:"#fff",borderRadius:"5px",cursor:"pointer",fontWeight:"normal",width:"200px"},V={padding:"16px 20px",border:"none",backgroundColor:"#171C2C",color:"#fff",borderRadius:"5px",cursor:"pointer",fontWeight:"normal",width:"200px"},X={fontSize:"15px",lineHeight:"1.5",opacity:"0.9",textAlign:"left",marginBottom:"100px"},Z={flex:1,display:"flex",justifyContent:"center",alignItems:"center"},ee={width:"100%",maxWidth:"400px"};var te=()=>o.a.createElement("section",{style:G},o.a.createElement("div",{style:$},o.a.createElement("h1",{style:_},"THE ULTIMATE FAN TOKEN PLATFORM IS ALMOST HERE"),o.a.createElement("p",{style:K},"ICPL is the ultimate platform for sports fans to earn, play, and own."," ",o.a.createElement("span",{style:{fontWeight:"normal"}},"FreeHit")," is the token powering ICPL\u2019s games, NFTs, and merchandise."),o.a.createElement("div",{style:Q},o.a.createElement("button",{style:U},"Learn More"),o.a.createElement("button",{style:V},"Buy FreeHit")),o.a.createElement("p",{style:X},"Buy FreeHit - FHT tokens, explore our NFTs, or jump into the action with Sports-themed games. It\u2019s time to bring your sports dreams to life.")),o.a.createElement("div",{style:Z},o.a.createElement("img",{src:Y.a,alt:"Monkey Mascot",style:ee})));const ne={display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#D0362E",margin:"0px 80px"},ae={flex:1,padding:"24px 20px",backgroundColor:"#D0362E",color:"#000",border:"none",borderBottom:"none",textAlign:"center",fontSize:"16px",cursor:"pointer",outline:"none",transition:"background-color 0.3s ease"},oe=Object(k.a)(Object(k.a)({},ae),{},{backgroundColor:"#171C2C",color:"#fff"}),re={padding:"40px",backgroundColor:"#ffffff"};var le=()=>{var e;const[t,n]=Object(a.useState)("Token"),[r,l]=Object(a.useState)(null),i=[{name:"Token",component:o.a.createElement(R,null)},{name:"NFT's",component:o.a.createElement(M,null)},{name:"Merchandise",component:o.a.createElement(P,null)},{name:"Playground",component:o.a.createElement(q,null)}],c=null===(e=i.find(e=>e.name===t))||void 0===e?void 0:e.component;return o.a.createElement("div",null,o.a.createElement("div",{style:ne},i.map(e=>{const a=t===e.name,i=r===e.name;return o.a.createElement("button",{key:e.name,onClick:()=>n(e.name),onMouseEnter:()=>l(e.name),onMouseLeave:()=>l(null),style:a?oe:i?Object(k.a)(Object(k.a)({},ae),{},{backgroundColor:"#DA625C"}):ae},e.name)})),o.a.createElement("div",{style:re},c))};const ie={backgroundColor:"#ffffff",padding:"60px 20px",textAlign:"center"},ce={fontSize:"44px",fontWeight:"bold",marginBottom:"40px",fontFamily:"inherit"},se={color:"#DA625C",fontSize:"36px",fontWeight:"bold"},me={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",maxWidth:"1200px",margin:"0 auto"},pe={backgroundColor:"#f9f9f9",padding:"20px",borderRadius:"10px",textAlign:"center"},de={fontSize:"30px",fontWeight:"bold",marginBottom:"10px",fontFamily:"inherit"},fe={fontSize:"16px",color:"#333",fontFamily:"inherit"},ge={color:"#DA625C",textDecoration:"none",fontWeight:"bold",cursor:"pointer"};var ue=()=>{return o.a.createElement("div",{style:ie},o.a.createElement("h2",{style:ce},o.a.createElement("span",{style:se},"\u2014")," How to Get FreeHit ",o.a.createElement("span",{style:se},"\u2014")),o.a.createElement("div",{style:me},[{title:"Buy on DEX",description:"Buy FreeHit on Raydium by creating an account and start earning",link:"https://raydium.io/swap/",linkText:"Raydium"},{title:"Earn in Games",description:"Play games or complete challenges to earn FreeHit tokens"},{title:"Join Airdrops",description:"Stay Connected to get updates on upcoming or ongoing airdrop campaigns."},{title:"Referrals",description:"Bring your friends and get rewarded"}].map((e,t)=>o.a.createElement("div",{key:t,style:pe},o.a.createElement("h3",{style:de},e.title),o.a.createElement("p",{style:fe},e.description," ",e.link&&o.a.createElement("a",{href:e.link,style:ge,target:"_blank",rel:"noopener noreferrer"},e.linkText))))))};const xe={padding:"40px",backgroundColor:"#171C2C",textAlign:"center"},ye={fontSize:"32px",fontWeight:"bold",marginBottom:"36px",color:"#DA625C"},he={maxWidth:"800px",margin:"0 auto",textAlign:"left"},Ee={borderBottom:"1px solid #333745",padding:"15px 0",marginBottom:"20px"},be={fontSize:"20px",fontWeight:"normal",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",color:"#fff"},Ce={marginTop:"10px",fontSize:"16px",color:"#C5C6CA"},ve={fontSize:"18px",fontWeight:"normal",color:"#fff"},ke={border:"1px solid #fff",borderRadius:"50%",padding:"3px",fontSize:"14px",lineHeight:"1",display:"inline-block",width:"20px",height:"20px",textAlign:"center"};var we=()=>{const[e,t]=Object(a.useState)(null);return o.a.createElement("div",{style:xe},o.a.createElement("h2",{style:ye},"Frequently asked questions"),o.a.createElement("div",{style:he},[{question:"What is FreeHit used for?",answer:"FreeHit (FHT) is the utility token powering the ICPL platform. It enables fans to engage with NFTs, merchandise, and more."},{question:"How do I earn FreeHit?",answer:"You can earn FreeHit through games, referrals, and participation in events."},{question:"Is FreeHit secure?",answer:"Yes, FreeHit is built on a secure blockchain platform with measures to protect your investments."}].map((n,a)=>o.a.createElement("div",{key:a,style:Ee},o.a.createElement("div",{style:be,onClick:()=>(n=>{t(e===n?null:n)})(a)},n.question,o.a.createElement("span",{style:ve},e===a?o.a.createElement("span",{style:ke},"\u25b2"):o.a.createElement("span",{style:ke},"\u25bc"))),e===a&&o.a.createElement("div",{style:Ce},n.answer)))))};var Te=function(){return o.a.createElement(i.a,null,o.a.createElement(y,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",element:o.a.createElement(o.a.Fragment,null,o.a.createElement(te,null),o.a.createElement(le,null),o.a.createElement(ue,null),o.a.createElement(we,null),o.a.createElement(E,null))}),o.a.createElement(c.a,{path:"/news",element:o.a.createElement(v,null)}),o.a.createElement(c.a,{path:"/token",element:o.a.createElement(R,null)}),o.a.createElement(c.a,{path:"/nfts",element:o.a.createElement(M,null)}),o.a.createElement(c.a,{path:"/merchandise",element:o.a.createElement(P,null)}),o.a.createElement(c.a,{path:"/playground",element:o.a.createElement(q,null)})))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Te,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.31652f36.chunk.js.map