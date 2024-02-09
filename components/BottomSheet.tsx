import { Text, TouchableOpacity, View,StyleSheet} from "react-native";
import {BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal} from "@gorhom/bottom-sheet";
import {forwardRef, useCallback, useMemo, } from "react";
import Colors from "../constants/Colors";
import {Link} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export type  Ref = BottomSheetModal;
const BottomSheet = forwardRef<Ref>((props, ref) => {


    const snaPoints = useMemo(() => ['50%'], [])
    const renderBackdrop = useCallback((props: any) =>
        <BottomSheetBackdrop {...props}
                             appearsOnIndex={0}
                             disappearsOnIndex={-1}
        />, [])
    const {dismiss}=useBottomSheetModal();
    return (
        <BottomSheetModal
            handleIndicatorStyle={{display:'none'}}
            backgroundStyle={{backgroundColor:Colors.grey}}
            overDragResistanceFactor={0}
            backdropComponent={renderBackdrop}
            ref={ref}
            snapPoints={snaPoints}>
            <View style={styles.contentContainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity style={styles.toggleActive}>
                        <Text style={styles.activeText}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggleInactive}>
                        <Text style={styles.inactiveText}>PickUp</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.subHeader}> Your Location</Text>
                <Link href={'/'} asChild>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Ionicons name={'location-outline'} size={20} color={Colors.medium}/>
                            <Text style={{flex:1}}>Current Location</Text>
                            <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                        </View>
                    </TouchableOpacity>
                </Link>

                <Text style={styles.subHeader}> Arrival Time</Text>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Ionicons name={'stopwatch-outline'} size={20} color={Colors.medium}/>
                        <Text style={{flex:1}}>Now</Text>
                        <Ionicons name='chevron-forward' size={20} color={Colors.primary}/>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.button}  onPress={()=>dismiss()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>

        </BottomSheetModal>

    )

})

export default BottomSheet
const styles=StyleSheet.create({

    contentContainer:{
        flex:1
    },
    toggle:{
        flexDirection: "row",
        justifyContent:"center",
        gap:10,
        marginBottom:32
    },
    toggleActive:{
        backgroundColor:Colors.primary,
        padding:8,
        borderRadius:32,
        paddingHorizontal:30,
    },
    activeText:{
        color:'#fff',
        fontWeight:'700'
    },
    toggleInactive:{
        padding:8,
        borderRadius:32,
        paddingHorizontal:30,
    },
    inactiveText:{
        color:Colors.primary,
        fontWeight:"bold"
    },
    subHeader:{
        fontSize:16,
        fontWeight:'600',
        margin :16
    },
    item:{
        flexDirection:"row",
        gap:8,
        alignItems:"center",
        padding:16,
        borderColor:Colors.grey,
        borderWidth:1
    },
    button:{
        margin:16,
        padding:16,
        borderRadius:4,
        alignItems:"center",
        backgroundColor:Colors.primary,
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
    }
})