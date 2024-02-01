# This is the name of my Project  [![Netlify Status](https://api.netlify.com/api/v1/badges/917594f9-470e-47e6-af67-789c64bc1541/deploy-status)](https://app.netlify.com/sites/sorting-hat-project-fm/deploys)

This project is the first individual student assessment for Nashville Software School. I created a Sorting Hat web page that includes a welcome page, a form to enter your name, a sorting function, filter functions and deleting/expelling functions.

[View App](https://sorting-hat-project-fm.netlify.app/#)

## About the User 
- The ideal user is a Harry Potter Fanatic
- This person has some extra time on their hands and wants to see what Harry Potter house they would be sorted into 
- The problem this app solves is a lack of entertainment. This app provides something to do while feeding the need of being engulfed in the Harry Potter fantasy world

## Features 
- When entering the site, a form field will populate to allow individual to enter a name
- When a name is entered, clicking the button will sort the object into a house and push the object into an array of students that then prints to the DOM
- Each student object is assigned a color based on which house they are sorted into
- The student cards are sorted by name
- The filter buttons allow you to filter to students in the respective houses
- When a student is "expelled," they are moved to a separate container a.k.a. The Army of Voldemort and their card style changes

## Video Walkthrough of APP NAME
https://www.loom.com/share/2421913d68ca462cadb687a996e1c4e8?sid=44adafa4-3726-4c7d-ad07-3d977bc0be18


## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Web App" src="./images/sorting-hat-screenshot.png">

## Contributors
- [Felicia Mings](https://github.com/fmings)

# Sorting Hat

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions in help tickets if you need help. We will guide you to the resources that are available to you.
- When done, tell an instructor. Everyone will present how far they got AND their favorite piece of code that they wrote to an instructor.
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![screencapture-drt-sorting-netlify-app-2022-04-23-14_28_47](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


<!-- [See Demo](https://drt-sortinghat.netlify.app/)
 -->
## Technical Requirements
- You MUST plan your project and highly suggest using issue tickets. There are a few that have been provided for you to use already. Continue to add to these so you know what work you need to complete. 
- You MAY use the `renderToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## DEFINITION OF DONE
Once you have completed all the technical requirments, you should complete the following:
- [README Requirements](https://github.com/orgs/nss-evening-web-development/discussions/13)
- **RECOMMENDED** Loom Video: [Sign up for Loom](https://www.loom.com/signup) and record a video of you walking through your app 

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Sorting/Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
