import Notes from './Note';
import { Input, Send } from './Input';
export function Chat(){
    return(
        <div>
            <div className='Chat'>
                <Notes/>
            </div>
            <Input/>
        </div>
    )
}