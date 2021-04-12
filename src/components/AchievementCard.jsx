import React, { useEffect, useState } from "react"
import fetchAchievements from "../api/achievements"
import useStore from "../store"

const Component = ({ achievementId }) => {
    const keys = useStore(store => store.keys)
    const [achievement, setAchievement] = useState()
    useEffect(() => {
        const set = async () => {
            const [tmp] = await fetchAchievements({ ids: [achievementId] })
            setAchievement(tmp)
        }
        set()
    }, [achievementId])

    return (
        <div className="max-w-lg w-full rounded-lg shadow-lg p-4">
            <h1 className="font-semibold text-lg text-grey-700 tracking-wide">{achievement?.name}</h1>
            <p className="text-grey-500">{achievement?.description}</p>
            <div className="flex">
                {keys.map(key => 
                    key.achievements.findIndex(a =>  ((a.id === parseInt(achievementId)) && a.done)) !== -1 ? <div className="flex-initial bg-green-600 rounded-lg p-1">{key.name}</div> : <div className="flex-initial bg-red-600 rounded-lg p-1">{key.name}</div>
                )}
            </div>
        </div>
    )
}

export default Component
