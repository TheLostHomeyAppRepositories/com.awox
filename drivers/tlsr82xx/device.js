'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class RgbBulb extends ZigBeeLightDevice {

  get energyMap() {
    return {
      'TLSR82xx': {
        approximation: {
          usageOff: 0.5,
          usageOn: 8.6,
        },
      },
    };
  }

}

module.exports = RgbBulb;
