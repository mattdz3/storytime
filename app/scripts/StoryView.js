var modelId;

var StoryView = Parse.View.extend({

	className: "story",
	
	template: _.template($('.story-view').text()),

	events: {
		'click button' : 'renderFull',
	},

	initialize: function() {
		$('.user-container').empty();
		$('.full-story-container').empty();
		$('.story-container').append(this.el);
		this.render();
		// console.log(this.model)
	},

	render: function() {
		var renderTemplate = this.template(this.model.attributes)
		this.$el.html(renderTemplate);
		return this;
	},

	renderFull: function() {
		console.log("cool");

		$('.story-container').empty();
		modelId = this.model.id;
		
		var fullReview = this.model;
		console.log(modelId)
		router.navigate('story/' + modelId, {trigger: true})
	},
});