[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/w0x8b7lw)

Lab 10 README
Jake Kingdon 
April 19th, 2023.

This sketch creates a simple game where the player controls a green rectangle using the up arrow key and avoids collision with randomly moving cars. The code defines a Car class with properties x, y, speed, color, and size. The display method draws a rectangle on the canvas with the specified color and size at the current x and y position of the car. The move method updates the x position of the car by adding the current speed and checks for collision with the walls. If the car reaches the edge of the canvas, its direction is reversed, and its color is set to a new random color. In the draw function, the canvas is cleared, and horizontal lines are drawn to represent lanes. The display and move methods of each car in the cars array are called to draw and update their positions. Finally, if a car hits the wall, it's direction and color are changed randomly. 

Link: https://editor.p5js.org/Jake_Kingdon02/sketches/r_c6bBweX
