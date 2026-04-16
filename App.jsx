import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Add Item
  const addItem = () => {
    if (name === "" || price === "") return;

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
    };

    setCart([...cart, newItem]);
    setName("");
    setPrice("");
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #141e30, #243b55)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      {/* Card */}
      <div style={{
        width: "380px",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        padding: "25px",
        borderRadius: "15px",
        color: "white",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)"
      }}>

        <h2 style={{ textAlign: "center" }}>🛒 Shopping Cart</h2>

        {/* Input Section */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none"
            }}
          />

          <input
            type="number"
            placeholder="₹"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: "80px",
              padding: "10px",
              borderRadius: "8px",
              border: "none"
            }}
          />
        </div>

        <button onClick={addItem} style={{
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "10px",
          background: "#00c6ff",
          color: "white",
          cursor: "pointer"
        }}>
          Add Item
        </button>

        {/* Cart Items */}
        <div style={{ marginTop: "20px" }}>
          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{
                background: "rgba(255,255,255,0.2)",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>

                <span>
                  {item.name} - ₹{item.price}
                </span>

                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: "red",
                    border: "none",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  X
                </button>

              </div>
            ))
          )}
        </div>

        {/* Total */}
        <h3 style={{ marginTop: "15px" }}>Total: ₹{total}</h3>

      </div>
    </div>
  );
}

export default App;