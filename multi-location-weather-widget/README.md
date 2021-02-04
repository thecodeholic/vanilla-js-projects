# Multi location/city weather widget

#### Create weather application with possibility to see weather for several cities at the same time.

When you open application you should see button with text **Add new City**.
When you click on button it should show **bootstrap modal** with single input inside it (for city name) (You can skip bootstrap modal if you want and just show an input)
and two buttons **Save** and **Cancel**.
When user clicks on Save button it should close the modal and add weather for that city.
You should still see Add new City button clicking on which will display modal again.
Using this approach you can add as many cities as you want. The temperature needs to be displayed in Celsius. <br>
You can use the following API to get weather for city.<br>
[http://api.weatherapi.com/v1/current.json?key=[API_KEY]&q=[CITYNAME]](http://api.weatherapi.com/v1/current.json?key=[API_KEY]&q=[CITYNAME])<br>
You have to register and get API KEY.<br>

You must save added cities in localStorage, so that if you refresh the browser you should still see cities added previously. 
When you mouse over on city container you should see red X, clicking on which will remove the city from city list. 
You can use **font-awesome times  icon** to red X.
[https://fontawesome.com/icons/times?style=solid](https://fontawesome.com/icons/times?style=solid)

### Important!!
I want to use Object Oriented approach for this task. <br>
You should create at least two classes: **App and City**. App class will have **addCity(City c)** method which will take the **City** object and render it 
and **removeCity(City c)** method which will remove the city.
City class should have constructor (which accepts **cityName** and saves in class property) and two methods: **getWeather() and render()**. <br>
**getWeather()**  will make request in the API, pass the city name and return promise which will resolve into number of Celsius for that city.<br>
**render()** will call getWeather(), take the Celsius and render container with city name and Celsius.

The final application should look like it is displayed on the image bellow. Red X is only displayed on mouse over.
![Multi Location Weather widget](https://i.imgur.com/vdm8obb.png)
