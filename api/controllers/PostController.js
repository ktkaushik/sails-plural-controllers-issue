/**
 * PostController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  
  /**
   * /post/name:string
   */ 
  name:string: function (req,res) {

    // This will render the view: 
    // /Users/kaushik/dev/office/latestSails/views/Post/name:string.ejs
    res.view();

  }

};
