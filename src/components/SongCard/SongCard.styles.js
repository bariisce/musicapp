import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 70
    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    info_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    year: {
        fontSize: 12,
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    content_container: {
        flexDirection: 'row',
    },
    soldout_title: {
        color: 'red',
        fontSize: 12,
    },
});