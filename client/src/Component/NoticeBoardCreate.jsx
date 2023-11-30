import React, { useState } from 'react';
import '../css/NoticeBoard.css'

function NoticeBoardCreate() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);
    const handleContents = (e) => setContents(e.target.value);

    return (
        <div className="form-container">
            <form className="form-background" onSubmit="#">
                <div className="form-group">
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitle}
                        placeholder="글제목"
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                  <textarea
                      value={contents}
                      onChange={handleContents}
                      placeholder="글내용"
                      className="form-textarea"
                  />
                </div>
                <div className="form-group">
                    <button type="submit" className="form-button">
                        글작성
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NoticeBoardCreate;
