const uploadImageToCloudinary = async (filePath, folder, height, quality) => {
    const options = { folder };
    if (height) options.height = height;
    if (quality) options.quality = quality;
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(filePath, options);
};

export default uploadImageToCloudinary