import React from 'react';
import styled from 'styled-components';
import harry from '../assets/img/harry.jpg';
import { 
    // ImHeart,
    ImHeartBroken
 } from "react-icons/im";
import Heading from '../components/atoms/Heading/Heading';

const FavoritePageWrapper=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;

const FavoriteItem=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin-bottom: 20px;
    border-top: 1px solid #D1D1D1;
    border-bottom: 1px solid #D1D1D1;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const BookImages=styled.div`
    width:200px;
    height:300px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position:relative;
`;

const BookImage=styled.img`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const BookContent=styled.div`
    padding:10px 15px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    height:300px;

`;

const BookTitle=styled.h1`
    font-size:18px;
    letter-spacing:1px;
    font-weight:700;
    margin-bottom: 15px;

`;

const BookGenres=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
`;

const Genres=styled.div`
    background-color: black;
    padding: 5px 10px;
    font-size: 12px;
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 10px 10px;
`;

const BookAuthor=styled.span`
    font-size:14px;
`;

const Available=styled.div`
    color: blue;
    margin-top: auto;
`;

const BookInfo=styled.p`
    color: #D1D1D1;
    font-size: 12px;
`;

const BookOrderButton=styled.button`
    width:64px;
    height:300px;
    background-color:#2d3ddf;
    margin-left: auto;
    display:flex;
    justify-content: center;
    align-items:center;
    color:white;
    font-size:18px;
    letter-spacing:1px;
    font-weight:700;
    cursor:pointer;
    border:none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const VerticalText=styled.p`
    writing-mode: vertical-rl;
`;

const FavoriteHearth=styled(ImHeartBroken)`
    color:white;
    position:absolute;
    z-index:999;
    right:150px;
    bottom: 20px;
    font-size: 30px;
    opacity: 0.7;
    transition: opacity 0.5s linear;
    transition: color 0.5s linear;

    &:hover {
    color:red;
    opacity: 1;
  }
`;
// const FavoriteHearthBroken=styled(ImHeartBroken)`
//     display:none;

//     &:hover {
//         color:red;
//         position:absolute;
//         z-index:9999;
//         right:150px;
//         bottom: 10px;
//         font-size: 40px;
//   }
// `;


const FavoritePage = () => {
    return ( 
        <>
            <Heading>
                Favorite Books
            </Heading>
            <FavoritePageWrapper>
                <FavoriteItem>
                    <BookImages>
                        <BookImage src={harry} alt="id" />
                        <FavoriteHearth />
                        {/* <FavoriteHearthBroken /> */}
                    </BookImages>
                    <BookContent>
                        <BookTitle>
                            Harry Potter i czara ognia
                        </BookTitle>
                        <BookAuthor>
                            Adam Mickiewicz
                        </BookAuthor>
                        <BookGenres>
                            <Genres>
                               #Fantasy 
                            </Genres>
                            <Genres>
                                #Romanse
                            </Genres>
                        </BookGenres>
                        <BookInfo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </BookInfo>
                        <Available>
                            15 / 20 pieces of book
                        </Available>
                    </BookContent>
                    <BookOrderButton>
                        <VerticalText>
                           Boooking Book 
                        </VerticalText>                        
                    </BookOrderButton>
                </FavoriteItem>               
                <FavoriteItem>
                    <BookImages>
                        <BookImage src={harry} alt="id" />
                        <FavoriteHearth />
                        {/* <FavoriteHearthBroken /> */}
                    </BookImages>
                    <BookContent>
                        <BookTitle>
                            Harry Potter i czara ognia
                        </BookTitle>
                        <BookAuthor>
                            Adam Mickiewicz
                        </BookAuthor>
                        <BookGenres>
                            <Genres>
                               #Fantasy 
                            </Genres>
                            <Genres>
                                #Romanse
                            </Genres>
                        </BookGenres>
                        <BookInfo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </BookInfo>
                        <Available>
                            15 / 20 pieces of book
                        </Available>
                    </BookContent>
                    <BookOrderButton>
                        <VerticalText>
                           Boooking Book 
                        </VerticalText>                        
                    </BookOrderButton>
                </FavoriteItem>               
                <FavoriteItem>
                    <BookImages>
                        <BookImage src={harry} alt="id" />
                        <FavoriteHearth />
                        {/* <FavoriteHearthBroken /> */}
                    </BookImages>
                    <BookContent>
                        <BookTitle>
                            Harry Potter i czara ognia
                        </BookTitle>
                        <BookAuthor>
                            Adam Mickiewicz
                        </BookAuthor>
                        <BookGenres>
                            <Genres>
                               #Fantasy 
                            </Genres>
                            <Genres>
                                #Romanse
                            </Genres>
                        </BookGenres>
                        <BookInfo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </BookInfo>
                        <Available>
                            15 / 20 pieces of book
                        </Available>
                    </BookContent>
                    <BookOrderButton>
                        <VerticalText>
                           Boooking Book 
                        </VerticalText>                        
                    </BookOrderButton>
                </FavoriteItem>               
            </FavoritePageWrapper>
        </>
     );
}
 
export default FavoritePage;