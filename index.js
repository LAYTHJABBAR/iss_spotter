// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ipl) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ipl);
});

// fetchCoordsByIP('192.41.148.220', (error, myg) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
//     console.log('It worked! Returned Coords:' , myg);
//   });

//   fetchISSFlyOverTimes({ latitude: '51.04190', longitude: '-114.20000' }, (error, data) => {
//        console.log(data);
//      });

nextISSTimesForMyLocation((error, passTimes) => {
    if (error) return console.log(error);
    for (let time of passTimes) {
      const dateObj = new Date(time.risetime * 1000);
      console.log(`Next pass at ${dateObj.toUTCString()} for ${time.duration} seconds!`);
    }
  });