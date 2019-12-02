const countdown=document.querySelector('.countdown');
const launchDate=new Date('Dec 24, 2019 00:00:01').getTime();
console.log(launchDate);
const interval=setInterval(()=>{
    console.log('tick');
    const now=new Date().getTime();
    const distance=launchDate-now;

    const days=Math.floor(distance/(1000*60*60*24));
    const hours=Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    const mins=Math.floor((distance %(1000*60*60))/(1000*60));
    const seconds=Math.floor((distance %(1000*60))/(1000));
    console.log(days, " Days");
    console.log(hours, " Hours");
    console.log(mins, " Minutes");
    console.log(seconds, " Seconds");

    countdown.innerHTML= `
    <div><span>${days} Days</span></div>
    <div><span>${hours} Hours</span></div>
    <div><span>${mins} Minutes</span></div>
    <div><span>${seconds} Seconds</span></div>
    `;
},1000);