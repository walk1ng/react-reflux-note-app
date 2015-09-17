/**
 * @jsx React.DOM
 */

var React = require('react');
var Note = require('./Note.jsx');

var NoteList = React.createClass({
	getInitialState:function(){
		return {
			activeNoteId:null,
		}
	},

	setActiveNote:function(id){
		this.setState({
			activeNoteId: id,
		})
	},


	render:function(){
		var self = this;
		var notes = this.props.notes.concat().reverse();
		var noteNotes = notes.map(function(note){
			return (
				<Note key={note._id} active={self.state.activeNoteId===note._id} note={note} onSelect={self.setActiveNote} onEdit={self.props.onEdit} />
			);
		});
		return (
			<div className="list-group">
				{noteNotes}
			</div>
		)
	},
});

module.exports = NoteList;