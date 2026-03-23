var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WaterlooEast_1 = new ol.format.GeoJSON();
var features_WaterlooEast_1 = format_WaterlooEast_1.readFeatures(json_WaterlooEast_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterlooEast_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterlooEast_1.addFeatures(features_WaterlooEast_1);
var lyr_WaterlooEast_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterlooEast_1, 
                style: style_WaterlooEast_1,
                popuplayertitle: 'Waterloo East',
                interactive: false,
    title: 'Waterloo East' });
var format_Waterloo_2 = new ol.format.GeoJSON();
var features_Waterloo_2 = format_Waterloo_2.readFeatures(json_Waterloo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterloo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterloo_2.addFeatures(features_Waterloo_2);
var lyr_Waterloo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterloo_2, 
                style: style_Waterloo_2,
                popuplayertitle: 'Waterloo',
                interactive: false,
    title: 'Waterloo' });
var format_Victoria_3 = new ol.format.GeoJSON();
var features_Victoria_3 = format_Victoria_3.readFeatures(json_Victoria_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Victoria_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Victoria_3.addFeatures(features_Victoria_3);
var lyr_Victoria_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Victoria_3, 
                style: style_Victoria_3,
                popuplayertitle: 'Victoria',
                interactive: false,
    title: 'Victoria' });
var format_TottenhamCourtRoad_4 = new ol.format.GeoJSON();
var features_TottenhamCourtRoad_4 = format_TottenhamCourtRoad_4.readFeatures(json_TottenhamCourtRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TottenhamCourtRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TottenhamCourtRoad_4.addFeatures(features_TottenhamCourtRoad_4);
var lyr_TottenhamCourtRoad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TottenhamCourtRoad_4, 
                style: style_TottenhamCourtRoad_4,
                popuplayertitle: 'Tottenham Court Road',
                interactive: false,
    title: 'Tottenham Court Road' });
var format_StPancras_5 = new ol.format.GeoJSON();
var features_StPancras_5 = format_StPancras_5.readFeatures(json_StPancras_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StPancras_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StPancras_5.addFeatures(features_StPancras_5);
var lyr_StPancras_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StPancras_5, 
                style: style_StPancras_5,
                popuplayertitle: 'St Pancras',
                interactive: false,
    title: 'St Pancras' });
var format_Paddington_6 = new ol.format.GeoJSON();
var features_Paddington_6 = format_Paddington_6.readFeatures(json_Paddington_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paddington_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paddington_6.addFeatures(features_Paddington_6);
var lyr_Paddington_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paddington_6, 
                style: style_Paddington_6,
                popuplayertitle: 'Paddington',
                interactive: false,
    title: 'Paddington' });
var format_Moorgate_7 = new ol.format.GeoJSON();
var features_Moorgate_7 = format_Moorgate_7.readFeatures(json_Moorgate_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moorgate_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moorgate_7.addFeatures(features_Moorgate_7);
var lyr_Moorgate_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moorgate_7, 
                style: style_Moorgate_7,
                popuplayertitle: 'Moorgate',
                interactive: false,
    title: 'Moorgate' });
var format_Marylebone_8 = new ol.format.GeoJSON();
var features_Marylebone_8 = format_Marylebone_8.readFeatures(json_Marylebone_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marylebone_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marylebone_8.addFeatures(features_Marylebone_8);
var lyr_Marylebone_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marylebone_8, 
                style: style_Marylebone_8,
                popuplayertitle: 'Marylebone',
                interactive: false,
    title: 'Marylebone' });
var format_LondonBridge_9 = new ol.format.GeoJSON();
var features_LondonBridge_9 = format_LondonBridge_9.readFeatures(json_LondonBridge_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LondonBridge_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LondonBridge_9.addFeatures(features_LondonBridge_9);
var lyr_LondonBridge_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LondonBridge_9, 
                style: style_LondonBridge_9,
                popuplayertitle: 'London Bridge',
                interactive: false,
    title: 'London Bridge' });
var format_LiverpoolStreet_10 = new ol.format.GeoJSON();
var features_LiverpoolStreet_10 = format_LiverpoolStreet_10.readFeatures(json_LiverpoolStreet_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LiverpoolStreet_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LiverpoolStreet_10.addFeatures(features_LiverpoolStreet_10);
var lyr_LiverpoolStreet_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LiverpoolStreet_10, 
                style: style_LiverpoolStreet_10,
                popuplayertitle: 'Liverpool Street',
                interactive: false,
    title: 'Liverpool Street' });
