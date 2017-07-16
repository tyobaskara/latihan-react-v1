import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
// 	render(){
// 		return (
// 			<div>Hello</div>
// 		)
// 	}
// }

// const	App = () => <h1>hellow world</h1>

class App extends React.Component {
	constructor(){
		super(); //use super(): to allow use 'this' below
		this.state = { 
			txt3: 'this is the state txt',
			txt4: 'this stateless txt',
			cat: 0,
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
		this.update2 = this.update2.bind(this)
		this.updateSl = this.updateSl.bind(this)

	}
	update(e){
		this.setState({txt3: e.target.value})
	}
	update2(e) {
		this.setState({txt4: e.target.value})
	}
	updateSl(e) {
		this.setState({
			// red: ReactDOM.findDOMNode(this.refs.red).value,
			// green: ReactDOM.findDOMNode(this.refs.green).value,
			// blue: ReactDOM.findDOMNode(this.refs.blue).value
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}
	render() {
		let txt = this.props.txt
		return (
			<div>
				<h1>{txt}</h1>
				<h2>{this.props.txt2}</h2>
				<input type="text" onChange={this.update  } />
				<h3>{this.state.txt3}</h3>
				<Widget txt4={this.state.txt4} update2={this.update2} />

				<br/>
				<Slider ref="red" updateSl={this.updateSl} />
				{this.state.red}
				<br/>
				<Slider ref="green" updateSl={this.updateSl} />
				{this.state.green}
				<br/>
				<Slider ref="blue" updateSl={this.updateSl} />
				{this.state.blue}
				<br/>
			</div>
		)
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps ={
	txt: 'this is the default txt',
	txt2: 'txt2 default text'
}

const Widget = (props) => {
	return (
		<div>
			<h3>stateless</h3>
			<input type="text" onChange={props.update2} />
			<h4>{props.txt4}</h4>
		</div>
	)
}

//
class Slider extends React.Component {
	render(){
		return (
			// <input type="range" min="0" max="255" 
			// onChange={this.props.updateSl}/>
			<div>
				<input ref="inp" type="range" min="0" max="255" 
				onChange={this.props.updateSl}/>
			</div>
		)
	}
}

export default App