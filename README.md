# Web Development Project 2 - *Learn The Capitals*

Submitted by: **Sebastian Cruz**

This web app: **Helps you learn the captials using flashcards**

Time spent: **5** hours spent in total. 

**3** hours for project 2

**2** hours for project 3


## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

- [X] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [X] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science
    
- [ ] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [X] A user’s answer may be counted as correct even when it is slightly different from the target answer. Ignoring uppercase/lowercase. 

- [ ] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

I also added a rotating planet as part of the theme 


## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='\public\Video Walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
LICEcap

## Notes

Some challenges I ran into while working on the app:
- I had to rework some of the code after understanding the required structure for information and props to go down. This meant i had move some things from my component to App.jsx and back several times
- Initially, when going to the next card, the flip state wouldn't change. This caused you to be have the back of the card(the answer) first. This was unintended, so I changed it to reset before going to the next card. However the flip is to slow, so you can still se the answer for a few seconds before the card flips completely. I think to fix this I would incorporate some sort of timer or delay that will flip the card first and then wait for the flip to complete, then go to the next card. 
- I couldn't figure out why the wrong or correct style wasn't appearing on the button. It turns out that even though the style rule was defined later, the buttons initial style rule was more specific, so the newer ones wouldn't overwrite the already existing background color. I fixed this by making the style rules for te correct and incorrect guesses as specific as the original style rule for the button. 

## License

    Copyright [2025] [Sebastian Cruz Loaiza]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
