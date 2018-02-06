import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBH1rf5lgJuNwltVbWSfVXN-vGmZJZRB3w';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({ videos });
            // this.setState({ videos: videos });
            // Only works when key and value are same name
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList 
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// Take this component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));