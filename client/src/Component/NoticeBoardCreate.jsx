import React, { useState } from 'react';

function NoticeBoardCreate() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);
    const handleContents = (e) => setContents(e.target.value);
    const writing = (e) => {
        e.preventDefault(); // 기본 제출 동작 방지
        fetch('http://localhost:3000/writing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // JSON 형식으로 보내기 위한 헤더
            },
            body: JSON.stringify({
                title: title,
                contents: contents
            })
        })
            .then(response => response.json())
            .then(result => {
                // 서버로부터 받은 응답을 확인하고, 성공적으로 전송되었을 때 알림 창을 띄웁니다.
                if (result.message === '데이터가 성공적으로 전송되었습니다.') {
                    alert('게시글이 작성되었습니다.');
                    localStorage.setItem('sessionID', result.sessionID);
                    window.location.href = '/MainContents';
                } else {
                    alert('게시글 작성이 실패했습니다. 다시 시도해주세요.');
                }
            })
            .catch(error => console.error('에러 발생: ', error));
    };
    return (
        <div className="form-container">
            <form className="form-background" onSubmit={writing}>
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
