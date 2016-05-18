export default function() {
  const duration = 500;
  this.transition(
    this.fromRoute(`events.index`),
    this.toRoute(`events.details`),
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
    this.fromRoute(`index.register`),
    this.toRoute(`index.login`),
    this.use(`toLeft`),
    this.reverse(`toRight`)
  );
  this.transition(
    this.fromRoute(`index.about`),
    this.toRoute(`index.register`),
    this.use(`toLeft`),
    this.reverse(`toRight`)
  );
  this.transition(
    this.fromRoute(`index.about`),
    this.toRoute(`index.login`),
    this.use(`toLeft`),
    this.reverse(`toRight`)
  );

  this.transition(
    this.fromRoute(`events`),
    this.toRoute(`index`),
    this.use(`toLeft`),
    this.reverse(`toRight`)
  );
}
