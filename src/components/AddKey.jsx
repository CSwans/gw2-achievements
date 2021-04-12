import React, { useState } from "react"
import useStore from "../store"

const Component = () => {
    const saveNewKey = useStore(state => state.saveNewKey)

    const [keyName, setKeyName] = useState("")
    const onKeyNameChange = (e) => {
        setKeyName(e.target.value)
    }
    const [keyValue, setKeyValue] = useState("")
    const onKeyValueChange = (e) => {
        setKeyValue(e.target.value)
    }

    const onKeySave = () => {
        saveNewKey({ name: keyName, value: keyValue })
        setKeyName("")
        setKeyValue("")
    }

    return (
        <div>
            <input type="text" placeholder="Key Name" value={keyName} onChange={onKeyNameChange}/>
            <input type="text" placeholder="API Key" value={keyValue} onChange={onKeyValueChange}/>
            <button onClick={onKeySave}>Set key</button>
        </div>
    )
}

export default Component
