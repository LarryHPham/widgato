var offset=0;
var domain = '';
var clickyId = 0;
var remnant = 'true';
var locName = '';
var city = '';
var state = '';
var loc = '';
var max = 10;
var bord = false;
var protocolToUse = (location.protocol == "https:") ? "https://" : "http://";
var baseDomain = "www.joyfulhome.com/";
var partnerDomain = "www.myhousekit.com/";
var referrer = document.referrer;
// if in iframe, get url from parent (referrer), else get it from this window location (works for localhost)
var baseUrl = referrer.length ? getBaseUrl(referrer) : window.location.origin;

// doesn't work if you navigate to this page
function getBaseUrl(string){
    var urlArray = string.split("/");
    var domain = urlArray[2];
    return protocolToUse + "//" + domain;
}

console.log(baseUrl);
// Example Call:  http://api2.joyfulhome.com:280/list/homesAtLeast5YearsOld/KS/Wichita/empty/1/1
//                http://api2.joyfulhome.com:280/list/ [name of list] / [State] / [City]/ [zipcode (empty if none)]/ [limit] / [page # to return]
var Url1 = "http://api2.joyfulhome.com:280/list/";

// grabs the clients geolocation - returns city state
var graUrl = "http://w1.synapsys.us/get-remote-addr2/";

$(function () {

  var temp = location.search;
  var query = {};


  if(temp.length){
  	query = JSON.parse(decodeURIComponent(temp.substr(1)));

  	//set the query data from database to global variable to use
  	domain = query.dom;

    //pass false if you want widget to point to myhousekit.com
  	remnant = query.remn;

  	clickyId = query.c_id;

  	locName = query['loc']['loc_name'];

    if(locName != null && typeof locName != 'undefined' && locName != ''){
      locName = locName.replace(/\+/g, ' ');
    }
    //makes a check to see if data is being returned from partner
    if(city != null && city != '' && typeof city != 'undefined' && state != null && state != '' && typeof state != 'undefined'){
      city = query['loc']['loc_id']['city'];
      state = query['loc']['loc_id']['state'];
    }

    //if partner database has absolutely nothing and it is a brand new partner
    //returns string true or false
  	bord = query.bord;
  }

    //build lists of all the list for real estate
    method = [
        {method: 'homesAtLeast5YearsOld',             name: 'Homes at least 5 years old'},
        {method: 'homesLessThan5YearsOld',            name: 'Homes less than 5 years old'},
        {method: 'homesWith2BedroomsMostExpensive',   name: 'Most expensive homes with 2 bedrooms'},
        {method: 'homesWith3BedroomsMostExpensive',   name: 'Most expensive homes with 3 bedrooms'},
        {method: 'homesLargest',                      name: 'Largest homes'},
        {method: 'homesBrickLeastExpensive',          name: 'Least expensive brick homes'},
        {method: 'homesLeastExpensive',               name: 'Least expensive homes'},
        {method: 'homesWithPoolLeastExpensive',       name: 'Least expensive homes with pool'},
        {method: 'homesWithWaterfrontLeastExpensive', name: 'Least expensive waterfront homes'},
        {method: 'homesMostExpensive',                name: 'Most expensive homes'},
        {method: 'listingsMostRecent',                name: 'Most recent homes'},
        {method: 'condosMostExpensive',               name: 'Most expensive condos'}
        //{method: 'homesNewTraditional',               name: 'New traditional homes'},
        //'hiestZipCode',
        //'homesWithSprinklerAndDeck',
        //'homesWithVaultedCeilingsAndSecuritySystem',
        //'listingsWithLongDescriptions',
        //'listingsWithMoreThan10Photos',
        //'listingsWithMoreThan5Photos',
        //'listingsWithVirtualTours',
    ];
    offset = Math.floor((Math.random() * method.length));
    name = method[offset].name;
    max = method.length-1;

    $(".fcw-t1").html(name);

    listCall(method, offset);

    $('.fcw-rightnav').on('click', function() {
        //checks if the list has reached its max and restarts the list at 0
        offset++;
        if(offset === max){
            offset = 0;
            listCall(method, offset);
        }else{
            listCall(method, offset);
        }
    });

    $('.fcw-leftnav').on('click', function() {
        //checks if the list has reach its max and restarts the list at 0
        offset--;
        if(offset == 0){
            offset = max;
            listCall(method, offset);
        }else{
            listCall(method, offset);
        }
    });
});

