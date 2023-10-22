import {useNavigation} from '@react-navigation/native';
import {Routes} from '@/common/consts/routes';
import {RootParamList} from '@/main/navigator/Navigator';

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
