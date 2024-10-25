import Footer from "./Footer";
import Header from "./Header";

const Service =  () =>{
    return(
        <div style={{backgroundColor:"white",position:"absolute",top:0,bottom:0,left:0,right:0}}>
            <h1 style={{textAlign:"center",marginTop:50,color:"black",fontFamily:"cursive",fontWeight:"bolder",fontSize:30}}> service page</h1>
            <Header/>
            <div style={{position:"absolute",bottom:0,left:0,right:0}}>
            <Footer/>
            </div>
        </div>
    )
}

export default Service;
