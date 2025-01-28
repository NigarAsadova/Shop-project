const Login = () => {
    return ( 
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{backgroundColor:"black", textAlign:"center", width:"600px", marginTop:"200px", color:"white", padding:"20px"}}>
                <h1>Login</h1>
                <form action="">
                    <div  style={{display:"flex", justifyContent:"center", gap:"20px"}}>
                    <input type="text" placeholder="Enter Username" style={{height: "30px"}} />   
                    <input type="password" placeholder="Enter Password" />                       
                    </div>
                    <button type="submit" style={{marginTop:"50px", height:"40px", width:"140px"}}>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;