var format_KingsCross_11 = new ol.format.GeoJSON();
var features_KingsCross_11 = format_KingsCross_11.readFeatures(json_KingsCross_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KingsCross_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KingsCross_11.addFeatures(features_KingsCross_11);
var lyr_KingsCross_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KingsCross_11, 
                style: style_KingsCross_11,
                popuplayertitle: 'King\'s Cross',
                interactive: false,
    title: 'King\'s Cross' });
var format_FenchurchStreet_12 = new ol.format.GeoJSON();
var features_FenchurchStreet_12 = format_FenchurchStreet_12.readFeatures(json_FenchurchStreet_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FenchurchStreet_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FenchurchStreet_12.addFeatures(features_FenchurchStreet_12);
var lyr_FenchurchStreet_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FenchurchStreet_12, 
                style: style_FenchurchStreet_12,
                popuplayertitle: 'Fenchurch Street',
                interactive: false,
    title: 'Fenchurch Street' });
var format_Farringdon_13 = new ol.format.GeoJSON();
var features_Farringdon_13 = format_Farringdon_13.readFeatures(json_Farringdon_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Farringdon_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farringdon_13.addFeatures(features_Farringdon_13);
var lyr_Farringdon_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Farringdon_13, 
                style: style_Farringdon_13,
                popuplayertitle: 'Farringdon',
                interactive: false,
    title: 'Farringdon' });
var format_Euston_14 = new ol.format.GeoJSON();
var features_Euston_14 = format_Euston_14.readFeatures(json_Euston_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Euston_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Euston_14.addFeatures(features_Euston_14);
var lyr_Euston_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Euston_14, 
                style: style_Euston_14,
                popuplayertitle: 'Euston',
                interactive: false,
    title: 'Euston' });
var format_CityThameslink_15 = new ol.format.GeoJSON();
var features_CityThameslink_15 = format_CityThameslink_15.readFeatures(json_CityThameslink_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityThameslink_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityThameslink_15.addFeatures(features_CityThameslink_15);
var lyr_CityThameslink_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityThameslink_15, 
                style: style_CityThameslink_15,
                popuplayertitle: 'City Thameslink',
                interactive: false,
    title: 'City Thameslink' });
var format_CharingCross_16 = new ol.format.GeoJSON();
var features_CharingCross_16 = format_CharingCross_16.readFeatures(json_CharingCross_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharingCross_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharingCross_16.addFeatures(features_CharingCross_16);
var lyr_CharingCross_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharingCross_16, 
                style: style_CharingCross_16,
                popuplayertitle: 'Charing Cross',
                interactive: false,
    title: 'Charing Cross' });
var format_CannonStreet_17 = new ol.format.GeoJSON();
var features_CannonStreet_17 = format_CannonStreet_17.readFeatures(json_CannonStreet_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CannonStreet_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CannonStreet_17.addFeatures(features_CannonStreet_17);
var lyr_CannonStreet_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CannonStreet_17, 
                style: style_CannonStreet_17,
                popuplayertitle: 'Cannon Street',
                interactive: false,
    title: 'Cannon Street' });
var format_BondStreet_18 = new ol.format.GeoJSON();
var features_BondStreet_18 = format_BondStreet_18.readFeatures(json_BondStreet_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BondStreet_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BondStreet_18.addFeatures(features_BondStreet_18);
var lyr_BondStreet_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BondStreet_18, 
                style: style_BondStreet_18,
                popuplayertitle: 'Bond Street',
                interactive: false,
    title: 'Bond Street' });
var format_Blackfriars_19 = new ol.format.GeoJSON();
var features_Blackfriars_19 = format_Blackfriars_19.readFeatures(json_Blackfriars_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blackfriars_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blackfriars_19.addFeatures(features_Blackfriars_19);
var lyr_Blackfriars_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blackfriars_19, 
                style: style_Blackfriars_19,
                popuplayertitle: 'Blackfriars',
                interactive: false,
    title: 'Blackfriars' });

