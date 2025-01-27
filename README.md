# Basic Calculator

A simple calculator web application built to practice JavaScript event handling and library integration.

## Features

- Basic arithmetic operations (+, -, *, /, √, x<sup>y</sup>)
- Keyboard input support
- Clear display functionality
- Error handling for invalid expressions

## Technical Implementation

This project demonstrates:
- DOM manipulation using JavaScript
- Event handling with both click events and keyboard input (keydown events)
- Integration of the math.js library for secure expression evaluation
- Input validation and error handling

## Libraries Used

- [math.js](https://mathjs.org/) - A comprehensive mathematics library used for safe expression evaluation, replacing JavaScript's native `eval()` function

## Event Listeners

The calculator implements two types of event handling:
1. Click events on calculator buttons using inline `onclick` handlers
2. Keyboard input capture using a document-level event listener for `keydown` events

## Usage

The calculator accepts input through both mouse clicks and keyboard input:
- Numbers: 0-9
- Operators: +, -, *, /, √, x<sup>y</sup>
- Clear: AC button or Escape key
- Calculate: = button or Enter key
