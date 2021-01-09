const router = require('express').Router();
const Data = require('../models/data_schema');


// Read
router.route('/').get(async (req, res)=>{
    Data.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
    // res.json({message: "reached the home route/get"})
});

// Create
router.route('/new').post(async (req, res)=>{
    try {
        console.log(req.body);
        const data = new Data({
            name: req.body.name,
            color:req.body.color
        });
        await data.save();
        res.json({message:"saveed successfully"})
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }

    // res.json({message: "reached the new route/post"})
});

//Update 
router.route('/update').put(async (req, res)=>{
    return Data.updateOne(
        { _id: req.body.id },  // <-- find stage
        { $set: {                // <-- set stage
           name: req.body.name,
           color: req.body.color
          } 
        }   
      ).then(() => {
        res.status(200).json({ message: "Update successful!" });
      }).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );

    // res.json({message: "reached the update route/put"})
});

// Delete
router.route('/delete').delete(async (req, res)=>{
    Data.deleteOne({_id: req.body.id})
    .then(() => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
    ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
   
    //   res.json({message: "reached the delete route/delete"})
});

module.exports = router;

