var Router = Parse.Router.extend({
	
	routes: {
		''             : 'home',
		'home'         : 'home',
		'join'         : 'join',
		'login'        : 'login',
		'story/:id'    : 'story',
		'user'         : 'user',
		'create'       : 'create',
	},

	initialize: function() {
		this.currentView = null;
	},

	home: function(){
		$('.join-container').empty();
		var query = new Parse.Query(Story)
		query.find({
			success: function(stories){
				stories.forEach(function(story) {
					var view = new StoryView({
						model: story
					});
				});
			}
		});
	},

	story: function(id) {
		var query = new Parse.Query(Story)

		query.find({
			success: function(stories){
				stories.forEach(function(story) {
					if (modelId == story.id) {
						var view = new FullStoryView({
							model: story 
						});
					}
				});
			}
		});
	},

	user: function() {
		var user = Parse.User.current();
		var view = new UserView({
			model: user
		});
		this.swap(view);
	},

	create: function() {
		var view = new CreateStoryView();
		this.swap(view);
	},

	join: function() {
		var view = new JoinView();
		this.swap(view);
	},

	login: function() {
		var view = new LoginView();
		this.swap(view);
	},

	swap: function(view) {
		if (this.currentView) this.currentView.remove();
		this.currentView = view;
		this.currentView.render();
	},
})

var router = new Router();
Parse.history.start();