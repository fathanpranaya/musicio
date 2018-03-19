import React from 'react';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';
import { Card, CardSection, Button } from '../common/';

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>

                <View style={styles.headerContentStyle}>
                    <Text style={{fontSize: 18}}>{title}</Text>
                    <Text>{artist}</Text>
                </View>

            </CardSection>

            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{uri: image}}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Details
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1,
    },

});

export default AlbumDetail;
