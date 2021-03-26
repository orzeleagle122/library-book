import styled from "styled-components";
import {
  BsFillPersonFill,
  BsFillBookmarkFill,
  BsSearch,
  BsHouseDoorFill,
} from "react-icons/bs";
import {MdFavorite} from "react-icons/md";
import {RiLogoutBoxLine} from "react-icons/ri";
import {ImBooks} from "react-icons/im";

export const Wrapper = styled.nav`
  font-family: "Poppins", sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 87px;
  height: 100vh;
  background-color: #2d3ddf;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: 9999;

  @media screen and (max-width: 480px) {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-top: auto;

    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    width: 100%;
    height: 80px;

    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 0px;
    display: flex;
    flex-direction: row;
  }
`;

export const LogoLink = styled(ImBooks)`
  display: block;
  width: 56px;
  height: 56px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 5vh;

  @media screen and (max-width: 480px) {
    /* margin-top:0;
        margin-bottom: 0;
        margin-left:25px;
        margin-right: 5px;
        display: block;
        width:58px;
        height:58px; */
    display: none;
  }
`;

export const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 480px) {
    display: flex;
  }
`;

export const ItemList = styled.li`
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    margin-top: 0px;
    margin-left: 15px;
  }
`;

export const LogoutButton = styled.div`
  margin-top: auto;
  @media screen and (max-width: 480px) {
    margin-top: 0;
    margin-left: auto;
    margin-right: 25px;
  }
`;

export const BsHouseDoorFillIcon = styled(BsHouseDoorFill)`
  font-size: 25px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const BsFillBookmarkFillIcon = styled(BsFillBookmarkFill)`
  font-size: 25px;
  @media screen and (max-width: 480px) {
  }
`;
export const BsSearchIcon = styled(BsSearch)`
  font-size: 25px;
  @media screen and (max-width: 480px) {
  }
`;
export const BsFillPersonFillIcon = styled(BsFillPersonFill)`
  font-size: 25px;
  @media screen and (max-width: 480px) {
  }
`;
export const RiLogoutBoxLineIcon = styled(RiLogoutBoxLine)`
  font-size: 25px;
  @media screen and (max-width: 480px) {
  }
`;
export const MdFavoriteIcon = styled(MdFavorite)`
  font-size: 25px;
  @media screen and (max-width: 480px) {
  }
`;

export const SpanText = styled.span`
  display: block;
  @media screen and (max-width: 480px) {
  }
`;
