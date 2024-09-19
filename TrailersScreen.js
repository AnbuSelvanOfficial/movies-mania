import React, { useRef, useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, StatusBar, Button, TouchableOpacity} from "react-native";
import { Video } from 'expo-av';

function TrailersScreen() {
    const videoRefs = {
        video1: useRef(null),
        video2: useRef(null),
        video3: useRef(null),
        video4: useRef(null),
        video5: useRef(null)
    };

    const [videoStatus, setVideoStatus] = useState({
        video1: false,
        video2: false,
        video3: false,
        video4: false,
        video5: false
    });

    useEffect(() => {
        // Update video status periodically
        const intervalId = setInterval(updateVideoStatus, 500);
        return () => clearInterval(intervalId);
    }, []);

    const updateVideoStatus = async () => {
        const statuses = {};
        for (const key in videoRefs) {
            if (videoRefs[key].current) {
                const status = await videoRefs[key].current.getStatusAsync();
                statuses[key] = status.isPlaying;
            }
        }
        setVideoStatus(statuses);
    };

    const handlePlayVideo = async (key) => {
        // Pause all videos except the one being played
        for (const refKey in videoRefs) {
            if (refKey !== key && videoRefs[refKey].current) {
                await videoRefs[refKey].current.pauseAsync();
            }
        }
        // Toggle play/pause for the selected video
        if (videoRefs[key].current) {
            const status = await videoRefs[key].current.getStatusAsync();
            if (status.isPlaying) {
                await videoRefs[key].current.pauseAsync();
            } else {
                await videoRefs[key].current.playAsync();
            }
        }
    };

    const handleSeekForward = async (key) => {
        if (videoRefs[key].current) {
            const status = await videoRefs[key].current.getStatusAsync();
            const newPosition = status.positionMillis + 10000; // 10 seconds forward
            await videoRefs[key].current.setPositionAsync(newPosition);
        }
    };

    const handleSeekBackward = async (key) => {
        if (videoRefs[key].current) {
            const status = await videoRefs[key].current.getStatusAsync();
            const newPosition = Math.max(status.positionMillis - 10000, 0); // 10 seconds backward
            await videoRefs[key].current.setPositionAsync(newPosition);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
            
            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>LEO</Text>
                <Text style={styles.videoSubTitle}>LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander</Text>
                
                <Video
                    ref={videoRefs.video1}
                    source={require('./Trailers/Trailer 1.mp4')}
                    style={styles.video}
                    resizeMode="contain"
                    isLooping
                />

                <View style={styles.seekButtons}>
                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekBackward('video1')}>
                        <Text style={styles.seekButtonText}>-10s</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => handlePlayVideo('video1')}>
                    <Text style={styles.ButtonText}>{videoStatus.video1 ? "Pause" : "Play"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekForward('video1')}>
                        <Text style={styles.seekButtonText}>+10s</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.videoContainer}>
            <Text style={styles.videoTitle}>ARANMANAI 4</Text>
                <Text style={styles.videoSubTitle}>Aranmanai 4 - Official Trailer | Sundar.C | Tamannaah | Raashii Khanna | Hiphop Tamizha</Text>
                <Video
                    ref={videoRefs.video2}
                    source={require('./Trailers/Trailer 2.mp4')}
                    style={styles.video}
                    resizeMode="contain"
                    isLooping
                />
                <View style={styles.seekButtons}>
                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekBackward('video2')}>
                        <Text style={styles.seekButtonText}>-10s</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => handlePlayVideo('video2')}>
                    <Text style={styles.ButtonText}>{videoStatus.video2 ? "Pause" : "Play"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekForward('video2')}>
                        <Text style={styles.seekButtonText}>+10s</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>ELECTION</Text>
                <Text style={styles.videoSubTitle}>Election - Official Trailer | Vijay Kumar | Preethi Asrani | Thamizh | Divo Music</Text>
                <Video
                    ref={videoRefs.video3}
                    source={require('./Trailers/Trailer 3.mp4')}
                    style={styles.video}
                    resizeMode="contain"
                    isLooping
                />
                
                <View style={styles.seekButtons}>
                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekBackward('video3')}>
                        <Text style={styles.seekButtonText}>-10s</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => handlePlayVideo('video3')}>
                    <Text style={styles.ButtonText}>{videoStatus.video3 ? "Pause" : "Play"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekForward('video3')}>
                        <Text style={styles.seekButtonText}>+10s</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>INGA NAANTHA KING</Text>
                <Text style={styles.videoSubTitle}>Inga Naan Thaan Kingu - Official Trailer | Santhanam | D. Imman | Anbuchezhian | Sushmita</Text>
                <Video
                    ref={videoRefs.video4}
                    source={require('./Trailers/Trailer 4.mp4')}
                    style={styles.video}
                    resizeMode="contain"
                    isLooping
                />
                <View style={styles.seekButtons}>
                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekBackward('video4')}>
                        <Text style={styles.seekButtonText}>-10s</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => handlePlayVideo('video4')}>
                    <Text style={styles.ButtonText}>{videoStatus.video4 ? "Pause" : "Play"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekForward('video4')}>
                        <Text style={styles.seekButtonText}>+10s</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.videoContainer}>
                <Text style={styles.videoTitle}>MAAYA ONE</Text>
                <Text style={styles.videoSubTitle}>MaayaOne Teaser | Sundeep Kishn | CV Kumar | Santhosh Narayanan | Anil Sunkara | AK Entertainments</Text>
                <Video
                    ref={videoRefs.video5}
                    source={require('./Trailers/Trailer 5.mp4')}
                    style={styles.video}
                    resizeMode="contain"
                    isLooping
                />
                <View style={styles.seekButtons}>
                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekBackward('video5')}>
                        <Text style={styles.seekButtonText}>-10s</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button} onPress={() => handlePlayVideo('video5')}>
                    <Text style={styles.ButtonText}>{videoStatus.video5 ? "Pause" : "Play"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonSeek} onPress={() => handleSeekForward('video5')}>
                        <Text style={styles.seekButtonText}>+10s</Text>
                    </TouchableOpacity>
                </View>

            </View>

            
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    HeadText: {
        alignSelf: 'center',
        fontSize: 30,
    },  
    videoContainer: {
        marginTop: 10,
        marginBottom: 10,
        //alignItems: "center",
        // borderWidth: 1,
        // borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
    },
    videoTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    videoSubTitle: {
        fontSize: 15,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 5,
    },
    video: {
        width: "100%",
        aspectRatio: 2,
        height: 200,
    },
    Button: {
        width: 100, 
        height: 40,
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        padding: 10,
    },
    ButtonText: {
        fontSize: 16, 
        color: 'white',
    },

    seekButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    seekButton: {
        backgroundColor: 'gray',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    seekButtonText: {
        fontSize: 14,
        color: 'white',
    },

    ButtonSeek: {
        width: 50, 
        height: 40,
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 5,
        padding: 10,        
    }
});

export default TrailersScreen;
