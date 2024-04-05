import datetime
import requests 
import subprocess
import RPi.GPIO as G
import time
import json
import drivers 
from time import sleep
from RpiMotorLib import RpiMotorLib
mymotortest = RpiMotorLib.BYJMotor("MyMotorOne", "28BYJ")
display = drivers.Lcd()


G.setmode(G.BCM)
G.setwarnings(False)
G.setup(4, G.OUT)
G.setup(20, G.OUT) #Wire to B-1A; Forward = 1, Backward = 0 #Green Wire
G.setup(21, G.OUT) #Wire to B-1B; Forward = 0, Backward = 1 #Blue Wire


G.setup(19, G.IN, pull_up_down=G.PUD_DOWN)

ipAddress = 'http://192.168.1.64/api/etc/'


def dispensePill(numberOfPill):
        for i in range(numberOfPill):
                G.output(20, 1) 
                G.output(21, 0)
                sleep(4.5)
                G.output(20,0)
                G.output(21,1)
                sleep(4.5)

def dispenseWater():
        G.output(4, 1)
        sleep(3.5)
        G.output(4, 0)

def forward():
        G.output(20, 1)
        G.output(21, 0)
        sleep(5)
def backward():
        G.output(20, 0) 
        G.output(21, 1)
        sleep(5)
        

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
    
    
def fullSpin(): 
    GPins = [17, 18, 27, 22] 
    mymotortest.motor_run(GPins,.01,512, False, False,"full", .05)
def rotateAbit():
	GPins = [17, 18, 27, 22] 
	mymotortest.motor_run(GPins,.01,1, False, False,"full", .05)	


def finishDispense(id):
	url = "http://192.168.1.200/api/dispenser/pill/users"
	param = {'pHistory_id': id,'pillName': 'test', 'pillAmount': "20", 'pillTime':"2023-05-24 02:37:28","dispenseType":"1","ifdispensed":"1","pillType_id":"1"}
	x = requests.put(url, json = param)
	print(x.text)
	time.sleep(10)
	
def displayChange():
	display.lcd_clear()
	display.lcd_display_string("Press to", 1)
	display.lcd_display_string("    Dispense", 2)
def displaySetup():
	display.lcd_clear()
	display.lcd_display_string("eNutri Dispenser", 1)  
	display.lcd_display_string("   ETC   2023 ", 2)

def displayTestDispense():
	display.lcd_clear()
	display.lcd_display_string("Dispensing...", 1)  
	display.lcd_display_string("  Test All", 2)
	
def displayDispensing():
	display.lcd_clear()
	display.lcd_display_string("Dispensing...", 1)  
	display.lcd_display_string("       PIll", 2)
	
def displayDispensingWater():
	display.lcd_clear()
	display.lcd_display_string("Dispensing...", 1)  
	display.lcd_display_string("       Water", 2)
	

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
	
def pillSuite(id):
	if(id == 1):
		print('dispense 1')
		displayDispensing()
		dispensePill(1)
		finishPillDispense(1)
		displaySetup()
	if(id == 2):
		print('dispense 2')
		displayDispensing()
		pillTwo()
		dispensePill(1)
		pillTwoReturn()
		finishPillDispense(2)
		displaySetup()
	if(id == 3):
		print('dispense 3')
		displayDispensing()
		pillThree()
		dispensePill(1)
		pillThreeReturn()
		finishPillDispense(3)
		displaySetup()
	if(id == 4):
		print('dispense 4')
		displayDispensing()
		pillFour()
		dispensePill(1)
		pillFourReturn()
		finishPillDispense(4)
		displaySetup()
	else:
		print('error')
		
def waterSuite(stockW):
	displayDispensingWater()
	dispenseWater()
	finishWaterDispense(stockW)
	displaySetup()

#here's the main loop  
displaySetup()
while True:
    try:
        type1, type2, type3, type4, dispense1, dispense2, dispense3, dispense4 = fetchPill()
        print('check pill')
        if str(type1) == '1':
            print('dispense pill')
            pillSuite(1)
        elif str(type2) == '1':
            print('dispense pill')
            pillSuite(2)
        elif str(type3) == '1':
            print('dispense pill')
            pillSuite(3)
        elif str(type4) == '1':
            print('went here')
            print('dispense pill')
            pillSuite(4)
        else:
            print('No pill dispense')
        
        typeW, dispenseW, stockW = fetchWater()
        print('check water')
        if typeW == '1':
            print('dispense water')
            waterSuite(stockW)

    except KeyboardInterrupt:
        display.lcd_clear()
        print("Cleaning up!")
        G.cleanup()  # Optional
        exit()