lyr_OpenStreetMap_0.setVisible(true);lyr_WaterlooEast_1.setVisible(true);lyr_Waterloo_2.setVisible(true);lyr_Victoria_3.setVisible(true);lyr_TottenhamCourtRoad_4.setVisible(true);lyr_StPancras_5.setVisible(true);lyr_Paddington_6.setVisible(true);lyr_Moorgate_7.setVisible(true);lyr_Marylebone_8.setVisible(true);lyr_LondonBridge_9.setVisible(true);lyr_LiverpoolStreet_10.setVisible(true);lyr_KingsCross_11.setVisible(true);lyr_FenchurchStreet_12.setVisible(true);lyr_Farringdon_13.setVisible(true);lyr_Euston_14.setVisible(true);lyr_CityThameslink_15.setVisible(true);lyr_CharingCross_16.setVisible(true);lyr_CannonStreet_17.setVisible(true);lyr_BondStreet_18.setVisible(true);lyr_Blackfriars_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WaterlooEast_1,lyr_Waterloo_2,lyr_Victoria_3,lyr_TottenhamCourtRoad_4,lyr_StPancras_5,lyr_Paddington_6,lyr_Moorgate_7,lyr_Marylebone_8,lyr_LondonBridge_9,lyr_LiverpoolStreet_10,lyr_KingsCross_11,lyr_FenchurchStreet_12,lyr_Farringdon_13,lyr_Euston_14,lyr_CityThameslink_15,lyr_CharingCross_16,lyr_CannonStreet_17,lyr_BondStreet_18,lyr_Blackfriars_19];
lyr_WaterlooEast_1.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Waterloo_2.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Victoria_3.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_TottenhamCourtRoad_4.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_StPancras_5.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Paddington_6.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Moorgate_7.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Marylebone_8.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_LondonBridge_9.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_LiverpoolStreet_10.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_KingsCross_11.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_FenchurchStreet_12.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Farringdon_13.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Euston_14.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_CityThameslink_15.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_CharingCross_16.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_CannonStreet_17.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_BondStreet_18.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_Blackfriars_19.set('fieldAliases', {'Station.Name': 'Station.Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'Current.Operator': 'Current.Operator', 'Station.Line': 'Station.Line', 'Peak.Return.Price': 'Peak.Return.Price', 'Fare.Calculation': 'Fare.Calculation', 'Total.Station.Count': 'Total.Station.Count', 'Price.Per.Minute': 'Price.Per.Minute', 'Latitude.of.Primary.Station': 'Latitude.of.Primary.Station', 'Longitude.of.Primary.Station': 'Longitude.of.Primary.Station', 'Distance.to.Primary.Station..miles.': 'Distance.to.Primary.Station..miles.', 'Price.per.mile': 'Price.per.mile', 'Average.Speed..mph.': 'Average.Speed..mph.', 'Likely.in.a.Zone.': 'Likely.in.a.Zone.', 'Station': 'Station', 'Operator': 'Operator', 'Time': 'Time', 'Rank': 'Rank', });
lyr_WaterlooEast_1.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Waterloo_2.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Victoria_3.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_TottenhamCourtRoad_4.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_StPancras_5.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Paddington_6.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Moorgate_7.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Marylebone_8.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_LondonBridge_9.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_LiverpoolStreet_10.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_KingsCross_11.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_FenchurchStreet_12.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Farringdon_13.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Euston_14.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_CityThameslink_15.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_CharingCross_16.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_CannonStreet_17.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_BondStreet_18.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_Blackfriars_19.set('fieldImages', {'Station.Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'Current.Operator': 'TextEdit', 'Station.Line': 'TextEdit', 'Peak.Return.Price': 'TextEdit', 'Fare.Calculation': 'TextEdit', 'Total.Station.Count': 'Range', 'Price.Per.Minute': 'TextEdit', 'Latitude.of.Primary.Station': 'TextEdit', 'Longitude.of.Primary.Station': 'TextEdit', 'Distance.to.Primary.Station..miles.': 'TextEdit', 'Price.per.mile': 'TextEdit', 'Average.Speed..mph.': 'TextEdit', 'Likely.in.a.Zone.': 'CheckBox', 'Station': 'TextEdit', 'Operator': 'TextEdit', 'Time': 'Range', 'Rank': 'Range', });
lyr_WaterlooEast_1.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Waterloo_2.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Victoria_3.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_TottenhamCourtRoad_4.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_StPancras_5.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Paddington_6.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Moorgate_7.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Marylebone_8.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_LondonBridge_9.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_LiverpoolStreet_10.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_KingsCross_11.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_FenchurchStreet_12.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Farringdon_13.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Euston_14.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_CityThameslink_15.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_CharingCross_16.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_CannonStreet_17.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_BondStreet_18.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Blackfriars_19.set('fieldLabels', {'Station.Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Code': 'no label', 'Current.Operator': 'no label', 'Station.Line': 'no label', 'Peak.Return.Price': 'no label', 'Fare.Calculation': 'no label', 'Total.Station.Count': 'no label', 'Price.Per.Minute': 'no label', 'Latitude.of.Primary.Station': 'no label', 'Longitude.of.Primary.Station': 'no label', 'Distance.to.Primary.Station..miles.': 'no label', 'Price.per.mile': 'no label', 'Average.Speed..mph.': 'no label', 'Likely.in.a.Zone.': 'no label', 'Station': 'no label', 'Operator': 'no label', 'Time': 'no label', 'Rank': 'no label', });
lyr_Blackfriars_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});