import { useState, useEffect } from "react";


const useFetch = (url) => {  //custom hooks needs to start with "use"
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(response => {
                console.log(response)
                if(!response.ok){
                    throw Error('Could not fetch data for that resource')
                }
                return response.json()
            })
            .then((data)=>{
                console.log(data)
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch((error)=>{
                setIsPending(false)
                setError(error.message)
            })
        },2000)
        
    },[url])

    return {
        data,
        isPending,
        error
    }
}
 
export default useFetch;