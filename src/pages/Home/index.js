import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Action from '../../components/Action';


const List = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '350,57',
        date: '17/09/2023',
        type: 0 // despesas,
    },
    {
        id: 2,
        label: 'Pix Cliente',
        value: '45,00',
        date: '13/09/2023',
        type: 1 // receita/entrada/lucro 
    },
    {
        id: 3,
        label: 'Cerveja do Sextou',
        value: '60,00',
        date: '15/09/2023',
        type: 0
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Igor Fronza" />
            <Balance saldo={'15.000,00'} gastos={'-345,00'} />
            <Action/>
            <Text style={styles.title}>Últimas Movimentações:</Text>
            <FlatList
                style={styles.list}
                data={List}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Moviments data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,

    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});
