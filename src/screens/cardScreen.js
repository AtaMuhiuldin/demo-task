import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Card from '../components/cards/card';
import ScreenContainer from '../components/core/abstractScreenContainer'
const CardScreen = ({}) => {
    return (
        <ScreenContainer>
                <Card/> 
                <Card/>  
                <Card/>  
                <Card/>  
        </ScreenContainer>
    )
}
export default CardScreen;