(function($){
	$.fn.dropdown = function(options) {
		var settings = { speed :800, vertical :false, horizontal :false, arrowClass :'arrow-bar', animation :{over: 200, out: 100}
		};	
		var options = $.extend(settings, options), 
		$nav = $(this), $menu = $('ul', $nav);	
				$($menu).parent().children('a').addClass(settings.arrowClass)// add arrow to indicate that it has dropdown menu.	
		//hover menu 
		$menu.each(function(i){	
			var $curobj=$(this).parent();					
			var $subul=$(this).find('ul');				
			if (options.vertical==true){			
			$curobj.hover( 
					function(e){		
						var $targetul=$(this).children("ul:eq(0)")
						$($targetul).fadeIn(options.animation.over);
						var objdimension = 	$targetul.width()	
						var menuleft = $subul.css({left:objdimension-1+"px", top:'-5px'})
					
				}, function(e){
					var $targetul=$(this).children("ul:eq(0)")
					$($targetul).fadeOut(options.animation.out);
			}) //end hover	
			}
			$curobj.click(function(e){
				var $curdata = 	$curobj.children().next();
				$(this).children("ul:eq(0)").hide()
			});
		}) //each function		
	}	
})(jQuery);
