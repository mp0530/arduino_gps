function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    }, function(error) {
        console.error("Error getting geolocation:", error);
    });
}

// 每秒获取一次位置信息
setInterval(getLocation, 2000);
