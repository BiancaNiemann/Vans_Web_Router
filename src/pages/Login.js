import React, {useEffect} from "react"
import { useNavigate, useLocation, Form, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "./api"

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    try{
        const data = await loginUser({email, password})
        localStorage.setItem("loggedin", true)
        return data
    } catch(err){
        return {
            error: err.message
        }
    }
}

export default function Login() {
    const data = useActionData()
    const navigation = useNavigation()
    const location = useLocation()
    const navigate = useNavigate()
    
    const from = location.state?.from || "/host"

    useEffect(() => {
        if (data?.token) {
            navigate(from, {replace:true})
        }
    }, [data])
    

    return (
        <div className="login-container">
            { location.state?.message && 
                <h3 className="login-error">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {data?.error && <h3 className="login-error">{data.error}</h3>}
            <Form 
                action="/login"
                method="post"
                className="login-form"
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button 
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting" ? "Logging in" : "Log in"}
                </button>
            </Form>
        </div>
    )

}