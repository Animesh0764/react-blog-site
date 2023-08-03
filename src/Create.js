import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('Title here...');
    const [body, setBody] = useState('Body here...');
    const [author, setAuthor] = useState('default');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST', // or 'PUT'
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            history.push('/');
        })
    };

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author: </label>
                <select
                    value = { author }
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="default">Select one</option>
                    <option value="Oppenheimer">Oppenheimer</option>
                    <option value="Barbie">Barbie</option>
                    <option value="Ken">Ken</option>                </select>
                <button>Add blog</button>
                <p>{ title }</p>
                <p>{ body }</p>
            </form>
        </div>
    );
}

export default Create;