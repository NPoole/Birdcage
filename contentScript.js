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
	
	console.log('style timeline');
	
}

// Retrieve settings from chrome.sync and apply title (tab) style changes
function styleTitle(){
	
	console.log('style title');
	
}

// Apply custom style to promoted tweets
function tagAds(){
	
	
}

// Collapse promoted tweets
function collapseAds(){
	
	
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
	
	
}

// Collapse the 'Who To Follow' menu
function collapseWhoToFollow(){
	
	
}

// Collapse retweets and apply label
function collapseRetweets(){
	
	
}

// Apply custom styles to tweets from particular sources
function applyCustomStyles(){
	
	
}

// Change the window title to remove pending messages alert
function removePendingTitle(){
	
	
}

// Change the window title to add message and notification alerts
function applyVerboseTitle(){
	
	// new-count (new notifications)
	
	// global-dm-nav new (new dms)
	
}

// Apply custom stylesheet to collapse timeline
function tinyFeed(){
	
	
}