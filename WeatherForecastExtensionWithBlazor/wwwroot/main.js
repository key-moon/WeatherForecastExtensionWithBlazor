async function get_coord() {
    return new Promise((success, reject) => {
        if (!navigator.geolocation) reject("Geolocation is not supported by this browser.");
        navigator.geolocation.getCurrentPosition((position) => {
            success({ lat: position.coords.latitude, lon: position.coords.longitude });
        });
    }); 
}