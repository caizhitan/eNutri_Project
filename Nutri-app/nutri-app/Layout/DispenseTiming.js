import axios from 'axios';
import { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, Pressable, FlatList, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import waterIcon from '../assets/waterIcon.png';
import pillIcon from '../assets/pillIicon.png';

const pillTimeUrl = 'http://172.20.10.3/api/pillTime/users';
const waterTimeUrl = 'http://172.20.10.3/api/waterTime/users';
const dispenserUrl = 'http://172.20.10.3/api/dispenser/pill/1/edit';

const Item = ({name, amount, time}) => (
    <View className='flex-row ml-5'>
        <View className='bg-yellow-200 flex-row mt-3 rounded-xl mr-5'>
            <Image source={pillIcon} style={{width:60, height:60}} className='mt-3 round-xl ml-3 mb-3'/>
            <View className='w-52'>
                <Text className='text-purple-400 font-semibold text-lg mt-5 ml-2'>{name}</Text>
                <View className='flex-row'>
                    <Text className='ml-5 text-orange-400 font-bold text-lg '>{amount}</Text>
                    <Text className='ml-20 text-blue-400 font-bold text-lg'>{time}</Text>
                </View>
            </View>
        </View>
    </View>
  );

const WaterItem = ({amount, time}) => (
  <View className='ml-5'>
    <View className='bg-green-300 flex-row mt-3 rounded-xl mr-5'>
        <Image source={waterIcon} style={{width:60, height:60}} className='mt-3 round-xl ml-3 mb-3'/>
        <View className='w-52'>
            <Text className='text-blue-400 font-bold text-lg mt-2'>Amount: </Text>
            <View className='flex-row'>
                <Text className='text-orange-400 font-bold text-lg ml-10'>{amount}</Text>
                <Text className='ml-6 text-blue-400 font-bold text-lg'>{time}</Text>
            </View>
        </View>
    </View>
  </View>  
);

const DispenseTiming = ({navigation}) =>{

    const [pill, setPill] = useState();
    const [water, setWater] = useState();

    useEffect(()=>{
        if(!pill){
            axios.get(pillTimeUrl)
            .then((response)=>{
            const pillTime = response.data;
            if (Array.isArray(pillTime)) {
            setPill(pillTime);
            }
            })
        }
        if(!water){
            axios.get(waterTimeUrl)
            .then((response) =>{
                const waterTime = response.data;
                if (Array.isArray(waterTime)) {
                    setWater(waterTime)
                }
            }
                )
            
        }
    }, [])

    const handleDispense = () => {
        const dispenseParam = {'pillName': 'test', 'pillAmount': "20","dispenseType":"1","ifdispensed":"0","pillType_id":"1"};
        axios.post(dispenserUrl, dispenseParam)
        .then(function(response){
            console.log(response.data);
        })
    }
    return(
        <View className='flex h-full  bg-orange-400'>
            <SafeAreaView className='flex'>
                <View className='bg-gray-100 w-full h-full'>
                    <Text className='text-3xl text-green-600 pb-2 text-center pt-2'>Dispense Timings</Text>
                    <View className='flex-row bg-white rounded-xl ml-5 mr-5'>
                        <Text className='text-xl font-semibold ml-3 mt-2'>Select Hours out:</Text>
                        <TextInput className='text-xl font-base border-2 ml-3 rounded-xl p-2 w-40' keyboardType='name-phone-pad'></TextInput>
                    </View>
                    <View className='bg-yellow-400 mt-3 mb-2 ml-5 mr-5 rounded-xl min-h-2'>
                        <Text className='text-xs'></Text>
                    </View>
                    <View className='flex-row ml-5 rounded-xl bg-white mr-5'>
                        <Text className='font-semibold text-xl ml-3 mt-2'>Pill</Text>
                        <View>
                            <FlatList className='max-h-56' data={pill} renderItem={({item}) => <Item name={item.pillName} amount={item.pillAmount} time={item.pillTime}/>} keyExtractor={item => item.pTime_id} />
                        </View>
                    </View>
                    <View className='bg-yellow-400 mt-3 mb-2 ml-5 mr-5 rounded-xl min-h-2'>
                        <Text className='text-xs'></Text>
                    </View>
                    <View className='flex-row ml-5 rounded-xl bg-white mr-5'>
                        <Text className='font-semibold text-xl ml-3 mt-2'>Water</Text>
                            <FlatList className='max-h-56' data={water} renderItem={({item}) => <WaterItem amount={item.waterAmount} time={item.waterTime}/>} keyExtractor={item => item.wTime_id} />

                    </View>
                    <View className='bg-yellow-400 mt-3 mb-2 ml-5 mr-5 rounded-xl min-h-2'>
                        <Text className='text-xs'></Text>
                    </View> 
                    <Pressable className='border-2 border-gray-400 rounded-xl ml-5 mr-5 mt-3 bg-purple-400' onPress={
                            // ()=>{navigation.navigate('HomeRoot');}
                            handleDispense
                        }>
                            <Text className='text-center font-semibold text-2xl pt-3 pb-3'>Dispense pill</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DispenseTiming;