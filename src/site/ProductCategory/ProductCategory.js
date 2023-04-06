import React, {useEffect, useState} from "react";
import style from "./ProductCategory.css"
import ProductList from "../../components/ProductList/ProductList";

function ProductCategory(props) {
   
    const[categoryTitle, setCategoryTitle] = useState("")
    const[devicesData, setDevicesData] = useState([])
    const[filteredDataArray, setFilteredDataArray] = useState([])
    

    useEffect(() => {
        setCategoryTitle(props.title)
        setDevicesData(props.devicesData)
    }, [])

    useEffect(() => {
        console.log(props.title)
        const filteredArray = devicesData.filter(element => element.category_pl === categoryTitle)
        setFilteredDataArray(filteredArray)
        console.log(filteredArray)
    }, [devicesData])
    
    return(
        <>
        <h1>{props.title}</h1>

        <ProductList filteredCategoryDevices={filteredDataArray} listLinkTo="product"/>
        </>
    )
}

export default ProductCategory