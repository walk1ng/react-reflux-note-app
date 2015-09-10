var React = require('react');

var Note = React.createClass({
	render:function(){
		var note = this.props.note;
		var title = note.text.length > 20 ? note.text.substring(0,20) : note.text;

		return (
			<a href="#">{title}</a>
		)
	},
});