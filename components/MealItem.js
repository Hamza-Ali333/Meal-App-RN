import React from 'react';
import {
    View,
    Platform,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';

const MealItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={() => { props.onSelectMeal }}>
                <View>
                    <View style={{ ...styles.nealRow, ...styles.mealHeader }}>
                        <ImageBackground style={styles.bgImage} source= {{uri: props.image}}>
                            <View style={styles.titleContainer}>
                        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>

                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;