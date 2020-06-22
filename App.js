import React, { Component } from 'react';
import {
  View,
  Text,
  Alert
} from 'react-native';

import { styles } from './style';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: [],
      activeSlide: 0
    }
  }

  async componentDidMount() {
    try {
      await fetch('https://15euros.nl/api/bier_basic.php')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            content: responseJson
          });
        });
    }
    catch (error) {
      Alert.alert(
        'Connectie gefaald',
        'Er is een fout opgetreden, probeer het later opnieuw. \n' + error,
        [
          { text: 'OK' }
        ]
      );
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.carousel_items}>
        <Text style={styles.carousel_items_text}>{item.id}</Text>
        <Text style={styles.carousel_items_text}>{item.naam}</Text>
        <Text style={styles.carousel_items_text}>{item.brouwer}</Text>
        <Text style={styles.carousel_items_text}>{item.gisting}</Text>
        <Text style={styles.carousel_items_text}>{item.type}</Text>
        <Text style={styles.carousel_items_text}>{item.perc}%</Text>
        <Text style={styles.carousel_items_text}>€{item.inkoop_prijs}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.welcome}>
        <Carousel
          data={this.state.content}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
          onSnapToItem={index => {
            this.setState({
              activeSlide: index
            });
          }}
          containerCustomStyle={styles.carousel}
          contentContainerCustomStyle={styles.contentContainerCustomStyle}
          layout={'default'}
          layoutCardOffset={9}
          sliderWidth={400}
          itemWidth={280}
        />

        <Pagination
          dotsLength={8}
          activeDotIndex={this.state.activeSlide}
          containerStyle={styles.pagination_container}
          dotStyle={styles.pagination_dotStyle}
          inactiveDotStyle={styles.pagination_inactiveDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}