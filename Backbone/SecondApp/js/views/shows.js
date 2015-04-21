// js/views/shows.js

var app = app || {};

// Show Item view
// --------------

// The DOM element for a show item...
app.ShowView = Backbone.View.extend({

  //... is a list tag.
  tagName: 'li',

  // Cache the template function for a single item.
  template: _.template($('#show-template').html()),

  // The DOM events specific to an item.
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  // The ShowView listens for changes to its model, rerendering. Since there's
  // a one-to-one correspondence between a **Show** and a **ShowView** in this
  // app, we set a direct reference on the model for convenience.
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  // Rerenders the titles of the show item.
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$input = this.$('.edit');
    return this;
  },

  // Switch this view into 'editing' mode, displaying the input field.
  edit: function() {
    this.$el.addClass('editing');
    this.$input.focus();
  },

  // Close the 'editing' mode, saving changes to the show.
  close: function() {
    var value = this.$input.val().trim();

    if (value) {
      this.model.save({ title: value });
    }

    this.$el.removeClass('editing');
  },

  // If you hit 'enter', we're through editing the item.
  updateOnEnter: function(e) {
    if (e.which === ENTER_KEY) {
      this.close();
    }
  }
});