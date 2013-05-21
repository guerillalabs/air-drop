# Air-Drop

A little something to kick off all your campaigns.

## Cloning

git push git@github.com:guerillalabs/air-drop--Jekyll.git +master:master

## Submodules

**For the time being, all submodules have been removed from this repo. Some may be added back when this hits 1.0.** In the meantime, below are all the commands needed to work with the submodules properly.

This repository contains submodules (which will not be downloaded as part of the zip). Each submodule will need to be downloaded separately (if you aren't cloning the repo) and placed in the correct position.

* path = sass/SASSpool
* url = git://github.com/guerillalabs/SASSpool.git
* It was added with: git submodule add git://github.com/guerillalabs/SASSpool.git ./sass/SASSpool

### Clone and download all submodules

* git clone --recursive URL
* from http://www.cocoanetics.com/2011/03/cloning-a-git-repo-with-submodules/

If you cloned the repo initially without using the above command, you can run the following command to grab the submodules:

* git submodule update --init

### Update every submodule to the latest version

* git submodule foreach git pull origin master
* from http://stackoverflow.com/questions/5828324/update-git-submodule

### Update a specific submodule to the latest version

* cd into the submodule directory
* git pull origin master
