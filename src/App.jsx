import React from 'react';
import B from "./components/B";

import { ProductProvider } from "./context/productcontext";

const App = () => {
    return (
            
            <ProductProvider>
               
                <B />
                
            </ProductProvider>
       
    );
}

export default App;
