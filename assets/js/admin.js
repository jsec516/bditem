$(document).ready(function() {
	$(".chat-icon").hover(function() {
		$(this).attr("src", asset_base + "/img/chat-icon-md-hover.png");
	}, function() {
		$(this).attr("src", asset_base + "/img/chat-icon-md.png");
	});
	$(".nav-item").click(function(e){
		
		$(".nav-inner").slideUp("medium");
		var $currentObj=$(this);
		var $innerMenu=$currentObj.next();
		if(!!$innerMenu.length){
			e.preventDefault();
			$innerMenu.slideToggle("medium");
		}
		
	});
});