import React from "react"
import useStore from "../store"

const Component = () => {
    const savedKeys = useStore(state => state.keys)
    const deleteKey = useStore(state => state.deleteKey)

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Key</td>
                    <td></td> 
                </tr>
            </thead>
            <tbody>
                {savedKeys.map(key => <tr>
                        <td>{key.name}</td>
                        <td>{key.value}</td>
                        <td>
                            <button onClick={() => deleteKey(key.name)}>
                                Delete
                            </button>
                        </td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default Component
