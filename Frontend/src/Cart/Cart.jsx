import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const FREE_SHIPPING_LIMIT = 5000;

const Cart = ({ isOpen = true, onClose }) => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } =
    useContext(CartContext);

  if (!isOpen) return null;

  const totalAmount = getTotalPrice();
  const remainingForFreeShipping = FREE_SHIPPING_LIMIT - totalAmount;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    console.log("Proceeding to checkout");
    console.log("Cart Items:", cartItems);
    console.log("Total:", totalAmount);

    // Navigate to checkout page
    navigate("/checkout");
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* CART DRAWER */}
      <aside className="fixed top-0 right-0 z-50 h-screen w-95 bg-white shadow-xl flex flex-col">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">My Cart</h2>
          <button
            onClick={onClose}
            className="text-xl font-light hover:opacity-60"
          >
            ✕
          </button>
        </div>

        {/* FREE SHIPPING MESSAGE */}
        <div className="px-5 py-3 text-sm border-b">
          {remainingForFreeShipping > 0 ? (
            <p className="text-orange-500">
              Almost there! Add ₹{remainingForFreeShipping} more to your cart
              for free shipping.
            </p>
          ) : (
            <p className="text-green-600 font-medium">
              🎉 You’ve unlocked free shipping!
            </p>
          )}
        </div>

        {/* CART BODY */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b pb-4">
                
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-28 object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="text-sm flex-1">
                      <p className="font-medium leading-snug">
                        {item.name}
                      </p>

                      <p className="text-gray-500 mt-1">
                        Size: {item.size}
                      </p>

                      <p className="mt-2 font-medium">
                        ₹ {item.price}
                      </p>
                    </div>

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-red-600 text-sm font-medium hover:text-red-800"
                    >
                      ✕
                    </button>
                  </div>

                  {/* QTY CONTROLS */}
                  <div className="mt-3 flex items-center gap-3 border border-gray-300 w-fit">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.qty - 1)}
                      className="px-3 py-1 hover:bg-orange-100 font-medium"
                    >
                      −
                    </button>
                    <span className="px-4 py-1 font-medium">{item.qty}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.qty + 1)}
                      className="px-3 py-1 hover:bg-orange-100 font-medium"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t px-5 py-4 space-y-4">
          
          <details className="border-b pb-3">
            <summary className="cursor-pointer text-sm font-medium">
              Special Delivery Instructions
            </summary>
          </details>

          <div className="flex justify-between text-sm font-medium">
            <span>Amount Payable</span>
            <span>₹ {totalAmount}</span>
          </div>

          <p className="text-xs text-gray-500">
            (Inclusive of all taxes)
          </p>

          <div className="space-y-3">
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-2 text-sm font-medium hover:bg-orange-600 transition"
            >
              CHECKOUT
            </button>

            <button
              onClick={handleCancel}
              className="w-full bg-orange-400 text-white py-2 text-sm font-medium hover:bg-orange-500 transition"
            >
              CONTINUE SHOPPING
            </button>
          </div>

          <button 
            onClick={() => clearCart()}
            className="w-full border border-orange-500 text-orange-500 py-2 text-sm font-medium hover:bg-orange-50 transition">
            CLEAR CART
          </button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
