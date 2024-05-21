 import ChiefCard from "./ChiefCard"
 
 export default function ChiefsSection(){
    const chiefs = [
       {
            name: "Hilda Bassey", 
            img: "/img/top-chiefs/chef1.jpg",
            recipesCount: "10",
            cuisine: "Nigerian",
        },
        {
            name: "Tolani Osikoya", 
            img: "/img/top-chiefs/chef2.jpg",
            recipesCount: "10",
            cuisine: "Chinese",
        },
        {
            name: "Teslimat",
            img: "/img/top-chiefs/chef3.jpg",
            recipesCount: "7",
            cuisine: "Indian",
        },
        {
            name: "Gbubemi Fregz",
            img: "/img/top-chiefs/chef4.jpg",
            recipesCount: "8",
            cuisine: "Nigerian",
        },
        {
            name: "Tolulope Eros",
            img: "/img/top-chiefs/chef5.jpg",
            recipesCount: "6",
            cuisine: "Nigerian",
        },
        {
            name: "Mike Elegbede", 
            img: "/img/top-chiefs/chef6.jpg",
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