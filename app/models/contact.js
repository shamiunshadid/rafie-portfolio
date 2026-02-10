import mongoose, {Schema} from "mongoose";


const contactSchema = new Schema({
    firstname:{
        type: String,
        required:[true, 'First name is required'],
        trim: true,
    },
    lastname:{
        type: String,
        // required:[true],
        trim: true,
    },
    email:{
        type: String,
        required:[true, 'Email is required'],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email adress"]
    },
    phone:{
        type: String,
        // required: [true,]

    },
    service:{
        type: Array,
        required:[true, 'Service is required']
    },
    message:{
        type: String,
        required: [true, 'Message is required']
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

const Contact = mongoose.models.Contact || mongoose.model("Contact",contactSchema)

export default Contact