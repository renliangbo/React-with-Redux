import React, {Component} from 'react';
class SearchBar extends Component {
		constructor(props) {
				super(props);
				this.onSearchTermChange=props.onSearchTermChange;
				this.state = {
						term: ''
				};
		}
		render() {
				return (
						<div>
								<input
										value={this.state.term}
										onChange={(event) => this.onInputChange(event.target.value)}
										type="text"/>
								<div>
										{this.state.term}
								</div>

						</div>
				)

		}

		onInputChange(term) {
			this.setState({term});
			this.props.onSearchTermChange(term);
		}
}

export default SearchBar;