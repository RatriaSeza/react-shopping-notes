function GroceryList({ items, onDeleteItem, onToggleCheckItem }) {
	
	return (
		<>
			<div className="list">
				<ul>
					{items.map((item) => (
						<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleCheckItem={onToggleCheckItem} />
					))}
				</ul>
			</div>
			<div className="actions">
				<select>
					<option value="input">Urutkan berdasarkan urutan input</option>
					<option value="name">Urutkan berdasarkan nama barang</option>
					<option value="checked">Urutkan berdasarkan ceklis</option>
				</select>
				<button>Bersihkan Daftar</button>
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
