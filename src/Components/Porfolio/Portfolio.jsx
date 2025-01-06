import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import port1 from './../../assets/images/poert1.png';
import port2 from './../../assets/images/port2.png';
import port3 from './../../assets/images/port3.png';




const Profolio = () => {
  return (
    <>
      <Navbar />
      <header className="min-vh-100 pb-5" style={{ paddingTop: '150px' }}>
        <div className="w-100 m-auto d-flex justify-content-center align-items-center flex-column">
          <h1 className="fs-1 fw-bolder text-uppercase" >Portfolio Component</h1>
          <div className="d-flex flex-row">
            <div className="portfolio-linear"> </div>
            <i className="pt-3 ps-3 pe-3 fa-solid fa-star"></i>
            <div className="portfolio-linear"></div>
          </div>
        </div>
        <div className=" portfolio-images container m-auto text-center row row-cols-1 row-cols-md-3 g-4">

          <div className="col">
            <div className=" layer-parent position-relative">
              <div className="layer  position-absolute d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white fs-1 fw-bolder "></i>
              </div>
              <img src={port1} className=" rounded-2 w-100 " alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="layer-parent position-relative">
              <div className="layer  position-absolute d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white fs-1 fw-bolder "></i>
              </div>
              <img src={port2} className=" rounded-2 w-100 " alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="layer-parent position-relative">
              <div className="layer  position-absolute d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white fs-1 fw-bolder "></i>
              </div>
              <img src={port3} className=" rounded-2 w-100 " alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="layer-parent position-relative">
              <div className="layer  position-absolute d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white fs-1 fw-bolder "></i>
              </div>
              <img src={port1} className=" rounded-2 w-100 " alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="layer-parent position-relative">
              <div className="layer  position-absolute d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white fs-1 fw-bolder "></i>
              </div>
              <img src={port2} className=" rounded-2 w-100 " alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="layer-parent position-relative">
              <div className="layer  position-absolute d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus text-white fs-1 fw-bolder "></i>
              </div>
              <img src={port3} className=" rounded-2 w-100 " alt="..." />
            </div>
          </div>

        </div>
        <section className=" layer-parent d-none d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-25">
          <div className="inner w-50 d-flex justify-content-between align-items-center p-3 position-relative" >
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-solid fa-xmark position-absolute top-0 end-0 m-3"></i>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </section>
      </header>
      <Footer />
    </>
  );
};

export default Profolio;