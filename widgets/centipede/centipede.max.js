var centipede = function () {
    var protocolToUse = (location.protocol == "https:") ? "https://" : "http://";
    var countSelf = document.getElementsByClassName("centipedeIframe");
    countSelf = countSelf.length;
//grab the current script dom element
    var embedURL = "centipede.js";
    var currentScript = document.currentScript != null && document.currentScript.src.indexOf(embedURL) != -1 ? document.currentScript : (function () { // resolution for IE since it does not have currentScript to find the currently running script on the page
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length - 1; i >= 0; i--) {
            if (scripts[i].src.indexOf(embedURL) != -1) {
                return scripts[i];
            }
        }
    })();
    var waldo = "//waldo.synapsys.us/getlocation/2";
    var getlocation;

    if (window.frameElement) {
        // in frame
        var friendlyIframe = document.createElement('div');
        friendlyIframe.id = "friendlyIframe_" + countSelf;
        friendlyIframe.className = "centipedeIframe"
        friendlyIframe.style.width = '300';
        friendlyIframe.style.height = '250';
        friendlyIframe.style.border = 'none';
        currentScript.parentNode.insertBefore(friendlyIframe, currentScript);
        var iframeContent = friendlyIframe;
        var doc = document;
    }
    else {
        // not in frame
        var friendlyIframe = document.createElement('iframe');
        //create friendly iframe to place ourselves inside
        friendlyIframe.id = "friendlyIframe_" + countSelf;
        friendlyIframe.className = "centipedeIframe"
        friendlyIframe.width = '300';
        friendlyIframe.height = '250';
        friendlyIframe.src = 'about:blank';
        friendlyIframe.style.border = 'none';
        currentScript.parentNode.insertBefore(friendlyIframe, currentScript);
        var iframeContent = friendlyIframe.contentWindow;
        var doc = iframeContent.document;
    }

