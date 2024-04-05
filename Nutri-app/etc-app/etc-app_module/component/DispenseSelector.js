import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import pillJar from '../assets/pillJar.png';
import waterIcon from '../assets/waterIcon.png';

const DispenseSelector = props =>{
    return(
    <View className='flex-row mt-5 justify-center items-center'>
        <Pressable className={`${props.select ? "border-2 border-black" : "border-0"} flex-row bg-purple-500 rounded-xl w-44 justify-center align-middle items-center pt-2 pb-2`} 
            onPress={()=>props.onSelect(!props.select)}
        >
            <Image source={pillJar} style={{width:50, height:50}} className='flex-col mr-2'/>
            <Text className='text-white font-semibold'>Dispense Pill</Text>
        </Pressable>
        <View className='w-2' />
        <Pressable className={`${props.select ? "border-0" : "border-2 border-black"} flex-row bg-blue-500 rounded-xl w-44 justify-center align-middle items-center pt-2 pb-2`} 
            onPress={() => props.onSelect(!props.select)}
        >
            <Image source={waterIcon} style={{width:50, height:50}} className='flex-col'/>
            <Text className='text-white font-semibold'>Dispense Water</Text>
        </Pressable>
    </View>
    )
}

export default DispenseSelector;