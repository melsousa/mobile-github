import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import {styles} from './styles'

export default function Order(){

    return(
        <>
             <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Finalizando compra</Text>
                    </View>
                
                    <View style={styles.body}>
                    
                        <Text style={styles.titleOrder}>Itens da compra:</Text>
                        <Text style={styles.subtitle}>Subtotal dos produtos                          R$ <Text >1200,00</Text></Text>
                        <Text style={styles.subtitle}>Taxa de Frete                                       R$ <Text>20,00</Text></Text>
                        <Text style={styles.subtitle}>Subtotal de Descontos de Envio           R$<Text> -20,00</Text></Text>
                        <Text style={styles.title}>Total do pedido                                         R$ <Text style={styles.quantidade}>1200,00</Text></Text>

                        
                    </View>

                    <View style={styles.pay}>
                        <Text style={styles.method}>Método de pagamento</Text>

                        <View style={styles.listaPay}>
                            <Text>PIX</Text>
                        </View>

                        <TouchableOpacity style={styles.btnConfirmation} >
                            <Text style={styles.bntConfirmationText}>
                                Finalizar...
                            </Text>

                    </TouchableOpacity>
                    </View>
                    
                </View>
            </SafeAreaView>
           

        </>
    )
}