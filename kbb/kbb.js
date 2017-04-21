//establish environment variables for the ad-stack based on which widget is being called
var hostname = window.top.location.hostname;

//Identifier for snt container when script has first loaded
var snt_id = "snt_container";
var widget_id = "widget";
var apiUrl = "//content.synapsys.us/embeds/placement.js?p=N4CF7N5TT3";
var snt_widget_type1 = apiUrl + "&type=kbb_dashboard&style=standard";
var snt_widget_type2 = apiUrl + "&type=kbb_articles&style=standard";

var post_message_tab_listener = []; //converts post message string and push all tab content into this array
var valid_widget_identifiers = []; // store all valid widget identifers in this array so that it cannot be called again
var snt_widget_count = 1; // counter for amount of widgets showing on page
var max_widget_count = 6;
var intervalFailSafe = 0;
var maxScrollPercent = 80;

//Waits for the DOMContent to load so we know where to append the widget
document.addEventListener("DOMContentLoaded", function(event) {
    //declare initial snt container
    var snt_container = document.createElement("div");
    snt_container.setAttribute("id", snt_id);
    document.body.appendChild(snt_container);

    var snt_id_container = document.getElementById(snt_id);


    window.onscroll = function() {
        sntListener()
    };
    // snt_id_container.addEventListener("onscroll", sntListener);


    function receiveMessage(event){
      if (event.data != null && event.data != "") {
        if (event.data.indexOf("dashboard_category:") != -1) {
          var string = event.data.replace("dashboard_category:", "");
          max_widget_count = string.split(',').length * 2;//set max widget count depends on the number of tabs
        }
      }
    }
    top.addEventListener("message", receiveMessage);

    /*<---------------------------------------------------------------------------------------------------------->*/

    //setup create new element node function
    var createNode = function(attribute, attributeName, widgetType, category, height, width) {
        var snt_widget = document.createElement("div");
        snt_widget.setAttribute(attribute, attributeName);

        //create iframe widget and append to end of snt_id_container
        var script = createScriptWidget(widgetType);
        snt_widget.appendChild(script);
        // var iframe = createIframeWidget(widgetType, category, height, width);
        // snt_widget.appendChild(iframe);

        //script to end of snt_id_container container
        snt_id_container.appendChild(snt_widget);
        return;
    }

    /*<---------------------------------------------------------------------------------------------------------->*/

    /**
     * @function sntListener
     * setup the onscroll function to listen to created snt identified container
     * listens and tracks the clients scroll length to determine if it has reached the thresh hold of maxScrollPercent
     * if tracker meets requirements then it will create embed scripts
     * based on a POST MESSAGE from the first embed DASHBOARD widget will determine how many times the dashboard and
     * trending article section will display
    **/
    function sntListener() {
        if (snt_widget_count <= max_widget_count) {
            var body = document.body,
                html = document.documentElement;

            // for used to allow ie9 && other browsers to grab the proper height, client height and scrollTop
            var bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
                windHeight = window.innerHeight || (document.documentElement || document.body).clientHeight,
                scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                trackLength = bodyHeight - windHeight;

            // will return the percent of the scrolled height on client
            var heightListener = Math.floor((scrollTop / trackLength) * 100);

            //create widget identifier based on the amount of widgets that are on the page
            var widgetId = widget_id + snt_widget_count;
            /*
            ** CODE HERE to determine what widgets to call
            */
            //if 80% of snt_id_container is visible then call next widget unless it is the first call then index it
            if (heightListener >= maxScrollPercent || valid_widget_identifiers.length == 0) {
                if (valid_widget_identifiers.indexOf(widgetId) == -1) {
                    valid_widget_identifiers.push(widgetId);
                    //functions to create the node script with an identifier then wait for the widget with a unique identifier to show that it has loaded to allow the next set of widgets to be called.
                    // console.log("valid_widget_identifiers",valid_widget_identifiers);
                    // function isEven(n) {
                    //    return n % 2 == 0;
                    // }
                    // if(isEven(valid_widget_identifiers.length)){
                    //   createNode("id", widgetId, "dynamic_kbb_articles", category, "1080px", "600px");
                    // }else{
                    //   createNode("id", widgetId, "dynamic_kbb_dashboard", category, "550px", "600px");
                    // }
                    // waitForElementToDisplay(widgetId, "iframe", 500);
                    createNode("id", widgetId, snt_widget_type1);
                    waitForElementToDisplay(widgetId, "div[igloo_id]", 500);
                }
            }
        }
    };
    sntListener();

});

//create script to be tossed into snt_id_container
function createScriptWidget(widgetType) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = widgetType;
    return script;
};

function createIframeWidget(widgetType, category, height, width) {
  //<iframe src="http://localhost/widgets/dynamic_kbb_widget/dynamic_kbb_dashboard.html?{%22dom%22:%22chicagotribune.com%22,%22loc%22:{%22loc%22:{%22city%22:[],%22DMA%22:[],%22state%22:[],%22zipcode%22:[]}},%22c_id%22:null,%22remn%22:%22false%22,%22bord%22:false,%22targ%22:%22_blank%22,%22cat%22:%22automotive%22,%22group%22:%22%22,%22v%22:1,%22subd%22:%22%22,%22category%22:%22automotive%22,%22rand%22:2,%22event%22:{%22w%22:%22kbb_dashboard%22,%22au%22:%2213%22,%22p%22:%2216%22,%22igloo_id%22:0}}" style="display: block; height: 600px; width: 300px; margin: 0px; border: 0px; overflow: hidden; position: relative; z-index: 0;"></iframe>
  var iframe1 = document.createElement("iframe");
  iframe1.src = "http://localhost/widgets/dynamic_kbb_widget/"+widgetType+".html?{%22dom%22:%22chicagotribune.com%22,%22loc%22:{%22loc%22:{%22city%22:[],%22DMA%22:[],%22state%22:[],%22zipcode%22:[]}},%22c_id%22:null,%22remn%22:%22false%22,%22bord%22:false,%22targ%22:%22_blank%22,%22cat%22:%22automotive%22,%22group%22:%22%22,%22v%22:1,%22subd%22:%22%22,%22category%22:%22automotive%22,%22rand%22:2,%22event%22:{%22w%22:%22kbb_dashboard%22,%22au%22:%2213%22,%22p%22:%2216%22,%22igloo_id%22:0}}"; iframe1.scrolling = "no";
  iframe1.style = "display: block; height: "+height+"; width: "+width+"; margin: 0px; border: 0px; overflow: hidden; position: relative; z-index: 0;";
  return iframe1;
};


/**
* @function waitForElementToDisplay
* recursive function that will keep calling itself until something is found
*/
function waitForElementToDisplay(identifier, selector, time) {
    if (document.getElementById(identifier)) {
        if (document.getElementById(identifier).querySelector(selector) != null) {
            snt_widget_count++; //global count that attaches to widgetID;
            intervalFailSafe = 0;
            return;
        } else {
            if (intervalFailSafe < 10) {
                var snt_frame_element = setTimeout(function() {
                    intervalFailSafe++;
                    waitForElementToDisplay(identifier, selector, time);
                }, time);
            } else {
                console.warn('query selector cannot find ' + selector + ' within element with id of ' + identifier + '! Time:' + (time * intervalFailSafe) / 1000 + 'secs');
                intervalFailSafe = 0;
                clearTimeout(snt_frame_element);
            }
        }
    } else {
        console.warn('warning no id of ' + identifier + 'is found!');
    }
}
