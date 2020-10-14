import { useEffect, useState } from 'react'
import API_KEY from './keys'


const CONTEXT_KEY = "572433bacb27a0f7b" ;

const  useGoogleSearch = (term) =>{
    const [data, setdata] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(responce => responce.json())
            .then(result => {
                setdata(result)
                console.log(result)
            })
            
        }
        fetchData();
    }, [term])
    return { data }
};

export default useGoogleSearch;
