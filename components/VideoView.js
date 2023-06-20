import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

const VideoView = ({isVisible, sourceUrl}) => {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <View style={{ position: 'absolute', zIndex: 5, width: '100%', height: '100%' }}>
        {showVideo ? (
            <>
                <TouchableOpacity
                    style={{
                    position: 'absolute',
                    zIndex: 5,
                    top: 15,
                    right: 10,
                    height: 35,
                    width: 42,
                    borderRadius: 5,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    justifyContent: 'center',
                    }}
                    onPress={() => {
                        setShowVideo(!showVideo)
                        isVisible(!showVideo)
                    }}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 26}}>X</Text>
                </TouchableOpacity>
                <WebView
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: "https://player.vimeo.com/video/668520714?h=c8d2e5f1d4&amp;badge=0&amp;autoplay=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}}
                />
            </>
        ) : null}
    </View>
  );
};

export default VideoView;
