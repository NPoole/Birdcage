 
 loadSettings();

 $('#github-button').click(function(){
	 
	window.open('https://github.com/NPoole/Birdcage','_blank');
	 
 });
 
 $(".switch").click(function(){
	
	if($(this).hasClass("on")){
		$(this).removeClass("on");
	}else{
		$(this).addClass("on");
	}
	
	saveSettings();
	 
 });
 
 $("#collapseTerms").on('input',function(e){
	 
	 console.log('collapse terms input');
	 saveSettings();

 });

 $("#redactTerms").on('input',function(e){
	 
	 console.log('redact terms input');
	 saveSettings();

 });
 
 function saveSettings(){ 

	chrome.storage.sync.set(
		{"tagAds": $("#tagAds").hasClass("on"), 
		"collapseAds": $("#collapseAds").hasClass("on"), 
		"quietTab": $("#quietTab").hasClass("on"), 
		"verboseTab": $("#verboseTab").hasClass("on"), 
		"collapseWhoToFollow": $("#collapseWhoToFollow").hasClass("on"), 
		"collapseTrending": $("#collapseTrending").hasClass("on"), 
		"collapseCWs": $("#collapseCWs").hasClass("on"), 
		"minifyFeed": $("#minifyFeed").hasClass("on"),
		"collapseTerms": $("#collapseTerms").val(),
		"redactTerms": $("#redactTerms").val()}
	);
	 
 }
 
 function loadSettings(){
	 
	chrome.storage.sync.get("tagAds", function(result){if(result.tagAds == true){$("#tagAds").addClass("on");}}); 
	chrome.storage.sync.get("collapseAds", function(result){if(result.collapseAds == true){$("#collapseAds").addClass("on");}}); 
	chrome.storage.sync.get("quietTab", function(result){if(result.quietTab == true){$("#quietTab").addClass("on");}}); 
	chrome.storage.sync.get("verboseTab", function(result){if(result.verboseTab == true){$("#verboseTab").addClass("on");}}); 
	chrome.storage.sync.get("collapseWhoToFollow", function(result){if(result.collapseWhoToFollow == true){$("#collapseWhoToFollow").addClass("on");}}); 
	chrome.storage.sync.get("collapseTrending", function(result){if(result.collapseTrending == true){$("#collapseTrending").addClass("on");}}); 
	chrome.storage.sync.get("collapseCWs", function(result){if(result.collapseCWs == true){$("#collapseCWs").addClass("on");}}); 
	chrome.storage.sync.get("minifyFeed", function(result){if(result.minifyFeed == true){$("#minifyFeed").addClass("on");}}); 

	chrome.storage.sync.get("collapseTerms", function(result){$("#collapseTerms").val(result.collapseTerms);});
	chrome.storage.sync.get("redactTerms", function(result){$("#redactTerms").val(result.redactTerms);});
	 
 }