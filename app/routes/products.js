import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
        id: 'WaterTracker1',
        title: 'WaterTracker1 Controller',
        sensors: '1 Sensor Port',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg',
      }, {
        id: 'WaterTracker2',
        title: 'WaterTracker2 Controller',
        sensors: '2 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg',
      }, {
        id: 'WaterTracker3',
        title: 'WaterTracker3 Controller',
        sensors: '3 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg',
      }, {
        id: 'WaterTracker4',
        title: 'WaterTracker4 Controller',
        sensors: '4 Sensor Ports',
        location: 'Indoors',
        image: '../assets/images/wt1.jpg',
      }, {
            id: '5-PSI-Gauge',
            title: 'PS5G Sensor',
            depth: '11.5 Feet',
            location: 'Do not submerse in liquid.',
            use: 'Cistern Tanks, Shallow Wells',
            thread: '1/8NTP',
            image: '../assets/images/ps5g.jpg',
          }, {
          id: '15-PSI-Gauge',
          title: 'PS15G Sensor',
          depth: '34.5 Feet',
          location: 'Do not submerse in liquid.',
          use: 'Cistern Tanks, Shallow Wells',
          thread: '1/8NTP',
          image: '../assets/images/ps15g.jpg',
        }, {
          id: '30-PSI-Absolute',
          title: 'PS30A Sensor with 100Ft cable.',
          depth: '34.5 Feet',
          location: 'Throw in Liquid Submersable.',
          use: 'In Tanks and Wells',
          thread: '1/8NTP',
          image: '../assets/images/ps30a100.jpg',
        }, {
            id: '50-PSI-Absolute',
            title: 'PS50A Sensor with 150Ft cable.',
            depth: '80 Feet',
            location: 'Throw in Liquid Submersable.',
            use: 'In Tanks and Wells',
            thread: '1/8NTP',
            image: '../assets/images/ps30a100.jpg',
          }, {
            id: 'connector_8_inch',
            title: 'Controller Connector to sensor',
            image: '../assets/images/cable_8_inch.jpg',
          }, {
            id: 'poe48v',
            title: 'POE48V',
            image: '../assets/images/poe48v.jpg',
          }, {
            id: 'poe_cable',
            title: 'POE Ethernet cable',
            image: '../assets/images/poe_cable.jpg',
          }, {
            id: 'tubing25',
            title: '1/4" Pollyurethan 100 feet',
            image: '../assets/images/tubing25.jpg',
          }, {
            id: 'connector18',
            title: 'Sensor to Tubing 1/8 NTP Connector',
            thread: '1/8 NTP',
            image: '../assets/images/connector18.jpg',
           }];
        }
  
});
