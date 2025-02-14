var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvincialBoundary_1 = new ol.format.GeoJSON();
var features_ProvincialBoundary_1 = format_ProvincialBoundary_1.readFeatures(json_ProvincialBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvincialBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvincialBoundary_1.addFeatures(features_ProvincialBoundary_1);
var lyr_ProvincialBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvincialBoundary_1, 
                style: style_ProvincialBoundary_1,
                popuplayertitle: "Provincial Boundary ",
                interactive: true,
                title: '<img src="styles/legend/ProvincialBoundary_1.png" /> Provincial Boundary '
            });
var format_MajorTowns_2 = new ol.format.GeoJSON();
var features_MajorTowns_2 = format_MajorTowns_2.readFeatures(json_MajorTowns_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorTowns_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorTowns_2.addFeatures(features_MajorTowns_2);
var lyr_MajorTowns_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorTowns_2, 
                style: style_MajorTowns_2,
                popuplayertitle: "Major Towns",
                interactive: true,
                title: '<img src="styles/legend/MajorTowns_2.png" /> Major Towns'
            });
var format_PoliceStation_3 = new ol.format.GeoJSON();
var features_PoliceStation_3 = format_PoliceStation_3.readFeatures(json_PoliceStation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoliceStation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoliceStation_3.addFeatures(features_PoliceStation_3);
var lyr_PoliceStation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoliceStation_3, 
                style: style_PoliceStation_3,
                popuplayertitle: "Police Station ",
                interactive: true,
                title: '<img src="styles/legend/PoliceStation_3.png" /> Police Station '
            });
var format_SecondarySchool_4 = new ol.format.GeoJSON();
var features_SecondarySchool_4 = format_SecondarySchool_4.readFeatures(json_SecondarySchool_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecondarySchool_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecondarySchool_4.addFeatures(features_SecondarySchool_4);
var lyr_SecondarySchool_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecondarySchool_4, 
                style: style_SecondarySchool_4,
                popuplayertitle: "Secondary School",
                interactive: true,
                title: '<img src="styles/legend/SecondarySchool_4.png" /> Secondary School'
            });
var format_PrimarySchool_5 = new ol.format.GeoJSON();
var features_PrimarySchool_5 = format_PrimarySchool_5.readFeatures(json_PrimarySchool_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimarySchool_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimarySchool_5.addFeatures(features_PrimarySchool_5);
var lyr_PrimarySchool_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimarySchool_5, 
                style: style_PrimarySchool_5,
                popuplayertitle: "Primary School",
                interactive: true,
                title: '<img src="styles/legend/PrimarySchool_5.png" /> Primary School'
            });
var format_Mountains_6 = new ol.format.GeoJSON();
var features_Mountains_6 = format_Mountains_6.readFeatures(json_Mountains_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mountains_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mountains_6.addFeatures(features_Mountains_6);
var lyr_Mountains_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mountains_6, 
                style: style_Mountains_6,
                popuplayertitle: "Mountains",
                interactive: true,
                title: '<img src="styles/legend/Mountains_6.png" /> Mountains'
            });
var format_AidPosts_7 = new ol.format.GeoJSON();
var features_AidPosts_7 = format_AidPosts_7.readFeatures(json_AidPosts_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AidPosts_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AidPosts_7.addFeatures(features_AidPosts_7);
var lyr_AidPosts_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AidPosts_7, 
                style: style_AidPosts_7,
                popuplayertitle: "Aid Posts",
                interactive: true,
                title: '<img src="styles/legend/AidPosts_7.png" /> Aid Posts'
            });
var format_HealthCenter_8 = new ol.format.GeoJSON();
var features_HealthCenter_8 = format_HealthCenter_8.readFeatures(json_HealthCenter_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthCenter_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthCenter_8.addFeatures(features_HealthCenter_8);
var lyr_HealthCenter_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthCenter_8, 
                style: style_HealthCenter_8,
                popuplayertitle: "Health Center",
                interactive: true,
                title: '<img src="styles/legend/HealthCenter_8.png" /> Health Center'
            });
