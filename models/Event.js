var keystone = require('keystone');
var Types = keystone.Field.Types;
var Event = new keystone.List('Event');

Event.add({
  image: { type: Types.CloudinaryImage, initial: true, required: true },
  title: { type: Types.Text, initial: true, required: true },
  desc: { type: Types.Text, initial: true, required: true },
  url: { type: Types.Url, initial: true, required: true },
});

Event.defaultColumns = 'title, desc, url';
Event.register();