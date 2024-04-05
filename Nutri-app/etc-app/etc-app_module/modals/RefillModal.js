import {View, Text, SafeAreaView, Image, Pressable, Button, TextInput} from 'react-native';
import Modal from "react-native-modal";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Vector from '../assets/Vector.png';
import {Animated, Easing } from 'react-native';
import { putRefillPillUrl, putRefillWaterUrl } from '../services/baseURL';

const RefillModal = props => {
  const [pillValue, onChangePillValue] = useState("5");
  const [waterValue, onChangeWaterValue] = useState('1000');
  const [refill, setRefill] = useState(false);

  useEffect(()=>{
    if(refill){
      if(props.pillOrWater){
        const newPillValue = Number(pillValue);
        console.log(newPillValue)
        let refillPill = [{"pill_ID":1, "pill_stock":newPillValue}, {"pill_ID":2, "pill_stock":newPillValue}, {"pill_ID":3, "pill_stock":newPillValue}, {"pill_ID":4, "pill_stock":newPillValue}];
        for(let i=0; i<=3; i++){
          axios.put(putRefillPillUrl, refillPill[i])
          .then((response) =>{
          const status = response.data.status;
          console.log(status)
          });
        }
        setRefill(!refill)
        props.onRefill(!props.refill);
        props.onRefresh(!props.refresh);
      }
      else{
        const newPillValue = Number(waterValue);
        let refillWater = {"water_ID":1, "water_stock":newPillValue};
        axios.put(putRefillWaterUrl, refillWater)
          .then((response) =>{
          const status = response.data.status;
          console.log(status)
        });
        setRefill(!refill)
        props.onRefill(!props.refill);
        props.onRefresh(!props.refresh);
      }
    }
  },[refill]);


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

    return(
        <View className='flex-1'>
            <Modal
              isVisible={props.refill}
              hasBackdrop={true}
              backdropOpacity={10}
              backdropColor={"rgba(58, 58, 58, 0.8)"}
              className=' flex'
            >
              <View className="flex items-center justify-center rounded-3xl bg-blue-50 pb-10">
                <View className='flex items-end justify-end w-full pr-4 pt-4'>
                  <Pressable className='flex bg-white rounded-full justify-center align-middle'
                    onPress={() => props.onRefill(!props.refill)}>
                    <Text className='text-lg font-bold text-red-600 pl-3 pr-3 pt-1 pb-1 text-center'>X</Text>
                  </Pressable>
                </View>
                <View className='flex w-4/5 pt-2'>
                  {refill ? (
                  <View className='flex justify-center align-middle items-center w-full'>
                    <Animated.Image
                      style={{transform: [{rotate: spin}] }}
                      source={Vector} />
                    <Text className='pt-10 font-bold text-2xl '>Refilling...</Text>
                  </View>
                  ):(
                  <>
                  <View className='flex-row items-start justify-start'>
                    <Text className='pt-10 p-1 font-bold text-2xl w-full'>Refill {props.pillOrWater ? ("Pill (for every slot)"): ("Water")}</Text>
                  </View>
                  <View className='h-3 bg-yellow-300 rounded-3xl mt-1' />
                  <View className='flex-row items-center justify-center'>
                    {props.pillOrWater ? (
                      <TextInput
                      maxLength={1}
                      keyboardType='numeric'
                      onChangeText={text => onChangePillValue(text)}
                      value={pillValue}
                      className='border-4 border-orange-400 rounded-xl text-2xl font-semibold bg-white pb-2 pt-1 text-center w-full mt-3'
                    />
                    ):(
                      <TextInput
                      maxLength={5}
                      keyboardType='numeric'
                      onChangeText={text => onChangeWaterValue(text)}
                      value={waterValue}
                      className='border-4 border-orange-400 rounded-xl text-2xl font-semibold bg-white pb-2 pt-1 text-center w-full mt-3'
                    />
                    )}
                    
                  </View>
                  <View className='flex-row items-center justify-center pt-10'>
                    <Pressable className={`${props.pillOrWater ? (' bg-purple-400 '):(' bg-blue-400 ')}' flex-row border-white border-2 shadow-lg pl-5 pr-5 w-full rounded-xl justify-center '`}
                        onPress={() => setRefill(!refill)}
                    >
                      <Text className='font-semibold text-center text-3xl text-white pt-1 pb-1'>Refill</Text>
                    </Pressable>
                  </View>
                  </>
                  )}
                  
                </View>
              </View>
            </Modal>
          </View>
    )
}

export default RefillModal;