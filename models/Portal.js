var keystone = require('keystone');
var Types = keystone.Field.Types;
var Portal = new keystone.List('Portal');

Portal.add({
  image: { type: Types.CloudinaryImage, initial: true, required: true },
  label: { type: Types.Text, initial: true, required: true },
  desc: { type: Types.Text, initial: true, required: true },
});

Portal.defaultColumns = 'label, desc, image';
Portal.register();