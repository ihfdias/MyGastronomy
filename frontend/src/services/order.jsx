import { useState } from "react"

export default function orderServices() {
    const [orderLoading, setOrderLOading] = useState(false)

    const url = 'http://localhost:3000/orders'

    const getUserOrders = (userId) => {
        setOrderLOading(true)

        fetch(`${url}/userorders/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },            
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setOrderLOading(false)
            })

    }
 

    return { getUserOrders, orderLoading }
}