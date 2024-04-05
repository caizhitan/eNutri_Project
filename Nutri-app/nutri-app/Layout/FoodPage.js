import {View, Text, SafeAreaView, Image, FlatList, Pressable} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ai_icon from '../assets/ai_icon.png';
import foodIcon from '../assets/mealIcon.png';

const foodUri = 'http://172.20.10.3/api/food/users';

const Item = ({name, food}) => (
    <View className='flex-row ml-5'>
        <View className='bg-orange-200 flex-row mt-3 rounded-xl mr-5'>
            <Image source={foodIcon} style={{width:60, height:60}} className='mt-3 round-xl ml-3 mb-3'/>
            <View className='w-52'>
                <Text className='text-green-600 font-semibold text-xl mt-3 ml-3'>{name}</Text>
            </View>
        </View>
    </View>
  );

const FoodPage = ({navigation}) => {
    const [food, setFood] = useState();
    useEffect(()=>{
        if(!food){
            axios.get(foodUri)
            .then((response)=>{
            const foodData = response.data;
            if (Array.isArray(foodData)) {
            setFood(foodData);
            console.log(foodData)
            }
            })
        }
    }, [])
    return(
        <View className='flex h-full  bg-orange-400'>
            <SafeAreaView className='flex'>
                <View className='bg-gray-100 w-full h-full'>
                    <Text className='text-3xl text-green-600 pb-2 text-center pt-2 font-semibold'>Food</Text>
                    <View className='bg-yellow-400 mt-3 mb-2 ml-5 mr-5 rounded-xl min-h-2'>
                        <Text className='text-xs'></Text>
                    </View>
                    <View className='flex-row'>
                        <Text className='font-bold text-xl ml-3'>Recipe</Text>
                        <FlatList className='max-h-56' data={food} renderItem={({item}) => <Item name={item.foodName} />} keyExtractor={item => item.food_id} />
                    </View>
                    <View className='bg-yellow-400 mt-3 mb-2 ml-5 mr-5 rounded-xl min-h-2'>
                        <Text className='text-xs'></Text>
                    </View>
                    <View className='bg-white rounded-xl ml-5 mr-5 mt-3'>
                        <Text className='ml-5 mt-1 text-xl font-bold'>Intelligent Nutri</Text>
                        <View className='flex-row'>
                            <Image source={ai_icon} style={{width:100, height:100}} className='ml-10'/>
                            <Pressable onPress={()=>{
                                navigation.navigate('FoodDetect');
                                }} className='mt-3 ml-5 mb-3 rounded-2xl border-yellow-400 border-4 bg-cyan-300 mr-5'>
                                <Text className='text-center text-2xl font-semibold text-purple-400 m-5'>Detect Food</Text>
                            </Pressable>
                        </View>
                        <View className='ml-5 mt-3'>
                            <Text className='font-bold text-xl mb-1'>Last Food Eaten: </Text>
                            <View className='flex-row ml-2 rounded-2xl border-yellow-400 border-4 mb-5 mr-5 mt-1'>
                                <View className='ml-1 mr-1 mt-2'>
                                    <Text className="font-semibold text-xl">FoodName</Text>
                                </View>
                                <View className='bg-yellow-200'>
                                    <Text className=''> </Text>
                                </View>
                                <View className='flex-grow'>
                                    <Text className='font-medium text-lg ml-1'>Calories</Text>
                                    <View className='bg-yellow-200'>
                                        <Text className=''></Text>
                                    </View>
                                    <Text className='font-medium text-lg ml-1'>Potassium</Text>
                                    <View className='bg-yellow-200'>
                                        <Text className=''></Text>
                                    </View>
                                    <Text className='font-medium text-lg ml-1'>Sodium</Text>
                                    <View className='bg-yellow-200'>
                                        <Text className=''></Text>
                                    </View>
                                    <Text className='font-medium text-lg ml-1'>Phosphorus</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default FoodPage;