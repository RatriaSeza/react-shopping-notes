function GroceryList() {
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

	return (
		<>
			<div className="list">
				<ul>
					{groceryItems.map((item) => (
						<Item item={item} key={item.id} />
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

function Item({ item }) {
	return (
		<li key={item.id}>
			<input type="checkbox" />
			<span style={item.checked ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.name}
			</span>
			<button>&times;</button>
		</li>
	);
}

export default GroceryList;
