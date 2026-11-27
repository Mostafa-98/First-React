const Footer = () => {
    return (


        <>
            <footer className="links mb-0">
                <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto pb-3">
                    <div className="col pt-5 pb-5">
                        <div className=" text-center">
                            <div className="card-body text-white">
                                <h5 className=" fs-3 fw-bold card-title">Built By</h5>
                                <p className="card-text">Moustafa Elsaqqa</p>
                                <p className="card-text">Front-End Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col pt-5">
                        <div className="text-center">
                            <div className="card-body text-white">
                                <h5 className=" fs-3 fw-bold card-title">AROUND THE WEB</h5>
                                <a href="https://github.com/Mostafa-98" target="_blank" rel="noopener" aria-label="GitHub">
                                    <i className=" rounded-circle p-2 m-1 border-2 border icons fa-brands fa-github text-white"></i></a>
                                <a href="https://www.linkedin.com/in/moustafa-elsaqqa/" target="_blank" rel="noopener" aria-label="LinkedIn">
                                    <i className=" rounded-circle p-2 m-1 border-2 border icons fa-brands fa-linkedin-in text-white"></i></a>
                                <a href="mailto:mostafaelsaqqa79@gmail.com" aria-label="Email">
                                    <i className=" rounded-circle p-2 m-1 border-2 border icons fa-solid fa-envelope text-white"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col pt-5">
                        <div className=" text-center">
                            <div className="card-body text-white">
                                <h5 className=" fs-3 fw-bold card-title">ABOUT THIS PROJECT</h5>
                                <p className="card-text">Freelancer is a free Bootstrap theme. This project rebuilds it with React and Vite as a learning exercise.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-dark">
                    <div className="text-center text-white ">
                        <h5 className="mb-0 p-5 fs-6">Copyright &copy; Moustafa Elsaqqa 2024</h5>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer
