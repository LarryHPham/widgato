"use strict";!function(){function e(){T=l.document.createElement("a"),T.className="to-left-rail",T.href=u+"/nfl",T.target="_blank",T.innerHTML='\n      <div id="to-left-ad">\n        <img class="to-left-ad-presented" src="'+v+'/presented_left.png">\n      </div>\n    ',k=l.document.createElement("a"),k.className="to-right-rail",k.href=u+"/nfl",k.target="_blank",k.innerHTML='\n      <div id="to-right-ad">\n        <img class="to-right-ad-presented" src="'+v+'/presented_right.png">\n      </div>\n    ',_.insertBefore(k,_.firstChild),_.insertBefore(T,_.firstChild);var e=l.document.getElementById("to-left-ad"),n=l.document.createElement("script");n.src=b+"://content.synapsys.us/embeds/mlb/deepdive_160x600/partner.js",e.insertBefore(n,e.firstChild);var t=l.document.getElementById("to-right-ad"),a=l.document.createElement("script");a.src=b+"://content.synapsys.us/embeds/mlb/deepdive_160x600/partner-right.js",t.insertBefore(a,t.firstChild),B=!0}function n(){S=l.document.createElement("div"),S.className="ddh-container",S.innerHTML='\n      <div class="ddh-media">\n        <button class="ddh-media-close">\n          <span class="ddh-icon-times"></span><br>\n          <span class="ddh-close-text">CLOSE</span>\n        </button>\n        <div class="ddh-media-content">\n          <div id="ddh-media-video"></div>\n          <a target="_blank" href="'+u+'/nfl">\n            <div class="ddh-media-right-content">\n              <img width="260px" height="56px" src="'+v+'/content_title.png?">\n              <div class="ddh-media-right-title">\n                Who\'s Hot and Who\'s Not?\n              </div>\n              <ul class="ddh-media-right-list">\n                <li>\n                  <img width="26px" height="30px" src="'+v+'/icon_football.png" >Stats\n                </li>\n                <li>\n                  <img width="32px" height="34px" src="'+v+'/icon_news.png" >Stories\n                </li>\n                <li>\n                  <img width="36px" height="16px" src="'+v+'/icon_shoe.png" >Profiles\n                </li>\n              </ul>\n              <div class="ddh-media-cta">\n                FIND OUT NOW\n                <span class="ddh-icon-arrow-right"></span>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    ';var e=l.document.createElement("div");e.className="ddh-bar",e.innerHTML='\n      <div class="ddh-bar-title">\n        <img src="'+v+'/icon_football.png" >\n        NFL THIS WEEK\n      </div>\n\n      <ul class="ddh-bar-schedule"></ul>\n    ',f.insertBefore(S,f.firstChild);var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var e=JSON.parse(n.responseText),t=l.document.getElementById("ddh-media-video"),a=l.document.createElement("iframe");a.frameBorder="0",a.width="650px",a.height="366px",a.setAttribute("allowfullscreen",""),a.src=e.data[0].videoLink+"&autoplay=on&sound=off",t.appendChild(a)}},n.open("GET",H,!0),n.send();var t=l.document.getElementsByClassName("ddh-media-close")[0];t.addEventListener("click",function(){var e=l.document.getElementsByClassName("ddh-media")[0];e.parentElement.removeChild(e),S.className="ddh-container ddh-closed"}),S.appendChild(e);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var n=JSON.parse(a.responseText);E=o(n.data),C=E.length;var t=f.offsetWidth;z=t>=1080?4:3;for(var i=0;z>i;i++)"undefined"!=typeof E[i]&&L.push(i);for(var r=0,s=L.length;s>r;r++){var m=L[r],h=l.document.getElementsByClassName("ddh-bar-schedule")[0];h.appendChild(E[m].gameNode)}var c=l.document.createElement("div");c.className="ddh-bar-nav",c.innerHTML='\n          <button class="ddh-bar-button ddh-prev" >\n            <span class="ddh-icon-angle-left"></span>\n          </button>\n          <button class="ddh-bar-button ddh-next">\n            <span class="ddh-icon-angle-right"></span>\n          </button>\n        ',e.appendChild(c);var p=l.document.getElementsByClassName("ddh-bar-button ddh-next")[0];p.addEventListener("click",function(){d();for(var e=0;z>e;e++){var n=L[e]+z;n>=C&&(n-=C),"undefined"!=typeof E[n]&&(L[e]=n)}for(var t=0,a=L.length;a>t;t++){var i=L[t],o=l.document.getElementsByClassName("ddh-bar-schedule")[0];o.appendChild(E[i].gameNode)}});var g=l.document.getElementsByClassName("ddh-bar-button ddh-prev")[0];g.addEventListener("click",function(){d();for(var e=0;z>e;e++){var n=L[e]-z;0>n&&(n+=C),"undefined"!=typeof E[n]&&(L[e]=n)}for(var t=0,a=L.length;a>t;t++){var i=L[t],o=l.document.getElementsByClassName("ddh-bar-schedule")[0];o.appendChild(E[i].gameNode)}})}},a.open("GET",q,!0),a.send(),I=!0}function t(e){var e=new Date(e+3600*x.offset*1e3),n=e.getUTCHours(),t=n>=12?"PM":"AM";n=n>12?n-12:n;var a=e.getUTCMinutes();a=1===a.toString().length?"0"+a.toString():a;var i=n+":"+a+t+" "+x.tzAbbrev;return i}function a(e,n,t){return e=e.sort(function(e,a){return n>0?e[t]<a[t]?-1:e[t]>a[t]?1:0:e[t]>a[t]?-1:e[t]<a[t]?1:0})}function i(e){var n=e%10,t=e%100;return 1==n&&11!=t?e+"st":2==n&&12!=t?e+"nd":3==n&&13!=t?e+"rd":e+"th"}function o(e){var n=function(e){var n=document.createElement("li"),t=e.timeClass?e.timeClass+" ddh-bar-game-time":"ddh-bar-game-time";return n.className=e.gameClass?e.gameClass+" ddh-bar-game":"ddh-bar-game",n.innerHTML='\n        <a class="ddh-bar-game-link" href="'+e.link+'">\n          <ul class="ddh-bar-game-teams">\n            <li>\n              '+e.homeTeam+' <span class="ddh-bar-game-teamscore">'+e.homeScore+"</span>\n            </li>\n            <li>\n              "+e.awayTeam+' <span class="ddh-bar-game-teamscore">'+e.awayScore+'</span>\n            </li>\n          </ul>\n          <span class="'+t+'">\n            '+e.bottomData+"\n          </span>\n        </a>\n      ",n},o=[],d=[],r=[],s=[],l=[],m=function(e,n){var t=new Date(e+3600*x.offset*1e3),a=t.getUTCDay(),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return i[a]+"<br>"+n};for(var h in e){var c=e[h],p=!1,g=new Date(c.eventStartTime+3600*x.offset*1e3).getUTCDate(),f=(new Date).getTime();if(g==w.date&&(p=!0),p){if("N"===c.liveStatus&&c.eventStartTime>f){var b=c.team1Record.split("-"),v=b[0]+"-"+b[1],y=c.team2Record.split("-"),S=y[0]+"-"+y[1],T={homeTeam:c.team1Abbreviation,homeScore:v,awayTeam:c.team2Abbreviation,awayScore:S,timestamp:c.eventStartTime,datetime:t(c.eventStartTime),eventId:c.eventId,gameClass:"ddh-football",timeClass:"ddh-e-2-lines"};T.bottomData=m(T.timestamp,T.datetime),T.link=u+"/nfl/articles/pregame-report/"+c.eventId,T.gameNode=n(T),o.push(T)}else if("Y"===c.liveStatus&&c.eventStartTime<f){var T={homeTeam:c.team1Abbreviation,homeScore:c.team1Score?c.team1Score:"-",awayTeam:c.team2Abbreviation,awayScore:c.team2Score?c.team2Score:"-",timestamp:c.eventStartTime,datetime:t(c.eventStartTime),eventId:c.eventId,gameClass:"ddh-football"};T.bottomData=c.eventQuarter?i(c.eventQuarter):T.datetime,T.link=u+"/nfl/articles/live-report/"+c.eventId,T.gameNode=n(T),d.push(T)}else if("N"===c.liveStatus&&c.eventStartTime<f){var T={homeTeam:c.team1Abbreviation,homeScore:"-",awayTeam:c.team2Abbreviation,awayScore:"-",timestamp:c.eventStartTime,datetime:t(c.eventStartTime),eventId:c.eventId,gameClass:"ddh-football",timeClass:"ddh-e-2-lines"};T.bottomData=m(T.timestamp,"Final"),T.link=u+"/nfl/articles/postgame-report/"+c.eventId,T.gameNode=n(T),r.push(T)}}else if(c.eventStartTime>f){var b=c.team1Record.split("-"),v=b[0]+"-"+b[1],y=c.team2Record.split("-"),S=y[0]+"-"+y[1],T={homeTeam:c.team1Abbreviation,homeScore:v,awayTeam:c.team2Abbreviation,awayScore:S,timestamp:c.eventStartTime,datetime:t(c.eventStartTime),eventId:c.eventId,gameClass:"ddh-football",timeClass:"ddh-e-2-lines"};T.bottomData=m(T.timestamp,T.datetime),T.link=u+"/nfl/articles/pregame-report/"+c.eventId,T.gameNode=n(T),s.push(T)}else if(c.eventStartTime<f){var T={homeTeam:c.team1Abbreviation,homeScore:c.team1Score?c.team1Score:"-",awayTeam:c.team2Abbreviation,awayScore:c.team2Score?c.team2Score:"-",timestamp:c.eventStartTime,datetime:t(c.eventStartTime),eventId:c.eventId,gameClass:"ddh-football",timeClass:"ddh-e-2-lines"};T.bottomData=m(T.timestamp,"Final"),T.link=u+"/nfl/articles/postgame-report/"+c.eventId,T.gameNode=n(T),l.push(T)}}o=a(o,1,"timestamp"),d=a(d,1,"timestamp"),r=a(r,1,"timestamp"),s=a(s,1,"timestamp"),l=a(l,1,"timestamp");var k=d.concat(o,r,s,l);return k}function d(){for(var e=l.document.getElementsByClassName("ddh-bar-schedule")[0];e.hasChildNodes();)e.removeChild(e.firstChild)}function r(e,n,t){n||(n=250);var a,i;return function(){var o=t||this,d=+new Date,r=arguments;a&&a+n>d?(clearTimeout(i),i=setTimeout(function(){a=d,e.apply(o,r)},n+a-d)):(a=d,e.apply(o,r))}}function s(){var t=l.document.getElementsByTagName("body")[0].offsetWidth,a=f.offsetWidth;if(1080>a&&3!==z&&I){z=3,L.pop(),d();for(var i=0,o=L.length;o>i;i++){var r=L[i],s=l.document.getElementsByClassName("ddh-bar-schedule")[0];s.appendChild(E[r].gameNode)}}else if(a>=1080&&4!==z&&I){z=4;var m=L[L.length-1];L[L.length]=m+1>=C?0:m+1,d();for(var i=0,o=L.length;o>i;i++){var r=L[i],s=l.document.getElementsByClassName("ddh-bar-schedule")[0];s.appendChild(E[r].gameNode)}}!B&&t-a>=320&&e(),!I&&t>=990&&n()}var l=window;try{for(;l!==top;)l=l.parent}catch(m){console.error("ddh - couldn/'t access the top window")}var h,c,p,g,f,u=l.location.hostname,u=u.replace(/www./,""),b="https:"===location.protocol?"https":"http",v=b+"://w1.synapsys.us/widgets/deepdive/images/football",y=v+"/hero.jpg",x=function(){var e,n,t,a,i=(new Date).getUTCFullYear(),o=(new Date).getTime();for(e=new Date(i,2,7,0,0,0,0),e.setDate(7+(7-e.getDay())),e.setUTCHours(7),e=e.getTime(),n=new Date(i,10,1,0,0,0,0);0!==n.getDay();)n.setDate(n.getDate()+1);return n.setUTCHours(6),n=n.getTime(),e>=o||o>n?(t=-5,a="EST"):(t=-4,a="EDT"),{offset:t,tzAbbrev:a}}(),w=function(e){var n=new Date((new Date).getTime()+3600*e*1e3),t=n.getUTCMonth()+1,a=n.getUTCDate(),i={today:n,year:n.getUTCFullYear(),month:1===t.toString().length?"0"+t:t,date:1===a.toString().length?"0"+a:a};return i.dateInput=i.year+"-"+i.month+"-"+i.date,i}(x.offset);switch(x.offset=0,u){case"baltimoresun.com":c=h=131,p=1280,g="md",f=l.document.querySelector(".trb_masthead");break;case"capitalgazette.com":c=h=131,p=1280,g="md",f=l.document.querySelector(".trb_masthead");break;case"chicagotribune.com":c=h=131,p=1280,g="il",f=l.document.querySelector(".trb_masthead");break;case"courant.com":c=h=131,p=1280,g="ct",f=l.document.querySelector(".trb_masthead");break;case"dailypress.com":c=h=131,p=1280,g="va",f=l.document.querySelector(".trb_masthead");break;case"latimes.com":c=h=131,p=1280,g="ca",f=l.document.querySelector(".trb_masthead");break;case"mcall.com":c=h=131,p=1280,g="pa",f=l.document.querySelector(".trb_masthead");break;case"orlandosentinel.com":c=h=131,p=1280,g="fl",f=l.document.querySelector(".trb_masthead");break;case"sandiegouniontribune.com":c=89,h=0,p=1280,g="ca",f=l.document.querySelector(".target-bg");break;case"southflorida.com":c=h=131,p=1280,g="fl",f=l.document.querySelector(".trb_masthead");break;case"sun-sentinel.com":c=h=131,p=1280,g="fl",f=l.document.querySelector(".trb_masthead");break;default:c=h=131,p=1280,g="il",f=l.document.querySelector(".trb_masthead")}u="http://mytouchdownzone.com/"+u;var S,T,k,C,E,N=500,_=l.document.getElementsByTagName("body")[0],D=_.offsetWidth,z=4,B=!1,I=!1,L=[],H=b+"://prod-touchdownloyal-api.synapsys.us/videoBatch/nfl/1/1/"+g,q=b+"://prod-touchdownloyal-api.synapsys.us/boxScores/league/nfl/"+w.dateInput,A=l.document.createElement("link");A.rel="stylesheet",A.type="text/css",A.href="https://fonts.googleapis.com/css?family=Lato:300,400",l.document.head.appendChild(A);var M=l.document.createElement("style");M.innerHTML='\n    @charset "UTF-8";\n\n    @font-face {\n      font-family: "takeover-deep-dive";\n      src:url("'+b+'://w1.synapsys.us/widgets/deepdive/fonts/font_middlelayer.php?type=eot");\n      src:url("'+b+'://w1.synapsys.us/widgets/deepdive/fonts/font_middlelayer.php?type=eot_iefix") format("embedded-opentype"),\n        url("'+b+'://w1.synapsys.us/widgets/deepdive/fonts/font_middlelayer.php?type=woff") format("woff"),\n        url("'+b+'://w1.synapsys.us/widgets/deepdive/fonts/font_middlelayer.php?type=ttf") format("truetype"),\n        url("'+b+'://w1.synapsys.us/widgets/deepdive/fonts/font_middlelayer.php?type=svg") format("svg");\n      font-weight: normal;\n      font-style: normal;\n\n    }\n\n    [data-icon]:before {\n      font-family: "takeover-deep-dive" !important;\n      content: attr(data-icon);\n      font-style: normal !important;\n      font-weight: normal !important;\n      font-variant: normal !important;\n      text-transform: none !important;\n      speak: none;\n      line-height: 1;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    [class^="ddh-icon-"]:before,\n    [class*=" ddh-icon-"]:before {\n      font-family: "takeover-deep-dive" !important;\n      font-style: normal !important;\n      font-weight: normal !important;\n      font-variant: normal !important;\n      text-transform: none !important;\n      speak: none;\n      line-height: 1;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    .ddh-icon-arrow-right:before {\n      content: "\\61";\n    }\n    .ddh-icon-angle-right:before {\n      content: "\\62";\n    }\n    .ddh-icon-angle-left:before {\n      content: "\\63";\n    }\n    .ddh-icon-times:before {\n      content: "\\64";\n    }\n\n    .to-left-rail{\n      width: '+N+"px;\n      position: fixed;\n      top: 0;\n      right: calc(50% + 640px);\n      bottom: 0;\n      background-image: url('"+v+"/rail_left.jpg');\n      display: none;\n      background-color: #000;\n      background-repeat: no-repeat;\n      background-position: top right;\n      contain: strict;\n    }\n    @media(min-width: 1600px){\n      .to-left-rail{\n        display: block;\n      }\n    }\n    #to-left-ad{\n      width: 160px;\n      height: 600px;\n      position: absolute;\n      top: "+c+"px;\n      right: 0;\n    }\n    .to-left-ad-presented{\n      position: absolute;\n      bottom: -76px;\n      right: 15px;\n    }\n    .to-right-rail{\n      width: "+N+"px;\n      position: fixed;\n      top: 0;\n      left: calc(50% + 640px);\n      bottom: 0;\n      background-image: url('"+v+"/rail_right.jpg');\n      display: none;\n      background-color: #000;\n      background-repeat: no-repeat;\n      contain: strict;\n    }\n    @media(min-width: 1600px){\n      .to-right-rail{\n        display: block;\n      }\n    }\n    #to-right-ad{\n      width: 160px;\n      height: 600px;\n      position: absolute;\n      top: "+c+"px;\n      left: 0;\n    }\n    .to-right-ad-presented{\n      position: absolute;\n      bottom: -76px;\n      left: 15px;\n    }\n\n    .ddh-container{\n      width: 100%;\n      margin: -40px 0 40px;\n      font-family: Lato, Helvetica;\n      display: none;\n      height: 496px;\n      contain: strict;\n    }\n    .ddh-container.ddh-closed{\n      height: 50px;\n    }\n    @media(min-width: 990px){\n      .ddh-container{\n        display: block;\n      }\n    }\n    .ddh-media{\n      background-color: #363636;\n      padding: 40px 0;\n      position: relative;\n      background-size: cover;\n      background-image: url('"+y+"');\n    }\n    .ddh-media-content{\n      width: 970px;\n      height: 366px;\n      margin: 0 auto;\n      background-color: #000;\n    }\n    #ddh-media-video{\n      width: 650px;\n      height: 366px;\n      background-color: #464646;\n      float: left;\n    }\n    .ddh-media-right-content{\n      box-sizing: border-box;\n      border: 5px solid #e1e1e1;\n      background-image: url('"+v+"/content_bg.jpg');\n      float: right;\n      width: 320px;\n      height: 366px;\n      background-color: #363636;\n      color: #fff;\n      padding: 15px;\n      text-align: center;\n    }\n    .ddh-media-right-title{\n      font-size: 22px;\n      display: inline-block;\n      margin-top: 10px;\n    }\n    .ddh-media-right-list{\n      list-style-type: none;\n      margin: 15px 0 35px 0;\n      padding: 0 0 0 35px;\n      text-align: left;\n      font-size: 24px;\n    }\n    .ddh-media-right-list>li{\n      margin-bottom: 10px;\n    }\n    .ddh-media-right-list>li>img{\n      vertical-align: middle;\n    }\n    .ddh-media-right-list>li:nth-child(1)>img{\n      margin-right: 23px;\n    }\n    .ddh-media-right-list>li:nth-child(2)>img{\n      margin-right: 17px;\n    }\n    .ddh-media-right-list>li:nth-child(3)>img{\n      margin-right: 13px;\n    }\n    .ddh-media-cta{\n      width: 266px;\n      height: 55px;\n      line-height: 55px;\n      background-color: #fc501d;\n      color: #fff;\n      display: inline-block;\n      border-radius: 30px;\n      font-size: 24px;\n      font-weight: 300;\n      text-decoration: none;\n    }\n    .ddh-media-cta>.ddh-icon-arrow-right{\n      vertical-align: middle;\n      margin-left: 10px;\n    }\n\n    .ddh-media-close{\n      width: 50px;\n      height: 50px;\n      background-color: #000 !important;\n      opacity: 0.33;\n      border-radius: 50%;\n      color: #fff !important;\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      border: none;\n      font-weight: 300;\n      cursor: pointer;\n      font-size: 12px;\n      line-height: 1;\n      z-index: 10;\n      padding: 0;\n    }\n    .ddh-media-close>.ddh-icon-times{\n      font-size: 30px;\n      vertical-align: middle;\n    }\n    .ddh-media-close>.ddh-close-text{\n      display: none;\n    }\n    .ddh-media-close:focus{\n      outline: none;\n    }\n    @media(min-width: 1180px){\n      .ddh-media-close{\n        width: 90px;\n        height: 90px;\n      }\n      .ddh-media-close>.ddh-icon-times{\n        font-size: 40px;\n      }\n      .ddh-media-close>.ddh-close-text{\n        display: inline;\n      }\n    }\n\n    .ddh-bar{\n      width: 100%;\n      min-width: 990px;\n      height: 50px;\n      line-height: 50px;\n      background-color: #272727;\n      color: #fff;\n    }\n    .ddh-bar-title{\n      font-size: 18px;\n      float: left;\n      box-sizing: border-box;\n      height: 50px;\n      line-height: 50px;\n      padding: 0 10px;\n      width: auto;\n      border-right: 1px solid #000;\n    }\n    .ddh-bar-title>img{\n      vertical-align: middle;\n      margin-right: 3px;\n      width: 22px;\n      position: relative;\n      top: -2px;\n    }\n    .ddh-bar-schedule{\n      list-style-type: none;\n      float: left;\n      margin: 0 5px 0 0;\n      padding: 0;\n      height: 100%;\n    }\n    .ddh-bar-game{\n      display: inline-block;\n      width: 166px;\n      height: 50px;\n      border-right: 1px solid #000;\n      box-sizing: border-box;\n      overflow: hidden;\n    }\n    .ddh-bar-game:last-child{\n      border-right: none;\n    }\n    .ddh-bar-game-link{\n      display: block;\n      width: 100%;\n      height: 100%;\n      padding: 0 10px 0 10px;\n      box-sizing: border-box;\n      text-decoration: none;\n      color: #fff !important;\n    }\n    .ddh-bar-game-teams{\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      width: 65px;\n      line-height: normal;\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 14px;\n    }\n    .ddh-game-inning-top:before{\n      content: '';\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 7px 9px 7px;\n      border-color: transparent transparent #fff transparent;\n      margin-right: 5px;\n      display: inline-block;\n    }\n    .ddh-game-inning-bottom:before{\n      content: '';\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 9px 7px 0 7px;\n      border-color: #fff transparent transparent transparent;\n      margin-right: 5px;\n      display: inline-block;\n    }\n    .ddh-bar-game-teamscore{\n      float: right;\n    }\n    .ddh-bar-game-time{\n      font-size: 12px;\n      float: right;\n      font-weight: 400;\n    }\n    .ddh-e-2-lines{\n      line-height: normal;\n      padding-top: 10px;\n    }\n    .ddh-bar-nav{\n      float: left;\n      margin-right: 5px;\n    }\n    .ddh-bar-button{\n      width: 30px;\n      height: 30px;\n      line-height: 30px;\n      border-radius: 5px;\n      background-color: #fff !important;\n      border: none;\n      color: #fc501d !important;\n      padding: 0;\n      margin: 0 3px 0 0;\n      vertical-align: middle;\n      cursor: pointer;\n      font-size: 24px;\n    }\n    .ddh-bar-button>span{\n      vertical-align: middle;\n    }\n    .ddh-bar-button:focus{\n      outline: none;\n    }\n  ",l.document.head.appendChild(M);var U=f.offsetWidth;D-U>=320&&e(),U>=990&&n(),l.addEventListener("resize",r(s,100))}();
