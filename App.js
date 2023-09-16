import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const SpotifyLibrary = () => {
  return (
    <View style={styles.container}>
      <View style={styles}>
        <Text style={styles}></Text>
      </View>

        <View style={styles.section}>

        <Text style={styles.sectionTitle}>Today's biggest hits</Text>
          <ScrollView horizontal={true}>
            <View style={styles.todayshits}>
              <Image source={('https://i.scdn.co/image/ab67706f00000003816bfa84fc1984d377ba5652')} style={styles.hitsImage} />
              <Text style={styles.hits}>Best tracks from the world of</Text>
              <Text style={styles.hitss}>OPM and pop.Cover:Billie ...</Text>
            </View>
            <View style={styles.todayshits}>
              <Image source={('https://i.scdn.co/image/ab67706f000000031817e5fdb5fab133b0c4b24a')} style={styles.hitsImage} />
              <Text style={styles.hits}>Jung Kook is on top of the</Text>
              <Text style={styles.hitss}>Hottest 50!</Text>
            </View>
            <View style={styles.odayshits}>
              <Image source={('https://i.scdn.co/image/ab67706f0000000334bb2b8a34f9f003b1d335f8')} style={styles.hitsImage} />
              <Text style={styles.hits}>Tatak Pinoy</Text>
            </View>
            </ScrollView>

          <Text style={styles.sectionTitle}>Recently played</Text>
          <ScrollView horizontal={true}>
            <View style={styles.playlist}>
              <Image source={('https://dailymix-images.scdn.co/v2/img/4ffd6710617d289699cc0df60cf975e316025119/6/en/large')} style={styles.playlistImage} />
              <Text style={styles.playlistName}>Daily Mix 6</Text>
            </View>
            <View style={styles.playlist}>
              <Image source={('https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc0fcdff62c745083539008a5/5/en/large')} style={styles.playlistImage} />
              <Text style={styles.playlistName}>Daily Mix 5</Text>
            </View>
            <View style={styles.playlist}>
              <Image source={('https://th.bing.com/th/id/OIP.fTlEi1wGFHvUYxfp0LwklQAAAA?pid=ImgDet&rs=1')} style={styles.playlistImage} />
              <Text style={styles.playlistName}>Daily Mix 1</Text>
            </View>
            
            {/* Add more playlists here */}
            </ScrollView>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your top mixes</Text>
          <ScrollView horizontal={true}>
            <View style={styles.artist}>
              <Image source={('https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0')} style={styles.artistImage} />
              <Text style={styles.artistName}>Stephen Sanchez, SZA and </Text>
              <Text style={styles.artistName1}>Adele </Text>
            </View>
            <View style={styles.artist}>
              <Image source={('https://seed-mix-image.spotifycdn.com/v6/img/artist/4IWBUUAFIplrNtaOHcJPRM/en/large')} style={styles.artistImage} />
              <Text style={styles.artistName}>Sam Smith, Dean Lewis and</Text>
              <Text style={styles.artistName}>Adele</Text>
            </View>
            <View style={styles.artist}>
              <Image source={('https://seed-mix-image.spotifycdn.com/v6/img/artist/0du5cEVh5yTK9QJze8zA0C/en/large')} style={styles.artistImage} />
              <Text style={styles.artistName}>Bruno Mars</Text>
              <Text style={styles.artistName}>Jonas Brothers</Text>
            </View>
            {/* Add more artists here */}
          </ScrollView>
        </View>
      

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    maxWidth: '400px',
    maxHeight: '679px',
    marginLeft: '150px',
  },
  hitss: {
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'auto',
    color: 'white',
    marginTop:1,
  },
  hits:{
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'auto',
    color: 'white',
    marginTop: 5,
  },
    todayshits: {
      marginLeft: 8,
      marginRight: 8,
  },
  hitsImage: {
    width: 160,
    height: 140,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 19,
    marginTop: 12,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 11,

  },
  playlist: {
    marginLeft: 8,
    marginRight: 8,
  },
  playlistImage: {
    width: 119,
    height: 119,
    resizeMode: 'cover',
  },
  playlistName: {
    marginTop: 9,
    textAlign: 'auto',
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  artist: {
    marginLeft: 8,
      marginRight: 8,
  },
  artistImage: {
    width: 160,
    height: 140,
    resizeMode: 'cover',
  },
  artistName: {
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'auto',
    color: 'white',
    marginTop:1,
  },
  artistName1: {
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'auto',
    color: 'white',
    marginTop:1,
  },
});

export default SpotifyLibrary;
