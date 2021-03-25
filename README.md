### HTML
1) Setup DOM with Header
2) 3 columns, 3 rows
3) r1 c1 user-choice-div
4) r1 c2 game-instructions-div
5) r1 c3 computer-choice-div
6) r2 c1 span 4 rows - user choice ascii image
7) r2 c2 game-result-div
8) r2 c3 span 4 rows - computer choice ascii image
9) r3 c2 wins-tally-div
10) r3 c2 losses-tally-div
11) r4 c2 draws-tally-div
12) r3 c1 3 radio buttons R, P, S
13) r3 c2 throw-button
14) r3 c3 reset-button
-Link changeables to app.js

### Setup
    -Create the radio buttons
    -<input name="symbol" type="radio" value="rock" checked/>
    -<input name="symbol" type="radio" value="paper" />
    -<input name="symbol" type="radio" value="scissors" />
    Link them to app.js

### Functions
    - create getRandomThrow(), generating either rock, paper, or scissors and returning that string
    - create didUserWin(user, computer), accepting the user and computer guess
    returning win, lose, or draw