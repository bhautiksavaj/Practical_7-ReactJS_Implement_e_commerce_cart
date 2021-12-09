function Cart() {
  const [productsArray, setProductsArray] = React.useState([
    { name: "milk", qty: 0, price: 100 },
    { name: "tea", qty: 0, price: 200 },
    { name: "sugar", qty: 0, price: 300 },
    { name: "coffee", qty: 0, price: 400 },
    { name: "honey", qty: 0, price: 500 },
    { name: "butter", qty: 0, price: 600 },
  ]);
  var [totalQty, setTotalQty] = React.useState(0);
  var [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    var totalQtyfromArray = productsArray.map((a) => a.qty);
    var totalPrice = productsArray.map((a) => a.qty * a.price);
    setTotalPrice(totalPrice.reduce((r, t) => r + t));
    setTotalQty(totalQtyfromArray.reduce((r, t) => r + t));
  }, [productsArray]);

  const handlePlusClick = (index, item) => {
    var chnageqty = [...productsArray];
    chnageqty[index] = { ...chnageqty[index], qty: item.qty + 1 };
    setProductsArray(chnageqty);
  };
  const handleMinusClick = (index, item) => {
    if (item.qty !== 0) {
      var chnageqty = [...productsArray];
      chnageqty[index] = { ...chnageqty[index], qty: item.qty - 1 };
      setProductsArray(chnageqty);
    }
  };
  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      {productsArray?.map((item, i) => (
        <div key={i}>
          <h2>
            {item.name} = Price:{item.price} Qty:{item.qty}
          </h2>
          <div>
            <button onClick={() => handlePlusClick(i, item)}>+</button>
            <button onClick={() => handleMinusClick(i, item)}>-</button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total item:{totalQty}</h2>
        <h2>total Amount:{totalPrice}</h2>
      </div>
    </div>
  );
}
ReactDOM.render(<Cart />, document.getElementById("root"));
