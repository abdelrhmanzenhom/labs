

function Movie(props){

    return (
        <div style={{
       display:"flex",
      
       flexDirection:"column",
       width:"300px",
       backgroundColor:"black",
       borderRadius:"10px",
       color:"white",
       gap:"10px",
       padding:"10px"
        }}>
        
        <img src={props.image} alt="" style={{
          width: "100%",
          borderRadius: "10px",
          height: "350px",
          objectFit:"cover",
        }} />
        <div>{props.title}</div>
        <div>{props.year}</div>
        <div>{props.rating}</div>
        </div>
    )
}
export default Movie;