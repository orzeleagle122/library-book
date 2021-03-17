import styled from 'styled-components';
import { BsFillPersonFill, BsFillBookmarkFill, BsSearch, BsHouseDoorFill } from 'react-icons/bs';
import { MdFavorite } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";

export const Wrapper=styled.nav`
    font-family: 'Poppins', sans-serif;
    position:fixed;
    left:0;
    top:0;
    padding:25px 0;
    width:157px;
    height: 100vh;
    background-color:#2d3ddf;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const LogoLink=styled(ImBooks)`
    display: block;
    width:68px;
    height:68px;
    border: none;
    color:white;
    cursor:pointer;
    margin-top:15px;
    margin-bottom: 5vh;
`;

export const LinkList=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`;

export const LogoutButton=styled.div`
    margin-top: auto;
`;

export const BsHouseDoorFillIcon=styled(BsHouseDoorFill)`
    font-size:25px;
`;

export const BsFillBookmarkFillIcon=styled(BsFillBookmarkFill)`
font-size:25px;
`;
export const BsSearchIcon=styled(BsSearch)`
font-size:25px;
`;
export const BsFillPersonFillIcon=styled(BsFillPersonFill)`
font-size:25px;
`;
export const RiLogoutBoxLineIcon=styled(RiLogoutBoxLine)`
font-size:25px;
`;
export const MdFavoriteIcon=styled(MdFavorite)`
font-size:25px;
`;

export const SpanText=styled.span`
    display:block;
`;
