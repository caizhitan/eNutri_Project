import {View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import arrowIcon from '../assets/arrowIcon2.png';
import dispenser from '../assets/dispenserv2.jpg';
import circleIcon from '../assets/circleIcon.png';

const pillTypeUrl = 'http://172.20.10.3/api/pillType/users'

const DispenserPage = ({navigation}) =>{

    const [pillType, setPillType] = useState();

    useEffect(()=>{
        if(!pillType){
            axios.get(pillTypeUrl)
            .then((response) =>{
                    const newPillType = response.data;
                    if (Array.isArray(newPillType)) {
                        setPillType(newPillType);
                    }
                }
            )
        }
    })
    return(
        <View className='flex h-full  bg-orange-400'>
            <SafeAreaView className='flex'>
                <View className='bg-gray-100 w-full h-full'>
                    <View className='flex-row'>
                        <Text className='text-3xl text-green-600 pb-2 ml-5 pt-2 mt-3'>Devices</Text>
                        <Pressable className='rounded-3xl ml-44 bg-white mt-2'>
                            <Text className='font-extrabold text-5xl text-green-600 p-2 pl-4 pr-4'>+</Text>
                        </Pressable>
                        </View>
                        <View className='bg-white rounded-xl ml-5 mr-5 mt-3'>
                            <View className='flex-row'>
                                <View>
                                <Text className='text-2xl font-bold ml-3 mt-3'>Nutri Dispenser</Text>
                                <View className='flex-row'>
                                    <Text className='bg-green-600 ml-5 mt-1 rounded-xl'>       </Text>
                                    <Text className='ml-2 text-base font-normal mt-1'>Connected</Text>
                                </View>
                                <View className='flex-row'>
                                    <Text className='text-2xl ml-5 mt-7'>Settings</Text>
                                    <Pressable className='bg-purple-400 rounded-xl mt-6 ml-4 mb-5'>
                                        <Image source={arrowIcon} style={{width:40, height:40}} className='m-1'/>
                                    </Pressable>
                                </View>
                            </View>
                            
                            <Image source={dispenser} style={{width:150, height:200}} className='mr-5 mt-1 mb-1 rounded-lg ml-2'/>
                        </View>
                    </View>
                    <View className='bg-yellow-400 mt-3 mb-2 ml-5 mr-5 rounded-xl min-h-2'>
                        <Text className='text-xs'> </Text>
                    </View>
                    <View>
                        <Pressable className='border-2 border-gray-400 rounded-xl ml-5 mr-5 mt-1 bg-purple-400' onPress={()=>{
                            navigation.navigate('DispenseTiming', {title:'food'});
                        }}>
                            <Text className='text-center font-semibold text-2xl pt-3 pb-3'>All Dispense Timings</Text>
                        </Pressable>
                    </View>
                    <View className='bg-white rounded-xl mt-5 ml-5 mr-5 flex-row'>
                        <View className='mb-5'>
                            <Image source={circleIcon} style={{width:50, height:50}} className='bg-orange-400 rounded-full ml-5 mt-5'/>
                            <Image source={circleIcon} style={{width:50, height:50}} className='bg-yellow-400 rounded-full ml-5 mt-5'/>
                            <Image source={circleIcon} style={{width:50, height:50}} className='bg-purple-400 rounded-full ml-5 mt-5'/>
                            <Image source={circleIcon} style={{width:50, height:50}} className='bg-green-400 rounded-full ml-5 mt-5'/>
                        </View>
                        <View className='mt-2'>
                            {pillType && pillType.map((pill, key) => (
                            <View key={key} className='flex-row mb-5 mt-2'>
                                <Text className='font-semibold text-2xl mt-3 ml-2'>{pill.pillType_id}</Text>
                                <Text className='font-semibold text-2xl mt-2 ml-3'>{pill.pillName}</Text>
                            </View>
                            ))}
                        </View>
                    </View>   
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DispenserPage;