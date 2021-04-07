import * as React from 'react';
import { StackActions } from '@react-navigation/native';
export const navigationRef=React.createRef();


export function navigate(){
    navigationRef.current?.navigate('Home');
}

export function navigateToNavigation(){
    navigationRef.current?.navigate('Navigation2');
}

export function navigateToNext(name){
    // navigationRef.current?.dispatch(StackActions.replace('NavigationScreen')); 
     navigationRef.current?.navigate(name);

}