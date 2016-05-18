export default function() {
  const duration = 500;
  this.transition(
    this.fromRoute(`index.events.index`),
    this.toRoute(`index.events.details`),
    this.use(`explode`, {
      matchBy: `data-lf`,
      use: [`flyTo`, { duration }]
    }, {
      use: [`toLeft`, { duration }]
    }),
    this.reverse(`explode`, {
      matchBy: `data-lf`,
      use: [`flyTo`, { duration }]
    }, {
      use: [`toRight`, { duration }]
    })
  );

  // Add liquid-outlet to index.hbs for swipe like transitions

  this.transition(
    this.fromRoute(`index.about`),
    this.use(`toLeft`),
    this.reverse(`toRight`)
  );
  this.transition(
    this.fromRoute(`index.login`),
    this.use(`toRight`),
    this.reverse(`toLeft`)
  );
  this.transition(
    this.fromRoute(`index.events`),
    this.toRoute(`index.register`),
    this.use(`toLeft`),
    this.reverse(`toRight`)
  );
}
