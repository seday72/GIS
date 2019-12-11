var keystone = require('keystone');
var Types = keystone.Field.Types;
var Hero = new keystone.List('Hero');

Hero.add({
  image: { type: Types.CloudinaryImage, initial: true, required: true },
  title: { type: Types.Text, initial: true, required: true },
  subTitle: { type: Types.Text, initial: true, required: true },
});

Hero.defaultColumns = 'title, subTitle, image';
Hero.register();