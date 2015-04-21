// js/views/app.js

var app = app || {};

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
app.AppView = Backbone.View.extend({

  // Instead of generating a new element, bind to the existing skeleton of
  // the app already present in the HTML.
  el: '#tv-app',

  // Delegated events for adding shows to list
  events: {
    'keypress #new-show': 'createOnEnter'
  },

  // At initialization we bind to the relevant events on the 'Shows'
  // collection, when items are added or changed. Kick things off by
  // loading any preexisting shows that might be saved in *localStorage*.
  initialize: function() {
    this.$input = this.$('#new-show');
    this.$existing = this.$('#existing');

    this.listenTo(app.Shows, 'add', this.addOne);
    this.listenTo(app.Shows, 'reset', this.addAll);
    this.listenTo(app.Shows, 'all', this.render);

    app.Shows.fetch();
  },

  // Rerendering the app - rerending of specific shows will happen in the Shows view.
  render: function() {
    if (app.Shows.length) {
      this.$existing.show();
    } else {
      this.$existing.hide();
    }
  },

  // Add a single show to the list by creating a view for it, and
  // appending its element to the '<ul>'.
  addOne: function( show ) {
    var view = new app.ShowView({ model: show });
    $('#show-list').append( view.render().el );
  },

  // Add all items in the **Shows** collection at once.
  addAll: function() {
    this.$('#show-list').html('');
    app.Shows.each(this.addOne, this);
  },

  // Generate the attributes for a new show item.
  newAttributes: function() {
    return {
      title: this.$input.val().trim()
    };
  },

  // If you hit return in the main input field, create new Show model,
  // persisting it to localStorage.
  createOnEnter: function(event) {
    if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
      return;
    }

    app.Shows.create(this.newAttributes());
    this.$input.val('');
  }
});