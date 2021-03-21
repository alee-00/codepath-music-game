# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Amanda Lee**

Time spent: **3.5** hours spent in total

Link to project: (https://mulberry-polished-potato.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [] "Start" button toggles between "Start" and "Stop" when clicked. 
* [] Game buttons each light up and play a sound when clicked. 
* [] Computer plays back sequence of clues including sound and visual cue for each button
* [] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [] User wins the game after guessing a complete pattern
* [] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [] Buttons use a pitch (frequency) other than the ones in the tutorial
* [] More than 4 functional game buttons
* [] Playback speeds up on each turn
* [] Computer picks a different pattern each time the game is played
* [] Player only loses after 3 mistakes (instead of on the first mistake)
* [] Game button appearance change goes beyond color (e.g. add an image)
* [] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Music Game Demo](MusicGame.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I did not use any outside resources to help me complete my submission other than the links provided to us to look up different fonts and CSS colors]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The hardest challenge for me was to figure out the logic if buttons were guessed correctly or incorrectly. I spent about 2 hours trying to figure it out as logic is not my strong suit
yet in coding, since I have not had much practice with it. I wanted to try my best, even if I did get stuck multiple times. I only looked at the first line that was given to us to check my 
syntax, and then I only looked at the rest once I coded the logic correctly. Despite being given a logic map, I realized I was looking at it incorrectly and inefficiently by trying to code
the top yes or no branch, then the middle, then the bottom, which led me to write code that was too complicated and did not work. In order to write the code correctly, I decided to break the 
logic down between the "yes" options and the "no" options in the map. I first coded the "if" conditionals based on all the "yes" options first and then added the "else" or "else if" to the 
"if" conditionals based on the "no" options. It took less time to get the "else/else if" logic right since the "if" conditionals were right based on playing the game myself. I was surprised 
to see that I had basically the same code that was given to us, even if it was simple to begin with. This method was helpful for me, and it gave me future wisdom on how to approach 
logic problems for the future coding assignments.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Since this was a beginner web development project that took several hours, how long is the typical web development project in the industry? When with a client that is requesting a web project,
are there features that a web developer will refuse to implement because of time restrictions or its complicated nature or will they try to accommodate the client? What other languages can be 
implemented in web-pages and are they commonly used in the industry/are certain languages preferred more than others? Why do people joke about web developers not being real developers? I certainly
felt like I was doing a project in my Java intro to software design classes.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project, I would spend them adding words inside the circle that do not correspond to the color of the circle, in order to trick the user. By words that are not the color
of the circle, I would hope that it would trick the user into choosing the wrong colored circle. Another feature I would add, is to create more circles and place them randomly on the page so that it is not in a row, 
and every time it goes to the next turn if the user is correct, the circles would randomly change location on the page. ]



## License

    Copyright [Amanda Lee]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
