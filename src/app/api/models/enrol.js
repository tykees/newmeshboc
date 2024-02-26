import mongoose, { Schema} from "mongoose";

 const enrolSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name name is required"],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },
  
    email: {
        type: String,
        required: [true, "Whatsapp is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
        "Invalid email address"],
    },
    phone: {
        type: Number,
        required: [true, "Number is required"],
    },
    subject: {
        type: String,
        required: [true, "Subject(s) are required"],
    },
  
    date: {
        type: Date,
        default: Date.now,
    }
 })

 const Enrol = mongoose.models.Enrol || mongoose.model("Enrol", enrolSchema)

 export default Enrol;