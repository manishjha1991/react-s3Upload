import AWS from "aws-sdk";

export function s3Upload(file) {
  AWS.config.update({
    accessKeyId: "your accessKeyId",
    secretAccessKey: "your secretAccessKey",
    region: "your region",
    s3ForcePathStyle: true
  });

  var s3 = new AWS.S3();
  const filename = `${Date.now()}-${file.name}`;
  var params = {
    Bucket: "your bucket name",
    Key: filename,
    Body: file,
    ContentType: file.type,
    ACL: "public-read"
  };
  try {
    s3.upload(params, function(err, data) {
      if (err) {
        throw new Error("Error in Uploading Data in S3 Bucket");
      } else {
        let userObj = { data };
        console.log(userObj);
      }
    });
  } catch (e) {
    throw e.message;
  }
}
