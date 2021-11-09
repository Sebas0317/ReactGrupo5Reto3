import React, {useEffect} from "react";
import "../styles/modal.css";

export default function Modal ({isVisible, setVisible, children}){

	useEffect(()=>{
		document.querySelector(".fondoModal").addEventListener("click", ()=>{
			document.querySelector(".modalContainer").style.top="-100%";
			setTimeout(()=>{
				setVisible(false);
			}, 300)
		})
		let closeModal = document.querySelector(".closeModal");
		if (closeModal) {
			closeModal.addEventListener("click", ()=>{
				document.querySelector(".modalContainer").style.top="-100%";
				setTimeout(()=>{
					setVisible(false);
				}, 300)
			});

		}
			
		if (isVisible === true){
			document.querySelector(".modalContainer").style.top="0px";
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