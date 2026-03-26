import React, { useContext } from "react";
import { CartContext } from "../context/CardContext";

const Cart = () => {
  const { cart, deleteCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-20">
          Your cart is empty 😢
        </div>
      ) : (
        <div className="max-w-5xl mx-auto grid gap-6">

          {/* CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                
                {/* IMAGE (optional) */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                {/* DETAILS */}
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">₹ {Math.round(item.price)}</p>
                  <p className="text-sm text-gray-600">
                    Qty: {item.qty}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col items-end gap-2">
                <p className="font-bold text-lg">
                  ₹ {Math.ceil(item.price * item.qty)}
                </p>

                <button
                  onClick={() => deleteCart(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="bg-white p-5 rounded-2xl shadow-md flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total</h2>
            <h2 className="text-2xl font-bold text-green-600">
              ₹ {Math.ceil(totalPrice)}
            </h2>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;