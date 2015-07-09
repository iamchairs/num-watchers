chrome.storage.local.get('show-ngstats', function(data) {
	var on = data['show-ngstats'];
	chrome.storage.local.get('ngstats-position', function(data) {
		var position = data['ngstats-position'];

		if(on) {
			document.getElementById('launch-button').innerHTML='Turn Off';
		} else {
			document.getElementById('launch-button').innerHTML='Turn On';
		}

		document.getElementById('launch-button').addEventListener('click', function() {
			if(on) {
				chrome.storage.local.set({'show-ngstats': false}, function() {
					window.location.reload();
				});
			} else {
				chrome.storage.local.set({'show-ngstats': true}, function() {
					window.location.reload();
				});
			}
		});

		if(!position) {
			position = 'top-left';
		}

		var radios = document.getElementsByTagName('input');
		for(var i = 0; i < radios.length; i++) {
			var radio = radios[i];
			if(radio.parentNode.getAttribute('id') === position) {
				radio.checked = true;
			}

			radio.addEventListener('click', function() {
				var pos = this.parentNode.getAttribute('id');
				chrome.storage.local.set({'ngstats-position': pos}, function() {
					window.location.reload();
				});
			});
		}
	})


});