import os
import eel
from backend.feature import *

eel.init("frontend")

# Open the browser with the specified URL
os.system('start msedge.exe --app="http://127.0.0.1:5500/frontend/index.html"')

# Remove this line as it will play the sound immediately when the script runs
# playAssistantSound()

# Start the eel server
eel.start("index.html", mode=None, host="localhost", block=True)