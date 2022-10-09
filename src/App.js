import "./styles.css";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import "./pages/styles.css";
import "./pages/responsive.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>

      </Routes>

    </BrowserRouter>
  );
}
