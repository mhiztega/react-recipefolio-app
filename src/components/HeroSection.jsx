import CustomImage from "./CustomImage"
export default function HeroSection(){
    const images = [
        "/img/galleria/img1.jpg",
        "/img/galleria/img2.jpg",
        "/img/galleria/img3.jpg",
        "/img/galleria/img4.jpg",
        "/img/galleria/img5.jpg",
        "/img/galleria/img6.jpg",
        "/img/galleria/img7.jpg",
        "/img/galleria/img8.jpg",
        "/img/galleria/img9.jpg"
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