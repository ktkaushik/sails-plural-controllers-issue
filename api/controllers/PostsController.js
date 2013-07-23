/**
 * PostsController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  index: function(req, res) {
    console.log("****************************************************** you are in index action ************************************************");
    console.log(req.params);
    console.log(req.body);
    Post.find().exec(function (err, posts) {
      if (err) return res.send(err,500);
      res.json(posts);
    });
    // res.send('In index action');
  },

  create: function(req, res) {
    console.log("*************************************** you are in create action ***********************************************************");
    console.log(req.params);
    console.log(req.url);
    console.log(req.body);
    Post.create({
      name: 'Static Post',
    }).done(function(err, post) {

      // Error handling
      if (err) {
        return res.send(err,500);

      // The post was created successfully!
      }else {
        console.log("post created:", post);
        res.redirect('/posts');
      }
    });
    // res.redirect('/posts');

  }
};
