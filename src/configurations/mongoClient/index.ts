import { MongoClient } from "mongodb";
import { Constants } from "@configurations";

const mongoClient = new MongoClient(Constants.MONGODB_URL);

export { mongoClient };
