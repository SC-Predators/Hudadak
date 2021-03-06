const AWS = require('aws-sdk');
var s3 = new AWS.S3();
exports.handler = (event, context, callback) => {
     // console.log("Event is ", event);
     let encodedImage = event.base64Image;
     let Folder = event.S3Folder;
     let Filename = event.Filename;
     // console.log("Copying event body of ", encodedImage);
     let decodedImage = Buffer.from(encodedImage, 'base64');
     var filePath = "daara2021.03.15test/Inner_HudadakCase_status.jpg";
     var params = {
       "Body": decodedImage,
       "Bucket": "daara2021.03.15test",
       "Key": filePath  
    };
    s3.upload(params, function(err, data){
       if(err) {
           callback(err, null);
       } else {
           let response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify(data),
        "isBase64Encoded": false
    };
           callback(null, response);
    }
    });
    
};
