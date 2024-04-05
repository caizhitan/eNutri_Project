import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import DispenseSelector from '../component/DispenseSelector';
import { useState, useEffect } from 'react';
import AppBar from '../component/AppBar';
import PageIcon from '../component/PageIcon';
import DispenseContent from '../component/DispenseContent';
import PillInfo from '../modals/PillInfo';
import DispensingModal from '../modals/DispensingModal';
import RefillModal from '../modals/RefillModal';
import axios from "axios"
import { getPillUrl, getWaterUrl } from '../services/baseURL';

const HomePage = () => {
    const [pillOrWater, setPillOrWater] = useState(true);

    const [pill, setPill] = useState({
        slot1:{
            slot:"slot1",
            pillName:"pill 1",
            pillInfo:"info1",
            pillStock:0,
            select:true,
            ifDispensed: 0,
            dispenseType: 0,
            dispenseAmount:0,
        },
        slot2:{
            slot:"slot2",
            pillName:"pill 2",
            pillInfo:"info2",
            pillStock:0,
            select:false,
            ifDispensed: 0,
            dispenseType: 0,
            dispenseAmount:0,
        },
        slot3:{
            slot:"slot3",
            pillName:"pill 3",
            pillInfo:"info3",
            pillStock:0,
            select:false,
            ifDispensed: 0,
            dispenseType: 0,
            dispenseAmount:0,
        },
        slot4:{
            slot:"slot4",
            pillName:"pill 4",
            pillInfo:"info4",
            pillStock:0,
            select:false,
            ifDispensed: 0,
            dispenseType: 0,
            dispenseAmount:0,
        },
    });

    const [water, setWater] = useState({
        waterAmount: 1000,
        waterToDispense: 100,
        ifDispensed: 0,
        dispenseType: 0,
        dispenseAmount:0,
    });

    const [pillModal, setPillModal] = useState({
        modal: false,
        slot: "",
        pillName: '',
        pillInfo: ""
    })

    const [dispense, setDispense] = useState(false);
    const [refill, setRefill] = useState(false);
    const [pillWater, setPillWater] = useState(false);

    const HandleOnPlus = () =>{
        let newWaterAmount = Number(water.waterToDispense) + 100;
        if(newWaterAmount <= water.waterAmount){
            setWater({...water, waterToDispense: newWaterAmount})
        }
    }

    const HandleOnMinus = () =>{
        let newWaterAmount = Number(water.waterToDispense) - 100;
        if(newWaterAmount >= 0){
            setWater({...water, waterToDispense: newWaterAmount})
        }
    }

    const HandlePillSelect = (slotNum) =>{
        if(slotNum === "slot1"){
            setPill({...pill, slot1: {...pill.slot1, select: true}, slot2: {...pill.slot2, select: false}, slot3: {...pill.slot3, select: false}, slot4: {...pill.slot4, select: false}})
        }
        if(slotNum === "slot2"){
            setPill({...pill, slot2: {...pill.slot2, select: true}, slot1: {...pill.slot1, select: false}, slot3: {...pill.slot3, select: false}, slot4: {...pill.slot4, select: false}})
        }
        if(slotNum === "slot3"){
            setPill({...pill, slot3: {...pill.slot3, select: true}, slot1: {...pill.slot1, select: false}, slot2: {...pill.slot2, select: false}, slot4: {...pill.slot4, select: false}})
        }
        if(slotNum === "slot4"){
            setPill({...pill, slot4: {...pill.slot4, select: true}, slot1: {...pill.slot1, select: false}, slot2: {...pill.slot2, select: false}, slot3: {...pill.slot3, select: false}})
        }
    }
    
    useEffect(()=>{
        if(!pillWater){
            axios.get(getPillUrl)
            .then((response) =>{
            const newPill = response.data;
            //console.log(newPill)
            if (Array.isArray(newPill)) {
                setPill({...pill, 
                    slot1:{...pill.slot1, pillName:newPill[0].pill_name, pillInfo:newPill[0].pill_info, pillStock:newPill[0].pill_stock, ifDispensed: newPill[0].ifDispensed, dispenseType: newPill[0].dispense_type, dispenseAmount: newPill[0].dispense_amount},
                    slot2:{...pill.slot2, pillName:newPill[1].pill_name, pillInfo:newPill[1].pill_info, pillStock:newPill[1].pill_stock, ifDispensed: newPill[1].ifDispensed, dispenseType: newPill[1].dispense_type, dispenseAmount: newPill[1].dispense_amount},
                    slot3:{...pill.slot3, pillName:newPill[2].pill_name, pillInfo:newPill[2].pill_info, pillStock:newPill[2].pill_stock, ifDispensed: newPill[2].ifDispensed, dispenseType: newPill[2].dispense_type, dispenseAmount: newPill[2].dispense_amount},
                    slot4:{...pill.slot4, pillName:newPill[3].pill_name, pillInfo:newPill[3].pill_info, pillStock:newPill[3].pill_stock, ifDispensed: newPill[3].ifDispensed, dispenseType: newPill[3].dispense_type, dispenseAmount: newPill[3].dispense_amount}
                })
            }
            })
            axios.get(getWaterUrl)
            .then((response) =>{
            const newWater = response.data;
            //console.log(newWater)
            if (Array.isArray(newWater)) {
                setWater({...water, waterAmount: newWater[0].water_stock, ifDispensed: newWater[0].ifDispensed, dispenseType: newWater[0].dispense_type, dispenseAmount: newWater[0].dispense_amount})
            }
            })
            setPillWater(true) 
        }
    },[pillWater]);


    return(
        <>
        <View className={`'flex w-full h-full ' ${pillOrWater ? ("bg-purple-300"):("bg-blue-300")}`}>
            {pillModal && <PillInfo modal={pillModal} setModal={setPillModal} pill={pill} />}
            {dispense && <DispensingModal dispense={dispense} onDispense={setDispense} refresh={pillWater} onRefresh={setPillWater} pillOrWater={pillOrWater} pill={pill} water={water} />}
            {refill && <RefillModal refill={refill} onRefill={setRefill} pillOrWater={pillOrWater} refresh={pillWater} onRefresh={setPillWater} />}
            <SafeAreaView className={ `' flex w-full h-full '${pillOrWater ? ("bg-purple-300"):("bg-blue-300")}`}>
                <View className={`' flex-1 w-full h-full ' ${pillOrWater ? ("bg-purple-300"):("bg-blue-300")}`}>
                    <View className={`" flex h-full "${pillOrWater ? ("bg-purple-300"):("bg-blue-300")}`}>
                        <AppBar refill={refill} onRefill={setRefill} />
                        <DispenseSelector select={pillOrWater} onSelect={setPillOrWater} />
                        <PageIcon pillOrWater={pillOrWater} />
                        <DispenseContent
                            pillOrWater={pillOrWater}
                            water={water} pill={pill} 
                            onPlus={HandleOnPlus} 
                            onMinus={HandleOnMinus} 
                            onSelect={HandlePillSelect} 
                            onOpenModal={setPillModal} 
                            modal={pillModal}
                            dispense={dispense}
                            onDispense={setDispense}
                            />
                    </View>
                </View>
            </SafeAreaView>
        </View>
        </>
    )
}

export default HomePage;