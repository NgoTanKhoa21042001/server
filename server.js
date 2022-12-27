const app = require("./app");
const dotenv = require("dotenv");

const port = process.env.PORT || 9000;

if (process.env.NODE_ENV === "PRODUCTION") {
  dotenv.config({ path: "config/config.env" });
}

const server = app.listen(port, () => {
  console.log(`Server is running... at ${port}`);
});
