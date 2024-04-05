import { View, Text, Image, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import circleIcon from '../assets/circleIcon.png';

const FoodAnalyse = ({navigation}) => {
    return(
        <View className='bg-orange-400'>
            <SafeAreaView className='flex'>
                <View className='bg-gray-100 h-full'>
                    <Text className='text-3xl text-green-600 pb-2 text-center pt-2'>Analyse Page</Text>
                    <View className='flex-row'>
                        <Image source={circleIcon} style={{width:50, height:50}} className='bg-red-600 rounded-full ml-5'/>
                        <Text className='ml-1 mt-2 font-semibold text-lg'>This food is not good for your health</Text>
                    </View>
                    <View className='bg-yellow-400 mt-3 ml-5 mr-5 mb-5 rounded-xl min-h-2'>
                        <Text className='text-xs'></Text>
                    </View>
                    <View className='rounded-xl ml-5 mr-5 bg-white'>
                        <View className='ml-5 mt-5'>
                            <Text className='text-2xl font-bold text-green-600'>Food:</Text>
                            <Text className='text-xl font-semibold ml-20 text-red-600'>Doughnut</Text>
                        </View>
                        <View className='ml-5 mb-5'>
                            <Text className='text-xl font-bold text-green-600'>Estimated nutritional Values:</Text>
                            <View className='ml-5 mt-1 flex-row'>
                                <View>
                                    <Text className='text-lg font-semibold text-yellow-600'>Calories: </Text>
                                    <Text className='text-lg font-semibold text-yellow-600'>Potassium: </Text>
                                    <Text className='text-lg font-semibold text-yellow-600'>Sodium: </Text>
                                    <Text className='text-lg font-semibold text-yellow-600'>Phosphorus: </Text>
                                </View>
                                <View>
                                    <View className='flex-row'>
                                        <Text className='text-lg font-semibold text-red-600 ml-10'>253</Text>
                                        <Text className='text-lg font-semibold ml-1'>cal</Text>
                                    </View>
                                    <View className='flex-row'>
                                        <Text className='text-lg font-semibold text-red-600 ml-10'>59.69</Text>
                                        <Text className='text-lg font-semibold ml-1'>mg</Text>
                                    </View>
                                    <View className='flex-row'>
                                        <Text className='text-lg font-semibold text-red-600 ml-10'>256.62</Text>
                                        <Text className='text-lg font-semibold ml-1'>mg</Text>
                                    </View>
                                    <View className='flex-row'>
                                        <Text className='text-lg font-semibold text-red-600 ml-10'>126.43</Text>
                                        <Text className='text-lg font-semibold ml-1f'>mg</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Pressable className='border-2 border-gray-400 rounded-xl ml-5 mr-5 mt-3 bg-purple-400' onPress={()=>{
                            navigation.navigate('HomeRoot');
                        }}>
                            <Text className='text-center font-semibold text-2xl pt-3 pb-3'>Save food eaten</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default FoodAnalyse;