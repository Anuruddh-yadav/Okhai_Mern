import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tracking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [trackingData, setTrackingData] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    // Get order data from location state (passed from checkout)
    const orderInfo = location.state?.order;

    if (!orderInfo) {
      // Fallback: create demo order if none provided
      const demoOrder = {
        orderId: `OKHAI${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        items: [
          {
            name: "Handmade Kurta",
            qty: 1,
            price: 2999,
            image: "https://okhai.org/cdn/shop/files/EAR064-A_1.jpg?v=1698667378&width=750",
          },
        ],
        totalAmount: 2999,
        email: "customer@example.com",
        phone: "+91 XXXXXXXXXX",
        address: "Sample Address, City, State - 123456",
      };
      initializeTracking(demoOrder);
    } else {
      initializeTracking(orderInfo);
    }
  }, [location]);

  const initializeTracking = (order) => {
    const now = new Date();

    // Simulate order timeline
    const orderPlacedTime = now;
    const packingTime = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now
    const shippedTime = new Date(now.getTime() + 8 * 60 * 60 * 1000); // 8 hours from now
    const inTransitTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 1 day from now
    const deliveredTime = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days from now

    const stages = [
      {
        status: "Order Confirmed",
        time: orderPlacedTime,
        description: "Your order has been successfully placed",
        icon: "✓",
        completed: true,
      },
      {
        status: "Packing",
        time: packingTime,
        description: "Your order is being carefully packed",
        icon: "📦",
        completed: false,
      },
      {
        status: "Shipped",
        time: shippedTime,
        description: "Your order has been dispatched",
        icon: "🚚",
        completed: false,
      },
      {
        status: "In Transit",
        time: inTransitTime,
        description: "Your package is on its way",
        icon: "🚛",
        completed: false,
      },
      {
        status: "Delivered",
        time: deliveredTime,
        description: "Order delivered to your address",
        icon: "🏠",
        completed: false,
      },
    ];

    const progress = calculateProgress(stages);

    setTrackingData({
      order: order,
      stages: stages,
      estimatedDelivery: deliveredTime,
      createdAt: orderPlacedTime,
    });

    setCurrentProgress(progress);
  };

  const calculateProgress = (stages) => {
    const now = new Date();
    const completed = stages.filter(stage => stage.time <= now).length;
    return (completed / stages.length) * 100;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (!trackingData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
          <p className="text-gray-600">Order ID: <span className="font-mono font-bold text-orange-600">{trackingData.order.orderId}</span></p>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">
            {trackingData.order.items?.map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-3 border-b last:border-b-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                  <p className="font-semibold mt-1">₹ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span className="text-orange-600">₹ {trackingData.order.totalAmount}</span>
            </div>
          </div>
        </div>

        {/* SHIPPING ADDRESS */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-700">{trackingData.order.address}</p>
            <p className="text-gray-600 mt-3">Email: {trackingData.order.email}</p>
            <p className="text-gray-600">Phone: {trackingData.order.phone}</p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <h2 className="text-xl font-semibold mb-6">Delivery Progress</h2>

          {/* Visual Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Order Progress</span>
              <span className="text-sm font-bold text-orange-600">{Math.round(currentProgress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${currentProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-6">
              {trackingData.stages.map((stage, idx) => {
                const isCompleted = stage.time <= new Date();
                const isActive = stage.time > new Date();

                return (
                  <div key={idx} className="flex gap-6">
                    {/* Circle Indicator */}
                    <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : isActive
                            ? "bg-orange-500 text-white animate-pulse"
                            : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {isCompleted ? "✓" : stage.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3
                          className={`font-semibold text-lg ${
                            isCompleted ? "text-green-600" : "text-gray-800"
                          }`}
                        >
                          {stage.status}
                        </h3>
                        <span className="text-sm font-medium text-gray-600">
                          {formatDate(stage.time)}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-2">{stage.description}</p>

                      <div className="flex items-center gap-2 text-sm">
                        <span
                          className={`font-mono font-bold ${
                            isCompleted ? "text-green-600" : "text-orange-600"
                          }`}
                        >
                          {formatTime(stage.time)}
                        </span>
                        {isCompleted && (
                          <span className="text-green-600 text-xs font-semibold">
                            ✓ Completed
                          </span>
                        )}
                        {isActive && (
                          <span className="text-orange-600 text-xs font-semibold animate-pulse">
                            ⏳ In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ESTIMATED DELIVERY */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200 mb-6">
          <h3 className="font-semibold text-orange-900 mb-2">📅 Estimated Delivery</h3>
          <p className="text-2xl font-bold text-orange-600">
            {formatDate(trackingData.estimatedDelivery)}
          </p>
          <p className="text-sm text-orange-700 mt-2">
            Your order should arrive by this date. Delivery may vary based on location.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-white border border-orange-500 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </main>
  );
};

export default Tracking;
