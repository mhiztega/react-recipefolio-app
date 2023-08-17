import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-car-info">
            <img className="author-img" src={recipe.authorImg} alt="" />
            <p className="recipe-title">Chicken meal</p>
            <p className="recipe-desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
            <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>    
        </div>
    )
}