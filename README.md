# React Stateful Animations Package
Use this library of stateful animations in your React application. Currently we only have Upload and Download, but will be adding more soon.


# What is a stateful animation
What we mean by stateful animations is an animation which exists within different states. Currently, when using animated icons in an app these typically play once forward for a set amount of time, or loop. 

In this package the animated icons hold a state, for example, our Download icon has an initial state, then when the download starts the icon moves to a loading state, and then when loading has finished it moves to an end state then back to the initial state again.
This means that you can have smooth transitions between the different states (instead of just loading in different animations for the different states) and you can choose how long the animation exists in each state.
