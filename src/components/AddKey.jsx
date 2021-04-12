import React, { useState } from "react"
import useStore from "../store"

const Component = () => {
    const savedKeys = useStore(state => state.keys)
    const saveNewKey = useStore(state => state.saveNewKey)

    const [key, setKey] = useState("")
    const onKeyChange = (e) => {
        setKey(e.target.value)
    }

    const onKeySave = () => {
        saveNewKey(key)
        setKey("")
    }

    return (
        <div>
            <input type="text" placeholder="API Key" value={key} onChange={onKeyChange}/>
            <button onClick={onKeySave}>Set key</button>
            <ul>
                {savedKeys.map(key => <li>{key}</li>)}
            </ul>
        </div>
    )
}

export default Component
