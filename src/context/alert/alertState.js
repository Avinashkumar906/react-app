import React, { useState } from 'react'
import alertContext from './alertContext'

function AlertState(props) {
    const [alert, setAlert] = useState({ message: '' });     
    const updateAlert = (data) => {
        setAlert({type:data?.type,message:data?.message})
        setTimeout(()=>setAlert({message:''}),3000)
    }; 
    return (
        <alertContext.Provider value={{alert,updateAlert}}>
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState