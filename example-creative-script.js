var _pr_responsive_break_points = {
	'width': [500],
	'height': []
};
var _pr_responsive_ad_sizes = {
	'width': ['pr-small', 'pr-medium', 'pr-large'],
	'height': []
};
var _pr_ad_slot_index = 3;
var _pr_ad_connection;
var _pr_wrap;

function prInitAd(){
	_pr_ad_connection = new prAdConnection(false, myCallback);

	_pr_wrap = document.getElementById('pr-wrap');

	_pr_wrap.addEventListener('click', function(event){
		_pr_ad_connection.closeAd();
	}, false);

	_pr_ad_connection.updateAdSize = function(size, type){
		switch(type){
			case 'width':
				_pr_ad_connection._ad_container.className = _pr_responsive_ad_sizes.width[size] + ' ' + _pr_responsive_ad_sizes.height[_pr_ad_connection._ad_size.height];

				switch(size){
					case 0:
						_pr_ad_connection.sendMessageToPub({'hide': null});
					break;

					case 1:
						_pr_ad_connection.sendMessageToPub({'reveal': null, 'setAdSize': {'width': '100%', 'height': '90px'}});
					break;

					case 2:
						_pr_ad_connection.sendMessageToPub({'reveal': null, 'setAdSize': {'width': '100%', 'height': '300px'}});
					break;
				}
			break;

			case 'height':
				_pr_ad_connection._ad_container.className = _pr_responsive_ad_sizes.width[_pr_ad_connection._ad_size.width] + ' ' + _pr_responsive_ad_sizes.height[size];
			break;
		}
	}

	_pr_ad_connection.fireNonImpression = function(){
		//
	}

	_pr_ad_connection.createConnection(_pr_wrap, _pr_responsive_break_points, prPlacementId, _pr_ad_slot_index);
}

function pageScrollHandler(event){
	_pr_ad_connection.log('page scroll = ' + event.scrollY + 'px');
}

function myCallback(message){
	if(message == 'success'){
		_pr_ad_connection.addPageListener('window', 'scroll', pageScrollHandler);

		_pr_ad_connection.sendMessageToPub({'wrapElements': {'id': 'helloworld', 'elements': '#testid1, #testid3', 'class': 'itsraining'}});
		_pr_ad_connection.sendMessageToPub({'wrapElements': {'id': 'goodbyeworld', 'elements': '.testclass', 'min': 3, 'max': 8, 'tag': 'a'}});

		_pr_ad_connection.sendMessageToPub({'addDirectStyles': {'.testclass, #testid1': {'background': '#000'}, '#testid2': {'width': '300px'}}});

		//_pr_ad_connection.sendMessageToPub({'overwriteImportantStyles': {'.testclass, #testid1': {'background': '#000'}, '#testid2': {'width': '300px'}}});
	}
}