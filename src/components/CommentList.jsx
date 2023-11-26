import { Comment } from "./Comment"

export function CommentList({ comments, removeComment }) {

    return comments.map((comment) => (
        <div key={comment.id} className="comment-stack">
            <Comment {...comment} removeComment={removeComment} />
        </div>
    ))
}