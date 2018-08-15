import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUd3A0azJUbu8if_AHOgNQQBW0xpupESs';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

// Create new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('.container'));
