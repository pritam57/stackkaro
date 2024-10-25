import Footer from "./Footer"
import Header from "./Header"

const CommonHF =()=>{
    return(
        <div style={{backgroundColor:"white",position:"absolute",top:0,bottom:0,left:0,right:0}}>
        <Header/>
        <div style={{position:"absolute",bottom:0,left:0,right:0}}>
        <Footer/>
        </div>
    </div>
    )
}

export default CommonHF;