import Producto from "./componente/Producto";
import TopBar from "./componente/topBar";

export default function Articulo() {
    return(
        <div>
            <TopBar tittle= "Ingrese el Articulo"/>
            <div>
                <Producto categoria = "Pizza"/>
                <Producto categoria = "Pasta"/>
                <Producto categoria = "Alcohol"/>
                <Producto categoria = "Topping"/>
            </div>
        </div>
    )
}