function Cart() {
    const [productsArray, setProductsArray] = React.useState([
      { name: "T-shirt", qty: 0, price: 100 },
      { name: "Jeans", qty: 0, price: 200 },
      { name: "Full Sleave T-shirt", qty: 0, price: 300 },
      { name: "Shorts", qty: 0, price: 400 },
      { name: "shoes", qty: 0, price: 500 },
      { name: "slippers", qty: 0, price: 600 }
    ]);
    var [totalQty, setTotalQty] = React.useState(0);
    var [totalPrice, setTotalPrice] = React.useState(0);
    
    React.useEffect(() => {  
      setTotalPrice(productsArray.reduce((r, t) => r + (t.price*t.qty),0));
      setTotalQty(productsArray.reduce((r, t) => r + t.qty,0));
     }, [productsArray]);
  
    const handleClick = (index, qty) => {
      productsArray[index]?.qty=qty
      setProductsArray(productsArray);
    };
    
    return (
      <div>
        <div>
          <h1>Cart</h1>
        </div>
        {productsArray?.map((item, i) => (
          <div key={i}>
            <h2>
              {item.name} =Price:{item.price}{" "}Qty:{item.qty}
            </h2>
            <div>
              <button onClick={() => handleClick(i, item.qty+1)}>+</button>
              <button onClick={() => item.qty!=0?handleClick(i, item.qty-1):null}>-</button>
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