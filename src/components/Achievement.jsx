import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import fetchAchievements from "../api/achievements"
import useStore from "../store"

const Component = () => {
    const keys = useStore(store => store.keys)
    const { achievementId } = useParams()
    const [achievement, setAchievement] = useState()
    useEffect(() => {
        const set = async () => {
            const [tmp] = await fetchAchievements({ ids: [achievementId] })
            setAchievement(tmp)
        }
        set()
    }, [achievementId])

    return (
        <>
            <h1>{achievement?.name}</h1>
            <p>{achievement?.description}</p>
            <p>{achievement?.requirement}</p>
            <table>
                <thead>
                    <tr>
                        {keys.map(key => 
                                <td>{key.name}</td>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {keys.map(key => 
                            <td>
                                {key.achievements.findIndex(a =>  ((a.id === parseInt(achievementId)) && a.done)) !== -1 ? "✓" : "✗"}
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Component
