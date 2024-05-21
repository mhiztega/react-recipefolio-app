 import ChiefCard from "./ChiefCard"
 
 export default function ChiefsSection(){
    const chiefs = [
       {
            name: "Hilda Bassey", 
<<<<<<< HEAD
            img: "/img/top-chiefs/chef1.jpg",
=======
            img: "../public/images/top-chiefs/chef1.jpg",
>>>>>>> 7cf4f3ad4355f2e81dd75d365c24a3e149b95fb9
            recipesCount: "10",
            cuisine: "Nigerian",
        },
        {
            name: "Tolani Osikoya", 
<<<<<<< HEAD
            img: "/img/top-chiefs/chef2.jpg",
=======
            img: "../public/img/top-chiefs/chef2.jpg",
>>>>>>> 7cf4f3ad4355f2e81dd75d365c24a3e149b95fb9
            recipesCount: "10",
            cuisine: "Chinese",
        },
        {
            name: "Teslimat",
<<<<<<< HEAD
            img: "/img/top-chiefs/chef3.jpg",
=======
            img: "../public/img/top-chiefs/chef3.jpg",
>>>>>>> 7cf4f3ad4355f2e81dd75d365c24a3e149b95fb9
            recipesCount: "7",
            cuisine: "Indian",
        },
        {
            name: "Gbubemi Fregz",
<<<<<<< HEAD
            img: "/img/top-chiefs/chef4.jpg",
=======
            img: "../public/img/top-chiefs/chef4.jpg",
>>>>>>> 7cf4f3ad4355f2e81dd75d365c24a3e149b95fb9
            recipesCount: "8",
            cuisine: "Nigerian",
        },
        {
            name: "Tolulope Eros",
<<<<<<< HEAD
            img: "/img/top-chiefs/chef5.jpg",
=======
            img: "../public/img/top-chiefs/chef5.jpg",
>>>>>>> 7cf4f3ad4355f2e81dd75d365c24a3e149b95fb9
            recipesCount: "6",
            cuisine: "Nigerian",
        },
        {
            name: "Mike Elegbede", 
<<<<<<< HEAD
            img: "/img/top-chiefs/chef6.jpg",
=======
            img: "../public/img/top-chiefs/chef6.jpg",
>>>>>>> 7cf4f3ad4355f2e81dd75d365c24a3e149b95fb9
            recipesCount: "10",
            cuisine: "Indian",
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">OUR TOP CHEFS</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                {chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
    }