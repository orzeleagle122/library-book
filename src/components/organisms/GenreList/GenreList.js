import React from 'react';
import Heading from '../../atoms/Heading/Heading';
import {    
    GenreListWrapper,
    Genre,
    AcceptButton,
    DeleteButton,
    Title,
    RiDeleteBin2FillIcon,
    CancelButton,
    RiRecycleFillIcon
} from './GenreList.elements';
import {connect} from 'react-redux';
import {
    removeGenre
} from '../../../actions';

const GenreList = ({genreList,genreRemoved,remove}) => {



    return ( 
        <>
            <Heading>List of new genre:</Heading>
            <GenreListWrapper>
                {genreList.map(item=>(
                <Genre key={item.id} news>
                    <Title>
                        {item.genre}
                    </Title>
                    <DeleteButton onClick={()=>remove(item.id)}>
                        <RiDeleteBin2FillIcon/> 
                    </DeleteButton>                     
                </Genre>
                ))} 
            </GenreListWrapper>

            <Heading>List of removing genre:</Heading>
            <GenreListWrapper>
                {genreRemoved.map(item=>(
                <Genre key={item.id} remove>
                    <Title>
                        {item.genre}
                    </Title>
                    <DeleteButton>
                        <RiDeleteBin2FillIcon remove/> 
                        <RiRecycleFillIcon remove/> 
                    </DeleteButton>                     
                </Genre>
                ))} 
            </GenreListWrapper>

            <Heading>List of available genre:</Heading>
            <GenreListWrapper>
                {genreList.map(item=>(
                <Genre key={item.id}>
                    <Title>
                        {item.genre}
                    </Title>
                    <DeleteButton onClick={()=>remove(item.id)}>
                        <RiDeleteBin2FillIcon/> 
                    </DeleteButton>                     
                </Genre>
                ))} 
            </GenreListWrapper>

            <AcceptButton>
                Accept
            </AcceptButton>
            <CancelButton>
                Cancel
            </CancelButton>
        </>
     );
}

const mapStateToProps=({genreList,genreRemoved})=>{
    return {
        genreList,
        genreRemoved
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        remove: (item)=>dispatch(removeGenre(item)),
        // listGenre: ()=>dispatch(listGenre),
        // addGenre: ()=>dispatch(genre)
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(GenreList);