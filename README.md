# Demo Page
http://fojacerorockcomar820.ipage.com/Nuvolar

# Nuvolar web app 

Documentation on how the application works
App

The Nuvolar app is a web app where you can search a Github's user typing a username and you will see some information about it.

The home page is a search bar where you can type in a Github user. You will see the matches as you type and then you can 
click on one of them to see more information. You will navigate to a new page that displays user's details like user's avatar, name, repositories, followers, etc.
At this point you can navigate back to the search page when you want.

Internal behavior

When you are typing on the search bar the app consumes the Github API to get the list of users. The same happens to get the repositories, followers and followings information. 

App Criteria

	.There must be a search bar to let the user search by username (login name)
	·After the search is completed, the application displays the list of users along with their avatar and their username on the same page. To simplify the exercise, in case there are too many results you can limit them at a certain maximum.
	·When a list item is clicked, the application navigates to a new page that displays a simple list with all the user details.
	·The new page will also display the list of the user's repositories and followers.
	·The application has to be responsive and optimized for mobile
	·Documentation on how the application works and how to set up and build the project must be provided
	·Make sure that the application is production ready.

## Build & development

This project is generated with Yeoman generator for AngularJS [yo angular generator] version 0.16.0. - lets you quickly set up a project with sensible defaults and best practices. (https://github.com/yeoman/generator-angular) 

Prerequisites

You need to have the following skills and resources available:

	.A terminal and basic knowledge of the command line
	.NodeJS and NPM installed
	.Fundamental JS, CSS and HTML knowledge
	.Yeoman (installation steps: https://github.com/yeoman/generator-angular)

Files

You can find a repo of this project here: https://github.com/inavarrojoaquin/nuvolar

Build 

Type in a terminal 'gulp default' for building and 'gulp serve:prod' to run the environment 
	
	Build
		.gulp default 
  
	Run environment 
 
		.gulp serve:prod
		.The line before gives a url domain to you. You need to open that in a browser and click on "index"






