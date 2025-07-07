import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



const userSchema = new Schema({
    username :{
        type : String,
        required: true,
        unique: true,   
        lowercase: true,
        trim: true,
        index:true,
    },
    email :{
       type :String,
       required: true,
       unique: true,
       lowercase: true,
    },
    password :{
        type : String,
        required: true,
    },
    fullname:{
        type :String ,
        required: true,
        trim: true,
    },
    avtar: {
        type: String, //AWS S3 URL or local path
        default: "",
    },
    watchHistory :[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    coverImage :{
        type: String // S3
    },
    password :{
        type :String ,
        required :[true ,"Password is required"],
    },
    refreshToken : {
        type: String,
    }

},{
    timestamps: true,
})
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password ,10)
    next()
}) 
//custom methods for checking password and generating JWT
userSchema.methods.isPasswordCorrect= async function(password) {
    return await bcrypt.compare (password , this.password)
}
//jwt is bearer token : wherever you need to authenticate user, you can use this method

user.Schema.methods.generateAccessToken = function() {
    return  jwt.sign({
        _id :this._id ,
        username : this.username,
        email : this.email,
        fullname : this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET ,
    {
        expiresIn: "1d" // 1 day
    })
    
 }
user.Schema.methods.generateRefreshToken = function() {
    return  jwt.sign({
        _id :this._id ,
        username : this.username,
        email : this.email,
        fullname : this.fullname,
    },
    process.env.REFRESH_TOKEN_SECRET ,
    {
        expiresIn: "7d" // 1 day
    })
}
export const User = mongoose.model("User", userSchema);