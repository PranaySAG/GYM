import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { axios, user } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
      } else {
        toast.error(data.message || "Failed to fetch orders");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  return (
    <div className="mt-12 pb-16 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">My Orders</h2>

      {myOrders.length === 0 && (
        <p className="text-gray-500">You haven't placed any orders yet.</p>
      )}

      {myOrders.map((order) => (
        <div
          key={order._id}
          className="my-8 border border-gray-300 rounded-lg p-4 max-w-4xl"
        >
          <div className="flex flex-col md:flex-row justify-between gap-2 text-gray-700 text-sm md:text-base mb-4">
            <span><strong>Order ID:</strong> {order._id}</span>
            <span><strong>Payment:</strong> {order.paymentType}</span>
            <span><strong>Total:</strong> ${order.amount.toFixed(2)}</span>
          </div>

          {order.items.map((item, i) => (
            <div
              key={item.product?._id || i}
              className={`flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 ${
                order.items.length !== i + 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="p-2">
                  <img
                    src={`http://localhost:5000/images/${item.product?.image?.[0] || "placeholder.png"}`}
                    alt={item.product?.name || "Product"}
                    className="w-16 h-16 object-cover rounded"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.product?.name || "Unknown Product"}</h3>
                  <p className="text-sm text-gray-500">{item.product?.category || ""}</p>
                </div>
              </div>

              <div className="text-sm md:text-base text-gray-700 font-medium text-right">
                <p>Qty: {item.quantity || 1}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                <p>
                  Amount: $
                  {item.product?.offerPrice && item.quantity
                    ? (item.product.offerPrice * item.quantity).toFixed(2)
                    : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
