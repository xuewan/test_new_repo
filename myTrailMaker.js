$(document).ready( function(){

	$('#load-bookmarks').submit(function() {
    	var username = $('#username').val();

    	//fetch all the bookmarks belongs to the inputed user name from Delicious 
    	var deliciousFeedStr = "http://feeds.delicious.com/v2/json/" + username + "?callback=?";
    	
    	$.getJSON(deliciousFeedStr, function(json){

    		//use the wrapper function to process json data.
    		$(json).each(function(index) {
                // this.u // url
                // this.d // description
                // this.n // extended notes
                // this.t // array of tags
                $('<li></li>').html('<a href="' + this.u + '">' + this.d + '</a>')
					.data('extended', this.n)
					.data('tags', this.t)
					.appendTo('#bookmarks ul');
            });

    	}); //end .getJSON
    	return false;
    });//end #load-bookmarks.submit

}); //end document ready