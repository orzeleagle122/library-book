import styled, { css } from 'styled-components';
import {
    RiDeleteBin2Fill,
    RiRecycleFill
} from "react-icons/ri";


export const GenreListWrapper=styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:50px;
    flex-wrap:wrap;
`;

export const Genre=styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    min-width:200px;
    height:60px;
    background-color: #D7EEFF;
    margin-right:10px;
    margin-bottom:10px;
    border-radius: 20px;

    ${({remove})=>remove && css`
    background-color: #FFB2AE;
    `}

    ${({news})=>news && css`
    background-color: #77DD77;
    `}


`;

export const RiDeleteBin2FillIcon=styled(RiDeleteBin2Fill)`
    ${({remove})=>remove && css`
    display:none;
    `}

    ${({news})=>news && css`
    display:none;
    `}
`;
export const RiRecycleFillIcon=styled(RiRecycleFill)`
    display:none;

    ${({remove})=>remove && css`
    display:inline-block;
    `}
`;

export const Title=styled.span`
    font-size:20px;
    margin:auto;
    padding:0 60px;
`;

export const DeleteButton=styled.button`
    border:none;
    background-color: transparent;
    font-size:30px;
    opacity: 0.7;
    margin-right:10px;
`;

export const AcceptButton=styled.button`
    border:none;
    padding: 10px 50px;
    background-color: #3ACE3A;
    border-radius: 10px;
    font-size:20px;
    margin-right: 10px;

`;
export const CancelButton=styled.button`
    border:none;
    padding: 10px 30px;
    background-color: #DD7777;
    border-radius: 10px;
    font-size:20px;

`;