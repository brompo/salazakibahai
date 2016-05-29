$(document).ready(function() {
	//Get the JSON Data
	if(navigator.userAgent.match(/Android/i)){
    window.scrollTo(0,1);
	}

	$(document).on('click', '.prayercategorylink', function() {
		var link = $(this).attr('id');
		//TODO - Figure out a way to et the heading not the link
		sessionStorage["prayerheading"] = link;
		sessionStorage["location"] = "data/"+link+".json";
	});
	
	$(document).on('pageshow','.summarypage', function() {
		var loc = sessionStorage["location"];
		loadprayersummary(loc);
	});

	$(document).on('pageshow','.categorypage', function() {
		loadcategories('data/categories.json');
	});

	//Displays each individual prayer details
	$(document).on('pageshow','.detailspage',function(){
		loadprayerdetails(sessionStorage["location"]);
	});

	$(document).on('click','.prayerdetailcontainer',function(){
		sessionStorage["prayerID"] = $(this).attr('id');
	});

/*Function Area*/

	function loadcategories(categorylocation) 
	{
		$.getJSON(categorylocation, function(json) {

			var prayerdata = "";

			$.each(json.prayers, function(index, val) {
				prayerdata += "<li data-role='list-divider'>"+val.catname+"</li>";	
				$.each(val.catdetail, function(index, val) {
					prayerdata += "<li id='"+val.id+"' class='prayercategorylink'><a href='"+val.link+"'>"+val.prayerheading+"<span class='ui-li-count'>"+val.count+"</span></a></li>";
				});
			});

			$(".prayerlist").html(prayerdata).listview('refresh');

		});
	} // End of loadcategories function

	function loadprayersummary(prayerlocation)
	{
		$.getJSON(prayerlocation, function(data) {
				var categorydata = "";
					$.each(data.details, function(index, val) {
						 categorydata += "<li><a href='prayerdetails.html' id="+val.prayerID+" class='prayerdetailcontainer'><h2>"+val.prayername+"</h2><p>"+val.intro+"</p><p><b><span>"+val.author+"</span> * "+val.wordcount+" words</b></p>";
						 //"<a href='#' class='ui-btn ui-nodisc-icon ui-icon-heart ui-btn-icon-right ui-btn-inline'>Love</a></a></li> ";
					});

					$(".prayercatcontainer").html(categorydata).listview('refresh');
		});

		$(".prayercatheader").html(sessionStorage["prayerheading"]);

	} // End of loadprayerdetails function

	function loadprayerdetails(prayerlocation)
	{
		$.getJSON(prayerlocation, function(data) {
				var prayerdetailsdata = "";
					$.each(data.details, function(index, val) {
						if (val.prayerID == sessionStorage["prayerID"])
						{
							$.each(val.prayerdetails, function(index,val){
								prayerdetailsdata +="<p>"+val.para+"</p>";
							});						
						}
					});

					$(".prayerdetailcontent").html(prayerdetailsdata).listview('refresh');
		});

		$(".prayercatheader").html(sessionStorage["prayerheading"]);		
	}

}); /*Document. Ready Function*/