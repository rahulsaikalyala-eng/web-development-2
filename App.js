import React,{useState} from 'react';
function WeatherForecast(){
const[forecast,setForecast]=useState(null);
const[loading,setLoading]=useState(false);
const fetchWeather=()=>{
setLoading(true);
setTimeout(()=>{
setForecast({city:"new York",temp:'72°F,condition:"sunny",icon:"⧈"});
setLoading(false);
},1000);
};
return(
<div style={{
minHeight:'100vh',
display:'grid',
placeItems:'center',
background:'linear-gradient?(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)',
backgroundSize:'400%400%',
animation:'gradient 15s ease infinite',
color:'white',
padding:'2rem',
textAlign:'center'
}}>
<div>
<h1>Weather Forecast</h1>
<button onClick={fetchWeather}disabled={loading}style={{
padding:'12px 24px',
background:'rgba(255,255,255,0.2)',
color:'white',
border:'2px solid white',
borderRadius:'30px',
margin:'20px 0',
}}>
{loading?'loading...':Get Weather'}
</button>
{forecast&&(
<div style={{
background:'rgba(255,255,255,0.15)',
padding:'20px',
borderRadius:'15px'
}}>
<h2>{forecast.city}</h2>
<div style={{fontSize:'3rem'}}>{forecast.icon}</div>
<p style={{fontSize:'1.5rem'}}>{forecast.temp}</p>
<p>{forecast.condition}</p>
</div>
)}
</div>
<style>{'@Keyfram,es gradient{0%,100%{background-position:0%50%}50%{background-position:100%50%}}`}</style>
</div>
);
}
export default WeatherForecast;   