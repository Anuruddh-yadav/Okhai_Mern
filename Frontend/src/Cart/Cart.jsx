import React from "react";

const FREE_SHIPPING_LIMIT = 5000;

const Cart = ({ isOpen = true, onClose, cartItems = [] }) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const remainingForFreeShipping =
    FREE_SHIPPING_LIMIT - totalAmount;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // TEMP LOGIC (replace later with navigation)
    console.log("Proceeding to checkout");
    console.log("Cart Items:", cartItems);
    console.log("Total:", totalAmount);

    alert("Checkout flow will be added next 🚀");
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
              <div key={item.id} className="flex gap-4">
                
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-28 object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1 text-sm">
                  <p className="font-medium leading-snug">
                    {item.name}
                  </p>

                  <p className="text-gray-500 mt-1">
                    Size: {item.size}
                  </p>

                  <p className="mt-2 font-medium">
                    ₹ {item.price}
                  </p>

                  {/* QTY */}
                  <div className="mt-3 flex items-center gap-2">
                    <button className="border px-2">−</button>
                    <span>{item.qty}</span>
                    <button className="border px-2">+</button>
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

          <button
            onClick={handleCheckout}
            className="w-full border border-black py-2 text-sm hover:bg-black hover:text-white transition"
          >
            CHECKOUT
          </button>

          <button className="w-full bg-orange-400 text-white py-2 text-sm">
            HAVE A GIFT CARD?
          </button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
