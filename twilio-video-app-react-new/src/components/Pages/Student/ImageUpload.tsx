import React, {useState} from 'react';
// import {storage} from "../../utils/fireBaseConfig";
// import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
// @ts-ignore
import {v4 as uuidv4} from "uuid"
import {FirebaseApp} from "../../../auth0/FirebaseConfig";

const ImageUpload = () => {
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [imageUpload, setImageUpload] = useState<any>(null);
    const [image, setImage] = useState<any>(null);
    const [progress, setProgress] = useState(0);
    const uploadImage = () => {
        if (imageUpload == null) return;

        const storageRef = FirebaseApp.storage().ref();
        console.log(storageRef);
        const fileRef = storageRef.child(`/newly/${imageUpload[0].name + uuidv4()}`);
        const uploadTask = fileRef.put(imageUpload[0]);
        // const url = fileRef.getDownloadURL();
        // console.log("Url is=>" + url)
            // ?alt=media&token=
        uploadTask.on("state_changed", (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog)
            },
            (err) => console.log(err),
            () => {
                fileRef.getDownloadURL()
                    .then((url)=> {
                    console.log(url);
                    setImage(url)
                })
            }
        )
    }

    // console.log(imageUpload);
    // uploadBytes(imageRef, imageUpload[0]).then((res) => {
    //     console.log("Upload Success")
    //     setUploadSuccess(true)
    // }).then(()=> {
    //     const imageListRef = ref(storage, "profile/")
    //
    //     list(imageRef).then((res)=> {
    //         console.log(res)
    //         // getDownloadURL(res.items[length]).then((url)=> {
    //         //     setImage(url)
    //         //     console.log(url)
    //         // })
    //     })
    // })

    return (
        <div>
            <input type="file" onChange={(e) => {
                setImageUpload(e.target.files)
            }}/>
            <button onClick={uploadImage}>Upload</button>
            <h3>Uploaded {progress}%</h3>
            {
                image && <img src={image}/>
            }
        </div>
    );
};

export default ImageUpload;
