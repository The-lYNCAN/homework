import { Component } from "react";
import styles from '../../styles/index/right.module.scss'

class Right extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className={styles.container}>
                <h1 className="title">Sign Up</h1>
                <h2 className="subtitle">It's free and always will be</h2>
                <div style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className={"container is-max-widescreen "}>
                <div className={styles.cont}>
                    {/* <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /> */}
                <div class="field">
                <label class="label">Full Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith" />
                </div>
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
                </div>
                <div class="field">
                <label class="label">Class/Course</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
                </div>
                <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
                </div>
                <div class="field">
                <label class="label">Confirm Password</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                </div>
                </div>
                <div style={{width: "100%"}} class="field">
                <p class="control has-icons-left">
                    <span style={{width: "100%"}} class="select">
                    <select style={{width: "100%"}}>
                        <option selected>Select School/College</option>
                        <option>Aravali College of Engineering and Technology</option>
                        <option>Shri Rama Bharti Public School</option>
                        <option>Baba Mustnath University</option>
                    </select>
                    </span>
                    <span class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                    </span>
                </p>
                <p class="control has-icons-left">
                    <span style={{width: "100%"}} class="select">
                    <select style={{width: "100%"}}>
                        <option selected>Select School/College</option>
                        <option>Aravali College of Engineering and Technology</option>
                        <option>Shri Rama Bharti Public School</option>
                        <option>Baba Mustnath University</option>
                    </select>
                    </span>
                    <span class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                    </span>
                </p>
                <p class="control has-icons-left">
                    <span style={{width: "100%"}} class="select">
                    <select style={{width: "100%"}}>
                        <option selected>Select School/College</option>
                        <option>Aravali College of Engineering and Technology</option>
                        <option>Shri Rama Bharti Public School</option>
                        <option>Baba Mustnath University</option>
                    </select>
                    </span>
                    <span class="icon is-small is-left">
                    <i class="fas fa-globe"></i>
                    </span>
                </p>
                </div>
                
                <div class="control">
                <button className={"button "+ styles.btn}>Submit</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Right