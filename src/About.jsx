import './App.css'


function About() {

  return (
	<div>
	  <style>{`
		@keyframes pop {
		  0% { transform: scale(0.8); opacity: 0; }
		  100% { transform: scale(1); opacity: 1; }
		}
		.animate-pop {
		  animation: pop 0.5s ease-out forwards;
		}
	  `}</style>

	  <div className="min-h-screen dark:bg-white-100 dark:text-brown relative">
		<header className="absolute top-0 left-0 z-10 w-full flex items-center justify-between h-16 px-4 backdrop-blur-sm bg-transparent text-brown-600">
		  <div className="flex items-center">
			<img src="Pictures/logo.jpeg" alt="" className="h-16 w-auto" />
		  </div>

		  <nav className="flex items-center space-x-6">
			<a href="/Home" rel="noopener noreferrer" className="font-bold">
			  Home
			</a>
			<a href="/About" rel="noopener noreferrer" className="font-bold">
			  Who We Are
			</a>
			<a href="/Contact" rel="noopener noreferrer" className="font-bold">
			  Contact
			</a>
		  </nav>
		</header>

		<main className="flex items-center justify-center h-screen">
		  <div>
			<h2 className="text-7xl font-extrabold bg-gradient-to-b from-brown to-white bg-clip-text animate-pop">
			  NEXTGEN ENERGY ESWATINI
			</h2>
			<p className="text-3xl text-black">CLEAN FUTURE, COMMUNITY EMPOWERMENT</p>
		  </div>
		</main>

		<section className="py-12">
		  <div className="container mx-auto">
			<h2 className="text-4xl font-bold text-center mb-10" style={{ color: "brown" }}>
			  Our Vision
			</h2>
			<div className="flex flex-wrap justify-center gap-8">
			  <div className="w-48 h-48 bg-[#A52A2A] text-white rounded-full flex items-center justify-center font-semibold text-xl shadow-lg hover:scale-105 transform transition duration-300">
				Innovation
			  </div>
			  <div className="w-48 h-48 bg-[#A52A2A] text-white rounded-full flex items-center justify-center font-semibold text-xl shadow-lg hover:scale-105 transform transition duration-300">
				Gender Inclusion
			  </div>
			  <div className="w-48 h-48 bg-[#A52A2A] text-white rounded-full flex items-center justify-center font-semibold text-xl shadow-lg hover:scale-105 transform transition duration-300">
				Clean Energy
			  </div>
			  <div className="w-48 h-48 bg-[#A52A2A] text-white rounded-full flex items-center justify-center font-semibold text-xl shadow-lg hover:scale-105 transform transition duration-300">
				Youth Empowerment
			  </div>
			</div>
		  </div>
		</section>

		<div className="grid gap-6 lg:grid-cols-3">
		  <div className="overflow-hidden rounded lg:flex lg:col-span-3">
			<h2> Who We Are</h2>
		  </div>
		  <div className="p-6 rounded lg:p-8 lg:py-12">
			<h3 className="font-medium">Energy Literacy</h3>
			<p className="">implementing of inclusive education and awareness on sustainable energy and environmental health</p>
		  </div>
		  <div className="p-6 rounded lg:p-8 lg:py-12 ">
			<h3 className="font-medium ">Innovation and Technology</h3>
			<p className="">Encourage development and and scaling of innovative clean solutions</p>
		  </div>
		  <div className="p-6 rounded lg:p-8 lg:py-12 dark">
			<h3 className="font-medium"> Gender Equity</h3>
			<p className="">Empowering Young women ,girls and marginalised groups to actively participate in energy leadership and entrepreneurship</p>
		  </div>
		</div>

		<div className="max-h-screen w-full py-12 px-4">
		  <h2 className="text-6xl font-bold lg:text-center text-brown"> Our Mission</h2>

		  <div className="flex flex-row gap-6 my-16">
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-white text-[brown] shadow-lg hover:shadow-xl transition duration-300">
			  <h2 className="text-4xl font-bold text-center">Leadership</h2>
			  <p className="text-2xl font-semibold">
				Fostering youth leadership
			  </p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-white text-[brown] shadow-lg hover:shadow-xl transition duration-400">
			  <h2 className="text-4xl font-bold text-center">Clean Energy</h2>
			  <p className="text-2xl font-semibold">
				Advancing access to clean energy
			  </p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-white text-[brown] shadow-lg hover:shadow-xl transition duration-300">
			  <h2 className="text-4xl font-bold text-center">Policy</h2>
			  <p className="text-2xl font-semibold">
				Shaping evidence based policies
			  </p>
			</div>
		  </div>

		</div>
	  </div>
	</div>
  );
}

export default About;