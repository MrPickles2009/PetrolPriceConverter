# Petrol Price Converter

<p align="center">
	<a href="https://github.com/MrPickles2009/PetrolPriceConverter" rel="nofollow">
		<img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build Status">
	</a>
  <a href="https://github.com/MrPickles2009/PetrolPriceConverter/blob/master/LICENSE">
		<img src="https://img.shields.io/github/license/MrPickles2009/PetrolPriceConverter.svg" alt="license">
	</a>
	<a href="https://play.google.com/store/apps/details?id=com.brokencapodevelopment.ppc">
		<img src="https://img.shields.io/badge/release-v1.0.0-blue.svg" alt="Play Store release">
	</a>
</p>

<a href='https://play.google.com/store/apps/details?id=com.brokencapodevelopment.ppc&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' height='80px'/></a>

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/MrPickles2009/PetrolPriceConverter.git
# Go into the repository
cd PetrolPriceConverter
# Install dependencies
npm install
```

You will then need to create an Open Exchange Rates account here: [https://openexchangerates.org/](https://openexchangerates.org/)
- When your account is created, generate a new app ID
- Paste your app ID into a file named `oxrApiKey.txt`
- Place this file in your `PetrolPriceConverter/src/assets/` folder

```bash
# Run the app
ionic serve
# If the above fails you may need to run for browser instead
ionic cordova run browser
# If the above fails you may need to globally install ionic and cordova
npm install -g ionic cordova
```


## License

[GPL](LICENSE.md)
