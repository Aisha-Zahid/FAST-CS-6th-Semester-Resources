(() => {
  const map = document.getElementById('mapContainer')

  if (elementExists(map)) {

    //Create Custom Icon for Map
    var mapIcon = L.icon({
      iconUrl: 'assets/images/icon-location.svg',
      iconSize: [66, 99],
      shadowSize: [0, 0],
      iconAnchor: [33, 45],
      shadowAnchor: [0, 0],
      popupAnchor: [-3, -76]
    });


    //Location of Map
    const coordinatesHeadOffice = [41.48149310921016, -71.310360301230182];
    //Set Map
    const mapHeadOffice = L.map('mapContainer').setView(coordinatesHeadOffice,15);
    //customize map
    customizeMap(mapHeadOffice);
    //Add custom popup indicator
    addPopup(coordinatesHeadOffice, mapHeadOffice);
    //Setup how the user interacts with the map
    setMapControl(mapHeadOffice);

    function customizeMap(mapName) {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20,
        tileSize: 512,
        zoomOffset: -1,
      }).addTo(mapName);
    }

    function addPopup(coordinates, mapName) {
      L.marker(coordinates, {icon: mapIcon}).addTo(mapName)
      .openPopup();
    }

    //disable scroll zoom until user clicks on map
    function setMapControl(mapName){
        mapName.scrollWheelZoom.disable();
        mapName.on('focus', () => { mapName.scrollWheelZoom.enable(); });
        mapName.on('blur', () => { mapName.scrollWheelZoom.disable(); });
    }
  }

  //used to detect if element is present on page
  function elementExists(elem) {
    return (typeof(elem) != 'undefined' && elem != null)
  }

 })();