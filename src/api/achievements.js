import { baseUrl } from "."

const fetchAchievements = async ({ ids = [] }) => {
    try {
        const res = await fetch(`${baseUrl}/achievements?ids=${ids.join(",")}`)
        if (res.ok) {
            const data = await res.json()
            return data
        }
    } catch (e) {
        throw new Error()
    }
}

export default fetchAchievements
