import { storage } from "../../../firebaseConfig";



export const addFile = (file,type) => dispatch => {
    const storageRef = storage.ref();

    const date = new Date();
    const times =  date.valueOf();
    const pathname = `${process.env.NODE_ENV}/${type}/${times}${file.name}`;

    const fileRef = storageRef.child(pathname);

    return fileRef.put(file)
        .then(async (result) => {
            return await result.ref.getDownloadURL();
        })
        .catch((error) => {
            console.error('Error uploading file: ', error);
            return false
        });

}