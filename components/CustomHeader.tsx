import {SafeAreaView, Text, View, StyleSheet,TouchableOpacity, Animated, TextInput} from "react-native";
import Image = Animated.Image;
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {Link} from "expo-router";
import BottomSheet from "./BottomSheet";
import {useRef} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

const SearchBar=()=>(

    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
        <View style={styles.searchField}>
            <Ionicons name='ios-search' size={20} />
            <TextInput
                style={styles.input}
                placeholder='Restaurants...'/>
        </View>

            <Link href={'/(modal)/filter'} asChild>
                <TouchableOpacity style={styles.optionsButton}>
                    <Ionicons name='options-outline' size={20} color={Colors.primary} style={styles.searchIcon}/>
                </TouchableOpacity>
            </Link>
        </View>
    </View>
)


const CustomHeader = () => {
    const bottomSheetRef=useRef<BottomSheetModal>(null)
    const openModal=()=>{
        bottomSheetRef.current?.present()
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <BottomSheet ref={bottomSheetRef}/>
            <View style={styles.container}>
                <TouchableOpacity onPress={openModal}>
                    <Image
                        style={styles.img}
                        source={require('../assets/images/bike.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={openModal}
                    style={styles.tittleContainer}>
                    <Text style={styles.title}>Deliver ~ Now</Text>
                    <View style={styles.locationName}>
                        <Text style={styles.subtitle}>Chicago</Text>
                        <Ionicons name='chevron-down' size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name='person-outline' size={30} color={Colors.primary}/>
                </TouchableOpacity>
            </View>
            <SearchBar/>
        </SafeAreaView>
    )
}

export default CustomHeader;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        height: 60,
        gap:20,
        backgroundColor: '#FDDCE2',
        alignItems:'center',
        justifyContent:"space-between",
        flexDirection: "row",
        paddingHorizontal:20
    },
    img: {
        width: 50,
        height: 50,
    },
    tittleContainer:{
        flex:1,
    },
    profileButton:{
        backgroundColor:Colors.lightGrey,
        padding:10,
        borderRadius:50
    },
    title:{
        fontSize:14,
    },
    subtitle:{
        fontSize:18,
        fontWeight:"bold"
    },
    locationName:{
        flexDirection:'row',
        alignItems:"center"
    },
    searchContainer:{
        height:60,
        backgroundColor: '#FDDCE2',

    },
    searchSection:{
        flexDirection:"row",
        gap:10,
        flex:1,
        paddingHorizontal:20,
        alignItems:"center"
    },
    searchField:{
        flexDirection:"row",
        alignItems: "center",
        paddingHorizontal:10,
        flex:1,
        backgroundColor:Colors.lightGrey,
        borderRadius:8
    },
    input:{
        padding:10,
        color:Colors.darkGrey
    },
    searchIcon:{
        paddingLeft:10
    },
    optionsButton:{
        padding:10,
        borderRadius:8
    },

})