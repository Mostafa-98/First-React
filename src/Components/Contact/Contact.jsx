import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { useState } from "react"


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = () => {
        const subject = encodeURIComponent(`Message from ${name || "my website"}`)
        const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
        window.location.href = `mailto:mostafaelsaqqa79@gmail.com?subject=${subject}&body=${body}`
    }

    return (

        <>
            <header className="min-vh-100 ">
                <Navbar />
                <div className="w-100 m-auto d-flex justify-content-center align-items-center min-vh-100 flex-column">
                    <h1 className=" text-uppercase fw-bold mt-5 pt-5 "> Contact</h1>
                    <div className="d-flex flex-row">
                        <div className="portfolio-linear"> </div>
                        <i className="pt-2 ps-3 pe-3 fa-solid fa-star"></i>
                        <div className="portfolio-linear"></div>
                    </div>

                    <div className="container mt-5 w-50">
                        <input className=" form-control mt-4 p-2 " type="text" placeholder="Your name"
                            value={name} onChange={(e) => setName(e.target.value)} />
                        <input className=" form-control mt-4 p-2 " type="email" placeholder="Your email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea className=" form-control mt-4 p-2 " rows="4" placeholder="Your message"
                            value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className=" mt-4 btn btn-outline-success " onClick={sendMessage}>Send Message</button>

                    </div>
                </div>

            </header>

            <Footer />
        </>
    )
}

export default Contact
