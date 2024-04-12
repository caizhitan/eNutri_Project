import React from "react";

let baseURL = '';
let enviornment = 'hotspot';

if(enviornment === 'home'){
    baseURL = "http://192.168.0.109/api/etc/";
}
if(enviornment === 'hotspot'){
    baseURL = "http://172.20.10.2/api/etc/";
}

if(enviornment === "etc"){
    baseURL = "http://192.168.1.200/api/etc/";
}


export const getPillUrl = baseURL + 'pillWater/pill/users';
export const getWaterUrl = baseURL + 'pillWater/water/users';
export const putRefillPillUrl = baseURL + 'refill/pill/users';
export const putRefillWaterUrl = baseURL + 'refill/water/users';
export const putPillDispenseUrl = baseURL + 'pillDispense/users';
export const putWaterDispenseUrl = baseURL + 'waterDispense/users';