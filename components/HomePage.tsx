"use client"
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { decreaseFunc, increaseFunc } from "../components/redux/productaction";
const HomePage = () => {

    const profiledata = [1, 2, 3, 4]
    const dispatch = useDispatch();

    interface RootState {
        counterdata: number; 
    }
    
   
    const counterdata = useSelector((state: RootState) => state.counterdata);

    const dothe = () => {
        dispatch(increaseFunc(counterdata))
    }
    const dotheD = () => {
        dispatch(decreaseFunc(counterdata))
    }

    return (
        <>
            <div style={{ backgroundColor: "#E9D7CF", height: 800 }}>
                <div style={{
                    position: "sticky",
                    backgroundColor: "#E9D7CF",
                    top: 0,
                    zIndex: 1,
                    padding: "10px 0",
                    width: "100%",
                    boxShadow: "0 1px 0.5px -0.5px gray"
                }}>
                    <Header />
                </div>


                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 100, zIndex: 0 }}>
                    <p style={{ color: "black", textAlign: "center", width: 600, fontSize: 25, fontFamily: "serif" }}>Whether you're seeking top talent, your dream job, or exceptional web services, Stackkaroo has got you covered. Explore our offerings and find what you need to achieve your goals.</p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    {profiledata.map((item, index) => {
                        return (
                            <div key={index} style={{ height: 50, width: 50, backgroundColor: "red", borderRadius: "50%", position: "relative", overflow: "hidden", marginTop: 50, marginBottom: 5 }}>
                                <Image
                                    src="https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg"
                                    alt="profile"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        );
                    })}
                </div>
                <h1 className="text-center text-black text-sm ">1000+ happy clients</h1>
               
                <div className="flex flex-col items-center mt-4">
                <h1 className="text-2xl font-bold text-red-500 mb-2">next-js redux setup for state management</h1>
                    <h1 className="text-2xl font-bold text-red-500 mb-2">
                        Current Counter Value:
                    </h1>
                    <div className="bg-blue-500 text-white text-[32px] font-semibold rounded-lg px-4 py-2 shadow-lg">
                        {counterdata}
                    </div>
                    <h1
                    className="bg-blue-500 text-red-500 w-[80px] h-[50px] rounded-lg text-center flex items-center justify-center cursor-pointer transition duration-300 hover:bg-blue-600 hover:text-white mt-5"
                    onClick={() => { dothe(); }}
                >
                    Increase
                </h1>

                <h1 className="bg-blue-500 text-red-500 w-[80px] h-[50px] rounded-lg text-center flex items-center justify-center cursor-pointer transition duration-300 hover:bg-blue-600 hover:text-white mt-5" onClick={() => { dotheD() }}>decrese</h1>
                </div>
               
            </div>
            <Footer />
        </>
    )
}

export default HomePage;