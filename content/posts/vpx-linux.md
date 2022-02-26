---
title: "Visual Pinball X on Linux"
date: 2021-01-25T10:30:08-08:00
draft: false
subtext: 自由
---

#### Update
This guide is fairly out of date and rudimentary - There's probably some better guides or lutris/whatever scripts out there by this point, but I will try to update/redo this at some point in the future.

For VPX 10.7 and Proton 7.0 - To get this initially running on a clean-ish Fedora 35 install in a basic desktop mode with Keyboard/PS4 controller, I only had to install VPX7setup.exe and `wsh57` with winetricks. DirectB2S did not want to register and doesn't seem to work, but I haven't dug into it much.

Unfortunately with VPX 10.7, I have personally found it to be much less stable of an experience than 10.6 and prior. It can be somewhat crash happy, and I get obscure script errors on many tables. A number of tables also exhibit lighting issues, mostly spots on the table being darker than they should or having abrupt dark lines.

With the UI change, I encounter issues like being unable to click or switch the tabs in docked property windows, so I'm completely unable to adjust certain settings on tables - most critically the camera.

I think the only real solution for us non-Windows user will eventually be the Visual Pinball Engine project, but I hope the situation for VPX can get at least a little better before then.

#### Original
Around a year ago or so, I tackled getting [Visual Pinball running under Linux](https://vpinball.com/forums/topic/visual-pinballx-on-linux/). After a _lot_ of tweaks and debugging, I was able to eventually get pretty good results which is mostly documented there.  
After finally reinstalling a fresh copy of Fedora 33 a couple weeks ago, I setup VPX again and found that things seem to be even simpler than before.  

Assumptions:  

* You have Steam and the Proton 5.13 runtime installed. You can run any game and force compatibility to Proton 5.13 to download it. (You could use regular Wine + DXVK without Steam, but it'll likely need a few different dependencies)
* You are running a fairly vanilla install of VPX. I have not tried custom VPinMAME builds, external DMDs, etc.

## Setup
1. Install the `winetricks` package for your distro.
2. Create a directory to hold your VPX install. In this folder, create a `prefix` directory.
3. Download the VPX installer for 10.6 and place in the VPX directory.
4. Create a `run.sh` script with these contents (Replace your directories as needed):

```sh
#!/bin/sh

# proton distribution directory:
export W="/home/USER/.local/share/Steam/steamapps/common/Proton 5.13/dist"

# create a prefix folder in game dir
# WINEPREFIX must be absolute:
export WINEPREFIX=/home/USER/games/vpx/prefix

###
export WINEVERPATH=$W
export PATH=$W/bin:$PATH
export WINESERVER=$W/bin/wineserver
export WINELOADER=$W/bin/wine
export WINEDLLPATH=$W/lib/wine/fakedlls
export LD_LIBRARY_PATH="$W/lib:$LD_LIBRARY_PATH"
###

wine VPX6setup.exe
wine VPinMAME/Setup.exe
winetricks dinput
#wine VPinballX.exe
```

5. Run the script and go through each setup.
 * For VPX, I installed to the ~/games directory (Z drive to Wine) so that I had quick access to the files but you can install purely inside the prefix (C:/) or elsewhere.
 * The DirectX setup will error out and .Net will report as already installed, this is expected.
6. Once all the setups have completed, you can delete/comment the 3 wine/winetricks lines and uncomment the last line. I also run it with `gamemoderun` but I didn't personally notice any performance improvements.

If all went well, you should be able to start a table now with ROM included and play without issue.

## Configuration
Out of the box, most settings should work as-is. A benefit of Proton is allowing you to run fullscreen-exclusive resolutions without actually changing your display resolution (Something that does not happen smoothly with X11).

One setting you may need to disable is "Reflect Dynamic Elements on Playfield", which caused numerous visual artifacts for me.

## Issues
* Pressing Escape in-game seems to cause most tables to just crash VPX completely instead of bringing up the little menu. This did _not_ happen previously for me until this new install.
* A couple tables do exhibit issues that don't appear on Windows. Namely Guns n Roses has several elements display in pure black, and g5k's Firepower has absolutely awful performance. Vast majority of tables I opened worked fine.
* I have not tried DirectB2S under Linux and can't comment on that yet. I have DirectB2S disabled in the settings but there's an occasional table that seems to demand using B2S as the controller (So will not start).

## Conclusion
I will continue to tweak this as I work through a huge backlog of VPX tables released over the past several months.  
I think virtual pinball on Linux is vastly underrepresented. Maybe we could get a launcher/install script or something thrown together?
