const express =require("express");
const {google} = require("googleapis");
const multer = require("multer");

const path = require("path");
const cors = require("cors");

const fs = require("fs");

const app = express();

const storage = multer.diskStorage({

    destination: "uploads",
    filename:function(req, file , callback){
        const extension = file.originalname.split(".").pop()
        callback(null, `${file.fieldname}-${Date.now()}.${extension}`)
    }
})

const uploads = multer({storage:storage})

app.use(cors());

app.post("/uploads", uploads.array("files"), async (req, res) => {
    try {

        console.log("here am i")
      const auth = new google.auth.GoogleAuth({
        keyFile: "apikey.json",
        scopes: ["https://www.googleapis.com/auth/drive"]
      });
  
      const drive = google.drive({
        version: "v3",
        auth
      });
  
      const uploadedFiles = [];
  
      for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
  
        const response = await drive.files.create({
          requestBody: {
            name: file.originalname,
            mimeType: file.mimetype,
            parents: ["1MhRs7T6bVZrGb0oRYX2QHaw2svcR3LSf"]
          },
          media: {
            body: fs.createReadStream(file.path)
          }
        });
  
        uploadedFiles.push(response.data);
      }
  
      res.json({ files: uploadedFiles });
    } catch (e) {
      res.status(500).send(e);
    }
  });
app.listen(5000, ()=>{
    console.log("list to port 5000") 
})