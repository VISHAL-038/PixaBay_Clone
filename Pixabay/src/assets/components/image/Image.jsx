import React, { useEffect, useState } from 'react'
import "./Image.css"

const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "41907257-9a907ec007c8651dcf22e20e6"

const Image = () => {
    //hooks
    const [searchString, setSearchString] = useState("")
    const [images, setImages] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        const debouncedFunction = setTimeout(()=>{
            fetchData()
        },2000)

        return(()=>{
            clearTimeout(debouncedFunction)
        })
       
    }, [searchString])

    //functions
    const handleSearch = (e) => {
        setSearchString(e.target.value)
    }

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchString)}`)
            const result = await response.json()
            setImages(result.hits)
            setLoading(false)
        }
        catch (error) {
            alert(error)
            setLoading(false)
        }
    }

    console.log(images, "images")
    return (
        <div>
            <header>
                <h3 className='heading'>Stunning royalty-free images & royalty-free stock</h3>
                <input type='text' value={searchString} onChange={handleSearch} placeholder="Search for images"></input>
            </header>
            <br></br>
            <div className='image-grid'>
                {loading ?
                <span>Loading.....</span> :
                images.length && images?.map((image) => {
                    return (
                        <div className='image'>
                            <img src={image.webformatURL}></img>
                            <p className="tags">{image.tags}</p>
                        </div>
                    )

                }
                )}
            </div>

        </div>
    )
}

export default Image;