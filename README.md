# (◉ ͜ʖ◉))ﾉ彡 LEARNING REACT ✧٩(•́⌄•́๑)
> Components, Frags, Hooks and modern patterns for Developing REACT Apps

![](react-logo.png)

### Description 
> Start 23-09-2020

This project is my learning path to REACT. It will be done while reading the book "Learning REACT" written by Alex Banks & Eve Porcello.
My main goals are to learn more about functional programming with an obvious focus on JavaScript, learning how REACT works and create my components with the best logic/syntax I can.
Enjoying power of hooks and modern patterns using the last upgrades of REACT.

###  Index

-   [Achievements](#achievements)
-   [1. Welcome to REACT](#1.-welcome-to-react)
-   [2. JavaScript for REACT](#2.-javascript-for-react)
-   [3. Functional programming](#3.-functional-programming)
-   [4. How REACT works](#4.-how-react-works)
-   [5. REACT with JSX & Webpack](#5.-react-with-jsx-&-webpack)
-   [6.  REACT State Management](#6.-react-state-management)
-   [7. Enhancing components with Hooks](#7.-enhancing-components-with-hooks)
-   [8. Incorporating Data](#8.-incorporating-data)
-   [Collaboration](#collaboration)
-   [Timeline](#timeline)

---

### Achievements 
*   Configure tools for a great REACT development environment
*   Refresh / Upgrade JavaScript vanilla's stack
*   Functional programming overview
    *   Functions over values
    *   Transforming data
    *   High-order functions
    *   Composition
*   Setup React in HTML 
*   Create basic components
*   Use map.array to generate unordered list 
*   Create REACT fragments
*   Use import / export - create dependecy tree
*   Use webpack to create an app
*   Use create-react-app package 
*   Use Babel for compiling code
*   Create hooks
*   Manage contexts
*   Create production build

---

### 1. Welcome to REACT
>   Branch feature/1-welcome_to_react   

In this part I learn more about REACT development's history. 
I also learn the tools needed to create a REACT development environment with developer tools, node.js, etc...

---

### 2. JavaScript for REACT
>   Branch feature/2-javascript_for_react

*   Memento 2-1 
    >   memento_2-1.js 
    *   Template strings @line 14
    *   Passing arguments in function @line 31
    *   Default Argument @line 37
    *   Arrow functions @line 43
    *   Returning objects in arrow function @line 60
    *   Destructuring object @line 68
    *   Destructuring arrays @line 82
    *   Object literal enhancement @line 88
    *   The Spread operator @line 105
*   Memento 2-2
    >   memento_2-2.js
    *   Fetch - XMLHttpRequest mandatory - line 10
    *   Simple promise with Fetch - line 13
    *   Async / Await - line 20
    *   Building promises - line 33
    *   Classes - line 51

---

### 3. Functional programming
>   Branch feature/3-functional_programming

*   Memento 3-1
    >   memento_3-1.js
    *   Imperative vs Declarative
    *   Data transformation - Filter 
    *   Data transformation - Map 
    *   Data transformation - Reduce
    *   Recursion
    *   Composition
    *   High-order function
*   Memento 3-2
    >   memento_3-2.js
    *   Functions over values
    *   Transforming data
    *   Higher-order functions
    *   Composition
    *   Start the clock

---

### 4.  How REACT works
>   Branch feature/4-how_react_works

*  First components
    >   chapter_four.html & chapter_four.js
    *   Page setup
    *   React elements
    *   ReactDOM / children
    *   React components

---

### 5.  REACT with JSX & Webpack
>   Branch feature/5-react_with_jsx

*   Components & REACT Fragments
    >   chapter_five.html & chapter_five.js
    *   Recipe component
    *   Use array of objects as props
    *   Create fragment to avoid useless tags

*   Webpack application
    >   recipes-app folder

    *   Webpack step-by-step: React + Babel
        *   Create and navigate in your project folder
        *   ```$ npm init -y``` create npm environment with default choices 
        *   ```$ npm install react react-dom serve```
        *   Create app skelethon (example) :
            -   node_modules (already created)
            -   package.json (already created)
            -   package-lock.json (already created)
            -   index.html
            -   /src (folder)
                -   index.js
                -   /data (folder)
                    -   app-name.json   
                -   /components (folder)
                    -   ComponentNameOne.js
                    -   ComponentNameTwo.js
                    -   ...
        *   Create your differents components, linked them with import/export and make the final join in your index.js
        *   ```$ npm install --save-dev webpack webpack-li``` 
        *   At the root of your project, create a file called **webpack.config.js**
        *   Check if your **dependency tree** is ok: check if evryone component is imported to another and then if the parent component is import to its own parent etc, until you reach **index.js** file
        *   Note that the used import statements are not presently supported by most browsers or by node.js, the reason why we will use Babel who will convert them into classic 'require('path.file')
        *   ```$ npm installl babel-loader @babel/core --save-dev``` 
        *   Edit your **webpack.config.js** file (see example)
            *   Set entry point
            *   Set output point
            *   Set source map (debugger help in browser)
            *   Define module special configuration
            *   ...
        *   ```$ npm install @babel/preset-env @babel/preset-react --save-dev``` to install presets for Babel, wich tells Babel how to compile our code
        *   At the root of your project, create a file called **.babelrc**
        *   Add the following lines:    
            ```{```     
            ```     "presets": ["@babel/preset-env", "@babel/preset-react"]```  
            ```}``` 
        *   ```$ npx webpack --mode development```
        *   You can add npm script adding this to your **package.json** file :  
            ```"scripts":{```   
            ```     "build": "webpack --mode production"```  
            ```}```  
            Then use ```$ npm run build``` to create the bundle
    
*   Create REACT app command
    >   create-react-app folder (result of following commands)

    *   ```$ npm install -g create-react-app``` as this install is global you may need sudo privileges to run it
    *   ```$ create-react-app project-folder-name```
    *   Within the project folder: O
        *   Open **src/App.js**, here you can configure the root component and import other component files
        *   Run ```$ npm start``` to run application, ```$ yarn start``` also works
        *   Run ```$ npm test``` or ```$ yarn test``` to run test of all files in interactive mode
        *   Build the bundle with ```$ npm run build``` or ```$ yarn build```     

---

### 6.  REACT State Management
>   Branch feature/6-react_state_management

*   Star Rating application
*   Color Rating application
*   Color Provider and Rating application
    *   Choose a color to add within a color picker
    *   Choose your custom name for your color
    *   Add your custom color
    *   Delete a color
    *   Rate your color within a star rating component
    *   Upgrade / Downgrade your rating at every moment

---

### 7. Enhancing components with Hooks
>   Branch feature/7-react_state_management
*   Star Rating application
*   Color Rating application
*   Color Provider and Rating application
    *   Choose a color to add within a color picker
    *   Choose your custom name for your color
    *   Add your custom color
    *   Delete a color
    *   Rate your color within a star rating component
    *   Upgrade / Downgrade your rating at every moment

---

### 8. Incorporating Data
>   Branch feature/8-incorporating_data


---

### **BeCode** Intensive Bootcamp     
This project took place in my leearning path in BeCode (see below) to full stack web developer.
In seven months you have a wonderful luck to become a great web developer. Inclusion and share spirit is your daily feeling !  
Give maximum to get maximum :rocket:

### COLLABORATION
Hello, I'm [Nicolas](https://www.linkedin.com/in/nicolas-denoel/), welcome to my all new life as developer.
After 15 years as manager and sales director it's time for me to make my dreams come true and to become a developer.
Autonomous learner, problem solver and commited team member, I'm ready for challenges !
So feel strongly to give me any recommandation about my work, advice for future projects, and all comments you want.  
If you are looking to hire a strong hybrid and atypical profile in your team do not hesitate to contact me to check if we can share a project together !  
Thanks by advance for that :heart:  

### TIMELINE
[:calendar: Discover the great timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2020-06-27)  

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)



