import mongoose from "mongoose"

const StoreSchema = new mongoose.Schema({
  activeTheme: String,
  sections: {
    header: Boolean,
    footer: Boolean,
    navbar: Boolean,
  }
})

export default mongoose.model("Store", StoreSchema)
