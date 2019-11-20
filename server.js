/* eslint-disable */
const dotenv = require("dotenv");
const createError = require("http-errors");
const helmet = require("helmet");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 8085;

// / prepare config for server
dotenv.config();
const app = express();

const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 1000 // limit each IP requests per windowMs
});

// / middlewares
// app.use(limiter);
// app.use(helmet());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, () => console.log("app decs started on port " + PORT));
