import { FaRegPaperPlane, FaDollarSign, FaUniversity, FaGlobeAmericas, FaHandshake, FaMapPin } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import NavBar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <NavBar />

      {/* Main Content */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between py-16 px-6 sm:px-10 md:px-12 lg:px-16 bg-gradient-to-r from-[#743CDB] to-blue-500 text-white"
        style={{
          backgroundImage: 'url("./download (3).jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
          minHeight: '80vh',
        }}
      >
        {/* Overlay for better text visibility */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ zIndex: 0 }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10 w-full md:w-1/2 text-center md:text-left px-4 sm:px-0 mb-10 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Welcome to aavataar – <span className="text-yellow-400">Your Gateway to Study Abroad Success!</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-200">
            At aavataar, we turn your dream of studying abroad into a reality. With our expert guidance and personalized support,
            you’ll find the right path to achieve your academic and career aspirations on a global scale.
          </p>
        </div>

        {/* Form Section */}
        <div className="relative z-20 flex justify-center items-center w-full md:w-1/2">
          <div className="w-full sm:max-w-[400px] bg-gray-900 rounded-3xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <form>
              <div className="space-y-4 mt-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm sm:text-base border-b border-gray-400 focus:border-yellow-400 outline-none"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm sm:text-base border-b border-gray-400 focus:border-yellow-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm sm:text-base border-b border-gray-400 focus:border-yellow-400 outline-none"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 bg-transparent text-gray-300 w-full text-sm sm:text-base border-b border-gray-400 focus:border-yellow-400 outline-none"
                />

                <textarea
                  placeholder="Write Message"
                  className="px-4 pt-3 bg-transparent text-gray-300 w-full text-sm sm:text-base border-b border-gray-400 focus:border-yellow-400 outline-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-6 flex items-center justify-center text-sm sm:text-base w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                  />
                </svg>
                Send Message
              </button>
            </form>

            <ul className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6 items-center">
              <li className="flex items-center text-yellow-400">
                <CiMail />
                <a href="mailto:info@aavaataar.com" className="text-current text-sm sm:text-base ml-3">
                  info@aavaataar.com
                </a>
              </li>
              <li className="flex items-center text-yellow-400">
                <IoCallOutline />
                <a href="tel:+158996888" className="text-current text-sm sm:text-base ml-3">
                  +158 996 888
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* Why Study Abroad with aavataar */}
      <section id="whyus" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#743CDB]">Why Study Abroad with aavataar?</h2>
          <p className="mt-6 text-xl text-gray-700">Studying abroad isn’t just about academics; it’s about broadening horizons, embracing new cultures, and opening doors to global opportunities. At aavataar, we ensure your journey is smooth, rewarding, and tailored to your unique goals.</p>
        </div>
      </section>

      {/* What aavataar Offers */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#743CDB]">What aavataar Offers</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaUniversity className="text-[#743CDB] text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Personalized University Matching</h3>
              <p className="mt-2 text-[#743CDB]">Discover the best-fit institutions worldwide for your field of study.</p>
              <button type="button"
                class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currectColor' class="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                contact now
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaRegPaperPlane className="text-[#743CDB] text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">End-to-End Application Support</h3>
              <p className="mt-2 text-[#743CDB]">From form filling to crafting impactful essays, we assist you every step of the way.</p>
              <button type="button"
                class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currectColor' class="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                contact now
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaDollarSign className="text-[#743CDB] text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Scholarship & Financial Aid</h3>
              <p className="mt-2 text-[#743CDB]">Access exclusive insights into scholarships and funding options.</p>
              <button type="button"
                class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currectColor' class="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                contact now
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaMapPin className="text-[#743CDB] text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Visa Expertise</h3>
              <p className="mt-2 text-[#743CDB]">Navigate complex visa processes with ease using our experienced guidance.</p>
              <button type="button"
                class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currectColor' class="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                contact now
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaHandshake className="text-[#743CDB] text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Pre-Departure Readiness</h3>
              <p className="mt-2 text-[#743CDB]">Prepare for life abroad with resources on culture, housing, and more.</p>
              <button type="button"
                class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currectColor' class="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                contact now
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaGlobeAmericas className="text-[#743CDB] text-4xl mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Career & Networking Support</h3>
              <p className="mt-2 text-[#743CDB]">Workshops, webinars, and connections with industry professionals to build your global career.</p>
              <button type="button"
                class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currectColor' class="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
                contact now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Study Destinations */}
      <section id="destinations" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-4">
          {/* Section Heading */}
          <h2 className="text-4xl font-semibold text-[#743CDB]">
            Top Study Destinations with aavataar
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore diverse opportunities in leading academic destinations.
          </p>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img
                className="w-24 h-24 mx-auto object-cover rounded-full"
                src="./flag_12361101.png"
                alt="United States"
              />
              <h3 className="text-xl font-semibold mt-4 text-[#743CDB]">
                United States
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img
                className="w-24 h-24 mx-auto object-cover rounded-full"
                src="./round_16003256.png"
                alt="Canada"
              />
              <h3 className="text-xl font-semibold mt-4 text-[#743CDB]">
                Canada
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img
                className="w-24 h-24 mx-auto object-cover rounded-full"
                src="./world_16396788.png"
                alt="Germany"
              />
              <h3 className="text-xl font-semibold mt-4 text-[#743CDB]">
                Germany
              </h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img
                className="w-24 h-24 mx-auto object-cover rounded-full"
                src="./australia_11700988.png"
                alt="Australia"
              />
              <h3 className="text-xl font-semibold mt-4 text-[#743CDB]">
                Australia
              </h3>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <img
                className="w-24 h-24 mx-auto object-cover rounded-full"
                src="./united-kingdom_555417.png"
                alt="United Kingdom"
              />
              <h3 className="text-xl font-semibold mt-4 text-[#743CDB]">
                United Kingdom
              </h3>
            </div>
          </div>
        </div>
      </section>


      {/* Why aavataar */}
      <section id="whyus" className="py-20 max-w-[1200px] mx-auto">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#743CDB]">Why aavataar?</h2>
          <p className="mt-6 text-xl text-gray-700">At aavataar, we provide a comprehensive suite of services to ensure your study abroad journey is seamless and successful. Here’s how we make it happen:</p>
        </div>
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#743CDB]">Personalized University Matching</h3>
            <p className="mt-4 text-[16px] text-gray-700">Choosing the right university is crucial. Our expert counselors analyze your academic profile, career aspirations, and preferences to recommend the best-fit universities across the globe. Whether you're looking for Ivy League institutions, affordable study options, or niche programs, we’ve got you covered.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#743CDB]">End-to-End Application Support</h3>
            <p className="mt-4 text-[16px] text-gray-700">The application process can be overwhelming, but with aavataar, you’re never alone. We assist in crafting impressive personal statements, recommendation letters, and CVs, ensuring your application stands out. Our team ensures all your documents are accurate and submitted on time, boosting your chances of acceptance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#743CDB]">Visa Expertise</h3>
            <p className="mt-4 text-[16px] text-gray-700">Navigating the visa process can be challenging, but our experienced visa consultants simplify it for you. From preparing required documents to acing the visa interview, we ensure you're fully prepared to get your visa approved.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#743CDB]">Scholarship & Financial Aid</h3>
            <p className="mt-4 text-[16px] text-gray-700">Studying abroad can be expensive, but financial barriers shouldn’t hold you back. aavataar provides guidance on scholarships, grants, and other financial aid options tailored to your needs. We help you discover opportunities that reduce the cost of education significantly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#743CDB]">Pre-Departure Readiness</h3>
            <p className="mt-4 text-[16px] text-gray-700">Moving to a new country is an exciting yet daunting experience. At aavataar, we provide essential pre-departure support, including cultural orientation, travel tips, packing checklists, and housing assistance. We ensure you’re fully equipped for your new adventure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#743CDB]">Career & Networking Support</h3>
            <p className="mt-4 text-[16px] text-gray-700">Beyond academics, we help you build a global career. Through our workshops and webinars, you can learn essential skills, build your resume, and connect with alumni and industry professionals in your field.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#743CDB]">Post-Arrival Assistance</h3>
            <p className="mt-4 text-[16px] text-gray-700">aavataar doesn’t stop at pre-departure. After you land, our support continues with tips for settling in, understanding local systems, and networking in your new environment.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#743CDB] text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 aavataar - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}