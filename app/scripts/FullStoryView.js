var FullStoryView = Parse.View.extend({

	className: "full-story",
	
	template: _.template($('.full-story-view').text()),

	events: {
	},

	initialize: function() {
		$('.full-story-container').append(this.el);
		this.render();
		console.log(this.model)
	},

	render: function() {
		var renderTemplate = this.template(this.model.attributes)
		this.$el.html(renderTemplate);
		return this;
	},
});