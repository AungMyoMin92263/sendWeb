import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

const AnyReactComponent = ({ name }) => <div>
  <RoomIcon sx={{ color: '#E39435', fontSize: 32, mt: 2 }}></RoomIcon>
  {/* <span>{ name }</span> */}
</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.3332004564470388,
      lng: 103.72735103367414
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '337px', width: '527px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAsmFfXckn6Y7Lyw1kfVcxyNuj2BfsPy6g' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={1.338959436038321}
            lng={103.7271746627883}
            name="Lakeside Garden"
          />
          <AnyReactComponent
            lat={1.3489707722226756}
            lng={103.71224456414716}
            name="Boon Lay Place Market and Food Village"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;