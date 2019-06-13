import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from '../components/Login/Login';
import Web from '../components/web/web';
import OtpScreen from '../components/OtpScreen/OtpScreen'
import Pitch from '../components/Pitch/Pitch';
import OfferScreen from '../components/OfferScreen/OfferScreen';
import Looking from '../components/LookingFor/Looking';

const MyApp = createStackNavigator({
    login:{

        screen: Login,
        navigationOptions: {
            title: 'Home',
            header: null 
          }
    },
    web:{

        screen:Web
    },
    otp:{

        screen:OtpScreen
    },
    pitch:{

        screen:Pitch
    },
    OfferScreen:{
        
        screen:OfferScreen
    },
    Looking:{
        screen:Looking
    }

});

export default createAppContainer(MyApp);
