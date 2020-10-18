import {Component} from 'react';
import config from "../config.json"
import auth from "../services/authService"

class Logout extends Component {
    state = {  }

    componentDidMount() {
        auth.logout()
        window.location = '/main/dashboard'
    }
    render() { 
        return ( null );
    }
}
 
export default Logout;