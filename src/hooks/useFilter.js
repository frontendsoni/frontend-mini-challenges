import { useState } from "react"

export const useFilter = (dataList, callback) => {
    const [query, setQuery] = useState('')

    const filteredData = dataList.filter((data) => 
        callback(data).toLowerCase().includes(query)
    )
    return [filteredData, setQuery]
}