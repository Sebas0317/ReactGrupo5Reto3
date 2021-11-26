import Loading from "../assets/loading.gif"
export default function Loading1 ({isVisible}){
	return (
		<div style={{display:isVisible ? "flex" : "none", width:"100%", height:"15vh", alignItems:"center", justifyContent:"center"}}>
			<img style={{width:"4%", height:"auto"}} src={Loading}/>
		</div>
	)
}