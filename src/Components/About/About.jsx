import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const About = () => {


    
    return (


        <>


            <header className="min-vh-100 main-color ">
                <Navbar />
                <div className=" w-100 m-auto d-flex justify-content-center align-items-center min-vh-100 flex-column">
                    <h1 className="fs-1 fw-bolder text-white text-uppercase pt-5 ">About Component</h1>
                    <div className="d-flex flex-row">
                        <div className="about-linear"> </div>
                        <i className=" text-white pt-4 ps-3 pe-3 fa-solid fa-star"></i>
                        <div className="about-linear"></div>
                    </div>

                    <div className="row mt-4 container ">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className=" text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className=" text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h5>
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