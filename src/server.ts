import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    // Connect to MongoDB using the URI from config
    await mongoose.connect(config.DB_URL as string);
    console.log("🎊 Mongoose connected successfully ");

    // Start the server on the specified port
    app.listen(config.PORT, () => {
      console.log(`Server is listening on port ${config.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit process with failure
  }
}

main();
