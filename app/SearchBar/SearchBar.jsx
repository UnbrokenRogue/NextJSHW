
import { useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    //const astyle = {width:"100px"}

    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(products => {
            const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchString.toLowerCase())})
            // const currentFilter = products.map((product, index) => {
            const currentFilter = filtered.map((product, index) => {
                // return JSX
                return (
                    <div className = "prodStyle">
                        <p style = {{fontSize:".8rem"}}>{product.title}</p>
                        <hr></hr>
                        <img style={{width:"100px"}} src={product.image} alt="" />
                        {/* <p>{product.image}</p> */}
                        <hr></hr>
                        <p>${product.price}</p>
                    </div>
                )
            })
            setFilteredProducts(currentFilter)
        })
    }
    //useEffect(fetchAPIData, [])      //on page load, call fetchAPIData
   
   //const [searchString, setSearchString] = useState("")
   function handleChange(event){
    setSearchString(event.target.value)
   }
   

   
    return (
    <div>
        <p>The Search Bar!</p>

        <input type="text" value={searchString} onChange={handleChange}/>

        <div style={{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>

    </div>
    )
  }