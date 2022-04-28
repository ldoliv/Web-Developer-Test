import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/style.scss';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Products, News, Contact, Cart} from './pages';
import {DefaultLayout} from './layouts';


function App() {
   return (
      <BrowserRouter>
         <div className='pages'>
            <Routes>
               <Route path="/" element={<DefaultLayout />}>
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="news" element={<News />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="cart" element={<Cart />} />
               </Route>
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
