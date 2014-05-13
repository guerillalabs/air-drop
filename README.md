# Air-Drop

A little something to kick off all your campaigns.

## About Air-Drop

Air-Drop is an all-in-one Jekyll template that includes the SASSpool framework. It's designed to get a project up and running as quickly as possible while remaining flexible enough to become the production base for any site.

Look, we realize you can't use Jekyll for a lot of client projects – us either. So what gives? The reason we love Jekyll for blocking out a site is that we can easily manage the project by using includes and variables without relying on another language like PHP. Our files are also served locally from a real server for proper URLs and testing. Then, we're left with static HTML files, that are easy to upload anywhere and show off to clients. And, when you need to move past Jekyll, simple delete the Jekyll specific folders out of your project and keep going.

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

Running `grunt` will start the Jekyll server and the task that watches for changes to your files. The server is accessible from `localhost:4000` (or `0.0.0.0:4000` depending on which URL style you prefer). To kill the server, type `ctrl` + `c` in the terminal.

### Important note for Github pages use

If you're using this project on github pages, a small modification needs to be made to the `.gitignore` file. Open it and remove the line that says `vendor/`. This ensures that the front-end dependencies are on github when their Jekyll command runs — otherwise, your packages will not be available and moved into the _site folder at build time.

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

Each URL is prepended with `$baseurl` variable. Since URLs in CSS are part of stings, you'll want to use the Sass [interpolation syntax](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_). A asset link will look like `@include font-face('BLOKKRegular', '#{$baseurl}type/BLOKKRegular/webfonts/BLOKKRegular');`.

The `$baseurl` variable is set in the `sass/_1_foundations/_vars.scss` file. When you're ready to go to production, the variable can be set to `/` to change over to absolute URLs everywhere.

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

## Relative Sizing Units

Because Air-Drop still supports IE8, we need a good way to deal with rem units in CSS. There are helper functions to calculate rems, ems and percentages. You can find them all in `sass/_1_foundations/_mixins/_units.scss`.

The philosophy behind our use of ems and rems follows closely with the thoughts of [Jeremy Church](http://j.eremy.net/confused-about-rem-and-em/). tl;dr – use ems to size text, and most other things; use rems when you need to ensure horizontal spacing (like gutters) stays consistent across contexts.

The rem() function should be used exclusively when using rem units, so those values may be converted to pixels for old IE stylesheets. The em() function is available for your convenience to avoid having to do calculations, but it isn't required.

To make an old IE stylesheet, set `$rems: false;` at the top of the file.

**Important note:** if you use ems for media queries (and you should), make sure that they are always based off of the default browser text size and not the `$base-font-size`. So, something like `@media (min-width: em(480, 16)) {` should always be used.

## Media Queries

A media query mixin – `sass/_1_foundations/_mixins/_media-queries.scss` – is provided to ease working with older versions of IE. Use of the mixin is provided at the top of the file, but in brief, here's how they work:

``` sass
.test {
    background: #fff;
    @include media('screen and (min-width: 400px) and (max-width: 600px)') {
        color: #000;
    }
}
```

The entire query part of the media query is passed as an argument. You can use variables for your dimensions by using interpolation – like #{$bp-small}

You can specify when styles in media queries shouldn't be sent to "fallback" browsers.

``` sass
.test {
    background: #fff;
    @include media('screen and (min-width: 400px) and (max-width: 600px)', false) {
        color: #000;
    }
}
```

## Variables, Spacing and Typography

The `sass/_1_foundations/_vars.scss` is very important for each project. This is where font sizes, dimensions, grid gutters and colors are all set.

As much as possible, these variables should be used throughout your project to aid in maintenance and making changes.

### Typography

Some silent classes are provided for use in setting font-sizes throughout the site. Note that each silent class includes media queries, so that while we are using these with `@extends`, the media queries will still apply and fonts will resize responsively without extra markup.

### Spacing

Typically, we use multiples of the `$vertical-unit` variable for vertical spacing with text, and we use one of the REM based `$spacing` variables for horizontal spacing. This is to keep horizontal spacing (like for grid gutters) consistent across contexts where EMs would vary.

### Colors

Many color variables are provided by default, but there is also a `_shades.scss` mixin that allows you to quickly, and consistently, lighten and darken the colors throughout your site.

## Grids

Air-Drop includes the excellent csswizardry-grids by Harry Roberts. Head over to [the github repo](https://github.com/csswizardry/csswizardry-grids/) for full instructions on usage.

All of the variables that control the grid are in `sass/_1_foundations/_vars.scss`.

Be sure to comment out the white space between the individual grid items. Like so:

``` html
...
</div><!--

--><div class="grid__item" ...
```

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