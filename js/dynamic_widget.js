function getCategoryMetadata (category) {
  var globalMeta = {
    finance: {
      displayName: "Finance",
      domain: "www.investkit.com",
      partnerDomain: "www.myinvestkit.com",
      usesPartnerSubdomain: false,
      hasAiArticles: true,
      category: "finance",
      subCategory: "",
      pub: "investkit"
    },
    nfl: {
      displayName: "Football",
      domain: "www.touchdownloyal.com",
      partnerDomain: "www.mytouchdownzone.com",
      usesPartnerSubdomain: true,
      partnerSubdomain: "football",
      hasAiArticles: true,
      category: "football",
      subCategory: "nfl",
      pub: "touchdownloyal"
    },
    ncaaf: {
      displayName: "Football",
      domain: "www.touchdownloyal.com",
      partnerDomain: "www.mytouchdownzone.com",
      usesPartnerSubdomain: true,
      partnerSubdomain: "football",
      hasAiArticles: true,
      category: "football",
      subCategory: "ncaaf",
      pub: "touchdownloyal"
    },
    nflncaaf: {
      displayName: "Football",
      domain: "www.touchdownloyal.com",
      partnerDomain: "www.mytouchdownzone.com",
      usesPartnerSubdomain: true,
      partnerSubdomain: "football",
      hasAiArticles: true,
      category: "football",
      subCategory: "nfl, ncaaf",
      pub: "touchdownloyal"
    },
    nba: {
      displayName: "Basketball",
      domain: "www.hoopsloyal.com",
      partnerDomain: "www.myhoopszone.com",
      usesPartnerSubdomain: true,
      partnerSubdomain: "basketball",
      hasAiArticles: true,
      category: "basketball",
      subCategory: "nba",
      pub: "hoopsloyal"
    },
    college_basketball: {
      displayName: "Basketball",
      domain: "www.hoopsloyal.com",
      partnerDomain: "www.myhoopszone.com",
      usesPartnerSubdomain: false,
      partnerSubdomain: "basketball",
      hasAiArticles: true,
      category: "basketball",
      subCategory: "ncaa",
      pub: "hoopsloyal"
    },
    mlb: {
      displayName: "Baseball",
      domain: "www.homerunloyal.com",
      partnerDomain: "www.myhomerunzone.com",
      usesPartnerSubdomain: true,
      partnerSubdomain: "baseball",
      hasAiArticles: true,
      category: "baseball",
      subCategory: "mlb",
      pub: "homerunloyal"
    },
    politics: {
      displayName: "Politics",
      domain: "www.joyfulhome.com",
      partnerDomain: "www.myhousekit.com",
      usesPartnerSubdomain: false,
      hasAiArticles: false,
      category: "politics",
      subCategory: "",
      pub: "joyfulhome"
    },
    weather: {
      displayName: "Weather",
      domain: "www.joyfulhome.com",
      partnerDomain: "www.myhousekit.com",
      usesPartnerSubdomain: false,
      hasAiArticles: false,
      category: "weather",
      subCategory: "",
      pub: "joyfulhome"
    },
    crime: {
      displayName: "Crime",
      domain: "www.joyfulhome.com",
      partnerDomain: "www.myhousekit.com",
      usesPartnerSubdomain: false,
      hasAiArticles: false,
      category: "crime",
      subCategory: "",
      pub: "joyfulhome"
    },
    demographics: {
      displayName: "Demographics",
      domain: "www.joyfulhome.com",
      partnerDomain: "www.myhousekit.com",
      usesPartnerSubdomain: false,
      hasAiArticles: false,
      category: "demographics",
      subCategory: "",
      pub: "joyfulhome"
    },
    disaster: {
      displayName: "Disaster",
      domain: "www.joyfulhome.com",
      partnerDomain: "www.myhousekit.com",
      usesPartnerSubdomain: false,
      hasAiArticles: false,
      category: "disaster",
      subCategory: "",
      pub: "joyfulhome"
    }
  };
  if (globalMeta[category]) {
    return globalMeta[category];
  }
  else {
    return globalMeta['finance'];
  }
}

