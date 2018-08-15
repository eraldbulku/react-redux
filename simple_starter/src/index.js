import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUd3A0azJUbu8if_AHOgNQQBW0xpupESs';

// Create new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


// Take this component/s generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
