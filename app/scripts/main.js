Parse.initialize("VRe4913VulbpRmqZOo9ARrI4XhBjkZDE7WYQiiMG", "I7pZbkI3SLJSnICiKzvGMHjou4kxyHKsm7DaPBRc");

filepicker.setKey("AFLbZroQeC5fnjZH5RpUAz");

$('.join').click(function() {
	router.navigate('join', {trigger: true})
});

$('.logout').click(function() {
	Parse.User.logOut();
	router.navigate("home", {trigger: true})
});

$('.login').click(function() {
	router.navigate("login", {trigger: true})
});

$('.profile').click(function() {
	router.navigate("user", {trigger: true})
});

if (Parse.User.current() == undefined) {
	$('.join').show();
	$('.logout').hide();
	$('.login').show();
	$('.profile').hide();
} else {
	$('.logout').show();
	$('.login').hide();
	$('.join').hide();
}

