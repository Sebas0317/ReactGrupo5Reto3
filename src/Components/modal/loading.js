import Load from "../assets/loading.gif"
export default function Loading ({isVisible}){
	return (
		<div style={{backgroundColor:"rgba(0, 0, 0, 0.3)", zIndex:"500", position:"fixed", display:isVisible ? "flex" : "none", alignItems:"center", justifyContent:"center", top:0, left:0, right:0, bottom:0}}>
	    	<div style={{display:"flex", justifyContent:"center", borderRadius:"3px", backgroundColor:"#fff", width:"6%", height:"9vh", padding:"10px"}}>
	          <img src={Load}/>
	    	</div>
	    </div>
	)
}