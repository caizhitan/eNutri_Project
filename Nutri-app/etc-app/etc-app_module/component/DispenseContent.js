import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import Slot from '../component/Slot';
import DispenseButton from '../component/DispenseButton';

const DispenseContent = props => {
    return(
        <View className='rounded-xl flex bg-gray-100 h-auto w-full'>
            {props.pillOrWater ? (
                <>
                <View className='flex-row pt-5 w-full pl-5 pr-5'>
                    <View className="w-1/2 pr-4">
                        <Slot pill={props.pill.slot1} onSelect={props.onSelect} modal={props.modal}  onOpenModal={props.onOpenModal}  />
                    </View>
                    <View className="w-1/2 pl-4">
                        <Slot pill={props.pill.slot2} onSelect={props.onSelect} modal={props.modal}  onOpenModal={props.onOpenModal}  />
                    </View>
                </View>
                <View className='flex-row pl-5 pr-5 pt-3'>
                    <View className="w-1/2 pr-4">
                        <Slot pill={props.pill.slot3} onSelect={props.onSelect} modal={props.modal}  onOpenModal={props.onOpenModal} />
                    </View>
                    <View className="w-1/2 pl-4">
                        <Slot pill={props.pill.slot4} onSelect={props.onSelect} modal={props.modal}  onOpenModal={props.onOpenModal} />
                    </View>  
                </View>
                </>
            ):(<>
                <View className='flex-row w-full pt-8'>
                    <Text className='flex-col w-full text-center text-xl font-semibold'>
                        {"Water in Tank: " + props.water.waterAmount + "ml"}
                    </Text>
                </View>
                <View className='flex w-full justify-center align-middle items-center pt-5'>
                    <View className='w-48 bg-blue-300 rounded-3xl pt-2 pb-2 pl-5 pr-5 shadow-md'>
                        <Text className=' text-center text-4xl font-bold'>{props.water.waterToDispense}ml</Text>
                    </View>
                </View>
                <View className='flex-row w-full p-10'>
                    <View className='flex-col w-1/2 justify-center align-middle items-center'>
                        <Pressable className=' bg-gray-400 rounded-full w-20 h-20 justify-center align-middle shadow-md' 
                            onPress={()=>props.onMinus()}
                        >
                            <Text className='text-center font-semibold text-6xl'>-</Text>
                        </Pressable>
                    </View>
                    <View className='flex-col w-1/2 justify-center align-middle items-center'>
                        <Pressable className=' bg-gray-400 rounded-full w-20 h-20 justify-center align-middle shadow-md' 
                            onPress={()=>props.onPlus()}
                        >
                            <Text className='text-center font-semibold text-6xl'>+</Text>
                        </Pressable>
                    </View>
                </View>
            
            </>)}
            <View className='pb-16'>
                <DispenseButton pillOrWater={props.pillOrWater} dispense={props.dispense} onDispense={props.onDispense}/>
            </View>
        </View>
    )
}

export default DispenseContent;