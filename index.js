const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const agentRoute = require("./routes/agent_route");
const adminRoute = require("./routes/admin_route");
const ownerRoute = require("./routes/owner_route");
const productCategoryRoute = require("./routes/product_category_route");
const feedbackRoute = require("./routes/feedback_route");
const orderRoute = require("./routes/order_route");
const orderitemWithQuantityRoute = require("./routes/orderitem_with_quantity_route");
const productItemRoute = require("./routes/product_item_route");
const stockRoute = require("./routes/stock_route");

const app = express();
const PORT = 5002;

mongoose.connect(process.env.url);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database Successfully"));

app.use(cors());
app.use(express.json());
app.use("/agent", agentRoute);
app.use("/admin", adminRoute);
app.use("/owner", ownerRoute);
app.use("/productCategory", productCategoryRoute);
app.use("/feedback", feedbackRoute);
app.use("/order", orderRoute);
app.use("/orderitemWithQuantity", orderitemWithQuantityRoute);
app.use("/productitem", productItemRoute);
app.use("/stock", stockRoute);

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
