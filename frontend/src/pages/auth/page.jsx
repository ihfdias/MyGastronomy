import { useState } from "react"
import { TextField, Button } from "@mui/material"
import StyleSheet from "./auth.module.css"

export default function Auth() {
    const [formType, setFormType] = useState('login')

    const handleChangeFormType = () => {
        if(formType === 'login') {
            setFormType('signup')
        } else {
            setFormType('login')
        }
    }
    

    if(formType === 'login') {
        return (
            <div className={StyleSheet.authPageContainer}>
                <h1>Login</h1>
                <button onClick={handleChangeFormType}>Don't you have an account? Click here</button>
                <form>
                    <TextField 
                    required
                    label="Email"
                    type="email"
                    name="email"
                    />
                    <TextField 
                    required
                    label="Password"
                    type="password"
                    name="password"
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>

    )
}

    if(formType === 'signup') {
        return (
            <>
                <h1>Signup</h1>
                <button onClick={handleChangeFormType}>Already have an account? Click here</button>
            </>
    )
    }
}