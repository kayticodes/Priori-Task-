import time

while True:
    time.sleep(2)
    with open('receive.txt', 'r') as f:
        data = f.readline()
        print(data)
        f.close()
        
    open('receive.txt', 'w').close()
    if data == "popup":
        with open('send.txt', 'w') as f:
            f.write("congratulations")
            f.close()
