import { userRouter, express } from "./controller/UserController.js";
import { productRouter } from "./controller/productController.js";
import path from "path";
// import { connection as db } from "./config/index.js";
// import { createToken } from "./middleware/AuthenticateUser.js";
// import { compare, hash } from "bcrypt";
// import bodyParser from "body-parser";

//Create an express app
const app = express();
const port = +process.env.PORT || 4000;

//Middleware
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

// router.use(bodyParser.json());

app.get("^/$|/eShop", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

app.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "Resource not found"
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});

