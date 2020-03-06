if(document.querySelector('[data-days]')) {
    function getCountDown() {
        const MS_PER_DAY = 1000 * 60 * 60 * 24
        var currentTime = new Date();
        var wedDay =  new Date("6/13/2020, 19:00:00")
        console.log(currentTime)
        console.log(wedDay)
        var countDown = Math.abs(currentTime - wedDay)
        
        var countDownDays = countDown / (MS_PER_DAY);
        var days = Math.floor(countDownDays)
        document.querySelector('[data-days]').innerText = days
    
        var countDownHour = (countDownDays - days) * 24;
        var hours = Math.floor(countDownHour)
        document.querySelector('[data-hours]').innerText = hours
        
        var countDownMin = (countDownHour - hours) * 60;
        var min = Math.floor(countDownMin)
        document.querySelector('[data-minutes]').innerText = min
        
        var countDownSec = (countDownMin - min) * 60
        var sec = Math.floor(countDownSec)
        document.querySelector('[data-secs]').innerText = sec
    }
    
    setInterval(getCountDown, 1000);    
}
