<template>
  <div class="hello">
    <div class="weather-top">
      <div class="search-box">
        <div class="weather-loc">
          <p>{{country}} · {{ input2 }}</p>
          <p class="spread-time">{{ spreadTime }}发布&nbsp;周{{ week }}</p>
        </div>
        <div class="search">
        <el-input class="input-back" placeholder="请输入城市名称" v-model="input2" size="small"></el-input>
        <el-button class="input-back" v-on:click="greet" size="mini">查询</el-button>
        </div>
      </div>
      
      <div class="weather-temp">
        <p class="temperate">
          <img :src="weather_pic" alt height="40px" />
          {{ temperature }}°</p>
        <p>{{ daySatus }} / {{ day_wind_direction }}{{ windPower }}</p>
      </div> 
      <div class='wea-other'>
        <p>PM:{{ exponent }} {{ noWeather }}</p>
        <!-- <p>指数：</p> -->
        <p>紫外线：{{ outside }}</p>
        <p>湿度：{{ sd }}</p>
      </div> 
      <div class='wea-other'>
        <p>穿衣：{{ clotheExponent }}</p>
        <p>洗车：{{ carExponent }}</p>
        <p>出行：{{ tripExponent }}</p>
        <p>体感：{{ comfort }}</p>
        
      </div> 
      <div class='wea-other'>
        <p>晨练：{{ clExponent }}</p>
        <p>降水：{{ jiangshui }}</p>
        <p>过敏：{{ agExponent }}</p>
        <p>逛街：{{ gjExponent }}</p>
      </div>
      <div id="weather" class="tem-line"></div>
      <div class="weaher-img">
        <p><img :src="f1_day_weather_pic" alt height="30px" /></p>
        <p><img :src="f2_day_weather_pic" alt height="30px" /></p>
        <p><img :src="f3_day_weather_pic" alt height="30px" /></p>
      </div>
      <div class="alarm-info">
        <h4 style="color:#be2121">预警信息：</h4>
        <p v-for="item in alarmList" :key="item" :value="item">
          {{ item.issueTime}} {{ item.province}}{{ item.signalType}}{{ item.signalLevel}}<br/>
          {{ item.issueContent}}<br/>
        </p>
      </div>
      <div class="sun-begin-end">
        <h4 style="color:rgb(48, 47, 47)">日出日落时间：</h4>{{sun_begin_end}}
      </div>
    </div> 
    
   
    <div>
      
    </div> 
  
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data () {
    return {
      msg: 'A Simple VUE Weather Demo',
      input2:'北京',
      spreadTime:'8:00',
      week:'四',
      temperature:'32',
      sd:'32',
      weather_pic:'',
      daySatus:'晴',
      day_wind_direction:'东风',
      windPower:'东风2级',
      noWeather:'2.5',
      exponent:'66',
      outside:'较强',
      clothesImg:'',
      carImg:'',
      tripImg:'',
      sportImg:'',
      clotheExponent:'适宜',
      carExponent:'适宜',
      tripExponent:'适宜',
      sportExponent:'适宜',
      clExponent:'',
gjExponent:'',
lsExponent:'',
nlExponent:'',
yhExponent:'',
xqExponent:'',
agExponent:'',
jiangshui:'',
comfort:'',
f1_day_weather_pic:'',
f2_day_weather_pic:'',
f3_day_weather_pic:'',
sun_begin_end:'',
      noWeather:'优',
      gridData:[],
      arrTime:[],
      arrTopTemperature:[],
      arrSmallTemperature:[],
      arrWind:[],
      alarmList:[],
    }
  },
  mounted(){
        this.greet()
    },
  methods: {
      greet() {
        let _this = this
        console.log(_this.input2)
      function formatterDateTime() {
        
  var date=new Date()
  var month=date.getMonth() + 1
        var datetime = date.getFullYear()
                + ""// "年"
                + (month >= 10 ? month : "0"+ month)
                + ""// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate())
                + ""
                + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours())
                + ""
                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes())
                + ""
                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
        return datetime;
    }

