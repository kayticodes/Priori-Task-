import time
#on click of done button
with open('receive.txt', 'w') as f:
    f.write("popup")
time.sleep(5)

with open('send.txt', 'r') as f:
    read_data = f.readline()
open('send.txt', 'w').close()

if read_data == "congratulations":
#This is where you would insert the code for generating the popup message
    print("Congratulations! The microservice worked!") #test print
read_data = None
