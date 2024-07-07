.openfile "../base_files/0100.mwo", "../bin/0100.mwo", 0x9C57C80
.area 1525760

    ; 0x09D84738

    ; all locations on fast travel menu
    .org        0x09C841C0
    li          a1, 0x4

    ; equipment box in guild hall
    .org        0x09CEAC70
    li          a1, 0x00
    li          v0, 0x18


    ; blacksmith in guild hall
    .org        0x09D84794
@bsmith_gh:
    sw          v0, 0x0(s1)
    lbu         v1, 0x3a0(s0)
    li          at, 0x16
    
    bne         at, v1, @@ret
    nop

    li          v1, 0x03
    sb          v1, 0x3a0(s0)
@@ret:
    j           @bsmith_ra

    ; hook
    .org        0x09CCF79C
    j           @bsmith_gh
    nop
@bsmith_ra:

.endarea
.close
