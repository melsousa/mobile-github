import {NavigationContainer} from '@react-navigation/native'
import MyStack from './Stack.routes';

export default function Routes(){
    return(

        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}