const product = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = product.map((product) => <li key={product.id}></li>);
