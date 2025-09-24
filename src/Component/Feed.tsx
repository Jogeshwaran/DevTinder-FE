import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
    const dispatch = useDispatch()
    const feedData = useSelector((state) => state.feedData)
  const getFeedData = async() => {
    try {
        const res = await axios.get(BASE_URL + "/user/feed", {withCredentials : true})
        console.log(res.data)
        if(res){
            dispatch(addFeed(res.data))
        }
    } catch (error) {
        console.log(error)
    }
  }
  console.log('feedData',feedData);
  
  useEffect(()=>{
    getFeedData()
  },[])
  return (
    feedData && (<div>
      <UserCard feedData = {feedData[0]}/>
    </div>)
  )
}

export default Feed
