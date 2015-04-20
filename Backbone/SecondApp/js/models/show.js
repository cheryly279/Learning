// js/models/show.js

var app = app || {};

// Show model
// ----------
// Our basic **Show** model has 'title' attributes.

app.Show = Backbone.Model.extend({

  // Default attributes ensure that each show created has a 'title' key.
  defaults: {
    title: ''
  }
});