"use strict";!function(){var e=window;try{for(;e!==top;)e=e.parent}catch(n){console.error("ddh - couldn/'t access the top window")}var a,t,i,d=e.location.hostname,r="#004e87";d=d.replace(/www./,"");var o,s,l="https:"===location.protocol?"https":"http",m=l+"://w1.synapsys.us/widgets/deepdive/images/baseball_hero.jpg";switch(d){case"baltimoresun.com":t=a=131,i=1280,o="md",s=e.document.querySelector(".trb_masthead");break;case"capitalgazette.com":t=a=131,i=1280,o="md",s=e.document.querySelector(".trb_masthead");break;case"chicagotribune.com":t=a=131,i=1280,o="il",s=e.document.querySelector(".trb_masthead");break;case"courant.com":t=a=131,i=1280,o="ct",s=e.document.querySelector(".trb_masthead");break;case"dailypress.com":t=a=131,i=1280,o="va",s=e.document.querySelector(".trb_masthead");break;case"latimes.com":t=a=131,i=1280,o="ca",s=e.document.querySelector(".trb_masthead");break;case"mcall.com":t=a=131,i=1280,o="pa",s=e.document.querySelector(".trb_masthead");break;case"orlandosentinel.com":t=a=131,i=1280,o="fl",s=e.document.querySelector(".trb_masthead");break;case"sandiegouniontribune.com":t=89,a=0,i=1280,o="ca",s=e.document.querySelector(".target-bg");break;case"southflorida.com":t=a=131,i=1280,o="fl",s=e.document.querySelector(".trb_masthead");break;case"sun-sentinel.com":t=a=131,i=1280,o="fl",s=e.document.querySelector(".trb_masthead");break;default:t=a=131,i=1280,o="il",s=e.document.querySelector(".trb_allContentWrapper")}d="http://baseball."+d;var c,h,p,g,b,f=500,u=e.document.getElementsByTagName("body")[0],v=u.offsetWidth,y=4,x=!1,w=!1,k=!1,T=!1,I=[],C=function(){h=e.document.createElement("a"),h.className="to-left-rail to-rail-visible",h.href=d,h.target="_blank",h.innerHTML='\n      <div id="to-left-ad">\n        <img class="to-left-ad-presented" src="'+l+'://w1.synapsys.us/widgets/deepdive/images/logo_left.png">\n      </div>\n    ',p=e.document.createElement("a"),p.className="to-right-rail to-rail-visible",p.href=d,p.target="_blank",p.innerHTML='\n      <div id="to-right-ad">\n        <img class="to-right-ad-presented" src="'+l+'://w1.synapsys.us/widgets/deepdive/images/logo_right.png">\n      </div>\n    ',h.style.left=S(),p.style.left=N(),u.insertBefore(p,u.firstChild),u.insertBefore(h,u.firstChild);var n=e.document.getElementById("to-left-ad"),a=e.document.createElement("script");a.src=l+"://content.synapsys.us/embeds/mlb/deepdive_160x600/partner.js",n.insertBefore(a,n.firstChild);var t=e.document.getElementById("to-right-ad"),i=e.document.createElement("script");i.src=l+"://content.synapsys.us/embeds/mlb/deepdive_160x600/partner-right.js",t.insertBefore(i,t.firstChild),x=!0,w=!0},E=function(){c=e.document.createElement("div"),c.className="ddh-container ddh-visible",c.innerHTML='\n      <div class="ddh-media">\n        <button class="ddh-media-close">\n          <span class="ddh-icon-times"></span><br>\n          <span class="ddh-close-text">CLOSE</span>\n        </button>\n        <div class="ddh-media-content">\n          <div id="ddh-media-video"></div>\n          <a target="_blank" href="'+d+'">\n            <div class="ddh-media-right-content">\n              <img width="280px" height="40px" src="'+l+'://w1.synapsys.us/widgets/deepdive/images/baseball_logo.png?">\n              <div class="ddh-media-right-title">\n                Who\'s Hot and Who\'s Not?\n                <div class="ddh-media-right-title-border"></div>\n              </div>\n              <ul class="ddh-media-right-list">\n                <li>\n                  <img src="'+l+'://w1.synapsys.us/widgets/deepdive/images/baseball_icon.png" >Stats\n                </li>\n                <li>\n                  <img src="'+l+'://w1.synapsys.us/widgets/deepdive/images/baseball_field_icon.png" >Stories\n                </li>\n                <li>\n                  <img src="'+l+'://w1.synapsys.us/widgets/deepdive/images/baseball_hat_icon.png" >Profiles\n                </li>\n              </ul>\n              <div class="ddh-media-cta">\n                FIND OUT NOW\n                <span class="ddh-icon-arrow-right"></span>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    ';var n=e.document.createElement("div");n.className="ddh-bar",n.innerHTML='\n      <div class="ddh-bar-title">\n        <img src="'+l+'://w1.synapsys.us/widgets/deepdive/images/baseball_icon.png" >\n        TODAY\'S MLB GAMES\n      </div>\n\n      <ul class="ddh-bar-schedule"></ul>\n\n      <div class="ddh-bar-nav">\n        <button class="ddh-bar-button ddh-prev" >\n          <span class="ddh-icon-angle-left"></span>\n        </button>\n        <button class="ddh-bar-button ddh-next">\n          <span class="ddh-icon-angle-right"></span>\n        </button>\n      </div>\n    ',s.insertBefore(c,s.firstChild);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var n=JSON.parse(a.responseText),t=e.document.getElementById("ddh-media-video"),i=e.document.createElement("iframe");i.frameBorder="0",i.width="650px",i.height="366px",i.setAttribute("allowfullscreen",""),i.src=n.data[0].videoLink+"&autoplay=on&sound=off",t.appendChild(i)}},a.open("GET",l+"://prod-homerunloyal-api.synapsys.us/article/video/batch/division/"+o+"/1/1",!0),a.send();var t=e.document.getElementsByClassName("ddh-media-close")[0];t.addEventListener("click",function(){var n=e.document.getElementsByClassName("ddh-media")[0];n.parentElement.removeChild(n)});var i=_(),r=new Date((new Date).getTime()+3600*i.offset*1e3),m=r.getUTCFullYear(),h=r.getUTCMonth()+1;h=1===h.toString().length?"0"+h:h;var p=r.getUTCDate(),f=m+"-"+h+"-"+p,u=new XMLHttpRequest;u.onreadystatechange=function(){if(4===u.readyState&&200===u.status){var a=JSON.parse(u.responseText);b=z(a.data,i.offset,i.tzAbbrev,p),g=b.length;var t=s.offsetWidth;y=t>=1080?4:3,c.appendChild(n);for(var d=0;y>d;d++)"undefined"!=typeof b[d]&&I.push(d);for(var r=0,o=I.length;o>r;r++){var l=I[r],m=e.document.createElement("li");m.className="ddh-bar-game",m.innerHTML=b[l].htmlMarkup;var h=e.document.getElementsByClassName("ddh-bar-schedule")[0];h.appendChild(m)}var f=e.document.getElementsByClassName("ddh-bar-button ddh-next")[0];f.addEventListener("click",function(){H();for(var n=0;y>n;n++){var a=I[n]+y;a>=g&&(a-=g),"undefined"!=typeof b[a]&&(I[n]=a)}for(var t=0,i=I.length;i>t;t++){var d=I[t],r=e.document.createElement("li");r.className="ddh-bar-game",r.innerHTML=b[d].htmlMarkup;var o=e.document.getElementsByClassName("ddh-bar-schedule")[0];o.appendChild(r)}});var v=e.document.getElementsByClassName("ddh-bar-button ddh-prev")[0];v.addEventListener("click",function(){H();for(var n=0;y>n;n++){var a=I[n]-y;0>a&&(a+=g),"undefined"!=typeof b[a]&&(I[n]=a)}for(var t=0,i=I.length;i>t;t++){var d=I[t],r=e.document.createElement("li");r.className="ddh-bar-game",r.innerHTML=b[d].htmlMarkup;var o=e.document.getElementsByClassName("ddh-bar-schedule")[0];o.appendChild(r)}})}},u.open("GET",l+"://prod-homerunloyal-api.synapsys.us/league/boxScores/"+f,!0),u.send(),k=!0,T=!0},S=function(){var e=s.getBoundingClientRect().left;return e-f+"px"},N=function(){var e=s.getBoundingClientRect().left,n=s.offsetWidth;return e+n+"px"},_=function(){var e,n,a,t,i=(new Date).getUTCFullYear(),d=(new Date).getTime();for(e=new Date(i,2,7,0,0,0,0),e.setDate(7+(7-e.getDay())),e.setUTCHours(7),e=e.getTime(),n=new Date(i,10,1,0,0,0,0);0!==n.getDay();)n.setDate(n.getDate()+1);return n.setUTCHours(6),n=n.getTime(),e>=d||d>n?(a=-5,t="EST"):(a=-4,t="EDT"),{offset:a,tzAbbrev:t}},D=function(e,n,a){var e=new Date(e+3600*n*1e3),t=e.getUTCHours(),i=t>=12?"PM":"AM";t=t>12?t-12:t;var d=e.getUTCMinutes();d=1===d.toString().length?"0"+d.toString():d;var r=t+":"+d+i+" "+a;return r},M=function(e,n,a){var t=new Date(e+3600*a*1e3),t=t.getUTCDate();return n===t},B=function(e){return e.sort(function(e,n){return e.timestamp-n.timestamp})},L=function(e){var n=e%10,a=e%100;return 1==n&&11!=a?e+"st":2==n&&12!=a?e+"nd":3==n&&13!=a?e+"rd":e+"th"},z=function(e,n,a,t){var i=[],r=[],o=[];for(var s in e){var l=e[s];switch(l.gameInfo.eventStatus){case"pre-event":if(l.gameInfo.live===!1)M(l.gameInfo.startDateTimestamp,t,n)&&i.push({homeTeam:l.homeTeamInfo.abbreviation,homeScore:"-",awayTeam:l.awayTeamInfo.abbreviation,awayScore:"-",timestamp:l.gameInfo.startDateTimestamp,eventStatus:l.gameInfo.eventStatus,htmlMarkup:'\n                  <a target="_blank" href="'+d+"/articles/pregame-report/"+l.gameInfo.eventId+'" class="ddh-bar-game-link">\n                    <ul class="ddh-bar-game-teams">\n                      <li>\n                        '+l.homeTeamInfo.abbreviation+'\n                        <span class="ddh-bar-game-teamscore">\n                          -\n                        </span>\n                      </li>\n                      <li>\n                        '+l.awayTeamInfo.abbreviation+'\n                        <span class="ddh-bar-game-teamscore">\n                          -\n                        </span>\n                      </li>\n                    </ul>\n                    <span class="ddh-bar-game-time">\n                      '+D(l.gameInfo.startDateTimestamp,n,a)+"\n                    </span>\n                  </a>\n                "});else if(M(l.gameInfo.startDateTimestamp,t,n)){if(l.gameInfo.inningsPlayed<=3)var m=d+"/articles/pregame-report/"+l.gameInfo.eventId;else if(l.gameInfo.inningsPlayed>3&&l.gameInfo.inningsPlayed<=5)var m=d+"/articles/third-inning-report/"+l.gameInfo.eventId;else if(l.gameInfo.inningsPlayed>5&&l.gameInfo.inningsPlayed<=7)var m=d+"/articles/fifth-inning-report/"+l.gameInfo.eventId;else if(l.gameInfo.inningsPlayed>7)var m=d+"/articles/seventh-inning-report/"+l.gameInfo.eventId;var c;c="top"===l.gameInfo.inningHalf?'<span class="ddh-game-inning-top"></span>':"bottom"===l.gameInfo.inningHalf?'<span class="ddh-game-inning-bottom"></span>':"",r.push({homeTeam:l.homeTeamInfo.abbreviation,homeScore:l.homeTeamInfo.score,awayTeam:l.awayTeamInfo.abbreviation,awayScore:l.awayTeamInfo.score,timestamp:l.gameInfo.startDateTimestamp,eventStatus:l.gameInfo.eventStatus,htmlMarkup:'\n                  <a target="_blank" href="'+m+'" class="ddh-bar-game-link">\n                    <ul class="ddh-bar-game-teams">\n                      <li>\n                        '+l.awayTeamInfo.abbreviation+'\n                        <span class="ddh-bar-game-teamscore">\n                          '+l.awayTeamInfo.score+"\n                        </span>\n                      </li>\n                      <li>\n                        "+l.homeTeamInfo.abbreviation+'\n                        <span class="ddh-bar-game-teamscore">\n                          '+l.homeTeamInfo.score+'\n                        </span>\n                      </li>\n                    </ul>\n                    <span class="ddh-bar-game-time">\n                      '+c+(l.gameInfo.inningsPlayed?L(l.gameInfo.inningsPlayed):D(l.gameInfo.startDateTimestamp,n,a))+"\n                    </span>\n                  </a>\n                "})}break;case"Final":case"post-event":M(l.gameInfo.startDateTimestamp,t,n)&&o.push({homeTeam:l.homeTeamInfo.abbreviation,homeScore:l.homeTeamInfo.score,awayTeam:l.awayTeamInfo.abbreviation,awayScore:l.awayTeamInfo.score,timestamp:l.gameInfo.startDateTimestamp,eventStatus:l.gameInfo.eventStatus,htmlMarkup:'\n                <a target="_blank" href="'+d+"/articles/postgame-report/"+l.gameInfo.eventId+'" class="ddh-bar-game-link">\n                  <ul class="ddh-bar-game-teams">\n                    <li>\n                      '+l.homeTeamInfo.abbreviation+'\n                      <span class="ddh-bar-game-teamscore">\n                        '+(l.homeTeamInfo.score||"-")+"\n                      </span>\n                    </li>\n                    <li>\n                      "+l.awayTeamInfo.abbreviation+'\n                      <span class="ddh-bar-game-teamscore">\n                        '+(l.awayTeamInfo.score||"-")+'\n                      </span>\n                    </li>\n                  </ul>\n                  <span class="ddh-bar-game-time">\n                    FINAL\n                  </span>\n                </a>\n              '})}}i=B(i),r=B(r),o=B(o);var h=r.concat(i,o);return h},H=function(){for(var n=e.document.getElementsByClassName("ddh-bar-schedule")[0];n.hasChildNodes();)n.removeChild(n.firstChild)},q=e.document.createElement("link");q.rel="stylesheet",q.type="text/css",q.href="https://fonts.googleapis.com/css?family=Lato:300,400",e.document.head.appendChild(q);var P=e.document.createElement("link");P.rel="stylesheet",P.type="text/css",P.href=l+"://w1.synapsys.us/widgets/deepdive/fonts/styles.css",e.document.head.appendChild(P);var U=e.document.createElement("style");U.innerHTML="\n  .to-left-rail{\n    width: "+f+"px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    background-image: url('"+l+"://w1.synapsys.us/widgets/deepdive/images/baseball_left.jpg');\n    display: none;\n    background-color: #000;\n    background-repeat: no-repeat;\n  }\n  .to-left-rail.to-rail-visible{\n    display: block;\n  }\n  #to-left-ad{\n    width: 160px;\n    height: 600px;\n    position: absolute;\n    top: "+t+"px;\n    right: 0;\n  }\n  .to-left-ad-presented{\n    position: absolute;\n    bottom: -76px;\n    right: 15px;\n  }\n  .to-right-rail{\n    width: "+f+"px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    background-image: url('"+l+"://w1.synapsys.us/widgets/deepdive/images/baseball_right.jpg');\n    display: none;\n    background-color: #000;\n    background-repeat: no-repeat;\n  }\n  .to-right-rail.to-rail-visible{\n    display: block;\n  }\n  #to-right-ad{\n    width: 160px;\n    height: 600px;\n    position: absolute;\n    top: "+t+"px;\n    left: 0;\n  }\n  .to-right-ad-presented{\n    position: absolute;\n    bottom: -76px;\n    left: 15px;\n  }\n\n  .ddh-container{\n    width: 100%;\n    margin: -40px 0 40px;\n    font-family: Lato, Helvetica;\n    display: none;\n  }\n  .ddh-container.ddh-visible{\n    display: block;\n  }\n  .ddh-media{\n    background-color: #363636;\n    padding: 40px 0;\n    position: relative;\n    background-size: cover;\n    background-image: url('"+m+"');\n    background-position: 0% 50%;\n  }\n  .ddh-media-content{\n    width: 970px;\n    height: 366px;\n    margin: 0 auto;\n    background-color: #000;\n  }\n  #ddh-media-video{\n    width: 650px;\n    height: 366px;\n    background-color: #464646;\n    float: left;\n  }\n  .ddh-media-right-content{\n    box-sizing: border-box;\n    border: 5px solid #e1e1e1;\n    background-image: url('"+l+"://w1.synapsys.us/widgets/deepdive/images/right_bgimage.jpg');\n    float: right;\n    width: 320px;\n    height: 366px;\n    background-color: #363636;\n    color: #fff;\n    padding: 15px;\n    text-align: center;\n  }\n  .ddh-media-right-title{\n    font-size: 22px;\n    display: inline-block;\n    margin-top: 20px;\n  }\n  .ddh-media-right-title-border{\n    width: 100%;\n    height: 2px;\n    margin-top: 5px;\n    background: #b91614; /* For browsers that do not support gradients */\n    background: -webkit-linear-gradient(left, #b91614 , #1b3e6d); /* For Safari 5.1 to 6.0 */\n    background: linear-gradient(to right, #b91614 , #1b3e6d); /* Standard syntax */\n  }\n  .ddh-media-right-list{\n    list-style-type: none;\n    margin: 15px 0 35px 0;\n    padding: 0 0 0 35px;\n    text-align: left;\n    font-size: 24px;\n  }\n  .ddh-media-right-list>li{\n    margin-bottom: 10px;\n  }\n  .ddh-media-right-list>li>img{\n    width: 30px;\n    vertical-align: middle;\n    margin-right: 15px;\n  }\n  .ddh-media-cta{\n    width: 266px;\n    height: 55px;\n    line-height: 55px;\n    background-color: #bc2027;\n    color: #fff;\n    display: inline-block;\n    border-radius: 30px;\n    font-size: 24px;\n    font-weight: 300;\n    text-decoration: none;\n  }\n  .ddh-media-cta>.ddh-icon-arrow-right{\n    vertical-align: middle;\n    margin-left: 10px;\n  }\n\n  .ddh-media-close{\n    width: 50px;\n    height: 50px;\n    background-color: #000 !important;\n    opacity: 0.33;\n    border-radius: 50%;\n    color: #fff !important;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    border: none;\n    font-weight: 300;\n    cursor: pointer;\n    font-size: 12px;\n    line-height: 1;\n    z-index: 10;\n    padding: 0;\n  }\n  .ddh-media-close>.ddh-icon-times{\n    font-size: 30px;\n    vertical-align: middle;\n  }\n  .ddh-media-close>.ddh-close-text{\n    display: none;\n  }\n  .ddh-media-close:focus{\n    outline: none;\n  }\n  @media(min-width: 1180px){\n    .ddh-media-close{\n      width: 90px;\n      height: 90px;\n    }\n    .ddh-media-close>.ddh-icon-times{\n      font-size: 40px;\n    }\n    .ddh-media-close>.ddh-close-text{\n      display: inline;\n    }\n  }\n\n  .ddh-bar{\n    width: 100%;\n    min-width: 990px;\n    height: 50px;\n    line-height: 50px;\n    background-color: "+r+";\n    color: #fff;\n  }\n  .ddh-bar-title{\n    font-size: 18px;\n    float: left;\n    box-sizing: border-box;\n    height: 50px;\n    line-height: 50px;\n    padding: 0 10px;\n    width: auto;\n  }\n  .ddh-bar-title>img{\n    vertical-align: middle;\n    margin-right: 3px;\n    -ms-transform: rotate(90deg); /* IE 9 */\n    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */\n    transform: rotate(90deg);\n  }\n  .ddh-bar-schedule{\n    list-style-type: none;\n    float: left;\n    margin: 0 5px 0 0;\n    padding: 0;\n    height: 100%;\n  }\n  .ddh-bar-game{\n    display: inline-block;\n    width: 166px;\n    height: 50px;\n    border-right: 1px solid #2c2c2c;\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n  .ddh-bar-game:last-child{\n    border-right: none;\n  }\n  .ddh-bar-game-link{\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 0 10px 0 15px;\n    box-sizing: border-box;\n    text-decoration: none;\n    color: #fff !important;\n  }\n  .ddh-bar-game-teams{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 57px;\n    line-height: normal;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 14px;\n  }\n  .ddh-game-inning-top:before{\n    content: '';\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 7px 9px 7px;\n    border-color: transparent transparent #fff transparent;\n    margin-right: 5px;\n    display: inline-block;\n  }\n  .ddh-game-inning-bottom:before{\n    content: '';\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 9px 7px 0 7px;\n    border-color: #fff transparent transparent transparent;\n    margin-right: 5px;\n    display: inline-block;\n  }\n  .ddh-bar-game-teamscore{\n    float: right;\n  }\n  .ddh-bar-game-time{\n    font-size: 12px;\n    float: right;\n    font-weight: 400;\n  }\n  .ddh-bar-nav{\n    float: left;\n    margin-right: 5px;\n  }\n  .ddh-bar-button{\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 5px;\n    background-color: #fff !important;\n    border: none;\n    color: #000 !important;\n    padding: 0;\n    margin: 0 3px 0 0;\n    vertical-align: middle;\n    cursor: pointer;\n    font-size: 24px;\n  }\n  .ddh-bar-button>span{\n    vertical-align: middle;\n  }\n  .ddh-bar-button:focus{\n    outline: none;\n  }\n  ",e.document.head.appendChild(U);var W=s.offsetWidth;v-W>=320&&C(),W>=990&&E(),e.addEventListener("resize",function(){var n=e.document.getElementsByTagName("body")[0].offsetWidth,a=s.offsetWidth;if(1080>a&&3!==y&&k){y=3,I.pop(),H();for(var t=0,i=I.length;i>t;t++){var d=I[t],r=e.document.createElement("li");r.className="ddh-bar-game",r.innerHTML=b[d].htmlMarkup;var o=e.document.getElementsByClassName("ddh-bar-schedule")[0];o.appendChild(r)}}else if(a>=1080&&4!==y&&k){y=4;var l=I[I.length-1];I[I.length]=l+1>=g?0:l+1,H();for(var t=0,i=I.length;i>t;t++){var d=I[t],r=e.document.createElement("li");r.className="ddh-bar-game",r.innerHTML=b[d].htmlMarkup;var o=e.document.getElementsByClassName("ddh-bar-schedule")[0];o.appendChild(r)}}!x&&n-a>=320&&C(),!k&&n>=990&&E(),k&&T&&990>a&&(c.className="ddh-container",T=!1),k&&!T&&a>=990&&(c.className="ddh-container ddh-visible",T=!0),x&&w&&320>n-a&&(w=!1,h.className="to-left-rail",p.className="to-right-rail"),x&&!w&&n-a>=320&&(w=!0,h.className="to-left-rail to-rail-visible",p.className="to-right-rail to-rail-visible"),x&&(h.style.left=S(),p.style.left=N())})}();