$.ajax({
    type: 'post',
    url: 'http://route.showapi.com/9-2',
    dataType: 'json',
    data: {
        "showapi_timestamp": formatterDateTime(),
        "showapi_appid": '104148', //这里需要改成自己的appid
        "showapi_sign": 'a7b06dbfb7274960838176f986c97991',  //这里需要改成自己的应用的密钥secret
        "areaid":"",
        "area":_this.input2,
        "needMoreDay":"0",
        "needIndex":"1",
        "needHourData":"0",
        "need3HourForcast":"0",
        "needAlarm":"1"
    },

    error: function(XmlHttpRequest, textStatus, errorThrown) {
        alert("操作失败!");
    },
    success: function(result) {
        console.log(result) //console变量在ie低版本下不能用
        let showapi_res_body = result.showapi_res_body
        if(showapi_res_body.showapi_fee_code == 0){
          _this.arrTime =[]
          _this.arrTopTemperature =[]
          _this.arrSmallTemperature =[]
          let f1 = showapi_res_body.f1
          _this.alarmList = showapi_res_body.alarmList
          _this.day_weather = f1.day_weather
           _this.night_weather = f1.night_weather
           _this.sun_begin_end = f1.sun_begin_end
          _this.jiangshui = f1.jiangshui
           _this.day_air_temperature = f1.day_air_temperature
           _this.night_air_temperature = f1.night_air_temperature
           _this.day_wind_direction = f1.day_wind_direction
           _this.night_wind_direction = f1.night_wind_direction
           let index = f1.index
           _this.clotheExponent = index.clothes.title
           _this.carExponent = index.wash_car.title
           _this.tripExponent = index.travel.title
           _this.sportExponent = index.sports.title
           _this.outside = index.uv.title
           _this.clExponent = index.cl.title
           _this.gjExponent = index.gj.title
           _this.lsExponent = index.ls.title
           _this.nlExponent = index.nl.title
           _this.yhExponent = index.yh.title
           _this.xqExponent = index.xq.title
           _this.agExponent = index.ag.title
           _this.comfort = index.comfort.title
           _this.week = f1.weekday
          _this.gridData.push(f1)
          _this.gridData.push(showapi_res_body.f2)
          _this.gridData.push(showapi_res_body.f3)
          let f2 = showapi_res_body.f2
          let f3 = showapi_res_body.f3
          _this.f1_day_weather_pic = f1.day_weather_pic
          _this.f2_day_weather_pic = f2.day_weather_pic
          _this.f3_day_weather_pic = f3.day_weather_pic
          _this.arrTime.push('周' + f1.weekday  + f1.day_wind_direction + f1.day_wind_power.substring(0,4))
          _this.arrTime.push('周' + f2.weekday  + f2.day_wind_direction + f2.day_wind_power.substring(0,4))
          _this.arrTime.push('周' + f3.weekday  + f3.day_wind_direction + f3.day_wind_power.substring(0,4))
          console.log(_this.arrTime)
         _this.arrTopTemperature.push(f1.day_air_temperature)
         _this.arrTopTemperature.push(showapi_res_body.f2.day_air_temperature)
         _this.arrTopTemperature.push(showapi_res_body.f3.day_air_temperature)
         console.log(_this.arrTopTemperature)
         _this.arrSmallTemperature.push(f1.night_air_temperature)
         _this.arrSmallTemperature.push(showapi_res_body.f2.night_air_temperature)
         _this.arrSmallTemperature.push(showapi_res_body.f3.night_air_temperature)
         console.log(_this.arrSmallTemperature)
         _this.arrWind.push(f1.day_wind_power)
         _this.arrWind.push(showapi_res_body.f2.day_wind_power)
         _this.arrWind.push(showapi_res_body.f3.day_wind_power)
         console.log(_this.arrWind)
         
         let nowSatus = showapi_res_body.now
          _this.noWeather = nowSatus.aqiDetail.quality
          _this.temperature = nowSatus.temperature
          _this.daySatus = nowSatus.weather
          _this.exponent = nowSatus.aqi  
          _this.sd = nowSatus.sd
          _this.weather_pic = nowSatus.weather_pic
          _this.wind_direction = nowSatus.wind_direction
          _this.windPower = nowSatus.wind_power
          let cityInfo = showapi_res_body.cityInfo
          _this.provience = cityInfo.c7
          _this.city = cityInfo.c5 
          _this.country = cityInfo.c9
          _this.spreadTime = showapi_res_body.time / 100 //发布时间
          // _this.spreadTime = formatDate(new Date(showapi_res_body.time)) //发布时间
          _this.chart()
        }
    }
});
      },
      chart(){
        var mydate=new Date();
        var myddy=mydate.getDay();//获取存储当前日期
        var weekday=["日","一","二","三","四","五","六"];
        this.week = weekday[myddy]

        var weather = this.$echarts.init(document.getElementById('weather'));
        console.log('折线图时间')
        console.log(this.arrTime)
      let option = {
          title: {
              text: '未来三天',
              subtext: ''
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['最高气温', '最低气温']
          },
    //       toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: this.arrTime, //时间、星期this.arrTime
              axisLine:{
                        lineStyle:{
                            color:'#fff',
                            // width:8,//这里是为了突出显示加上的
                        }
                    }
            
          },
          yAxis: {
              scale:true, //纵坐标起始点根据最低值变化
              type: 'value',
              axisLabel: {
                  formatter: '{value} °C'
              },
          },
          grid:{
                x:50,
                y:60,
                right:50
              },
          series: [{
                  name: '最高气温',
                  type: 'line',
                  data: this.arrTopTemperature, //this.arrTopTemperature,  //最高气温数组
                  markPoint: {
                      data: [{
                              type: 'max',
                              name: '最大值'
                          }

                      ]
                  },
                  markLine: {
                      data: [{
                          type: 'average',
                          name: '平均值'
                      }]
                  }
              },
              {
                  name: '最低气温',
                  type: 'line',
                  data: this.arrSmallTemperature,//this.arrSmallTemperature, //最低气温数组
                  markPoint: {
                      data: [{
                          type: 'min',
                          name: '最小值'
                      }]
                  },
                  markLine: {
                      data: [{
                              type: 'average',
                              name: '平均值'
                          },

                      ]
                  }
              }
          ]
      };
      weather.setOption(option)

      }
    
    }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h3{
  margin:40px 0 0
}
  

