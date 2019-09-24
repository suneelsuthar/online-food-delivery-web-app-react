import React from "react"
import Navbar from './../navbar/appbar'
import Tabs from './tabbar'
import Dashboard from '../dashboard/drawer'

export default class RestourantPage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Dashboard />
                 {/* <Navbar /> */}
                {/* <Tabs />  */}

            </div>
        )
    }
}