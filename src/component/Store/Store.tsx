import { Todolist } from "../../model/todolist2"

interface OwnProps{
    info:Todolist
}
const Store:React.FC<OwnProps>=({info})=>{
    return(
        <div>
            {info.name}
            {info.category}
            {info.done}
        </div>
    )
}

export default Store