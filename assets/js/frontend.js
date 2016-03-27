jQuery(document).ready(function(){
	jQuery('ul.sf-menu').superfish({
		animation: {height:'show'}, // slide-down effect without fade-in
		delay:800           // 1.2 second delay on mouseout
	});
	
	
	$('.dropdown-toggle').dropdown();
	
	$("[name='header_search_type']").on('change', function(){					
		document.cookie = "search="+$("[name='header_search_type']").val();			
	});
	
	$('body').on('click',".enquiry_modal", function(event){
		event.preventDefault();
		$("[name='user_id']").val($(this).data('user_id'));
		$("[name='item_id']").val($(this).data('item_id'));
	});
			
	$jScroller.add("#buy_lead_container","#buy_lead_inner_container","up",2,1);
	// Start Scroller
	$jScroller.start();
	
	var box = null;
    $(".chat_now").click(function(event, ui) {
        if(box) {
            box.chatbox("option", "boxManager").toggleBox();
        }
        else {
            box = $("#chat_div").chatbox({id:"Niazzza", 
                                          user:{sender_id : "1", receiver_id : "2"},
                                          title : "Chat in Deshiyo",
                                          messageSent : function(id, user, msg) {
                                        	  alert(user.sender_id);
                                              //$("#log").append(id + " said: " + msg + "<br/>");
                                              $("#chat_div").chatbox("option", "boxManager").addMsg(id, msg);
                                          }});
        }
    });
});