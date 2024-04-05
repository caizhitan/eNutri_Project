import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';

const AppBar = props => {
    return(
    <>
        <View className='flex-row w-full'>
            <Text className="flex-col w-7/12 justify-start align-middle items-center font-medium text-3xl text-green-600 pl-5 pt-1">Nutri Dispenser</Text>
            <View className='flex-col justify-end pt-1 w-5/12 pr-5'>
                <Pressable className='bg-green-700 ml-16 justify-center align-middle rounded-2xl border-2 border-white'
                    onPress={()=>props.onRefill(!props.refill)}>
                    <Text className='text-center pt-1 pb-1 text-xl font-semibold pl-2 pr-2 text-black'>Refill</Text>
                </Pressable>
            </View>
        </View>
        <View className='bg-yellow-300 ml-5 mr-5 mt-2 rounded-xl h-3' />
    </>
    )
}

export default AppBar;