function listCall(method, count){
	offset = count;

    //determine if the site is a remnant or not
	if(remnant == 'true'){
    //even if remnant possibility of no city or state detected and will run get remote address.
    //should only happen if new partners and no city and/or state has been entered into collection
    if(remnant && (city == '' || city == null || state == '' || state == null)){
  		$.get(graUrl,function(r_data){
            //will change the title text and resize using resizetext() function
            name = method[offset].name;
            $(".fcw-t1").html(name);

            //remnant without a city or state provided
            state = r_data[0]['state'];
            city = r_data[0]['city'];
            var r_locName = city + ', ' + state;
            var r_link = method[offset].method;
            r_locName = r_locName.replace('+',' ');
            $(".fcw-t2-loc").html(r_locName);
            $(".fcw-href").attr('href',baseUrl+"/list/"+r_link+"/"+state+"/"+city+"/page/1");
            $("#imgUrl").attr('href',baseUrl+"/list/"+r_link+"/"+state+"/"+city+"/page/1");
            //go to location page for remnant site
            $("#loc").attr('href',baseUrl+"/location/"+city + "_" +state);

            //displays information on the widget
            $.get(Url1 +method[count].method+"/"+state+'/'+city+'/empty/1/1', function(r_data){
                $(".fcw-content1").html(r_data.data[0].totalListings);
                var random = randomimage();
                $(".fcw-image").css("background-image","url('"+random[offset]+"')");
            });
  		});
    }else{
      //will change the title text and resize using resizetext() function
      var name = method[offset].name;
      $(".fcw-t1").html(name);

      //remnant stuff
      var r_state = state;
      var r_city = city;
      var r_locName = r_city + ', ' + r_state;
      var r_link = method[offset].method;
      r_locName = r_locName.replace('+',' ');
      $(".fcw-t2-loc").html(r_locName);
      $(".fcw-href").attr('href',baseUrl+"/list/"+r_link+"/"+r_state+"/"+r_city+"/page/1");
      $("#imgUrl").attr('href',baseUrl+"/list/"+r_link+"/"+r_state+"/"+r_city+"/page/1");
      //go to location page for remnant site
      $("#loc").attr('href',baseUrl+"/location/"+r_city + "_" +r_state);

      //displays information on the widget
      $.get(Url1 + method[count].method+"/"+r_state+'/'+r_city+'/empty/1/1', function(r_data){
        $(".fcw-content1").html(r_data.data[0].totalListings);
        var random = randomimage();
        $(".fcw-image").css("background-image","url('"+random[offset]+"')");
      });
    }//end if
	} else{
    // Should only be for myhousekit.com
    if(city == '' || city == null || state == '' || state == null){
      $.get(graUrl,function(r_data){
          // TODO API CALL
        $.get(Url1 +method[count].method+"/"+r_data[0].state+'/'+r_data[0].city+'/empty/1/1', function(data){
    		//checks if the list exist or has reach its max and restarts the list at 0
    		if(typeof data.data[0] == 'undefined'){
    			offset++;
    			if(offset >= max){
    				offset = 0;
    				listCall(method, offset);
    			}else{
    				listCall(method, offset);
    			}
    		}else{
            //will change the title text and resize using resizetext() function
            var name = method[offset].name;
            $(".fcw-t1").html(name);

            var p_domain = domain+"/";

            var link = method[offset].method;
            //displays information on the widget
            $(".fcw-content1").html(data.data[0].totalListings);
            var random = randomimage();
            $(".fcw-image").css("background-image","url('"+random[offset]+"')");
            //replace widget location name with name given name from database
            //some reason had to run below again
            locName = r_data[0].city + ", " + r_data[0].state;
            $(".fcw-t2-loc").html(locName);

            $(".fcw-href").attr('href',baseUrl+"/"+p_domain+"list/"+link+"/"+r_data[0].state+"/"+r_data[0].city+"/page/1");
            $("#imgUrl").attr('href',baseUrl+"/"+p_domain+"list/"+link+"/"+r_data[0].state+"/"+r_data[0].city+"/page/1");
            //go to myhousekit for partner non remnant
            $("#loc").attr('href',baseUrl+"/"+p_domain+"loc/"+r_data[0].city+"_"+r_data[0].state);
      		}
      	});
      })
    }
 }
}

//add commas to numbers to look readable PROB DONT NEED THIS BUT KEEPING HERE JUST IN CASE
NumberToCommaNumber = function(Number) {
  return Number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//makes all first letters of every word uppercase
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//make sure title stays correct size to fit div
function resizetext(){
  $('.fcw-t1').css('font-size', '24px');
  var maxsize= ($('.re_w_list-title').width());
  var currentsize= $('.fcw-t1').width();
  while(currentsize > maxsize){
    //MUST HAVE BELOW otherwise infinite loops will happen
    currentsize= $('.fcw-t1').width();
    var size = parseFloat($(".fcw-t1").css("font-size"));
    size -= 1;
    $('.fcw-t1').css('font-size', size + 'px');
  }
}

//random images to display list of lists
function randomimage(){
  var image_array = new Array();
  image_array['0'] = '../css/public/re_w_list_stock/Mosaic_Grid.png';
  image_array['1'] = '../css/public/re_w_list_stock/Mosaic_Grid2.png';
  image_array['2'] = '../css/public/re_w_list_stock/Mosaic_Grid3.png';
  image_array['3'] = '../css/public/re_w_list_stock/Mosaic_Grid4.png';
  image_array['4'] = '../css/public/re_w_list_stock/Mosaic_Grid5.png';
  image_array['5'] = '../css/public/re_w_list_stock/Mosaic_Grid6.png';
  image_array['6'] = '../css/public/re_w_list_stock/Mosaic_Grid7.png';
  image_array['7'] = '../css/public/re_w_list_stock/Mosaic_Grid8.png';
  image_array['8'] = '../css/public/re_w_list_stock/Mosaic_Grid9.png';
  image_array['9'] = '../css/public/re_w_list_stock/Mosaic_Grid10.png';
//TODO More images or less lists?
  image_array['10'] = '../css/public/re_w_list_stock/Mosaic_Grid5.png';
  image_array['11'] = '../css/public/re_w_list_stock/Mosaic_Grid6.png';
  return image_array;
}

//return ads PROB DONT NEED THIS BUT KEEPING HERE JUST IN CASE
function ad(){
  var ad_array = new Array();
  ad_array['0'] = '../css/public/re_w_list_stock/AudiAd.png';
  ad_array['1'] = '../css/public/re_w_list_stock/AudiAd#2.png';
  ad_array['2'] = '../css/public/re_w_list_stock/RolexAd.png';
  return ad_array;
}

//convert all state abbr to full  PROB DONT NEED THIS BUT KEEPING HERE JUST IN CASE
function fullstate(state){
  var stateName = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DC: 'District of Columbia',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Lousiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    ON: 'Ontario',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    PR: 'Peurto Rico',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming'
  }
  return stateName[state];
}

chooseList = function(){
}
