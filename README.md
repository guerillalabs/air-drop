# Air-Drop

A little something to kick off all your campaigns.

## About Air-Drop

Air-Drop is an all-in-one Jekyll template that includes the SASSpool framework. It's designed to get a project up and running as quickly as possible while remaining flexible enough to become the production base for any site.

Look, we realize you can't use Jekyll for a lot of client projects – us either. So what gives? The reason we love Jekyll for blocking out a site is that we can easily manage the project by using includes and variables without relying on another language like PHP. Our files are also served locally from a real server for proper URLs and testing. Then, we're left with static HTML files, that are easy to upload anywhere and show off to clients. And, when you need to move past Jekyll, simple delete the Jekyll specific folders out of your project and keep going.

## Requirements

These items must be installed on your computer:

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

## URLs

A big part of the concept for Air-Drop is to produce a static HTML site that can be sent anywhere. A traditional problem with that is how URLs are structured. I've always preferred absolute URLs (and you should, too), but they're only possible when your site is sitting at the root of a domain on a server – which isn't always the case.

So, all URLs used in Air-Drop – either within Jekyll or SASS files – have a special format they should follow.

### URLs in Jekyll

Each URL is prepended with the `{{ relative }}` variable. So, a link to a CSS file will look like `<link rel='stylesheet' href='{{ relative }}css/screen.css'>`.

The `{{ relative }}` variable is set at the top of the `_includes/head.html` file. When you're ready to go to production, the variable can be set to `/` to change over to absolute URLs everywhere.

### URLs in SASS

Each URL is prepended with `$base-url` variable. Since URLs in CSS are part of stings, you'll want to use the SASS [interpolation syntax](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_). A asset link will look like `@include font-face('BLOKKRegular', '#{$base-url}type/BLOKKRegular/webfonts/BLOKKRegular');`.

The `$base-url` variable is set in the `sass/_1_foundations/_vars.scss` file. When you're ready to go to production, the variable can be set to `/` to change over to absolute URLs everywhere.

## Naming Conventions

How CSS classes are named have become a matter of debate over recent years. For consistency, we're documenting our naming convention here.

We use the BEM (block, element, modifier) naming convention as honed by [Harry Roberts at CSS Wizardry](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

### Block

This is a "module" of the page. Let's go with "nav".

``` html
<ul class="nav">
    ...
</ul>
```

### Element

A distinct element within the block. We try to not rely on HTML elements for this. HTML elements are best for hierarchy, while classes are for styling. A heading in a sidebar may need to change from an h2 to h3 on different pages to keep the document outline in tact, but they class can stay the same to keep the styling correct in each situation.

Two underscores indicate the element portion of the class.

Let's add some links to our navigation.

``` html
<ul class="nav">
    <li class="nav__item"><a href="#">Nav Item</a></li>
    <li class="nav__item"><a href="#">Nav Item</a></li>
</ul>
```

### Modifier

A modifier changes a block or element that has already been defined. Really popular modifiers are for buttons, where you'll end up with classes like `.btn--large`, `btn--small`, `btn--disabled`, and others.

Two hyphens indicate the modifier portion of the class.

Let's add a modifier to our navigation.

``` html
<ul class="nav nav--inline">
    <li class="nav__item"><a href="#">Nav Item</a></li>
    <li class="nav__item"><a href="#">Nav Item</a></li>
</ul>
```

Note that the new class is added in addition to the base "block" class.

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