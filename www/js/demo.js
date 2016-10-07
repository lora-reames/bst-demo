angular.module('starter.demo', [])

.factory('Drivers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var drivers =
  [
    {
      id: 0,
      name: 'Ben Sparrow',
      shift: '7',
      energy: '35',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    },
    {
      id: 1,
      name: 'Max Lynx',
      shift: '4',
      energy: '50',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    },
    {
      id: 2,
      name: 'Adam Bradleyson',
      shift: '2',
      energy: '60',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    },
    {
      id: 3,
      name: 'Perry Governor',
      shift: '3',
      energy: '75',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    },
    {
      id: 4,
      shift: '2',
      name: 'Mike Harrington',
      energy: '82',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }
  ];

  return {
    all: function() {
      return drivers;
    },
    remove: function(driver) {
      drivers.splice(drivers.indexOf(driver), 1);
    },
    get: function(driverId) {
      for (var i = 0; i < drivers.length; i++) {
        if (drivers[i].id === parseInt(driverId)) {
          return drivers[i];
        }
      }
      return null;
    }
  };
});