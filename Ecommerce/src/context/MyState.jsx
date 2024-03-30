/*eslint-disable*/
import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const [product, setProduct] = useState([]);

  const getproducts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "products"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (snaps) => {
        let temp = [];
        snaps.forEach((doc) => temp.push({ ...doc.data(), id: doc.id }));

        setProduct(temp);
      });
      return unsubscribe;
    } catch (error) {
      toast.error(`Error fetching data ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getproducts();
    getOrderData();
    getUsersData();
  }, []);

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      console.log("context");
      const querySnapshot = await getDocs(collection(db, "orders"));
      if (querySnapshot.empty) {
        console.log("No documents found in the 'orders' collection.");
      } else {
        const ordersArray = [];
        querySnapshot.forEach((doc) => {
          ordersArray.push(doc.data());
        });
        setOrder(ordersArray);
        //   console.log(order,"insidemethod");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState([]);

  const getUsersData = async () => {
    setLoading(true);
    try {
      console.log("context");
      const querySnapshot = await getDocs(collection(db, "users"));
      if (querySnapshot.empty) {
        toast.error("No users found in the collection.");
      } else {
        const usersArray = [];
        querySnapshot.forEach((doc) => {
          usersArray.push(doc.data());
        });
        setUser(usersArray);
        console.log(usersArray);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const addproducts = async () => {
    if (
      products.title == null ||
      products.category == null ||
      products.price == null ||
      products.description == null ||
      products.imageUrl == null
    ) {
      return toast.error("Enter all the fields");
    } else {
      setLoading(true);
      try {
        const ref = collection(db, "products");
        await addDoc(ref, products);
        toast.success("Product added Successfully");
        setProducts({
          title: null,
          price: null,
          imageUrl: null,
          category: null,
          description: null,
          time: Timestamp.now(), // Update time when adding product
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }), // Update date when adding product
        });
        getproducts();
        navigate("/dashboard");
      } catch (error) {
        toast.error(`Error adding product ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const editHandle = (item) => {
    setProducts(item);
  };
  const updateProducts = async () => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "products", products.id), products);
      toast.success("Updated Successfully");
      setProducts({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(), // Update time when adding product
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }), // Update date when adding product
      });
      getproducts();
      navigate("/dashboard");
    } catch (error) {
      toast.error(`Error updating product ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const deleteProducts = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "products", item.id));
      toast.warning("Product Deleted Successfully!");
      getproducts();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addproducts,
        product,
        editHandle,
        updateProducts,
        deleteProducts,
        order,
        setOrder,
        user,
        setUser,
        searchKey,
        setSearchKey,
        filterType,
        setFilterType,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
