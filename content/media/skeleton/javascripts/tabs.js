
/**
 * Skeleton V1.1
 * Copyright 2011, Dave Gamache
 * www.getskeleton.com
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 8/17/2011
 */

(function ($) {
  // hash change handler
  function hashchange () {
    var hash = window.location.hash
      , el = $('ul.tabs [href*="' + hash + '"]')
      , content = $(hash)

    if (el.length && !el.hasClass('active') && content.length) {
      el.closest('.tabs').find('.active').removeClass('active');
      el.addClass('active');
      content.show().addClass('active').siblings().hide().removeClass('active');
    }
  }

  // listen on event and fire right away
  $(window).on('hashchange.skeleton', hashchange);
  hashchange();
  $(hashchange);
})(jQuery);


/*
=============================================== 02. TWITTER FEED ===============================================
*/

$(document).ready(function() {
    $('#twitter-sidebar').jtwt({image_size : 0, count : 3, username: 'makewhatis', convert_links : 1, loader_text : 'Loading new tweets...'});   
});

/*
 * 06 jtwt - a simple jQuery Twitter plugin
 * hello@buzzrocket.de.
 * http://buzzrocket.de/labs/jtwt/
 */


(function($){

  $.fn.extend({ 
    
    //pass the options variable to the function
    jtwt: function(options) {


      //Set the default values, use comma to separate the settings, example:
      var defaults = {
        username : 'google',
                count : 1,
                image_size: 48,
                convert_links: 1,
                loader_text: 'loading new tweets'
      }
        
      var options =  $.extend(defaults, options);

        return this.each(function() {
        var o = options;
                var obj = $(this);  
                
$(obj).append('<p id="jtwt_loader" style="display:none;">' + o.loader_text + '</p>'); 
$("#jtwt_loader").fadeIn('slow');

      
            $.getJSON('http://twitter.com/status/user_timeline/' + o.username + '.json?count=' + o.count + '&callback=?', function(data){ 


               


      $.each(data, function(i, item) {       
            
                jtweet = '<div id="jtwt">';
                
                
                
                if (o.image_size != 0) {
                
                today = new Date();
  
                jtweet += '<div id="jtwt_picture">';
                jtweet += '<a href="http://twitter.com/' + item.user['screen_name'] + '">'
                jtweet += '<img width="' + o.image_size +'" height="' + o.image_size + '" src="' + item.user['profile_image_url'] + '" />';
                jtweet += '</a><br />';
                jtweet += '</div>';
                jtweet += '<div id="jtwt_tweet">';
                } 
                
                
               
                var tweettext = item.text;
                var tweetdate = item.created_at;
                
                if (o.convert_links != 0) {
                

  
                tweettext = tweettext.replace(/(http\:\/\/[A-Za-z0-9\/\.\?\=\-]*)/g,'<a href="$1">$1</a>');
                tweettext = tweettext.replace(/@([A-Za-z0-9\/_]*)/g,'<a href="http://twitter.com/$1">@$1</a>');
                tweettext = tweettext.replace(/#([A-Za-z0-9\/\.]*)/g,'<a href="http://twitter.com/search?q=$1">#$1</a>');
                
                }
                
                jtweet += '<div id="jtwt_text">';
                jtweet += tweettext;
                jtweet += '<br />';
                
                
                tweetdate = tweetdate.replace(/201.{1}/, "");
                tweetdate = tweetdate.replace(/\+00.{2}/, "");
                jtweet += '<a href="http://twitter.com/' + item.user['screen_name'] + '/statuses/' + item.id + '" id="jtwt_date">';
                
                jtweet += tweetdate;
                jtweet += '</a></div>';
                jtweet += '</div>';

          $(obj).append(jtweet);
        
    


               });   
                 

$("#jtwt_loader").fadeOut('fast');   
           
    });
    
    
      
        });
      }
  });
  
})(jQuery);