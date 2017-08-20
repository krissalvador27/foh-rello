import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
  description: DS.attr('string'),
  color: DS.attr('string'),
	list: DS.belongsTo('list', { async: true })
});
