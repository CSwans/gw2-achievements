import React from "react"
import useStore from "../store"

const Component = () => {
    const savedKeys = useStore(state => state.keys)
    const deleteKey = useStore(state => state.deleteKey)
    const refreshKey = useStore(state => state.refreshKey)

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
                {savedKeys.map(key => 
                    <tr key={key.name}>
                        <td>{key.name}</td>
                        <td>{key.value}</td>
                        <td>
                            <button onClick={() => deleteKey(key.name)}>
                                Delete
                            </button>
                            <button onClick={() => refreshKey(key.name)}>
                                Refresh
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Component
