import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball'])
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push(newCategory)
        setCategories([newCategory, ...categories ]);
        // setCategories( cat => [...cat, 'Valorant']);
          
    }


  return (
    <>
    {/*Titulo*/}
      <h1>GifApp</h1>
      


      {/*Input*/}
      <AddCategory 
    //   setCategories={ setCategories} 
         onNewCategory ={(value) => onAddCategory (value)}

      />

      {/*Listado de git*/}
      
      <ol>
        {
            categories.map( category => (
                <GifGrid 
                   key={category}
                   category={category}/>
            ))
        }
      </ol>
        {/*Git Item*/}
    </>
  )
}
