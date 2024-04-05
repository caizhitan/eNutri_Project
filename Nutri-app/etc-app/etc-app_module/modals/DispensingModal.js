import {View, Text, SafeAreaView, Image, Pressable, Button} from 'react-native';
import Modal from "react-native-modal";
import Vector from '../assets/Vector.png';
import {Animated, Easing } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { putPillDispenseUrl, putWaterDispenseUrl } from '../services/baseURL';

const DispensingModal = props => {
  const [pillSelect, setPillSelect] = useState(0);
  const [pill, setPill] = useState({
    pillName:"pill 0",
    pillInfo:"info0",
    pillStock:0,
    select:false,
    ifDispensed: 0,
    dispenseType: 0,
    dispenseAmount:0,
  })
  const [dispense, setDispense] = useState(false);

    spinValue = new Animated.Value(0);
    Animated.loop(
        Animated.timing(
          this.spinValue,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.linear,
           useNativeDriver: true
          }
        )
       ).start();
       const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

      const HandleCloseModal = () => {
        console.log(props.refresh)
        props.onRefresh(!props.refresh);
        props.onDispense(!props.dispense);
      }

      useEffect(()=>{
        if(props.pill.slot1.select){
          setPillSelect(1);
          setPill({...pill,
            pillName:props.pill.slot1.pillName,
            pillInfo:props.pill.slot1.pillInfo, 
            pillStock:props.pill.slot1.pillStock, 
            select:true,
            ifDispensed:0, 
            dispenseType:1, 
            dispenseAmount:1
          })
        }
        if(props.pill.slot2.select){
          setPillSelect(2);
          setPill({...pill,
            pillName:props.pill.slot2.pillName,
            pillInfo:props.pill.slot2.pillInfo, 
            pillStock:props.pill.slot2.pillStock, 
            select:true,
            ifDispensed:0, 
            dispenseType:1, 
            dispenseAmount:1
          })
        }
        if(props.pill.slot3.select){
          setPillSelect(3);
          setPill({...pill,
            pillName:props.pill.slot3.pillName,
            pillInfo:props.pill.slot3.pillInfo, 
            pillStock:props.pill.slot3.pillStock, 
            select:true,
            ifDispensed:0, 
            dispenseType:1, 
            dispenseAmount:1
          })
        }
        if(props.pill.slot4.select){
          setPillSelect(4);
          setPill({...pill, 
            pillName:props.pill.slot4.pillName,
            pillInfo:props.pill.slot4.pillInfo, 
            pillStock:props.pill.slot4.pillStock, 
            select:true,
            ifDispensed:0, 
            dispenseType:1, 
            dispenseAmount:1
          })
        }
        else{
          console.log("no change");
        }
      },[pillSelect])

      useEffect(()=>{
        if(dispense){
          if(props.pillOrWater){
            const pillArray = {
              pill_ID:pillSelect,
              pill_name:pill.pillName, 
              pill_info:pill.pillInfo, 
              pill_stock:pill.pillStock - 1, 
              ifDispensed:0, 
              dispense_type:1, 
              dispense_amount:1
            }
            try{
              axios.put(putPillDispenseUrl, pillArray)
              .then((response) =>{
              const status = response.data.status;
              console.log(status)
            });
            }
            catch(e)
            {
              console.log(e)
            }
            HandleCloseModal();
            setDispense(!dispense)
          }
          else{
            const waterArray= {
              water_ID:1, 
              water_stock: props.water.waterAmount - props.water.waterToDispense ,
              ifDispensed:1, 
              dispense_type:1, 
              dispense_amount:props.water.waterToDispense
            }
            try{
              axios.put(putWaterDispenseUrl, waterArray)
              .then((response) =>{
              const status = response.data.status;
              console.log(status)
            });
            }
            catch(e)
            {
              console.log(e)
            }
            HandleCloseModal();
            setDispense(!dispense)
          }
        }
      },[dispense])

    return(
        <View className='flex-1'>
            <Modal
              isVisible={props.dispense}
              hasBackdrop={true}
              backdropOpacity={10}
              backdropColor={"rgba(58, 58, 58, 0.8)"}
            >
              <View className="flex items-center justify-center rounded-3xl bg-blue-50 pb-10 pl-10 pr-10">
              <View className='flex items-end justify-end w-full pr-4 pt-4'>
                  <Pressable className='flex bg-white rounded-full justify-center align-middle'
                    onPress={() => props.onDispense(!props.dispense)}>
                    <Text className='text-lg font-bold text-red-600 pl-3 pr-3 pt-1 pb-1 text-center'>X</Text>
                  </Pressable>
                </View>
                {dispense ? (
                  <>
                    <Animated.Image
                    style={{transform: [{rotate: spin}] }}
                    source={Vector} />
                    <Text className='pt-10 font-bold text-2xl '>Dispensing...</Text>
                  </>
                ) : (
                  <>
                    <View className='flex items-center justify-center w-full'>
                    <View className='flex items-start justify-start w-full'>
                      <Text className='pt-10 p-1 font-bold text-2xl w-full'>Are you sure you want to dispense this?</Text>
                    </View>
                    <View className='h-3 bg-yellow-300 rounded-3xl w-full mb-3' />
                    <View className='border-4 border-orange-400 rounded-xl bg-white w-full pl-5 pt-1 pb-1 mb-5'>
                      {props.pillOrWater ? (
                        <>
                        <Text className='font-semibold text-lg'>Pill ID: {pillSelect}</Text>
                        <Text className='font-semibold text-lg'>Pill Name: {pill.pillName}</Text>
                        <Text className='font-semibold text-lg'>Pill Info: {pill.pillInfo}</Text>
                        <Text className='font-semibold text-lg'>Pill Stock: {pill.pillStock}</Text>
                        <Text className='font-semibold text-lg'>Pill Amount: {pill.dispenseAmount}</Text>
                        </>
                      ):(
                        <>
                        <Text className='font-semibold text-lg'>Water to Dispense: {props.water.waterToDispense} ml</Text>
                        </>
                      )}
                    </View>
                  </View>
                  <Pressable className={`'flex rounded-2xl justify-center align-middle pl-10 pr-10 pt-2 pb-2 w-full border-2 border-white shadow-lg '${props.pillOrWater ? (' bg-purple-400 '):(' bg-blue-300 ')}`}
                    onPress={() => setDispense(!dispense)}
                  >
                  <Text className='text-white text-xl font-bold text-center'>Dispense</Text>
                  </Pressable>
                  </>
                )}
              </View>
            </Modal>
          </View>
    )
}

export default DispensingModal;