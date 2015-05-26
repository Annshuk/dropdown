	$('#NavTopMenu').dropdown({vertical:true})//for dropdown
		$('#NavTopMenu li a').click(function(e){
			var clickdata = $(this).text()		
			var reldata = $(this).attr('rel')						
			e.preventDefault();
			 $("#content-container article").hide(); //Hide all tab content     
			$('#'+reldata).show()
			var activeTab = $(this).find("a").attr("rel"); //Find the href attribute value to identify the active tab + content 
		})
	});
