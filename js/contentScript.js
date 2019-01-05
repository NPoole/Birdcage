/***********************
GLOBAL JUNK
***********************/
var streamHeight = 0; // Store previous value for comparison to check whether tweets were scroll-loaded
var newTweetCount = ""; // Store previous value for comparison to check whether new tweets are pending
var notificationCount = 0; // Store previous value for comparison to update notification count in tab
var dmCount = 0; // Store previous value for comparison to update DM count in tab
var verboseTabFlag = false; // Flag to trigger verbose tab mode
var tabOut = ""; // Store previous value for comparison to update notification count in tab... again... you'll see
var flag_collapseWhoToFollow = false; // Option flag
var flag_collapseTrending = false; // Option flag
var flag_quietTab = false; // Option flag
var triggerWords = ""; // Trigger Words Defined by User

/***********************
RETRIEVE SETTINGS FROM CHROME STORAGE AND SET FLAGS
***********************/
chrome.storage.sync.get("verboseTab", function(result){if(result.verboseTab == true){verboseTabFlag = true;}}); 
chrome.storage.sync.get("tagAds", function(result){if(result.tagAds == true){tagAds();}}); 
chrome.storage.sync.get("collapseAds", function(result){if(result.collapseAds == true){collapseAds();}}); 
chrome.storage.sync.get("minifyFeed", function(result){if(result.minifyFeed == true){smolFeed();}}); 
chrome.storage.sync.get("collapseWhoToFollow", function(result){if(result.collapseWhoToFollow == true){flag_collapseWhoToFollow = true;}}); 
chrome.storage.sync.get("collapseTrending", function(result){if(result.collapseTrending == true){flag_collapseTrending = true;}}); 
chrome.storage.sync.get("collapseTerms", function(result){if(result.collapseTerms != ""){triggerWords = result.collapseTerms;}});
chrome.storage.sync.get("quietTab", function(result){if(result.quietTab == true){flag_quietTab = true;}}); 	


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
	
	if(verboseTabFlag){

		var tabWrite = false;
		
		if($("title").text() != tabOut){
			tabWrite = true;
		}
	
		if($.contains(document.documentElement, $(".people.notifications").find(".new-count").get(0)) && $(".people.notifications").find(".new-count").is(":visible")){

			if($(".people.notifications").find(".count-inner").get(0).innerHTML != notificationCount){
				notificationCount = $(".people.notifications").find(".count-inner").get(0).innerHTML;
				tabWrite = true;
			}

		}else{
			if(notificationCount != 0){
				notificationCount = 0;
				tabWrite = true;
			}
		}
		
		if($.contains(document.documentElement, $(".dm-nav").find(".dm-new").get(0)) && $(".dm-nav").find(".dm-new").is(":visible")){
			
			if($(".dm-nav").find(".count-inner").get(0).innerHTML != dmCount){
				dmCount = $(".dm-nav").find(".count-inner").get(0).innerHTML;
				tabWrite = true;
			}
			
		}else{
			if(dmCount != 0){
				dmCount = 0;
				tabWrite = true;
			}
		}
		
		if(tabWrite){
			$("title").text("Twitter | 🔔 " + notificationCount + " | ✉ " + dmCount);
			tabOut = $("title").text();
		}
		
	}
	
}

// Retreive settings from chrome.sync and apply timeline style changes
function styleTimeline(){
	
	if(flag_collapseWhoToFollow == true){collapseWhoToFollow();} 
	if(flag_collapseTrending == true){collapseTrending();} 
	if(triggerWords != ""){applyCWs(triggerWords);}
	
}

// Retrieve settings from chrome.sync and apply title (tab) style changes
function styleTitle(){
	
	if(flag_quietTab == true){removePendingTitle();} 
	
}

// Apply custom style to promoted tweets
function tagAds(){
	
	$("body").append("<style>.promoted-tweet{opacity: 0.2; border-bottom: 1px solid #657786;}</style>");
	
}

// Collapse promoted tweets
function collapseAds(){

	$("body").append("<style>.promoted-tweet{height: 55px;} .promoted-tweet.u-block{display: none;} .promoted-tweet.AdaptiveMediaOuterContainer{display: none;} .promoted-tweet.PlayableMedia{display: none;} .promoted-tweet.stream-item-footer{display: none;} .promoted-tweet.context{display: none;} </style>");
	
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

// Change the window title to remove pending messages alert
function removePendingTitle(){$("title").text("Twitter");}

// Apply custom stylesheet to collapse timeline
function smolFeed(){

	$("body").append("<style>.stream-item:hover {max-height: 1000px; transition: max-height 1s;}.stream-item { max-height: 65px; transition: max-height 1s; filter: drop-shadow(0px -6px 5px white);}.tweet-context { display: none;}.stream-item-footer { display: none;}.QuoteTweet.AdaptiveMedia-badge{z-index: 0;}.QuoteTweet-originalAuthor{z-index: 0;}.conversation-module>li:after{border-style:none;}.conversation-module>li:before{border-style:none;}.mini-avatar-with-thread:before{border-style:none;}.mini-avatar-with-thread:after{border-style:none;}</style>");
	
}

// Apply content warnings
function applyCWs(triggerGroup){

var triggers = "";

	$(".tweet-text").each(function(tweetIndex, tweetText){
		triggers = "";
		triggerGroup.split(',').forEach(function(triggerWord, triggerIndex){
			if($(tweetText).text().toLowerCase().includes(triggerWord.toLowerCase())){
				triggers += ' ' + triggerWord + ',';
			}
		});
		if(triggers != ""){
			$(tweetText).parent().find('.tweet-triggers').css('display','none');
			triggers = triggers.slice(0, -1);
			$(tweetText).parent().prepend("<span class=\'tweet-triggers\' style=\'font-weight: bold; color: #ffde5e;\'>⚠ CW:" + triggers + " ⚠</span>");
		}
	});
	
}