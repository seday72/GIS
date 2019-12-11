var keystone = require('keystone');
var Types = keystone.Field.Types;
var Job = new keystone.List('Job');

Job.add({
  title: { type: Types.Text, initial: true, required: true },
  skill: { type: Types.Text, initial: true, required: true },
  code: { type: Types.Text, initial: true, required: true },
  desc: {
    uppercase: { type: Types.Text },
    showmore: { type: Types.Html, wysiwyg: true, height: 400 },
  },
});

Job.defaultColumns = 'title, code, desc.uppercase';
Job.register();