var size = 0;
var placement = 'point';
function categories_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Temperatura_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '34':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(63,200,17,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Temperatura_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("temperatur");
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
    
var style = categories_GARCIADEHEVIA_CAPITALMunicipio_Garcia_de_Hevia_Parroquia_Capital_Garcia_de_HeviaCapital_Garcia_de_Hevia_Temperatura_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
