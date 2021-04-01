import * as React from 'react';
import { StackActions } from '@react-navigation/native';
export const navigationRef=React.createRef();


export function navigate(){
    navigationRef.current?.navigate('Home');
}

export function navigateToNavigation(){
    navigationRef.current?.navigate('Navigation2');
}

export function navigateToNavigation2(){
    navigationRef.current?.dispatch(StackActions.replace('Navigation2'));
}