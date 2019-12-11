var keystone = require('keystone');
var Types = keystone.Field.Types;
var QuickLink = new keystone.List('QuickLink');

QuickLink.add({
  title: { type: Types.Text, initial: true, required: true },
  content: {
    brief: { type: Types.Text, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 },
  },
});

QuickLink.defaultColumns = 'title, content.brief';
QuickLink.register();