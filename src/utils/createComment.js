import { comments } from "./comments";

export function createComment({ message, parentId=undefined }) {
    const newComment = {
        id: comments.length + 1,
        parentId,
        message,
        createdAt: new Date().toISOString(),
    };
    
    comments.push(newComment);
    
    return comments;
}