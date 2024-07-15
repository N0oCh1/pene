
import Mesas from './componente/Mesas.jsx'
import Header from './componente/Header.jsx'

export default function Pedidos(){
    return(
        <div className='BgPedido h-full w-full'>
            <Header tittle = "Elige la Mesa"/>
            <div className="flex flex-col ">
                <h1 className=' py-8 text-[30px] font-semibold w-fulltext-center'>
                    Elige la Mesa para comenzar con el pedido
                </h1>
                <div className = "mt-11 flex flex-col gap-5 w-full h-full items-center justify-center">
                    <div className='flex flex-col gap-3 w-full px-9'>
                        <Mesas tittle="Mesa" id={1}/>
                        <Mesas tittle="Mesa" id={2}/>
                        <Mesas tittle="Mesa" id={3}/>
                        <Mesas tittle="Mesa" id={4}/>
                        <Mesas tittle="Mesa" id={5}/>
                        <Mesas tittle="Mesa" id={6}/>
                        <Mesas tittle="Mesa" id={7}/>
                        <Mesas tittle="Mesa" id={8}/>
                    </div>

                </div>
            </div>
        </div>
    )
}