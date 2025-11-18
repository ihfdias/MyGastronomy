import { useState } from "react"

export default function authServices() {
    const [authLoading, setAuthLOading] = useState(false)

    const url = 'http://localhost:3000/auth'

    const login = (FormData) => {
        setAuthLOading(true)

        fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(FormData)
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.success && result.body.token) {
                    localStorage.setItem('auth', JSON.stringify({token: result.body.token, user:result.body.user }))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setAuthLOading(false)
            })

    }

    const logout = () => {
        localStorage.removeItem('auth')
    }

    const signup = (FormData) => {
        setAuthLOading(true)

        fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(FormData)
        })
            .then((response) => response.json())
            .then((result) => {
               if(result.success && result.body.token) {
                    localStorage.setItem('auth', JSON.stringify({token: result.body.token, user:result.body.user }))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setAuthLOading(false)
            })

    }

    return { signup, login, logout, authLoading }
}