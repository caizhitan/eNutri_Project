import { View, SafeAreaView, Text, Image, Button, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import eNutriLogo from '../assets/NutriFirst.jpg';

const baseUrl = 'http://172.20.10.3:5000/yolov5';
const imageUrl = 'http://172.20.10.3:5000/image?imageName=';

const mergeObjectsByName = (org, more) => {
  const res = [...org];
  for (let m of more) {;
    res.push(m)
  }
  return res;
}

const FoodDetect = ({navigation}) =>{
    const [image, setImage] = useState(null);
    const [detect, setDetect] = useState([]);
    const [uri, setUri] = useState();
    const [name, setName] = useState();
    const [data, setData] = useState(null);
    const [aiResult, setAiResult ] = useState([]);

    useEffect(()=>{
        if(!image && !name){
            console.log("no image")
        }
        else{
            try{
              var sendImage = new FormData();
              sendImage.append('image', {
                name: name,
                uri: image,
                type: 'image/jpg'
              });

              axios.post(baseUrl, sendImage, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'multipart/form-data',
                },
                params: {
                  'imageName' : name,
                }
              })
              .then((response)=>{
                setData(name);
                const detectResult = response.data;
                if (Array.isArray(detectResult)) {
                let array = [];
                detectResult.forEach(detection => {
                  let dataArray = [
                    {'Name': detection.name,
                    'Confidence': detection.confidence}
                  ]
                  array = mergeObjectsByName(array, dataArray)
                  array = array.filter(item => (item.Confidence > 0.70));
                });
                setAiResult(array)
              }
              })
            }
            catch{
              console.log('Server Error');
            }
        }
    },[name])

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setUri(result.assets[0].uri);
        setName(result.assets[0].fileName);
      }
    };
  
    return (
      <View className='bg-orange-400'>
        <SafeAreaView className='flex'>
          <View className='bg-gray-100 h-full'>
          <Text className='text-3xl text-green-600 pb-2 text-center pt-2'>Intelligent Nutri</Text>
            {!data &&
              <Image source={eNutriLogo} className='w-80 h-80 ml-10 mt-4 rounded-xl'/>
            }
            {!data && 
              <Pressable onPress={pickImage} className='m-16 mt-24 rounded-2xl border-yellow-400 border-4 bg-cyan-300'>
                <Text className='text-purple-400 text-center text-2xl font-bold rounded-2xl p-3'>Select Photo</Text>
              </Pressable>
            }
            {data && <Image source={{uri: imageUrl + 'static/' + name +'.png' }} style={{width:350, height:350}} className='ml-5 overflow-hidden rounded-xl max-h-72'/> }
            <View className='bg-yellow-400 mt-3 ml-5 mr-5 rounded-xl min-h-2'>
              <Text className='text-xs'></Text>
            </View>
            {aiResult && aiResult.map((result, key) => (
              <View key={key} className={'ml-4 mr-4 mt-4 max-h-72 rounded-2xl overflow-hidden'}>
                <View className=' mb-1 bg-white'>
                  <View className='flex-row ml-4'>
                    <Text className='text-2xl text-yellow-300 font-semibold'>Detected food: </Text>
                    <Text className='text-xl text-green-600 mt-1 font-medium'>{result.Name}</Text>
                  </View>
                  <View className='flex-row ml-4'>
                    <Text className='text-2xl text-yellow-300 font-semibold'>Confidence: </Text>
                    <Text className='text-xl text-purple-300 mt-1 font-medium'>{result.Confidence}</Text>
                  </View>
                </View>
              </View>
            ))}
            {data && 
              <Pressable className='m-16 mt-2 rounded-2xl border-yellow-400 border-4 bg-cyan-300' onPress={()=>{
                navigation.navigate('FoodAnalyse', {title:'food'});
            }}>
                <Text className='text-purple-400 text-center text-2xl font-bold rounded-2xl p-3'>Analyse Food</Text>
              </Pressable>
            }
          </View>
        </SafeAreaView>
      </View>
    );
}

export default FoodDetect;