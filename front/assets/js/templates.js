templates = {};

templates.contact = [
'<article>',
'<img src = <%= photo %> alt="">',
'<h3><%= name %></h3>',
'<p><%= number %></p>',
'<p><%= email %></p>',
'<p><%= twitter %></p>',
'<p><%= github %></p>',
'<p><%= street %></p>',
'<p><%= street_2 %></p>',
'<p><%= city %></p>',
'<p><%= state %></p>',
'<p><%= zip %></p>',
'<button class="deleteContact">Delete Contact</button>  <button class="showEdit">Edit</button>',
'<form id="editForm" action="">',
  '<input type="text" name="editPhoto" value ="<%= photo %>">',
  '<h3><input type="text" name="editName" value = "<%= name %>"</h3>',
  '<p><input type="text" name="editNumber" value = "<%= number %>"</p>',
  '<p><input type="text" name="editEmail" value = "<%= email %>"</p>',
  '<p><input type="text" name="editTwitter" value = "<%= twitter %>"</p>',
  '<p><input type="text" name="editGithub" value = "<%= github %>"</p>',
  '<p><input type="text" name="editStreet" value = "<%= street %>"</p>',
  '<p><input type="text" name="editStreet_2" value = "<%= street_2 %>"</p>',
  '<p><input type="text" name="editCity" value = "<%= city %>"</p>',
  '<p><input type="text" name="editState" value = "<%= state %>"</p>',
  '<p><input type="text" name="editZip" value = "<%= zip %>"</p>',
  '<button type="submit">Submit Edit</button>',
'</form>',
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
  '<p><label for="email">EMail</label>',
  '<input type="text" name="email" placeholder="Email"</p>',
  '<p><label for="twitter">Twitter</label>',
  '<input type="text" name="twitter" placeholder="Twitter"</p>',
  '<p><label for="github">Github</label>',
  '<input type="text" name="github" placeholder="Github"</p>',
  '<p><label for="street">Street</label>',
  '<input type="text" name="street" placeholder="Street Address"</p>',
  '<p><label for="street_2">Street Address (optional)</label>',
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
