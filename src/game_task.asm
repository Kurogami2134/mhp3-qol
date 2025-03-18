.openfile "../base_files/0101.mwo", "../bin/0101.mwo", 0x09C57C80

; hold to pickup
.org 0x09D01220
    lw      v1, 0x0(a1)
	andi    v0,v1,0x2000
	bnel    v0,zero, 0x09D02EF8
	sw      v1,0x4(a1)
.close
