import { useState, useEffect } from 'react'
import paginate from './Pagination'
const url = "http://localhost:3500/api/users";


export const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])


    const getUsers = async () => {
        fetch(url)
        .then((response) => 
       response.json()
       )
      .then((data) => (
            setData(paginate(data))
         ))
        setLoading(false)
    }

useEffect(() => {
  getUsers()
}, [])
return { loading, data }

}