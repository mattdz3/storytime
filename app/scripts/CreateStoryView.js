var CreateStoryView = Parse.View.extend({

	className: "create",
	
	template: _.template($('.create-story-view').text()),

	initialize: function() {
		$('.story-container').empty();
		$('.full-story-container').empty();
		$('.create-container').append(this.el);
		this.render();
	},

	render: function() {
		var renderTemplate = this.template(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});