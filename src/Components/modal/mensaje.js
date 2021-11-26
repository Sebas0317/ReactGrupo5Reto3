import Ok from "../assets/ok.png"
import Error from "../assets/incorrecto.png"

export default function Mensaje ({isVisible, children, tipo}){
	return (
		<div className="modalAdminFooter">
			{children}
			<img src={tipo == true ? Ok : Error }/>
		</div>
	)
}
