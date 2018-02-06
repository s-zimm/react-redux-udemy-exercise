import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    _onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    onChange={event => this._onInputChange(event.target.value) } 
                    value={this.state.term}
                />
            </div>
        );
    }

}

export default SearchBar;