# About our Project (eNutri)
eNutri is a complete ecosystem that consists of: 
- Nutri Dispenser
- Nutri App
- Nutri Web.

### Ecosystem Diagram
<img width="1300" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/e3808952-1c63-4ba0-a116-ee11fec9b060">

Its purpose is to streamline medication and water intake for patients and also allow docotors to monitor and modify medication and water intake for all their patients.

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
- A rotating disk to switch between different medication pills.
  
![Screen Recording 2024-04-05 at 1 34 46 PM](https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/2c995e35-6623-4069-8626-8220489e037a)

- 2 litre water tank for dispensing of water.
<img width="800" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/a4bd3b1f-6f8b-4f1b-bd5e-bbd681f5edd0">

- pill cartridge
![07C16D79-BC7D-4F5E-B0E5-D542624F3866](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/79d5c9d6-a29a-495a-9f04-ee6ed0e43c27)

- Smart LCD
![IMG_5071](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/cfcb0493-53e1-4262-9475-ffeec9adbe6a)

### Printing our Parts
- Using bambu lab printer to print pcb holder
![IMG_5354](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/801884a0-3439-489f-a56a-3c13f6fbbc61)

- print final pill cartridge
![IMG_5285](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/acb65f45-f318-4748-b15d-6a892205adca)

### Building our Dispenser
- Prototyping pcb holder
![IMG_5330](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/d9101a94-bf25-4768-ac3e-c0647c1ea079)

- soldering perf board to connect pi with other pcbs and connections to components
![E6A0F747-2155-494F-83E6-47CE758CB006](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/2a423945-4426-4fff-8ae7-f85b23736d20)

- top down view
![IMG_5626](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/b0d010ce-593d-4a57-a216-cd29a61b308b)

- pill cartridges
![IMG_5623](https://github.com/caizhitan/eNutri_Dispenser/assets/165815210/082cf7a9-3dda-4f5d-bd9d-5c3e88b588d1)

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
We did not need a function for `pillOne` as the default position of the Acuator will always be at pillOne and ready to be dispensed.

### Programming our LCD Display
With our LCD Display library it is also seamless to program the LCD Display. With just 1 line of Code we are able to output what we want.
```Python
display.lcd_display_string("eNutri Dispenser", 1)  
```
