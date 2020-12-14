(function() {

	'use strict';

	var traderaChrome = {

		init: function() {

			chrome.contextMenus.onClicked.addListener(traderaChrome.selectText);

			chrome.runtime.onInstalled.addListener(function() {
				var context = "selection";
				var title = "Öppna ”%s” på tradera.com";
				var id = chrome.contextMenus.create({
					"title": title,
					"contexts": [context],
					"id": "context" + context
				});
			});

		},

		selectText: function(info) {
			var phrase = info.selectionText;
			traderaChrome.opentradera(phrase);
		},

		opentradera: function(phrase) {
			var url = "https://www.tradera.com/search?q=" + encodeURIComponent(phrase);
			chrome.tabs.create({
				"url" : url
			});
		}

	};

	document.addEventListener('DOMContentLoaded', function() {
		traderaChrome.init();
	});

}());
