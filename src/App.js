import "./styles.css";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Read from "./pages/Read";
import Unread from "./pages/Unread";
import AddBook from "./pages/AddBook";

import { Routes, Route } from "react-router-dom";
import { BookProvider } from "./contexts/BookContext";

export default function App() {
  return (
    <BookProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="read" element={<Read />} />
          <Route path="unread" element={<Unread />} />
          <Route path="add-book" element={<AddBook />} />
        </Route>
      </Routes>
    </BookProvider>
  );
}
