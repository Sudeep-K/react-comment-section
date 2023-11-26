import { comments, setComments } from "./comments";

export function deleteComment(id) {
    const updatedComments = comments.filter(comment => comment.id !== id && comment.parentId !== id);
    setComments(updatedComments);
    return comments;
}