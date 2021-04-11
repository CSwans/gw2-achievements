import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import fetchAchievements from "../api/achievements"

const Component = () => {
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
        </>
    )
}

export default Component
