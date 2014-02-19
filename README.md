# Air-Drop

A little something to kick off all your campaigns.

## About Air-Drop

Air-Drop is an all-in-one Jekyll template that includes the SASSpool framework. It's designed to get a project up and running as quickly as possible while remaining flexible enough to become the production base for any site.

Look, we realize you can't use Jekyll for a lot of client projects – us either. So what gives? The reason we love Jekyll for blocking out a site is that we can easily manage the project by using includes and variables without relying on another language like PHP. Our files are also served locally from a real server for proper URLs and testing. Then, we're left with static HTML files, that are easy to upload anywhere and show off to clients. And, when you need to move past Jekyll, simple delete the Jekyll specific folders out of your project and keep going.

## Requirements

* [Node.js](http://nodejs.org)
* [Bower](http://bower.io)
* [SASS](http://sass-lang.com)
* [Jekyll](http://jekyllrb.com)
* [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli)

Though not a requirement, to take advantage of LiveReload, you'll want to install the [browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

## Getting Started

When you first download the repo, you will want to open the project directory in terminal and run `npm install`. This will download all the packages you need to run grunt, sass and autoprefixer on this project.

Next, run `bower install`. This will download jQuery and other third-party libraries used in this project.

Running `grunt` will start the Jekyll server and the task that watches for changes to your files. The server is accessible from `localhost:4000` (or `0.0.0.0:4000` depending on which URL style you prefer). To kill the server, type `ctrl` + `c` in the terminal.
