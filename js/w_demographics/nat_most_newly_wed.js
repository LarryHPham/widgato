var offset = 0;
var dataLength;
var curData;
var domain = '';
var remnant = '';
var max = 10;
var bord = false;
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
  	$.get('//apirt.synapsys.us/index.php?widget=national-demographics&wid=8&skip='+index+'&limit=1', function(data){
      var curData = data.widget;
      dataLength = curData.length;
      var title = "nat-most-newly-wedded";
      $('.fcw-t1').html('Cities in the U.S. with the Most Weddings');
      $('.fcw-t2-loc').html(curData[0].DemoCity + ', ' + curData[0].DemoState);
      $('.fcw-image').css('background', 'url('+imageUrl(curData[0].img)+') no-repeat');
      $('.fcw-img2').html('#'+(index+1));
      $('.fcw-content1').html((curData[0].DemoNewlyWed).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' Weddings');
      if(curData[0].DemoYear == null || typeof curData[0].DemoYear == 'undefined'){
        $('.fcw-content2').html('In 2012');
      } else {
        $('.fcw-content2').html('In ' + curData[0].DemoYear);
      }

      if(remnant == 'true' || remnant == true){
        $('.fcw-href').attr('href',link+title+"/national/demographics");
        $('#loc').attr('href',link+"location/"+(curData[0].DemoCity).toUpperCase()+"_"+curData[0].DemoState);
        $('#imgUrl').attr('href',link+"location/"+(curData[0].DemoCity).toUpperCase()+"_"+curData[0].DemoState);
      } else {
        $('.fcw-href').attr('href',link_partner+domain+"/national/demographics/"+title);
        $('#loc').attr('href',link_partner+domain+"/loc/"+curData[0].DemoState+"/"+(curData[0].DemoCity).toUpperCase());
        $('#imgUrl').attr('href',link_partner+domain+"/loc/"+curData[0].DemoState+"/"+(curData[0].DemoCity).toUpperCase());
      }

    }, 'json')
  }

  function imageUrl(path){
    if(typeof path == 'undefined' || path == null || path == '' || path == 'null' || path == 'http://apireal.synapsys.us/city-image/images/placeholder-location.jpg'){
      return '../css/public/no_image.jpg';
    }
    return path;
  }
