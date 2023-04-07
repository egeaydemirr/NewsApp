import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native-gesture-handler';
import FirstClass from '../class/firstClass';
import ContentLoader from 'react-native-easy-content-loader';

const Home = ({route, navigation}) => {
  const [newData, setNewData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(true);

  //setTimeOut ile loaderi ve refreshi 1 saniye gosteriyoruz. Skeletonu 1 saniye gostermek icin
  //CallBack function
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setShowLoader(true);
    fetch('https://api.reddit.com/r/pics/hot.json')
      .then(response => response.json())
      .then(data => {
        const DATA = new FirstClass(data.data);
        setNewData(DATA.getChildren());
      })
      .catch(error => {
        console.error(error);
      });
    setTimeout(() => {
      setRefreshing(false);
      setShowLoader(false);
    }, 1000);
  }, []);

  //Skeloton
  React.useEffect(() => {
    setShowLoader(true);
    fetch('https://api.reddit.com/r/pics/hot.json')
      .then(response => response.json())
      .then(data => {
        const DATA = new FirstClass(data.data);
        setNewData(DATA.getChildren());
      })
      .catch(error => {
        console.error(error);
      });
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  //refresh control scroll view istiyor bu yuzden flatlist yerine scrollview kullandik
  //flatlist icin refreshcontrol kullanmak icin react-native-gesture-handler kullandik

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {showLoader ? ( // show loader if showLoader is true
          <ContentLoader
            animationDuration={400}
            pRows={1}
            pHeight={[100]}
            pWidth={[400]}
            listSize={5}
          />
        ) : (
          newData.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Details', {data: item});
                }}>
                <View style={styles.itemsContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.getTitle()}</Text>
                    <Text style={styles.authorText}>{item.getAuthor()}</Text>
                  </View>
                  <View style={styles.thumbnailContainer}>
                    {item.getOver_18() ? (
                      <Image
                        source={require('../assets/over18.jpeg')}
                        style={styles.thumbnailContainer}
                      />
                    ) : (
                      <Image
                        source={{uri: item.getThumbnail()}}
                        style={styles.thumbnail}
                      />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    padding: 2,
  },
  thumbnailContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ff4500',
  },
  thumbnail: {
    flex: 1,
  },
  authorText: {
    fontSize: 12,
    fontWeight: '300',
    color: '#333333',
    padding: 10,
    marginRight: 16,
  },
});

export default Home;
