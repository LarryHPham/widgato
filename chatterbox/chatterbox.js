var chatterbox=chatterbox||[];var chatterLayer=chatterLayer||[];chatterbox[chatterbox.length]=function(e){console.log('Chatterbox ID: ',e);var t=location.protocol=='https:'?'https':'http',r=[{min:1200,widget:970,title:'Promoted Stories from the Chatter Network','class':'biggest'},{min:768,widget:970,title:'Promoted Stories from the Chatter Network','class':'bigger'},{min:650,widget:970,title:'Promoted Stories from the Chatter Network','class':'big'},{min:430,widget:970,title:'Promoted Stories','class':'small'},{min:0,widget:250,title:'Promoted Stories','class':'smallest'}],n={250:{url:t+'://w1.synapsys.us/widgets/dynamic_widget/dynamic_widget.html'},970:{url:t+'://w1.synapsys.us/widgets/dynamic_widget/dynamic_widget_970.html'}},s={'sportschatter.com':t+'://dw.synapsys.us/chatter_api.php?site=sportschatter.com','celebchatter.com':t+'://dw.synapsys.us/chatter_api.php?site=celebchatter.com','politicschatter.com':t+'://dw.synapsys.us/chatter_api.php?site=politicschatter.com','oddchatter.com':t+'://dw.synapsys.us/chatter_api.php?site=oddchatter.com'},a=t+'://w1.synapsys.us/widgets/chatterbox/chatterbox.js',i=function(){var e=top.location.host;var t=e.split('.');switch(t.length){case 0:case 1:case 2:break;default:if(t[t.length-3]=='att'&&t[t.length-2]=='yahoo'&&t[t.length-1]=='com'){e='att.yahoo.com'}else if(t[t.length-2]=='co'&&t[t.length-1]=='uk'){e=t[t.length-3]+'.'+t[t.length-2]+'.'+t[t.length-1]}else{e=t[t.length-2]+'.'+t[t.length-1]}break}return e}(),o=document.currentScript||function(){var e=document.getElementsByTagName('script');for(var t=e.length-1;t>=0;t--){if(e[t].src.indexOf(a)!=-1){return e[t]}}}(),c={},l=-1,d,h,u={dom:i,category:M('widget')===false?'nba':M('widget'),remn:false,carousel:true,rand:Math.floor(Math.random()*10)},m=M('rss')===false?'sportschatter.com':M('rss'),f=function(){if(m===false||typeof s[m]=='undefined'){m=i;if(typeof s[m]==='undefined'){return s['sportschatter.com']}}return s[m]}(),p=M('small')==='yes'?true:false,g=[],w=function(){if(i.indexOf('chatter')>-1){return i}return m.split('.')[0].replace('chatter','-chatter')+'.'+i}(),y=[],v,b=false,x=false;var _=true,E='//www.googletagmanager.com/gtm.js?id=GTM-WDG7BV&l=chatterLayer',A=document.getElementsByTagName('script');for(var k=0;k<A.length;k++){if(A[k].src.indexOf(E)!=-1){_=false}}if(_){var C=document.createElement('script');C.async=true;C.src='//www.googletagmanager.com/gtm.js?id=GTM-WDG7BV&l=chatterLayer';o.parentNode.insertBefore(C,o)}chatterLayer.push({event:'chatterboxPageView',rss:m,style:p?'3UP':'5PACK',widget:u.category});Array.prototype.randItem=function(){return this[Math.floor(Math.random()*this.length)]};Element.prototype.setAttributes=function(e){for(var t in e){if(t==='style'){for(var r in e[t]){this.style[r]=e[t][r]}}else if(t==='html'){this.innerHTML=e[t]}else if(t==='text'){this.innerText=e[t]}else{this.setAttribute(t,e[t])}}};Element.prototype.appendChildren=function(){for(var e=0;e<arguments.length;e++){if(typeof arguments[e].length!=='undefined'){for(var t=0;t<arguments[e].length;t++){this.appendChild(arguments[e][t])}}else{this.appendChild(arguments[e])}}};L();P();S();function L(){var e;if(window.XMLHttpRequest){e=new XMLHttpRequest}else{e=new ActiveXObject('Microsoft.XMLHTTP')}e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE){if(e.status==200){try{y=JSON.parse(e.responseText);for(var r=0;r<g.length;r++){g[r].getElementsByTagName('a')[0].href=t+'://'+w+y[r].link;g[r].querySelectorAll('.dw_item_title')[0].innerHTML=y[r].title;g[r].querySelectorAll('.dw_item_sub')[0].innerHTML=(m.charAt(0).toUpperCase()+m.slice(1)).replace('chatter','Chatter').split('.')[0];g[r].querySelectorAll('.dw_img')[0].setAttributes({style:{'background-image':'url(\''+function(e){try{var t=JSON.parse(atob(M('o',e)))}catch(r){var t={x:.5,y:.5}}return e.replace(/o=[^&$]+/,'o='+btoa(JSON.stringify({x:t.x,y:t.y,height:240,width:400})))}(y[r].thumbnail)+'\')'}});chatterLayer.push({event:'chatterboxImpression',article_url:m+y[r].link,style:p?'3UP':'5PACK',article_title:y[r].title})}return true}catch(n){console.log(n);var s='Error Parsing JSON'}}else{var s=e.statusText;if(e.status==500){try{s=JSON.parse(e.responseText).message}catch(n){console.log('No JSON message')}}s='HTTP Error ('+e.status+'): '+s}if(tries++>10){throw s}setTimeout(L,500)}};e.open('GET',f,true);e.send()}function P(){var r=document.createElement('link');r.setAttributes({href:t+'://fonts.googleapis.com/css?family=Lato',rel:'stylesheet',type:'text/css'});o.parentNode.insertBefore(r,o);var n=document.createElement('link');n.setAttributes({href:t+'://w1.synapsys.us/widgets/chatterbox/chatterbox.css',rel:'stylesheet',type:'text/css'});o.parentNode.insertBefore(n,o);d=document.createElement('div');d.setAttribute('class','dw_container');if(d.addEventListener){d.addEventListener('mouseover',T)}else if(d.attachEvent){d.attachEvent('onmouseover',T)}var s=document.createElement('div');s.setAttribute('class','dw_article');v=document.createElement('div');v.setAttribute('class','dw_title');for(var a=0;a<3;a++){var c=[document.createElement('a'),document.createElement('div'),document.createElement('div'),document.createElement('div'),document.createElement('div'),document.createElement('div')];c[1].appendChild(document.createElement('div'));c[0].setAttributes({onclick:'chatterbox['+e+'].a_click('+a+')',target:'_blank'});c[1].setAttribute('class','dw_img');c[2].setAttribute('class','dw_t_cont');c[3].setAttributes({'class':'dw_item_title',text:''});c[4].setAttributes({'class':'dw_item_sub',text:''});c[5].setAttribute('class','dw_article_link');c[2].appendChildren(c[3],c[4]);c[0].appendChildren(c[1],c[2]);c[5].appendChildren(c[0]);g[a]=c[5]}s.appendChildren(v,g);if(!p){var l={dom:i,remn:false,cat:'nba',type:'dynamic_nba',subd:false,src:'content.synapsys.us/l/n/index-mdb.php',name:i.split('.').join('_')+'_sports_widget_300x250',widU:'',widW:300,widH:0,adW:300,adH:250,ofx:0,ofy:0,rand:(Math.random()*1e6).toString()+(Math.random()*1e6).toString()};var u=document.createElement('script');u.src=t+'://content.synapsys.us/l/n/index-mdb.php?'+Object.keys(l).map(function(e){return encodeURIComponent(e)+'='+encodeURIComponent(l[e])}).join('&');h=document.createElement('iframe');h.setAttributes({scrolling:'no','class':'dw_iframe'});d.appendChildren(s,u,h)}else{d.appendChild(s)}o.parentElement.insertBefore(d,o)}function T(){if(x){return true}chatterLayer.push({event:'chatterMouseover',style:p?'3UP':'5PACK',rss:m,widget:u.category});x=true;d.removeEventListener('mouseover',T)}function S(){var e=d.parentElement.clientWidth;for(var t=0;t<r.length;t++){if(e>=r[t].min){break}}if(t==l){return false}l=t;d.setAttribute('class','dw_container '+r[t].class+(p!==false?' small_container':''));v.setAttributes({html:'<svg xmlns="http://www.w3.org/2000/svg" style="stroke:#ff3131;stroke-width:2px;fill:none;width:20.57px;height:18px;" viewBox="0 0 32 28"><path stroke-linecap="round" stroke-linejoin="round" d="m 4,14 l 12,12 l 12,-12 a 6 6 0 1 0 -10 -10 l -2, 2 l -2, -2 a 6 6 0 1 0 -10 10" /></svg> '+r[t].title});N(r[t].widget)}function N(e){if(p){return false}var t={};switch(e){case 250:t=n[250];break;default:t=n[970];break}if(t!=c){h.src='about:blank';c=t;setTimeout(function(){h.src=c.url+'?'+encodeURIComponent(JSON.stringify(u))},0)}}function M(e,t){t=t||o.src;var r=new RegExp('[?&]'+e.replace(/[\[\]]/g,'\\$&')+'(=([^&#]*)|&|#|$)');var n=r.exec(t);if(!n||!n[2]){return false}return decodeURIComponent(n[2].replace(/\+/g,' '))}function O(e){if(typeof y[e]=='undefined'){return true}chatterLayer.push({event:'article_click',article_url:m+y[e].link,article_title:y[e].title,style:p?'3UP':'5PACK'})}function H(){if(b){return true}var e={x:window.scrollX,y:window.scrollY,w:window.innerWidth,h:window.innerHeight},t={x:d.offsetLeft,y:d.offsetTop,w:d.offsetWidth,h:d.offsetHeight},r=t.w*t.h,n=U(e.x,e.w,t.x,t.w),s=U(e.y,e.h,t.y,t.h);dispArea=n*s,dispPerc=dispArea/r;if(dispPerc>=.6){b=true;chatterLayer.push({event:'chatterVisible',style:p?'3UP':'5PACK',rss:m,widget:u.category});window.removeEventListener('scroll',H)}}function U(e,t,r,n){if(e+t<r||e>r+n){return 0}if(e>r&&e+t<r+n||e<r&&e+t>r+n){return n}if(e>r){return r+n-e}if(r+n>e+t){return e+t-r}return 0}if(d.parentElement.addEventListener){window.addEventListener('resize',S,false);window.addEventListener('scroll',H,false)}else if(d.parentElement.attachEvent){window.attachEvent('onresize',S);window.attachEvent('onscroll',H)}return{cw:N,sc:S,a_click:O}}(chatterbox.length);
