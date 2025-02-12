import { useState } from "react";
import useBookContext from "../contexts/BookContext";

export default function useHandleSubmit() {
  const { addBook } = useBookContext();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isRead: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author) {
      alert("Please fill in all fields");
      return;
    }

    addBook(formData);

    setFormData({
      title: "",
      author: "",
      isRead: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "radio" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  return { formData, handleSubmit, handleChange };
}
