import React, { useState } from 'react';
import axios from "axios"


function SoundAudioForm() {
    const [songName, setSongName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [price, setPrice] = useState('');
    const [mp3File, setMp3File] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setMp3File(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('songName', songName);
        formData.append('authorName', authorName);
        formData.append('price', price);
        formData.append('mp3File', mp3File);

        // Now, you can use Axios to send this formData to your backend
        // Example Axios code:

        axios.post('http://localhost:8080/api', formData)
            .then((response) => {
                alert("music added")
            })
            .catch((error) => {

                console.log(error)
            });

    };

    return (
        <form action='http://localhost:8080/upload' method='post' encType='multipart/form-data'>
            <div>
                <label>Song Name:</label>
                <input type="text" value={songName} onChange={(e) => setSongName(e.target.value)} required />
            </div>
            <div>
                <label>Author Name:</label>
                <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required min="1" />
            </div>
            <div>
                <label>Upload MP3 File:</label>
                <input type="file" name='file' />
            </div>
            <input value='submit' type="submit" />
        </form>
    );
}

export default SoundAudioForm;