function getPublisher (pub) {
  var apiFallback = false;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "http://synapview.synapsys.us/?action=get_partner_branding&domain=" + pub, false );
  xmlHttp.send( null );
  try {
    var pubResponce = JSON.parse(xmlHttp.responseText);
  }
  catch(err) {
    apiFallback = true;
  }
  if (pubResponce == null || pubResponce.logo == null || pubResponce.logo == "") {
    apiFallback = true;
  }
  var pubs = {
    homerunloyal: {
      displayName: "Home Run Loyal",
      link: "www.homerunloyal.com",
      logo: "../css/public/pub_logos/logo-homerun-loyal.svg",
      hex: "#bc2027"
    },
    touchdownloyal: {
      displayName: "Touchdown Loyal",
      link: "www.touchdownloyal.com",
      logo: "../css/public/pub_logos/logo-touchdown-loyal.svg",
      hex: "#004e87"
    },
    hoopsloyal: {
      displayName: "Hoops Loyal",
      link: "www.hoopsloyal.com",
      logo: "../css/public/pub_logos/logo-hoops-loyal.svg",
      hex: "#f26f26"
    },
    investkit: {
      displayName: "Invest Kit",
      link: "www.investkit.com",
      logo: "../css/public/pub_logos/logo-invest-kit.svg",
      hex: "#3098ff"
    },
    joyfulhome: {
      displayName: "Joyful Home",
      link: "www.joyfulhome.com",
      logo: "../css/public/pub_logos/logo-joyful-home.svg",
      hex: "#43B149"
    }
  };
  if (apiFallback == true) {
    if (pub == null || pub == "" || !pubs[pub.split(".")[0]]) {
      return pubs[currentConfig.pub];
    }
    else {
      return pubs[pub.split(".")[0]];
    }
  }
  else {
    return pubResponce;
  }
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

var protocolToUse = (location.protocol == "https:") ? "https://" : "http://";
var currentConfig;
var currentPub;
var referrer = document.referrer;
var season;
var SpecialDomain = "";
var currentDomain = "";
var verticalsUsingSubdom = ['mlb', 'nfl', 'ncaaf', 'nflncaaf'];
var rounds = 0;
var rand;
// if in iframe, get url from parent (referrer), else get it from this window location (works for localhost)
var baseUrl = referrer.length ? getBaseUrl(referrer) : window.location.origin;

function getBaseUrl(string){
    var urlArray = string.split("/");
    var domain = urlArray[2];
    return protocolToUse + "//" + domain;
}

