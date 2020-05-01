import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: stretch;
    align-items: flex-end;
    cursor: pointer;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
`;
