import React, { Component } from 'react';

import './../css/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { keyword: '' };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleUserInput(this.state.keyword);
    }

    render () {
        return (
            <div className="container container--searchbar">
                <form className="form form--searchbar" onSubmit={this.handleSubmit}>
                    <input className="input input--searchbar"
                        onChange={(event) => this.setState({ keyword: event.target.value })}
                        value={this.state.keyword}
                        placeholder="Search"
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;