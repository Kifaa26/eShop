import { userRouter } from "./controller/UserController.js";
import { productRouter } from "./controller/productController.js";
import path from "path";
// import { connection as db } from "./config/index.js";
// import { createToken } from "./middleware/AuthenticateUser.js";
// import { compare, hash } from "bcrypt";
// import bodyParser from "body-parser";

//Create an express app
const app = express();
const port = +process.env.PORT || 4000;
const router = express.Router();

//Middleware
app.use(
  router,
  '/user', userRouter,
  '/product', productRouter,
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

// router.use(bodyParser.json());

//Endpoint
router.get("^/$|/eShop", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});

router.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "Resource not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

