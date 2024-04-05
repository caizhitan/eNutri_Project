import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';

const DispenseButton = props => {
    return(
        <Pressable className={`${props.pillOrWater ? ("bg-purple-400 "):("bg-blue-300 ")}+" mt-5 ml-5 mr-5 h-auto justify-center items-center rounded-xl mb-5 shadow-md "`}
            onPress={()=>props.onDispense(!props.dispense)}>
            <Text className='font-bold text-3xl m-2'>
                {props.pillOrWater ? ("Dipsense Pill"):("Dispense Water")}
            </Text>
        </Pressable>
    )
}

export default DispenseButton;