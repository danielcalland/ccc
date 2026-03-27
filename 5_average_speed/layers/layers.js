var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_5AverageSpeed_1 = new ol.format.GeoJSON();
var features_5AverageSpeed_1 = format_5AverageSpeed_1.readFeatures(json_5AverageSpeed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5AverageSpeed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5AverageSpeed_1.addFeatures(features_5AverageSpeed_1);
var lyr_5AverageSpeed_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5AverageSpeed_1, 
                style: style_5AverageSpeed_1,
                popuplayertitle: '5) Average Speed',
                interactive: true,
    title: '5) Average Speed<br />\
    <img src="styles/legend/5AverageSpeed_1_0.png" /> < 12<br />\
    <img src="styles/legend/5AverageSpeed_1_1.png" /> 12 - 14<br />\
    <img src="styles/legend/5AverageSpeed_1_2.png" /> 14 - 16<br />\
    <img src="styles/legend/5AverageSpeed_1_3.png" /> 16 - 18<br />\
    <img src="styles/legend/5AverageSpeed_1_4.png" /> 18 - 20<br />\
    <img src="styles/legend/5AverageSpeed_1_5.png" /> 20 - 22<br />\
    <img src="styles/legend/5AverageSpeed_1_6.png" /> 22 - 24<br />\
    <img src="styles/legend/5AverageSpeed_1_7.png" /> 24 - 26<br />\
    <img src="styles/legend/5AverageSpeed_1_8.png" /> 26 - 28<br />\
    <img src="styles/legend/5AverageSpeed_1_9.png" /> 28 - 30<br />\
    <img src="styles/legend/5AverageSpeed_1_10.png" /> 30 - 32<br />\
    <img src="styles/legend/5AverageSpeed_1_11.png" /> 32 - 34<br />\
    <img src="styles/legend/5AverageSpeed_1_12.png" /> 34 - 36<br />\
    <img src="styles/legend/5AverageSpeed_1_13.png" /> 36 - 38<br />\
    <img src="styles/legend/5AverageSpeed_1_14.png" /> 38 - 40<br />\
    <img src="styles/legend/5AverageSpeed_1_15.png" /> 40 - 42<br />\
    <img src="styles/legend/5AverageSpeed_1_16.png" /> 42 - 44<br />\
    <img src="styles/legend/5AverageSpeed_1_17.png" /> 44 - 46<br />\
    <img src="styles/legend/5AverageSpeed_1_18.png" /> 46 - 48<br />\
    <img src="styles/legend/5AverageSpeed_1_19.png" /> 48 - 50<br />\
    <img src="styles/legend/5AverageSpeed_1_20.png" /> > 50<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_5AverageSpeed_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_5AverageSpeed_1];
lyr_5AverageSpeed_1.set('fieldAliases', {'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current Operator': 'Current Operator', 'Station Line': 'Station Line', 'Peak Return Price': 'Peak Return Price', 'Fare Calculation': 'Fare Calculation', 'Primary Station': 'Primary Station', 'Primary Operator': 'Primary Operator', 'Primary Time': 'Primary Time', 'Secondary Station': 'Secondary Station', 'Secondary Operator': 'Secondary Operator', 'Secondary Time': 'Secondary Time', 'Tertiary Station': 'Tertiary Station', 'Tertiary Operator': 'Tertiary Operator', 'Tertiary Time': 'Tertiary Time', 'Fourth Station': 'Fourth Station', 'Fourth Operator': 'Fourth Operator', 'Fourth Time': 'Fourth Time', 'Fifth Station': 'Fifth Station', 'Fifth Operator': 'Fifth Operator', 'Fifth Time': 'Fifth Time', 'Sixth Station': 'Sixth Station', 'Sixth Operator': 'Sixth Operator', 'Sixth Time': 'Sixth Time', 'Seventh Station': 'Seventh Station', 'Seventh Operator': 'Seventh Operator', 'Seventh Time': 'Seventh Time', 'Eighth Station': 'Eighth Station', 'Eighth Operator': 'Eighth Operator', 'Eighth Time': 'Eighth Time', 'Ninth Station': 'Ninth Station', 'Ninth Operator': 'Ninth Operator', 'Ninth Time': 'Ninth Time', 'Tenth Station': 'Tenth Station', 'Tenth Operator': 'Tenth Operator', 'Tenth Time': 'Tenth Time', 'Total Station Count': 'Total Station Count', 'Price Per Minute': 'Price Per Minute', 'Latitude of Primary Station': 'Latitude of Primary Station', 'Longitude of Primary Station': 'Longitude of Primary Station', 'Distance to Primary Station (miles)': 'Distance to Primary Station (miles)', 'Price per mile': 'Price per mile', 'Average Speed (mph)': 'Average Speed (mph)', 'Likely in a Zone?': 'Likely in a Zone?', });
lyr_5AverageSpeed_1.set('fieldImages', {'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current Operator': 'TextEdit', 'Station Line': 'TextEdit', 'Peak Return Price': 'TextEdit', 'Fare Calculation': 'TextEdit', 'Primary Station': 'TextEdit', 'Primary Operator': 'TextEdit', 'Primary Time': 'Range', 'Secondary Station': 'TextEdit', 'Secondary Operator': 'TextEdit', 'Secondary Time': 'Range', 'Tertiary Station': 'TextEdit', 'Tertiary Operator': 'TextEdit', 'Tertiary Time': 'Range', 'Fourth Station': 'TextEdit', 'Fourth Operator': 'TextEdit', 'Fourth Time': 'Range', 'Fifth Station': 'TextEdit', 'Fifth Operator': 'TextEdit', 'Fifth Time': 'Range', 'Sixth Station': 'TextEdit', 'Sixth Operator': 'TextEdit', 'Sixth Time': 'Range', 'Seventh Station': 'TextEdit', 'Seventh Operator': 'TextEdit', 'Seventh Time': 'Range', 'Eighth Station': 'TextEdit', 'Eighth Operator': 'TextEdit', 'Eighth Time': 'Range', 'Ninth Station': 'TextEdit', 'Ninth Operator': 'TextEdit', 'Ninth Time': 'Range', 'Tenth Station': 'TextEdit', 'Tenth Operator': 'TextEdit', 'Tenth Time': 'Range', 'Total Station Count': 'Range', 'Price Per Minute': 'TextEdit', 'Latitude of Primary Station': 'TextEdit', 'Longitude of Primary Station': 'TextEdit', 'Distance to Primary Station (miles)': 'TextEdit', 'Price per mile': 'TextEdit', 'Average Speed (mph)': 'TextEdit', 'Likely in a Zone?': 'CheckBox', });
lyr_5AverageSpeed_1.set('fieldLabels', {'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current Operator': 'no label', 'Station Line': 'no label', 'Peak Return Price': 'no label', 'Fare Calculation': 'no label', 'Primary Station': 'no label', 'Primary Operator': 'no label', 'Primary Time': 'no label', 'Secondary Station': 'no label', 'Secondary Operator': 'no label', 'Secondary Time': 'no label', 'Tertiary Station': 'no label', 'Tertiary Operator': 'no label', 'Tertiary Time': 'no label', 'Fourth Station': 'no label', 'Fourth Operator': 'no label', 'Fourth Time': 'no label', 'Fifth Station': 'no label', 'Fifth Operator': 'no label', 'Fifth Time': 'no label', 'Sixth Station': 'no label', 'Sixth Operator': 'no label', 'Sixth Time': 'no label', 'Seventh Station': 'no label', 'Seventh Operator': 'no label', 'Seventh Time': 'no label', 'Eighth Station': 'no label', 'Eighth Operator': 'no label', 'Eighth Time': 'no label', 'Ninth Station': 'no label', 'Ninth Operator': 'no label', 'Ninth Time': 'no label', 'Tenth Station': 'no label', 'Tenth Operator': 'no label', 'Tenth Time': 'no label', 'Total Station Count': 'no label', 'Price Per Minute': 'no label', 'Latitude of Primary Station': 'no label', 'Longitude of Primary Station': 'no label', 'Distance to Primary Station (miles)': 'no label', 'Price per mile': 'no label', 'Average Speed (mph)': 'no label', 'Likely in a Zone?': 'no label', });
lyr_5AverageSpeed_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});