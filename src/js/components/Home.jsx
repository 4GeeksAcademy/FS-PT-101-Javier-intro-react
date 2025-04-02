import React from "react";
import ComponentePrueba from './componentePrueba.jsx'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx' // importamos export default sin {}
import { MyCard } from './myCard.jsx' // importamos export const bla bla bla con {}
import { Simple } from "./simple.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ComponenteConJS } from "./componenteConJs.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
		<Simple/>

		<ComponenteConJS/>

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<div className="d-flex justify-content-space-between">
				<ComponentePrueba />
				<ComponentePrueba />

			</div>


			<section className="container">
				<div className="row">
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
					
				</div>
			</section>


			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-4">
					<ComponentePrueba />

				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<ComponentePrueba />

				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<ComponentePrueba />

				</div>
			</div>

			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Footer />
		</div>
	);
};

export default Home;