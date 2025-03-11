from struct import pack

MAP_SCALE = 0.5
MAP_X = 0x18f
MAP_Y = 0x16
BAR_SCALE = 1

with open("base_files/0101.mwo", "rb+") as file:
    
    file.seek(0x1387b0)
    file.write(pack("<2H", int(MAP_SCALE*0xA0), int(MAP_SCALE*0xA0)))
    
    file.seek(0x10D9AC)
    file.write(b'\xA0\x00\x05\x34')
    file.seek(0x10D9B8)
    file.write(b'\xA0\x00\x04\x34')
    file.seek(0x15176c)
    file.write(pack("<f", MAP_SCALE))
    file.seek(0x151764)
    file.write(pack("<f", 1.5/MAP_SCALE))
    file.seek(0x138630)
    file.write(pack("<2H", MAP_X, MAP_Y))
    
    file.seek(0x151720)
    file.write(pack("<f", 150/BAR_SCALE))
    file.write(pack("<f", 900/BAR_SCALE))
