import { useState } from "react";

function GroceryList({ items, onDeleteItem, onToggleCheckItem, onClearItems }) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	switch (sortBy) {
		case "name":
			sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
			break;
		case "checked":
			sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
			break;
		default:
			sortedItems = items;
			break;
	}

	return (
		<>
			<div className="list">
				<ul>
					{sortedItems.map((item) => (
						<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleCheckItem={onToggleCheckItem} />
					))}
				</ul>
			</div>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Urutkan berdasarkan urutan input</option>
					<option value="name">Urutkan berdasarkan nama barang</option>
					<option value="checked">Urutkan berdasarkan ceklis</option>
				</select>
				<button onClick={onClearItems}>Bersihkan Daftar</button>
			</div>
		</>
	);
}

function Item({ item, onDeleteItem, onToggleCheckItem }) {
	return (
		<li key={item.id}>
			<input type="checkbox" checked={item.checked} onChange={() => onToggleCheckItem(item.id)} />
			<span style={item.checked ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.name}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>&times;</button>
		</li>
	);
}

export default GroceryList;
