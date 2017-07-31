"use strict";!function(){function e(e){return"://"+e+"-homerunloyal-api.synapsys.us/league/boxScores/"}var n=window;try{for(;n!==top;)n=n.parent}catch(e){console.error("boxscores - couldn/'t access the top window")}var a=n.location,t=a.hostname.replace(/www./,"");if("myhomerunzone.com"===t||"dev.myhomerunzone.com"===t||"qa.myhomerunzone.com"===t){var o=a.pathname.split("/"),s=o[1];t+="/"+s}var r,i,l,m,c,d,p=location!=parent.location?document.referrer:document.location.href,g=function(e){var n=document.createElement("a");return n.href=e,""==n.host&&(n.href=n.href),n}(p).hostname,h=function(e){return e=null!=e.match(/^localhost/)||null!=e.match(/^dev/)?"dev":null!=e.match(/^qa/)?"qa":"prod"}(g),f=(new RegExp(/[a-z-:\/]*w1\.synapsys\.us\/widgets\/deepdive\/boxscores\/boxscores\.js/,"g"),[]),b="https:"===location.protocol?"https":"http",u=!1,v=function(){var e,n,a,t,o=(new Date).getUTCFullYear(),s=(new Date).getTime();for(e=new Date(o,2,7,0,0,0,0),e.setDate(7-e.getDay()+7),e.setUTCHours(7),e=e.getTime(),n=new Date(o,10,1,0,0,0,0);0!==n.getDay();)n.setDate(n.getDate()+1);return n.setUTCHours(6),n=n.getTime(),s<=e||s>n?(a=-5,t="EST"):(a=-4,t="EDT"),{offset:a,tzAbbrev:t}},x=function(e,n,a){var e=new Date(e+3600*n*1e3),t=e.getUTCHours(),o=t>=12?"PM":"AM";t=t>12?t-12:t;var s=e.getUTCMinutes();return s=1===s.toString().length?"0"+s.toString():s,t+":"+s+o+" "+a},y=function(e,n,a){var t=new Date(e+3600*a*1e3),t=t.getUTCDate();return n===t},T=function(e){return e.sort(function(e,n){return e.timestamp-n.timestamp})},I=function(e){var n=e%10,a=e%100;return 1==n&&11!=a?e+"st":2==n&&12!=a?e+"nd":3==n&&13!=a?e+"rd":e+"th"},w=function(e,n,a,o){var s=[],r=[],i=[];for(var l in e){var m=e[l];switch(m.gameInfo.eventStatus){case"pre-event":if(!1===m.gameInfo.live)y(m.gameInfo.startDateTimestamp,o,n)&&s.push({homeTeam:m.homeTeamInfo.abbreviation,homeScore:"-",awayTeam:m.awayTeamInfo.abbreviation,awayScore:"-",timestamp:m.gameInfo.startDateTimestamp,eventStatus:m.gameInfo.eventStatus,htmlMarkup:'\n                  <a href="http://'+t+"/articles/pregame-report/"+m.gameInfo.eventId+'" class="boxscores-e-game-link">\n                    <ul class="boxscores-e-game-teams">\n                      <li>\n                        '+m.homeTeamInfo.abbreviation+'\n                        <span class="boxscores-e-game-teamscore">\n                          -\n                        </span>\n                      </li>\n                      <li>\n                        '+m.awayTeamInfo.abbreviation+'\n                        <span class="boxscores-e-game-teamscore">\n                          -\n                        </span>\n                      </li>\n                    </ul>\n                    <span class="boxscores-e-game-time">\n                      '+x(m.gameInfo.startDateTimestamp,n,a)+"\n                    </span>\n                  </a>\n                "});else if(y(m.gameInfo.startDateTimestamp,o,n)){if(m.gameInfo.inningsPlayed<=3)var c="http://"+t+"/articles/pregame-report/"+m.gameInfo.eventId;else if(m.gameInfo.inningsPlayed>3&&m.gameInfo.inningsPlayed<=5)var c="http://"+t+"/articles/third-inning-report/"+m.gameInfo.eventId;else if(m.gameInfo.inningsPlayed>5&&m.gameInfo.inningsPlayed<=7)var c="http://"+t+"/articles/fifth-inning-report/"+m.gameInfo.eventId;else if(m.gameInfo.inningsPlayed>7)var c="http://"+t+"/articles/seventh-inning-report/"+m.gameInfo.eventId;var d;d="top"===m.gameInfo.inningHalf?'<span class="boxscores-e-game-inning-top"></span>':"bottom"===m.gameInfo.inningHalf?'<span class="boxscores-e-game-inning-bottom"></span>':"",r.push({homeTeam:m.homeTeamInfo.abbreviation,homeScore:m.homeTeamInfo.score,awayTeam:m.awayTeamInfo.abbreviation,awayScore:m.awayTeamInfo.score,timestamp:m.gameInfo.startDateTimestamp,eventStatus:m.gameInfo.eventStatus,htmlMarkup:'\n                  <a href="'+c+'" class="boxscores-e-game-link">\n                    <ul class="boxscores-e-game-teams">\n                      <li>\n                        '+m.awayTeamInfo.abbreviation+'\n                        <span class="boxscores-e-game-teamscore">\n                          '+m.awayTeamInfo.score+"\n                        </span>\n                      </li>\n                      <li>\n                        "+m.homeTeamInfo.abbreviation+'\n                        <span class="boxscores-e-game-teamscore">\n                          '+m.homeTeamInfo.score+'\n                        </span>\n                      </li>\n                    </ul>\n                    <span class="boxscores-e-game-time">\n                      '+d+(m.gameInfo.inningsPlayed?I(m.gameInfo.inningsPlayed):x(m.gameInfo.startDateTimestamp,n,a))+"\n                    </span>\n                  </a>\n                "})}break;case"Final":case"post-event":y(m.gameInfo.startDateTimestamp,o,n)&&i.push({homeTeam:m.homeTeamInfo.abbreviation,homeScore:m.homeTeamInfo.score,awayTeam:m.awayTeamInfo.abbreviation,awayScore:m.awayTeamInfo.score,timestamp:m.gameInfo.startDateTimestamp,eventStatus:m.gameInfo.eventStatus,htmlMarkup:'\n                <a ="_blank" href="http://'+t+"/articles/postgame-report/"+m.gameInfo.eventId+'" class="boxscores-e-game-link">\n                  <ul class="boxscores-e-game-teams">\n                    <li>\n                      '+m.homeTeamInfo.abbreviation+'\n                      <span class="boxscores-e-game-teamscore">\n                        '+(m.homeTeamInfo.score||"-")+"\n                      </span>\n                    </li>\n                    <li>\n                      "+m.awayTeamInfo.abbreviation+'\n                      <span class="boxscores-e-game-teamscore">\n                        '+(m.awayTeamInfo.score||"-")+'\n                      </span>\n                    </li>\n                  </ul>\n                  <span class="boxscores-e-game-time">\n                    FINAL\n                  </span>\n                </a>\n              '})}}return s=T(s),r=T(r),i=T(i),r.concat(s,i)},C=function(){for(var e=document.getElementsByClassName("boxscores-e-schedule")[0];e.hasChildNodes();)e.removeChild(e.firstChild)},E=document.createElement("base");E.target="_parent",document.head.appendChild(E);var M=document.createElement("link");M.rel="stylesheet",M.type="text/css",M.dataset.resource_from="boxscores-embed",M.href="https://fonts.googleapis.com/css?family=Lato:300,400",document.head.appendChild(M);var k=document.createElement("link");k.rel="stylesheet",k.type="text/css",k.dataset.resource_from="boxscores-embed",k.href=b+"://w1.synapsys.us/widgets/deepdive/fonts/styles.css",document.head.appendChild(k);var N=document.createElement("style");N.dataset.resource_from="boxscores-embed",N.innerHTML="\n    .boxscores-e-bar{\n      width: 100%;\n      min-width: 640px;\n      height: 50px;\n      line-height: 50px;\n      background-color: #004e87;\n      color: #fff;\n      font-family: Lato;\n      overflow: hidden;\n    }\n    .boxscores-e-title{\n      font-size: 18px;\n      float: left;\n      padding: 0 10px;\n      box-sizing: border-box;\n      line-height: 50px;\n    }\n    .boxscores-e-schedule{\n      list-style-type: none;\n      float: left;\n      margin: 0 5px 0 0;\n      padding: 0;\n      height: 100%;\n    }\n    .boxscores-e-game{\n      display: inline-block;\n      width: 166px;\n      height: 50px;\n      border-right: 1px solid #2c2c2c;\n      box-sizing: border-box;\n      overflow: hidden;\n    }\n    .boxscores-e-game:last-child{\n      border-right: none;\n    }\n    .boxscores-e-game-link{\n      display: block;\n      width: 100%;\n      height: 100%;\n      padding: 0 10px 0 15px;\n      box-sizing: border-box;\n      text-decoration: none;\n      color: #fff;\n    }\n    .boxscores-e-game-link:hover{\n      color: #fff;\n    }\n    .boxscores-e-game-teams{\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      width: 57px;\n      line-height: normal;\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 14px;\n      margin-top: 8px;\n    }\n    .boxscores-e-game-inning-top:before{\n      content: '';\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 7px 9px 7px;\n      border-color: transparent transparent #fff transparent;\n      margin-right: 5px;\n      display: inline-block;\n    }\n    .boxscores-e-game-inning-bottom:before{\n      content: '';\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 9px 7px 0 7px;\n      border-color: #fff transparent transparent transparent;\n      margin-right: 5px;\n      display: inline-block;\n    }\n    .boxscores-e-game-teamscore{\n      float: right;\n    }\n    .boxscores-e-game-time{\n      font-size: 12px;\n      float: right;\n      font-weight: 400;\n    }\n    .boxscores-e-nav{\n      float: left;\n      margin-right: 5px;\n      line-height: 50px;\n    }\n    .boxscores-e-nav-button{\n      width: 30px;\n      height: 30px;\n      border-radius: 5px;\n      background-color: #fff;\n      color: #000;\n      border: none;\n      margin: 0 3px 0 0;\n      vertical-align: middle;\n      cursor: pointer;\n      font-size: 24px;\n      padding: 0;\n    }\n    .boxscores-e-nav-button>span{\n      vertical-align: middle;\n      margin-top: 1px;\n      display: inline-block;\n    }\n    .boxscores-e-nav-button:focus{\n      outline: none;\n    }\n  ",document.head.appendChild(N);var D=document.createElement("section");D.className="boxscores-e-bar",function(){var n=v(),a=new Date((new Date).getTime()+3600*n.offset*1e3),t=a.getUTCFullYear(),o=a.getUTCMonth()+1;o=1===o.toString().length?"0"+o:o;var s=a.getUTCDate(),p=t+"-"+o+"-"+s,g=new XMLHttpRequest;g.onreadystatechange=function(){if(4===g.readyState&&200===g.status){var e=JSON.parse(g.responseText);c=w(e.data,n.offset,n.tzAbbrev,s),m=c.length,D.innerHTML='\n          <div class="boxscores-e-title">\n            TODAY\'S BASEBALL GAMES\n          </div>\n\n          <ul class="boxscores-e-schedule"></ul>\n\n          <div class="boxscores-e-nav">\n            <button class="boxscores-e-nav-button boxscores-e-prev">\n              <span class="ddh-icon-angle-left"></span>\n            </button>\n            <button class="boxscores-e-nav-button boxscores-e-next">\n              <span class="ddh-icon-angle-right"></span>\n            </button>\n          </div>\n        ';var a=document.currentScript||function(){for(var e=document.getElementsByTagName("script"),n=e.length-1;n>=0;n--){var a=e[n].src.match(regexpURL);if(null!=a&&(r=a[0],-1!=e[n].src.indexOf(r)))return e[n]}}();d=a.parentNode,d.insertBefore(D,a),i=d.offsetWidth,i>=1340?l=5:i>=1180?l=4:i>=990?l=3:i>=640&&(l=2);for(var t=0;t<l;t++)void 0!==c[t]&&f.push(t);for(var o=0,p=f.length;o<p;o++){var h=f[o],b=document.createElement("li");b.className="boxscores-e-game",b.innerHTML=c[h].htmlMarkup;document.getElementsByClassName("boxscores-e-schedule")[0].appendChild(b)}document.getElementsByClassName("boxscores-e-nav-button boxscores-e-next")[0].addEventListener("click",function(){C();for(var e=0;e<l;e++){var n=f[e]+l;n>=m&&(n-=m),void 0!==c[n]&&(f[e]=n)}for(var a=0,t=f.length;a<t;a++){var o=f[a],s=document.createElement("li");s.className="boxscores-e-game",s.innerHTML=c[o].htmlMarkup;document.getElementsByClassName("boxscores-e-schedule")[0].appendChild(s)}});document.getElementsByClassName("boxscores-e-nav-button boxscores-e-prev")[0].addEventListener("click",function(){C();for(var e=0;e<l;e++){var n=f[e]-l;n<0&&(n+=m),void 0!==c[n]&&(f[e]=n)}for(var a=0,t=f.length;a<t;a++){var o=f[a],s=document.createElement("li");s.className="boxscores-e-game",s.innerHTML=c[o].htmlMarkup;document.getElementsByClassName("boxscores-e-schedule")[0].appendChild(s)}})}};var x=e(h);g.open("GET",b+x+p,!0),g.send(),u=!0}(),window.addEventListener("resize",function(){if(i=d.offsetWidth,u)if(i>=1170&&5!==l){l=5,C();var e=l-f.length;if(e>0){for(var n=0;n<e;n++){var a=f[f.length-1];f.push(a+1>=m?0:a+1)}for(var t=0,o=f.length;t<o;t++){var s=f[t],r=document.createElement("li");r.className="boxscores-e-game",r.innerHTML=c[s].htmlMarkup;var p=document.getElementsByClassName("boxscores-e-schedule")[0];p.appendChild(r)}}}else if(i<1170&&i>=1010&&4!==l){l=4,C();var e=l-f.length;if(e>0){for(var n=0;n<e;n++){var a=f[f.length-1];f.push(a+1>=m?0:a+1)}for(var t=0,o=f.length;t<o;t++){var s=f[t],r=document.createElement("li");r.className="boxscores-e-game",r.innerHTML=c[s].htmlMarkup;var p=document.getElementsByClassName("boxscores-e-schedule")[0];p.appendChild(r)}}else{e=Math.abs(e);for(var n=0;n<e;n++)f.pop();for(var t=0,o=f.length;t<o;t++){var s=f[t],r=document.createElement("li");r.className="boxscores-e-game",r.innerHTML=c[s].htmlMarkup;var p=document.getElementsByClassName("boxscores-e-schedule")[0];p.appendChild(r)}}}else if(i<1010&&i>=820&&3!==l){l=3,C();var e=l-f.length;if(e>0){for(var n=0;n<e;n++){var a=f[f.length-1];f.push(a+1>=m?0:a+1)}for(var t=0,o=f.length;t<o;t++){var s=f[t],r=document.createElement("li");r.className="boxscores-e-game",r.innerHTML=c[s].htmlMarkup;var p=document.getElementsByClassName("boxscores-e-schedule")[0];p.appendChild(r)}}else{e=Math.abs(e);for(var n=0;n<e;n++)f.pop();for(var t=0,o=f.length;t<o;t++){var s=f[t],r=document.createElement("li");r.className="boxscores-e-game",r.innerHTML=c[s].htmlMarkup;var p=document.getElementsByClassName("boxscores-e-schedule")[0];p.appendChild(r)}}}else if(i<820&&i>=640&&2!==l){l=2,C();var e=l-f.length;if(e>0);else{e=Math.abs(e);for(var n=0;n<e;n++)f.pop();for(var t=0,o=f.length;t<o;t++){var s=f[t],r=document.createElement("li");r.className="boxscores-e-game",r.innerHTML=c[s].htmlMarkup;var p=document.getElementsByClassName("boxscores-e-schedule")[0];p.appendChild(r)}}}})}();