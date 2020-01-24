from samplebase import SampleBase
from flask import Flask, request
import numpy as np
from flask_cors import CORS
import random
import time
import _thread
import json

def hex_to_rgb(value):
    value = value.lstrip('#')
    lv = len(value)
    return tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))


app = Flask(__name__)
CORS(app)

colors = []
to_update = False
for x1 in range(0,16):
    colors.append([])
    for x2 in range(0, 32):
        colors[x1].append('#000000')



class Snowfall(SampleBase):
    def __init__(self, *args, **kwargs):
        super(Snowfall, self).__init__(*args, **kwargs)
        self.color_arr = []

        for i in range(0, 16):
            self.color_arr.append([])
            for j in range(0, 32):
                self.color_arr[i].append(colors[i][j])

    def update_colors(self, colorArr):
        print("xD")
        self.color_arr = colorArr
        global to_update
        to_update = False

    def run(self):
        canvas = self.matrix.CreateFrameCanvas()
        width = self.matrix.width
        height = self.matrix.height
        count = 0

        while True:
            if(to_update):
                self.update_colors(colors)

            for i in range(0, height):
                for j in range(0, width):
                    try:
                        rgb_color = hex_to_rgb(self.color_arr[i][j])
                        canvas.SetPixel(j, i, rgb_color[0], rgb_color[1], rgb_color[2])

                    except IndexError:
                        print(i, j)
                        exit(0)

            canvas = self.matrix.SwapOnVSync(canvas)
            time.sleep(0.02)


def app_process():
    snowfall = Snowfall()
    print("Started LEDs")
    if (not snowfall.process()):
        simple_square.print_help()


@app.route('/', methods = ['PUT'])
def draw():
    f = json.loads(request.data)
    global colors
    global to_update

    colors = f
    to_update = True

    print("Got request")
    return("OK")

_thread.start_new_thread(app_process, ())
app.run(host = '0.0.0.0')