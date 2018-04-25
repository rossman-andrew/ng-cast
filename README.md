# ng-cast
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

## ng-cast: YouTube with AngularJS
In this sprint you are going to work with another front-end framework. Your task is to rebuild the YouTube Video Player app using AngularJS.

Typical Real-Life Scenario: Your company's CTO is undecided about the most appropriate front-end framework to use and wants to explore building a website using multiple technologies before ultimately choosing the best one.

## AngularJS is Interesting in a Few Key Ways
* AngularJS uses a mix of standard and custom HTML elements and attributes that transforms standard HTML into HTML with superpowers.
* When using AngularJS, developers don't have to think about when to re-render or how to extract values from the DOM (for example, a developer does not need to query an input element to obtain its current value).
* AngularJS improves code quality and modularity because your modules never directly reference external dependencies. More precisely, AngularJS supplies dependencies to your modules in a way that decouples your code from any other code.

## High-Level Goals of This Sprint
* Learn AngularJS and learn how to think about web apps as components in Angular.
* Continue practicing interactions with a REST API (in this case, the YouTube Data API)

## Thinking in Components
When designing and building front-end applications, a good approach is to break the functionality of the application apart into small, easily understandable and reusable pieces, often called components. In many ways AngularJS is similar to React in that it uses custom HTML elements as a way to define components. Angular takes this idea a step further by using directives to give those components super powers.

## App Organization
Here's how the app is organized:
* app - The top level container for the entire application.
* search - Responsible for knowing and communicating information about the search input field
* videoPlayer - Responsible for playing a single video and displaying information about it
* videoList - A container component responsible for populating video list entry components
* videoListEntry - A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be shown in the videoPlayer component
Unlike Backbone, models in AngularJS are just regular JavaScript objects.

## Project Set Up
* npm install-g live-server

* In a new Terminal tab, start the Video Player app by running live-server
* Make a change in one of the JavaScript files in the src/ directory
* Be amazed as your browser should magically refresh with the compiled changes
We'll be covering servers in extensive detail later. For now you can just run this command and ignore the complexity of what it means or how it works.

**IMPORTANT: you must use live-server in this sprint**

**npm Scripts**
* Write an npm start script that runs the instructions from the previous step

**Testing with Karma**
Angular recommends the use of Karma for testing. Karma runs tests by opening a browser window. Much like live-server, Karma watches for changes to your code and re-runs the tests automatically. Additionally, Karma provides a debug interface right from the test page! Like in previous sprints, use npm test to run tests. When the browser opens, Karma only displays a summary. To see the actual tests, click debug.

