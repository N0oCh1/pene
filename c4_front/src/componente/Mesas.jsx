/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { useNavigate } from "react-router-dom";

const MesaCard = (props) => {
    const {tittle, id} = props;
    const navigator = useNavigate();
    const [idPedido, setIdPedido] = useState();
    const [estado, setEstado] = useState();
    const getPedido = useCallback(async() =>{
        await axios.get("http://localhost:8080/pedido").then((res)=>res.data.map((data)=>{
            if(data.mesa == id)
                {
                    setIdPedido(data.idPedido)
                    setEstado(data.estado)
                }
            }
        ))
    })
    useEffect(()=>{
        getPedido();
    })
    return(
        <button 
        className="flex flex-col w-full border-2 rounded-md border-black bg-white"
        onClick={()=>{
            navigator(`/Mesa/${id}`, {state:{id: id}});
        }}
        >
            <div className=" flex flex-col text-left font-semibold text-2xl w-full bg-orange-200">
                {tittle} {id}
            </div>
            <div className="flex flex-row w-full h-full text-[30px] text-left gap-4">
                <span className="font-semibold">Pedido</span>
                <span className="font-bold">{idPedido}</span>
                <span className="font-bold">{estado}</span>
            </div>
        </button>
    )
}
export default MesaCard