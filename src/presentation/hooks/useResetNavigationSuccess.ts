import {Routes} from '@/common/consts/routes';
import {RootParamList} from '@/main/navigator/Navigator';
import {useNavigation} from '@react-navigation/native';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootParamList[Routes.SUCCESS]) {
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
