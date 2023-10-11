import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        trackList: [],
        currentSong: {
            id:'7',
            name:'default',
            author:'noname',
            release_date:'2023',
            genre:'classic',
            album:'non-albumed',
            track_file:'', 
            duration_in_seconds:136
        },
        currentTime: 0,
        currentDuration: '136',
        isLoop: false, 
        isMuted: false,
        isPlaying: false,
        isShuffle: false,
        shuffledTrackList: [],
        isActive: false
    },
    reducers: {
        toggleMute(state, action){
            state.isMuted = !state.isMuted;
        },
        toggleLoop(state, action){
            state.isLoop = !state.isLoop;
        },
        togglePlay(state, action){
            state.isPlaying = action.payload;
        },
        setCurrentDuration(state, action){
            state.currentDuration = action.payload;
        },
        setCurrentSong(state, action){
            state.currentSong = action.payload;
        },
        setCurrentTime(state, action){
            state.currentTime = action.payload;
        },
        setTracks(state,action){
            state.trackList = action.payload;
        },
        toggleShuffle(state, action){
            if(!state.isShuffle){
                const dummy = [...state.trackList];
                shuffleArray(dummy);
                function shuffleArray(array) {
                    for (var i = array.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
                state.shuffledTrackList = dummy;   
            }
            else{
                state.shuffledTrackList = [];
            }
            state.isShuffle = !state.isShuffle;
        },
        playNextSong(state, action){
            const skipTrack=(array)=>{
                const neededId = state.currentSong.id;
                const song = array.find(song=>Number(song.id)===neededId);
                const index = array.indexOf(song);
                array[index+1]?state.currentSong = array[index+1]:''; 
            }
            if(action.payload===false){
                skipTrack(state.trackList);
            }
            else{
                skipTrack(state.shuffledTrackList);
            }
        },
        playPrevSong(state, action){
            const returnToTrack=(array)=>{
                const neededId = state.currentSong.id;
                const song = array.find(song=>Number(song.id)===neededId);
                const index = array.indexOf(song);
                array[index-1]?state.currentSong = array[index-1]:''; 
            }
            if(action.payload===false){
                returnToTrack(state.trackList);
            }
            else{
                returnToTrack(state.shuffledTrackList);
            }
        }
    },
});
export const {toggleMute, toggleLoop, togglePlay, setCurrentDuration, setCurrentSong, setCurrentTime, setTracks,
    toggleShuffle, playNextSong, playPrevSong} = playerSlice.actions;

export default playerSlice.reducer;