var format_Village_9 = new ol.format.GeoJSON();
var features_Village_9 = format_Village_9.readFeatures(json_Village_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_9.addFeatures(features_Village_9);
var lyr_Village_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_9, 
                style: style_Village_9,
                popuplayertitle: "Village",
                interactive: true,
                title: '<img src="styles/legend/Village_9.png" /> Village'
            });
var format_River_10 = new ol.format.GeoJSON();
var features_River_10 = format_River_10.readFeatures(json_River_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_10.addFeatures(features_River_10);
var lyr_River_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_10, 
                style: style_River_10,
                popuplayertitle: "River",
                interactive: true,
                title: '<img src="styles/legend/River_10.png" /> River'
            });
var format_Road_11 = new ol.format.GeoJSON();
var features_Road_11 = format_Road_11.readFeatures(json_Road_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_11.addFeatures(features_Road_11);
var lyr_Road_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_11, 
                style: style_Road_11,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_11.png" /> Road'
            });
var format_Track_12 = new ol.format.GeoJSON();
var features_Track_12 = format_Track_12.readFeatures(json_Track_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_12.addFeatures(features_Track_12);
var lyr_Track_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_12, 
                style: style_Track_12,
                popuplayertitle: "Track",
                interactive: true,
                title: '<img src="styles/legend/Track_12.png" /> Track'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ProvincialBoundary_1.setVisible(true);lyr_MajorTowns_2.setVisible(true);lyr_PoliceStation_3.setVisible(true);lyr_SecondarySchool_4.setVisible(true);lyr_PrimarySchool_5.setVisible(true);lyr_Mountains_6.setVisible(true);lyr_AidPosts_7.setVisible(true);lyr_HealthCenter_8.setVisible(true);lyr_Village_9.setVisible(true);lyr_River_10.setVisible(true);lyr_Road_11.setVisible(true);lyr_Track_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvincialBoundary_1,lyr_MajorTowns_2,lyr_PoliceStation_3,lyr_SecondarySchool_4,lyr_PrimarySchool_5,lyr_Mountains_6,lyr_AidPosts_7,lyr_HealthCenter_8,lyr_Village_9,lyr_River_10,lyr_Road_11,lyr_Track_12];
