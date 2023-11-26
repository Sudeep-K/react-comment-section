import React, { useEffect, useState } from 'react';
import './App.css';
import { commentsByParentId } from './utils/getReplies';
import { CommentList } from './components/CommentList';
import { CommentForm } from './components/CommentForm';
import { createComment } from './utils/createComment';
import { comments } from './utils/comments';
import { deleteComment } from './utils/deleteComment';

function App() {
  const [rootComments, setRootComments] = useState([]);

  useEffect(() => {
    let replies = commentsByParentId()
    
    setRootComments(replies[undefined]);
  }, [comments]);

  function onCommentCreate(message) {
    createComment({ message });
    let replies = commentsByParentId()
    setRootComments(replies[undefined]);
    return;
  }

  function removeComment(id) {
    deleteComment(id);
    let replies = commentsByParentId()
    setRootComments(replies[undefined]);
  }

  return (
    <div className='container'>
      <h3 className='comments-title'>Comments</h3>
      <section>
        <CommentForm onSubmit={onCommentCreate} />
        { rootComments != null && rootComments.length > 0 && (
          <div className='mt-4'>
            <CommentList comments={rootComments} removeComment={removeComment} />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
