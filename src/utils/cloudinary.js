import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // Importing the cloudinary library and the file system module

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const uploadImage = async (localFilePath)=> {
    try {
        if (!localFilePath) return null
            //uploading image to cloudinary
            const response =await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"})
            console.log(`Image uploaded successfully: ${localFilePath}`);
            return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) ; //delete the file if upload fails
        return console.error(`Error uploading image: ${error.message}`);
    }
}
export {uploadImage}
