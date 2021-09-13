import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';

const App = () => (
<Router> 
    <AppWithRouterAccess />
</Router>
 // return <Chart />;
);

export default App;

