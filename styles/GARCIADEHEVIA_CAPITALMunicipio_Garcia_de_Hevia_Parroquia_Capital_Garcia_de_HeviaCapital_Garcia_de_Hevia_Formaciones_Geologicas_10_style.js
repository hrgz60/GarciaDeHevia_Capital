var size = 0;
var placement = 'point';
function categories_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Formaciones_Geologicas_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Formación Carvajal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(89,100,206,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Grupo Guayabo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(203,185,51,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Llanura Aluvial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(116,236,162,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Formaciones_Geologicas_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("nombre");
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
    
var style = categories_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Formaciones_Geologicas_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
