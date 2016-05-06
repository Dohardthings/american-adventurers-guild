import Ember from 'ember';

export default Ember.Controller.extend({
  saveEvent(attr) {
    const eventAttrs = Ember.getProperties(attr, [
      `name`,
      `type`,
      `cost`,
      `etc`,
      `active`,
      `description`,
      `searchArea`,
    ]);

    const event = this.store.createRecord(`event`, eventAttrs);

    event.save().then(() => {
      const prizeAttrs = attr.prize;

      const prize = this.store.createRecord(`prize`, prizeAttrs);
      prize.set(`event`, event);

      prize.save();
    });
  },
});
