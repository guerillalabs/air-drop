# Air-Drop

A little something to kick off all your campaigns.

## About Air-Drop

Air-Drop is an all-in-one Jekyll template that includes the SASSpool framework. It's designed to get a project up and running as quickly as possible while remaining flexible enough to become the production base for any site.

Look, we realize you can't use Jekyll for a lot of client projects – us either. So what gives? The reason we love Jekyll for blocking out a site is that we can easily manage the project by using includes and variables without relying on another language like PHP. Our files are also served locally from a real server for proper URLs and testing. Then, we're left with static HTML files, that are easy to upload anywhere to show off to clients. And, when you need to move past Jekyll, simply delete the Jekyll specific folders out of your project and keep going.

## Requirements

These items must be installed on your computer:

* [Node.js](http://nodejs.org)
* [Bower](http://bower.io)
* [Sass](http://sass-lang.com)
* [Jekyll](http://jekyllrb.com)
* [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli)

Though not a requirement, to take advantage of LiveReload, you'll want to install the [browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

## Getting Started

When you first download the repo, you will want to open the project directory in terminal and run `npm install`. This will download all the packages you need to run grunt, sass and autoprefixer on this project.

Next, run `bower install`. This will download jQuery and other third-party libraries used in this project.

Running `grunt` will start the Jekyll server and the task that watches for changes to your files. The server is accessible from `localhost:4000` (or `0.0.0.0:4000` depending on which URL style you prefer). To kill the server, type `ctrl` + `c` in the terminal. (**Note:** the `grunt` command will fail if you run it at this point because no Sass files are present in the project. See 'Including a Sass Library' below for more information.)

### Important note for Github pages use

If you're using this project on github pages, a small modification needs to be made to the `.gitignore` file. Open it and remove the line that says `vendor/`. This ensures that the front-end dependencies are on github when their Jekyll command runs — otherwise, your packages will not be available and moved into the _site folder at build time.

### Including a Sass Library

Air-Drop was developed as a companion to the [Sasspool](https://github.com/guerillalabs/Sasspool) framework. To include Sasspool in your project, open the project directory in terminal and run:

`svn export https://github.com/guerillalabs/Sasspool/trunk/sass --force`

This will bring over the "sass" folder from the Sasspool repository (without any versioning history, as you will want to modify the files to suit your project). Air-Drop is configured to compile Sasspool files automatically, so once you run `grunt`, everything should work as expected.

You can also include other Sass libraries, as needed. Note that Air-Drop uses Autoprefixer, so you may want to visit your `Gruntfile.js` to make sure the settings meet the needs of your library.

Air-Drop is set to not commit Sass files to the repository (to make it easier to develop the Air-Drop project), so you will want to remove the `sass/*` line from your `.gitignore` as you begin work if you are using git for version control.

### Using Sasspool

Sasspool has a lot of functions and helpers that you will want to be aware of. Read the documentation on [the Sasspool page](https://github.com/guerillalabs/Sasspool) for full details on how to use it best.

## URLs

A big part of the concept for Air-Drop is to produce a static HTML site that can be sent anywhere. A traditional problem with that is how URLs are structured. I've always preferred absolute URLs (and you should, too), but they're only possible when your site is sitting at the root of a domain on a server – which isn't always the case.

So, all URLs used in Air-Drop – either within Jekyll or Sass files – have a special format they should follow.

### URLs in Jekyll

Each URL is prepended with the `{{ baseurl }}` variable. So, a link to a CSS file will look like `<link rel='stylesheet' href='{{ baseurl }}css/screen.css'>`.

The `{{ baseurl }}` variable is set in the top of the `_includes/head.html` file. If you have multiple head files used throughout the site, include these variables at the top of each:

``` liquid
{% capture lvl %}{{ page.url | append:'index.html' | split:'/' | size }}{% endcapture %}
{% capture baseurl %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}
```

You'll notice the same variables set at the top of each post, just beneath the YAML.

When you're ready to go to production, two things need to happen to change to absolute URLs. First, do a find and replace across the entire project to get rid of the above two variable lines. Next, do a find and replace across the entire project to replace `{{ baseurl }}` with `{{ site.baseurl }}`.

This concept is based off of this [this stackoverflow question](http://stackoverflow.com/questions/7985081/how-to-deploy-a-jekyll-site-locally-with-css-js-and-background-images-included).

### URLs in Sass

You'll need to take care of the relative/absolute URL switch in your Sass. The Sasspool framework handles this automatically.


## Adding JavaScript Libraries

To add a new JavaScript library – either home-grown or third-party – you'll want to edit `Gruntfile.js`. In the concat task, you'll find something like this:

``` javascript
concat: {
    dist: {
        files: {
            'js/global.js' : [
            'js/scripts/logging.js'
            ]
        }
    },
    ...
```

The first line after the `files: {` line is the file we're writing to. Add your new libraries to the list after `'js/scripts/logging.js'` (don't forget your commas). Home grown libraries should go in the `js/scripts` directory (so they aren't compressed with Uglify) and third-party libraries should end up in the `vendor` directory because they should be managed with Bower. This is a great way to bring in components from libraries like Bootstrap.