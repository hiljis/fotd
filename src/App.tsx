import React from 'react';
import './App.scss';
import Header from './sections/Header/Header';
import MainList from './sections/MainList/MainList';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MainList />} />
			</Routes>
		</div>
	);
}

export default App;
