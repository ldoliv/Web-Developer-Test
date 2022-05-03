import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';

import {useRoutes} from "react-router-dom";
import appConfig from './config';



function App() {

   let routes = useRoutes(appConfig.routes);

   return (
      <>
         {routes}
      </>
   );
}

export default App;
