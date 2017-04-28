import React, { Component } from 'react';

export default class extends Component {
  // Wrapper should render only once
  shouldComponentUpdate() {
    return false;
  }
  // Receive new lat and lng from the parent component (App)
  // migrate from one set of props to next set of props
  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }
  // create the google map and append it to the DOM
  // here append to this.refs.map
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map  , {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }
  // ref used to reference a dom element directly
  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}
