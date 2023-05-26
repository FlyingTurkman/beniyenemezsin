import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export default function Button( {loading, children, className, onClick, disabled = false}:{loading?:boolean, children?:React.ReactNode, className?:string, onClick?:any, disabled?: boolean}){
    if(!loading){
        return(
            <button className={className} onClick={onClick} disabled={disabled} aria-label='button'>
                {children}
            </button>
        )
    }else{
        return(
            <div className={className}>
                <AiOutlineLoading3Quarters className='animate-spin text-2xl'/>
            </div>
        )
    }

}


Button.Icon=function({...props}){
    return(
        <span {...props}>
            {props.children}
        </span>
    )
}