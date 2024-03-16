const camerafeed = document.getElementById("camerafeed");

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    camerafeed.srcObject = stream;
})
.catch(Error => {
    console.error('Error Accessing Camera:', Error);
});


