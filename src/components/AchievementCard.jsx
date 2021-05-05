import React, { useEffect, useState } from "react"
import fetchAchievements from "../api/achievements"
import useStore from "../store"

const Component = ({ achievementId }) => {
    const keys = useStore((store) => store.keys)
    const [achievement, setAchievement] = useState()
    useEffect(() => {
        const set = async () => {
            const [tmp] = await fetchAchievements({ ids: [achievementId] })
            setAchievement(tmp)
        }
        set()
    }, [achievementId])

    return (
        <div className="border-2 border-gray-800 rounded-md bg-blue-500">
            <h1 className="">{achievement?.name}</h1>
            <p className="">{achievement?.description}</p>
            <div className="">
                {keys.map((key) =>
                    key.achievements.findIndex(
                        (a) => a.id === parseInt(achievementId) && a.done
                    ) !== -1 ? (
                        <div className="">{key.name}</div>
                    ) : (
                        <div className="">{key.name}</div>
                    )
                )}
            </div>
        </div>
    )
}

export default Component
