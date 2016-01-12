var offset = 0;
var dataLength;
var curData;
var domain = '';
var remnant = '';
var max = 10;
var bord = false;
var apiUrl = '//devapirt.synapsys.us';
var wid_num = 7;
var link = "http://www.joyfulhome.com/";
var link_partner = "http://www.myhousekit.com/";
$(function(){
  var temp = location.search;
  var query = {};
  if(temp != null){
    query = JSON.parse(decodeURIComponent(temp.substr(1)));
    domain = query.dom;
    remnant = query.remn;
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
    dataCall(offset);
  })//END OF FUNCTION
  function dataCall(index){
  	$.get(apiUrl + '/index.php?widget=disasters&wid='+wid_num+'&skip='+index+'&limit=1', function(data){
      var curData = data.widget;
      dataLength = curData.length;
      var title = "tornado-most-injuries";
      $('#title').html('Tornadoes with Highest Injury Ct');
      $('.fcw-t1').html('Tornadoes with Highest Injury Count in U.S. History');
      $('.fcw-t2-loc').html(curData[0].City+', '+curData[0].State);
      $('.fcw-image').css('background', 'url('+imageUrl(curData[0].img)+') no-repeat');
      $('.fcw-img2').html('#'+(index+1));
      if(curData[0].NumOfInjuries == 1){
        $('.fcw-content1').html(curData[0].NumOfInjuries + ' Injury');
      } else {
        $('.fcw-content1').html(curData[0].NumOfInjuries + ' Injuries');
      }
      $('.fcw-content2').html(curData[0].Month + ' ' + curData[0].Day + ', ' + curData[0].Year);
      $('.fcw-presentedby').html('HIGHEST INJURY COUNT TORNADO - PRESENTED BY');
      if(remnant == 'true' || remnant == true){
        $('.fcw-href').attr('href',link+title+"/national/disasters");
        $('#loc').attr('href',link+"location/"+(curData[0].City).toUpperCase()+"_"+curData[0].State);
        $('#imgUrl').attr('href',link+"location/"+(curData[0].City).toUpperCase()+"_"+curData[0].State);
      } else {
        $('.fcw-href').attr('href',link_partner+domain+"/national/disasters/"+title);
        $('#loc').attr('href',link_partner+domain+"/loc/"+curData[0].State+"/"+(curData[0].City).toUpperCase());
        $('#imgUrl').attr('href',link_partner+domain+"/loc/"+curData[0].State+"/"+(curData[0].City).toUpperCase());
      }
    }, 'json')
  }

  function imageUrl(path){
    if(typeof path == 'undefined' || path == null || path == '' || path == 'null' || path == "http://apireal.synapsys.us/city-image/images/placeholder-location.jpg"){
      return '../css/public/no_image.jpg';
    }
    return path;
  }