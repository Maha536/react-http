import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDiplsay] = useState(true)
    return (
        <div>
            <button onClick={()=> setDiplsay(!display)}>Toggle Display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
