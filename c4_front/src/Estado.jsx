/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import TopBar from "./componente/Header";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
export default function Estado() {
    const navigate = useNavigate();
    const locatio = useLocation();
    const [data, setData] = useState({
        idPedido:0,
        mesa:0,
        estado:"",
        producto:[]
    });

    const getPedido = useCallback(async() => {
        await axios.get(`http://localhost:8080/pedido`)
        .then((res)=>{res.data.map(data=>{
            console.log(data)
            console.log(locatio.state)
            if(data.mesa == locatio.state.id_pedido){
                setData(data)
                
            }
        })}).catch((error)=>{console.log(error)})
    })
    const handleDelete = () =>{
        deletePedido("/pedidos")
    }

    const handleUpdate = useCallback( async(e) =>{
        e.preventDefault();
        console.log(e.target.estado.value)
        await axios.put(`http://localhost:8080/actualizar/${data.idPedido}`,{
            mesa: data.mesa,
            estado: e.target.estado.value,
            producto: data.producto
        })
        
    })

    const deletePedido = useCallback(async() => {
        await axios.delete(`http://localhost:8080/eliminar/${data.idPedido}`).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
    })
    console.log(data)
    useEffect(()=>{
        getPedido()
    },[Estado])
    
    return(
        <div className="w-full h-full flex flex-col items-center ">
            <TopBar tittle = "Cambiar estado del pedido"/>
            <div className="border-2 border-black rounded-xl flex flex-col gap-6 py-5">

                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full flex flex-row">
                        <span className="text-[20px] w-full font-semibold bg-orange-400 text-center">Pedido: {data.idPedido}/Mesa: {data.mesa}</span>
                    </div>
                    <ul className="flex flex-col px-9 gap-3 w-full ">
                        {data.producto.map((data, index) => {
                            return(
                                <li key={index} className="text-[15px] font-medium border-b-2 border-zinc-400">{data.productName}</li>
                            )
                        })}
                    </ul>
                </div>


                <form className="flex flex-col items-center gap-5" onSubmit={(e)=>{handleUpdate(e);navigate("/")}}>
                    <label className="flex flex-col">
                        <h1 className="text-black font-semibold text-[20px]">
                            Selecciona el estado del pedido
                        </h1>
                        <select name="estado" id="esatado" className="border-2 border-black">
                            <option value={"PROCESANDO"}>PROCESANDO</option>
                            <option value={"COCINANDO"}>COCINANDO</option>
                            <option value={"TERMINADO"}>TERMINADO</option>
                        </select>
                    </label>
                    <button type="submit" className="border-2 border-black px-3 rounded-2xl hover:bg-black hover:text-white">
                        Actualizar
                    </button>
                </form>

            </div>
            <div>
                <button onClick={()=>{handleDelete(); navigate("/")}}>
                        eleiminar
                </button>
            </div>
        </div>
    )
}