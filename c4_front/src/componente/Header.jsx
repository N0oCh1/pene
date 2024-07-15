
const TopBar = (props) =>{
    // eslint-disable-next-line react/prop-types
    const { tittle } = props
    return(
        <div className = "flex flex-row w-full justify-center items-center h-32 bg-[#ff0033] ">
            <h1 className="text-center font-semibold text-3xl text-white">
                {tittle}
            </h1>
        </div>
    )
}
export default TopBar