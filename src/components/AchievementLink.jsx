import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import fetchAchievements from "../api/achievements"

const Component = ({ achievementId }) => {
    const [achievement, setAchievement] = useState()
    useEffect(async () => {
        const [tmp] = await fetchAchievements({ ids: [achievementId] })
        setAchievement(tmp)
    }, [achievementId])

    return (
        <Link to={`/achievements/${achievementId}`}>
            {achievement?.name ?? "Unknown"}
        </Link>
    )
}

export default Component
