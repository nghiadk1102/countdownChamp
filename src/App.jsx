import React, {Component} from 'react';
import './App.css';
import Clock from './Clock'
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadLine: 'December 17, 2018'
		}
	}

	changeDeadline() {
		this.setState({deadLine: this.state.newDealLine})
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Count down to {this.state.deadLine}</div>
				<Clock 
					deadLine={this.state.deadLine}/>
				<div>
					<input placeholder='new date' 
								 onChange={event => this.setState({newDealLine: event.target.value})}/>
					<button onClick={() => this.changeDeadline()}>Submit</button>
				</div>
			</div>
		)
	}
}

export default App;