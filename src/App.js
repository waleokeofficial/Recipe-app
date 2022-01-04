import Recipe from './Recipe';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const APP_ID = "b2dfbd5d";
  const APP_KEY = "23783c3d7b2468242206d48bfbbbe87a";
  // const example_req = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=b2dfbd5d&app_key=YOUR_APP_KEY&type=public`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")


  useEffect (()=> {
    getRecipes();
  }, [query]);

  const getRecipes = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch =(e)=>{
    // console.log(e.target.value);
    setSearch(e.target.value);
  }
  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);

    setSearch(""); 

    console.log(e);
  }

  
  // console.log(recipes);
  

  return (
    <div className="App">
      
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-box" value={search} onChange={updateSearch}></input>
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div className="recipes">
          {
            recipes.map((rcp) => (
              <Recipe key={rcp.recipe.label} title={rcp.recipe.label} calories={rcp.recipe.calories} ingredients={rcp.recipe.ingredients} img={rcp.recipe.image}></Recipe>
            ))
          }
      </div>
    </div>
  );
}

export default App;
