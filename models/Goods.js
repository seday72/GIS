var keystone = require('keystone');
var Types = keystone.Field.Types;
var Goods = new keystone.List('Goods');

Goods.add({
  image: { type: Types.CloudinaryImage, initial: true, required: true },
  label: { type: Types.Text, initial: true, required: true },
  desc: { type: Types.Text, initial: true, required: true },
  currency: { type: Types.Text, initial: true, required: true },
  price: { type: Types.Number , initial: true, required: true },
});

Goods.defaultColumns = 'label, desc, image';
Goods.register();