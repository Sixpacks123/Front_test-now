const activityRoutes = (app, fs) => {
    // variables
    const dataPath = './data/allactivity.json';
    const dataPath1 = './data/activityCategory.json';
  
    // READ
    app.get('/activity', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
 

  app.get('/activityCategory', (req, res) => {
    fs.readFile(dataPath1, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};
  
  module.exports = activityRoutes;