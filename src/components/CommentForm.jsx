import React, { useState } from "react";

export function CommentForm({ initialValue="", onSubmit, autoFocus = false }) {
    const [message,setMessage] = useState(initialValue);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(message);
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="comment-form-row">
                <textarea
                    autoFocus
                    value={message}
                    className="message-input" 
                    onChange={(e) => setMessage(e.target.value)}/>
                <button className="btn" type="submit">
                    Post
                </button>

            </div>
        </form>
    )
}