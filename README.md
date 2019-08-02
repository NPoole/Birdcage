# Birdcage

![icon](https://user-images.githubusercontent.com/1609220/50721681-add84180-1080-11e9-9708-171fcf7c1d0c.jpg)

A Chrome Extension for taming the Twitter user experience

### EOL:
### Twitter Changed Their Whole Shit Up and Now This Works Even Less Than When It Worked

[Check it Out on the Google App Store](https://chrome.google.com/webstore/detail/birdcage/jonhbfifbpbhmfomacogiemiobdgbdhe)
(or install it as an [unpacked extension](https://www.mattcutts.com/blog/how-to-install-a-chrome-extension-from-github/))

## User Guide

Here's a quick rundown of each feature in the options menu and what it's _supposed to_ do. You can find the options menu after installing the Birdcage App by clicking the birdcage extension icon in your Chrome toolbar and selecting "options".

### Make Promoted Tweets Translucent

Paid content on Twitter is sinister for its organic look and feel. Because the "Promoted Content" context is located at the bottom of the tweet card and the timeline is usually traversed top-down, it's easy to mistake an advertisement for a normal tweet. This setting adds a style rule to the timeline that sets promoted content to 0.2 opacity. This makes it easy to spot promoted content without completely removing it from view... afterall, I've done some of my best shopping from Ads.

### Collapse Promoted Tweets

If you're less interested in Promoted Content and want to avoid the attention-grabbing images and video that they contain, you can opt to collapse any Promoted Tweet to 55px tall. Clicking on the tweet will still show the full tweet card.

### Turn Off Tab Alerts

Twitter's default behavior is to show the number of 'new tweets' within parentheses on the Twitter browser tab. The point is to catch your attention when you're working in another tab and something happens on your timeline. Sometimes it's nice to have Twitter within reach in another tab without the distraction of the alert counter. This mode changes the tab title to "Twitter" whenever Twitter tries to change it to something else. There may still be a blip of up to 500ms between the tab changing and being reverted.

### Turn On Verbose Tab Alerts

This mode doesn't show any 'new tweet' counter in the browser tab, but instead, it shows the count of unread notifications and DMs. 

![Tab Screenshot](https://user-images.githubusercontent.com/1609220/50721676-9c8f3500-1080-11e9-8b33-5d0c0b36ef25.PNG)

### Collapse "Who To Follow"

This simply shrinks the "Who To Follow" widget, hiding all user suggestions. You can click on "Who To Follow" to slide-toggle the suggestion list if you still want to peek at it.

### Collapse "Trending" 

This option does the same thing for the "Trending" widget as the previous option does for "Who to Follow"

### Minify Twitter Feed (Experimental)

This option injects an experimental stylesheet to shrink all timeline objects to 60 pixels high, hide all tweet context and reaction controls. Hovering over a tweet will expand it to full height and clicking on it will show the full tweet card just like in the default behavior.

### Apply CW to tweets with the Following Words/Phrases

This feature will search the Twitter timeline any time that new tweets are loaded and mark any tweets containing the specified words or phrases with a content warning. This warning will be formatted as follows: 

![CW Screenshot](https://user-images.githubusercontent.com/1609220/50721680-aadd5100-1080-11e9-95f7-86894c2ddb41.PNG)

where "trigger word" is replaced with a list of each specified word or phrase contained within the tweet.

### Buy Me Coffee

Hey, if you like my little project I wouldn't turn down a buck or two :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AH53PTEW2UAAJ)
