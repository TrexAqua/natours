const { Tour } = require('../Models/tourModel');

exports.getAllTours = (req, res) => {
  //using the middleware to get tmie
  console.log(req.requestTime);
  //sending json response
  res.status(200).json({
    satus: 'success',
    // results: tours.length,
    // data: {
    //   tours: tours,
    // },
  });
};

exports.getTour = (req, res) => {
  //converting this string into number
  const id = req.params.id * 1;
  //checking if a id which is request really exists or not
  // if (id > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid Id',
  //   });
  // }
  //assigning tour variable to get a single tour with the id which is requested
  // const tour = tours.find((el) => el.id === id);
  //sending response in json
  // res.status(200).json({
  //   status: 'success',
  //   // data: {
  //   //   tour,
  //   // },
  // });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid Data',
    });
  }
};

exports.updateTour = function (req, res) {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'tour updated',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
