// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: /.*bugzilla\.mozilla.org\/buglist.*/,
  contentScriptFile: [self.data.url("jquery-2.1.1.min.js"), self.data.url("core.js")]
});