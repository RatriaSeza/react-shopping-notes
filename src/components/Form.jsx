// import { useState } from "react";

function Form() {
	const quantityNum = [...Array(20)].map((_, i) => (
		<option key={i + 1} value={i + 1}>
			{i + 1}
		</option>
	));

  // const [input, setInput] = useState('')

  // function handeInput() {

  // }

	return (
		<form className="add-form">
			<h3>Hari ini belanja apa kita?</h3>
			<div>
				<select>{quantityNum}</select>
				<input type="text" placeholder="nama barang..." />
			</div>
			<button>Tambah</button>
		</form>
	);
}

export default Form;
