import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({
    videoFile :{
        type : String, // AWS S3 URL or local path
        required :[true, "Video file is required"],
    },
    title : {
        type :String ,
        required: true,
    },
    thumbnail : {
        type : String, // AWS S3 URL or local path
        required: true,
    },  
    description : {
        type : String,
        required: true,
    },  
    duration :{
      type : Number ,
      required :true
    },
    views :{
        type: Number,
        default: 0 ,
        },
    isPublished : {
            type: Boolean,
            default: false,
        },
    owner :{
        type: Schema.Types.ObjectId,
        ref :"User"
    }
},
{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);