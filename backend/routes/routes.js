
const activityRoutes = require('./activity');

const appRouter = (app, fs) => {

  app.get('/', (req, res) => {
    res.send('Ap pour le front de loisira');
  });

 
  activityRoutes(app, fs);
};


module.exports = appRouter;