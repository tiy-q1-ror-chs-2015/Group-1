//Contact - single contact model
var Contact = Backbone.Model.extend({
  urlRoot: 'http://localhost:9000/contacts',
  template: _.template(templates.addedContact),
  defaults:function(){
    name: 'John Doe'
  },
  initialize: function(){
    console.log('contact has been initialized');
  },
  toJSON: function(){
    return{contact: this.attributes};
  },
  renderAddedContact:function(){
    console.log('added contact rendering');
    var compiled = this.template(this.attributes);
    console.log(compiled);
    $('.allcontacts-view').append(compiled);
  }
});