lyr_ProvincialBoundary_1.set('fieldAliases', {'NAME': 'NAME', 'UNIQUE_ID': 'UNIQUE_ID', 'AREA_SQKM': 'AREA_SQKM', 'TOTAL_POP': 'TOTAL_POP', 'TOT_MALE': 'TOT_MALE', 'TOT_FEMALE': 'TOT_FEMALE', 'DENSITY': 'DENSITY', });
lyr_MajorTowns_2.set('fieldAliases', {'MAJOR_TOWN': 'MAJOR_TOWN', });
lyr_PoliceStation_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'POLICE_CEL': 'POLICE_CEL', 'NO_HOUSES': 'NO_HOUSES', 'VEHICLES': 'VEHICLES', });
lyr_SecondarySchool_4.set('fieldAliases', {'NAME': 'NAME', 'CODE': 'CODE', 'GEOCODE': 'GEOCODE', 'DISTRICT': 'DISTRICT', 'LLG': 'LLG', 'CTRL_AGENC': 'CTRL_AGENC', 'TYPE': 'TYPE', 'STATUS': 'STATUS', });
lyr_PrimarySchool_5.set('fieldAliases', {'NAME': 'NAME', 'CODE': 'CODE', 'GEOCODE': 'GEOCODE', 'DISTRICT': 'DISTRICT', 'LLG': 'LLG', 'CTRL_AGENC': 'CTRL_AGENC', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'ELM_STATUS': 'ELM_STATUS', });
lyr_Mountains_6.set('fieldAliases', {'NAME': 'NAME', });
lyr_AidPosts_7.set('fieldAliases', {'NAME': 'NAME', 'SUP_CENTRE': 'SUP_CENTRE', 'ADMIN_DIST': 'ADMIN_DIST', 'POLIT_DIST': 'POLIT_DIST', 'STAFF_M_08': 'STAFF_M_08', 'STAFF_F_08': 'STAFF_F_08', 'STATUS': 'STATUS', });
lyr_HealthCenter_8.set('fieldAliases', {'HFCODE': 'HFCODE', 'HCDESC': 'HCDESC', 'TYPE': 'TYPE', 'AGENCY': 'AGENCY', 'LAT': 'LAT', 'LONG': 'LONG', 'NOTES': 'NOTES', 'STATUS': 'STATUS', });
lyr_Village_9.set('fieldAliases', {'NAME': 'NAME', });
lyr_River_10.set('fieldAliases', {'ID': 'ID', });
lyr_Road_11.set('fieldAliases', {'NAME': 'NAME', 'SECTION_ID': 'SECTION_ID', 'TYPE': 'TYPE', 'SURFACE': 'SURFACE', 'CONDITION': 'CONDITION', 'GRAVEL_DEF': 'GRAVEL_DEF', 'ANNU_RAIN': 'ANNU_RAIN', 'HOUR_RAIN': 'HOUR_RAIN', 'WET_SEASON': 'WET_SEASON', 'TRAFFIC_PK': 'TRAFFIC_PK', 'LENGTH_KM': 'LENGTH_KM', 'ASSUMED_AA': 'ASSUMED_AA', 'DATE_COUNT': 'DATE_COUNT', 'IRI': 'IRI', 'SEV_DAMAGE': 'SEV_DAMAGE', 'CORRUGAT': 'CORRUGAT', 'LOSS_GRAV': 'LOSS_GRAV', 'SURF_DEFEC': 'SURF_DEFEC', 'EDGE_DAMAG': 'EDGE_DAMAG', 'TG_UN_CST': 'TG_UN_CST', 'TG_TOT_CST': 'TG_TOT_CST', 'CD_UN_CST': 'CD_UN_CST', 'CD_TOT_CST': 'CD_TOT_CST', 'CM_UN_CST': 'CM_UN_CST', 'CM_TOT_CST': 'CM_TOT_CST', 'RF_UN_CST': 'RF_UN_CST', 'RF_TOT_CST': 'RF_TOT_CST', 'VC_UN_CST': 'VC_UN_CST', 'VC_TOT_CST': 'VC_TOT_CST', 'SD_UN_CST': 'SD_UN_CST', 'SD_TOT_CST': 'SD_TOT_CST', 'PA_UN_CST': 'PA_UN_CST', 'PA_TOT_CST': 'PA_TOT_CST', 'GR_UN_CST': 'GR_UN_CST', 'GR_TOT_CST': 'GR_TOT_CST', 'RE_UN_CST': 'RE_UN_CST', 'RE_TOT_CST': 'RE_TOT_CST', 'US_UN_CST': 'US_UN_CST', 'US_TOT_CST': 'US_TOT_CST', 'CG_UN_CST': 'CG_UN_CST', 'CG_TOT_CST': 'CG_TOT_CST', 'PR_UN_CST': 'PR_UN_CST', 'PR_TOT_CST': 'PR_TOT_CST', 'RP_UN_CST': 'RP_UN_CST', 'RP_TOT_CST': 'RP_TOT_CST', 'RH_UN_CST': 'RH_UN_CST', 'RH_TOT_CST': 'RH_TOT_CST', 'TMU_COST': 'TMU_COST', });
lyr_Track_12.set('fieldAliases', {'LENGTH_KM': 'LENGTH_KM', });
lyr_ProvincialBoundary_1.set('fieldImages', {'NAME': 'TextEdit', 'UNIQUE_ID': 'TextEdit', 'AREA_SQKM': 'TextEdit', 'TOTAL_POP': 'Range', 'TOT_MALE': 'Range', 'TOT_FEMALE': 'Range', 'DENSITY': 'TextEdit', });
lyr_MajorTowns_2.set('fieldImages', {'MAJOR_TOWN': 'TextEdit', });
lyr_PoliceStation_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'POLICE_CEL': 'TextEdit', 'NO_HOUSES': 'TextEdit', 'VEHICLES': 'TextEdit', });
lyr_SecondarySchool_4.set('fieldImages', {'NAME': 'TextEdit', 'CODE': 'TextEdit', 'GEOCODE': 'TextEdit', 'DISTRICT': 'TextEdit', 'LLG': 'TextEdit', 'CTRL_AGENC': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_PrimarySchool_5.set('fieldImages', {'NAME': 'TextEdit', 'CODE': 'TextEdit', 'GEOCODE': 'TextEdit', 'DISTRICT': 'TextEdit', 'LLG': 'TextEdit', 'CTRL_AGENC': 'TextEdit', 'LEVEL': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'ELM_STATUS': 'TextEdit', });
lyr_Mountains_6.set('fieldImages', {'NAME': 'TextEdit', });
lyr_AidPosts_7.set('fieldImages', {'NAME': 'TextEdit', 'SUP_CENTRE': 'TextEdit', 'ADMIN_DIST': 'TextEdit', 'POLIT_DIST': 'TextEdit', 'STAFF_M_08': 'TextEdit', 'STAFF_F_08': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_HealthCenter_8.set('fieldImages', {'HFCODE': 'TextEdit', 'HCDESC': 'TextEdit', 'TYPE': 'TextEdit', 'AGENCY': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'NOTES': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_Village_9.set('fieldImages', {'NAME': 'TextEdit', });
lyr_River_10.set('fieldImages', {'ID': 'TextEdit', });
lyr_Road_11.set('fieldImages', {'NAME': 'TextEdit', 'SECTION_ID': 'TextEdit', 'TYPE': 'TextEdit', 'SURFACE': 'TextEdit', 'CONDITION': 'TextEdit', 'GRAVEL_DEF': 'TextEdit', 'ANNU_RAIN': 'TextEdit', 'HOUR_RAIN': 'TextEdit', 'WET_SEASON': 'TextEdit', 'TRAFFIC_PK': 'Range', 'LENGTH_KM': 'TextEdit', 'ASSUMED_AA': 'Range', 'DATE_COUNT': 'TextEdit', 'IRI': 'TextEdit', 'SEV_DAMAGE': 'TextEdit', 'CORRUGAT': 'TextEdit', 'LOSS_GRAV': 'TextEdit', 'SURF_DEFEC': 'TextEdit', 'EDGE_DAMAG': 'TextEdit', 'TG_UN_CST': 'TextEdit', 'TG_TOT_CST': 'TextEdit', 'CD_UN_CST': 'TextEdit', 'CD_TOT_CST': 'TextEdit', 'CM_UN_CST': 'TextEdit', 'CM_TOT_CST': 'TextEdit', 'RF_UN_CST': 'TextEdit', 'RF_TOT_CST': 'TextEdit', 'VC_UN_CST': 'TextEdit', 'VC_TOT_CST': 'TextEdit', 'SD_UN_CST': 'TextEdit', 'SD_TOT_CST': 'TextEdit', 'PA_UN_CST': 'TextEdit', 'PA_TOT_CST': 'TextEdit', 'GR_UN_CST': 'TextEdit', 'GR_TOT_CST': 'TextEdit', 'RE_UN_CST': 'TextEdit', 'RE_TOT_CST': 'TextEdit', 'US_UN_CST': 'TextEdit', 'US_TOT_CST': 'TextEdit', 'CG_UN_CST': 'TextEdit', 'CG_TOT_CST': 'TextEdit', 'PR_UN_CST': 'TextEdit', 'PR_TOT_CST': 'TextEdit', 'RP_UN_CST': 'TextEdit', 'RP_TOT_CST': 'TextEdit', 'RH_UN_CST': 'TextEdit', 'RH_TOT_CST': 'TextEdit', 'TMU_COST': 'TextEdit', });
lyr_Track_12.set('fieldImages', {'LENGTH_KM': 'TextEdit', });
lyr_ProvincialBoundary_1.set('fieldLabels', {'NAME': 'no label', 'UNIQUE_ID': 'no label', 'AREA_SQKM': 'no label', 'TOTAL_POP': 'no label', 'TOT_MALE': 'no label', 'TOT_FEMALE': 'no label', 'DENSITY': 'no label', });
lyr_MajorTowns_2.set('fieldLabels', {'MAJOR_TOWN': 'inline label - visible with data', });
lyr_PoliceStation_3.set('fieldLabels', {'NAME': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'POLICE_CEL': 'inline label - visible with data', 'NO_HOUSES': 'inline label - visible with data', 'VEHICLES': 'inline label - visible with data', });
lyr_SecondarySchool_4.set('fieldLabels', {'NAME': 'no label', 'CODE': 'no label', 'GEOCODE': 'no label', 'DISTRICT': 'inline label - visible with data', 'LLG': 'inline label - visible with data', 'CTRL_AGENC': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_PrimarySchool_5.set('fieldLabels', {'NAME': 'no label', 'CODE': 'no label', 'GEOCODE': 'no label', 'DISTRICT': 'inline label - visible with data', 'LLG': 'inline label - visible with data', 'CTRL_AGENC': 'inline label - visible with data', 'LEVEL': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'ELM_STATUS': 'inline label - visible with data', });
lyr_Mountains_6.set('fieldLabels', {'NAME': 'inline label - visible with data', });
lyr_AidPosts_7.set('fieldLabels', {'NAME': 'inline label - visible with data', 'SUP_CENTRE': 'inline label - visible with data', 'ADMIN_DIST': 'inline label - visible with data', 'POLIT_DIST': 'inline label - visible with data', 'STAFF_M_08': 'inline label - visible with data', 'STAFF_F_08': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_HealthCenter_8.set('fieldLabels', {'HFCODE': 'inline label - visible with data', 'HCDESC': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'AGENCY': 'inline label - visible with data', 'LAT': 'inline label - visible with data', 'LONG': 'inline label - visible with data', 'NOTES': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_Village_9.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_River_10.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_Road_11.set('fieldLabels', {'NAME': 'no label', 'SECTION_ID': 'no label', 'TYPE': 'no label', 'SURFACE': 'no label', 'CONDITION': 'no label', 'GRAVEL_DEF': 'no label', 'ANNU_RAIN': 'no label', 'HOUR_RAIN': 'no label', 'WET_SEASON': 'no label', 'TRAFFIC_PK': 'no label', 'LENGTH_KM': 'no label', 'ASSUMED_AA': 'no label', 'DATE_COUNT': 'no label', 'IRI': 'no label', 'SEV_DAMAGE': 'no label', 'CORRUGAT': 'no label', 'LOSS_GRAV': 'no label', 'SURF_DEFEC': 'no label', 'EDGE_DAMAG': 'no label', 'TG_UN_CST': 'no label', 'TG_TOT_CST': 'no label', 'CD_UN_CST': 'no label', 'CD_TOT_CST': 'no label', 'CM_UN_CST': 'no label', 'CM_TOT_CST': 'no label', 'RF_UN_CST': 'no label', 'RF_TOT_CST': 'no label', 'VC_UN_CST': 'no label', 'VC_TOT_CST': 'no label', 'SD_UN_CST': 'no label', 'SD_TOT_CST': 'no label', 'PA_UN_CST': 'no label', 'PA_TOT_CST': 'no label', 'GR_UN_CST': 'no label', 'GR_TOT_CST': 'no label', 'RE_UN_CST': 'no label', 'RE_TOT_CST': 'no label', 'US_UN_CST': 'no label', 'US_TOT_CST': 'no label', 'CG_UN_CST': 'no label', 'CG_TOT_CST': 'no label', 'PR_UN_CST': 'no label', 'PR_TOT_CST': 'no label', 'RP_UN_CST': 'no label', 'RP_TOT_CST': 'no label', 'RH_UN_CST': 'no label', 'RH_TOT_CST': 'no label', 'TMU_COST': 'no label', });
lyr_Track_12.set('fieldLabels', {'LENGTH_KM': 'inline label - always visible', });
lyr_Track_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});