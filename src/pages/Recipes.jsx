import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "",
            image: "/img/galleria/img1.jpg",
            authorImg: "/img/top-chiefs/chef1.jpg",
        },
        {
            title: "",
            image: "/img/galleria/img2.jpg",
            authorImg: "/public/img/top-chiefs/chef5.jpg",
        },
        {
            title: "",
            image: "/img/galleria/img3.jpg",
            authorImg: "/img/top-chiefs/chef3.jpg",
        },
        {
            title: "",
            image: "/img/galleria/img4.jpg",
            authorImg: "/img/top-chiefs/chef6.jpg",
        },
        {
            title: "",
            image: "/img/galleria/img5.jpg",
            authorImg: "/img/top-chiefs/chef2.jpg",
        },
        {
            title: "",
            image: "/img/galleria/img6.jpg",
            authorImg: "/img/top-chiefs/chef4.jpg",
        },
        {
            title: "",
            image: "/img/galleria/img7.jpg",
            authorImg: "/img/top-chiefs/chef2.jpg",
        },
        {
            title: "",
            image: "/img/galleria/img8.jpg",
            authorImg: "/img/top-chiefs/chef1.jpg",
        },
        {
        title: "",
        image: "/img/galleria/img9.jpg",
        authorImg: "/img/top-chiefs/chef5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/*<RecipeCard/>*/}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}