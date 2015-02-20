var UserView = Parse.View.extend({

	className: "user",
	
	template: _.template($('.user-view').text()),

	initialize: function() {
		$('.story-container').empty();
		$('.full-story-container').empty();
		$('.user-container').append(this.el);
		this.render();
		console.log(this.model)
	},

	render: function() {
		var renderTemplate = this.template(this.model.attributes)
		this.$el.html(renderTemplate);
		return this;
	},
});