dynamic_widget = function() {
    var e = location.protocol == 'https:' ? 'https' : 'http',
        protocol = location.protocol == 'https:' ? 'https' : 'http',
        t = e + '://dw.synapsys.us/list_api.php',
        i = 0,
        r = {},
        l = JSON.parse(decodeURIComponent(location.search.substr(1))),
        n = 0,
        a = ['finance', 'nba', 'college_basketball', 'weather', 'crime', 'demographics', 'politics', 'disaster', 'mlb', 'nfl','ncaaf','nflncaaf'];
        if (l.subd && l.subd.indexOf("/") == -1) {
          SpecialDomain = l.subd;
        }
        currentConfig = getCategoryMetadata(l.category);
        currentPub = getPublisher(l.dom);

        //new dyanmic pub color css code
        $('pub_logo').style.backgroundImage = "url('" + currentPub.logo + "')";
        $('pub_link').href = "http://" + currentPub.link;
        var css = '#carousel:hover .carouselShaderHover {background-color: ' + currentPub.hex + '; opacity: 0.4;} ';
        css += '#list-link .dw-btn:before {background-color: ' + currentPub.hex + ';}';
        css += '.dw-info {border-left: 3px solid ' + currentPub.hex + '; padding-left: 10px;}';
        css += '.dw-nav {stroke: ' + currentPub.hex + '; } .dw-nav:hover {background-color: ' + currentPub.hex + '; stroke: white;}';
        css += '#list-link .dw-btn {fill: ' + currentPub.hex + '; color: ' + currentPub.hex + '; border-color: ' + currentPub.hex + ';}';
        style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        //end dynamic pub color css code

        if (typeof(l.subd) == 'undefined' || !l.subd || l.subd == '' || l.subd == null) {
          l.subd = (l.remn == 'false') ? currentConfig.partnerDomain + '/' + l.dom : currentConfig.domain;
        }
    var s = false;
    var o = '';
    function c(e) {
        if (d.readyState == 'complete' || d.readyState == 'interactive') {
            e();
        } else if (d.addEventListener) {
            d.addEventListener('DOMContentLoaded', e)
        } else if (d.attachEvent) {
            d.attachEvent('onreadystatechange', function() {
                if (d.readyState == 'complete') {
                    e();
                }
            })
        }
    }
    function httpGetInitData(league){
      if (league == "nfl") {
        var url = '../js/tdl_list_array.json';
      }
      else if (league == "ncaaf") {
        var url = '../js/tdl_list_array_ncaaf.json';
      }
      else if (league == "nflncaaf") {
        rand = Math.floor((Math.random() * 2) + 1);
        if (rand == 1) {
          var url = '../js/tdl_list_array_ncaaf.json';
          l.category = "ncaaf";
        }
        else {
          var url = '../js/tdl_list_array.json';
          l.category = "nfl";
        }
      }
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
          //On complete function
          initData = JSON.parse(xmlHttp.responseText);
          getRandList(initData);
        }
      }
      xmlHttp.open( "GET", url, true ); // false for synchronous request
      xmlHttp.send( null );
    }
    function getRandList(initData) {
      rand = Math.floor((Math.random() * (initData.length - 1)) + 1);
      var date = new Date;
      var compareDate = new Date('09/15/' + date.getFullYear());
      if (date.getMonth() == compareDate.getMonth() && date.getDate() >= compareDate.getDate()) {
        httpGetData(initData[rand] + "&season=" + date.getFullYear());
        season = date.getFullYear();
      }
      else if (date.getMonth() > compareDate.getMonth()) {
        httpGetData(initData[rand] + "&season=" + date.getFullYear());
        season = date.getFullYear();
      }
      else {
        httpGetData(initData[rand] + "&season=" + (date.getFullYear() - 1));
        season = (date.getFullYear() - 1);
      }
    }

    function m(ignoreRandom) {
      i = 0;// resets index count to 0 when swapping lists
      if (currentConfig.category == "football") {
        httpGetInitData(l.category);
      }
      else {
        httpGetData("",ignoreRandom);
      }

    }
    function httpGetData(query, ignoreRandom) {
      if (l.dom == 'lasvegasnow.com') {
          s = true;
          o = 'finance.lasvegasnow.com'
      }
      if (typeof l.category == 'undefined' || a.indexOf(l.category) == -1) {
          l.category = 'finance'
      }
      if (ignoreRandom == null) {
        var e = typeof l.rand != 'undefined' && n == 0 ? l.rand : Math.floor(Math.random() * 10);
      }
      else {
        var e = rand;
        while (e == rand) {
          e = Math.floor(Math.random() * 10);
          if (e == 0) {e = 1;}
        }
      }
      rand = e;
      var i;
      if (window.XMLHttpRequest) {
          i = new XMLHttpRequest
      } else {
          i = new ActiveXObject('Microsoft.XMLHTTP')
      }
      i.onreadystatechange = function() {
          if (i.readyState == XMLHttpRequest.DONE) {
              if (i.status == 200) {
                  r = JSON.parse(i.responseText);
                  c(u)
              } else {
                  var e = i.statusText;
                  if (i.status == 500) {
                      try {
                          e = JSON.parse(i.responseText).message
                      } catch (t) {
                          console.log('No JSON message')
                      }
                  }
                  e = 'HTTP Error (' + i.status + '): ' + e;
                  if (n++ > 10) {
                      throw e
                  }
                  setTimeout(m, 500)
              }
          }
      };
      rand = e;
      if (currentConfig.category == "football") {
        i.open('GET', protocol + "://prod-touchdownloyal-api.synapsys.us/list/" + query , true);
        i.send()
      }
      else {
        if (l.county != null && l.county != "") { // ajc one off api code
          if (l.county.indexOf('metro') != -1) {
            i.open('GET', "http://dw.synapsys.us/ajc_list_api.php" + '?location=' + l.county + '&category=' + l.category + '&rand=' + e + "&metro=true", true);
          }
          else {
            i.open('GET', "http://dw.synapsys.us/ajc_list_api.php" + '?location=' + l.county + '&category=' + l.category + '&rand=' + e, true);
          }
        }
        else {
          i.open('GET', t + '?partner=' + (typeof l.dom != 'undefined' ? l.dom : '') + '&cat=' + l.category + '&rand=' + e, true);
        }
        i.send()
      }
    }

    function u() {
        if (l.dom == 'nydailynews.com') {
            var e = document.getElementsByClassName('dw')[0];
            e.style.height = '340px';
            var t = document.createElement('div');
            t.style.width = '100%';
            t.style.height = '10px';
            t.style.color = '#999';
            t.style['text-align'] = 'center';
            t.style['line-height'] = '10px';
            t.style['font-size'] = '10px';
            t.style['background-color'] = '#fff';
            t.innerHTML = 'PAID CONTENT';
            document.body.insertBefore(t, e)
        }
        if (l.category == 'mlb') {
            r.l_title = r.l_title.replace("MLB","Baseball");
        }
        if (currentConfig.category == "football") {$('title').innerHTML = r.data.listInfo.listName;} else {$('title').innerHTML = r.l_title;}
        // if ($('line4') != null && d.getElementsByClassName('dw')[0].clientWidth == 350 && $('title').scrollHeight > 61) {
        //     $('title').setAttribute('style', 'font-size: 14px')
        // }
        var n = true;
        if (document.referrer == "") {
          currentDomain = window.location.hostname.toString();
        }
        else {
          currentDomain = document.referrer;
          currentDomain = currentDomain.split('/')[2];
        }
        currentDomain = currentDomain.replace(/^[^.]*\.(?=\w+\.\w+$)/, ""); //remove www.
        switch (l.category) {
            case 'nba':
            case 'college_basketball':
                var a = l.remn == 'true' ? 'http://' + l.subd + '/' + currentConfig.subCategory + '/widget-list' : 'http://' + l.subd + '/' + currentConfig.subCategory + '/w-list';
                break;
            case "mlb":
                $("suburl").style.cssText += "pointer-events:none; cursor:default";
                $("carousel").className = "one";
                var a = "";
                a = l.remn == 'true' ? 'http://' + l.subd + '/list' : "http://" + l.subd +'/list';
                var n = false
                break;
            case "nfl":
            case "ncaaf":
            case "nflncaaf":
                $("suburl").style.cssText += "pointer-events:none; cursor:default";
                $("carousel").className = "one";
                var a = "";
                a = l.remn == 'true' ? 'http://' + l.subd : "http://" + l.subd;
                var n = false
                break;
            case 'finance':
                var a = l.remn == 'true' ? 'http://' + l.subd + '/widget-list' : 'http://' + l.subd + '/w-list';
                if (s) {
                    a = a.replace(currentConfig.partnerDomain, o)
                }
                break;
            default:
                var a = l.remn == 'true' ? 'http://' + l.subd + '/wlist' : 'http://' + l.subd + '/wlist';
                var n = false
        }
        if (currentConfig.category != "football" && (l.county == null || l.county == "")) { //normal links (not football or ajc)
          a += n ? '?tw=' + r.l_param + '&sw=' + r.l_sort + '&input=' + r.l_input : '/tw-' + r.l_param + '+sw-' + r.l_sort + '+input-' + r.l_input;
        }
        else if (currentConfig.category == "football") { //football links
          a += "/" + l.category + "/list/" + r.data.listData[0].rankType + "/" + r.data.listData[0].statType.replace(r.data.listData[0].rankType + "_", "") + "/" + season + "/" + r.data.listInfo.ordering + "/" + "10" + "/" + "1";
        }
        else if (l.county != null || l.county != ""){ //ajc only links
          a += '/category-' + currentConfig.category + '+location-' + l.county + '+rand-' + rand;
        }
        if ($('list-link') && l.showLink != 'false') {
            $('list-link').href = a;
            $('imgurl').href = a;
            $('title-link').href = a;
            $('shareFacebook').href = "https://www.facebook.com/sharer/sharer.php?u=" + a;
            $('shareTwitter').href = "https://twitter.com/home?status=" + a;
            $('shareLink').addEventListener("click", function(){
              copyToClipboard(a);
              $('shareSuccess').style.display = "block";
              setTimeout(function(){
                $('shareSuccess').style.display = "none";
              }, 2000);
             });
        }
        if (l.showLink == 'false') {
          $('list-link').style.display = "none";
          $('next-list-link').getElementsByClassName("dw-btn")[0].style.marginLeft = "calc(50% - 85px)";
          var linkHovers = document.getElementsByClassName("hover");
          for (i = 0; i < linkHovers.length; i++) {
            linkHovers[i].style.display = "none";
          }
        } else {
          //clickthrough analitics code
          document.getElementById("list-link").addEventListener("click", function(){
            console.log("fired click");
            window.parent.postMessage({snt_data: {click: true}, action: 'snt_tracker'}, '*');
          });
          document.getElementById("imgurl").addEventListener("click", function(){
            console.log("fired click");
            window.parent.postMessage({snt_data: {click: true}, action: 'snt_tracker'}, '*');
          });
        }

        p()
      }
