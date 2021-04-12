import { baseUrl } from "."

const fetchAchievements = async ({ accountKey }) => {
    try {
        const res = await fetch(`${baseUrl}/account/achievements?access_token=${accountKey}`)
        if (res.ok) {
            const data = await res.json()
            console.log({ data })
            return data
        }
    } catch (e) {
        throw new Error()
    }
}

export default fetchAchievements