ul{
  list-style-type :none;
  padding: 0
}
  

li{
  display:inline-block;
  margin:0 10px
}
  

a{
  color:#42b983
}
  

.weather-top {
  display:flex;
  flex-direction:column;
  background:linear-gradient(to bottom,#99cdef,#0c92d2);
  color:#ffffffdb;
  padding:5px
}
  
  .search-box{
    display:flex;
    flex-direction:row;
    align-content:space-between;
    justify-content:space-between;
  }
    
    
  .search{
    padding-bottom:5px;
    display:flex;
    flex-direction:row;
    width:53%
  }
    
    .input-back{
      background:#6e91a661;
      color:#fff;
    }
    .input-back input{
      background:#6e91a661 !important
    }
        
  .spread-time{
    font-size:12px;
    line-height:20px
  }
    
  .weather-temp{
    text-align:center
  }
    
    .temperate{
      font-size:42px
    }
      
  .wea-other{
    display:flex;
    flex-direction:row;
    padding-top:6px;
    font-size:12px
  }
    
    .wea-other p{
      padding:0 5px;
     background: #f2eded33;
     margin-right: 3px;
     border-radius: 5px;
    }
     
     
.weather-middle-exponent{
  display:flex;;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  font-size:12px;
}
  
  .weather-close{
    display:flex;
    flex-direction:row;
    padding:5px
  }
    
    .index-text{
      font-size:12px
    }
      
    .exponent-val{
      color:#908d8d
    }
.tem-line{
  height:200px;
  width:100%;
  padding-top:20px
}      
canvas{
  width:300px;
  height:200px !important
}
.weaher-img{
  display:flex;
  flex-direction:row;
  width: 100%;
  justify-content: space-around;
  margin-top:-40px
}
.alarm-info{
  padding: 10px 0
}
.alarm-info p{
  line-height:18px
}  
.sun-begin-end{
  line-height:20px
}
</style>
