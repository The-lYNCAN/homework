import React, { Component } from 'react'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
        <div>

            <div class="card">
                <div class="card-header"><p class="card-header-title">Header</p></div>
                <div class="card-content"><div class="content">Content</div></div>
            </div>
            <br />
        </div>
        )
    }
}

export default Content