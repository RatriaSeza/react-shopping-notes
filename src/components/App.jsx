import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import GroceryList from "./GroceryLIst";
import Header from "./Header";

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

	function handleClearItems() {
		setItems([]);
	}

	return (
		<div className="app">
			<Header />
			<Form onAddItem={handleAddItems} />
			<GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleCheckItem={handleToggleCheckItem} onClearItems={handleClearItems} />
			<Footer items={items} />
		</div>
	);
}

export default App;
