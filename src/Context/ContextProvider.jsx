import axios from "axios";
import React, {
  createContext,
  useEffect,
  useEffectEvent,
  useState,
} from "react";

export const SkyMartContext = createContext();

const ContextProvider = ({ children }) => {
  const [session, setSession] = useState(() => {
    return JSON.parse(localStorage.getItem("session")) || null;
  });
  const [showCart, setShowCart] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || [],
  );
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All Categories");
  const [featured, setFeatured] = useState("Featured");

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (error) {
      console.log("some error occured: " + error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterCategory = (value) => {
    if (value === "All Categories") {
      const filtered = products.filter((p) => p);
      setFilteredProducts([...filtered]);
      return;
    }
    const filtered = products.filter((p) => p.category == value.toLowerCase());
    setFilteredProducts(filtered);
  };

  const filterFeatured = (value) => {
    if (value == "Featured") {
      const filtered = products.filter(
        (p) => p.category == category.toLowerCase(),
      );
      setFilteredProducts(filtered);
    }
    if (value == "Price High - Low") {
      const highToLow = filteredProducts.sort((a, b) => b.price - a.price);
      setFilteredProducts([...highToLow]);
    }
    if (value == "Price Low - High") {
      const lowToHigh = filteredProducts.sort((a, b) => a.price - b.price);
      setFilteredProducts([...lowToHigh]);
    }
    if (value == "Top Rated") {
      const topRated = filteredProducts.sort(
        (a, b) => b.rating.rate - a.rating.rate,
      );
      setFilteredProducts([...topRated]);
    }
    if (value == "Lowest Rated") {
      const lowestRated = filteredProducts.sort(
        (a, b) => a.rating.rate - b.rating.rate,
      );
      setFilteredProducts([...lowestRated]);
    }
  };

  const updateQty = (id, type) => {
    const currentItem = cartItems.find((i) => i.id == id);

    if (currentItem && currentItem.quantity === 1 && type === 0) {
      removeFromCart(id);
      return;
    }

    const updatedData = cartItems.map((i) => {
      if (i.id == id) {
        return { ...i, quantity: type ? i.quantity + 1 : i.quantity - 1 };
      }
      return i;
    });

    setCartItems(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const addToCart = (id) => {
    const findProduct = products.find((p) => p.id == id);
    if (!findProduct) {
      console.error("Product does not exists");
      return;
    }
    const updatedData = cartItems
      ? [...cartItems, { ...findProduct, quantity: 1 }]
      : [{ ...findProduct, quantity: 1 }];
    setCartItems(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  const removeFromCart = (id) => {
    const updatedData = cartItems.filter((p) => p.id !== id);

    setCartItems(updatedData);
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  return (
    <SkyMartContext.Provider
      value={{
        showCart,
        setShowCart,
        session,
        setSession,
        users,
        setUsers,
        products,
        setProducts,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
        updateQty,
        filteredProducts,
        setFilteredProducts,
        filterCategory,
        filterFeatured,
        category,
        setCategory,
        featured,
        setFeatured,
      }}
    >
      {children}
    </SkyMartContext.Provider>
  );
};

export default ContextProvider;
