/**
 * local-time.js
 * Show time in local time zone
 * @author ryanli
 */

var FoxtrickLocalTime = {
	MODULE_NAME : "LocalTime",
	MODULE_CATEGORY : Foxtrick.moduleCategories.PRESENTATION,
	PAGES : ["all"],
	CSS : Foxtrick.ResourcePath + "resources/css/local-time.css",

	run : function(page, doc) {
		var time = doc.getElementById("time");
		// icon for Hattrick time zone
		var htTimeIcon = doc.createElement("img");
		htTimeIcon.id = "ft-ht-time-icon";
		htTimeIcon.src = Foxtrick.ResourcePath + "resources/img/tz-hattrick.png";
		htTimeIcon.alt = Foxtrickl10n.getString("LocalTime.hattrick");
		htTimeIcon.title = Foxtrickl10n.getString("LocalTime.hattrick.title");
		time.parentNode.insertBefore(htTimeIcon, time.nextSibling);

		// set up local time div at the header
		var localTime = doc.createElement("div");
		localTime.id = "ft-local-time";
		var updateTime = function() {
			localTime.textContent = Foxtrick.util.time.buildDate();
			setTimeout(updateTime, 1000);
		};
		updateTime();
		time.parentNode.insertBefore(localTime, htTimeIcon.nextSibling);

		// icon for local time zone
		var localTimeIcon = doc.createElement("img");
		localTimeIcon.id = "ft-local-time-icon";
		localTimeIcon.src = Foxtrick.ResourcePath + "resources/img/tz-local.png";
		localTimeIcon.alt = Foxtrickl10n.getString("LocalTime.local");
		localTimeIcon.title = Foxtrickl10n.getString("LocalTime.local.title");
		time.parentNode.insertBefore(localTimeIcon, localTime.nextSibling);

		// to tell whether #time or #ft-local-time should be hidden
		if (FoxtrickPrefs.getBool("module.LocalTime.local")) {
			Foxtrick.addClass(time, "hidden");
			Foxtrick.addClass(htTimeIcon, "hidden");
		}
		else {
			Foxtrick.addClass(localTime, "hidden");
			Foxtrick.addClass(localTimeIcon, "hidden");
		}
		// add on-click events for toggling between local/HT times
		var toggleDisplay = function() {
			FoxtrickPrefs.setBool("module.LocalTime.local", !FoxtrickPrefs.getBool("module.LocalTime.local"));
			Foxtrick.toggleClass(time, "hidden");
			Foxtrick.toggleClass(htTimeIcon, "hidden");
			Foxtrick.toggleClass(localTime, "hidden");
			Foxtrick.toggleClass(localTimeIcon, "hidden");
		};
		time.addEventListener("click", toggleDisplay, false);
		localTime.addEventListener("click", toggleDisplay, false);

		// updates all dates within the page
		var updatePage = function() {
			if (FoxtrickPrefs.getBool("module.LocalTime.local")) {
				// only deal with nodes with class date in mainBody
				var mainBody = doc.getElementById("mainBody");
				if (!mainBody)
					return;
				var dates = mainBody.getElementsByClassName("date");

				Foxtrick.map(dates, function(date) {
					var htDate = Foxtrick.util.time.getDateFromText(date.textContent);
					if (!htDate)
						return; // may only contain time without date
					var tzDiff = Foxtrick.util.time.timezoneDiff(doc);
					var localDate = new Date();
					localDate.setTime(htDate.getTime() + tzDiff * 60 * 60 * 1000);
					date.textContent = Foxtrick.util.time.buildDate(localDate);
					// set original time as attribute for reference from
					// other modules
					date.setAttribute("x-ht-date", htDate.getTime());
				});
			}
		};

		updatePage();
	}
}
