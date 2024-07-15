import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "./componente/Header";
import './Style/mesa.css'

export default function Mesa() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const {id} = state;

    const handleOrden = () =>{
        navigate(`/Mesa/${id}/Orden`, {state:{id_mesa: id}})
    }
    const handleFactura = () => {
        navigate (`/Mesa/${id}/Estado/`,{state:{id_pedido: id}})
    }
    return(
        <div className="BGmesa flex flex-col h-full" >
            <TopBar tittle = "Accion de la mesa"/>
            <div className="flex flex-col h-full w-full items-center justify-center gap-24">
                <div className="">
                    <button className="border-4 border-yellow-900 rounded-lg bg-white hover:bg-yellow-500 hover:text-white text-[40px] font-semibold px-7" onClick={()=>handleOrden()}>
                        Hacer Pedido
                    </button>
                </div>
                <div className="">
                    <button className="border-4 border-orange-600 rounded-lg bg-white hover:bg-orange-600 hover:text-white text-[40px] font-semibold px-7" onClick={()=>handleFactura()}>
                        Cambiar Estado
                    </button>
                </div>
            </div>
        </div>
    )
}