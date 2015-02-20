var JoinView = Parse.View.extend({

	template: _.template($('.join-view').text()),

	events: {
		'click .user-upload-pic' : 'addPic',
		'click .create-acc'      : 'create',
	},
	
	initialize: function() {
		$('.story-container').empty();
		$('.join-container').append(this.el);
		this.render();
	},

	render: function() {
		var renderTemplate = this.template(this.model)
		this.$el.html(renderTemplate);
		return this;
	},

	addPic: function(){
		filepicker.pick(
  		function(InkBlobs){
    		pic = InkBlobs.url
		});
	},

	create: function() {
		var user = new Parse.User();

		user.set('username', $('.username').val());
		user.set('password', $('.password').val());
		user.set('userPic', pic);
		
		user.signUp(null, {
			success: function(user){
				var currentUser = Parse.User.current();
				if (currentUser) {
					router.navigate('home', {trigger: true});
				} else {
					console.log("current user not set")
				}
			},

			error: function(user, error){
				alert(error.message + ". " + "Sorry try again!")
			}
		})
	}
})