function p() {
  if (rounds == 0) {
    rounds++;
    checkBlankImages();
  }
  //todo: plug in actual api date values here
  var date = new Date();
  var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $('meta').innerHTML = "Posted on " + dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

      if (currentConfig.category == "football") {
        var e = r.data.listData[i];
        var v_link = '';
        if (e.rankType == "team") {
          $('line1').innerHTML = e.teamName;
          $('line2').innerHTML = "Division: <b>" + e.divisionName + "</b>";
          var a = "";
          if (SpecialDomain == "") {// if no special link then create
            v_link = l.remn == 'true' ? "/team/" + e.teamName.replace(/ /g, "-").toLowerCase() + '/' + e.teamId : "/t/" + e.teamName.replace(/ /g, "-").toLowerCase() + '/' + e.teamId;

            a = l.remn == 'true' ? 'http://' + currentConfig.domain + "/" +l.category+ v_link : "http://" + currentConfig.partnerDomain + "/" + l.dom + "/" +l.category+ v_link;
          }
          else {
            v_link = "/team/" + escape(e.teamName.replace(/ /g, "-").toLowerCase()) + '/' + e.teamId;

            a = 'http://' + SpecialDomain + "/" +l.category+ v_link;
          }
          if (l.showLink != 'false') {
            $('line1').href = a;
          }
        }
        else {
          $('line1').innerHTML = e.playerFirstName + " " + e.playerLastName;
          var a = "";
          if (SpecialDomain == "") {
            v_link = l.remn == 'true' ? "/player/" + e.teamName.replace(/ /g, "-").toLowerCase() + '/' + e.playerFirstName.replace(/ /g, "-").toLowerCase() + '-' + e.playerLastName.replace(/ /g, "-").toLowerCase() + "/" + e.playerId : "/p/" + e.teamName.replace(/ /g, "-").toLowerCase() + '/' + e.playerFirstName.replace(/ /g, "-").toLowerCase() + '-' + e.playerLastName.replace(/ /g, "-").toLowerCase() + "/" + e.playerId;

            a = l.remn == 'true' ? 'http://' + currentConfig.domain + "/" + l.category + v_link : "http://" + currentConfig.partnerDomain + "/" + l.dom + "/" + l.category + v_link;
            $('line2').innerHTML = "Team: <a href='" + 'http://' + currentConfig.domain + "/" +l.category+ "/team/" + escape(e.teamName.replace(/ /g, "-").toLowerCase()) + '/' + e.teamId + "'><b>" + e.teamName + "</b></a>";

          }
          else {
            v_link = "/player/" + escape(e.teamName.replace(/ /g, "-").toLowerCase()) + '/' + escape(e.playerFirstName.replace(/ /g, "-").toLowerCase()) + '-' + escape(e.playerLastName.replace(/ /g, "-").toLowerCase()) + "/" + e.playerId;

            a = 'http://' + SpecialDomain + "/" + l.category+v_link;
            $('line2').innerHTML = "Team: <a href='" + 'http://' + SpecialDomain + "/" +l.category+ "/team/" + escape(e.teamName.replace(/ /g, "-").toLowerCase()) + '/' + e.teamId + "'><b>" + e.teamName + "</b></a>";
          }
          if (l.showLink != 'false') {
            $('line1').href = a;
          }
        }
        var statType = e.statDescription.replace(/_/g, " ");
        statType = statType.replace("player", "");
        statType = statType.replace("team", "");
        statType = statType.replace(/(^| )(\w)/g, function(x) {
          return x.toUpperCase();
        });
        var stat = Math.floor(Number(e.stat));
        switch(e.statType) {
            case "player_kicking_longest_field_goal_made":
                $('desc').innerHTML = statType + ": " + stat + " yards";
                break;
            case "player_punting_longest_punt":
                $('desc').innerHTML = statType + ": " + stat + " yards";
                break;
            case "player_returning_longest_return":
                $('desc').innerHTML = statType + ": " + stat + " yards";
                break;
            default:
                $('desc').innerHTML = statType + ": " + stat;
        }

        var t = $('mainimg');
        var n = t.getAttribute('onerror');
        t.setAttribute('onerror', '');
        t.setAttribute('src', '');
        $('carouselOverlay').className = "football";
        if (e.rankType == "team") {
          if (e.teamLogo != null && e.teamLogo != "null" && e.teamLogo.indexOf('no-image') == -1 &&  window.location.pathname.indexOf('_970') == -1) {
            $('carouselOverlay').style.display = "none";
            $('carouselShader').style.display = "block";

            t.setAttribute('src', protocolToUse + "images.synapsys.us" + e.teamLogo + "?width=" + (t.width * window.devicePixelRatio));
          }
          else {
            $('carouselOverlay').style.display = "block";
            $('carouselShader').style.display = "none";

            t.setAttribute('src', protocolToUse + "images.synapsys.us/01/fallback/stock/2017/03/football_stock.jpg" +"?width=" + (300 * window.devicePixelRatio));
          }
        }
        else {
          if (e.playerHeadshotUrl != null && e.playerHeadshotUrl != "null" && e.playerHeadshotUrl.indexOf('no-image') == -1 &&  window.location.pathname.indexOf('_970') == -1) {
            $('carouselOverlay').style.display = "none";
            $('carouselShader').style.display = "block";

            t.setAttribute('src', protocolToUse + "images.synapsys.us" + e.playerHeadshotUrl + "?width=" + (t.width * window.devicePixelRatio));
          }
          else {
            $('carouselOverlay').style.display = "block";
            $('carouselShader').style.display = "none";

            t.setAttribute('src', protocolToUse + "images.synapsys.us/01/fallback/stock/2017/03/football_stock.jpg" + "?width=" + (300 * window.devicePixelRatio));
          }
        }
        setTimeout(function(e, t) {
            t.setAttribute('onerror', e)
        }.bind(undefined, n, t), 0);

        $('num').innerHTML = '<hash>#</hash>' + e.rank;
        $('fallbackNum').innerHTML = '#' + e.rank;

        if ($('list-link')) {
            var u = d.getElementsByClassName('dw-btn')[0];
            // if (u.offsetTop + u.scrollHeight > d.getElementsByClassName('dw')[0].clientHeight) {
            //     $('title').setAttribute('style', 'font-size: 14px');
            //     if (d.getElementsByClassName('dw')[0].clientHeight <= 250) {
            //         $('title').setAttribute('style', 'font-size: 12px')
            //     }
            // }
            if (u.offsetTop + u.scrollHeight > d.getElementsByClassName('dw')[0].clientHeight - 10 && d.getElementsByClassName('dw')[0].clientHeight <= 250) {
                d.getElementsByClassName('dw-btn')[0].setAttribute('style', 'margin-top: 0')
            }
        }
        var p = $('title');
        // if (p.offsetTop + p.scrollHeight > $('carousel').offsetTop) {
        //     $('title').setAttribute('style', 'font-size: 14px')
        // }
      }
      else {
        var e = r.l_data[i];
        e.li_url = l.remn == 'true' ? e.li_primary_url : e.li_partner_url;
        e.li_line_url = l.remn == 'true' ? e.li_primary_url : e.li_partner_url;
        if (currentConfig.category == "basketball" || currentConfig.category == "baseball") {
          e.li_url = e.li_url.replace("/t/", "/team/");
          e.li_url = e.li_url.replace("/p/", "/player/");
          e.li_line_url = e.li_line_url.replace("/t/", "/team/");
          e.li_line_url = e.li_line_url.replace("/p/", "/player/");
        }
        e.li_url = e.li_url.replace("/w-list", "/widget-list");
        if (SpecialDomain) {
          e.li_url = "http://" + e.li_url.replace(/[\/]+([a-z]+[.])?[a-z0-9\_\-]+[.]+[a-z]+[\/]/gi, SpecialDomain + "/").replace('/{partner}', "");
          e.li_line_url = "http://" + e.li_line_url.replace(/[\/]+([a-z]+[.])?[a-z0-9\_\-]+[.]+[a-z]+[\/]/gi, SpecialDomain + "/").replace('/{partner}', "");
        }
        else {
          e.li_url = "http:" + e.li_url.replace('{partner}', l.dom);
          e.li_line_url = "http:" + e.li_line_url.replace('{partner}', l.dom);
        }
        if (s) {
            e.li_url = e.li_url.replace('www.myinvestkit.com', o);
            e.li_line_url = e.li_line_url.replace('www.myinvestkit.com', o)
        }

        $('line1').innerHTML = e.li_title;
        $('line2').innerHTML = e.li_sub_txt;
        if ($('line4') == null) {
            $('desc').innerHTML = e.li_str.replace(e.li_value.split(' ')[0], "<b class='highlight'>" + e.li_value.split(' ')[0] + "</b>");
        } else {
            $('desc').innerHTML = e.li_value;
            $('line4').innerHTML = e.li_tag
        }
        if (l.showLink != 'false') {
          $('line1').href = e.li_line_url;
        }
        var t = $('mainimg');
        var n = t.getAttribute('onerror');
        t.setAttribute('onerror', '');
        t.setAttribute('src', '');
        var fallbackImg = "http://images.synapsys.us/01/fallback/stock/2017/03/";
        var cssClass = "";
        switch(l.category) {
            case "nfl":
            case "ncaaf":
              fallbackImg += "football_stock.jpg";
              cssClass = "football";
              break;
            case "nba":
            case "college_basketball":
              fallbackImg += "basketball_stock.jpg";
              cssClass = "basketball";
              break;
            case "finance":
              fallbackImg += "finance_stock.jpg";
              cssClass = "finance";
              break;
            case "mlb":
              fallbackImg += "baseball_stock.jpg";
              cssClass = "baseball";
              break;
            case "disaster":
            case "demographics":
            case "crime":
            case "weather":
            case "politics":
              cssClass = "realestate";
              fallbackImg += "real_estate_stock.jpg";
              break;
            default:
              cssClass = "finance";
              fallbackImg += "finance_stock.jpg";
        }
        fallbackImg += "?width=" + (300 * window.devicePixelRatio);
        $('carouselOverlay').className = cssClass;
        if (e.li_img.indexOf("no_player_icon") != -1 || e.li_img.indexOf("no-image-fb") != -1 || e.li_img.indexOf("no_image") != -1 ||  window.location.pathname.indexOf('_970') != -1) {
          t.setAttribute('src', fallbackImg + "?width=" + (300 * window.devicePixelRatio));
          $('carouselOverlay').style.display = "block";
          $('carouselShader').style.display = "none";
        }
        else {
          t.setAttribute('src', e.li_img + "?width=" + (300 * window.devicePixelRatio));
          $('carouselOverlay').style.display = "none";
          $('carouselShader').style.display = "block";
        }
        setTimeout(function(e, t) {
            t.setAttribute('onerror', e)
        }.bind(undefined, n, t), 0);
        $('num').innerHTML = '<hash>#</hash>' + e.li_rank;
        $('fallbackNum').innerHTML = '#' + e.li_rank;
        // if (e.li_subimg !== false) {
        //     var a = l.remn == 'true' ? e.li_primary_url : e.li_partner_url.replace('{partner}', l.dom);
        //     if (s) {
        //         a = a.replace('www.myinvestkit.com', o)
        //     }
        //     var c = $('subimg');
        //     var n = c.getAttribute('onerror');
        //     c.setAttribute('onerror', '');
        //     c.setAttribute('src', '');
        //
        //     //hide double image if second image is blank for this profile
        //     convertImage(l.category, c, e);
        //
        //     setTimeout(function(e, t) {
        //         t.setAttribute('onerror', e)
        //     }.bind(null, n, c), 0);
        //     $('suburl').href = "http:"+a;
        //     var m = $('carousel');
        //     if (m.className.indexOf('two') == -1) {
        //         m.className += ' two'
        //     }
        // }
        // else {
          //set double image off if we dont have it for this list
          $('carousel').setAttribute('class', 'one');
          $('suburl').setAttribute('style', 'display: none');
        // }
        if ($('list-link')) {
            var u = d.getElementsByClassName('dw-btn')[0];
            // if (u.offsetTop + u.scrollHeight > d.getElementsByClassName('dw')[0].clientHeight) {
            //     $('title').setAttribute('style', 'font-size: 14px');
            //     if (d.getElementsByClassName('dw')[0].clientHeight <= 250) {
            //         $('title').setAttribute('style', 'font-size: 12px')
            //     }
            // }
            if (u.offsetTop + u.scrollHeight > d.getElementsByClassName('dw')[0].clientHeight - 10 && d.getElementsByClassName('dw')[0].clientHeight <= 250) {
                d.getElementsByClassName('dw-btn')[0].setAttribute('style', 'margin-top: 0')
            }
        }
        var p = $('title');
        // if (p.offsetTop + p.scrollHeight > $('carousel').offsetTop) {
        //     $('title').setAttribute('style', 'font-size: 14px')
        // }
      }

    }

    function convertImage(category, c, e){
      switch(category){
        case 'mlb':
        case 'ncaaf':
        case 'nfl':
        case 'college_basketball':
        case 'nba':
        $("suburl").style.cssText += "pointer-events:none; cursor:default";
        $("carousel").className = "one";
        break;
        case 'finance':
        if (e.li_subimg.img == "//w1.synapsys.us/widgets/css/public/no_image.jpg") {
          $('carouselOverlay').style.display = "block";
          $('carouselShader').style.display = "none";
          c.setAttribute('src', e.li_subimg.img);
          $('carousel').setAttribute('class', 'two');
          $('suburl').setAttribute('style', 'display: block');
        }
        else {
          $('carouselOverlay').style.display = "none";
          $('carouselShader').style.display = "block";
          c.setAttribute('src', e.li_subimg.img);
          //set double image css to "on" if we have a double image for this list
          $('carousel').setAttribute('class', 'two');
          $('suburl').setAttribute('style', 'display: block');
        }
        break;
      }
    }

    function w(e, autoAdvance) {
        i += e;
        if (currentConfig.category == "football") {
          i = i >= r.data.listData.length ? 0 : i < 0 ? r.data.listData.length - 1 : i;
        }
        else {
          i = i >= r.l_data.length ? 0 : i < 0 ? r.l_data.length - 1 : i;
        }
        p();
        if (typeof dataLayer != 'undefined' && autoAdvance != true) {
            dataLayer.push({
                event: e == 1 ? 'nav-right' : 'nav-left',
                eventAction: dynamic_widget.get_title()
            })
        }
    }

    function checkBlankImages() {
      var goodNumber = 0;
      switch (l.category) {
        case "nfl":
        case "ncaaf":
          if (r.data.listData[i].rankType == "player") {
            for (n = 0; n < r.data.listData.length && goodNumber == 0; n++) {
              if (r.data.listData[n].playerHeadshotUrl != null && r.data.listData[n].playerHeadshotUrl.indexOf("no-image") == -1) {
                goodNumber = n;
                break;
              }
            }
          }
          else {
            for (n = 0; n < r.data.listData.length && goodNumber == 0; n++) {
              if (r.data.listData[n].teamLogo != null && r.data.listData[n].teamLogo.indexOf("no-image") == -1) {
                goodNumber = n;
                break;
              }
            }
          }
          break;
        case "mlb":
        case "nba":
        case "college_basketball":
            for (n = 0; n < r.l_data.length && goodNumber == 0; n++) {
              if (r.l_data[i].li_img != null && r.l_data[i].li_img.indexOf("no-image") == -1) {
                goodNumber = n;
                break;
              }
            }
          break;
      }
        w(goodNumber, true);
    }

    function f() {
        return l.dom + ':' + l.category + ':' + (r.l_sort == null ? r.l_param : r.l_sort) + ':' + r.l_title
    }

    function h() {
        if (l.carousel == true) {
            var e = d.getElementsByTagName('a');
            for (var t = 0; t < e.length; t++) {
                e[t].setAttribute('onclick', 'event.preventDefault(); return false;')
            }
            var i = d.querySelectorAll('.hover');
            for (var t = 0; t < i.length; t++) {
                i[t].parentNode.removeChild(i[t])
            }
            $('list-link').parentNode.removeChild($('list-link'));
            return false
        }
        // $('verticalDisplayName').innerHTML = currentConfig.displayName;
    }
    m();
    c(h);
    return {
        carousel: w,
        get_title: f,
        m: m
    }
}();
