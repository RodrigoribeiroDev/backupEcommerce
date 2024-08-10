import '../Style/InputSearch.css'
import { LuFolderSearch } from "react-icons/lu";

const input = () => {
  return (
    <div className='containerInput'>
       <span>
        <input className='IptSearch' 
        type='text' 
        placeholder='Digite seu produto' />
       </span>
       <span className='iconSpan'><LuFolderSearch /></span>
        </div>
  )
}

export default input
//<LuFolderSearch />
