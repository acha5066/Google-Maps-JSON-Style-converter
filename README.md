# About

This tool will convert JSON styles intended for the Google MAPS Javascript API into a query string for use with Google static maps API.

### Usage

All you have to do is pass your JSON styles into the get_static_styles function and it will return the converted string. You could for example, create a html page, include the converter.js file and log the output of the return statement in order to get the string.

#### Known issues

There is an issue with colors, hue and saturation with static maps. Check it out [here](https://code.google.com/p/gmaps-api-issues/issues/detail?can=2&start=0&num=100&q=&colspec=ID%20Type%20Status%20Introduced%20Fixed%20Summary%20Stars%20ApiType%20Internal&groupby=&sort=&id=7357#makechanges)

#### Acknowledgments

This code comes from [this stackoverflow answer](http://stackoverflow.com/a/19117380/2484736). All I did was add unit tests :)

#### License

MIT. Do you want you want with it I don't care.