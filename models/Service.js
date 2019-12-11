var keystone = require('keystone');
var Types = keystone.Field.Types;
var Service = new keystone.List('Service');

Service.add({
  image: { type: Types.CloudinaryImage, initial: true, required: true },
  title: { type: Types.Text, initial: true, required: true },
  content: {
    brief: { type: Types.Text, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 },
  },
});

Service.defaultColumns = 'title, content.brief';
Service.register();