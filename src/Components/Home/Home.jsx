import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import avatar from './../../assets/images/avataaars.svg';

const Home = () => {
    return (

        <>
            <header className="min-vh-100 main-color">
                <Navbar />
                <div className="w-100 m-auto d-flex justify-content-center align-items-center min-vh-100 flex-column">
                <div className=" text-center mt-5">
                    <img src={avatar} className="w-75" alt=" photo" />
                </div>
                    <h1 className=" text-uppercase fw-bold mt-5 text-white "> Start Framework</h1>
                    <div className="d-flex flex-row pb-4">
                        <div className="about-linear"> </div>
                        <i className="pt-2 ps-3 pe-3 fa-solid text-white fa-star"></i>
                        <div className="about-linear"></div>
                    </div>
                    <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
                </div >
            </header>

            <Footer />
        </>
    )
}

export default Home