import { FaReply, FaEdit, FaTrash} from "react-icons/fa";
import { IconBtn } from "./IconBtn";
import { commentsByParentId } from "../utils/getReplies";
import { CommentList } from "./CommentList";
import { useEffect, useState } from "react";
import { CommentForm } from './CommentForm';
import { createComment } from "../utils/createComment";
import { deleteComment } from "../utils/deleteComment";

const dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' });

export function Comment({ id, message, removeComment, createdAt }) {
    const [childComments, setChildComments] = useState([]);
    const [areChildrenHidden, setAreChildrenHidden] = useState(false);
    const [isReplying, setIsReplying] = useState(false);

    useEffect(() => {
        setChildComments(commentsByParentId()[id]);
    }, [id]);

    function onCommentReply(message) {
        createComment({ message, parentId: id });
        setChildComments(commentsByParentId()[id]);
        return;
    }

    function onCommentDelete() {
        removeComment(id);
        return;
    }

    function removeChildComment(id) {
        deleteComment(id);
        setChildComments(commentsByParentId()[id]);
        return;
    }

    return (
    <>
        <div className="comment">
            <div className="header">
                {/* <span className="date">
                    { dateFormatter.format(Date.parse(createdAt)) }
                </span> */}
            </div>
            <div className="message">{message}</div>
            <div className="footer">
                <IconBtn
                    onClick={() => setIsReplying(prev => !prev)}
                    isActive={isReplying}
                    Icon={FaReply} />
                {/* <IconBtn Icon={FaEdit} /> */}
                <IconBtn
                    onClick={onCommentDelete}
                    Icon={FaTrash}
                    color="danger" />
            </div>
            {
                isReplying && (
                    <div className="mt-1 ml-3">
                        <CommentForm autoFocus onSubmit={onCommentReply} />
                    </div>
                )
            }
        </div>
        { childComments?.length > 0 && (
            <>
                <div className={`nested-comments-stack ${areChildrenHidden ? "hide" : ""}`}>
                    <button className="collapse-line" aria-label="hide-replies" onClick={() => setAreChildrenHidden(true)} />
                    <div className="nested-comments">
                        <CommentList comments={childComments} removeComment={removeChildComment}/>
                    </div>
                </div>
                <button className={`btn mt-1 ${!areChildrenHidden ? "hide" : ""}`} onClick={() => setAreChildrenHidden(false)}>
                    Show Replies
                </button>
            </>
        )}
    </>
    )
}