import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';

const Slot = props => {

    const HandlOpenModal = () => {
        props.onOpenModal({modal:!props.modal.modal, pillSlot: props.pill.slot, pillName: props.pill.pillName, pillInfo: props.pill.pillInfo});
    }
    return(
        <Pressable className={`${props.pill.select ? ('bg-purple-400 '):('bg-blue-200 ')}' flex-col justify-center items-center rounded-3xl pt-5 pb-5'`} 
            onPress={() =>props.onSelect(props.pill.slot)}
        >
            <View className={`
                ${props.pill.slot === "slot1" && ("border-orange-400 shadow-3xl ")}
                ${props.pill.slot === "slot2" && ("border-yellow-400 shadow-3xl ")}
                ${props.pill.slot === "slot3" && ("border-purple-400 shadow-3xl ")}
                ${props.pill.slot === "slot4" && ("border-green-700 shadow-3xl ")}
                ' rounded-full bg-white w-16 h-16 border-4 justify-center items-center'`}
            >
                <Text className='text-center text-3xl font-bold text-purple-400'>{props.pill.pillStock}</Text>
            </View>
            <Pressable className={`
                ${props.pill.slot === "slot1" && ("bg-orange-400 ")}
                ${props.pill.slot === "slot2" && ("bg-yellow-400 ")}
                ${props.pill.slot === "slot3" && ("bg-purple-400 ")}
                ${props.pill.slot === "slot4" && ("bg-green-700 ")}
                ' m-2 pt-2 pb-2 pl-8 pr-8 rounded-3xl mt-5 border-2 border-white '`} 
                onPress={()=>HandlOpenModal()
            }>
                <Text className='text-xl font-semibold text-center'>{props.pill.slot}</Text>
            </Pressable>
        </Pressable>
    )
}

export default Slot;