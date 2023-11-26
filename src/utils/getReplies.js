import { comments } from "../utils/comments";

export const commentsByParentId = () => {
    if (comments == null) return []
    const group = {}

    comments.forEach(comment => {
        group[comment.parentId] ||= []
        group[comment.parentId].push(comment)
    })

    return group
}