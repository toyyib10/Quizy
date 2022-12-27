const mongooseConnect = (err) => {
  if (err) {
    console.log("Unable to start")
  } else {
    console.log("Mongoose Started")
  }
}

const expressConnect = () => {
  console.log("server started")
}

module.exports = {mongooseConnect, expressConnect}