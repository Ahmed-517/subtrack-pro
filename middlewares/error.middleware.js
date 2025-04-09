/*
    any kind of middleware

    1. the information that happened before,    --> err
    2. (req, res),                              --> req, res
    3. what happens after                       --> next
*/
const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;

    console.error(err);

    // Mongoose bad ObjectId
    if (err.name === "CastError") {
      // message is a string
      const message = "Resource not found";
      error = new Error(message);
      error.status = 404;
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
      // message is a string
      const message = "Duplicate entry";
      error = new Error(message);
      error.status = 400;
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
      // message is an array of strings
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(", "));
      error.status = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
