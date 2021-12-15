mapboxgl.accessToken = 'pk.eyJ1IjoiYW5mYXNhIiwiYSI6ImNrd2RhN3hnMTI1cHUycHBhb2U1dmI3em4ifQ.kvRVycsqlfT0G14Co4F0NA';
        
        var layerIDs = []; // Will contain a list used to filter against.
        
        var filterGroup = document.getElementById('filter-group');

        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [106.79839021584183, -6.240119213126457],
          zoom: 13
        });

        var places = {
            'type': 'FeatureCollection',
            'features': [
                {   'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Lebak Bulus Grab</strong><p>Jl. Lebak Bulus Raya no. 38, Lebak Bulus, Cilandak, Jakarta Selatan, Indonesia</p>',
                        'icon': 'Stasiun Lebak Bulus Grab'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.77492065969619, -6.28927694773441]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Fatmawati</strong><p>Jl. RA Kartini, West Cilandak, Cilandak, Jakarta Selatan, Indonesia</p>',
                        'icon': 'Stasiun Fatmawati'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.79391925450584,-6.2925516897213365]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Cipete Raya</strong><p>Jalan RS Fatmawati 15, Gandaria Selatan, Cilandak, Jakarta Selatan, Indonesia</p>',
                        'icon': 'Stasiun Cipete Raya'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.79732292318597,-6.278267413744348]
                    } 
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Haji Nawi</strong><p>Jalan RS Fatmawati 33, Gandaria Selatan, Cilandak, Jakarta Selatan, Indonesia</p>',
                        'icon': 'Stasiun Haji Nawi'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.79732947692688,-6.266689685091864] 
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Blok A</strong><p>Jalan RS Fatmawati 58, Cipete Utara, Kebayoran Baru, Jakarta Selatan, Indonesia</p>',
                            'icon': 'Stasiun Blok A'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.7971334712422, -6.2557541083380865] 
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Blok M BCA</strong><p>Jalan Panglima Polim Raya 116 Melawai, Kebayoran Baru, Jakarta Selatan, Indonesia</p>',
                            'icon': 'Stasiun Blok M BCA'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.79811855368116,-6.24442190267019] 
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Asean</strong><p>Jalan Sisingamangaraja XII, Selong, Kebayoran Baru, Jakarta Selatan, Indonesia</p>',
                            'icon': 'Stasiun Asean'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.79840630004485, -6.2388223783754055] 
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Senayan</strong><p>Jl. Jenderal Sudirman, Senayan, Kebayoran Baru, Jakarta Selatan, Indonesia</p>',
                            'icon': 'Stasiun Senayan'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.80247752174839, -6.22673844611695]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Istora Mandiri</strong><p>Jl. Jendral Sudirman no. 200, Gelora, Tanah Abang, Jakarta Pusat, Indonesia</p>',
                            'icon': 'Stasiun Istora Mandiri'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.80856027427018, -6.222380115603052]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Bendungan Hilir</strong><p>Jalan Jenderal Sudirman, Bendungan Hilir, Tanah Abang, Jakarta Pusat, Indonesia</p>',
                            'icon': 'Stasiun Bendungan Hilir'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.8179487421585, -6.21500029296768]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Setiabudi Astra</strong><p>Jl. Jenderal Sudirman Kav. 21, Karet Kuningan, Setiabudi, Jakarta Selatan, Indonesia</p>',
                            'icon': 'Stasiun Setiabudi Astra'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.82149528003475, -6.208863966804278]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Dukuh Atas BNI</strong><p>Jl. Tanjung Karang, Kebon Melati, Tanah Abang, Jakarta Pusat, Indonesia</p>',
                            'icon': 'Stasiun Dukuh Atas BNI'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.82283260890487, -6.200805373412766]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stasiun Bundaran HI</strong><p>Jl. Mohammad Husni Thamrin Kav. 17-136, Gondangdia, Menteng, Jakarta Pusat, Indonesia</p>',
                            'icon': 'Stasiun Bundaran HI'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [106.82297983530182, -6.191883727739853]
                    }
                },
            ]
        };

        map.on('load', function () {
            map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                // Add an image to use as a custom marker
                function (error, image) {
                    if (error) throw error;
                    map.addImage('custom-marker', image);

                    map.addSource('places', {
                        'type': 'geojson',
                        'data': places
                    });

                    places.features.forEach(function (feature) {
                        var symbol = feature.properties['icon'];
                        var layerID = 'poi-' + symbol;
                        console.log

                        // Add a layer for this symbol type if it hasn't been added already.
                        if (!map.getLayer(layerID)) {
                            map.addLayer({
                                'id': layerID,
                                'type': 'symbol',
                                'source': 'places',
                                'layout': {
                                    'icon-image': 'custom-marker',
                                    'icon-allow-overlap': true,
                                },
                                'filter': ['==', 'icon', symbol]
                            });

                            // Add checkbox and label elements for the layer.
                            var input = document.createElement('input');
                            input.type = 'checkbox';
                            input.id = layerID;
                            input.checked = true;
                            filterGroup.appendChild(input);

                            var label = document.createElement('label');
                            label.setAttribute('for', layerID);
                            label.textContent = symbol;
                            filterGroup.appendChild(label);

                            // When the checkbox changes, update the visibility of the layer.
                            input.addEventListener('change', function (e) {
                                map.setLayoutProperty(
                                    layerID,
                                    'visibility',
                                    e.target.checked ? 'visible' : 'none'
                                );
                            });

                            // Create a popup, but don't add it to the map yet.
                            var popup = new mapboxgl.Popup({
                                closeButton: false,
                                closeOnClick: false
                            });

                            map.on('mouseenter', layerID, function (e) {
                                // Change the cursor style as a UI indicator.
                                map.getCanvas().style.cursor = 'pointer';

                                var coordinates = e.features[0].geometry.coordinates.slice();
                                var description = e.features[0].properties.description;

                                // Ensure that if the map is zoomed out such that multiple
                                // copies of the feature are visible, the popup appears
                                // over the copy being pointed to.
                                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                                }

                                // Populate the popup and set its coordinates
                                // based on the feature found.
                                popup.setLngLat(coordinates).setHTML(description).addTo(map);
                            });

                            map.on('mouseleave', layerID, function () {
                                map.getCanvas().style.cursor = '';
                                popup.remove();
                            });

                            layerIDs.push(layerID);

                            document.getElementById('flylbg').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.77492065969619, -6.28927694773441],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });
                            
                            document.getElementById('flyf').addEventListener('click', () => {
                            // Fly to a random location by offsetting the point -74.50, 40
                            // by up to 5 degrees.
                            map.flyTo({
                            center: [106.79391925450584,-6.2925516897213365],
                            zoom: 18,
                            essential: true // this animation is considered essential with respect to prefers-reduced-motion
                            });
                            });

                            document.getElementById('flycr').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.79732292318597,-6.278267413744348],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });

                            document.getElementById('flyhn').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.79732947692688,-6.266689685091864],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });
                            
                            document.getElementById('flyba').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.7971334712422, -6.2557541083380865],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });
                            
                            document.getElementById('flybm').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.79811855368116,-6.24442190267019],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });
                            
                            document.getElementById('flybas').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.79840630004485, -6.2388223783754055],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });
                            
                            document.getElementById('flys').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.80247752174839, -6.22673844611695],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });
                            
                            document.getElementById('flyim').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.80856027427018, -6.222380115603052],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });

                            document.getElementById('flybh').addEventListener('click', () => {
                              // Fly to a random location by offsetting the point -74.50, 40
                              // by up to 5 degrees.
                              map.flyTo({
                              center: [106.8179487421585, -6.21500029296768],
                              zoom: 18,
                              essential: true // this animation is considered essential with respect to prefers-reduced-motion
                              });
                              });
                            
                              document.getElementById('flysb').addEventListener('click', () => {
                                // Fly to a random location by offsetting the point -74.50, 40
                                // by up to 5 degrees.
                                map.flyTo({
                                center: [106.82149528003475, -6.208863966804278],
                                zoom: 18,
                                essential: true // this animation is considered essential with respect to prefers-reduced-motion
                                });
                                });
                            
                            document.getElementById('flyab').addEventListener('click', () => {
                                // Fly to a random location by offsetting the point -74.50, 40
                                // by up to 5 degrees.
                                map.flyTo({
                                center: [106.82283260890487, -6.200805373412766],
                                zoom: 18,
                                essential: true // this animation is considered essential with respect to prefers-reduced-motion
                                });
                                });

                            document.getElementById('flyhi').addEventListener('click', () => {
                                // Fly to a random location by offsetting the point -74.50, 40
                                // by up to 5 degrees.
                                map.flyTo({
                                center: [106.82297983530182, -6.191883727739853],
                                zoom: 18,
                                essential: true // this animation is considered essential with respect to prefers-reduced-motion
                                });
                                });
                        }
                    });
                }
            );
        });