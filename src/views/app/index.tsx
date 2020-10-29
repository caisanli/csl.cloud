import React from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import { hot } from 'react-hot-loader/root';
import routes from '@/routes';

function App():JSX.Element {
    return (
        <HashRouter>
            <div>56</div>
            { renderRoutes(routes) }
        </HashRouter>    
    )
}

export default App;