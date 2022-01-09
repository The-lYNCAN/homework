import { Component } from "react";
import styles from '../../styles/index/container.module.scss'
import Left from "./left";
import Right from "./right";

class Container extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className={"container " + styles.con}>
                <Left />
                {/* <div className={styles.line}>
                </div> */}
                <Right />
            </div>
        )
    }
}

export default Container