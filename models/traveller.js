const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((location) => {
    return location.startLocation;
  })
  return result;

};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((location) => {
    return location.endLocation;
  })
  return result;

};

Traveller.prototype.getModesOfTransport = function () {
  const result = this.journeys.map((value) => {
    return value.transport;
  })
   return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((value) => {
    return value.transport === transport;
  })
  return result;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((value) => {
    return value.distance >= minDistance;
  })
  return result;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((acc, total) => {
    return acc + total.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
