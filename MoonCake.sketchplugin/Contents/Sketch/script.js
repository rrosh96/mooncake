        
          
          
          var onRun = function(context) {
          console.log('This is an example Sketch script.')

var sketch = require('sketch')

var Artboard = sketch.Artboard

var document = sketch.getSelectedDocument()
var page = document.selectedPage;
// var selectedLayers = document.selectedLayers
// var selectedCount = selectedLayers.length
// 
// if (selectedCount === 0) {
//   console.log('No layers are selected.')
// } else {
//   console.log('Selected layers:');
//   selectedLayers.forEach(function (layer, i) {
//     console.log((i + 1) + '. ' + layer.name)
//   })
// }

// Get details of the selected Artboard including all the layers. 
// 
var selectedLayers = document.selectedLayers;

var selectedCount = selectedLayers.length
// 
var selectedArtBoardName;
var selectedArtBoardFrame;
var layerstoAdd =[];
if (selectedCount === 0) {
  console.log('No layers are selected.')
} else {
    selectedLayers.forEach(function(layer){
    selectedArtBoardFrame = layer.frame;
    selectedArtBoardName = layer.name;
    console.log('frame', layer.frame);
//       console,log(layer);
      var layerInArtboard = layer.layers;
//       console.log(layerInArtboard);
      layerInArtboard.forEach(function(eachLayer){
        var dup = eachLayer.duplicate();
        layerstoAdd.push(dup);
      })      
    })
}
//Find a new name for the ArtBoard

function findNumber(name){
    return name.replace( /^\D+/g, '')
}


function findString(name){
    return name.replace(/\d+/g,'');
}

var extractedNumber = findNumber(selectedArtBoardName);
var newNumber = extractedNumber ? parseInt(extractedNumber) + 1: 1;
var newName = findString(selectedArtBoardName) + newNumber;



// 
//Create new artboard and copy all the parameters
var myArtboard = new Artboard();
myArtboard.parent = page;
myArtboard.name = newName;
myArtboard.frame = selectedArtBoardFrame;
myArtboard.frame.y = selectedArtBoardFrame.y + selectedArtBoardFrame.height + 200;
myArtboard.layers = layerstoAdd;
console.log(myArtboard.layers);
// sketch.UI.message("Hello")



          };
          