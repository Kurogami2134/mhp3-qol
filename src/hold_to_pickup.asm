.psp

; standalone hold to pickup patch, same as the one in game_task.asm
; doesn't require any game files to assemble

.createfile "../bin/hold_to_pickup", 0x09D01218
    .word   0x09D01220
    .word   0x10
    lw      v1, 0x0(a1)
	andi    v0,v1,0x2000
	bnel    v0,zero, 0x09D02EF8
	sw      v1,0x4(a1)
    .word   0xFFFFFFFF
    .word   0
.close
