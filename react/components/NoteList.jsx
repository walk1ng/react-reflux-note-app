var React = require('react');
var Note = require(./Note.jsx);

var NoteList = React.createClass({
	getInitialState:function(){
		return {
			
		}
	},


	render:function(){
		var self = this;
		var notes = this.props.notes.concat().reverse();
		var noteNotes = notes.map(function(note){
			return (
				<Note key={note._id} note={note} />
			)
		})

		return (
			<div className="list-group">
				{noteNodes}
			</div>
		)
	},

})