import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import GroceryList from "./components/GroceryLIst";
import Header from "./components/Header";

// import { useState } from 'react'
function App() {
	const groceryItems = [
		{
			id: 1,
			name: "Kopi Bubuk",
			quantity: 2,
			checked: true,
		},
		{
			id: 2,
			name: "Gula Pasir",
			quantity: 5,
			checked: false,
		},
		{
			id: 3,
			name: "Air Mineral",
			quantity: 3,
			checked: false,
		},
	];

	const [items, setItems] = useState(groceryItems);

	function handleAddItems(item) {
		setItems([...items, item])
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id))
	}

	function handleToggleCheckItem(id) {
		const nextItems = items.map((item) => {
			if (item.id === id) {
				item.checked = !item.checked
			}
			return item;
		})
		setItems(nextItems)
	}

	return (
		<div className="app">
			<Header />
			<Form onAddItem={handleAddItems} />
			<GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleCheckItem={handleToggleCheckItem} />
			<Footer />
		</div>
	);
}

export default App;
