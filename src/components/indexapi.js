


const fs = require('fs');
const {google} = require('googleapis');

const apikeys = require("../../apikey.json");
const SCOPE = ["https://www.googleapis.com/auth/drive"];
async function authorize(){
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,apikeys.private_key,
    SCOPE
  );

  await jwtClient.authorize();

  return jwtClient;
}

async function uploadFile(authClient){
  return new Promise((resolve,rejected)=>{
      const drive = google.drive({version:'v3',auth:authClient}); 
      var fileMetaData = {
          name:'mydrivetext.txt',    
          parents:['1MhRs7T6bVZrGb0oRYX2QHaw2svcR3LSf'] // A folder ID to which file will get uploaded
      }
      drive.files.create({
          resource:fileMetaData,
          media:{
              body: fs.createReadStream('mydrivetext.txt'), // files that will get uploaded
              mimeType:'text/plain'
          },
          fields:'id'
      },function(error,file){
          if(error){
              return rejected(error)
          }
          resolve(file);
      })
  });
}

export default {authorize,uploadFile};
