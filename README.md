#QCS (Quantum Compliance Service)

##project requirement:
 - [Node.js] runtime
   - npm 
 - [Ruby] runtime 
  - gem
>Windows :recommend install by [rubyinstaller]
  
 - [Gulp]
```sh
$ npm install -g gulp
```
 - [Bower]
```sh
$ npm install -g bower
```
 - [Sass]
```sh
$ gem intall sass
```
>Windows : SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
https://gist.github.com/luislavena/f064211759ee0f806c88

 - [Compass]
 ```sh
 $ gem install compass --pre
 ```
##Usage:
 
###[In project root folder]

 - install 3rd-party tools and library first.
```sh
$ npm install 
$ bower install
```
 - local testing server.
```sh
$ gulp serve
```
 - build and release. it will build into "dist" folder.
```sh
$ gulp
```
 
 
 
[Node.js]:https://nodejs.org/
[Ruby]:https://www.ruby-lang.org/
[rubyinstaller]:http://rubyinstaller.org/
[Gulp]:http://gulpjs.com/
[Bower]:http://bower.io/
[Sass]:http://sass-lang.com/
[Compass]:http://compass-style.org/
=======