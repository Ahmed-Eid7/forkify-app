# Forkify App
## User Story
- As a user, I want to search for recipes, so that I can find new ideas for meals.
- As a user, I want to be able to update the number of servings, so that I can cook a meal for different numbers of people.
- As a user, I want to bookmark recipes, so that I can review them later.
- As a user, I want to be able to create my own recipes, so that I have them all organized in the same app.
- As a user, I want to be able to see my bookmarks and own recipes when I have the app and come back later so that I can close the app safely after cooking.

## Features
- Search functionality: input field to send a request to API with searched keywords
- Display results with pagination
- Display the recipe with cooking time, servings, and ingredients
- Change servings functionality: update all ingredients according to the current number of servings
- Bookmarking functionality: display list of all bookmarked recipes
- user can upload their own recipes
- user recipes will automatically be bookmarked
- user can only see their own recipe, not recipes from other users
- store bookmark data in the browser using local storage
- on page load, read saved bookmarks from local storage and display
