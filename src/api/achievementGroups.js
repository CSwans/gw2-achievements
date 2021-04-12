import { baseUrl } from "."

const fetchAchievementGroups = async () => {   
    try {
        const res = await fetch(`${baseUrl}/achievements/groups`)
        if (res.ok) {
            const data = await res.json()
            return data
        }
    } catch(e) {
        throw new Error()
    }
}

export default fetchAchievementGroups
