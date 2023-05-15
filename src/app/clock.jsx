'use client'

import { useEffect, useState } from "react"

export const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])   
    return <div>{time.toLocaleTimeString()}</div>
    }