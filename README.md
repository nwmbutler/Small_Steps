[![Build Status](https://travis-ci.org/nwmbutler/carbon-front-end.svg?branch=master)](https://travis-ci.org/nwmbutler/carbon-front-end)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

# Small Steps

* [Live on Heroku](https://carbon-front-end.herokuapp.com/)

## Developers

- [Nick Butler](https://github.com/nwmbutler)
- [Nikita Douglas](https://https://github.com/NikitaDouglas)
- [Rich Ewin](https://github.com/RichEwin)
- [Jack Perrin](https://https://github.com/perrinjack)
- [Minsi Yang](https://https://https://github.com/minsiyang)

## The Mission

As a team we decided to focus on a product that raised awareness of current environmental issues and have built a carbon footprint calculator for holidaymakers.

Small Steps takes the user’s mode of transport, origin, and destination, and makes a call to the Google Distance Matrix API to find the distance travelled. It then uses this data to calculate the emissions for the journey in kg CO2e per passenger-km. It also allows the user to see lower-carbon alternatives, real-world equivalents of their journey’s emissions, and it links to a site that allows the user to offset their carbon.

## Jump to

* [Project Approach](https://github.com/nwmbutler/carbon-front-end/blob/README/approach.md)
* [How we made our calculations](https://github.com/nwmbutler/carbon-front-end/blob/README/CALCULATIONS.md)
* [Back-End repository](https://github.com/nwmbutler/carbon-back-end)

![](https://github.com/nwmbutler/Small_Steps/blob/master/public/Screenshot%202020-07-30%20at%2016.30.27.png?raw=true)
![](https://github.com/nwmbutler/Small_Steps/blob/master/public/Screenshot%202020-07-30%20at%2016.31.19.png?raw=true)
![](https://github.com/nwmbutler/Small_Steps/blob/master/public/Screenshot%202020-07-30%20at%2016.50.34.png?raw=true)

## Technologies Used

| Purpose                      |  Technology        |
| ---------------------------- | -----------------  |
| Front end framework          | React              |
| Server framework             | Express            |
| Programming Languages        | Javascript, HTML   |
| CI/CD                        | Travis             |
| Hosting                      | Heroku             |
| Styling                      | Bootstrap, CSS     |
| Testing Frameworks           | Jest, Enzyme       |
| Code Coverage                | Jest               |
| Distance Data                | Google Distance Matrix API |
| Addresss Autocomplete        | Google Maps JS API   |

## How to Run

### This repo needs cloning and running for the back-end to work correctly.
[Back-End repository](https://github.com/nwmbutler/carbon-back-end)

```
clone this repo
```
```
clone the backend repo
```
[Back End repository](https://github.com/nwmbutler/carbon-back-end)

### These three instructions are identical, but perform them in backend root first, followed by the frontend.

* In the root run
```
$ npm install
```
* In the root run
```
$ npm start
```
* Start script should automatically open a new window with the react app visible,
if this doesn't open automatically navigate to localhost:3000
* To see the backend navigate to localhost:5000
