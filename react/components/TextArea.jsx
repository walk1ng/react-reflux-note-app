var React = require('react');

var TextArea = React.createClass({
	getInitialState:function(){
		return {
			noteText: '',
		}
	},

	handleChange:function(event){
		this.setState({
			noteText: event.target.value,
		});
	},

	handleSave:function(){
		this.props.onSave(this.props.noteText,this.props.id);
		if(!this.props.id){
			this.refs.textarea.getDOMNode().value="";
			this.setState({noteText:''});
		}
	},

	compnentWillReceiveProps:function(nextProps){
		this.setState({
			noteText: nextProps.noteText,
		});
		if(!nextProps.id){
			this.refs.textarea.getDOMNode().focus();
		}
	}

	render:function(){
		return (
			<div>
				<textarea className="form-control" ref="textarea" cols="100" rows="20" value={this.state.noteText} onChange={this.handleChange}></textarea><br/>
				<input type="button" value="Save" className="btn btn-success btn-lg" onClick={this.handleSave} />
			</div>
		)
	},
});

module.exports = TextArea;