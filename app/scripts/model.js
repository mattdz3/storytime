var Story = Parse.Object.extend('story');
var User = Parse.Object.extend('User')

var StoryCollection = Parse.Collection.extend({
	model: Story
});