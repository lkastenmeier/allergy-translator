require("dotenv").config();
const express = require("express");
const { getCollection, initDatabase } = require("./server/database");

const path = require("path");
const app = express();

async function getAllergies() {
  const allergyCollection = await getCollection();
  const allergies = await allergyCollection.find({}).toArray();

  if (!allergies) {
    throw new Error("can't find allergies");
  }
  return allergies;
}

//Serve Collection allergies from DB
app.get("/api/allergies", async (request, response) => {
  try {
    const allergies = await getAllergies();
    return response.json(allergies);
  } catch (error) {
    console.error(`Database-error: ${error}`);
    return response
      .status(500)
      .end("Error: Connection with the database failed");
  }
});

if (process.env.NODE_ENV === "production") {
  //Load environment
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(req, res) {
    //Return file to React app
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const initDbAndListen = async () => {
  try {
    //initialize database
    await initDatabase(process.env.DB_URL, process.env.DB_NAME);
    console.log(`Database ${process.env.DB_NAME} is ready`);
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`Error during database initialization ${error}`);
  }
};
initDbAndListen();
