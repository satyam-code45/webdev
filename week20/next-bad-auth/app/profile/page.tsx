import axios from "axios";

export default async function Profile(){
    const res = await axios.get("http://localhost:3000/api/profile",{
        headers:{
            authorization: localStorage.getItem("token")
        }
    })
    const profiePicture = res.data.avatarUrl
    
    return(
        <div>
            {profiePicture}
        </div>
    )
}