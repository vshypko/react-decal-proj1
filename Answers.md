# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

1.1 Explain in your own words what `ReactDOM.render` is doing.

- `ReactDOM.render` renders a React component into the DOM. This makes the component visible on the webpage.

1.2 What are some of the advantages and cons to using Semantic UI? (or any UI library for that matter)

- The advantages of using a UI library is that it is much faster to develop UI. The libraries have predefined CSS styles that the developer doesn't need to rewrite every time. He/she can use the styles by just adding a class name to the element.  
Some of the disadvantages of using a UI library is that HTML elements may end up with a lot of styles and the code will become harder to navigate.  

1.3 In your own words, explain why we need to wrap `addToCart` with another function.

- We need to wrap `addToCart` with another function since we want to assign `onClick` not to the result of `addToCart`, but to the function itself. We also need to pass a parameter to `addToCart`. If we just passed the parameter without wrapping (`addToCart(arg)`), we would assign the result of the function to the `onClick` event, which is not what we want.

1.4a) What allowed us to only write the `Product` component once inside the `Cart`'s `render` function?

- Since all the data is represented in the array, we can iterate over that array and just change the props values of the `Product` component. 

1.4b) Why don't we just do this inside our `render` function 

```
<Product title="Apple" price={1} />
<Product title="Banana" price={2} />
<Product title="Orange" price={3} />
```
What benefit, *besides* code cleanliness, do we get from pulling in the data from an object instead?

- If information about the product gets updated or the product gets deleted, it is easier to delete it from the array of data and just stop rendering it instead of going back to the code and removing the line of code corresponding to that component. An object with data can be thought of as something stored in the database. A way to remove a product from the page, could be setting `display` property of the product `on/off`. Based on that property, we can decide whether to render the product on the page or not, which more modular that removing a line of code from the `render` function.
