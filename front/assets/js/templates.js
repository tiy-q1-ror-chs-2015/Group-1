templates = {};

templates.contact = [
  '<div class="flip-container">',
    '<div class="flipper">',
      '<div class="front">',
        '<h3><%= name %><span><i class="fa fa-pencil showEdit"></i><i class="fa fa-close deleteContact"></i></span></h3>',
        '<p><i class="fa fa-phone"></i><%= number %></p>',
        '<p><i class="fa fa-envelope"></i><a href="mail:to<%= email %>"><%= email %></a></p>',
        '<p><i class="fa fa-twitter"></i><%= twitter %></p>',
        '<p><i class="fa fa-github"></i><a href="<%= github %>"><%= github %></a></p>',
        '<p><i class="fa fa-building-o"></i><%= street %> ',
        '<%= street_2 %></p>',
        '<p><%= city %>, ',
        '<%= state %> ',
        '<%= zip %></p>',
        '<p><i><%= note %></i></p>',
      '</div>',
      '<div class="back">',
        '<div class="editForm-wrapper">',
          '<form id="editForm" action="">',
            '<p><input type="text" name="name" placeholder="Name" value = "<%= name %>"></p>',
            '<p><input type="text" name="number" placeholder="Tel-Number" value = "<%= number %>"></p>',
            '<p><input type="text" name="email" placeholder="E-mail" value = "<%= email %>"></p>',
            '<p><input type="text" name="twitter" placeholder="Twitter" value = "<%= twitter %>">',
            '<input type="text" name="github" placeholder="Github" value = "<%= github %>"></p>',
            '<p><input type="text" name="street" placeholder="Street" value = "<%= street %>"</p>',
            '<p><input type="text" name="street_2" placeholder="Apartment, Suite# etc." value = "<%= street_2 %>"</p>',
            '<p><input type="text" name="city" placeholder="City" value = "<%= city %>">',
            '<input type="text" name="state" placeholder="State" value = "<%= state %>">',
            '<input type="text" name="zip" placeholder="ZIP" value = "<%= zip %>"></p>',
            '<textarea name="note" placeholder="Notes" value ="<%= note %>"></textarea>',
            '<a href="#" class="submitEdit">Submit Edit</a>',
          '</form>',
        '</div>',
      '</div>',
    '</div>',
  '</div>'
].join('');

templates.addContactMenu = [
  '<div class="addcontact-menu">',
    '<div class="addcontact-button-wrapper">',
      '<a href="#" class="addcontact-but js-menu-trigger"><i class="fa fa-2x fa-plus"></i></a>',
    '</div>',
    '<nav class="js-menu sliding-menu-content">',
      '<h3>Add a contact...</h3>',
      '<form id="addContactForm" action="">',
        '<p><input type="text" name="name" placeholder="Name"></p>',
        '<p><input type="text" name="number" placeholder="Number"></p>',
        '<p><input type="text" name="email" placeholder="Email"></p>',
        '<p><input type="text" name="twitter" placeholder="Twitter"></p>',
        '<p><input type="text" name="github" placeholder="Github"></p>',
        '<p><input type="text" name="street" placeholder="Street Address"></p>',
        '<p><input type="text" name="street_2" placeholder="Street Address continued"></p>',
        '<p><input type="text" name="city" placeholder="City"></p>',
        '<p><input type="text" name="state" placeholder="State"></p>',
        '<p><input type="text" name="zip" placeholder="Zip"></p>',
        '<textarea name="note"></textarea>',
        '<button id="createContact" type="submit">Create Contact</button>',
      '</form>',
    '</nav>',
    '<div class="js-menu-screen sliding-menu-fade-screen"></div>',
  '</div>'
].join("");


templates.auth = [
  '<div class="userauth">',
    '<h2>User Authentication View</h2>',
    '<input type="text" name="login" placeholder="Login">',
    '<input type="text" name="pass" placeholder="Password">',
  '</div>'
].join('');

templates.splash = [
  '<div class="container">',
    '<h2>Welcome!</h2>',
    '<h5>Manage your contact list</h5>',
    '<input type="text name="username" placeholder="Enter your username...">',
    '<a href="" id="login">Log In</a>',
  '</div>'
].join('');
