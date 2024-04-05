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

The dispenser was designed using Sharp3D. It features:
- A rotating disk to switch between different medication pills.
  
![Screen Recording 2024-04-05 at 1 34 46 PM](https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/2c995e35-6623-4069-8626-8220489e037a)

- 2 litre water tank for dispensing of water.
<img width="800" alt="image" src="https://github.com/caizhitan/eNutri_Dispenser/assets/150103035/a3b418e9-cb9a-405d-aa3c-9f464d6f59e7">

### Printing our Parts

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
