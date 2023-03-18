

## Practical React -  Weather App Activity

### :atom_symbol: Introduction 
This code repository contains the starter code for the coding portion of our *Practical React Workshop* (Spring 2023). Here, the following concepts in React will be used to implement a basic weather application:
* JSX
* Components
* State
* Conditional Rendering
* Rendering Lists
* Hooks (`useState` and `useEffect`) 

You can refer to our [workshop slides](https://docs.google.com/presentation/d/1gEppHNplM2Ox5mp3CvtPqkk8cDMq8v6YwbXSFWTdI80/edit?usp=sharing) if you are unsure about any of these concepts.
 
### :desert_island: Getting Started - CodeSandbox
1. Create an account with [CodeSandbox](https://codesandbox.io/?from-app=1), a web-accessible coding environment where you can update code repositories online without configuring your device.
2. Click this link to get started with our activity!

### :wrench: Getting Started - Github
> **Note:** Please make sure you have node and npm installed onto your device if you plan on cloning this repository through git.

1. Clone this repository onto your device with the following command through the command-line: 
```bash
git clone https://github.com/gt-webdev/practical-react-weather-app.git
cd practical-react-weather-app
```
2.  Execute this command to install any dependencies necessary for this project.
```bash
npm install
```
3. Now, you can enter the following command in your terminal to run your app. 
```
npm run start
```

### :pencil: Tasks
> **Goal:** We want to be able to model our app to look similar to the one presented in this image: 
![enter image description here](https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1809/posts/92887/image-upload/hiher.jpg)

Currently, our app uses a `WeatherDisplay` component to present the location (will always be Atlanta, GA) and the current temperature.

Try playing around with the 12-Hour and 24-Hour button shown on the screen, the purpose of these two functions is to change the number of entries (weather data) shown on your screen. So if you click the 12-Hour button, the screen should only show you the weather for the next 12-Hour. Did anything happen after you clicked the buttons? 

<details><summary> Did your screen change in any ways?  </summary>
<p>
It did not right? But, that is the anticipated result. Do you know why it is not working? What do you need to do to make update the results on the screen
</p>
</details>

</br>
Can you see what type of data are being returned by the Weather API? What do you need to do to see the response body that describes the weather? What variable contains this data? 
</br>
Once you find it, you can do so much with it. For example, you can display data regarding timezone, humidity level, pressure, wind speed, etc. You have the ability to display any output you want onto your screen.
</br>
<b>You will notice that the date and temperature displayed on the screen is static.</b> If we are able to extract the data from the weather API, then we should be able to replace the date and temperature to a dynamic form of data. Let's give it a try!