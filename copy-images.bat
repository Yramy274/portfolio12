@echo off
echo Copying images to portfolio folder...

:: Create the images folder if it doesn't exist
mkdir images 2>nul

:: Copy profile image
copy "C:\Users\sackd\Documents\GitHub\pixelcut-export.png" "images\profile.png"

:: Copy Binko images
copy "C:\Users\sackd\Documents\GitHub\Binko\Photos\Binko_Project 1 Beta.jpg" "images\binko-beta.jpg"
copy "C:\Users\sackd\Documents\GitHub\Binko\Photos Améliorées\Binko_Project 1.jpg" "images\binko-final.jpg"

:: Copy MALT workflow
copy "C:\Users\sackd\Documents\GitHub\3M\Make Workflow.png" "images\malt-workflow.png"

:: Copy Go Fusion workflow
copy "C:\Users\sackd\Documents\GitHub\gofusion_content\GO FUSION Make Workflow.png" "images\gofusion-workflow.png"

echo Image copying complete!