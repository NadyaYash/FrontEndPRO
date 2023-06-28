import React from 'react'
import { useDispatch } from 'react-redux';
import { changeLangAction } from '../../store/reducers/cardReducer';
import { deleteCardAction } from '../../store/reducers/cardReducer';



export default function CardItem({id, rus, eng, lang}) {
    const dispatch = useDispatch();


  
    const lang_l = lang === 'eng' ? eng : rus;
    
  
      
   
  
    return (
      <div onClick={() => dispatch(changeLangAction(id))}
            onDoubleClick={()=> dispatch(deleteCardAction(id))}
       

  
    >
          
            {lang_l}
          
      </div>
    )
  
      
  }

