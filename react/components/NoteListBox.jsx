var React = require('react');
var NoteList = require('./NoteList.jsx');
var NoteStore = require('../../stores/NoteStore');

var NoteListBox = React.createClasse({
	getInitialState:function(){
		return {
			notes: NoteStore.getNotes(),
		}
	},

	onChange:function(notes){
		this.setState({
			notes:notes,
		});
	},

	componentDidMount:function(){
		this.unsubscribe = NoteStore.listen(this.onChange);
	},

	componentWillUnmount:function(){
		this.unsubscribe();
	},

	render:function(){
		return (
			<div className="col-md-4">
				<NoteList notes={this.state.notes} />
			</div>
		)
	}

});

module.exports = NoteListBox;