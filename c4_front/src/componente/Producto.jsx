/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react"

const Producto = (props) => {
    // eslint-disable-next-line react/prop-types
    const { categoria,itme,} = props

    const addLi = (item, i) =>{
        if(item.categoria == categoria){
            return (
            <li key={i}>
                <button type="button" onClick={()=>{itme.push({
                    idPlato: item.idPlato,
                    platoName: item.platoName,
                    precio: item.precio,
                    categoria:item.categoria
                })}}
                className="flex flex-row justify-between gap-8 border-2 hover:border-black w-full"
                >
                    <div>
                        {item.platoName}
                    </div>
                    <div>
                        ${item.precio}
                    </div>
                </button>
            </li>)
        }
    }

    const getItem = async(setItemData) =>{
        const data = await axios.get("http://localhost:8080/menu")
        console.log(data)
        const newItem = data.data.map((item, i) => addLi(item, i)) 
        setItemData(newItem)
    } 
    const [itemData, setItemData] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [open, setOpen] = useState(false);
    return(
        <div className="w-full flex flex-col"> 
            <button type="button" onClick={()=>{getItem(setItemData);setOpen(!open)}} className="text-[20px] border-b-2 border-yellow-300 w-full text-left font-medium">
            {categoria}
            </button>  
            {
                open && 
                <div >
                    <ul className="flex flex-col pl-7 w-full gap-">
                        {itemData}
                    </ul>
                </div>
            }
        </div>  
    )
}
export default Producto