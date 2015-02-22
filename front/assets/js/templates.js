templates = {};

templates.contact = [
  // '<img src = <%= photo %> alt="">',
  '<h3><%= name %></h3>',
  '<p><%= number %></p>',
  '<p><%= email %></p>',
  '<p><%= twitter %></p>',
  '<p><%= github %></p>',
  '<p><%= street %> ',
  '<%= street_2 %></p>',
  '<p><%= city %>, ',
  '<%= state %> ',
  '<%= zip %></p>',
  '<div class="contact-but-wrapper">',
    '<button class="deleteContact">Delete</button>  <button class="showEdit">Edit</button>',
  '<div>',
  '<div class="editForm-wrapper">',
    '<h2>Edit information for <i><%= name %></i></h2>',
    '<form id="editForm" action="">',
      '<input type="text" name="editPhoto" value ="<%= photo %>">',
      '<h3><input type="text" name="name" value = "<%= name %>"</h3>',
      '<p><input type="text" name="number" value = "<%= number %>"</p>',
      '<p><input type="text" name="email" value = "<%= email %>"</p>',
      '<p><input type="text" name="twitter" value = "<%= twitter %>"</p>',
      '<p><input type="text" name="github" value = "<%= github %>"</p>',
      '<p><input type="text" name="street" value = "<%= street %>"</p>',
      '<p><input type="text" name="street_2" value = "<%= street_2 %>"</p>',
      '<p><input type="text" name="city" value = "<%= city %>"</p>',
      '<p><input type="text" name="state" value = "<%= state %>"</p>',
      '<p><input type="text" name="zip" value = "<%= zip %>"</p>',
      '<button type="submit" class="submitEdit">Submit Edit</button>',
    '</form>',
  '</div>'

].join('');

templates.addedContact = [
  // '<img src = <%= photo %> alt="">',
  '<article>',
    '<h3><%= name %></h3>',
    '<p><%= number %></p>',
    '<p><%= email %></p>',
    '<p><%= twitter %></p>',
    '<p><%= github %></p>',
    '<p><%= street %> ',
    '<%= street_2 %></p>',
    '<p><%= city %>, ',
    '<%= state %> ',
    '<%= zip %></p>',
    '<div class="contact-but-wrapper">',
      '<button class="deleteContact">Delete</button>  <button class="showEdit">Edit</button>',
    '<div>',
    '<div class="editForm-wrapper">',
      '<h2>Edit information for <i><%= name %></i></h2>',
      '<form id="editForm" action="">',
        '<input type="text" name="editPhoto" value ="<%= photo %>">',
        '<h3><input type="text" name="name" value = "<%= name %>"</h3>',
        '<p><input type="text" name="number" value = "<%= number %>"</p>',
        '<p><input type="text" name="email" value = "<%= email %>"</p>',
        '<p><input type="text" name="twitter" value = "<%= twitter %>"</p>',
        '<p><input type="text" name="github" value = "<%= github %>"</p>',
        '<p><input type="text" name="street" value = "<%= street %>"</p>',
        '<p><input type="text" name="street_2" value = "<%= street_2 %>"</p>',
        '<p><input type="text" name="city" value = "<%= city %>"</p>',
        '<p><input type="text" name="state" value = "<%= state %>"</p>',
        '<p><input type="text" name="zip" value = "<%= zip %>"</p>',
        '<button type="submit" class="submitEdit">Submit Edit</button>',
      '</form>',
    '</div>',
  '</article>'

].join('');


templates.addContact = [

'<form id="addContactForm" action="">',
  '<p><label for="photo">Photo</label>',
  '<input type="text" name="photo" placeholder="Photo URL"></p>',
  '<h3><label for="name">Name</label>',
  '<input type="text" name="name" placeholder="Name"</h3>',
  '<p><label for="number">Number</label>',
  '<input type="text" name="number" placeholder="Number"</p>',
  '<p><label for="email">Email</label>',
  '<input type="text" name="email" placeholder="Email"</p>',
  '<p><label for="twitter">Twitter</label>',
  '<input type="text" name="twitter" placeholder="Twitter"</p>',
  '<p><label for="github">Github</label>',
  '<input type="text" name="github" placeholder="Github"</p>',
  '<p><label for="street">Street</label>',
  '<input type="text" name="street" placeholder="Street Address"</p>',
  '<p><label for="street_2">Apartment/Suite #, etc</label>',
  '<input type="text" name="street_2" placeholder="Street Address continued"</p>',
  '<p><label for="city">City</label>',
  '<input type="text" name="city" placeholder="City"</p>',
  '<p><label for="state">State</label>',
  '<input type="text" name="state" placeholder="State"</p>',
  '<p><label for="zip">Zip</label>',
  '<input type="text" name="zip" placeholder="Zip"</p>',
  '<button id="createContact" type="submit">Create Contact</button>',
'</form>'

].join('');

templates.auth = [
  '<div class="userauth">',
    '<h2>User Authentication View</h2>',
    '<input type="text" name="login" placeholder="Login">',
    '<input type="text" name="pass" placeholder="Password">',
  '</div>'
].join('');
