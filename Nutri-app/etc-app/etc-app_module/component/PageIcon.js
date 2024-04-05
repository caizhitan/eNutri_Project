import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import pillJar from '../assets/pillJar.png';
import waterIcon from '../assets/waterIcon.png';

const PageIcon = props => {
    return(
        <View className='justify-center items-center w-full'>
            {props.pillOrWater ? (
                <View className='justify-center items-center w-full'>
                    <Image source={pillJar} style={{width:150, height:150}} className=' mt-5'/>
                    <Text className='mt-2 text-gray-600 mb-2 text-m font-semibold'>Select pill to dispense</Text>
                </View>
                ):(
                    <View className='justify-center items-center w-full'>
                        <Image source={waterIcon} style={{width:150, height:150}} className=' mt-5'/>
                        <Text className='mt-2 text-gray-600 mb-2 text-m font-semibold'>Select amount of water to dispense</Text>
                </View>
            )}
        </View>
    )
}

export default PageIcon;