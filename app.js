const express = require("express");
const router = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.use(router)

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