## Try the Problem Tutorial
During the "Try the Problem" phase, work through the tutorial, [A simple 'Hello World' Tutorial](http://viralpatel.net/blogs/angularjs-introduction-hello-world-tutorial/) to get familiar with some of the basic concepts.

## Bare Minimum Requirements
Your ultimate goal is to build a working app that looks like the one in the animated gif below, using the included tests as your guide. After completing the Bare Minimum Requirements, you'll be able to search, display, and play any video from YouTube.

**Initial Steps**
* Explore the codebase to get an understanding of each component's responsibility. Relate the code you see to the previous diagram and ensure you understand how the components relate to each other. An essential aspect of this first step is to understand the HTML for each component too.
* Inside of src/components/app.js, write the code that will render this component to the DOM. Not all of the tests in appSpec are pertinent at this time. Be sure to follow the MVP practice, that is writing the minimum code at each step.

**Configure Mocked Data**
When building out front-end applications, a hightly productive technique is to temporarily ignore the complexity of working with real data (via an API) by making use of "mocked" sample data. For the next several steps, you're going to use the sample data contained in src/data/exampleVideoData.js.
* Include src/data/exampleVideoData.js in index.html so it can be used by your application

**Create a Dynamic Video List Component**
Your first goal is to build the videoList component and its partner component, videoListEntry, that together render whatever list of videos is supplied to them. When it's all set up, you should see the titles, thumbnails, and descriptions of some Angular Tutorials on the page.
* Pass the data from exampleVideoData into the videoList component
* Refactor the videoList component to dynamically render one videoListEntry component for each video object in exampleVideoData, passing in the video data to videoListEntry
* Refactor the videoListEntry component to dynamically render based on the video object it receives
* Resolve the issue show in the console: GET <funny-looking-url> 404 (Not Found)
* Make sure the tests for videoList and videoListEntry are passing. You can open the tests with npm test

**Create a Dynamic Video Player Component**
Next, do the same thing with the videoPlayer component, i.e., have the component render whatever video is supplied to it.

YouTube videos are played by passing a source url to the iframe tag inside the videoPlayer component. The video associated with the id included after https://www.youtube.com/embed/ will get played.
* Pass a single video from exampleVideoData into videoPlayer
* Update videoPlayer to play the video it is passed and display its title and descriptions
* Make sure the tests for videoPlayer are passing. You can open the tests with npm test

**Hook the Video List and Video Player Components Together**
Now it's time to make these two components interact. When you are finished with this section, the videoList component will be interactive, meaning that when you click on a video title, that video will be shown in the videoPlayer component.

In most MVC architectures, sibling components should not directly access each other, so they need the help of a parent component to manage communication between them. In this case, app is the parent component for the sibling components videoList and videoPlayer.
* Initialize the internal state of app to keep track of all the videos in the video list and the current video in the player.  Pass this information down to its children components, videoList and videoPlayer. Continue to use the example data.
* Devise a way to receive the result of a click event inside of a videoListEntry so that when a title is clicked, that video is displayed in the player.
* Make sure all the tests for app are passing. You can open the tests with npm test

**Set Up Interactions with the YouTube API**
You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.
* Go to Google's YouTube API
* If prompted, select a project or create a new one. It doesn't matter what you name a new project
* Click Enable and then Go to Credentials
* Select Web browser from the drop-down and the Public data radio button
* Give your key any name, leave the optional field blank, and click Create.
* Make your key available to the rest of your application from a new file, src/config/youtube.js

**Create a Reusable API Helper**
It is common to encapsulate code that performs a specific API action into its own module. Upon completion of this step, you will have a reusable service for making queries to the YouTube API.

To search for YouTube videos, you'll use the API's Search:list endpoint. To help keep your code organized, write a helper function that is solely responsible for interacting with this endpoint.
* In services/youTube.js, create an Angular service to fetch data from YouTube's API.
* Use the Angular provider $http to send a GET request to the search endpoint. You should never use jQuery in this sprint
* Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
* The $http provider should receive a params object with the following properties:
  * query - the string to search for
  * maxResults - the maximum number of videos to get, which should default to 5
  * key - an authorized YouTube Browser API key
  * Only fetch embeddable videos

**Implement Simple Search**
Incorporate the search component into the application. After completing this step, the app will be capable of accepting a phrase in the input field and when the user clicks on the search button, the various components will update appropriately with the results obtianed from the YouTube API.

Implement the search component, making use of the YouTube service you just created.
Devise a way to app to receive the result of performing a search operation whenever a user clicks on the button. Update all other views as a result of this operation.

**Initialize the App With Live Data**
The last step will be to replace your mocked data with live data. To do this, the app should initialize itself by executing a "default" search and populating its components with the results of this search.

Before integrating live data, you should take a minute to appreciate how far you got with the exampleVideoData. Now you can tackle the complexity of starting to use actual data in isolation, and assuming the shape of the live data is the same as the data you mocked out, everything will continue working. If you made your helper correctly, this following section can be completed rather quickly.
* As you've done with other modules, make youTube available for consumption by your app component
* Replace exampleVideoData during the initialization of app with empty initial values, appropriate to the type of values it is expecting
* Invoke the search function and update the state of the app with videos returned from the youTube service

## Resources
* [AngularJS Components (official docs)](https://docs.angularjs.org/guide/component)
* [One Way Data Binding](https://toddmotto.com/one-way-data-binding-in-angular-1-5/)
* [Stateless Components in Angular](https://toddmotto.com/stateless-angular-components/)
* [Comparing Directives and Components](https://toddmotto.com/exploring-the-angular-1-5-component-method/)
* [The AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)