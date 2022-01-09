import {Component} from 'react'
import 'bulma/css/bulma.min.css'
import Container from '../components/index/container'
import Navbar from '../components/index/nav'

class Index extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <div style={{height: "100%", display: "flex", margin: "auto"}}>
        {/* <Navbar /> */}
        <Container />
      </div>
    )
  }
}

export default Index