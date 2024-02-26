import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     // https://api.github.com/users/nasreenustad
    //     fetch("https://api.github.com/users/nasreenustad").then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Profile: {data.login}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/nasreenustad")
    return response.json();
}
