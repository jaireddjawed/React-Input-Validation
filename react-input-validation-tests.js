// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by react-input-validation.js.
import { name as packageName } from "meteor/jaireddjawed:react-input-validation";

// Write your tests here!
// Here is an example.
Tinytest.add('react-input-validation - example', function (test) {
  test.equal(packageName, "react-input-validation");
});
