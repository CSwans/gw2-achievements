import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Component = ({ id, urlPrefix, dataFetch }) => {
    const [item, setItem] = useState([])
    useEffect(() => {
        const set = async () => {
            setItem(await dataFetch({ id }))
        }
        set()
    }, [dataFetch, id])

    return (
        <NavLink
            className="py-4 px-3"
            to={`${urlPrefix}/${id}`}
            activeClassName="bg-green-400"
        >
            {item?.name ?? "Unknown"}
        </NavLink>
    )
}

export default Component
