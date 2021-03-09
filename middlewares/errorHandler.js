module.exports = function (err, req, res, next) {
  console.log(err, '<<< isi err')
  let statusCode = err.status || 500
  let message = err.message || 'Internal Server Error' 
  res.status(statusCode).json({message})
}