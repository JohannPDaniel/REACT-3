import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, Store } from '.';

/* 
    useDispatch => Dispara uma ação -> state
    useSelector => Forma como a store e o estado -> setState
 */

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<Store>();
