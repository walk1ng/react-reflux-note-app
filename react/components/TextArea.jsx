/**
 * @jsx React.DOM
 */

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
		alert('hello');
		this.props.onSave(this.props.noteText,this.props.id);
		if(!this.props.id){
			this.refs.textarea.getDOMNode().value="";
			this.setState({noteText:''});
		}
	},

	testxxx:function(){
		alert('xxx');
	},

	compnentWillReceiveProps:function(nextProps){
		this.setState({
			noteText: nextProps.noteText,
		});
		if(!nextProps.id){
			this.refs.textArea.getDOMNode().focus();
		}
	},

	render:function(){
		return (
			<div>
				<textarea className="form-control" ref="textArea" cols="100" rows="20" value={this.state.noteText} onChange={this.handleChange}></textarea><br/>
				<input type="button" value="Savezzz" className="btn btn-success btn-lg" onClick={this.testxxx} />
			</div>
		)
	},
});

module.exports = TextArea;