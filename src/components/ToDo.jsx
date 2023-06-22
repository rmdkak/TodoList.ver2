import React from 'react';
import styled from 'styled-components';

function ToDo({ toDo, deleteHandler, completeHandler }) {
    return (
        <TodoContainer>
            <div>
                <h2>{toDo.title}</h2>
                <div>{toDo.body}</div>
            </div>
            <ButtonSet>
                <DeleteButton onClick={() => deleteHandler(toDo.id)}>
                    삭제하기
                </DeleteButton>
                <CompleteButton onClick={() => completeHandler(toDo.id)}>
                    {toDo.isDone ? '취소' : '완료'}
                </CompleteButton>
            </ButtonSet>
        </TodoContainer>
    );
}

export default ToDo;

const TodoContainer = styled.div`
  border: 4px solid teal;
  width: 270px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`;
//Button 컴포넌트를 인자로 받아 확장하는 방법 (장점 : 재사용, 동적인 스타일링 구현)
const DeleteButton = styled(Button)`
  border: 2px solid red;
  background-color: #fff;
`;

const CompleteButton = styled(Button)`
  border: 2px solid green;
  background-color: #fff;
`;