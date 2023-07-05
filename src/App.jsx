import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Navigation from "./components/Navigation.jsx";
function App() {
return (
<div className="app">
<BrowserRouter>
<Navigation />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/contact" element={<Contacto />} />
</Routes>
</BrowserRouter>
</div>
);
}
export default App;

