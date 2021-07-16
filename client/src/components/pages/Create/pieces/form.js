import React, { useState } from 'react';
import axios from 'axios';

import '../create.css';


const Form = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [place, setPlace] = useState("");
    const [excrept, setExcrept] = useState("");
    const [body, setBody] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            category,
            place,
            excrept,
            body
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.image = filename; // Added the image name
            console.log(newPost.image);
            try {
                await axios.post("/upload", data);
            } catch (error) {
                console.log(error.message);
            }
        }
        try {
            const res = await axios.post("/post/create", newPost);
            window.location.replace("/view/" + res.data._id);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="create_form_div" >
            <div className="create_form">
                <h1>Create Post</h1>
                {file &&
                    <div className="uploaded_image">
                        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
                    </div>
                }
                <form method="POST" onSubmit={handleSubmit} enctype="multipart/form-data">
                    <div class="button-wrap">
                        <label class="button" htmlFor="upload">Upload File</label>
                        <input id="upload" type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div class="create_form_top_input">
                        <div className="form_controls">
                            <label>Title</label>
                            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>

                    <div class="create_form_middle_input">
                        <div className="form_controls">
                            <label>Category</label>
                            <input type="text" name="category" onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <div className="form_controls">
                            <label>Place</label>
                            <input type="text" name="place" onChange={(e) => setPlace(e.target.value)} />
                        </div>
                    </div>

                    <div class="create_form_bottom_input">
                        <div className="form_controls">
                            <label>Excrept</label>
                            <input type="text" name="excrept" onChange={(e) => setExcrept(e.target.value)} />
                        </div>
                        <div className="form_controls">
                            <label>Body</label>
                            <textarea type="text" name="title" rows="8" cols="50" onChange={(e) => setBody(e.target.value)} ></textarea>
                        </div>
                    </div>
                    <button className="create_btn" type="submit" name="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
