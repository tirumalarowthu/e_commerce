import React from 'react'
import "./SliderStyles.css"
const Slider = () => {
    const images = [
        "https://i.ibb.co/s9v2HhC/amazon1.jpg",
        "https://i.ibb.co/8mhZB8z/amazon2.jpg",
        "https://i.ibb.co/3YLWQyp/amazon3.jpg",
        "https://i.ibb.co/TtxXttM/amazon5.jpg"
    ]
    return (
        <div className='my-5 Product_slider'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img height="300px" src=" https://i.ibb.co/9nbmcdM/amzon4.jpg" className="d-block w-100"  alt="..." />
                    </div>
                    {
                        images.map((item, index) => {
                            return <div key={index}  className="carousel-item">
                                <img height="300px" src={item} className="d-block w-100" alt="..." />
                            </div>
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Slider