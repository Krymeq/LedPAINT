## LEDPaint

Web app consisting of two parts:

React.js frontend, a paint-like website where you can unleash your imagination and draw whatever you like
Flask backend, which paints in real-time everything you draw on 16x32 LED matrix.

To launch a server on your Pi, wire your LED matrix as shown [here](https://github.com/hzeller/rpi-rgb-led-matrix/blob/master/wiring.md)<br/>
For app to launch properly you need to install Python binding for LED matrices, available [here](https://github.com/hzeller/rpi-rgb-led-matrix/) by downloading it and using in its root folder <br/>

```shell
sudo apt-get update && sudo apt-get install python3-dev python3-pillow -y
make build-python PYTHON=$(which python3)
sudo make install-python PYTHON=$(which python3)
```

Also, you may be prompted to install additional dependencies, e.g. Flask, Flask-CORS or NumPy (assuming you haven't installed it yet).

To launch a client-app server, simply execute `npm install` and `npm start` afterwards, everything will be done for you. However, you may need to change IP address to which requests are being sent, because it may vary depending on the local network you are connected to. Said IP address is located in src/paintingCanvas.js, function `sendData()` in the fetch call (line 61). To check IP address of your Pi, open command prompt and type `ip a s`, then look for address like this: 192.168.x.x 


#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
