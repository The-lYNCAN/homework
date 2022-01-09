import { Component } from "react";
import 'bulma/css/bulma.min.css'
import styles from './../styles/login/index.module.scss'
import axios from "axios";

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleLogin = () => {
        console.log("nothing here");
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        axios({url: "http://localhost:8000/auth_login", data:{
            username: username,
            password: password
        }, method: "POST", withCredentials: true}).then(res => {
            // console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    componentWillMount(){
        axios({url: "http://localhost:8000/auth/get", method: "get", withCredentials: true}).then(res => {
            console.log(res);
            if(res.data === ''){
                console.log("not logged in");
            }else{
                location.href = "./home"
            }
        })
    }

    render(){
        return(
            <div style={{height: "100%", background: "#f8f9fd"}} className={" " + styles.container}>
                <div className={styles.cont}>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                    <h1 style={{textAlign: "center"}} className="title">Sign In To Homework</h1>
                <div className={styles.formCon}>

                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input id="username" class="input" type="text" placeholder="e.g example@example.com" />
                </div>
                </div>

                <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input id="password" class="input" type="password" placeholder="Password" />
                </div>
                </div>
                
                <div class="control">
                <button onClick={this.handleLogin} className={"button "+ styles.btn}>Submit</button>
                </div>
                </div>
                <div className={styles.signin}>
                    <p>New to HomeWork? <a href="./">Create an account</a>.
                    </p>
                </div>
                </div>
            </div>
        )
    }
}

export default Login