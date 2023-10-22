import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '@/main/navigator';
import {Routes} from '@/main/navigator';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: AuthStackParamList[Routes.SUCCESS]) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: Routes.LOGIN,
        },
        {
          name: Routes.SUCCESS,
          params,
        },
      ],
    });
  }

  return {reset};
}
