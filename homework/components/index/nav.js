import { Component } from "react";
import styles from '../../styles/index/nav.module.scss'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className={styles.container}>
                <h1>Home Work</h1>
            </div>
        )
    }
}

export default Navbar