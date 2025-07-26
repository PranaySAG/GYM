import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";

const ProductList = () => {
  const { products, fetchProducts, axios } = useAppContext();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post("/api/product/stock", { id, inStock });
      if (data.success) {
        toast.success(data.message);
        fetchProducts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Error updating stock");
    }
  };

  return (
    <div className="flex-1 py-10 flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Products</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Product</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold hidden md:block">Selling Price</th>
                <th className="px-4 py-3 font-semibold">In Stock</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {products.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((product) => {
                  const imageUrl =
                    Array.isArray(product.images) && product.images.length > 0
                      ? product.images[0]
                      : "https://placehold.co/64x64?text=No+Image";

                  return (
                    <tr key={product._id} className="border-t border-gray-500/20">
                      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                        <div className="border border-gray-300 rounded p-2">
                          <img
                            src={imageUrl}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://placehold.co/64x64?text=Image+Error";
                            }}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </div>
                        <span className="truncate max-sm:hidden w-full">{product.name}</span>
                      </td>
                      <td className="px-4 py-3">{product.category}</td>
                      <td className="px-4 py-3 max-sm:hidden">₹{product.offerPrice}</td>
                      <td className="px-4 py-3">
                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                          <input
                            onChange={() => toggleStock(product._id, !product.inStock)}
                            checked={product.inStock}
                            type="checkbox"
                            className="sr-only peer"
                          />
                          <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                          <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                        </label>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
