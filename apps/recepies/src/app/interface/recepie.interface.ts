export interface Recepie {
    "id": number,
    "name": string,
    "ingredients": string[],
    "instructions": string[],
    "prepTimeMinutes": number,
    "cookTimeMinutes": number,
    "servings": number,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": number,
    "tags": string[],
    "userId": number,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": number,
    "reviewCount": number,
    "mealType": string[]
}