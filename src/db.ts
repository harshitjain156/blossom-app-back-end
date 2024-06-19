import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://harshitj:root@travel-cluster.1jjduhq.mongodb.net/?retryWrites=true&w=majority&appName=travel-cluster"
    )
    if (connection) {
      console.log("Connection established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase
