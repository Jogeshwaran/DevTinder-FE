import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { BASE_URL } from '../utils/helper'
import { removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) =>  state.userData)
  const navigate = useNavigate()

  const handleLogout = async() => {
    try{
      await axios.post(BASE_URL + "/logout", {} , {withCredentials : true})
      dispatch(removeUser())
      return navigate("/login")
    }catch(err){
      console.log(err)
    }
  }
  // console.log('userData',userData)
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👨‍💻DevTinder</Link>
      </div>
     { userData && <div className="flex gap-2">
      <div className='flex justify-center'>
        <h3>welcome {userData?.firstName}</h3>
        <div className="dropdown dropdown-end mx-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
        </div>
      </div>}
    </div>
  )
}

export default Navbar
