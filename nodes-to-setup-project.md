Follow instructions [Binary Directly from nodejs.org](http://stackabuse.com/how-to-install-node-js-on-ubuntu/)

wget http://nodejs.org/dist/v4.4.2/node-v4.4.2-linux-x64.tar.gz
sudo tar -C /usr/local --strip-components 1 -xzf node-v4.4.2-linux-x64.tar.gz

npm install express
npm install express-generator

```express test-codeceptjs```
run commands specified at end of output
install dependencies:
  $ ```cd test-codeceptjs && npm install```

run the app:
  $ ```DEBUG=test-codeceptjs:* npm start```

browse localhost:3000

```npm install --save-dev codeceptjs```


```codeceptjs init```
Test root is assumed to be /home/<user>/<workdir>/test-codeceptjs

  Welcome to CodeceptJS initialization tool
  It will prepare and configure a test environment for you

Installing to /home/<user>/<workdir>/test-codeceptjs
? Where are your tests located? ```./ui-tests/*_test.js```
? What helpers do you want to use? ```WebDriverIO```
? Where should logs, screenshots, and reports to be stored? ```./ui-tests/output```
? Would you like to extend I object with custom steps? ```Yes```
? Where would you like to place custom steps? ```./ui-tests/helpers```
Configure helpers...
? [WebDriverIO] Base url of site to be tested ```http://localhost```
? [WebDriverIO] Browser in which testing will be performed ```phantomjs```
Steps file created at /home/<user>/<workdir>/test-codeceptjs/ui-tests/helpers
Config created at /home/<user>/<workdir>/test-codeceptjs/codecept.json
Directory for temporaty output files created at `_output`
Almost done! Create your first test by executing `codeceptjs gt` (generate test) command

--
Please install dependent packages globally: [sudo] npm install -g webdriverio

** for `? [WebDriverIO] Base url of site to be tested ` I should have changed to use localhost:3000 **

```sudo npm install -g webdriverio```

```codeceptjs gt```

get the phantom installer:
download phantonjs http://phantomjs.org/download.html

sudo tar xjf phantomjs-2.1.1-linux-x86_64.tar.bz2
sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/share/phantomjs
sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs
sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/bin/phantomjs
**replace phantomjs-2.1.1-linux-x86_64 with the version you want to use**

run 
```phantomjs --webdriver=4444```
```npm start```
```codeceptjs run --steps```


to add to github
create new repository on github.com
follow instructions provided - ie:
#### create a new repository on the command line

echo "# test-codeceptjs" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/diarmaidm/test-codeceptjs.git
git push -u origin master

or push an existing repository from the command line

git remote add origin https://github.com/diarmaidm/test-codeceptjs.git
git push -u origin master