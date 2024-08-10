var recipes= [
      {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "picture":"./images/Spaghetti Carbonara.jpg",
        "ingredients": [
          { "name": "Spaghetti", "quantity": "200g" },
          { "name": "Eggs", "quantity": "4" },
          { "name": "Parmesan cheese", "quantity": "100g" },
          { "name": "Pancetta", "quantity": "150g" },
          { "name": "Garlic", "quantity": "2 cloves" },
          { "name": "Salt", "quantity": "to taste" },
          { "name": "Black pepper", "quantity": "to taste" }
        ],
        "instructions": [
          "Cook spaghetti according to package instructions.",
          "In a bowl, beat the eggs and mix in grated Parmesan cheese.",
          "In a pan, cook pancetta until crispy.",
          "Add garlic to the pan and cook for 1 minute.",
          "Mix the cooked spaghetti with pancetta and garlic.",
          "Remove from heat and quickly mix in the egg and cheese mixture.",
          "Season with salt and black pepper.",
          "Serve immediately."
        ]
      },
      {
        "id": 2,
        "name": "Chicken Curry",
        "picture":"./images/Chicken Curry.jpg",
        "ingredients": [
          { "name": "Chicken breast", "quantity": "500g" },
          { "name": "Onion", "quantity": "1 large" },
          { "name": "Garlic", "quantity": "3 cloves" },
          { "name": "Ginger", "quantity": "1 tbsp" },
          { "name": "Tomato puree", "quantity": "2 tbsp" },
          { "name": "Coconut milk", "quantity": "400ml" },
          { "name": "Curry powder", "quantity": "2 tbsp" },
          { "name": "Turmeric powder", "quantity": "1 tsp" },
          { "name": "Salt", "quantity": "to taste" },
          { "name": "Vegetable oil", "quantity": "2 tbsp" }
        ],
        "instructions": [
          "Cut chicken breast into bite-sized pieces.",
          "Chop onion, garlic, and ginger.",
          "In a pan, heat vegetable oil and sauté onion, garlic, and ginger until softened.",
          "Add curry powder and turmeric powder, cook for 1 minute.",
          "Add chicken pieces and cook until browned.",
          "Stir in tomato puree and cook for 2 minutes.",
          "Pour in coconut milk and bring to a simmer.",
          "Season with salt and cook until chicken is fully cooked.",
          "Serve with rice."
        ]
      }
    ]

var section=document.querySelector("#sect")
for(let i=0;i<recipes.length;i++){
    let div=document.createElement("div")
    let title=document.createElement("h1")
    let p=document.createElement("p")
    let image=document.createElement("img")
    let ingredient=document.createElement("h1")
    let instructions=document.createElement("h1")

    image.setAttribute("src",recipes[i].picture)
    image.setAttribute("class","pic")
    ingredient.setAttribute("class","titre")
    instructions.setAttribute("class","titre")

    title.setAttribute("class","titre")

    ingredient.innerHTML="Ingredients:"
    instructions.innerHTML="instructions:"

    title.innerHTML=recipes[i].name
    div.appendChild(title)
    div.appendChild(image)
    div.appendChild(ingredient)


    for(let j=0;j<recipes[i].ingredients.length;j++){
        let p2=document.createElement("p")
        p2.innerHTML=recipes[i].ingredients[j].name
        div.appendChild(p2)
    }
    div.appendChild(instructions)

    for(let j=0;j<recipes[i].instructions.length;j++){
      let p2=document.createElement("p")
      p2.innerHTML=recipes[i].instructions[j]
      div.appendChild(p2)
  }

    section.appendChild(div)

}