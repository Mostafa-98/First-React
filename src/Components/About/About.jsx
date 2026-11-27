import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const About = () => {


    
    return (


        <>


            <header className="min-vh-100 main-color ">
                <Navbar />
                <div className=" w-100 m-auto d-flex justify-content-center align-items-center min-vh-100 flex-column">
                    <h1 className="fs-1 fw-bolder text-white text-uppercase pt-5 ">About</h1>
                    <div className="d-flex flex-row">
                        <div className="about-linear"> </div>
                        <i className=" text-white pt-4 ps-3 pe-3 fa-solid fa-star"></i>
                        <div className="about-linear"></div>
                    </div>

                    <div className="row mt-4 container ">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className=" text-white">
                                <div className="card-body">
                                    <h5 className="card-title">This is my first React project: the Freelancer theme rebuilt as a single-page app with React, Vite and React Router, with hash routing so it works on GitHub Pages.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className=" text-white">
                                <div className="card-body">
                                    <h5 className="card-title">I built it as a practice project while learning React: components, props, routing and a lightbox-style portfolio section.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Footer />
        </>
    )
}

export default About