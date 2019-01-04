var streamHeight = 0;
var newTweetCount = "";
window.setInterval(pollForUpdate, 500);

function pollForUpdate(){
	
	// if new-tweets-bar is visible then style the window title
	if($.contains(document.documentElement, $(".new-tweets-bar").get(0))){
		if($(".new-tweets-bar").get(0).innerHTML != newTweetCount){
			newTweetCount = $(".new-tweets-bar").get(0).innerHTML;
			styleTitle();
		}
	}
	
	if($.contains(document.documentElement, $(".new-tweets-bar").get(0)) == false){
		newTweetCount = "";
	}
		
	// if document height has changed then style the timeline
	if($('.stream-container').height() > streamHeight){
		styleTimeline();
		streamHeight = $('.stream-container').height();
	}
	
}

// Retreive settings from chrome.sync and apply timeline style changes
function styleTimeline(){
	
	chrome.storage.sync.get("tagAds", function(result){if(result.tagAds == true){tagAds();}}); 
	chrome.storage.sync.get("collapseAds", function(result){if(result.collapseAds == true){collapseAds();}}); 
	chrome.storage.sync.get("collapseWhoToFollow", function(result){if(result.collapseWhoToFollow == true){collapseWhoToFollow();}}); 
	chrome.storage.sync.get("collapseTrending", function(result){if(result.collapseTrending == true){collapseTrending();}}); 
	//chrome.storage.sync.get("collapseCWs", function(result){if(result.collapseCWs == true){$("#collapseCWs").addClass("on");}}); 
	//chrome.storage.sync.get("minifyFeed", function(result){if(result.minifyFeed == true){$("#minifyFeed").addClass("on");}}); 

	//chrome.storage.sync.get("collapseTerms", function(result){$("#collapseTerms").val(result.collapseTerms);});
	//chrome.storage.sync.get("redactTerms", function(result){$("#redactTerms").val(result.redactTerms);});
	
}

// Retrieve settings from chrome.sync and apply title (tab) style changes
function styleTitle(){
	
	chrome.storage.sync.get("quietTab", function(result){if(result.quietTab == true){removePendingTitle();}}); 
	//chrome.storage.sync.get("verboseTab", function(result){if(result.verboseTab == true){$("#verboseTab").addClass("on");}}); 
	
}

// Apply custom style to promoted tweets
function tagAds(){
	
	$(".promoted-tweet").css("opacity", "0.2");
	$(".promoted-tweet").closest("li").css("border-bottom", "1px solid #e6ecf0");
	
}

// Collapse promoted tweets
function collapseAds(){

	$(".promoted-tweet").css("height", "55px");
	$(".promoted-tweet").find(".u-block").css("display", "none");
	$(".promoted-tweet").find(".AdaptiveMediaOuterContainer").css("display", "none");
	$(".promoted-tweet").find(".PlayableMedia").css("display", "none");
	$(".promoted-tweet").find(".stream-item-footer").css("display", "none");
	$(".promoted-tweet").find(".context").css("display", "none");
	
}

// Collapse tweets with CWs and display the CW
function collapseCWs(){
	
	
}

// Collapse tweets with trigger words and apply content warning
function collapseTriggers(){
	
	
}

// Replace trigger words with black boxes
function redactTriggers(){
	
	
}

// Collapse the 'Trending' menu
function collapseTrending(){
	
	$('.module.Trends').find(".flex-module-inner").hide();
	
	$('.module.Trends').find('.flex-module-header').click(function(evt){
		
		evt.stopImmediatePropagation();
		$('.module.Trends').find(".flex-module-inner").slideToggle();
		
	});	
	
}

// Collapse the 'Who To Follow' menu
function collapseWhoToFollow(){
	
	$('.wtf-module').find("[data-section-id='wtf']").hide();
	
	$('.wtf-module').find('.flex-module-header').click(function(evt){
		
		evt.stopImmediatePropagation();
		$('.wtf-module').find("[data-section-id='wtf']").slideToggle();
		
	});
	
}

// Collapse retweets and apply label
function collapseRetweets(){
	
	
}

// Apply custom styles to tweets from particular sources
function applyCustomStyles(){
	
	
}

// Change the window title to remove pending messages alert
function removePendingTitle(){
	
	$("title").text("Twitter");
}

// Change the window title to add message and notification alerts
function applyVerboseTitle(){
	
	// new-count (new notifications)
	
	// global-dm-nav new (new dms)
	
}

// Apply custom stylesheet to collapse timeline
function tinyFeed(){
	
	
}