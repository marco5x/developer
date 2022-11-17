import React from "react";
import CV from "../assets/CV-MarcosCruz-FullStackDevelopment.pdf"
import logM from "../assets/img/logM.png"

export const Nav = () => {
	return (
		<>
			<div className=" max-w-5xl mx-auto py-4 px-2 bg-gray-100 sticky top-0 z-20 shadow-sm sm:shadow-none">
				<div className="flex justify-between flex-col sm:flex-row text-center">
					<div>
						<img src={logM} alt="MarcosDev" width={80} />
						{/* <span className=" text-4xl font-bold ">
							Marcos<span className="text-blue-500">Dev</span>
						</span> */}
					</div>
					<div className=" mt-2 sm:mt-0">
						<ul className="flex justify-center gap-10 ">
							<li>
								<a
									href="#post-1"
									className="text-xl font-bold duration-300 hover:text-blue-500 hover:border-b-4 border-blue-500 "
								>
									Proyectos
								</a>
							</li>

							<li>
								<a
									href="#post-2"
									className="text-xl font-bold duration-300 hover:text-blue-500 hover:border-b-4 border-blue-500"
								>
									Contacto
								</a>
							</li>
							<li>
								<a
									href={CV}
									className="text-xl font-bold duration-300 hover:text-blue-500 hover:border-b-4 border-blue-500"
								>
									Descargar CV
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};