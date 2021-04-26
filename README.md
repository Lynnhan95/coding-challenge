# coding-challenge
Coding Challenge for ForgeRock </br>
View application at: https://lynnhan95.github.io/coding-challenge/

# Technology
Used React, Hook, D3.js, React router, Material UI to develop 

# Important Component 
## Under component folder
### Header
that contains a left menu when click on Navigator button to bring up the "Dashboard" view; Using React router for redirecting to "/dasbhoard" site. </br>
### ScatterPlot
is the key visualization component that presents the Weight and Height information. It uses D3 and React, while remaining using the pure React Virtual DOM for development. D3 is target to solve all mathematical computation, while React handle the DOM manipulation. This makes the visualization easy to ready, maintain and reuse. </br>
When you hover over the circle, the visualization will shows a pop up window; when you click on the circle, it will render the information table that shows more random information.
### InfoTable
that get data passed from its parent component - App, it will get updated when a user click on a circle in ScatterPlot component.</br>
### Footer
is the end of the page.
## Under data folder
contains Header data (the navigator menu item list) and People data (which contains age, weight, height, etc).




