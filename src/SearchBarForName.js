import React, { Component } from 'react';

class SearchBarForName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobName: ''
		}
	}

	componentDidMount() {
		this.JobInput.focus();
	}

	handleChange = event => {
		this.setState({ jobName: event.target.value }, () => this.props.onChange(this.state.jobName));
	}

	render() {
		return (
			<span style={{ display: 'inline-block' }}>
				<label htmlFor="search-what">What</label>
				<input
					id="search-what"
					type="text"
					placeholder="Job title, keywords or company"
					style={{ marginLeft: '10px' }}
					ref={input => { this.JobInput = input; }}
					value={this.state.jobName}
					onChange={this.handleChange}
				/>
			</span>
		)
	}
}

export default SearchBarForName;
