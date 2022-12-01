const mapHeight = { height: 'calc(100vh - 56px)' };

const tileLayers = [
 {
    id: 1,
    name: 'Predeterminado',
    attribution: '&copy; Google',
    url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    checked: true
  },
  {
    id: 2,
    name: 'Satélite',
    attribution: '&copy; Google',
    url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    checked: false
  }
];

const tectonicPlatesStyle = {
  color: 'magenta',
  weight: 3
};

const fallasStyle = {
  color: 'blue',
  weight: 1
};
export { mapHeight, tileLayers, tectonicPlatesStyle, fallasStyle};
