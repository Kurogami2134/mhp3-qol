# MHP3rd Quality Of Life mods

Some quality of life mods for Monster Hunter Portable 3rd (ULJM-05800) for the Sony PSP console.

## Changes

- Blacksmith accessible from the Guild Hall (NPC in front of Quest Board).
- Equipment Box accessible from the Guild Hall.
- All location always on the "Select Destination" menu.
- Urgent quests cleared as non-host will rise hunter rank.
- Drink/Bath quests will also unlock drinks and upgrades when playing online.

## To-dos
- [x] Faster item pickup

## Building

The following files need to be in `base_files` to build. Indexes are based on [mhtools](https://github.com/codestation/mhtools/), and files must be decrypted.
 - 0100
 - 0105
 - Decrypted `eboot.bin`

### File offsets in `data.bin`


| Index | Offset     |
|-------|------------|
| 0100  | 0x209B6800 |
| 0105  | 0x20CCE800 |

## Cheats

The `cheats.txt` file contains cheat that enable some of the features included in the mod.
