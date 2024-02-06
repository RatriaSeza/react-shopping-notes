import Footer from "./components/Footer";
import Form from "./components/Form";
import GroceryList from "./components/GroceryLIst";
import Header from "./components/Header";

// import { useState } from 'react'
function App() {
	return (
		<div className="app">
			<Header />
			<Form />
			<GroceryList />
			<Footer />
		</div>
	);
}

export default App;
