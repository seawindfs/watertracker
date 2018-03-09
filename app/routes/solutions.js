import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
        id: 'WaterTracker2',
        title: 'Using Well, Cistern tank & Oil Tank sensors',
        sensors: '3 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/solution3.jpg',

           }];
        }
  
});
