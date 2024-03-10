import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const categorySchema = new Schema({
  name: { type: String, rquired: true, unique: true },
});

const category = models.Category || model("Category", categorySchema);

export default category;
