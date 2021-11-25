const citymap = {
  chicago: {
    center: { lat: 41.878113, lng: -87.629799, alt: 223},
  },
  newyork: {
    center: { lat: 40.712776, lng: -74.005974, alt: 58 },
  },
  losangeles: {
    center: { lat: 34.052235, lng: -118.243683, alt: 89 },
  },
  vancouver: {
    center: { lat: 49.282730, lng: -123.120735, alt: 73 },
  },
  helsinki: {
    center: { lat: 60.192059, lng: 24.945831, alt: 7},
  },
  sydney: { center: { lat: -33.865143, lng: 151.2099, alt: 71 } },
  devonport: { center: { lat: -41.180557, lng: 146.34639, alt: 35 } },
  belem: { center: { lat: -1.455833, lng: -48.503887, alt: 15 } },
  zhangjiajie: { center: { lat: 29.117001, lng: 110.478996, alt: 165 } },
  makambako: { center: { lat: -8.849012, lng: 34.82806, alt: 1680 } },
  haiphong: { center: { lat: 20.865139, lng: 106.68383, alt: 9 } },
  toledo: { center: { lat: 39.856667, lng: -4.024444, alt: 523 } },
  valparaiso: { center: { lat: -33.047237, lng: -71.612686, alt: 18 } },
  gobabis: { center: { lat: -22.449259, lng: 18.969973, alt: 1441 } },
  bauchi: { center: { lat: 10.306720, lng: 9.844930, alt: 624 } },
};

function initMap() {
  var mymap = L.map("map").setView([36.0, 14.1], 2);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoic29tZXVzZXIxMjMiLCJhIjoiY2t3ZGI2eXRiMjVoMzJ2cGFpOTNjcnhocCJ9.nH74RwC0XZc_XAIggzervg",
    }
  ).addTo(mymap);

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  for (const city in citymap) {
    let circle = L.circle(
      [citymap[city].center["lat"], citymap[city].center["lng"]],
      {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 10000,
      }
    ).addTo(mymap);

    circle.bindPopup(contentString);
  }
}

document.addEventListener("DOMContentLoaded", initMap, false);
