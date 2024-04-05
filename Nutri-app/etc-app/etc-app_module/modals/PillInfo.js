import {View, Text, SafeAreaView, Image, Pressable, Button} from 'react-native';
import Modal from "react-native-modal";

const PillInfo = props => {
    
      toggleModal = () => {
        props.setModal(!props.modal.modal)
      };

        return (
          <View style={{ flex: 1 }}>
            <Modal
              isVisible={props.modal.modal}
              hasBackdrop={true}
              backdropOpacity={10}
              backdropColor={"rgba(58, 58, 58, 0.8)"}
            >
              <View className="flex items-center justify-center rounded-3xl bg-blue-50 pt-5">
                    <Text className='text-center font-semibold text-orange-400 text-3xl pb-5'>{props.modal.pillName}</Text>
                    <View className='flex bg-white w-72 border-2 border-orange-400 rounded-lg'>
                      <Text className='text-lg font-medium pl-3 pr-3 w-full pt-5 pb-5'>{props.modal.pillInfo}</Text>
                    </View>
                    <Pressable className='bg-purple-400 w-60 mt-8 rounded-lg border-white border-2 mb-8 shadow-md'
                                onPress={toggleModal}>
                      <Text className='text-center font-semibold text-2xl p-2'>
                        Back
                      </Text>
                    </Pressable>
              </View>
            </Modal>
          </View>
        );
}

export default PillInfo;