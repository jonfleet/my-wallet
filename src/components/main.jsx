import React, {Component} from 'react';
import {Switch, Route, Redirect, useParams, useRouteMatch } from 'react-router-dom'

// Components
import Sidebar from './sidebar'
import Reports from './reports'
import Expense from "./expense"
import Budget from "./budget"
import Dashboard from './dashboard'
import Login from "./common/loginForm"
import NotFound from './not-found'


// Icons

const MainElement = () => {
    // const {url, path} = useParams()
    const {path, url} = useRouteMatch()
    console.log("URL: ", url);
    // const name = url.substr(1, url.length-1)
    // console.log(name)
    const elements = [
        {element: <Dashboard key="dashboard" />, path: "/main/dashboard"},
        {element: <Reports key="report" />, path :"/main/report"},
        {element: <Expense key="expense"/>, path: "/main/expense"},
        {element: <Budget key="budget"/>, path: "/main/budget"},
    ]

    function generateElement () { 
        let result = elements.filter(element => element.path === url)
        console.log(result)
        if(result.length === 0){
            console.log('not found')
            return <NotFound key="not-found"/>
        }
        return result[0].element
    }
    return (
        <div>
           {generateElement()}     
        </div>  
      );
}

// let {path, url } = useRouteMatch();

class Main extends Component {
    state = { 
        menuOptions: [
            {id: 1, element: <Dashboard key="dashboard"/> , path: "/dashboard", exact: false},
            {id: 2, element: <Reports key="report" />, path: "/reports", exact: false},
            {id: 3, element: <Expense key="expense"/>, path: "/add-expenses", exact: false},
            {id: 4, element: <Budget key="budget"/>, path:"/budget", exact: false},
            {id: 5, element: <NotFound key="not-found"/>, path:"/not-found", exact: false},
        ]
     }      

    render() { 
        const {menuOptions} = this.state
        // let {mainTopicId } = useParams();
        // console.log("ID: ", mainTopicId)
        // let {path} = useRouteMatch();
        // console.log("Path: ", path)
        return (  
            <div>
                <div className="row">
                    <div className="col-2">
                        <Sidebar/>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path={`/main/:element`}> 
                                <MainElement />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;
