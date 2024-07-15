/* eslint-disable no-unused-vars */
import { useState } from "react";
import TopBar from "./componente/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Producto from "./componente/Producto";
import axios from "axios";
export default function Orden(){

    // eslint-disable-next-line no-unused-vars
    const navigator = useNavigate();
    const { state } = useLocation();
    const { id_mesa } = state;
    const [itme,setItme] = useState([]);
    const [post,setPost] = useState([]);
    const [open, setOpen] = useState(false);
    console.log(itme)

    const handleSubmit = async(e) =>{
        itme.map(data=>{
            post.push({
                id_plato: data.idPlato,
                productName: data.platoName,
                productoCategoria: data.categoria,
                productPrecio: data.precio
            })
        })
        e.preventDefault()
        
        axios.post("http://localhost:8080/pedido", {
            mesa: id_mesa,
            personas: e.target.persona.value,
            estado:"PROCESANDO",
            producto: post
        }).then(function (res){
            console.log(res)
        }).catch (function (error){
            console.log(error)
        })
        navigator("/")
    }
    return(
        <div>
            <TopBar tittle = "Hacer Orden"/>
            <div>
                <form className="flex flex-col items-center justify-center" onSubmit={(e) => handleSubmit(e)} method="POST">
                    <div className="w-[50%]">
                        <label htmlFor="" className="flex flex-col">
                            Mesa
                            <input type="text" name="mesa" disabled value={id_mesa} className="border-2 border-black"/>
                        </label>
                        <label className="flex flex-col w-284 ">
                            Personas
                            <input type="number" name="persona" className="border-2 border-black"/>
                        </label>
                    </div>
                    <div className="w-full px-11">
                        <h1 className="text-[30px] font-semibold ">Articulos</h1>
                        <button type="button" onClick={()=>{setOpen(!open)}} className="text-[30px] bg-yellow-700 border-4 border-white text-white rounded-xl px-28 hover:bg-white hover:border-yellow-700 hover:text-black" >
                            + Add Product 
                        </button>
                        {
                            open &&
                            <div className="z-10 fixed w-full h-full bg-white top-0 f">
                                <TopBar tittle = "Elige el Producto"/>
                                <div className="flex flex-col w-[400px]" >
                                    <button onClick={()=>{setOpen(!open)}} className=" bg-yellow-700 border-4 border-white text-white rounded-xl px-28 hover:bg-white hover:border-yellow-700 hover:text-black" >
                                        close
                                    </button>
                                    <div className="flex flex-col gap-4 w-full">
                                        <Producto categoria = "Pizza" itme={itme}/>
                                        <Producto categoria = "Pasta" itme={itme}/>
                                        <Producto categoria = "Alcohol" itme={itme}/>
                                        <Producto categoria = "Topping" itme={itme}/>
                                    </div>
                                </div>
                            </div>    
                        }
                        <table className="w-full my-[100px]">
                                <tr className="bg-yellow-400">
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                                {itme.map((data,i) => {
                                    
                                    return(
                                        <tr key={i} className="bg-yellow-200">
                                            <th>{data.platoName}</th>
                                            <th>{data.precio}</th>
                                            <th>{1}</th>
                                            <th>{data.precio}</th>
                                        </tr>
                                    )
                                })}
                        </table>
                    </div>
                    <button type="submit" className="text-[16px] bg-yellow-700 border-2 border-white text-white rounded-xl px-28 hover:bg-white hover:border-yellow-700 hover:text-black" >
                                Hacer Orden
                    </button>
                </form>
            </div>
        </div>
    )
}
