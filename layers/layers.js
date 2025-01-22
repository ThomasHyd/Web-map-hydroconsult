ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-7612118.408774, -7333372.857064, -7591925.124638, -7322404.269313]);
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
var format_Locations_1 = new ol.format.GeoJSON();
var features_Locations_1 = format_Locations_1.readFeatures(json_Locations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locations_1.addFeatures(features_Locations_1);
cluster_Locations_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Locations_1
});
var lyr_Locations_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Locations_1, 
                style: style_Locations_1,
                popuplayertitle: 'Locations',
                interactive: true,
                title: '<img src="styles/legend/Locations_1.png" /> Locations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Locations_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Locations_1];
lyr_Locations_1.set('fieldAliases', {'id': 'id', 'URL': 'URL', 'Client': 'Client', 'Data_Type': 'Data_Type', });
lyr_Locations_1.set('fieldImages', {'id': '', 'URL': '', 'Client': '', 'Data_Type': '', });
lyr_Locations_1.set('fieldLabels', {'id': 'inline label - always visible', 'URL': 'inline label - visible with data', 'Client': 'header label - always visible', 'Data_Type': 'header label - visible with data', });
lyr_Locations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});