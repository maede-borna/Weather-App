function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    var hour = date.getHours();
    var minute = date.getMinutes();
    var time = hour + ':' + (minute < 10 ? '0' : '') + minute;
  
    return time;
  }


  