import React from 'react';



const Recipe = ({title, calories, img, ingredients}) => {


return(
    <div className="recipe-index">
        <h1>{title}</h1>
        <ol>
            {
              ingredients.map(ing => 
                <li>{ing.text}</li>)
            }
        </ol>
        <p>{calories}</p>
        <img src={img} alt=""></img>    
    </div>
)
}
;
export default Recipe;