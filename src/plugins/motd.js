'use strict';

const routes = require('../routes/motd');

class MOTD {
  /**
   * @param {import('../Uwave')} uw
   */
  constructor(uw) {
    this.uw = uw;
  }

  get() {
    return this.uw.redis.get('motd');
  }

  set(motd) {
    return this.uw.redis.set('motd', motd);
  }
}

async function motdPlugin(uw) {
  uw.motd = new MOTD(uw);
  uw.httpApi.use('/motd', routes());
}

module.exports = motdPlugin;
module.exports.MOTD = MOTD;
