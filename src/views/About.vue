<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
name:'beifen',
data () {
  return {
	"showapi_res_code": 0,
	"showapi_res_error": "",
	"showapi_res_body": {
		"cityInfo": {
			"c1": "101010700",
			"c10": "3",
			"c11": "010",
			"c12": "102200",
			"c15": "80",
			"c16": "AZ9010",
			"c17": "+8",
			"c2": "changping",
			"c3": "昌平",
			"c4": "beijing",
			"c5": "北京",
			"c6": "beijing",
			"c7": "北京",
			"c8": "china",
			"c9": "中国",
			"latitude": 40.206,
			"longitude": 116.165
		},
		"now": {
			"aqi": "71",
			"aqiDetail": {
				"aqi": "71",
				"area": "北京",
				"area_code": "beijing",
				"co": "0.817",
				"no2": "52",
				"o3": "33",
				"o3_8h": "9",
				"pm10": "56",
				"pm2_5": "51",
				"primary_pollutant": "颗粒物(PM2.5)",
				"quality": "良",
				"so2": "3"
			},
			"sd": "70%",
			"temperature": "15",
			"temperature_time": "18:30",
			"weather": "晴",
			"weather_pic": "http://appimg.showapi.com/images/weather/icon/day/00.png",
			"wind_direction": "北风",
			"wind_power": "1级"
		},
		"f1": {
			"air_press": "1008 hPa",
			"day": "20151023",
			"day_air_temperature": "18",
			"day_weather": "晴",
			"day_weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
			"day_wind_direction": "无持续风向",
			"day_wind_power": "微风<10m/h",
			"jiangshui": "3%",
			"night_air_temperature": "9",
			"night_weather": "晴",
			"night_weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
			"night_wind_direction": "无持续风向",
			"night_wind_power": "微风<10m/h",
			"sun_begin_end": "06:35|17:23",
			"weekday": 5,
			"ziwaixian": "中等",
			"index": {
				"beauty": {
					"desc": "请选用中性保湿型霜类化妆品。",
					"title": "保湿"
				},
				"clothes": {
					"desc": "建议穿薄外套或牛仔裤等服装。",
					"title": "较舒适"
				},
				"cold": {
					"desc": "昼夜温差大，易感冒。",
					"title": "易发"
				},
				"comfort": {
					"desc": "白天不冷不热，风力不大。",
					"title": "舒适"
				},
				"glass": {
					"desc": "白天根据户外光线情况佩戴太阳镜",
					"title": "需要"
				},
				"sports": {
					"desc": "户外运动请注意防晒。",
					"title": "较适宜"
				},
				"travel": {
					"desc": "天气较好，丝毫不会影响您出行的心情。",
					"title": "适宜"
				},
				"uv": {
					"desc": "辐射较弱，涂擦SPF12-15、PA+护肤品。",
					"title": "弱"
				},
				"wash_car": {
					"desc": "无雨且风力较小，易保持清洁度。",
					"title": "较适宜"
				}
			},
			"alarmList": [
				{
					"city": "",
					"issueContent": "大风蓝色预警:预计23日23时到24日08时:大连、锦州、营口、盘锦、葫芦岛地区陆地偏北风6级,阵风7级;渤海、渤海海峡、黄海北部偏北风7级,阵风8级。大连、丹东、锦州、营口、盘锦、葫芦岛附近海域和航线将受影响,请注意防范。省气象灾害预警中心10月23日16时35分发布",
					"issueTime": "2015-10-23 16:40:00",
					"province": "辽宁省",
					"signalLevel": "蓝色",
					"signalType": "大风"
				}
			],
			"3hourForcast": [
				{
					"hour": "20时-23时 ",
					"temperature": "12℃/10℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				},
				{
					"hour": "23时-02时 ",
					"temperature": "10℃/9℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				},
				{
					"hour": "02时-05时 ",
					"temperature": "10℃/9℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				},
				{
					"hour": "05时-08时 ",
					"temperature": "13℃/10℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				}
			]
			
		},
		"f2": {
			"air_press": "1008 hPa",
			"day": "20151023",
			"day_air_temperature": "18",
			"day_weather": "晴",
			"day_weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
			"day_wind_direction": "无持续风向",
			"day_wind_power": "微风<10m/h",
			"jiangshui": "3%",
			"night_air_temperature": "9",
			"night_weather": "晴",
			"night_weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
			"night_wind_direction": "无持续风向",
			"night_wind_power": "微风<10m/h",
			"sun_begin_end": "06:35|17:23",
			"weekday": 5,
			"ziwaixian": "中等",
			"index": {
				"beauty": {
					"desc": "请选用中性保湿型霜类化妆品。",
					"title": "保湿"
				},
				"clothes": {
					"desc": "建议穿薄外套或牛仔裤等服装。",
					"title": "较舒适"
				},
				"cold": {
					"desc": "昼夜温差大，易感冒。",
					"title": "易发"
				},
				"comfort": {
					"desc": "白天不冷不热，风力不大。",
					"title": "舒适"
				},
				"glass": {
					"desc": "白天根据户外光线情况佩戴太阳镜",
					"title": "需要"
				},
				"sports": {
					"desc": "户外运动请注意防晒。",
					"title": "较适宜"
				},
				"travel": {
					"desc": "天气较好，丝毫不会影响您出行的心情。",
					"title": "适宜"
				},
				"uv": {
					"desc": "辐射较弱，涂擦SPF12-15、PA+护肤品。",
					"title": "弱"
				},
				"wash_car": {
					"desc": "无雨且风力较小，易保持清洁度。",
					"title": "较适宜"
				}
			},
			"alarmList": [
				{
					"city": "",
					"issueContent": "大风蓝色预警:预计23日23时到24日08时:大连、锦州、营口、盘锦、葫芦岛地区陆地偏北风6级,阵风7级;渤海、渤海海峡、黄海北部偏北风7级,阵风8级。大连、丹东、锦州、营口、盘锦、葫芦岛附近海域和航线将受影响,请注意防范。省气象灾害预警中心10月23日16时35分发布",
					"issueTime": "2015-10-23 16:40:00",
					"province": "辽宁省",
					"signalLevel": "蓝色",
					"signalType": "大风"
				}
			],
			"3hourForcast": [
				{
					"hour": "20时-23时 ",
					"temperature": "12℃/10℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				},
				{
					"hour": "23时-02时 ",
					"temperature": "10℃/9℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				},
				{
					"hour": "02时-05时 ",
					"temperature": "10℃/9℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/night/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				},
				{
					"hour": "05时-08时 ",
					"temperature": "13℃/10℃",
					"weather": "晴",
					"weather_pic": "http://app1.showapi.com/weather/icon/day/00.png",
					"wind_direction": "无持续风向",
					"wind_power": "微风"
				}
			]
			
		},
		"hourDataList": [
			{
				"aqi": "53",
				"aqiDetail": {},
				"sd": "85%",
				"temperature": "9",
				"temperature_time": "00:00",
				"weather": "多云",
				"weather_pic": "http://appimg.showapi.com/images/weather/icon/night/01.png",
				"wind_direction": "北风",
				"wind_power": "1级"
			},
			{
				"aqi": "53",
				"aqiDetail": {},
				"sd": "81%",
				"temperature": "10",
				"temperature_time": "00:30",
				"weather": "多云",
				"weather_pic": "http://appimg.showapi.com/images/weather/icon/night/01.png",
				"wind_direction": "北风",
				"wind_power": "1级"
			} 
		],
		"ret_code": 0,
		"time": "20151023180000"
	}
}
}
}
</script>  
