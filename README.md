#create_a_framework_ema
##a simple http framework

[![Build Status](https://travis-ci.org/emlandi/create_a_framework.svg?branch=master)](https://travis-ci.org/emlandi/create_a_framework)

Note: this has not been published on npm, but it is publish-able. In order to publish to npm, the steps are as follows:

- Requires package.JSON with 'name' and 'version' number. Module name cannot alrady exit in the npm respoistory.
- Requires that user is registered on npm. Create a user, if one already does not exit, by typing npm adduser in the terminal.
- Test to see if the npm user credentials are stored on your client machine by typing npm config.
- Use npm publish to publish package.
- Use npm unpublish to remove the package from npm.


#How to Use the create_a_framework_ema Framework:

##Installation-

First install: npm install create_a_framework_ema

Then require: var ema = require('create_a_framework_ema')

##Methods-

*.get
*.post
*.put
*.patch
*.delete
*.writeHeadPlain
*.writeHeadHTML
*.writeHeadCSS
*.writeHeadJSON
*.writeSync

##Using .get-

  myRouter**.get**('/secret', function(req, res) {
    //code here
  });

This will send a GET request to the url '/secret'. The **.get** can be interchanged with other methods, .post, .put, .path and/or .delete.

##Using .writeHeadCSS-

  myRouter**.writeHeadCSS**(res);

This one line automatically sets the status to 200 and content type to css. Essentially it replaces the following three lines of code:
  res.writeHead(200, {
    "Content-Type": "text/css"
  });

  The other .writeHead methods for HTML, CSS & JSON work in the same way, automatically setting the status and content type.

##Using .writeSync-

  myRouter**.writeSync**(res,'/public/index.html');

Where *'/public/index.html'* is the file path. This incorporates the 'fs' library and will read the supplied directory file and wtite the results.






