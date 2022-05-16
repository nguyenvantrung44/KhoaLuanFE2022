import React from 'react'

export default function Header() {
    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            style={{ height: "200px" }}
                            src="http://ptchc.iuh.edu.vn/wp-content/uploads/2016/12/WEB.png"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            style={{ height: "200px" }}
                            src="http://ptchc.iuh.edu.vn/wp-content/uploads/2016/12/QSIUH-1.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            style={{ height: "200px" }}
                            src="http://ptchc.iuh.edu.vn/wp-content/uploads/2016/12/BANNER-2-2-ASU-02-Web.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}
