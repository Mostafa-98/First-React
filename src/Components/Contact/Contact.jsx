import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"


const Contact = () => {
    return (

        <>
            <header className="min-vh-100 ">
                <Navbar />
                <div className="w-100 m-auto d-flex justify-content-center align-items-center min-vh-100 flex-column">
                    <h1 className=" text-uppercase fw-bold mt-5 pt-5 "> Contact Section</h1>
                    <div className="d-flex flex-row">
                        <div className="portfolio-linear"> </div>
                        <i className="pt-2 ps-3 pe-3 fa-solid fa-star"></i>
                        <div className="portfolio-linear"></div>
                    </div>

                    <div className="container mt-5 w-50">
                        <input className=" form-control mt-4 p-2 " type="text" name="" id="name" placeholder="userName" />
                        <input className=" form-control mt-4 p-2 " type="number" name="" id="age" placeholder="userAge" />
                        <input className=" form-control mt-4 p-2 " type="email" name="" id="email" placeholder="userEmail" />
                        <input className=" form-control mt-4 p-2 " type="password" name="" id="pass" placeholder="userPassword" />
                        <button className=" mt-4 btn btn-outline-success ">send Message</button>

                    </div>
                </div>

            </header>

            <Footer />
        </>
    )
}

export default Contact