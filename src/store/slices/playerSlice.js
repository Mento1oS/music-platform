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
        isActive: false,
        onMyPlaylist: false,
        shuffledMyPlaylist: [],
        singers:[],
        years:[],
        genres:[],
        search:'',
        rockTracks:[],
        electricTracks:[],
        classicTracks:[],
        shuffledRock:[],
        shuffledElectric:[],
        shuffledClassic:[],
        isOnCategory: false,
        wasChosenOnCategory:false,
        shuffledCategoryTracks:[],
        filters:{
            author:[],
            genre:[],
            release_date:[]
        },
        currentSorting: 'По умолчанию',
        sortingIsOpen: false,
        sortVariants: ['По умолчанию', 'Сначала старые', 'Сначала новые']
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
                const myDummy = [...action.payload];
                const rockDummy = [...state.rockTracks];
                const electricDummy = [...state.electricTracks];
                const classicDummy = [...state.classicTracks];
                shuffleArray(dummy);
                shuffleArray(myDummy);
                shuffleArray(rockDummy);
                shuffleArray(electricDummy);
                shuffleArray(classicDummy);
                function shuffleArray(array) {
                    for (var i = array.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
                state.shuffledMyPlaylist = myDummy;
                state.shuffledTrackList = dummy;
                state.shuffledRock=rockDummy;
                state.shuffledElectric = electricDummy;
                state.shuffledClassic = classicDummy;   
            }
            else{
                state.shuffledMyPlaylist = [];
                state.shuffledTrackList = [];
                state.shuffledRock = [];
                state.shuffledElectric = [];
                state.shuffledClassic = [];  
            }
            state.isShuffle = !state.isShuffle;
        },
        findCategoryArray(state, action){
            if(state.rockTracks.find(song=>song.id===state.currentSong.id)){
                state.shuffledCategoryTracks = state.shuffledRock;
            }
            if(state.electricTracks.find(song=>song.id===state.currentSong.id)){
                state.shuffledCategoryTracks = state.shuffledElectric;
            }
            if(state.classicTracks.find(song=>song.id===state.currentSong.id)){
              state.shuffledCategoryTracks = state.shuffledClassic;
            }
        },
        playNextSong(state, action){
            const skipTrack=(array)=>{
                const neededId = state.currentSong.id;
                const song = array.find(song=>Number(song.id)===neededId);
                const index = array.indexOf(song);
                array[index+1]?state.currentSong = array[index+1]:''; 
            }
            if(!state.isShuffle){
                skipTrack(action.payload?action.payload:state.trackList);
            }
            else{
                skipTrack(state.wasChosenOnCategory?state.shuffledCategoryTracks:state.onMyPlaylist?state.shuffledMyPlaylist:state.shuffledTrackList);
            }
        },
        playPrevSong(state, action){
            const returnToTrack=(array)=>{
                const neededId = state.currentSong.id;
                const song = array.find(song=>Number(song.id)===neededId);
                const index = array.indexOf(song);
                array[index-1]?state.currentSong = array[index-1]:''; 
            }
            if(!state.isShuffle){
                returnToTrack(action.payload?action.payload:state.trackList);
            }
            else{
                returnToTrack(state.wasChosenOnCategory?state.shuffledCategoryTracks:state.onMyPlaylist?state.shuffledMyPlaylist:state.shuffledTrackList);
            }
        },
        isOnMyPlayList(state, action){
            state.onMyPlaylist = action.payload;
        },
        addSongToMyShuffledPlaylist(state, action){
            state.shuffledMyPlaylist.push(action.payload);
        },
        deleteSongFromMyShuffledPlaylist(state, action){
            state.shuffledMyPlaylist = state.shuffledMyPlaylist.filter(elem=>elem.id!==action.payload.id);
        },
        setSingers(state, action){
            state.trackList.map((elem)=>{
                !state.singers.includes(elem.author)?state.singers.push(elem.author):'';
            })
        },
        setYears(state, action){
            state.trackList.map((elem)=>{
                !state.years.includes(elem.release_date)?state.years.push(elem.release_date):'';
            })
        },
        setGenres(state, action){
            state.trackList.map((elem)=>{
                !state.genres.includes(elem.genre)?state.genres.push(elem.genre):'';
            })
        },
        setSearch(state, action){
            state.search = action.payload;
        },
        setElectricTracks(state, action){
            state.electricTracks = action.payload;
        },
        setRockTracks(state, action){
            state.rockTracks = action.payload;
        },
        setClassicTracks(state, action){
            state.classicTracks = action.payload;
        },
        setIsOnCategory(state, action){
            state.isOnCategory = action.payload;
        },
        setWasChosenOnCategory(state, action){
            state.wasChosenOnCategory = action.payload;
        },
        addFilter(state, action){
            state.filters[action.payload.key].push(action.payload.elem);
        },
        removeFilter(state, action){
            const index = state.filters[action.payload.key].indexOf(action.payload.elem);
            state.filters[action.payload.key].splice(index,1);
        },
        setCurrentSorting(state, action){
            state.currentSorting = action.payload;
        },
        toggleSortingIsOpen(state, action){
            state.sortingIsOpen = !state.sortingIsOpen;
        }
    },
});
export const {toggleMute, toggleLoop, togglePlay, setCurrentDuration, setCurrentSong, setCurrentTime, setTracks,
    toggleShuffle, playNextSong, playPrevSong, isOnMyPlayList, deleteSongFromMyShuffledPlaylist, addSongToMyShuffledPlaylist,
    setGenres, setSingers, setYears, setSearch, setClassicTracks, setElectricTracks, setRockTracks, setIsOnCategory,
    setWasChosenOnCategory, findCategoryArray, addFilter, removeFilter, setCurrentSorting, toggleSortingIsOpen} = playerSlice.actions;

export default playerSlice.reducer;