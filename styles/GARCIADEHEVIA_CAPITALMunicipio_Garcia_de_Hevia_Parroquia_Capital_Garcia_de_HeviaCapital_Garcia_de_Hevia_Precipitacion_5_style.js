var size = 0;
var placement = 'point';
function categories_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Precipitacion_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '1800 - 2200':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(223,29,123,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '2200 - 2600':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(225,225,40,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '2600 - 3000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(26,219,123,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Precipitacion_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("rango");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Precipitacion_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
