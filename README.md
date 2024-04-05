# About eNutri
eNutri is a complete ecosystem that consists of: 

- [Nutri Dispenser](#nutri-dispenser)
- [Nutri App](#nutri-app)
- [Nutri Web](#nutri-web)

## Our Purpose.
Our purpose is to revolutionize patient care by streamlining medication and water intake with technology, empowering doctors to oversee and tailor these essential aspects for each of their patients seamlessly.

### Ecosystem Diagram
<img width="1300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/e3808952-1c63-4ba0-a116-ee11fec9b060">

### System Architecture
<img width="700" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/a75eda17-a3ef-45cf-8c45-0db983d15b51">

### Tech Stack
<img width="700" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/083ffcd9-5311-4d9a-b1c6-ad4932a41f5c">


# Nutri Dispenser
## The Hardware
Nutri Dispenser is 3D Printed and built with:
- Raspberry Pi 4
- 16-bit LCD Screen
- Stepper Motor
- Linear Actuator
- H-Bridge
- Relay
- DC Water Pump

### Hardware Architecture
<img width="1492" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/aab29631-baec-489e-bf77-0405f9c57f4f">

### Design Specifications

The dispenser was designed using Sharp3D and Fusion 360. It features:

- ### Medicine Cartridges

  <img width="800" alt="image" src="https://github.com/caizhitan/eNutri_Project/assets/150103035/43b23b60-8991-42e5-99c5-222cf6d0b62a">

- ### A Rotating Disk for multiple Medicine Cartridges
  
  ![Screen Recording 2024-04-05 at 5 24 10 PM](https://github.com/caizhitan/eNutri_Project/assets/150103035/4f5857b8-1172-4465-835d-e5879720c176)

- ### 2 Litre Water Tank
  
  <img width="800" alt="image" src="https://github.com/caizhitan/eNutri_Project/assets/150103035/55929c6c-60d7-4b6c-9983-bb9c029e9cb6">

- ### Exterior Look

  <img width="800" alt="image" src="https://github.com/caizhitan/eNutri_Project/assets/150103035/14b00aaa-1f8b-43c1-bac6-93f1363e8010">



### Printing our Parts
- Using bambu lab printer to print pcb holder

  <img width="300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/801884a0-3439-489f-a56a-3c13f6fbbc61">

- print final pill cartridge

  <img width="300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/acb65f45-f318-4748-b15d-6a892205adca">

### Building our Dispenser
- Prototyping Perfboard and Raspberry Pi holder

  <img width="500" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/d9101a94-bf25-4768-ac3e-c0647c1ea079">

- Soldering Perfboard to connect Raspberry Pi with all our components

  <img width="500" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/2a423945-4426-4fff-8ae7-f85b23736d20">

- Top Down View

  <img width="600" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/b0d010ce-593d-4a57-a216-cd29a61b308b">

- Pill Cartridges

  <img width="400" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/082cf7a9-3dda-4f5d-bd9d-5c3e88b588d1">


## The Software
The libraries used for Nutri Dispenser are linked (`git submodule add`) and credits the original authors. We used these libraries for driving our stepper motor and also for ease of programming our LCD Screen. 


### Programming our Stepper Motor 
With the Stepper Motor Driver library we can easily configure our rotation for our Medication rotating disk with just 1 line of code.
```Python
mymotortest.motor_run(GPins,.01,128, False, False,"full", .05)
```

We then build this into multiple functions we can use to choose which pill to be selected.
```Python
def pillTwo(): 
    GPins = [17, 18, 27, 22] 
    mymotortest.motor_run(GPins,.01,128, True, False,"full", .05)
    time.sleep(2)
def pillTwoReturn():
	GPins = [17, 18, 27, 22]
	mymotortest.motor_run(GPins,.01,128, False, False,"full", .05)
    
    
def pillThree(): 
    GPins = [17, 18, 27, 22] 
    mymotortest.motor_run(GPins,.01,256, True, False,"full", .05)
    time.sleep(2)
def pillThreeReturn():
	GPins = [17, 18, 27, 22]
	mymotortest.motor_run(GPins,.01,256, False, False,"full", .05)
    

def pillFour(): 
    GPins = [17, 18, 27, 22] 
    mymotortest.motor_run(GPins,.01,128, False, False,"full", .05)
    time.sleep(2)
def pillFourReturn():
	GPins = [17, 18, 27, 22]
	mymotortest.motor_run(GPins,.01,128, True, False,"full", .05)
```
We do not need function for `pillOne` as the default position of the Acuator will always be at pillOne and ready to be dispensed.

### Demo Video

<a href="https://www.youtube.com/watch?v=f3bLCoSJZRg">
  <img src="https://github.com/caizhitan/eNutri_Project/assets/150103035/23ee3cce-e65b-4daf-aa8f-b3208dc21320" width="800" alt="Watch the Video">
</a>

### Programming our LCD Display
With our LCD Display library it is also seamless to program the LCD Display. With just 1 line of Code we are able to output what we want.
```Python
display.lcd_display_string("Next Dispense", 1)
display.lcd_display_string("12:00 pm", 2)  
```
<img width="800" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/cfcb0493-53e1-4262-9475-ffeec9adbe6a">

### Programming our Dispenser to be integrated with our Ecosystem

Our Dispenser is connected with our Ecosystem using RESTful API. 
```Python
def fetchPill():
	url = ipAddress + 'pillWater/pill/users'
	response = requests.get(url)
	json_pill = json.loads(response.content)
	type1 = json_pill[0]["dispense_type"]
	type2 = json_pill[1]["dispense_type"]
	type3 = json_pill[2]["dispense_type"]
	type4 = json_pill[3]["dispense_type"]
	dispense1 = json_pill[0]["dispense_amount"]
	dispense2 = json_pill[1]["dispense_amount"]
	dispense3 = json_pill[2]["dispense_amount"]
	dispense4 = json_pill[3]["dispense_amount"]
	print(type4)
	
	return type1, type2, type3, type4, dispense1, dispense2, dispense3, dispense4
	
def fetchWater():
	url = ipAddress + 'pillWater/water/users'
	response = requests.get(url)
	json_water = json.loads(response.content)
	typeW = json_water[0]["dispense_type"]
	dispenseW = json_water[0]["dispense_amount"]
	stockW = json_water[0]["water_stock"]
	
	return typeW, dispenseW, stockW
	
def finishPillDispense(pillID):
	url = ipAddress + 'pillDispense/users'
	param = {"pill_ID":pillID, "pill_name":"pill " + str(pillID), "pill_info":"Notes: take 2 pill after each meal", "pill_stock":5, "ifDispensed":1, "dispense_type":0, "dispense_amount":0}
	response = requests.put(url, json = param)
	print(response.text)
	
def finishWaterDispense(stock):
	url = ipAddress + 'waterDispense/users'
	params = {"water_ID":1, "water_stock":5, "ifDispensed":1, "dispense_type":0, "dispense_amount":1}
	param = {"water_ID":1, "ifDispensed":1, "dispense_type":0}
	response = requests.put(url, json = param)
	print(response.text)
```

### Demo Video
<a href="https://www.youtube.com/watch?v=x80RfngRy9Y">
  <img src="https://github.com/caizhitan/eNutri_Project/assets/150103035/8bda5604-8038-4ba0-8e7a-c92c45c5ec44" width="800" alt="Watch the Video">
</a>


# Nutri App
## Features
### Introduction
- Nutri app is made mainly for elderly patients to have a application that is easily to manage their CKD
- Able to look up dispensing timings for both water and medicine
- Arrange dispensing ahead of time for day to day schedule
- Using AI image detection model to detect food
- Analysis detected food and tag it with nutritional values for long term food intake monitoring

### Demo version
- Made a separate app to demo for presentation
- Able to directly control the dispenser to dispense pill / water

## Design
- Home page

<img width="300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/e0559dc2-fa39-4eff-a235-8d414de7f567">

- Dispenser page

<img width="300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/7b1e90b0-8c79-4921-aa53-66e82f5d36c7">

- Image Detection page

<img width="300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/447699e8-deab-4715-a4cf-24c1f5699646">

- Analysis page

 <img width="300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/bf365394-b788-4d58-9889-5e2864e34bb6"> 

## Technology details









# Nutri Web
