import React from 'react'
import Register from '../../component/login/register'
import Navbar from './../../component/navbar/appbar'

import UserPage from './../../component/user page/userpage'
class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <UserPage />
            </div> 
        )
    }
}

export default Home