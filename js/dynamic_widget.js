dynamic_widget=function(){var e='http://108.170.11.234:190/list_api.php',t=0,i={},a=JSON.parse(decodeURIComponent(location.search.substr(1))),n=0,r=['finance','nba','college_basketball','weather','crime','demographics','politics','disaster'],l=['finance','nba','college_basketball'];function o(e){if(d.readyState=='complete'||d.readyState=='interactive'){e()}else if(d.addEventListener){d.addEventListener('DOMContentLoaded',e)}else if(d.attachEvent){d.attachEvent('onreadystatechange',function(){if(d.readyState=='complete'){e()}})}}function s(){if(typeof a.category=='undefined'||r.indexOf(a.category)==-1){a.category='finance'}var t=typeof a.rand!='undefined'&&n==0?a.rand:Math.floor(Math.random()*10);var l;if(window.XMLHttpRequest){l=new XMLHttpRequest}else{l=new ActiveXObject('Microsoft.XMLHTTP')}l.onreadystatechange=function(){if(l.readyState==XMLHttpRequest.DONE){if(l.status==200){i=JSON.parse(l.responseText);o(c)}else{var e=l.statusText;if(l.status==500){try{e=JSON.parse(l.responseText).message}catch(t){console.log('No JSON message')}}e='HTTP Error ('+l.status+'): '+e;if(n++>10){throw e}setTimeout(s,500)}}};l.open('GET',e+'?partner='+(typeof a.dom!='undefined'?a.dom:'')+'&cat='+a.category+'&rand='+t,true);l.send()}function c(){if(typeof dataLayer!='undefined'){dataLayer.push({event:'widget-title',eventAction:dynamic_widget.get_title()})}if(a.category=='politics'){var e=i.l_title.indexOf('Republican')!=-1?'r':i.l_title.indexOf('Independent')!=-1?'i':'d';add_css_link('../css/dynamic_widget_politics_'+e+'.css')}$('title').innerHTML=i.l_title;if($('line4')!=null&&d.getElementsByClassName('dw')[0].clientWidth==350&&$('title').scrollHeight>61){$('title').setAttribute('style','font-size: 14px')}var t=true;switch(a.category){case'nba':var n=a.remn=='true'?'http://www.hoopsloyal.com/NBA/widget-list':'http://www.myhoopszone.com/'+a.dom+'/NBA/w-list';break;case'college_basketball':var n=a.remn=='true'?'http://www.hoopsloyal.com/NCAA/widget-list':'http://www.myhoopszone.com/'+a.dom+'/NCAA/w-list';break;case'finance':var n=a.remn=='true'?'http://www.investkit.com/widget-list':'http://www.myinvestkit.com/'+a.dom+'/w-list';break;default:var n=a.remn=='true'?'http://www.joyfulhome.com/widget-list':'http://www.myhousekit.com/'+a.dom+'/w-list';var t=false}n+=t?'?tw='+i.l_param+'&sw='+i.l_sort+'&input='+i.l_input:'/tw-'+i.l_param+'+sw-'+i.l_sort+'+input-'+i.l_input;$('list-link').href=n;m()}function m(){var e=i.l_data[t];e.li_url=a.remn=='true'?e.li_primary_url:e.li_partner_url.replace('{partner}',a.dom);$('line1').innerHTML=e.li_title;$('line2').innerHTML=e.li_sub_txt;if($('line4')==null){$('desc').innerHTML=e.li_str}else{$('desc').innerHTML=e.li_value;$('line4').innerHTML=e.li_tag}$('line1').href=e.li_url;$('mainimg').src='';$('mainimg').src=e.li_img;$('mainurl').href=e.li_url;$('num').innerHTML='#'+e.li_rank;if(e.li_subimg!==false){var n=a.remn=='true'?e.li_subimg.primary_url:e.li_subimg.partner_url.replace('{partner}',a.dom);$('subimg').src='';$('subimg').src=e.li_subimg.img;$('suburl').href=n;var r=$('carousel');if(r.className.indexOf('two')==-1){r.className+=' two'}}var l=$('list-link');if(l.offsetTop+l.scrollHeight>d.getElementsByClassName('dw')[0].clientHeight){$('title').setAttribute('style','font-size: 14px')}}function u(e){t+=e;t=t>=i.l_data.length?0:t<0?i.l_data.length-1:t;m();if(typeof dataLayer!='undefined'){dataLayer.push({event:e==1?'nav-right':'nav-left',eventAction:get_title()})}}function w(){return a.dom+':'+a.category+':'+(i.l_sort==null?i.l_param:i.l_sort)+':'+i.l_title}function p(){switch(a.category){case'finance':var e=a.remn=='true'?'http://www.investkit.com/':'http://www.myinvestkit.com/'+a.dom+'/';break;case'nba':var e=a.remn=='true'?'http://www.hoopsloyal.com/NBA':'http://www.myhoopszone.com/'+a.dom+'/NBA';break;case'college_basketball':var e=a.remn=='true'?'http://www.hoopsloyal.com/NCAA':'http://www.myhoopszone.com/'+a.dom+'/NCAA';break;default:var e=a.remn=='true'?'http://www.joyfulhome.com/':'http://www.myhousekit.com/'+a.dom+'/';break}$('homelink').href=e}s();o(p);return{carousel:u,get_title:w}}();
