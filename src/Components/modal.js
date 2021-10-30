import {useEffect} from "react";
import "./styles/modal.css";

export default function Modal ({isVisible, setVisible, children}){

	useEffect(()=>{
		document.querySelector(".fondoModal").addEventListener("click", ()=>{
			document.querySelector(".modalContainer").style.top="-100%";
			setTimeout(()=>{
				document.querySelector(".modalContainer").style.display="none";
				setVisible(false);
			}, 300)
		})

		document.querySelector(".closeModal").addEventListener("click", ()=>{
			document.querySelector(".modalContainer").style.top="-100%";
			setTimeout(()=>{
				document.querySelector(".modalContainer").style.display="none";
				setVisible(false);
			}, 300)
		});

		if (isVisible === true){
			document.querySelector(".modalContainer").style.display="flex";
			setTimeout(()=>{
				document.querySelector(".modalContainer").style.top="0px";
			}, 10)
		}
	})
	return (
		<div className="modalContainer">
			<div className="fondoModal"></div>
			<div className="bodyModal">
				{children}
			</div>
		</div>
		)
}