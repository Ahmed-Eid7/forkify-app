import * as model from "./model";
import recipeView from "./views/recipeView";

import "core-js/stable"; // polyfill evrything
import "regenerator-runtime/runtime"; // polyfill async await

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // Loading Recipe
    await model.loadRecipe(id);

    // Rendring Recipe
    recipeView.render(model.state.recipe);
  } catch (e) {
    recipeView.renderError();
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipe);
};
init();
