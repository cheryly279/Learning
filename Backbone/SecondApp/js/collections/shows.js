// js/collections/shows.js

var app = app || {};

// Show collection
// ---------------

// The collection of shows is backed by *localStorage* instead of a remote
// server.
var ShowList = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: app.Show,

  // save all of the show items under the '"shows-backbone"' namespace
  localStorage: new Backbone.LocalStorage('shows-backbone')
});

// Create our global collection of **Shows**.
app.Shows = new ShowList();