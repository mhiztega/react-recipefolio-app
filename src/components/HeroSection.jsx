import CustomImage from "./CustomImage"
export default function HeroSection(){
    const images = [
        "/public/img/galleria/img1.jpg",
        "/public/img/galleria/img2.jpg",
        "/public/img/galleria/img3.jpg",
        "/public/img/galleria/img4.jpg",
        "/public/img/galleria/img5.jpg",
        "/public/img/galleria/img6.jpg",
        "/public/img/galleria/img7.jpg",
        "/public/img/galleria/img8.jpg",
        "/public/img/galleria/img9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">About Us</h1>
                <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}