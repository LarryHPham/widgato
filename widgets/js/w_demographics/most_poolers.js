var offset = 0;
var dataLength;
var curData;
var domain = '';
var remnant = '';
var locName = '';
var city = '';
var state = '';
var loc = '';
var max = 10;
var bord = false;
var query = {};
var redirectquery = '';
$(function(){
  var temp = location.search;
  if(temp != null){
    redirectquery = '?'+ decodeURIComponent(temp.substr(1));
    query = JSON.parse(decodeURIComponent(temp.substr(1)));
    domain = query.dom;
    remnant = query.remn;
    locName = query['loc']['loc_name'];
    locName = locName.replace(/\+/g, ' ');
    city = query['loc']['loc_id']['city'];
  	state = query['loc']['loc_id']['state'];
    bord = query.bord;
  	}

  	if(bord == 'true'){
  		$(".re_w_list").css({'border-right':'1px solid #ccc','border-bottom':'1px solid #ccc','border-left':'1px solid #ccc'});
  	}

    $('.fcw-rightnav').on('click', function() {
        if ($(this).data('dir') === 'next') {
            dataCall(++offset);
        }
    });

    $('.fcw-leftnav').on('click', function() {
        if (offset > 0 && $(this).data('dir') === 'prev') {
          dataCall(--offset);
        }else if(offset <= 0){
          offset = 0;
          dataCall(offset);
        }
    });

    if(city == null || typeof city == 'undefined' || state == null || typeof state == 'undefined'){
      $.get("//w1.synapsys.us/get-remote-addr2/",function(r_data){
          city = r_data[0].city;
          state = r_data[0].state;
          dataCall(offset);
      });
    }else{
      dataCall(offset);
    }
  })//END OF FUNCTION
  function dataCall(index){
  	$.get('//apirt.synapsys.us/index.php?widget=demographics&wid=9&city='+city+'&state='+state+'&skip='+index+'&limit=1', function(data){
      if(data.widget == null){
        document.location.href = 'nat_most_poolers.html'+redirectquery;
        console.log('Redirect ERROR', document.location.href);
      }
      var link = "http://www.joyfulhome.com/";
      var link_partner = "http://www.myhousekit.com/";
      var curData = data.widget;
      var popData = curData[0].population;
      dataLength = curData.length;
      var title = "most-car-poolers";
      $('.fcw-t1').html('Cities in ' + fullstate(curData[0].DemoState) + ' that Carpool the Most');
      $('.fcw-t2-loc').html(curData[0].DemoCity+', '+curData[0].DemoState);
      $('.fcw-image').css('background', 'url('+imageUrl(curData[0].img)+') no-repeat');
      $('.fcw-img2').html('#'+(index+1));
      $('.fcw-content1').html(curData[0].DemoCarPool + '% of Residents');
      $('.fcw-content2').html('Carpool Everyday');
      if(remnant == 'true' || remnant == true){
        $('.fcw-href').attr('href',link+title+"/"+curData[0].DemoState+"/"+curData[0].DemoCity+"/demographics");
        $('#loc').attr('href',link+"location/"+(curData[0].DemoCity).toUpperCase()+"_"+curData[0].DemoState);
        $('#imgUrl').attr('href',link+"location/"+(curData[0].DemoCity).toUpperCase()+"_"+curData[0].DemoState);
      } else {
        $('.fcw-href').attr('href',link_partner+domain+"/demographics/"+title+"/"+curData[0].DemoState+"/"+curData[0].DemoCity);
        $('#loc').attr('href',link_partner+domain+"/loc/"+curData[0].DemoState+"/"+(curData[0].DemoCity).toUpperCase());
        $('#imgUrl').attr('href',link_partner+domain+"/loc/"+curData[0].DemoState+"/"+(curData[0].DemoCity).toUpperCase());
      }
    }, 'json')
  }

  function imageUrl(path){
    if(typeof path == 'undefined' || path == null || path == '' || path == 'null' || path == 'http://apireal.synapsys.us/city-image/images/placeholder-location.jpg'){
      var image_array = new Array();
      var x = Math.floor((Math.random() * 4) + 1);
      image_array['0'] = '../css/public/nophoto1.png';
      image_array['1'] = '../css/public/nophoto2.png';
      image_array['2'] = '../css/public/nophoto3.png';
      image_array['3'] = '../css/public/nophoto4.png';
      image_array['4'] = '../css/public/nophoto5.png';
      return image_array[x];
    }
    return path;
  }
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
      PR: 'Puerto Rico',
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
    };
    return stateName[state];
  }
