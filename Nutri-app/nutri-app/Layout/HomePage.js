import {View, Text, Button, SafeAreaView, Image, Pressable} from 'react-native';
import newInformationIcon from '../assets/newInformationIcon.png';
import userInformation from '../assets/userIcon.png';
import mealIcon from '../assets/mealIcon.png';
import pillIcon from '../assets/pillIicon.png';
import waterIcon from '../assets/waterIcon.png';

const HomePage = ({navigation}) => {
    return(
        <View className='flex h-full  bg-orange-400'>
            <SafeAreaView className='flex'>
                <View className='bg-gray-100 w-full h-full'>
                    <View className='flex-row'>
                        <Text className='text-4xl text-green-600 pb-2 text-center pt-2 font-semibold mt-2 ml-36'>eNutri</Text>
                        <Image source={newInformationIcon} style={{width:40, height:40}} className='rounded-full mt-4 ml-20'/>
                    </View>
                    <View className='ml-5'>
                        <Text className='font-extrabold text-xl mb-2'>Let's Be Healthy</Text>
                        <Text className='text-gray-600'>Take a look at your health status</Text>
                    </View>
                    <View className='ml-5 flex-row mt-2'>
                        <Image source={userInformation} style={{width:70, height:70}} className='rounded-full' />
                        <View className='ml-5'>
                            <Text className='text-gray-600 text-xl font-semibold'>Tom Cobley</Text>
                            <Text className='text-black text-base mt-2 ml-1'>CKD stage 4</Text>
                        </View>
                        <Pressable className='rounded-xl bg-purple-500 ml-5 pl-5 pr-5'>
                            <Text className='text-center mt-2 font-semibold text-lg text-white'>Doctor's</Text>
                            <Text className='text-center font-semibold text-lg text-white'>Instruction</Text>
                        </Pressable>
                    </View>
                    <View className='bg-yellow-400 mt-3 mb-2 ml-5 mr-5 rounded-xl min-h-2'>
                        <Text className='text-xs'> </Text>
                    </View>
                    <View className='rounded-xl ml-5 mt-3 border-1 mr-5 border-gray-300 bg-white flex-row'>
                        <Image source={mealIcon} style={{width:110, height:110}} className='ml-5 mt-5 mb-5'/>
                        <View className='ml-5 w-0 flex-grow flex-1'>
                            <Text className='text-green-600 font-bold text-2xl mt-1'>Next Meal:</Text>
                            <Text className='text-base font-semibold'>Honey Butter Air Fried Salmon Filet</Text>
                            <View className='flex-row'>
                                <Text className='ml-3 text-xl text-green-600 font-bold'>Type: </Text>
                                <Text className='text-xl text-orange-400 font-semibold'>Dinner</Text>
                            </View>
                            <Text className='ml-24 mt-2 text-yellow-400 font-semibold text-2xl'>7:00pm</Text>
                        </View>
                    </View>
                    <View className='rounded-xl ml-5 border-1 mr-5 border-gray-300 bg-white mt-4 flex-row'>
                        <Image source={pillIcon} style={{width:110, height:110}} className='ml-5 mt-8 mb-5'/>
                        <View className='ml-5 w-0 flex-grow flex-1'>
                            <Text className='text-purple-500 font-bold text-2xl mt-1'>Next dispense:</Text>
                            <View className='ml-5'>
                                <Text className='text-xl text-green-600 font-bold'>Medicine: </Text>
                                <Text className='text-base font-semibold ml-16'>erythropoietin</Text>
                            </View>
                            <View className='flex-row ml-5'>
                                <Text className='text-xl text-green-600 font-bold'>Amount: </Text>
                                <Text className='text-xl text-orange-400 font-semibold'>10mg</Text>
                            </View>
                            <View className='flex-row ml-5 mt-1'>
                                <Text className='text-xl text-green-600 font-bold'>Count: </Text>
                                <Text className='text-xl text-orange-400 font-semibold'>2</Text>
                            </View>
                            <Text className='ml-24 text-yellow-400 font-semibold text-2xl'>8:00pm</Text>
                        </View>
                    </View>
                    <View className='rounded-xl ml-5 border-1 mr-5 border-gray-300 bg-white mt-4 flex-row'>
                        <Image source={waterIcon} style={{width:100, height:100}} className='ml-5 mt-5 mb-5'/>
                        <View className='ml-8'>
                            <Text className='text-blue-400 font-bold text-2xl mt-1'>Next Dispense:</Text>
                            <View className='flex-row mt-2 ml-5'>
                                <Text className='text-xl text-green-600 font-bold'>Amount: </Text>
                                <Text className='text-xl text-orange-400 font-semibold'>100ml</Text>
                            </View>
                            <View>
                                <Text className='ml-24 mt-9 text-yellow-400 font-semibold text-2xl'>8:00pm</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomePage;