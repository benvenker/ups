var upsData = [
  {
    exercise: 'pull-ups',
    reps: '10'
  },
  {
    exercise: 'push-ups',
    reps: '22'
  }
];
Template.upsList.helpers({
  ups: upsData
});
Template.upsCounter.helpers({
  ups: upsData
});
