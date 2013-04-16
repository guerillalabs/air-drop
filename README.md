# Air-Drop

A little something to kick off all your campaigns.

## Submodules

This repository contains submodules (which will not be downloaded as part of the zip). Each submodule will need to be downloaded separately (if you aren't cloning the repo) and placed in the correct position.

* path = sass/SASSpool
* url = git://github.com/guerillalabs/SASSpool.git

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