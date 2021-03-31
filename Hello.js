import React from 'react';
import { StackActions } from '@react-navigation/native';
export const isReadyRef=React.createRef();
export const navigationRef=React.createRef();


export function navigate(){
    navigationRef.current && navigationRef.current.navigate('Home');
}

export function navigateToHome1(){
    navigationRef.current?.dispatch(StackActions.replace('Home'));
}

export function navigateToHome() {
    if (isReadyRef.current && navigationRef.current)
    navigationRef.current?.navigate('Home');
  }