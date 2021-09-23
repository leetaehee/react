import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonBlock = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: 0.5rem;
    }
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정 */
const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        marign-left: 0.5rem;
    }
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
    return (
        <WriteActionButtonBlock>
            <StyledButton cyan onClick={onPublish}>
                포스트 {isEdit ? '수정' : '등록'}
            </StyledButton>
            <StyledButton onClick={onCancel}>취소</StyledButton>
        </WriteActionButtonBlock>
    )
};

export default WriteActionButtons;