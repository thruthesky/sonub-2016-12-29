# SONUB 0.2
Social Netowrk Hub

* Make it simple on its archtecture.
    * No more ionic & ionic clould.
    * No more xbase.


# TODO

    - [] photo uplod with firebase
        user philgo id as email, and member idx as idx.
        1. register or login to philgo.
            1.1 register or login to firebase with the "user_id@philgo.com", "Password-{user_idx}"
    - [] photo post like/dislike/report
    - [] philgo point update.
        - point on post and comment.
        - point one time update for event. 'action=point-code&code=helloapp'


    - [] JOB - don't let user input city, province. let them select to reduce human error on input.
    - [] JOB - don't let user input input Work experience, let them select.
    - [] JOB - permission on deleting photos on firebase storage.
    - [] JOB - @see "fileupload" firebase storage image cache double check.


    - [] @done philgo post test crud.
    - [] @done philgo api database search
    - [] @done Do post/comment create/update/delete without passing user id & session id on end-side api.
    - [] @done test on philgo api register.ts. member register login ==> data check ==> update ==> data check


    - [x] @deprecated - no more xbase
        - xbase-api needs https connection.
        - philgo-api is already has https connection.
        - one possible way to solve is to use philgo.com MySQL for xbase api.
            -- converting may be simple since it is using ezSQL.

    - [] Simple input prompt box using ionic alertCtrl
        @see job-list::onClickDelete()

    - [] @deprecated Search on Xbase
    - [] @deprecated Search on Philgo of google.
    - [] @deprecated Social login & Register/log in philgo and xbase 
        - @comment : to work on this part, livereload should work on GenyMotion. as of ionic cli 2.1.12 & app-scripts 0.0.46, when running in genymotion, cordova is working but when running with livereload, cordova is not found.

    - [-] @deprecated @later Need to improve Xbase login password for security.
    - [-] @deprecated @later Philgo Logout and Xbase auto logout. At this time, when a user logs out in philgo, the user does not log out in xbase.

    - [-] @deprecated @done *Philgo Login and Xbase Auto Login.*
    - [-] @deprecated @done *Philgo Registration and Xbase auto Registration

# Flowcharts


* [Home](https://docs.google.com/drawings/d/1vq_-wilfcf8XVJ-xC7CZagOiZ09LrjUEXcPJsrRltQ4/edit)
* [Register](https://docs.google.com/drawings/d/1Bw22pNiOE5jLUcLCUPVnxVidpg_mE_GCm2zPfCwQJdk/edit)
* [Login](https://docs.google.com/drawings/d/1KIF1dG8AqVWj5qQ6Y5PS3SeMZRJ50JAK5d1hdje4flc/edit)
* [JOB](https://docs.google.com/drawings/d/1oTbPXtTxVlZIzGnPcPzTIYC1d6bcL5vvxMCUpf8pxIs/edit)


# Resources

* [The Best App Design Resouces](https://market.ionic.io/themes)
* [Design Photos](https://www.shutterstock.com/en/)
* [Mark Down  Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Github MarkDown Guide](https://guides.github.com/features/mastering-markdown/)
* [Resources for Design and Layout](https://drive.google.com/drive/u/0/folders/0B4u3qiWTgOC-UVA1ZkFkYjlQNk0)




# TEST

* Do not test or stress the real server.
* @see philgo-api README.md




# INSTALL

* rmdir /s node_modules
* npm install --verbose
* git submodule update --init
    * or git submodue add philgo-api xbase-api firebase-api into src folder
        * git submodule add https://github.com/thruthesky/philgo-api src/app/api/philgo-api
        * git submodule add https://github.com/thruthesky/firebase-api src/app/api/firebase-api

* git submodule foreach git checkout master


* npm install @ng-bootstrap/ng-bootstrap --save
* npm install @types/lodash --save

* npm install firebase --save


# Layout of the app & Component

* @see [App Layout](https://docs.google.com/document/d/1ZEplms60Dr9U4gMCvqxjMEAbyrH5duPkifEqxuPUiYc/edit#)

# User Registration

* @see [User Registration Doc](https://github.com/thruthesky/sonub/tree/master/src/pages/register)

# User Login

* @see [User Login Doc](https://github.com/thruthesky/sonub/tree/master/src/pages/login)



# Language Translation

* @see src/pipes/language.ts

# Security

* When a user logs in through Social,

    * A random password will be generated and that password will be used every where.
    * So, that password must be saved in a secret place.
        * That's the ionic cloud Auth User Data.
    * To register PhilGo and Xbase, use the password.
    * To login, use the password.


# Locations of Philippines

You can get provinces and cities of province like below.

 * @example to get provinces : http://philgo.com/etc/location/philippines/json.php
 * @example to get cities of a province : http://philgo.com/etc/location/philippines/json.php?province=Bohol
 * @example to get all the provinces and cities : http://philgo.com/etc/location/philippines/json.php?province=all

 ````
    http.get( 'http://philgo.com/etc/location/philippines/json.php' )
      .subscribe( re => {
        let data = JSON.parse( re['_body'] );
        this.provinces = data;
        console.log('place:', data);
      });
````
