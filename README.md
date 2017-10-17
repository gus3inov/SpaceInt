# SpaceInt

![N|Solid](https://img.shields.io/npm/v/@cycle/core.svg)     [![AppVeyor](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg)]() [![bitHound](https://img.shields.io/bithound/dependencies/github/rexxars/sse-channel.svg)]() [![CocoaPods](https://img.shields.io/cocoapods/metrics/doc-percent/AFNetworking.svg)]()


# SpaceInt - this is an online visual editor.


![N|Solid](https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-128.png)![N|Solid](https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-128.png)![N|Solid](https://cdn2.iconfinder.com/data/icons/designer-skills/128/sass-128.png)![N|Solid](https://cdn2.iconfinder.com/data/icons/designer-skills/128/github-repository-svn-manage-files-contribute-branch-128.png)![N|Solid](https://cdn.iconscout.com/public/images/icon/free/png-128/gulp-company-brand-logo-328e8b9317c12a08-128x128.png)

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

### Tech

Dillinger uses a number of open source projects to work properly:

* [HTM5](https://www.w3schools.com/html/html5_canvas.asp) - HTML5 Canvas 
* [Material UI](https://github.com/google/material-design-lite) - Material Design Lite (MDL) lets you add a Material Design look and feel to your static content websites.
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Sass](https://cdn.iconscout.com/public/images/icon/free/png-128/gulp-company-brand-logo-328e8b9317c12a08-128x128.png) - Sass is the most developed and stable extension of CSS professional level.


And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd spaceint
$ npm install -d
$ gulp
```
Verify the deployment by navigating to your server address in your preferred browser.

```sh
 http://localhost:3000
 http://192.168.0.101:3000
```

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```

MIT


**Free Software, Hell Yeah!**

