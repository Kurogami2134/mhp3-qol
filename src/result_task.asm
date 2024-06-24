.openfile "../base_files/0105.mwo", "../bin/0105.mwo", 0x09DB3D80

; skip online check when completing urgent quests
.org            0x09DC358C
    li          v1, 0x0

.close
