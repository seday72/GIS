var keystone = require('keystone');
var Types = keystone.Field.Types;
var Download = new keystone.List('Download');

Download.add({
  image: { type: Types.CloudinaryImage, initial: true, required: true },
  title: { type: Types.Text, initial: true, required: true },
  desc: { type: Types.Text, initial: true, required: true },
  url: { type: Types.Url, initial: true, required: true },
});

Download.defaultColumns = 'title, desc, url';
Download.register();