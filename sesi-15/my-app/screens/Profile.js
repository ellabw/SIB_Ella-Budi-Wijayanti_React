import { Image, StyleSheet, Text, View } from 'react-native'


const MarginTop = () => <View style={{ marginTop: 10 }} />
export default function Profile({ route }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>
                    Welcome to Profile Pages
                </Text>
                <Text>
                    {route.params.name}
                </Text>
            </View>
            <MarginTop />
            <View style={{ alignItems: "center" }}>
                <Text style={{fontSize: 15, color:"black"}}>
                    Nama: Ella Budi Wijayanti
                </Text>
                <Text style={{fontSize: 15, color:"black"}}>
                    Kode Peserta: RCTN-KS05-005
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FBC8F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#002B5B',
        fontSize: 30
    },
    rowButton: {
        flexDirection: 'row',
        margin: 1
    },
});

