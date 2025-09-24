import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";


const BasePage = () => {
    // check if user is logged in or not
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector((state) => state.userData)
    console.log(userData);
    
    const fetchUser = async()=> {
        try {
        const res = await axios.get(BASE_URL + "/getProfile" , {withCredentials : true})
        console.log(res.data.data)
        dispatch(addUser(res.data.data))
        } catch (error) {
            if(error.status === 401){
                return navigate('/login')
            }
           console.log(error) 
        }
    }
    useEffect(()=>{
        if(!userData){
            fetchUser()
        }
    },[])
    return(
        <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    )
}

export default BasePage