(function() {
	var a = document.createElement('script');
	var b = document.createElement('script');
	a.src = chrome.extension.getURL('ngStats.js');
	
	a.onload=function() {
		chrome.storage.local.get('show-ngstats', function(data) {
			var on = data['show-ngstats'];
			chrome.storage.local.get('ngstats-position', function(data) {
				var position = data['ngstats-position'];

				if(on) {
					b.innerHTML = 'window.showAngularStats({position: "' + position + '"})';
					document.body.appendChild(b);
				}
			})
		});
	};

	document.body.appendChild(a);
})();