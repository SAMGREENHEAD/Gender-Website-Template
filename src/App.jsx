import './App.css'


function App() {
  return (
    <>
  <style>{`
        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.5s ease-out forwards;
        }
      `}
  </style>

      <div className="min-h-screen dark:bg-white-100 dark:text-brown relative">
       <header className="absolute top-0 left-0 z-10 w-full flex items-center justify-between h-16 px-4 backdrop-blur-sm bg-transparent text-brown-600">

      <div className="flex items-center">
        <img
          src="pictures/logo.jpeg"
          alt=" "
        />
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
          <h2 className="text-7xl font-extrabold bg-gradient-to-b from-brown to-white bg-clip-text animate-pop">
            NEXTGEN ENERGY ESWATINI </h2>

      <p className ="text-3xl text-black">CLEAN FUTURE, COMMUNITY EMPOWERMENT</p>
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
		</div>

		<div className="grid gap-6 lg:grid-cols-3">
						<div className="overflow-hidden rounded lg:flex lg:col-span-3">
							<h2 className="   "> Who We Are</h2>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12">
							<h3 className="font-medium">Energy Literacy</h3>
							<p className="">Implementing of inclusive education and awareness on sustainable energy and environmental health</p>
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

          <div className="grid gap-6 lg:grid-cols-3">
						<div className="overflow-hidden rounded lg:flex lg:col-span-3">
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12">
							<h3 className="font-medium">Advocacy</h3>
							<p className="">Engage in policy advocacy to ensure LPG and other fossil fuel exports align with environmental standards</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12 ">
							<h3 className="font-medium ">Raising Awareness</h3>
							<p className=""> Educating the public about the negative effects of traditional fuels and prpmote sustainable alternatives through campaings, grassroot engagements and school programs</p>
						</div>
						<div className="p-6 rounded lg:p-8 lg:py-12">
							<h3 className="font-medium">Youth Engagement </h3>
							<p className="">Equiping youth with skills and opportunities through structured mentorship, leadership training, job shadowing and participation in advocacy initiatives</p>
						</div>
					</div>
                
				<div className="max-h-screen w-full py-12 px-4">
					<h2 className="text-6xl font-bold lg:text-center text-brown"> Our Mission</h2>
				
					<div className="flex flex-row gap-6 my-16">
					<div className="flex flex-col p-8 space-y-4 rounded-md bg-white text-[brown] shadow-lg hover:shadow-xl transition duration-300">
						<h2 className="text-4xl font-bold text-center">Leadership</h2>
						<p className="text-2xl ">
						Fostering youth leadership
						</p>
					</div>
					<div className="flex flex-col p-8 space-y-4 rounded-md bg-white text-[brown] shadow-lg hover:shadow-xl transition duration-300">
						<h2 className="text-4xl font-bold text-center">Clean Energy</h2>
						<p className="text-2xl ">
						Advancing access to clean energy
						</p>
					</div>
					<div className="flex flex-col p-8 space-y-4 rounded-md bg-white text-[brown] shadow-lg hover:shadow-xl transition duration-300">
						<h2 className="text-4xl font-bold text-center">Policy</h2>
						<p className="text-2xl ">
						Shaping evidence based policies
						</p>
					</div>
					</div>
				
				</div>
	
		<section style={{ color: "brown" }}>
  <div className="container flex flex-col justify-between items-center p-6 mx-auto lg:p-8 ">
    		<h2 className=" text-2xl font-bold text-center  text- #A52A2A"> Connect With Us</h2>
    
    {/* Contact Details */}
    <div className="text-center mb-4 md:mb-0 text- #A52A2A font-bold">
      <p>
        Contact:{" "}
        <a href="mailto:nextgeneswatini@gmail.com" className="underline ">
          nextgeneswatini@gmail.com
        </a>
      </p>
      <p className="text-#A52A2A font-bold text-left">
        Phone:{" "}
        <a href="" className="underline">
          +268 76123456
        </a>
      </p>
    </div>
    
    {/* Social Media Icons */}
    <div className="flex space-x-4">
      <a
        aria-label="Instagram"
        rel="noopener noreferrer"
        href="https://instagram.com/mamba"
        className="flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z" />
          <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      </a>

      {/* Twitter */}
      <a
        aria-label="Twitter"
        rel="noopener noreferrer"
        href="https://x.com/preciou48898711?t=HINMGd4kbE37B9yTE-apVQ&s=09"
        className="flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        aria-label="LinkedIn"
        rel="noopener noreferrer"
        href="https://linkedin.com/mamba"
        className="flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M20.447 20.452h-4.078v-5.569c0-1.327-.027-3.039-1.852-3.039-1.852 0-2.136 1.445-2.136 2.939v5.669h-4.078V9h3.922v1.561h.056c.546-1.036 1.88-2.128 3.877-2.128 4.147 0 4.912 2.731 4.912 6.289v5.83zM5.337 7.433a2.367 2.367 0 1 1 0-4.734 2.367 2.367 0 0 1 0 4.734zm1.803 13.019H3.533V9h3.607v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.553C0 23.229.792 24 1.771 24h20.451C23.205 24 24 23.229 24 22.276V1.723C24 .771 23.205 0 22.225 0z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        aria-label="Facebook"
        rel="noopener noreferrer"
        href="https://facebook.com/mamba"
        className="flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M22 12a10 10 0 1 0-11.63 9.87v-6.99h-2.78V12h2.78V9.8c0-2.73 1.63-4.23 4.13-4.23 1.2 0 2.46.21 2.46.21v2.74h-1.38c-1.36 0-1.78.84-1.78 1.7V12h3.03l-.48 2.88h-2.55v6.99A10 10 0 0 0 22 12z" />
        </svg>
      </a>
    </div>
    
  </div>
</section>
     </>
  )
}

export default App