//inject HTML and CSS structure
    var html = `
    <style>
    /* google fonts */
    /* latin-ext */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      src: local('Lato Regular'), local('Lato-Regular'), url(http://fonts.gstatic.com/s/lato/v13/8qcEw_nrk_5HEcCpYdJu8BTbgVql8nDJpwnrE27mub0.woff2) format('woff2');
      unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      src: local('Lato Regular'), local('Lato-Regular'), url(http://fonts.gstatic.com/s/lato/v13/MDadn8DQ_3oT6kvnUq_2r_esZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      src: local('Lato Bold'), local('Lato-Bold'), url(http://fonts.gstatic.com/s/lato/v13/rZPI2gHXi8zxUjnybc2ZQFKPGs1ZzpMvnHX-7fPOuAc.woff2) format('woff2');
      unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      src: local('Lato Bold'), local('Lato-Bold'), url(http://fonts.gstatic.com/s/lato/v13/MgNNr5y1C_tIEuLEmicLmwLUuEpTyoUstqEm5AMlJo4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
    }
    body {
      border: none;
      margin: 0;
      padding: 0;
      -webkit-overflow-scrolling: touch;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
    img {
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
    }
    .icon {
      background-position: 50%;
      background-repeat: no-repeat;
      height: 30px;
      width: 30px;
    }
    .wrapper {
      position: absolute;
      overflow: hidden;
      width: 300px;
      height: 250px;
      background-color: #f7f7f7;
      border: 1px solid #e1e1e1;
      box-sizing: border-box;
    }
    .edge_shader {
      position: absolute;
      right:-5px;
      top:0;
      width: 3px;
      height: 100%;
      box-shadow:  -5px 0 10px rgba(0,0,0,0.8);
      z-index: 999;
      transition: opacity 0.2s ease-in-out;
    }
    .helper {
      box-sizing: border-box;
      position: absolute;
      right:0px;
      left:0px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 5px 10px;
      font-family: lato, helvetica;
      font-weight: 900;
      color: #666666;
      font-size: 12px;
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
      background-color: rgba(248, 248, 248, 0.8);
      transition: opacity 0.2s ease-in-out;
      z-index: 9;
    }
    .helper2 {
      pointer-events: none;
      position: absolute;
      box-sizing: border-box;
      width: 35px;
      right:0px;
      top: 50%;
      transform: translateY(-50%);
      padding: 10px 5px 10px 10px;
      font-family: lato, helvetica;
      /*font-weight: 300;*/
      font-size: 20px;
      color: white;
      fill: white;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      overflow: hidden;
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
      background-color: rgba(0, 0, 0, 0.8);
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.26), 0 0 0 1px rgba(0,0,0,0.09);
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
      z-index: 9;
    }
    .helper2 .icon {
      animation:swipe 2s infinite;
    }
    @keyframes swipe {
      0%{
        -webkit-transform: translateX(50px);
        -moz-transform: translateX(50px);
        -ms-transform: translateX(50px);
        -o-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 0.1;
      }
      50% {
        -webkit-transform: translateX(-5px);
        -moz-transform: translateX(-5px);
        -ms-transform: translateX(-5px);
        -o-transform: translateX(-5px);
        transform: translateX(-5px);
        opacity:1;
      }
      100% {
        -webkit-transform: translateX(-50px);
        -moz-transform: translateX(-50px);
        -ms-transform: translateX(-50px);
        -o-transform: translateX(-50px);
        transform: translateX(-50px);
        opacity:0.1;
      }
    }
    .slider {
      position: absolute;
      width: 300px;
      height: 250px;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      background-color: #f7f7f7;
      animation:bounce 2s infinite;
      cursor: move;
      -ms-overflow-style: none;
    }
    .slider.stopAnim {
      transform: translateX(0); //force hw accel
      -webkit-animation: 0;
      animation: 0;
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0); }
      40% {
        -webkit-transform: translateX(12px);
        -moz-transform: translateX(12px);
        -ms-transform: translateX(12px);
        -o-transform: translateX(12px);
        transform: translateX(12px); }
      60% {
        -webkit-transform: translateX(3px);
        -moz-transform: translateX(3px);
        -ms-transform: translateX(3px);
        -o-transform: translateX(3px);
        transform: translateX(3px); } }
    .slider_block {
      position: relative;
      display: inline-block;
      height: 250px;
      padding-left: 5px;
    }
    .slider_block:nth-of-type(1) {
      padding-left: 2px!important;
    }
    .slider_block:nth-of-type(2) {
      padding-left: 0px;
    }
    // .slider_block:nth-of-type(3n+1) {
    //   padding-left: 0px;
    // }
    .slider_block:last-of-type {
      margin: 0;
      padding: 0;
    }
    .list_item {
      overflow: hidden;
      position: relative;
      display: inline-block;
      height: 218px;
      width: 138px;
      margin-bottom:4px;
      background-color: white;
      border-radius: 2px;
      border: solid 1px #e1e1e1;
      margin-left: 2px;
    }
    .ad_spacer {
      width: 296px;
      height: 100%;
    }
    .slider_block:nth-of-type(3n+5) {
      margin-left:2px;
    }
    .ad_item {
      position: absolute;
      height: 100%;
      top:0;
      z-index: 99;
    }
    .profile_image_div {
      width: 100%;
      height: 123px;
      display: block;
      overflow:hidden;
      position: absolute;
      background-size: 1000% 1000%;
      image-rendering: optimizeSpeed;             /*                     */
      image-rendering: -moz-crisp-edges;          /* Firefox             */
      image-rendering: -o-crisp-edges;            /* Opera               */
      image-rendering: -webkit-optimize-contrast; /* Chrome (and Safari) */
      image-rendering: optimize-contrast;         /* CSS3 Proposed       */
      -ms-interpolation-mode: nearest-neighbor;   /* IE8+                */
      /*border-bottom: 1px solid rgba(50,50,50,0.1);*/
    }
    .profile_image_div.fallback::before {
      content: "";
      height: 100%;
      width: 100%;
      top:0;
      left:0;
      position: absolute;
      z-index: 99;
      opacity: 0.6;
    }
    .profile_image {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .num {
      font-family: lato, helvetica;
      position: absolute;
      right: -5px;
      top: -20px;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 30px solid black;
      transform: rotate(-45deg);
      z-index: 100;
      outline: 1px solid rgba(255,255,255,0.4);
    }
    .num_text {
    	font-size: 12px;
      color: white;
      width: 20px;
      top: -9px;
      right: 9px;
      text-align: center;
      font-weight: lighter;
      position: absolute;
      transform: rotate(45deg);
    }
    .info {
      width: 100%;
      position: absolute;
      top: 130px;
      font-family: lato, helvetica;
      text-align: center;
    }
    .name {
      font-size: 14px;
      max-width 95%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 5px;
    }
    .symbl, .location {
      font-size: 12px;
      color: #bebebe;
      max-width 95%;
      padding: 0 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .location {
      margin-bottom: 5px;
      max-width 95%;
      padding: 0 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .value {
      font-size: 20px;
      color: #272727;
      font-weight: 900;
      margin-top: 3px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 5px;
    }
    .stat_type {
      font-size: 12px;
      color: #666666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 5px;
    }
    .next_list {
      font-family: lato, helvetica;
      font-size: 12px;
      position: relative;
      top: -96px;
      width: 56px;
      margin: 0 5px 0 0;
      padding: 80px 10px 88px 10px;
      text-align: center;
      color: white;
    }
    .next_arrow {
      font-size: 30px;
      margin-bottom: 5px;
    }
    </style>
    <div class="wrapper">
      <div class="helper" id="helper_` + countSelf + `">
      </div>
      <div class="helper2" id="helper2_` + countSelf + `">
        <div class="icon swipe_right">
          <svg version="1.1" x="0px" y="0px" viewBox="10 10 80 80" enable-background="new 0 0 100 100" xml:space="preserve"><g><path  d="M36,31.345c0-0.912,0-1.778,0-2.591c-2-1.458-3.402-3.814-3.402-6.476c0-4.416,3.55-8.01,7.965-8.01   c4.418,0,7.881,3.594,7.881,8.01c0,2.662-1.443,5.019-3.443,6.477v2.59c3-1.704,5.631-5.125,5.631-9.066   c0-5.635-4.531-10.219-10.166-10.219s-10.103,4.584-10.103,10.219C30.362,26.221,33,29.642,36,31.345z"/><path  d="M70.07,43.118h-2.762c-0.777,0-1.574,0.188-2.275,0.53c-0.362-2.075-2.176-3.658-4.353-3.658h-2.763   c-0.909,0-1.759,0.278-2.462,0.752c-0.608-1.715-2.246-2.944-4.165-2.944h-2.763c-0.805,0-1.559,0.216-2.21,0.593V22.278   c0-3.198-2.602-5.8-5.8-5.8c-3.196,0-5.8,2.602-5.8,5.8v30.591c-1.239,0.589-2.389,1.381-3.389,2.379l-2.264,2.265   c-4.739,4.739-4.739,12.447,0,17.186l6.31,6.311c0.31,0.31,0.635,0.596,0.97,0.867c2.103,3.621,6.032,6.064,10.525,6.064h15.467   c6.701,0,12.15-5.429,12.15-12.102V47.536C74.488,45.1,72.507,43.118,70.07,43.118z M72.279,75.839   c0,5.454-4.459,9.892-9.941,9.892H46.871c-1.821,0-3.525-0.497-4.995-1.353c-1.219-0.729-2.577-1.788-3.82-3.981   c-0.717-1.365-1.127-2.914-1.127-4.558c0-0.61-0.495-1.105-1.104-1.105c-0.611,0-1.105,0.495-1.105,1.105   c0,0.503,0.035,0.997,0.095,1.482l-4.186-4.186c-3.876-3.876-3.876-10.184,0-14.061l2.265-2.264   c0.557-0.557,1.173-1.029,1.826-1.434v7.567c0,0.611,0.494,1.105,1.105,1.105c0.609,0,1.104-0.494,1.104-1.105V22.278   c0-1.979,1.61-3.591,3.59-3.591c1.98,0,3.591,1.612,3.591,3.591v28.378c0,0.611,0.494,1.105,1.104,1.105   c0.609,0,1.104-0.494,1.104-1.105v-8.44c0-1.217,0.991-2.208,2.21-2.208h2.763c1.217,0,2.209,0.991,2.209,2.208v8.452   c0,0.61,0.493,1.104,1.104,1.104c0.609,0,1.105-0.493,1.105-1.104v-6.259c0-1.217,0.99-2.209,2.208-2.209h2.763   c1.218,0,2.209,0.992,2.209,2.209v6.247c0,0.611,0.494,1.105,1.105,1.105c0.608,0,1.104-0.494,1.104-1.105v-4.005   c0-0.644,1.137-1.324,2.21-1.324h2.762c1.218,0,2.209,0.991,2.209,2.209V75.839z"/><path  d="M62.912,68H49.009l1.428-1.348c0.432-0.432,0.432-1.09,0-1.521c-0.432-0.433-1.131-0.412-1.562,0.02   l-3.311,3.321c-0.103,0.102-0.185,0.229-0.241,0.364c-0.056,0.134-0.086,0.279-0.086,0.427s0.03,0.294,0.086,0.427   c0.052,0.124,0.129,0.233,0.22,0.329c0.008,0.008,0.011,0.021,0.019,0.028l3.313,3.313c0.215,0.216,0.498,0.323,0.782,0.323   c0.281,0,0.564-0.107,0.78-0.323c0.432-0.432,0.432-1.315,0-1.747L49.007,70h13.905c0.61,0,1.104-0.39,1.104-0.999   C64.017,68.39,63.522,68,62.912,68z"/></g></svg>
        </div>
      </div>
    <div class="slider" id="slider_` + countSelf + `">
    </div>
  </div>
    `;
    if (window.frameElement) {
        // in frame
        iframeContent.innerHTML = html;
    }
    else {
        // not in frame
        doc.write(html);
    }

    //begin centipede logic
    //initial variable declaration
    var input = {dom: "chicagotribune.com", category: "nba", rand: "1", env: "prod-"};
    if (decodeURIComponent(location.search.substr(1)) != null && decodeURIComponent(location.search.substr(1)) != "") {
        try {
            input = JSON.parse(decodeURIComponent(location.search.substr(1)));
        }
        catch (e) {
            console.log("Page level query string JSON invalid. Falling back to embed query string");
            var queryString = currentScript.src.split(embedURL + "?")[1];
            if (queryString != "" && queryString != null) {
                try {
                    input = JSON.parse(decodeURI(queryString));
                }
                catch (e) {
                    console.log("Embed level query string JSON invalid");
                    console.log(e);
                }
            }
        }
    }
    else {
        var queryString = currentScript.src.split(embedURL + "?")[1];
        if (queryString != "" && queryString != null) {
            try {
                input = JSON.parse(decodeURI(queryString));
            }
            catch (e) {
                console.log("Embed level query string JSON invalid");
                console.log(e);
            }
        }
    }
    if (input.env != "prod-" && input.env != "dev-") {
        input.env = "prod-";
    }
    var categories = ['finance', 'nba', 'college_basketball', 'weather', 'crime', 'demographics', 'politics', 'disaster', 'mlb', 'nfl', 'ncaaf', 'nflncaaf', 'celebrities', 'music']; // an array of all the possible categories this widget accepts and is limited to. if you specify one not in here, it will fallback to finance
    var apiUrl = protocolToUse + input.env.replace("prod-", "") + 'dw.synapsys.us/list_api.php';
    var helper = doc.getElementById('helper_' + countSelf); // the top title
    var helper2 = doc.getElementById('helper2_' + countSelf); // the swipe indicator
    var slider = doc.getElementById('slider_' + countSelf); // the container for all the blocks that the user can scroll in
    var sliderBlocks = slider.getElementsByClassName('slider_block'); // an array of all the blocks in our slider
    var currentBlock = 0; // what block are we snapped to right now?
    var isScrolling = false; // are we scrolling at all? (both autoscroll and user scroll)
    var scrollingTimout; // the user scroll setTimout reference name
    var scrollTo = 0; // the destination pixel value to interpolate our autoscroll to
    var scrollIncrements = 0; // how much to increase the scroll by in this interpolation loop?
    var rand; // list random ID
    var setSmoothScrollInterval; // the autoscroll setInterval reference name
    var n = 0;
    var userScrolling = true; // is the user currently scrolling an not the JS autoscrolling?
    var userScroll = true;
    var firstAd; // the div for the actual igloo stack to live in, that gets moved around as you scroll
    var currentPub; // the current color scheme and fallback imageset to use
    var lazyLoaded = false; // are the images after the first one loaded in yet?
    var pastBeginning = false; // are we on the first pixel of the first item or not
    var currentListId = ""; // an ID to send to yeti for the current list

    if (typeof input.group == 'undefined' && (typeof input.category == 'undefined' || categories.indexOf(input.category) == -1)) {
        input.category = 'finance'; //default category fallback
    }
    friendlyIframe.classList.add("centipede_" + input.category);
    function getPublisher(pub) {
        var pubs = {
            mlb: {
                hex: "#bc2027",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/baseball_stock.jpg"
            },
            nfl: {
                hex: "#004e87",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/07/football_stock_01_970x250.jpg"
            },
            ncaaf: {
                hex: "#004e87",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/07/football_stock_01_970x250.jpg"
            },
            nba: {
                hex: "#f26f26",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/basketball_stock.jpg"
            },
            college_basketball: {
                hex: "#f26f26",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/basketball_stock.jpg"
            },
            finance: {
                hex: "#3098ff",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/finance_stock.jpg"
            },
            weather: {
                hex: "#43B149",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/weather_stock.jpg"
            },
            crime: {
                hex: "#43B149",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/real_estate_stock.jpg"
            },
            demographics: {
                hex: "#43B149",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/real_estate_stock.jpg"
            },
            politics: {
                hex: "#43B149",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/real_estate_stock.jpg"
            },
            disaster: {
                hex: "#43B149",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/03/real_estate_stock.jpg"
            },
            celebrities: {
                hex: "#6459d3",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/04/actor.jpg"
            },
            music: {
                hex: "#6459d3",
                fallbackImage: "images.synapsys.us/01/fallback/stock/2017/04/musician.jpg"
            }
        };
        if (pub == null || pub == "" || !pubs[pub]) {
            return pubs["finance"];
        }
        else {
            return pubs[pub];
        }
    }

    function loadData() {
        //rand is a random value (1-50) that coresponds to a specific list for a given category (does not apply to football)
        var e = rand;
        while (e == rand) {
            e = Math.floor(Math.random() * 50);
            if (e == 0) {
                e = 1;
            }
        }
        rand = e;
        var i;
        if (window.XMLHttpRequest) {
            i = new XMLHttpRequest
        } else {
            i = new ActiveXObject('Microsoft.XMLHTTP')
        }
        i.onreadystatechange = function () {
            if (i.readyState == XMLHttpRequest.DONE) {
                if (i.status == 200) {
                    //fire this, when either the TDL api or the standard API comes back
                    var r = JSON.parse(i.responseText);
                    populateslider(r);
                } else {
                    var e = i.statusText;
                    if (i.status == 500) {
                        try {
                            e = JSON.parse(i.responseText).message;
                        } catch (t) {
                            console.log('No JSON message')
                        }
                    }
                    e = 'HTTP Error (' + i.status + '): ' + e;
                    if (n++ > 10) {
                        throw e
                    }
                }
            }
        };
        rand = e;
        // checks if a single category is request instead of group
        if (input.category != null && input.category != "") { //category param
            currentPub = getPublisher(input.category);
            if (input.category == 'weather' || input.group == 'weather') {
                var inputType = input.group != null && input.group != '' ? 'group' : 'cat';
                var inputCategory = input.group != null && input.group != '' ? input.group : input.category;
                wheresWaldo();
                i.open('GET', apiUrl + '?' + inputType + '=' + inputCategory + '&rand=' + e + '&location=' + getlocation[0].state.toLowerCase() + '&loc_type=state', true);
                i.send()
            } else { //normal, non TDL api query
                i.open('GET', apiUrl + '?partner=' + (typeof input.dom != 'undefined' ? input.dom : '') + '&cat=' + input.category + '&rand=' + e, true);
                i.send()
            }
        }
        else { //group param
            if (input.category == 'weather' || input.group == 'weather') {
                var inputType = input.group != null && input.group != '' ? 'group' : 'cat';
                var inputCategory = input.group != null && input.group != '' ? input.group : input.category;
                wheresWaldo();
                i.open('GET', apiUrl + '?' + inputType + '=' + inputCategory + '&rand=' + e + '&location=' + getlocation[0].state.toLowerCase() + '&loc_type=state', true);
                i.send()
            } else {
                i.open('GET', apiUrl + '?partner=' + (typeof input.dom != 'undefined' ? input.dom : '') + '&group=' + input.group + '&rand=' + e, true);
                i.send()
            }
        }
    }

    loadData();

    function populateslider(data) {
        if ((input.category == null || input.category == "") && input.group != null && input.group != "") {
            currentPub = getPublisher(data.category);
        }
        // if using new api on certain categories then use new format
        if (input.group == "entertainment" || data.category == "celebrities" || input.group == "weather" || data.category == "weather" || data.category == "music" || data.category == "nfl" || data.category == "ncaaf" || data.category == "football") {
            var items = [];
            for (var i = 0; i < data.l_data.length; i++) {
                if (data.l_data[i].data_point_2 == null) {
                    data.l_data[i].data_point_2 = "";
                }
                if (data.l_data[i].data_value_2 == null) {
                    data.l_data[i].data_value_2 = "";
                }
                items.push(
                    {
                        li_img: data.l_data[i].li_img,
                        li_value: data.l_data[i].data_value_2,
                        li_tag: data.l_data[i].data_point_2,
                        li_title: data.l_data[i].li_title,
                        li_sub_txt: data.l_data[i].li_sub_txt,
                        li_rank: data.l_data[i].li_rank
                    }
                );
            }
        }
        else { //non TDL data
            var items = data.l_data;
        }
        items = items.slice(0, 25);
        items = items.reverse();
        //1st item before the ad
        if (items[0].li_value) {
            items[0].li_value = items[0].li_value.replace(items[0].li_tag, "");
        }
        var image = items[0].li_img.replace("'", "");
        if (image == null ||
            image == "" ||
            image.indexOf("no_") != -1 ||
            image.indexOf("no-") != -1 ||
            image.indexOf("actor.jpg") != -1 ||
            image.indexOf('fallback') != -1
        ) {
            var style = "width: auto; height:100%; top: 0; left: 50%; transform: translateY(0); transform: translateX(-50%);";
            var image_class = "fallback";
            if (data.category != "music") {
                image = protocolToUse + currentPub.fallbackImage;
            }
        }
        else {
            var style = "";
            var image_class = "";
            if (input.group == "weather" || data.category == "weather") {
                var image_class = "fallback";
                style = "width: auto; height:100%; top: 0; left: 50%; transform: translateY(0); transform: translateX(-50%);";
            }
        }
        if (input.group == "entertainment" || data.category == "celebrities" || data.category == "music") {
            style = "width: auto; height:100%; top: 0; left: 50%; transform: translateY(0); transform: translateX(-50%);";
        } else {
        }
        if (input.category == "finance" || input.group == "money") {
            backStyle = `style="background-image:url('` + image + "?width=200" + `')"`;
        }
        else {
            backStyle = `style="background-color: black;"`;
        }
        helper.innerHTML = data.l_alt_title != null && data.l_alt_title != '' ? data.l_alt_title : data.l_title;// used due to the fact centipede is not wide enought to have more than 50 characters for title
        slider.innerHTML = `
    <style>
      .profile_image_div.fallback::before {
        background-color: ` + currentPub.hex + `;
      }
    </style>
      <div class="slider_block">
        <div class="list_item">
          <div class="profile_image_div ` + image_class + `" ` + backStyle + `>
          <div class="num" style="border-color:` + currentPub.hex + `"><div class="num_text">#<b>` + items[0].li_rank + `</b></div></div>
            <img class="profile_image" src="` + image + "?width=200" + `" style="` + style + `">
          </div>
          <div class="info">
            <div class="name">
              ` + items[0].li_title.replace("Corporation", "Corp") + `
            </div>
            <div class="value">
              ` + items[0].li_value + `
            </div>
            <div class="stat_type">
              ` + items[0].li_tag + `
            </div>
          </div>
        </div>
      </div>
      <div class="slider_block">
      <div class="ad_spacer"></div>
        <div id="first_ad_` + countSelf + `" class="ad_item" style="background-color: gray; width: 300px; height: 250px;">

        </div>
      </div>
    `;
        if (location.host.indexOf("synapsys.us") == -1 && location.host.indexOf("localhost") == -1 && location.host.indexOf("127.0.0.1") == -1) { //dont run igloo if not on real site
            if (friendlyIframe.parentElement.getElementsByClassName("widget_zone")[0]) { // if igloo v3 (igloo stack will load centipede as a sibling dom element)
                console.log("centipede detected igloo v3");
                setTimeout(function () {
                    firstAd = doc.getElementById('first_ad_' + countSelf);
                    //grab the sibling igloo element and iject it inside centipede where we can control it
                    firstAd.appendChild(friendlyIframe.parentElement.getElementsByClassName("widget_zone")[0]);
                    firstAd.getElementsByClassName("widget_zone")[0].style.opacity = 1;
                }, 400);
            }
            else { // if igloo v2 (placement.js calls centipede, which calls placement.js, which calls igloo)
                setTimeout(function () { //wait for dom to render before executing igloo script
                    //inject igloo into first_ad div
                    console.log("centipede detected igloo v2");
                    firstAd = doc.getElementById('first_ad_' + countSelf);
                    var s = doc.createElement("script");
                    s.type = "text/javascript";
                    // if (input.group != null && input.group != "" && input.p != null && input.p != "") {
                    //   s.src = "//content.synapsys.us/embeds/placement.js?p=" + input.p + "&type=centipede_" + input.group + "&style=inline&league=no_centipede";
                    // }
                    // else {
                    s.src = "//content.synapsys.us/embeds/inline_300x250/partner.js";
                    // }
                    firstAd.appendChild(s);
                }, 400);
            }
        }
        else {
            setTimeout(function () {
                firstAd = doc.getElementById('first_ad_' + countSelf);
            }, 400);
        }

        var outputHTML = "";
        var maxOutput = 25;
        var backStyle;
        //every other item (except the first)
        for (var i = 1; i < items.length && i < maxOutput; i++) {
            if (items[i].li_value) {
                items[i].li_value = items[i].li_value.replace(items[i].li_tag, "");
            }
            image = items[i].li_img.replace("'", "");
            if (image == null || image == "" || image.indexOf("no_") != -1 || image.indexOf("no-") != -1 || image.indexOf("fallback") != -1) {
                var style = "width: auto; height:100%; top: 0; left: 50%; transform: translateY(0); transform: translateX(-50%);";
                var image_class = "fallback";
                if (data.category != "music") {
                    image = protocolToUse + currentPub.fallbackImage;
                }
            }
            else {
                var style = "";
                var image_class = "";
                if (input.group == "weather" || data.category == "weather") {
                    var image_class = "fallback";
                    style = "width: auto; height:100%; top: 0; left: 50%; transform: translateY(0); transform: translateX(-50%);";
                }
            }
            if (input.group == "entertainment" || data.category == "celebrities" || data.category == "music") {
                style = "width: auto; height:100%; top: 0; left: 50%; transform: translateY(0); transform: translateX(-50%);";
            }
            if (Math.abs(i % 2) == 1) { //every odd number
                outputHTML += `<div class="slider_block">`;
            }
            if (input.category == "finance" || input.group == "money") {
                backStyle = `style="background-image:url('` + image + "?width=200" + `')"`;
            }
            else {
                backStyle = `style="background-color: black;"`;
            }
            outputHTML += `
          <div class="list_item">
            <div class="profile_image_div ` + image_class + `" ` + backStyle + `>
            <div class="num" style="border-color:` + currentPub.hex + `"><div class="num_text">#<b>` + items[i].li_rank + `</b></div></div>
              <img class="profile_image" alt="` + image + "?width=200" + `" style="` + style + `">
            </div>
            <div class="info">
              <div class="name">
                ` + items[i].li_title + `
              </div>
              <div class="value">
                ` + items[i].li_value + `
              </div>
              <div class="stat_type">
                ` + items[i].li_tag + `
              </div>
            </div>
          </div>
      `;
            if (i % 2 == 0) { //end block div every even number
                outputHTML += `</div>`;
            }
            if (i && (i % 4 === 0)) { //show ad every 4 items, the initial single igloo frame snaps into the ad_spacer on scroll
                outputHTML += `
        <div class="slider_block">
        <div class="ad_spacer"></div>
          <div class="ad_item">

          </div>
        </div>`;
            }
            if (i == items.length - 1 || i == maxOutput - 1) { //fire when done iterating over all items
                outputHTML += `
        </div>
        <div class="slider_block">
          <div class="next_list" style="background-color:` + currentPub.hex + `;" id="next_list">
          <div class="next_arrow">
            <svg width="17" height="30" viewBox="0 0 17 30">
                <path fill="#FFF" fill-rule="nonzero" d="M16.89 14.463l-14.967 14.9s-.801.555-1.577-.218c-.778-.772 0-1.449 0-1.449L13.663 14.44.976 1.81s-.66-.791.05-1.496c.707-.706 1.696 0 1.696 0l14.168 14.15z"/>
            </svg>
          </div>
          Next List
          </div>
        </div>
        `;
                slider.innerHTML += outputHTML; //write out the accumulated item's html

                clearInterval(loadedWait); // make sure we only have one instance of this timer running at a time
                var loadedWait = setInterval(function () {
                    if (doc.getElementById("next_list")) { // if all the dom elements for centipede are existant
                        clearInterval(loadedWait); // stop ticking the timer - we have finished loading
                        if (input.event) { // if we are in igloo v3 or >
                            // send the list identifiers to yeti analytics
                            input.event.event = "widget-list";
                            currentListId = data.l_param + "," + data.l_sort + "," + data.l_input;
                            input.event.l = currentListId;
                            sendPostMessageToIgloo({action: 'snt_tracker', snt_data: input.event}, 10);
                        }
                        doc.getElementById("next_list").addEventListener("touchend", nextList);
                        doc.getElementById("next_list").addEventListener("click", nextList);
                        friendlyIframe.classList.add("widget_loaded"); //set loaded flag on bounding iframe
                    }
                    //else, if not loaded, keep ticking the timer
                }, 300);

            }
        }
    }

    function nextList(e) {
        // when next list is clicked, clear the slider and any scroll vars, then reload new data
        lazyLoaded = false;
        //take igloo out before we wipe the slider
        if (firstAd.getElementsByClassName("widget_zone")[0]) {
            firstAd.getElementsByClassName("widget_zone")[0].style.opacity = 0;
            friendlyIframe.parentElement.appendChild(firstAd.getElementsByClassName("widget_zone")[0]);
        }
        //wipe slider and reset everything
        slider.innerHTML = "";
        firstAd.style.left = "0px";
        slider.scrollLeft = 0;
        loadData();
    }

    //initial event listeners declaration

    // browser fallback for the passive event listener handler - a way to use non draw blocking event listeners
    var passiveSupported = false;
    try {
        var options = Object.defineProperty({}, "passive", {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener("test", null, options);
    } catch (err) {
    }

    slider.addEventListener("scroll", onSwipe);
    function onSwipe() {
        if (userScrolling) { // only execute this code if the user is dragging the slider, not if we are autoscrolling
            if (isScrolling != true && input.event) { //limit event sending to 1 per user interaction, not every scroll tick
                // console.log("fired interaction event to igloo");
                input.event.event = "widget-interaction";
                input.event.l = currentListId;
                sendPostMessageToIgloo({action: 'snt_tracker', snt_data: input.event}, 10);
            }
            if (lazyLoaded == false) { //if this is the first user interaction with widget, load the rest of the images
                lazyLoaded = true;
                clearInterval(lazyLoader);
                var lazyLoader = setInterval(function () { // wait for dom loaded before grabbing array of images
                    if (slider.getElementsByClassName("profile_image")[0]) {
                        clearInterval(lazyLoader);
                        var notLoadedImages = slider.getElementsByClassName("profile_image");
                        for (var index = 1; index < notLoadedImages.length; index++) {
                            notLoadedImages[index].src = notLoadedImages[index].alt;
                        }
                    }
                }, 500);
            }
            isScrolling = true; //will return true or false based on whether the user is currently scrolling or not

            // set visibility of helper and list title, based on scroll position
            if (this.scrollLeft > 20) { // scrolled past the first block
                if (pastBeginning == false) {
                    helper2.style.opacity = '0';
                    slider.classList.add("stopAnim");
                    pastBeginning = true;
                }
            }
            else { // currently on the first block
                slider.classList.remove("stopAnim");
                helper.style.opacity = '1';
                helper2.style.opacity = '1';
                pastBeginning = false;
            }
            var rect = firstAd.getBoundingClientRect();
            if (rect.left < -600 || rect.left > 600) { //logic to jump ad to next space when you scroll past it
                var left = slider.getElementsByClassName("ad_spacer")[Math.floor((this.scrollLeft + 450) / 900)].parentElement.offsetLeft + 150;
                firstAd.style.left = (left - firstAd.offsetWidth) + "px";
            }
            clearTimeout(scrollingTimout);
            scrollingTimout = setTimeout(function () { // wait till scroll is finished and set isScrolling flag as false
                if (userScroll == true) { // since the user has ended a series of scroll events, we can now start our autoscroll snap logic
                    setScroll();
                }
                slider.removeEventListener("mousemove", onMouseMove);
                isScrolling = false; //set false now since it has been 300ms since the last scroll event
            }, 300);
        }
    }

    slider.addEventListener("touchend", onFingerUp, passiveSupported ? {passive: true} : false);
    function onFingerUp(e) { //logic to determine if the user is currently actively scrolling
        if (isScrolling == false) {
            // setScroll();
        }
        else {
            var setScrollInterval = setInterval(function () {
                if (isScrolling == false) {
                    // setScroll();
                    clearTimeout(setScrollInterval);
                }
            }, 250);
        }
    }

    slider.addEventListener("touchstart", onFingerDown, passiveSupported ? {passive: true} : false);
    function onFingerDown(e) { //if another swipe interups our snap animation, stop the snap and allow the swipe
        userScrolling = true;
        userScroll = false;
        setTimeout(function () {
            userScroll = true;
        }, 500);
        clearInterval(setSmoothScrollInterval);
    }

    // logic to allow mouse drag scrolling on desktop browsers
    var initialMouseX;
    slider.addEventListener("mousedown", onMouseDown, passiveSupported ? {passive: true} : false);
    function onMouseDown(e) {
        initialMouseX = e.clientX;
        slider.addEventListener("mousemove", onMouseMove, passiveSupported ? {passive: true} : false);
    }

    function onMouseMove(e) {
        slider.scrollLeft = slider.scrollLeft + (initialMouseX - e.clientX);
        initialMouseX = e.clientX;
    }

    slider.addEventListener("mouseup", onMouseUp, passiveSupported ? {passive: true} : false);
    function onMouseUp(e) {
        slider.removeEventListener("mousemove", onMouseMove);
    }

    /**
     * Send a post message to every window up to the top window
     * @param  {Object}  postObject The object to send as a postMessage
     * @param  {Integer} maxLoops   The maximum number of layers to traverse up
     */
    function sendPostMessageToIgloo(postObject, maxLoops) {
        // Initialize variables
        var postWindows = [window];
        var currentWindow = window;
        var currentLoop = 0;
        maxLoops = typeof maxLoops === 'undefined' ? 10 : maxLoops;

        // Build all of the windows to send the message to
        try {
            // Loop through all of the windows
            while (currentLoop++ < maxLoops && currentWindow !== window.top) {
                // Move up a layer
                currentWindow = currentWindow.parent;

                // Add to the postMessage array
                postWindows.push(currentWindow);

            }
        } catch (e) {
        }
        // Send the post messages
        for (var i = 0; i < postWindows.length; i++) {
            postWindows[i].postMessage(postObject, '*');
        }
    }

    //logic to snap scrolled block into view, when user scroll has ended
    function setScroll() {
        var counter = 0;
        var sliderScroll = slider.scrollLeft;
        for (var i = 0; i < sliderBlocks.length; i++) {
            var currentBlock = sliderBlocks[i];
            if ((sliderScroll + 150) >= currentBlock.offsetLeft && (sliderScroll + 150) <= (currentBlock.offsetLeft + currentBlock.offsetWidth) && sliderScroll > 20) {
                //if user has swiped past the halfway mark on the next block, advance blocks to the one user has scrolled to. Otherwise, reset blocks back to starting point of swipe
                scrollTo = currentBlock.offsetLeft;
                if (sliderScroll < scrollTo) {
                    scrollIncrements = 10; //advance
                }
                else {
                    scrollIncrements = -10; //retreat
                }
                clearInterval(setSmoothScrollInterval);
                // var currentTime;
                // var prevTime = 0;

                // setSmoothScrollInterval = setInterval(autoScroll, 30);
                window.requestAnimationFrame(autoScroll);
                function autoScroll() {
                    // var date = new Date();
                    // currentTime = date.getTime();
                    // if (prevTime != 0) {
                    //   console.log("time between intervals: "+(currentTime - prevTime));
                    // }
                    // if (currentTime - prevTime > 50 && prevTime != 0) {
                    //   debugger;
                    // }
                    sliderScroll = slider.scrollLeft;
                    userScrolling = false;
                    var marginOfError = Math.abs(scrollIncrements) - 1;
                    if (sliderScroll < (scrollTo - marginOfError) || sliderScroll > (scrollTo + marginOfError)) { //if we still have autoscrolling to do...
                        //if within margin of error of target, end scroll
                        if (i == (sliderBlocks.length - 2) || counter > 30) { // stop our runnaway animation loop if we are over 30 frames so far, or we are at the last list item
                            userScrolling = true;
                            userScroll = false;
                            setTimeout(function () {
                                userScroll = true;
                            }, 500);
                            clearInterval(setSmoothScrollInterval); //we have reached the end of the list. stop the loop
                        }
                        else {
                            if (scrollIncrements > 0 && sliderScroll > scrollTo) { // we have overshot
                                scrollIncrements = -1;
                            }
                            else if (scrollIncrements < 0 && sliderScroll < scrollTo) { // we have overshot other side
                                scrollIncrements = 1;
                            }
                            counter++;
                            slider.scrollLeft = sliderScroll + scrollIncrements; //apply the interpolation step
                            if (userScrolling != true) {
                                window.requestAnimationFrame(autoScroll);
                            }
                        }
                    }
                    else if (sliderScroll < scrollTo || sliderScroll > scrollTo) {// if in the last frame of interpolation
                        if (i == (sliderBlocks.length - 2) || counter > 30) { // stop our runnaway animation loop if we are over 30 frames so far, or we are at the last list item
                            userScrolling = true;
                            userScroll = false;
                            setTimeout(function () {
                                userScroll = true;
                            }, 500);
                            clearInterval(setSmoothScrollInterval); //we have reached the end of the list. stop the loop
                        }
                        else {
                            if (scrollIncrements > 0 && sliderScroll > scrollTo) { // we have overshot
                                scrollIncrements = -1;
                            }
                            else if (scrollIncrements < 0 && sliderScroll < scrollTo) { // we have overshot other side
                                scrollIncrements = 1;
                            }
                            counter++; // incremenet our frame counter scoped to this animation sequence
                            slider.scrollLeft = sliderScroll + 1; //apply the interpolation step
                            if (userScrolling != true) {
                                window.requestAnimationFrame(autoScroll);
                            }
                        }
                    }
                    else { //we have reached the end of the interpolation. stop the loop
                        userScrolling = true;
                        userScroll = false;
                        setTimeout(function () {
                            userScroll = true;
                        }, 500);
                        clearInterval(setSmoothScrollInterval);
                    }
                    // date = new Date();
                    // prevTime = date.getTime();
                    // console.log("code execution time: " + (prevTime - currentTime));
                }

                currentBlock = i;
                if (sliderBlocks[i].getElementsByClassName("ad_item").length >= 1) { //hide title if ad is current item in view
                    helper.style.opacity = '0';
                    parent[input.pause_variable] = true; //unpause ad if its in view
                }
                else {
                    helper.style.opacity = '1';
                    parent[input.pause_variable] = false; //pause ad when its out of view
                }
                return;
            }

            else if (slider.scrollLeft < 20) { // special logic for when you scroll back to the first list item
                scrollTo = 0;
                if (slider.scrollLeft < scrollTo) {
                    scrollIncrements = 1;
                }
                else {
                    scrollIncrements = -1;
                }
                setSmoothScrollInterval = setInterval(function () {
                    sliderScroll = slider.scrollLeft;
                    userScrolling = false;
                    var marginOfError = 0;
                    if (slider.scrollLeft < (scrollTo - marginOfError) || slider.scrollLeft > (scrollTo + marginOfError)) {
                        if (i == (sliderBlocks.length - 1) || counter > 30) {
                            userScrolling = true;
                            userScroll = false;
                            setTimeout(function () {
                                userScroll = true;
                            }, 500);
                            clearInterval(setSmoothScrollInterval);
                        }
                        else {
                            slider.scrollLeft = slider.scrollLeft + scrollIncrements;
                        }
                    }
                    else {
                        userScrolling = true;
                        userScroll = false;
                        setTimeout(function () {
                            userScroll = true;
                        }, 500);
                        clearInterval(setSmoothScrollInterval);
                    }
                }, 15);
                currentBlock = 0;
                return;
            }
        }
        // if ((currentBlock + 1) <= sliderBlocks.length) {
        //   slider.scrollLeft = sliderBlocks[currentBlock + 1].offsetLeft - 5;
        //   currentBlock = (currentBlock + 1);
        // }
    }

    function wheresWaldo() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                //On complete function
                getlocation = JSON.parse(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", waldo, false); // false for synchronous request
        xmlHttp.send(null);
    }
}
if (document.readyState == "complete") { // if page is already loaded, fire centipede
    centipede();
}
else { // else fire centipede once page has finished loading, so as not to slowdown the page load at all
    var initLoops = 0;
    var initDelay = setInterval(function () { // check page load status every half second
        if (document.readyState == "complete" || initLoops > 10) { // if document is finished loading, or 5 seconds has elapsed
            clearInterval(initDelay);
            centipede();
        }
        else {
            initLoops++;
        }
    }, 500);
    // document.onreadystatechange = function () {
    //   if(document.readyState == "complete"){
    //     centipede();
    //   }
    // }
}
