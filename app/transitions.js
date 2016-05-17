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
}
