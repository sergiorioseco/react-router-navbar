import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Contacto from "./views/Contacto.jsx";
import Navigation from "./components/Navigation.jsx";
import NoFound from "./views/NoFound.jsx";
function App() {
return (
<div className="app">
<BrowserRouter>
<Navigation />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/contact" element={<Contacto />} />
<Route path="*" element={<NoFound />} />
</Routes>
</BrowserRouter>
</div>
);
}
export default App;

