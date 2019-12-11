/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

const keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

  // Next request handler
  const handle = nextApp.getRequestHandler();

  keystoneApp.get('/api/posts', (req, res, next) => {
    const Post = keystone.list('Post');
    Post.model
      .find()
      .where('state', 'published')
      .sort('-publishedDate')
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/hero', (req, res, next) => {
    const Hero = keystone.list('Hero');
    Hero.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/quicklink', (req, res, next) => {
    const QuickLink = keystone.list('QuickLink');
    QuickLink.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/service', (req, res, next) => {
    const Service = keystone.list('Service');
    Service.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/job', (req, res, next) => {
    const Job = keystone.list('Job');
    Job.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/announcement', (req, res, next) => {
    const Announcement = keystone.list('Announcement');
    Announcement.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });
  
  keystoneApp.get('/api/homepage/download', (req, res, next) => {
    const Download = keystone.list('Download');
    Download.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/portal', (req, res, next) => {
    const Portal = keystone.list('Portal');
    Portal.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/goods', (req, res, next) => {
    const Goods = keystone.list('Goods');
    Goods.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('/api/homepage/event', (req, res, next) => {
    const Event = keystone.list('Event');
    Event.model
      .find()
      .exec(function (err, results) {
        if (err) throw err;
        res.json(results);
      });
  });

  keystoneApp.get('*', (req, res) => {
    return handle(req, res);
  });
};