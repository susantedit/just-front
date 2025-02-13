import playsound
import eel

eel.init('frontend')

@eel.expose
def playAssistantSound():
    music_dir = "frontend\\assests\\audio\\start_sound.mp3"
    playsound.playsound(music_dir)

