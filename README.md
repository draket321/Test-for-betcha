# BETCHA  
### *Making Betting Fun Again*

BETCHA is a browser-based mini-casino featuring three fast, fun, arcade-style betting games.  
You start with **1,000 Luck Points** and try to win as many as you can!

The entire project is coded in clean, modular JavaScript with separate HTML, CSS, and JS files to keep everything easy to maintain and extend.



##  Games Included
### **1. Coin Flip**
Bet on **Heads** or **Tails**, flip the coin, and win or lose your bet amount.
### **2. Dice Roll**
Pick a number from 1–6 and roll the die.
### **3. Pocket Screensaver (Corner Hit Game)**
A bouncing red rectangle moves inside a 300×300 box (just like the nostalgic DVD logo).

You win if the rectangle overlaps **75% or more** with any corner block within **10 seconds**.




# Project Updates
* Added index.html to contain:
|  Page layout
|  Buttons
|  Empty containers for results
|  Script tags that import your modular JS files

* Added styles.css in css folder to contain:
| Layout styling
| Buttons
| Game container boxes
| Colors
| Fonts

* Created js Folder
* Added global.js to store shared state and basic helpers

* Added utils.js to hold shared helper functions:
| bet validation
| rectangle intersection
| random angle generator

* Added coin.js to contain only coin-flip logic:
| selecting heads/tails
| validating bet
| producing result

* Added dice.js to contain only dice-roll logic:
| selecting number
| random roll
| payout calculations

* Added corner.js to contain ONLY corner game logic:
| motion
| corner detection
| animations
| payouts
