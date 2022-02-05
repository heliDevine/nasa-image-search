import React, { useState } from 'react';
import Search from '../components/Search.js';
import SearchResults from '../components/SearchResults.js';
import '../styles/App.css';

function App() {
	const [searchResults, setSearchResults] = useState('');
	console.log(searchResults);
	return (
		<div className="App">
			<img
				className="nasa-logo"
				src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
				alt="nasaLogo"
			/>
			<Search setSearchResults={setSearchResults} />
			<SearchResults />
		</div>
	);
}

export default App;
