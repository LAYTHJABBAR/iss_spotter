const {nextISSTimesForMyLocation } = require('./iss_promised')


// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
// .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (let time of passTimes) {
        const dateObj = new Date (time.risetime * 1000)
        console.log(`Next pass at ${dateObj.toUTCString()} for ${time.duration} seconds!`);
      }
  })
  // .catch((error) => {
  //   console.log("It didn't work: ", error.message);
  // });