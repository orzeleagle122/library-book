import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {
    cleanErrors
} from '../actions';

const ClearErros = (WrappedComponent,{clean}) => {
    useEffect(()=>{
        return clean();
    })

    return ()=>(
        <WrappedComponent/>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        clean:()=>dispatch(cleanErrors())
    }
}
 
export default connect(null,mapDispatchToProps)(ClearErros);