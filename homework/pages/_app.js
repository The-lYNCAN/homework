import '../styles/globals.css'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  axios({url: "http://localhost:8000/test", method: "GET"}).then(res => {
    // console.log(res);
  }).catch(reason => {
    console.log(reason);
  })
  return <Component {...pageProps} />
}

export default MyApp
