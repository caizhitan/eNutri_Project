import {View, Text, SafeAreaView, Button, Pressable, Image} from 'react-native';
import NutriFirst from '../assets/NutriFirst.jpg';

const DrawerStyle = ({navigation}) => {
    return(
        <View className='bg-orange-400 h-full'>
            <SafeAreaView>
                <View className='bg-gray-100 h-full flex'>
                    <View className='flex-row mt-20'>
                        <Text className='text-orange-400 font-bold text-3xl ml-20'>Hi </Text>
                        <Text className='text-orange-400 font-bold text-3xl'>Tom</Text>
                        <Text className='text-orange-400 font-bold text-3xl'>!</Text>
                    </View>
                    <Image source={NutriFirst} style={{width:200, height:200}} className='rounded-xl ml-10 mt-8'/>
                    <Pressable onPress={()=>{
                        navigation.navigate('Food');
                    }} className='mt-10 ml-5 rounded-2xl border-yellow-400 border-4 bg-cyan-300 mr-5'>
                        <Text className='text-center text-xl font-semibold text-purple-400 m-5'>Food page</Text>
                    </Pressable>
                    <Pressable onPress={()=>{
                        navigation.navigate('Dispenser');
                    }} className='mt-10 ml-5 rounded-2xl border-yellow-400 border-4 bg-cyan-300 mr-5'>
                        <Text className='text-center text-xl font-semibold text-purple-400 m-5'>Dispenser page</Text>
                    </Pressable>
                    <Pressable onPress={()=>{
                        navigation.navigate('Camera');
                    }} className='mt-20 ml-5 rounded-2xl bg-orange-400 mr-5'>
                        <Text className='text-center text-xl font-semibold text-blue-400 m-5'>Logout</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DrawerStyle;