import React from 'react';
import {Link} from "react-router-dom"
const NewUser = () => {
    return ( 
        <div className="mt-3 text-center">
            Don't have an account? <Link to="/sign-up">Sign up</Link>
        </div>
     );
}
 
export default NewUser;