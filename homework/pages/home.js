import React, { Component } from 'react'
import 'bulma/css/bulma.min.css'
import Navbar from '../components/home/navbar'
import Content from '../components/home/content'
import TopNav from '../components/home/topnav'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div id="app">
                <TopNav />
    
        <nav class="nav has-shadow">
        <div class="container">
        </div>
        </nav>

            <section class="main-content columns is-fullheight">
            
            <Navbar />

            <div class="container column is-10">
                <div class="section">

                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
                
                
                </div>
            </div>
            
            </section>

            <footer class="footer is-hidden">
            <div class="container">
                <div class="content has-text-centered">
                <p>Hello</p>
                </div>
            </div>
            </footer>
                
            </div>
        )
    }
}

export default Home