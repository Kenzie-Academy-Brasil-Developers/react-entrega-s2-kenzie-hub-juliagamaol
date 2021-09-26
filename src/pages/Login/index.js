import FormLogin from "../../components/FormLogin"
export const Login = ({authenticated,setAuthenticated}) =>{
    return(
        <div>
            <FormLogin authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        </div>
    )
}