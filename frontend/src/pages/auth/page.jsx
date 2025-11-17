import { useEffect, useState } from "react"
import { TextField, Button } from "@mui/material"
import Style from "./page.module.css"
import authServices from "../../services/auth"
import { useNavigate } from "react-router-dom"

export default function Auth() {
    const [formType, setFormType] = useState('login')
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { login, signup, authLoading } = authServices()

    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() => {
        if (authData) {
            navigate('/profile');
        }
    }, [authData, navigate]);

    const handleChangeFormType = () => {
        setFormData(null)
        if (formType === 'login') {
            setFormType('signup')
        } else {
            setFormType('login')
        }
    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        switch (formType) {
            case 'login':
                login(formData)
                break

            case 'signup':
                if (formData.password !== formData.confirmPassword) {
                    console.log("Password do not match")
                    return
                }
                signup(formData)
                break
        }
    }

    if (authLoading) {
        return (<h1>Loading...</h1>)
    }

    return (
        <div className={Style.authPageContainer}>
            {formType === 'login' ? (
                <>
                    <h1>Login</h1>
                    <button onClick={handleChangeFormType}>Don't you have an account? Click here</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                        />
                        <button type="submit">Login</button>
                    </form>
                </>
            ) : null}

            {formType === 'signup' ? (
                <>
                    <h1>Signup</h1>
                    <button onClick={handleChangeFormType}>Already have an account? Click here</button>
                    <form onSubmit={handleSubmitForm}>
                        <TextField
                            required
                            label="Fullname"
                            type="fullname"
                            name="fullname"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleFormDataChange}
                        />
                        <TextField
                            required
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            onChange={handleFormDataChange}
                        />
                        <button type="submit">Signup</button>
                    </form>
                </>
            ) : null}
        </div>
    )
}