import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FREE_SHIPPING_LIMIT = 5000;

const Checkout = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const totalAmount = getTotalPrice();
  const shippingCost = totalAmount >= FREE_SHIPPING_LIMIT ? 0 : 100;
  const finalTotal = totalAmount + shippingCost;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // TODO: Integrate payment gateway here
    console.log("Order Details:", {
      items: cartItems,
      subtotal: totalAmount,
      shipping: shippingCost,
      total: finalTotal,
    });

    alert("Order placed successfully! 🎉");
  };

  const handleBackToCart = () => {
    window.history.back();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add items to your cart to proceed with checkout</p>
          <button
            onClick={handleBackToCart}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ORDER SUMMARY */}
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded border">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 pb-4 border-b">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-28 object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Size: {item.size} | Qty: {item.qty}
                      </p>
                      <p className="font-semibold mt-2">
                        ₹ {item.price * item.qty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SHIPPING ADDRESS */}
            <div className="bg-white p-6 rounded border">
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border px-4 py-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border px-4 py-2 rounded"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border px-4 py-2 rounded"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border px-4 py-2 rounded"
                  required
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border px-4 py-2 rounded"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="border px-4 py-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="border px-4 py-2 rounded"
                    required
                  />
                </div>
              </form>
            </div>

            {/* PAYMENT METHOD */}
            <div className="bg-white p-6 rounded border">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Credit/Debit Card</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" />
                  <span>UPI</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </section>

          {/* PRICE SUMMARY */}
          <aside className="bg-white p-6 rounded border h-fit sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Price Summary</h2>

            <div className="space-y-3 border-b pb-4 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹ {totalAmount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shippingCost === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    `₹ ${shippingCost}`
                  )}
                </span>
              </div>
            </div>

            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>₹ {finalTotal}</span>
            </div>

            {totalAmount < FREE_SHIPPING_LIMIT && (
              <p className="text-sm text-orange-600 mb-4">
                Add ₹{FREE_SHIPPING_LIMIT - totalAmount} more for free shipping!
              </p>
            )}

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition mb-3"
            >
              PLACE ORDER
            </button>

            <button
              onClick={handleBackToCart}
              className="w-full border border-orange-500 text-orange-500 py-3 rounded font-semibold hover:bg-orange-50 transition"
            >
              Back to Cart
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
