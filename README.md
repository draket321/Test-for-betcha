# BETCHA  
### *Making Betting Fun Again*

BETCHA is a browser-based mini-casino featuring three fast, fun, arcade-style betting games.  
You start with **1,000 Luck Points** and try to win as many as you can!

The entire project is coded in clean, modular JavaScript with separate HTML, CSS, and JS files to keep everything easy to maintain and extend.









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
