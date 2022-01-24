import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home';
import About from './pages/About';
import Wallipis from './pages/Wallipis';
import Navigation from './components/Navigation';
import SingleImg from './pages/SingleImg';
import Category from './pages/Category';

class Doc extends React.Component{
    componentDidMount(){
      document.title = "dfsdfsdfsd";
    }
}


const App = () => {

    return (
        <>
            <Router>
            <Navigation />
                <Switch>
                    <Route path='/' component={Home} exact></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/search/:query' component={Wallipis}></Route>
                    <Route path='/wallipi/:id' component={SingleImg}></Route>
                    <Route path='/category' component={Category}></Route>

                </Switch>
            </Router>
        </>
    )
}

export default App;